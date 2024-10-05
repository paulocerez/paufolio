import React from "react";

interface ToggleSwitchProps {
  options: [string, string];
  selectedIndex: number;
  onChange: (index: number) => void;
}

export default function ToggleSwitch({
  options,
  selectedIndex,
  onChange,
}: ToggleSwitchProps) {
  return (
    <div className="flex items-center space-x-2">
      <span
        className={`text-sm ${
          selectedIndex === 0 ? "text-primary" : "text-gray-500"
        }`}
      >
        {options[0]}
      </span>
      <div
        className="relative w-12 h-6 bg-gray-200 rounded-full cursor-pointer"
        onClick={() => onChange(selectedIndex === 0 ? 1 : 0)}
      >
        <div
          className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
            selectedIndex === 0 ? "translate-x-0.5" : "translate-x-6"
          }`}
        />
      </div>
      <span
        className={`text-sm ${
          selectedIndex === 1 ? "text-primary" : "text-gray-500"
        }`}
      >
        {options[1]}
      </span>
    </div>
  );
}
