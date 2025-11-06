import React from 'react';
import { MenuItemData } from '../types';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

const cornettiItems: MenuItemData[] = [
    { name: 'Cornetto Semplice', description: 'Il classico cornetto sfogliato al burro.', price: '1.50', icons: '🌾🥚🥛' },
    { name: 'Saccottino al Cioccolato', description: 'Soffice pasta sfoglia con cuore di cioccolato fondente.', price: '1.50', icons: '🌾🥚🥛' },
    { name: 'Cornetto Amalfitano', description: 'Farcito con crema pasticcera realizzata con latte nobile, marmellata di limoni e zest di limone fresco.', price: '2.00', icons: '🌾🥚🥛' },
    { name: 'Cornetto alla Nocciola', description: 'Con la nostra crema di nocciole di Giffoni fatta in casa.', price: '2.00', icons: '🌾🥚🌰' },
    { name: 'Cornetto Crema e Amarena', description: "Un classico intramontabile: crema pasticcera e amarene.", price: '2.00', icons: '🌾🥚🥛' },
    { name: 'Cornetto ai Frutti di Bosco', description: 'Con la nostra confettura artigianale di frutti di bosco.', price: '2.00', icons: '🌾🥚🍓' },
    { name: 'Cornetto Marmellata di Arance', description: 'Gusto fresco e agrumato con marmellata di arance bio.', price: '1.80', icons: '🌾🍊' },
    { name: 'Cornetto Confettura di Albicocche', description: 'Con confettura extra di albicocche Pellecchiella del Vesuvio.', price: '1.80', icons: '🌾🍑' },
    { name: 'Fetta di Panettone', description: 'Una fetta del nostro panettone artigianale, soffice e profumato.', price: '2.50', icons: '🍰' },
    { name: 'Fetta di Panettone Caprese', description: 'La nostra versione del panettone arricchita con cioccolato e mandorle.', price: '2.80', icons: '🍫' },
];

const ColazioneMenu: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center font-bold text-amber-300 text-lg py-2 rounded-lg bg-amber-950/50 border border-amber-800">
        <p>Menu Colazione - Valido fino alle ore 11:00</p>
      </div>

      <MenuSection title="Dolci da Forno" subtitle="Sfornati freschi ogni mattina per darti la giusta carica.">
        {cornettiItems.map(item => <MenuItem key={item.name} {...item} />)}
      </MenuSection>

      <div className="mt-6 p-4 rounded-lg border border-amber-800 bg-amber-950/30 text-stone-300 text-sm text-center">
        <h4 className="font-bold text-amber-300 mb-2">Nota Allergeni</h4>
        <p>I nostri prodotti sono preparati in un ambiente dove vengono lavorati ingredienti come glutine, latticini, uova e frutta a guscio. Per qualsiasi informazione, rivolgersi al personale.</p>
        <p className="mt-2 text-lg">🌾 🥛 🥚 🌰</p>
      </div>
    </div>
  );
};

export default ColazioneMenu;