import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          message: formData.message
        }).toString()
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setError('Failed to send message. Please try again or contact me directly.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#2D2D2D] rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-[#3DDC84] mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
        <p className="text-gray-400 mb-4">Thank you for reaching out. I'll get back to you within 24 hours.</p>
        <div className="text-sm text-gray-500">
          <p>You can also reach me directly via:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://wa.me/917821851927" className="text-[#3DDC84] hover:underline">WhatsApp</a>
            <a href="https://t.me/Shrirammange" className="text-[#3DDC84] hover:underline">Telegram</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hidden form for Netlify to detect */}
      <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <form onSubmit={handleSubmit} className="space-y-6" data-netlify="true" name="contact">
        {/* Honeypot field for spam protection */}
        <input type="hidden" name="form-name" value="contact" />
        <div style={{ display: 'none' }}>
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
          className="bg-[#3DDC84] text-black px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          This form is secured by Netlify. Your information is safe and will only be used to respond to your inquiry.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;