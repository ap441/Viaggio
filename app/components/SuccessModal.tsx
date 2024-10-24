import React from 'react';

interface SuccessModalProps {
  message: string;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black rounded-lg p-4 shadow-lg">
        <h2 className="text-lg font-semibold">Success!</h2>
        <p>{message}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2">
          Close
        </button>
      </div>
    </div>
  );
};
