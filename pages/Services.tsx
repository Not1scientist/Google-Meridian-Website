import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Wallet } from 'lucide-react';
import { PROGRAMS } from '../services/programContent';

const ServicesPage: React.FC = () => {
  const programList = Object.values(PROGRAMS);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-meridian-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-meridian-900 mb-4">Therapy & Programs</h1>
          <p className="max-w-2xl mx-auto text-meridian-700 text-lg">
            We provide comprehensive, specialized care tailored to your life stage and unique needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programList.map((program) => (
            <Link 
              key={program.id} 
              to={`/programs/${program.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-meridian-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-meridian-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={program.heroImage} 
                  alt={program.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-meridian-900 mb-3 group-hover:text-accent-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-meridian-600 mb-6 leading-relaxed flex-1">
                  {program.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-accent-600 font-bold text-sm uppercase tracking-wider mt-auto group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Insurance & Rates Section */}
      <div className="bg-meridian-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-meridian-900 mb-6">Rates & Insurance Coverage</h2>
            <p className="text-meridian-700 text-lg">
              We strive to make mental health care accessible. We accept most major insurance plans and offer transparent cash rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Insurance Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-meridian-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-accent-100 p-3 rounded-full">
                  <ShieldCheck className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-meridian-900">Accepted Insurance</h3>
              </div>
              <p className="text-meridian-600 mb-6">We are in-network with the following commercial and government plans:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Aetna PPO", "Ambetter", "Anthem BCBS PPO", "Anthem Federal", 
                  "Cigna PPO", "GEHA", "Medicaid FFS", "Medicare",
                  "Molina Healthcare", "Optum", "Tricare", "United Healthcare"
                ].map((ins, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-meridian-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                    {ins}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cash Rates Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-meridian-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-meridian-100 p-3 rounded-full">
                  <Wallet className="h-8 w-8 text-meridian-700" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-meridian-900">Self-Pay Rates</h3>
              </div>
              <p className="text-meridian-600 mb-6">For clients preferring to pay out-of-pocket, we offer the following flat rates:</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-meridian-50 rounded-lg">
                  <span className="font-semibold text-meridian-900">Initial Assessment (55 min)</span>
                  <span className="font-bold text-accent-600 text-lg">$150</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-meridian-50 rounded-lg">
                  <span className="font-semibold text-meridian-900">Follow-up Session (55 min)</span>
                  <span className="font-bold text-accent-600 text-lg">$150</span>
                </div>
              </div>
              <p className="text-xs text-meridian-400 mt-6 italic">
                *Medication management is typically covered by insurance similar to other medical visits. Please contact us for specific medication management cash rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;