
import React, { useState } from 'react';
import { MenuTab } from './types';
import Header from './components/Header';
import Navigation from './components/Navigation';
import DolceMenu from './components/DolceMenu';
import SalatoMenu from './components/SalatoMenu';
import ColazioneMenu from './components/ColazioneMenu';
import BirreMenu from './components/BirreMenu';
import PranzoMenu from './components/PranzoMenu';
import FrittiMenu from './components/FrittiMenu';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuTab>(MenuTab.COLAZIONE);

  return (
    <div className="bg-[#1e0b05] min-h-screen max-w-lg mx-auto shadow-2xl">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="p-4 md:p-6">
        {activeTab === MenuTab.COLAZIONE && <ColazioneMenu />}
        {activeTab === MenuTab.DOLCE_SERA && <DolceMenu />}
        {activeTab === MenuTab.PRANZO && <PranzoMenu />}
        {activeTab === MenuTab.CENA && <SalatoMenu />}
        {activeTab === MenuTab.FRITTI && <FrittiMenu />}
        {activeTab === MenuTab.BIRRE && <BirreMenu />}
      </main>
      <footer className="text-center py-4 text-xs text-stone-400 space-y-2">
        <p>Forneria Agricola Caccioppoli</p>
        <p>Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
};

export default App;
