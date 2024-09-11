import React from 'react';

interface ButtonProps {
  anchorId: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ anchorId, label }) => {
  const handleClick = () => {
    const anchor = document.getElementById(anchorId);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='p-2 fixed bottom-0 left-0 right-0 bg-gray-200'>
    <button
      onClick={handleClick}
      className="flex w-full justify-center items-center p-4 border bg-[#2a9cd8] text-white rounded-lg hover:bg-[#1f8cc6] hover:text-white mx-auto"
    >
      {label}
    </button>
    </div>
  );
};

export default Button;
