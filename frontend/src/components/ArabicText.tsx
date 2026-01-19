import React from 'react';

interface ArabicTextProps {
  text: string;
  className?: string;
  fontSize?: string;
}

const ArabicText: React.FC<ArabicTextProps> = ({ text, className = '', fontSize = 'text-3xl' }) => {
  return (
    <div 
      className={`arabic-text ${fontSize} leading-loose text-right text-slate-900 ${className}`}
      style={{ 
        direction: 'rtl',
        fontFamily: "'Amiri', serif",
        lineHeight: '2.2',
        wordSpacing: '0.1em'
      }}
    >
      {text}
    </div>
  );
};

export default ArabicText;
