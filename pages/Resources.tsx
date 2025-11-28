import React from 'react';
import { ShieldCheck, Wallet, Phone, HeartHandshake, FileText, Brain, Stethoscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../services/articleContent';

const ResourcesPage: React.FC = () => {
  const articleList = Object.values(ARTICLES);

  return (
    <div className="bg-meridian-50 min-h-screen">
      <div className="bg-meridian-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl font-bold mb-4">Patient Resources</h1>
          <p className="text-meridian-200 max-w-2xl text-lg">
            Insurance information, transparent rates, and clinical insights to support your journey.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        
        {/* SECTION 1: Insurance & Rates */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Insurance Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-meridian-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-accent-100 p-3 rounded-full">
                <ShieldCheck className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-meridian-900">Accepted Insurance</h3>
            </div>
            <p className="text-meridian-600 mb-6">We are in-network with the following commercial and government plans:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 h-96 overflow-y-auto pr-2 custom-scrollbar">
              {[
                "AARP Medicare",
                "Aetna PPO", 
                "Alignment Health Plan",
                "All Savers (UHC)",
                "Allegiance",
                "Allied Benefit Systems",
                "Ambetter", 
                "Anthem BCBS PPO", 
                "Anthem Federal",
                "Christian Brothers Services",
                "Cigna PPO", 
                "Daniel H. Cook Administrators",
                "GEHA", 
                "GEHA – United Shared Services (UHSS)",
                "Health Plans Inc",
                "Health Scope / HealthSCOPE Benefits",
                "Medica (commercial only)",
                "Medicaid FFS", 
                "Medicare",
                "Meritain Health",
                "Molina Healthcare",
                "Nippon",
                "Optum", 
                "Oscar",
                "Oxford",
                "Paragon Benefits",
                "Professional Benefit Administrators",
                "Southwest Service Administrators",
                "S&S Healthcare Strategies",
                "Surest (formerly Bind)",
                "Tall Tree Administrators",
                "Tricare",
                "Trustmark",
                "Trustmark Small Business Benefits",
                "UHC Student Resources",
                "UMR",
                "UnitedHealthcare",
                "UnitedHealth Shared Services (UHSS)",
                "Wellcare by Allwell",
                "Wellfleet Group, LLC"
              ].sort().map((ins, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium text-meridian-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  {ins}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-meridian-100">
              <p className="text-sm text-meridian-500 italic">
                *Please check with your provider to verify your specific coverage and copay.
              </p>
            </div>
          </div>

          {/* Cash Rates Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-meridian-100 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-meridian-100 p-3 rounded-full">
                <Wallet className="h-8 w-8 text-meridian-700" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-meridian-900">Self-Pay Rates</h3>
            </div>
            
            <div className="space-y-6 flex-1">
              <div>
                <h4 className="font-bold text-meridian-500 text-sm uppercase tracking-wider mb-3">Psychotherapy</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-meridian-50 rounded-lg">
                    <span className="font-semibold text-meridian-900">Initial Assessment</span>
                    <span className="font-bold text-accent-600">$150</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-meridian-50 rounded-lg">
                    <span className="font-semibold text-meridian-900">Follow-up Session</span>
                    <span className="font-bold text-accent-600">$150</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-meridian-500 text-sm uppercase tracking-wider mb-3">Psychiatry & Medication</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-meridian-50 rounded-lg border-l-4 border-accent-500">
                    <span className="font-semibold text-meridian-900">Initial Assessment</span>
                    <span className="font-bold text-accent-600">$250</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-meridian-50 rounded-lg">
                    <span className="font-semibold text-meridian-900">Follow-up Session</span>
                    <span className="font-bold text-accent-600">$150</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-meridian-500 mt-6 pt-6 border-t border-meridian-100">
              We can provide a Superbill for out-of-network reimbursement upon request.
            </p>
          </div>
        </div>

        {/* SECTION 2: Medication Policy & Philosophy */}
        <div className="bg-white rounded-2xl shadow-lg border border-meridian-100 overflow-hidden max-w-6xl mx-auto">
          <div className="bg-meridian-800 p-6 flex items-center gap-3">
            <Brain className="h-6 w-6 text-accent-500" />
            <h3 className="text-white font-serif text-2xl font-bold">Our Approach to Medication & Safety</h3>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-10">
             {/* 1. Synergy of Therapy */}
             <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Brain className="h-6 w-6 text-accent-500 shrink-0 mt-1" />
                <h4 className="font-bold text-meridian-900 text-lg">The Synergy of Therapy & Medication</h4>
              </div>
              <p className="text-meridian-700 leading-relaxed">
                While psychopharmacology (medication) can be highly effective in reducing symptoms, it is rarely a complete cure on its own. Medication prepares the brain for change, but therapy facilitates that change.
              </p>
              <p className="text-meridian-700 leading-relaxed">
                <strong>We strongly advocate for combining medication management with psychotherapy.</strong> This integrated approach leads to the best long-term outcomes, as therapy helps address the behavioral patterns, trauma, and environmental factors that medication alone cannot resolve.
              </p>
            </div>

            {/* 2. Responsible Prescribing */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Stethoscope className="h-6 w-6 text-meridian-600 shrink-0 mt-1" />
                <h4 className="font-bold text-meridian-900 text-lg">Responsible Prescribing Standards</h4>
              </div>
              <p className="text-meridian-700 leading-relaxed">
                At Meridian Behavioral Health, we prioritize patient safety in all prescribing decisions. Schedule II controlled substances (such as medication for ADHD or anxiety) are prescribed conscientiously and strictly for indicated medical conditions.
              </p>
              <p className="text-meridian-700 leading-relaxed">
                We maintain conservative prescribing standards and conduct thorough ongoing assessments to ensure these medications remain a safe and effective part of your overall treatment plan.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: Clinical Articles */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-6 w-6 text-accent-500" />
            <h3 className="font-serif text-3xl font-bold text-meridian-900">Clinical Articles & Insights</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articleList.map((article) => (
              <Link 
                key={article.id} 
                to={`/resources/${article.id}`}
                className="bg-white rounded-xl shadow-md border border-meridian-100 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-meridian-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-accent-600 block">
                      {article.category}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-meridian-900 mb-3 group-hover:text-accent-600 transition-colors leading-tight">
                    {article.title}
                  </h4>
                  <p className="text-meridian-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {article.summary}
                  </p>
                  <div className="flex items-center gap-2 text-meridian-800 font-bold text-sm mt-auto group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="h-4 w-4 text-accent-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SECTION 4: Support Resources (Relaxed Style) */}
        <div className="bg-white rounded-2xl p-8 border border-meridian-200 shadow-lg max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-accent-50 p-4 rounded-full text-accent-500">
              <HeartHandshake className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-2xl font-bold text-meridian-900 mb-4">Support & Helplines</h3>
              <p className="text-meridian-600 mb-6 text-lg">
                We are here to help during office hours. For immediate support outside of our availability, confidential resources are available 24/7.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-meridian-50 p-5 rounded-xl border border-meridian-100 flex items-center gap-4 hover:border-accent-200 transition-colors">
                  <Phone className="h-5 w-5 text-accent-500" />
                  <div>
                    <p className="font-bold text-meridian-900">Suicide & Crisis Lifeline</p>
                    <p className="text-meridian-600">Call or Text <span className="font-bold text-meridian-900">988</span></p>
                  </div>
                </div>
                <div className="bg-meridian-50 p-5 rounded-xl border border-meridian-100 flex items-center gap-4 hover:border-accent-200 transition-colors">
                  <Phone className="h-5 w-5 text-accent-500" />
                  <div>
                    <p className="font-bold text-meridian-900">Crisis Text Line</p>
                    <p className="text-meridian-600">Text <span className="font-bold text-meridian-900">HOME</span> to <span className="font-bold text-meridian-900">741741</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResourcesPage;