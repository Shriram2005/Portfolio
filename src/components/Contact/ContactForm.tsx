import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#2D2D2D] rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-[#3DDC84] mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-[#2D2D2D] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3DDC84] border border-gray-600 focus:border-[#3DDC84] transition-colors"
          required
          aria-describedby="name-error"
          placeholder="Enter your full name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-[#2D2D2D] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3DDC84] border border-gray-600 focus:border-[#3DDC84] transition-colors"
          required
          aria-describedby="email-error"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#2D2D2D] text-white rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#3DDC84] border border-gray-600 focus:border-[#3DDC84] transition-colors"
          required
          aria-describedby="message-error"
          placeholder="Tell me about your project or how I can help you..."
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#3DDC84] text-black px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Send message"
      >
        <Send className="w-5 h-5" />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;