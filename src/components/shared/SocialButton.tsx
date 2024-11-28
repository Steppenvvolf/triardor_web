import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, label, href }) => {
  return (
    <a
      href={href}
      className="flex items-center justify-center gap-3 bg-[#394E59] hover:bg-[#394E59]/80 text-[#BBBFC4] hover:text-[#FBB659] p-4 rounded-lg transition-all duration-300 group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </a>
  );
};

export default SocialButton;