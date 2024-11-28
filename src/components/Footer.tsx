import React from 'react';
import { Facebook, Twitter, Instagram, MessageCircle, Linkedin, Mail } from 'lucide-react';
import SocialButton from './shared/SocialButton';

const Footer = () => {
  return (
    <footer className="bg-[#0F1013] text-[#BBBFC4] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#FBB659] font-bold text-xl mb-4">TriArdor</h3>
            <p className="text-sm">Creating immersive board game experiences that challenge and inspire.</p>
          </div>
          <div>
            <h4 className="text-[#FBB659] font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Support</li>
              <li>Press Inquiries</li>
              <li>Partnerships</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FBB659] font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Shipping Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FBB659] font-bold mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              <SocialButton icon={<Facebook className="w-5 h-5" />} label="" href="#" />
              <SocialButton icon={<Twitter className="w-5 h-5" />} label="" href="#" />
              <SocialButton icon={<Instagram className="w-5 h-5" />} label="" href="#" />
              <SocialButton icon={<MessageCircle className="w-5 h-5" />} label="" href="#" />
              <SocialButton icon={<Linkedin className="w-5 h-5" />} label="" href="#" />
              <SocialButton 
                icon={<Mail className="w-5 h-5" />} 
                label="" 
                href="mailto:triardor.studio@gmail.com" 
              />
            </div>
          </div>
        </div>
        <div className="border-t border-[#394E59] mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TriArdor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;