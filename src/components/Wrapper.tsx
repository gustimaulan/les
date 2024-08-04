// src/components/Wrapper.tsx
import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  className?: string; // Optional className prop to allow custom styling
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-screen-sm mx-auto p-6 bg-white rounded${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
