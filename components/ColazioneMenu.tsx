import React from 'react';
import { MenuItemData } from '../types';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

const cornettiItems: MenuItemData[] = [
    { name: 'Cornetto Semplice', description: 'Il classico cornetto sfogliato al burro.', price: '1.50', icons: '🌾🥚🥛' },
    { name: 'Saccottino al Cioccolato', description: 'Soffice pasta sfoglia con cuore di cioccolato fondente.', price: '1.50', icons: '🌾🥚🥛' },
    { name: 'Cornetto Amalfitano', description: 'Farcito con crema pasticcera, marmellata di limoni e zest di limone fresco.', price: '2.00', icons: '🌾🥚🥛' },
    { name: 'Cornetto alla Nocciola', description: 'Con la nostra crema di nocciole di Giffoni fatta in casa.', price: '1.50', icons: '🌾🥚🥛🌰' },
    { name: 'Cornetto Crema e Amarena', description: 'Un classico intramontabile: crema pasticcera e amarene Fabbri.', price: '1.50', icons: '🌾🥚🥛' },
    { name: 'Cornetto ai Frutti di Bosco', description: 'Con la nostra confettura artigianale di frutti di bosco.', price: '1.50', icons: '🌾🥚🥛' },
    { name: 'Cornetto Marmellata di Arance', description: 'Gusto fresco e agrumato con marmellata di arance bio.', price: '1.50', icons: '🌾🥚🥛' },
    { name: 'Cornetto Marmellata di Albicocche', description: 'Con confettura extra di albicocche del Vesuvio.', price: '1.50', icons: '🌾🥚🥛' },
    { name: 'Fetta di Panettone', description: 'Una fetta del nostro panettone artigianale, soffice e profumato.', price: '2.50', icons: '🌾🥚🥛' },
    { name: 'Fetta di Panettone Caprese', description: 'La nostra versione del panettone arricchita con cioccolato e mandorle.', price: '2.50', icons: '🌾🥚🥛🌰' },
];

const bevandeColazioneItems: MenuItemData[] = [
    { name: 'Caffè', description: 'Espresso intenso e aromatico.', price: '1.20', icons: '☕' },
    { name: 'Cappuccino', description: 'Caffè espresso con latte montato a vapore.', price: '1.80', icons: '☕🥛' },
    { name: 'Cappuccino Freddo', description: 'La freschezza del cappuccino in versione estiva.', price: '2.00', icons: '☕🥛❄️' },
    { name: 'Decaffeinato "Il Buongustaio"', description: 'Tutto il gusto del caffè, senza caffeina.', price: '1.20', icons: '☕' },
    { name: 'Frappé alla Vaniglia', description: 'Con gelato artigianale di bufala alla vaniglia.', price: '2.00', icons: '🥛' },
    { name: 'Frappé al Cioccolato', description: 'Con gelato artigianale di bufala al cioccolato.', price: '2.00', icons: '🥛' },
];


const ColazioneMenu: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center font-bold text-amber-300 text-lg py-2 rounded-lg bg-amber-950/50 border border-amber-800">
        <p>Menu Colazione - Valido fino alle ore 11:00</p>
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src="https://i.ibb.co/YBjzGrsW/Adobe-Express-file.png" alt="Cornetto fragrante per colazione" className="w-full h-52 object-cover" />
      </div>
      
      <div className="p-6 rounded-xl border-2 border-amber-800/70 bg-gradient-to-br from-stone-900/40 to-amber-950/20 text-center shadow-lg">
        <h3 className="font-display text-2xl font-bold text-amber-300">La Nostra Qualità</h3>
        <p className="mt-3 text-stone-300 italic">
          Tutti i nostri cornetti sono realizzati con <strong>uova fresche</strong> della "Azienda Agricola La Vecchia Fattoria" e <strong>zucchero di canna integrale</strong>, per una colazione genuina e ricca di sapore.
        </p>
      </div>

      <MenuSection 
        title="🥐 Dolci da Forno" 
        subtitle="Sfornati freschi ogni mattina per darti la giusta carica."
      >
        {cornettiItems.map(item => <MenuItem key={item.name} {...item} />)}
      </MenuSection>
      
      <MenuSection 
        title="☕ Caffetteria e Bevande" 
        subtitle="Il buongiorno si vede dal mattino."
      >
        {bevandeColazioneItems.map(item => <MenuItem key={item.name} {...item} />)}
      </MenuSection>
      
      <div className="mt-6 p-4 rounded-lg border border-amber-800 bg-amber-950/30 text-stone-300 text-sm">
        <h4 className="font-bold text-amber-300 mb-2">Nota Allergeni</h4>
        <p>I nostri prodotti sono preparati in un ambiente dove vengono lavorati ingredienti come glutine, latticini, uova e frutta a guscio. Per qualsiasi informazione, rivolgersi al personale.</p>
        <p className="mt-2 text-lg">🌾 🥛 🥚 🌰</p>
      </div>
    </div>
  );
};

export default ColazioneMenu;