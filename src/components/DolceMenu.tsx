import React from 'react';
import { MenuItemData } from '../types';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

const panCaccioppoliItems: MenuItemData[] = [
  { name: 'Pan Caccioppoli Classico', description: 'La semplicità del nostro impasto con gocce di cioccolato fondente.', price: '1.50', icons: '🌾🥚🥛' },
  { name: 'Pan Caccioppoli Crema Pasticcera e Amarena', description: "L'unione perfetta tra la dolcezza della crema e l'acidità dell'amarena.", price: '2.00', icons: '🌾🥚🥛' },
  { name: 'Pan Caccioppoli Albicocca Pellecchiella', description: 'Un cuore di confettura di albicocche Pellecchiella del Vesuvio.', price: '2.00', icons: '🌾🥚🥛' },
  { name: 'Pan Caccioppoli Crema di Latte di Bufala', description: 'Una crema ricca e avvolgente, omaggio al nostro territorio.', price: '2.00', icons: '🌾🥚🥛' },
  { name: 'Pan Caccioppoli Crema Nocciola', description: 'Con crema spalmabile alla nocciola di Giffoni.', price: '2.00', icons: '🌾🥚🥛🌰' },
  { name: 'Pan Caccioppoli Marmellata di Arance', description: 'Una farcitura fresca e agrumata, con marmellata di arance bio.', price: '2.00', icons: '🌾🥚🥛' },
];

const gelatoItems: MenuItemData[] = [
    { name: 'Pan Caccioppoli con Gelato di Bufala alla Vaniglia', description: 'Servito tiepido con una pallina di gelato alla vaniglia del Madagascar.', price: '3.00', icons: '🌾🥚🥛' },
    { name: 'Pan Caccioppoli con Gelato di Bufala al Cioccolato', description: 'Pura golosità: servito tiepido con gelato al cioccolato fondente.', price: '3.00', icons: '🌾🥚🥛' },
];

const bevandeItems: MenuItemData[] = [
    { name: 'Caffè', description: 'Espresso intenso e aromatico.', price: '1.20', icons: '☕' },
    { name: 'Cappuccino', description: 'Caffè espresso con latte montato a vapore.', price: '1.80', icons: '☕🥛' },
    { name: 'Frappé alla Vaniglia', description: 'Con gelato artigianale di bufala alla vaniglia.', price: '2.00', icons: '🥛' },
    { name: 'Frappé al Cioccolato', description: 'Con gelato artigianale di bufala al cioccolato.', price: '2.00', icons: '🥛' },
];

const DolceMenu: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center font-bold text-amber-300 text-lg py-2 rounded-lg bg-amber-950/50 border border-amber-800">
        <p>Menu valido dalle 18:00 alle 24:00</p>
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src="https://i.ibb.co/dv8gmfM/Adobe-Express-file-3.png" alt="Pan Caccioppoli farcito" className="w-full h-56 object-cover" />
      </div>

      <MenuSection 
        title="✨ I Nostri Pan Caccioppoli" 
        subtitle="Il nostro iconico panino dolce, morbidissimo e farcito al momento con ingredienti freschi e genuini."
      >
        {panCaccioppoliItems.map(item => <MenuItem key={item.name} {...item} />)}
      </MenuSection>

      <MenuSection 
        title="🍦 Specialità con Gelato di Bufala" 
        subtitle="Quando il Pan Caccioppoli incontra la freschezza del nostro gelato."
      >
        {gelatoItems.map(item => <MenuItem key={item.name} {...item} />)}
        <div className="mt-4 p-3 rounded-lg border border-amber-800 bg-amber-950/20 text-center">
          <p className="font-medium text-amber-300">Ogni gusto extra ha un costo di € 0,50 aggiuntivi.</p>
        </div>
      </MenuSection>
      
      <MenuSection 
        title="☕ Bevande" 
        subtitle="Per accompagnare i tuoi momenti di dolcezza."
      >
        {bevandeItems.map(item => <MenuItem key={item.name} {...item} />)}
      </MenuSection>

      <div className="mt-6 p-4 rounded-lg border border-amber-800 bg-amber-950/30 text-stone-300 text-sm">
        <h4 className="font-bold text-amber-300 mb-2">Nota Allergeni</h4>
        <p>I nostri prodotti sono preparati in un ambiente dove vengono lavorati ingredienti come glutine, latticini, uova e frutta a guscio. Per qualsiasi informazione, rivolgersi al personale.</p>
        <p className="mt-2 text-lg">🌾 🥛 🥚 🌰</p>
      </div>
      
    </div>
  );
};

export default DolceMenu;