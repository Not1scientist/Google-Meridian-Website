import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import GeminiChat from './GeminiChat';
import { PROGRAMS } from '../services/programContent';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path) ? 'text-accent-500 font-semibold' : 'text-meridian-800 hover:text-meridian-600';

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link 
      to={to} 
      className={`${isActive(to)} text-sm uppercase tracking-wider transition-colors py-2`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <div className="bg-meridian-900 text-meridian-100 py-2 px-4 text-xs font-medium tracking-wide">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-2"><Phone className="h-3 w-3 text-accent-500" /> (702) 604-2498</span>
            <span className="flex items-center gap-2 hidden lg:flex"><MapPin className="h-3 w-3 text-accent-500" /> 5510 S Fort Apache Rd</span>
            <span className="flex items-center gap-2 hidden lg:flex"><MapPin className="h-3 w-3 text-accent-500" /> 1810 E Sahara Ave</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Patient Portal</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-meridian-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-meridian-900 leading-none tracking-tight">Meridian</span>
              <span className="text-xs text-meridian-500 uppercase tracking-[0.2em]">Behavioral Health</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="/" label="Home" />
              
              {/* Programs Dropdown */}
              <div className="relative group">
                <Link 
                  to="/programs" 
                  className={`flex items-center gap-1 ${isActive('/programs')} text-sm uppercase tracking-wider transition-colors py-4`}
                >
                  Therapy & Programs <ChevronDown className="h-3 w-3" />
                </Link>
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border border-meridian-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="py-2">
                    {Object.values(PROGRAMS).map((program) => (
                      <Link 
                        key={program.id}
                        to={`/programs/${program.id}`}
                        className="block px-6 py-2.5 text-sm text-meridian-700 hover:bg-meridian-50 hover:text-accent-600 transition-colors border-b border-meridian-50 last:border-0"
                      >
                        {program.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink to="/team" label="Our Team" />
              <NavLink to="/resources" label="Resources" />
              <Link 
                to="/contact" 
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-md transform hover:-translate-y-0.5"
              >
                Schedule Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-meridian-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-meridian-100 absolute w-full left-0 shadow-xl p-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
            <NavLink to="/" label="Home" />
            <div className="border-l-2 border-accent-100 pl-4 space-y-3">
              <NavLink to="/programs" label="Therapy & Programs" />
              {Object.values(PROGRAMS).map((program) => (
                <Link 
                  key={program.id}
                  to={`/programs/${program.id}`}
                  className="block text-sm text-meridian-600 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {program.title}
                </Link>
              ))}
            </div>
            <NavLink to="/team" label="Our Team" />
            <NavLink to="/resources" label="Resources" />
            <Link 
              to="/contact" 
              className="bg-accent-500 text-white px-4 py-3 rounded-md text-center font-semibold mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule Appointment
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-meridian-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold">Meridian</h3>
              <p className="text-meridian-300 text-sm leading-relaxed">
                Dedicated to strengthening families and individuals through evidence-based behavioral healthcare and compassionate support.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-accent-500 text-sm uppercase tracking-widest">Therapy & Programs</h4>
              <ul className="space-y-3 text-meridian-200 text-sm">
                <li><Link to="/programs/adult-trauma" className="hover:text-white transition-colors">Adult Trauma & EMDR</Link></li>
                <li><Link to="/programs/couple-marriage" className="hover:text-white transition-colors">Couple & Marriage Therapy</Link></li>
                <li><Link to="/programs/child-adolescent" className="hover:text-white transition-colors">Child & Adolescent</Link></li>
                <li><Link to="/programs/psychiatry" className="hover:text-white transition-colors">Psychiatry & Medication</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-accent-500 text-sm uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-3 text-meridian-200 text-sm">
                <li><Link to="/team" className="hover:text-white transition-colors">Find a Therapist</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors">Patient Resources</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Make a Payment</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Insurance Info</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-accent-500 text-sm uppercase tracking-widest">Locations</h4>
              <ul className="space-y-4 text-meridian-200 text-sm">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-accent-500 shrink-0" />
                  <span>5510 South Fort Apache Rd<br/>Las Vegas, NV 89148</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-accent-500 shrink-0" />
                  <span>1810 E Sahara Ave<br/>Las Vegas, NV 89104</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-accent-500 shrink-0" />
                  <span>(702) 604-2498</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-meridian-800 pt-8 text-center text-xs text-meridian-500">
            <p>&copy; {new Date().getFullYear()} Meridian Behavioral Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <GeminiChat />
    </div>
  );
};

export default Layout;