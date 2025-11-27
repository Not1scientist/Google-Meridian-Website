import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { generateAssistantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello, I am the Meridian Assistant. How can I help you find the care you need today?', timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const historyText = messages.map(m => `${m.role}: ${m.text}`).join('\n');
    
    try {
      const responseText = await generateAssistantResponse(inputValue, historyText);
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 mb-4 overflow-hidden border border-meridian-200 flex flex-col max-h-[500px] animate-in fade-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-meridian-800 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent-500" />
              <div>
                <h3 className="font-serif font-semibold text-lg leading-tight">Meridian Assistant</h3>
                <p className="text-xs text-meridian-200">Powered by AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-meridian-700 p-1 rounded transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-meridian-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-meridian-600 text-white rounded-tr-none' 
                      : 'bg-white text-meridian-800 border border-meridian-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg rounded-tl-none border border-meridian-100 shadow-sm flex items-center gap-2 text-meridian-500 text-sm">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-meridian-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about our services..."
              className="flex-1 bg-meridian-50 border-transparent focus:border-meridian-300 focus:bg-white focus:ring-0 rounded-md px-3 py-2 text-sm transition-all outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="bg-accent-500 hover:bg-accent-600 text-white p-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-meridian-800 hover:bg-meridian-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-105"
        >
          <span className="hidden group-hover:block whitespace-nowrap font-medium pr-2">Ask Meridian AI</span>
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default GeminiChat;