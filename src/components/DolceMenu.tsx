import React from 'react';
import { MenuItemData } from '../types';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

const panGoccioleItems: MenuItemData[] = [
  { name: 'Pan Gocciole Classico', description: 'La semplicità del nostro impasto con gocce di cioccolato fondente.', price: '1.50', icons: '🌾🥚🥛' },
  { name: 'Pan Gocciole Crema Pasticcera e Amarena', description: "L'unione perfetta tra la dolcezza della crema e l'acidità dell'amarena.", price: '2.00', icons: '🌾🥚🥛' },
  { name: 'Pan Caccioppoli Crema di Latte di Bufala', description: 'Una crema ricca e avvolgente, omaggio al nostro territorio.', price: '2.50', icons: '🥛' },
];

const DolceMenu: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center font-bold text-amber-300 text-lg py-2 rounded-lg bg-amber-950/50 border border-amber-800">
        <p>Menu Dolce di Sera - Valido dalle 18:00 alle 24:00</p>
      </div>

      <MenuSection title="I Nostri Pan Caccioppoli" subtitle="Il nostro iconico panino dolce, morbidissimo e farcito al momento con ingredienti freschi e genuini.">
        {panGoccioleItems.map(item => <MenuItem key={item.name} {...item} />)}
      </MenuSection>

      <MenuSection title="Specialità con Gelato di Bufala" subtitle="Quando il Pan Caccioppoli incontra la freschezza del nostro gelato.">
        <MenuItem name="Pan Caccioppoli con Gelato di Bufala alla Vaniglia" description="Servito tiepido con una pallina di gelato alla vaniglia del Madagascar." price="4.50" icons="🍨" />
        <MenuItem name="Pan Caccioppoli con Gelato di Bufala al Cioccolato" description="Servito tiepido con gelato al cioccolato fondente." price="4.50" icons="🍫" />
      </MenuSection>

      <div className="mt-6 p-4 rounded-lg border border-amber-800 bg-amber-950/30 text-stone-300 text-sm text-center">
        <p className="font-bold text-amber-300">Nota: Ogni gusto extra ha un costo di € 0,50 aggiuntivi.</p>
      </div>
    </div>
  );
};

export default DolceMenu;
