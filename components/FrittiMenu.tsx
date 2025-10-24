import React from 'react';
import { MenuItemData } from '../types';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

const frittiItems: MenuItemData[] = [
  { name: 'Frittatina alla Bolognese', description: 'Un guscio dorato che racchiude un cuore cremoso di spaghetti, ragù alla bolognese con macinato di scottona e besciamella.', price: '2.50', icons: '🌾🥛🥚🥩' },
  { name: 'Frittatina Cacio e Pepe', description: "La tradizione romana in un fritto: spaghetti di grano Senatore Cappelli, cremoso pecorino dei Monti Lattari e l'aroma unico del pepe di Kampot.", price: '2.50', icons: '🌾🥛' },
  { name: 'Frittatina di Pasta e Patate', description: 'Il comfort food per eccellenza: spaghetti di grano Senatore Cappelli con patate, besciamella, pancetta arruscata e provola affumicata.', price: '2.50', icons: '🌾🥛🥔🐖' },
  { name: 'Polpetta della Nonna', description: "La ricetta classica napoletana: macinato di scottona, pane raffermo, provola e pecorino dei Monti Lattari, uova e prezzemolo. Fritte come una volta.", price: '1.00', icons: '🌾🥛🥚🥩' },
  { name: 'Crocchè Napoletano', description: 'Il vero crocchè della tradizione: patate fresche, prezzemolo e un cuore filante di fior di latte.', price: '2.00', icons: '🥔🥛' },
];

const FrittiMenu: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center font-bold text-amber-300 text-lg py-2 rounded-lg bg-amber-950/50 border border-amber-800">
        <p>Menu valido dalle 18:00 alle 24:00</p>
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src="https://i.ibb.co/qYzGH0NG/Adobe-Express-file-1.png" alt="Fritti misti artigianali" className="w-full h-56 object-cover" />
      </div>

      <div className="p-6 rounded-xl border-2 border-amber-800/70 bg-gradient-to-br from-stone-900/40 to-amber-950/20 text-center shadow-lg">
        <h3 className="font-display text-2xl font-bold text-amber-300">L'Arte della Frittura</h3>
        <p className="mt-3 text-stone-300 italic">
          La nostra friggitoria celebra la tradizione con un tocco di creatività. Le nostre frittatine sono preparate artigianalmente con <strong>pasta di semola di grano duro Senatore Cappelli</strong>, coltivato nei nostri campi, per garantirvi un fritto leggero, asciutto e ricco di sapore.
        </p>
      </div>

      <MenuSection 
        title="🍟 I Nostri Fritti" 
        subtitle="Spezza la fame con le nostre golosità fritte al momento."
      >
        {frittiItems.map(item => <MenuItem key={item.name} {...item} />)}
      </MenuSection>

      <div className="mt-6 p-4 rounded-lg border border-amber-800 bg-amber-950/30 text-stone-300 text-sm">
        <h4 className="font-bold text-amber-300 mb-2">Nota Allergeni</h4>
        <p>I nostri prodotti sono preparati in un ambiente dove vengono lavorati ingredienti come glutine, latticini, uova e frutta a guscio. Per qualsiasi informazione, rivolgersi al personale.</p>
        <p className="mt-2 text-lg">🌾 🥛 🥚 🥔 🥩 🐖</p>
      </div>
      
    </div>
  );
};

export default FrittiMenu;