import React from 'react';
import cuisineOptions from '../../../data/cuisineOptions.json';

interface CuisineModalProps {
  onClose: () => void;
}

const CuisineModal: React.FC<CuisineModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end">
      <div className="bg-white w-full max-w-md rounded-t-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Cuisines</h2>
          <button onClick={onClose} className="text-2xl font-bold">✕</button>
        </div>
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for cuisines"
            className="w-full border border-gray-300 rounded-xl py-3 px-4"
          />
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-h-64 overflow-y-auto">
          {cuisineOptions.map((option) => (
            <div key={option.id} className="flex justify-between items-center">
              <label htmlFor={option.id} className="text-lg">
                {option.text} ({option.count})
              </label>
              <input
                type="checkbox"
                id={option.id}
                name="cuisine"
                className="form-checkbox h-5 w-5 text-[#e50300] rounded"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-6">
          <button className="text-lg text-[#e50300] font-bold">Clear all</button>
          <button
            onClick={onClose}
            className="bg-[#e50300] text-white font-bold py-3 px-12 rounded-xl"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CuisineModal; 