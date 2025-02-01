import React from "react";
import { CheckCircle, X } from "lucide-react";

export default function SuccessPopup({ onClose, setClose }) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${
        onClose ? "visible" : "hidden"
      }`}
    >
      <div className="bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4 relative">
        <button
          onClick={() => {
            setClose(false);
          }}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        <div className="flex items-center justify-center mb-4">
          <CheckCircle className="text-green-500" size={48} />
        </div>
        <h2 className="text-xl font-semibold text-white text-center mb-2">
          Message Sent Successfully!
        </h2>
        <p className="text-gray-300 text-center">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}
