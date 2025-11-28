import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Brain, Heart, Star } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const outcomeData = [
  { label: 'Start', improvement: 20 },
  { label: 'Month 1', improvement: 35 },
  { label: 'Month 2', improvement: 50 },
  { label: 'Month 3', improvement: 65 },
  { label: 'Month 4', improvement: 78 },
  { label: 'Month 6', improvement: 85 },
];

const HomePage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-meridian-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
            alt="Warm and professional therapy office" 
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
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-accent-100 text-accent-700 text-xs font-bold px-3 py-1 rounded-full border border-accent-200 uppercase tracking-wider">APA Aligned</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-meridian-900 mb-6">
                Evidence-Based Care, <br/>Grounded in National Research
              </h2>
              <p className="text-meridian-700 mb-6 leading-relaxed">
                Decades of research summarized by the American Psychiatric Association show that most people who receive psychotherapy experience meaningful improvement, and <strong>about 75 percent of people who enter psychotherapy show some benefit from it.</strong> These findings come from national research studies and are not specific to Meridian.
              </p>
              <p className="text-meridian-700 mb-6 leading-relaxed">
                Our clinicians use evidence-based approaches such as EMDR, CBT, ACT, and DBT to align your care with this body of research, while tailoring treatment to your specific needs.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Primary modalities: EMDR, CBT & ACT",
                  "Integrated Psychiatry & Therapy",
                  "Therapy tailored to specific diagnoses",
                  "Regular progress monitoring",
                  "Collaborative care with primary physicians"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-meridian-800 font-medium">
                    <div className="h-2 w-2 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-meridian-500 italic">
                Source: American Psychiatric Association, "What is Psychotherapy?"
              </p>
            </div>
            
            <div className="md:w-1/2 w-full bg-white p-6 rounded-2xl shadow-lg border border-meridian-100">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-sm font-bold text-meridian-600 uppercase tracking-wider leading-tight">Typical Symptom Improvement in Psychotherapy (Research Studies)</h4>
                <span className="bg-meridian-100 text-meridian-600 text-[10px] font-bold px-2 py-1 rounded shrink-0 ml-2">NATIONAL DATA</span>
              </div>
              
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
                    <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} hide />
                    <Tooltip 
                      contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                      formatter={(value: any) => [`${value}% Improvement`, 'Outcomes']}
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
              
              <div className="mt-4 pt-4 border-t border-meridian-50 text-center">
                <p className="text-xs text-meridian-500 font-medium leading-tight max-w-sm mx-auto">
                  *Illustrative curve based on national psychotherapy research; <span className="text-meridian-700 font-bold">not Meridian-specific outcome data</span>. Individual results vary based on diagnosis and treatment plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="py-20 bg-meridian-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Users size={400} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
             <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Patient Reviews</h2>
             <div className="flex justify-center items-center gap-2 text-accent-400">
                <div className="flex">
                  {[1,2,3,4,5].map(s => <Star key={s} className="h-5 w-5 fill-current" />)}
                </div>
                <span className="font-bold text-xl ml-2 text-white">4.60 Overall Rating</span>
             </div>
             <p className="text-meridian-300 text-sm mt-2">Real verified patient reviews</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Review 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors flex flex-col">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 text-accent-500 fill-current" />)}
              </div>
              <p className="italic text-lg leading-relaxed mb-6 text-meridian-50 flex-1">
                "She really took the time to listen and understand me. I felt at ease during & after the appointment. I would totally recommend seeing her. No complaints."
              </p>
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <p className="font-bold text-accent-400">Courtney S.</p>
                <div className="flex items-center gap-2 text-xs text-meridian-300">
                  <span>Verified Patient</span>
                  <span>•</span>
                  <span>June 19, 2024</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors flex flex-col">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 text-accent-500 fill-current" />)}
              </div>
              <p className="italic text-lg leading-relaxed mb-6 text-meridian-50 flex-1">
                "This was my first appointment with her. She seemed very kind and compassionate and genuinely cared about what I said and listen sometimes that's all person is looking for is to be heard."
              </p>
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <p className="font-bold text-accent-400">Susan K.</p>
                <div className="flex items-center gap-2 text-xs text-meridian-300">
                  <span>Verified Patient</span>
                  <span>•</span>
                  <span>May 2, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;