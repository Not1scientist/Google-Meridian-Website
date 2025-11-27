import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react';
import { PROGRAMS } from '../services/programContent';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const program = id ? PROGRAMS[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-meridian-50">
        <h2 className="text-2xl font-serif font-bold text-meridian-900 mb-4">Program Not Found</h2>
        <Link to="/programs" className="text-accent-600 hover:underline">Return to Programs</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-500">
      {/* Hero Header */}
      <div className="relative h-[400px] bg-meridian-900 overflow-hidden">
        <img 
          src={program.heroImage} 
          alt={program.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-meridian-900 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-16">
          <Link to="/programs" className="text-meridian-200 hover:text-white flex items-center gap-2 mb-6 text-sm font-semibold uppercase tracking-wider transition-colors w-fit">
            <ArrowLeft className="h-4 w-4" /> Back to Programs
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 shadow-sm">{program.title}</h1>
          <p className="text-xl text-meridian-100 max-w-2xl font-light leading-relaxed">
            {program.shortDescription}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-meridian-900 mb-6">Overview</h2>
              <div className="prose prose-lg text-meridian-700 whitespace-pre-wrap leading-relaxed">
                {program.fullDescription}
              </div>
            </div>

            <div className="bg-meridian-50 rounded-2xl p-8 border border-meridian-100">
              <h3 className="font-serif text-2xl font-bold text-meridian-900 mb-6">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent-500 flex-shrink-0" />
                    <span className="font-medium text-meridian-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-meridian-900 mb-6">How It Helps</h3>
              <ul className="space-y-4">
                {program.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent-500 mt-2.5 flex-shrink-0" />
                    <span className="text-lg text-meridian-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {program.faqs.length > 0 && (
              <div className="border-t border-meridian-100 pt-12">
                <h3 className="font-serif text-2xl font-bold text-meridian-900 mb-8">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {program.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-lg">
                      <h4 className="font-bold text-meridian-900 mb-2 flex gap-3">
                        <MessageCircle className="h-5 w-5 text-meridian-400 mt-1 flex-shrink-0" />
                        {faq.question}
                      </h4>
                      <p className="text-meridian-600 pl-8 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-meridian-100">
                <h3 className="font-serif text-2xl font-bold text-meridian-900 mb-4">Start Your Journey</h3>
                <p className="text-meridian-600 mb-6">
                  Ready to take the next step? Our compassionate intake team is here to answer your questions.
                </p>
                <Link 
                  to="/contact" 
                  className="block w-full bg-accent-500 hover:bg-accent-600 text-white text-center font-bold py-4 rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-0.5 mb-4"
                >
                  Schedule Appointment
                </Link>
                <div className="text-center">
                  <p className="text-sm text-meridian-500 mb-1">Or call us directly at</p>
                  <p className="font-bold text-meridian-900 text-lg">(702) 604-2498</p>
                </div>
              </div>

              <div className="bg-meridian-900 text-white p-8 rounded-2xl">
                <h4 className="font-serif text-xl font-bold mb-4">Other Programs</h4>
                <nav className="space-y-2">
                  {Object.values(PROGRAMS).filter(p => p.id !== id).slice(0, 5).map(p => (
                    <Link 
                      key={p.id} 
                      to={`/programs/${p.id}`} 
                      className="block py-2 text-meridian-200 hover:text-white hover:pl-2 transition-all border-b border-meridian-800 last:border-0"
                    >
                      {p.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;