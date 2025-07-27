import React from 'react';
import sortOptions from '../../../data/sortOptions.json';

interface SortByModalProps {
  onClose: () => void;
}

const SortByModal: React.FC<SortByModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end">
      <div className="bg-white w-full max-w-md rounded-t-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Sort by</h2>
          <button onClick={onClose} className="text-2xl font-bold">✕</button>
        </div>
        <div className="flex flex-col gap-4">
          {sortOptions.map((option) => (
            <div key={option.id} className="flex justify-between items-center">
              <label htmlFor={option.id} className="text-lg">{option.text}</label>
              <input type="radio" id={option.id} name="sort" className="form-radio h-5 w-5 text-[#e50300]" />
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="w-full bg-[#e50300] text-white font-bold py-3 rounded-xl mt-6"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default SortByModal; 