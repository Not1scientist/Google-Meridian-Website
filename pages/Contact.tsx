import React from 'react';
import { Phone, Mail, MapPin, Clock, Printer } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-meridian-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-meridian-900 text-center mb-6">Get In Touch</h1>
        <p className="text-center text-meridian-600 max-w-2xl mx-auto mb-16 text-lg">
          Take the first step towards wellness. Our intake coordinators are ready to match you with the best therapist for your needs.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-meridian-900 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-serif text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent-500 mt-1" />
                  <div>
                    <p className="font-semibold text-meridian-100">Primary Phone</p>
                    <p className="text-lg">(702) 604-2498</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Printer className="h-6 w-6 text-accent-500 mt-1" />
                  <div>
                    <p className="font-semibold text-meridian-100">Fax</p>
                    <p className="text-lg">(702) 297-6538</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent-500 mt-1" />
                  <div>
                    <p className="font-semibold text-meridian-100">Email</p>
                    <p className="text-lg break-all">info@meridianbehavioral.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-meridian-700">
                  <MapPin className="h-6 w-6 text-accent-500 mt-1" />
                  <div>
                    <p className="font-semibold text-meridian-100">Southwest Office</p>
                    <p className="text-sm">5510 South Fort Apache Road<br/>Las Vegas, NV 89148</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent-500 mt-1" />
                  <div>
                    <p className="font-semibold text-meridian-100">East Las Vegas Office</p>
                    <p className="text-sm">1810 E Sahara Ave<br/>Las Vegas, NV 89104</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 pt-4 border-t border-meridian-700">
                  <Clock className="h-6 w-6 text-accent-500 mt-1" />
                  <div>
                    <p className="font-semibold text-meridian-100">Clinic Hours</p>
                    <p className="text-sm">Mon - Fri: 8:00 AM - 8:00 PM</p>
                    <p className="text-sm">Saturday: 9:00 AM - 3:00 PM</p>
                    <p className="text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-meridian-100">
              <h4 className="font-bold text-meridian-900 mb-2">Emergency Assistance</h4>
              <p className="text-sm text-meridian-600 leading-relaxed">
                If you are experiencing a life-threatening emergency, please call 911 or visit your nearest emergency room immediately.
                <br/><br/>
                <strong>National Suicide Prevention Lifeline:</strong> 988
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-meridian-100">
              <h3 className="font-serif text-2xl font-bold text-meridian-900 mb-6">Request an Appointment</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-meridian-700">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-meridian-50 border border-meridian-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-meridian-700">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-meridian-50 border border-meridian-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-meridian-700">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-meridian-50 border border-meridian-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-meridian-700">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg bg-meridian-50 border border-meridian-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-meridian-700">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-meridian-50 border border-meridian-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none">
                    <option>Select a service...</option>
                    <option>Individual Therapy</option>
                    <option>Couples Counseling</option>
                    <option>Child & Adolescent</option>
                    <option>Psychiatry & Medication</option>
                    <option>EMDR / Trauma</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-meridian-700">How can we help?</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-meridian-50 border border-meridian-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" placeholder="Briefly describe your needs..." />
                </div>

                <button type="button" className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-0.5">
                  Send Request
                </button>
                <p className="text-xs text-center text-meridian-400 mt-4">
                  Your information is secure and confidential. We will contact you within 24 hours to schedule your intake.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;