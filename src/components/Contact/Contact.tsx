import React from 'react';
import ScrollReveal from '../ScrollReveal';
import ContactForm from './ContactForm';
import { Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-[#121212] py-20 relative overflow-hidden" id="contact">
      {/* Animated background pattern - contained within viewport */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute w-80 h-80 bg-[#3DDC84] rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-[#61DAFB] rounded-full blur-3xl top-20 right-20 animate-pulse delay-600"></div>
        <div className="absolute w-64 h-64 bg-[#3DDC84] rounded-full blur-3xl bottom-20 left-1/4 animate-pulse delay-1200"></div>
        <div className="absolute w-76 h-76 bg-[#61DAFB] rounded-full blur-3xl bottom-10 right-1/4 animate-pulse delay-1800"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" duration={600} delay={100}>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Get In Touch</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal direction="left" duration={600} delay={200}>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4 mb-8">
                <a href="https://wa.me/917821851927" className="contact-link">
                  <MessageCircle className="w-5 h-5 contact-icon" />
                  WhatsApp Chat
                </a>
                <a href="https://t.me/Shrirammange" className="contact-link">
                  <Send className="w-5 h-5 contact-icon" />
                  Telegram: @Shrirammange
                </a>
                <a href="mailto:mange.shriram@gmail.com" className="contact-link">
                  <Mail className="w-5 h-5 contact-icon" />
                  mange.shriram@gmail.com
                </a>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-6">Social Links</h3>
              <div className="flex gap-4">
                <a href="https://github.com/Shriram2005" className="social-link">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/shriram-mange" className="social-link">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://wa.me/917821851927" className="social-link">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="https://t.me/Shrirammange" className="social-link">
                  <Send className="w-6 h-6" />
                </a>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" duration={600} delay={300}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;