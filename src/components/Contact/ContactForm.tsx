import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
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
      // Add document to Firestore
      await addDoc(collection(db, 'contact-messages'), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
        status: 'new',
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct'
      });

      // Send email notification using EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name.trim(),
            from_email: formData.email.trim(),
            message: formData.message.trim(),
            to_email: 'shrirammange12345@gmail.com',
            reply_to: formData.email.trim(),
          },
          publicKey
        );
        console.log('Email notification sent successfully');
      } else {
        console.warn('EmailJS configuration missing - email notification not sent');
      }

      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);

    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to send message. Please try again or contact me directly via WhatsApp or Telegram.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  if (isSubmitted) {
    return (
      <div className="bg-[#2D2D2D] rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-[#3DDC84] mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
        <p className="text-gray-400 mb-4">Thank you for reaching out. I'll get back to you within 24 hours.</p>
        <div className="text-sm text-gray-500">
          <p>You can also reach me directly via:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a 
              href="https://wa.me/917821851927" 
              className="text-[#3DDC84] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a 
              href="https://t.me/Shrirammange" 
              className="text-[#3DDC84] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
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
            placeholder="Enter your full name"
            disabled={isSubmitting}
            maxLength={100}
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
            placeholder="your.email@example.com"
            disabled={isSubmitting}
            maxLength={100}
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
            placeholder="Tell me about your project or how I can help you..."
            disabled={isSubmitting}
            maxLength={1000}
          />
          <div className="text-right text-xs text-gray-500 mt-1">
            {formData.message.length}/1000 characters
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting || !isFormValid}
          className="bg-[#3DDC84] text-black px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          This form is secured by Firebase. Your information is safe and will only be used to respond to your inquiry.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;