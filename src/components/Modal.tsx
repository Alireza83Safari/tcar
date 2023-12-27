"use client";
import { useEffect, useState } from "react";
import { FaX } from "react-icons/fa6";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-20 bg-gray-200">
      <div className=" bg-black-100 p-6 rounded-xl max-h-[90%] overflow-auto relative z-0">
        <button
          className=" absolute top-2 right-2 text-red"
          onClick={() => {
            setIsModalOpen(false);
            onClose();
          }}
        >
          <FaX />
        </button>
        <h2 className="text-lg font-bold mb-4 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
