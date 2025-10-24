import React from 'react';
import { MenuTab } from '../types';

interface NavigationProps {
  activeTab: MenuTab;
  setActiveTab: (tab: MenuTab) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const baseClasses = 'px-3 py-2 md:px-4 text-xs md:text-sm rounded-lg font-semibold tracking-widest uppercase transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75';
  const activeClasses = 'bg-gradient-to-br from-amber-400 to-amber-500 text-stone-900 shadow-lg shadow-amber-500/25';
  const inactiveClasses = 'bg-transparent border-2 border-amber-800 text-amber-500 hover:bg-amber-950/40 hover:border-amber-700';

  return (
    <nav className="p-4 sticky top-0 bg-[#1e0b05]/80 backdrop-blur-sm z-10 border-b border-amber-900/50">
      <div className="flex justify-center items-center space-x-1 md:space-x-2 flex-wrap gap-y-2">
        <button
          onClick={() => setActiveTab(MenuTab.COLAZIONE)}
          className={`${baseClasses} ${
            activeTab === MenuTab.COLAZIONE ? activeClasses : inactiveClasses
          }`}
          aria-pressed={activeTab === MenuTab.COLAZIONE}
        >
          Colazione
        </button>
        <button
          onClick={() => setActiveTab(MenuTab.DOLCE_SERA)}
          className={`${baseClasses} ${
            activeTab === MenuTab.DOLCE_SERA ? activeClasses : inactiveClasses
          }`}
          aria-pressed={activeTab === MenuTab.DOLCE_SERA}
        >
          Dolce di Sera
        </button>
        <button
          onClick={() => setActiveTab(MenuTab.PRANZO)}
          className={`${baseClasses} ${
            activeTab === MenuTab.PRANZO ? activeClasses : inactiveClasses
          }`}
          aria-pressed={activeTab === MenuTab.PRANZO}
        >
          Pranzo
        </button>
        <button
          onClick={() => setActiveTab(MenuTab.CENA)}
          className={`${baseClasses} ${
            activeTab === MenuTab.CENA ? activeClasses : inactiveClasses
          }`}
          aria-pressed={activeTab === MenuTab.CENA}
        >
          Cena
        </button>
        <button
          onClick={() => setActiveTab(MenuTab.FRITTI)}
          className={`${baseClasses} ${
            activeTab === MenuTab.FRITTI ? activeClasses : inactiveClasses
          }`}
          aria-pressed={activeTab === MenuTab.FRITTI}
        >
          Fritti
        </button>
        <button
          onClick={() => setActiveTab(MenuTab.BIRRE)}
          className={`${baseClasses} ${
            activeTab === MenuTab.BIRRE ? activeClasses : inactiveClasses
          }`}
          aria-pressed={activeTab === MenuTab.BIRRE}
        >
          Birre
        </button>
      </div>
    </nav>
  );
};

export default Navigation;