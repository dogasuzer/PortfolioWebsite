import React from 'react';

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="text-sm	md:text-lg bg-purple-400 sm:w-40 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center hovertext-white hover:underline">
          Skills
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Projects
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Contacts
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
