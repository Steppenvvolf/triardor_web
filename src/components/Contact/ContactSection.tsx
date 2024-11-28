import React from 'react';
import { Facebook, Twitter, Instagram, MessageCircle, Linkedin, Mail } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import SocialButton from '../shared/SocialButton';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-[#FBB659] text-center mb-16">Get in Touch</h1>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection delay={0.2}>
            <div className="mb-16">
              <ContactForm />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h2 className="text-2xl font-bold text-[#FBB659] text-center mb-8">Follow Us</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <SocialButton
                icon={<Facebook className="w-6 h-6" />}
                label="Facebook"
                href="#"
              />
              <SocialButton
                icon={<Twitter className="w-6 h-6" />}
                label="X (Twitter)"
                href="#"
              />
              <SocialButton
                icon={<Instagram className="w-6 h-6" />}
                label="Instagram"
                href="#"
              />
              <SocialButton
                icon={<MessageCircle className="w-6 h-6" />}
                label="TikTok"
                href="#"
              />
              <SocialButton
                icon={<Linkedin className="w-6 h-6" />}
                label="LinkedIn"
                href="#"
              />
              <SocialButton
                icon={<Mail className="w-6 h-6" />}
                label="Email"
                href="mailto:triardor.studio@gmail.com"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;