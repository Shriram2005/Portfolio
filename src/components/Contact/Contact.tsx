import React from 'react';
import ContactForm from './ContactForm';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-[#1E1E1E] py-20" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <a href="mailto:mange.shriram@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-[#3DDC84] transition-colors">
                <Mail className="w-5 h-5" />
                mange.shriram@gmail.com
              </a>
              <a href="tel:+917821851927" className="flex items-center gap-3 text-gray-300 hover:text-[#3DDC84] transition-colors">
                <Phone className="w-5 h-5" />
                +91 7821851927
              </a>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-6">Social Links</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Shriram2005" className="text-gray-300 hover:text-[#3DDC84] transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/shriram-mange" className="text-gray-300 hover:text-[#3DDC84] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;