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
    window.location.href = `mailto:triardor.studio@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[#394E59]/20 p-8 rounded-lg backdrop-blur-sm">
      <div>
        <label htmlFor="name" className="block text-[#FBB659] font-medium mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#0F1013] border border-[#394E59] rounded-lg focus:outline-none focus:border-[#FBB659] text-[#BBBFC4]"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-[#FBB659] font-medium mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#0F1013] border border-[#394E59] rounded-lg focus:outline-none focus:border-[#FBB659] text-[#BBBFC4]"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[#FBB659] font-medium mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 bg-[#0F1013] border border-[#394E59] rounded-lg focus:outline-none focus:border-[#FBB659] text-[#BBBFC4] resize-none"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#FBB659] text-[#0F1013] py-3 px-6 rounded-lg font-medium hover:bg-[#C38855] transition-colors duration-300 flex items-center justify-center gap-2 group"
      >
        <span>Send Message</span>
        <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
};

export default ContactForm;