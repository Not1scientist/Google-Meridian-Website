import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Article } from '../types';

const ARTICLES: Article[] = [
  {
    id: '1',
    title: "Understanding Anxiety in a Post-Pandemic World",
    category: "Mental Wellness",
    summary: "As we navigate the new normal, social anxiety and general uncertainty have spiked. Here are 5 evidence-based strategies to cope.",
    date: "Oct 12, 2023",
    imageUrl: "https://picsum.photos/800/400?random=20"
  },
  {
    id: '2',
    title: "The Science of Attachment: How Childhood Affects Relationships",
    category: "Relationships",
    summary: "Exploring attachment theory and how understanding your style can revolutionize your romantic partnerships.",
    date: "Sep 28, 2023",
    imageUrl: "https://picsum.photos/800/400?random=21"
  },
  {
    id: '3',
    title: "Signs Your Child Might Need Professional Support",
    category: "Parenting",
    summary: "Distinguishing between normal developmental phases and signs that suggest a need for behavioral intervention.",
    date: "Sep 15, 2023",
    imageUrl: "https://picsum.photos/800/400?random=22"
  }
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-meridian-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl font-bold mb-4">Insights & Resources</h1>
          <p className="text-meridian-200 max-w-2xl text-lg">
            Expert articles, guides, and news from the Meridian clinical team to support your journey to wellness.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ARTICLES.map(article => (
            <article key={article.id} className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4 h-48">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex gap-2 text-xs font-semibold uppercase tracking-wider text-accent-600 mb-2">
                <span>{article.category}</span>
              </div>
              <h2 className="font-serif text-xl font-bold text-meridian-900 mb-3 group-hover:text-accent-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-meridian-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                {article.summary}
              </p>
              <div className="mt-auto flex items-center gap-4 text-xs text-meridian-400 border-t border-meridian-100 pt-4">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {article.date}</span>
                <span className="flex items-center gap-1"><User className="h-3 w-3" /> Meridian Clinical Team</span>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-meridian-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl font-bold text-meridian-900 mb-4">Stay Connected</h3>
          <p className="text-meridian-600 mb-8 max-w-lg mx-auto">
            Join our monthly newsletter for mental health tips, practice news, and wellness resources delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 rounded-lg border border-meridian-200 focus:ring-2 focus:ring-accent-500 outline-none"
            />
            <button className="bg-meridian-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-meridian-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;