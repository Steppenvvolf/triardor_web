import React from 'react';
import Header from '../components/Header/Header';
import ContactSection from '../components/Contact/ContactSection';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0F1013]">
      <Header />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;