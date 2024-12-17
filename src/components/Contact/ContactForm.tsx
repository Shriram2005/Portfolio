import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-[#2D2D2D] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3DDC84]"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-[#2D2D2D] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3DDC84]"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-[#2D2D2D] text-white rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#3DDC84]"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-[#3DDC84] text-black px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors w-full"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;