import React from 'react';
import MenuSection from './MenuSection';
import MenuItem from './MenuItem';

const PranzoMenu: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center font-bold text-amber-300 text-lg py-2 rounded-lg bg-amber-950/50 border border-amber-800">
        <p>Menu Pranzo - Valido dalle 12:00 alle 15:00</p>
      </div>

      <MenuSection
        title="I Nostri Tegliucci per il Pranzo"
        subtitle="Scegli tra i nostri tegliucci monoporzione o i ricchi tegliucci chieni serviti a fette."
      >
        {/* pranzoItems mappati qui */}
      </MenuSection>

      <div className="mt-6 p-4 rounded-lg border border-amber-800 bg-amber-950/30 text-stone-300 text-sm">
        <h4 className="font-bold text-amber-300 mb-2">Nota Allergeni</h4>
        <p>Per qualsiasi informazione su allergeni e ingredienti non esitate a chiedere al nostro personale.</p>
      </div>
    </div>
  );
};

export default PranzoMenu;