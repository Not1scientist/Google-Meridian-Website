import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
    </div>
  );
};

export default ServicesPage;