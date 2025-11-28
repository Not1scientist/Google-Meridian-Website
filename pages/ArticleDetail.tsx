import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { ARTICLES } from '../services/articleContent';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? ARTICLES[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-meridian-50">
        <h2 className="text-2xl font-serif font-bold text-meridian-900 mb-4">Article Not Found</h2>
        <Link to="/resources" className="text-accent-600 hover:underline">Return to Resources</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-500">
      {/* Hero Image */}
      <div className="h-[400px] w-full overflow-hidden relative bg-meridian-900">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-meridian-900 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
          <div className="container mx-auto">
             <Link to="/resources" className="inline-flex items-center gap-2 text-meridian-200 hover:text-white mb-6 text-sm font-bold uppercase tracking-wider transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Articles
            </Link>
            <div className="flex items-center gap-4 mb-4 text-accent-400 text-sm font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1"><Tag className="h-4 w-4" /> {article.category}</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {article.date}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight shadow-sm max-w-4xl">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Sidebar / Author Info */}
          <div className="lg:w-1/4 order-2 lg:order-1">
            <div className="sticky top-24">
              <div className="bg-meridian-50 p-6 rounded-xl border border-meridian-100">
                <h4 className="font-bold text-meridian-900 uppercase tracking-wider text-xs mb-4">Written By</h4>
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <User className="h-6 w-6 text-accent-500" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-lg text-meridian-900">{article.author}</p>
                    <p className="text-xs text-meridian-600 font-medium leading-tight mt-1">{article.authorTitle}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-meridian-900 uppercase tracking-wider text-xs mb-4">Share This</h4>
                <div className="flex gap-2">
                   {/* Mock Social Share Buttons */}
                   <button className="bg-meridian-100 hover:bg-meridian-200 text-meridian-600 px-3 py-2 rounded text-xs font-bold transition-colors">Facebook</button>
                   <button className="bg-meridian-100 hover:bg-meridian-200 text-meridian-600 px-3 py-2 rounded text-xs font-bold transition-colors">LinkedIn</button>
                </div>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="lg:w-3/4 order-1 lg:order-2">
            <div className="prose prose-lg prose-meridian max-w-none text-meridian-800 leading-relaxed">
              <p className="lead text-xl text-meridian-600 font-serif italic border-l-4 border-accent-500 pl-6 mb-10">
                {article.summary}
              </p>
              {article.content.map((paragraph, idx) => (
                <p key={idx} className="mb-6">{paragraph}</p>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-meridian-100 bg-meridian-50 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-meridian-900 mb-2">Need support with this?</h3>
                <p className="text-meridian-600">Our team is ready to help you navigate your journey.</p>
              </div>
              <Link 
                to="/contact" 
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;