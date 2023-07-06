import React from 'react';

type SkillsProps = {
  name: string;
  rate: number;
};

const SkillsComponent: React.FC<SkillsProps> = ({ name, rate }) => {
  return (
    <div className="flex flex-col mb-4">
      <p>{name}</p>
      <div className="bg-gray-200 rounded-lg h-24 w-4 mt-2">
        <div
          className="bg-yellow-500 rounded-lg w-full"
          style={{ height: `${rate * 25}%` }}
        />
      </div>
    </div>
  );
};

export default SkillsComponent;
