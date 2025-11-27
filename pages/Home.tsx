import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Brain, Heart, Star } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const outcomeData = [
  { month: 'Jan', improvement: 20 },
  { month: 'Feb', improvement: 35 },
  { month: 'Mar', improvement: 50 },
  { month: 'Apr', improvement: 65 },
  { month: 'May', improvement: 78 },
  { month: 'Jun', improvement: 85 },
];

const HomePage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-meridian-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
            alt="Calm office environment" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-meridian-900 via-meridian-900/90 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl text-white">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Compassionate Care for <br/>
              <span className="text-accent-500">Every Stage of Life</span>
            </h1>
            <p className="text-lg md:text-xl text-meridian-100 mb-8 leading-relaxed font-light">
              At Meridian Behavioral Health, we bridge the gap between science and compassion. Our experts provide evidence-based therapy to help you and your family thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-accent-500 hover:bg-accent-600 text-white text-center px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                Schedule Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/team" 
                className="bg-transparent border-2 border-white text-white text-center px-8 py-4 rounded-full font-semibold transition-all hover:bg-white hover:text-meridian-900"
              >
                Find a Therapist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-meridian-900 mb-4">Comprehensive Behavioral Health</h2>
            <p className="text-meridian-600">
              We offer a continuum of care designed to meet the unique needs of individuals, couples, and families.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Users className="h-8 w-8 text-accent-500" />, 
                title: "Individual & Couples Therapy", 
                desc: "Navigate life's challenges, improve relationships, and foster personal growth with our licensed therapists." 
              },
              { 
                icon: <Brain className="h-8 w-8 text-accent-500" />, 
                title: "Trauma & EMDR Therapy", 
                desc: "Specialized treatment using Eye Movement Desensitization and Reprocessing (EMDR) to heal from past trauma and PTSD." 
              },
              { 
                icon: <Heart className="h-8 w-8 text-accent-500" />, 
                title: "Child & Adolescent Services", 
                desc: "Specialized support for young minds, addressing developmental, emotional, and behavioral concerns." 
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-meridian-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-meridian-100 group">
                <div className="mb-6 bg-white p-4 rounded-full w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-meridian-800 mb-3">{service.title}</h3>
                <p className="text-meridian-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="text-accent-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Data Visualization */}
      <section className="py-20 bg-meridian-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-meridian-900 mb-6">
                Data-Driven Outcomes,<br/>Human-Centered Approach
              </h2>
              <p className="text-meridian-700 mb-6 leading-relaxed">
                We believe in accountability in care. Our "Science of Change" model ensures that therapy is not just a conversation, but a measurable path to improvement. 
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Evidence-based treatment modalities (CBT, DBT, ACT)",
                  "Regular progress monitoring",
                  "Collaborative care with primary physicians",
                  "Highly vetted, doctoral-level clinicians"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-meridian-800 font-medium">
                    <div className="h-2 w-2 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-meridian-900 underline font-semibold decoration-accent-500 decoration-2 underline-offset-4 hover:text-accent-600">
                Read more about our methodology
              </Link>
            </div>
            
            <div className="md:w-1/2 w-full bg-white p-6 rounded-2xl shadow-lg border border-meridian-100">
              <h4 className="text-sm font-bold text-meridian-500 uppercase tracking-wider mb-6">Patient Reported Improvement (6 Months)</h4>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={outcomeData}>
                    <defs>
                      <linearGradient id="colorImp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#d69e2e" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#d69e2e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} unit="%" />
                    <Tooltip 
                      contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="improvement" 
                      stroke="#b7791f" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorImp)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-meridian-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Users size={400} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-8">
              {[1,2,3,4,5].map(s => <Star key={s} className="h-6 w-6 text-accent-500 fill-current" />)}
            </div>
            <h3 className="font-serif text-2xl md:text-4xl italic leading-relaxed mb-8">
              "The level of professionalism and genuine care I received at Meridian was life-changing. My therapist didn't just listen; she gave me the tools to rebuild my life."
            </h3>
            <p className="font-bold text-lg text-accent-400">— Sarah M., Patient</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;