
import React from 'react';
import { MenuItemData } from '../types';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

const birreAgricoleItems: MenuItemData[] = [
  { name: 'Premium Gold', description: 'Stile Weizen. Colore dorato, schiuma abbondante, gusto leggermente acidulo e rinfrescante con retrogusto fruttato. (33cl, 5.0% Vol.)', price: '5.00', icons: '🍺🌾' },
  { name: 'Premium Copper', description: 'Stile Lager. Colore ramato e corpo leggero, aroma pulito con sfumature di vaniglia e un sapore leggero di malto e miele. (33cl, 5.0% Vol.)', price: '5.00', icons: '🍺' },
  { name: 'Premium Red', description: 'Stile Lager. Colore marrone scuro con riflessi granata e un corpo deciso, dominata dal sapore ricco del malto Munich e note dolci di caramello. (33cl, 5.0% Vol.)', price: '5.00', icons: '🍺' },
  { name: 'Premium Black', description: 'Stile English Ale. Colore nero, schiuma cremosa e persistente. Sapore intenso di frutta e malto, bilanciato da un aroma tostato e dall\'amaro del luppolo. (33cl, 5.0% Vol.)', price: '5.00', icons: '🍺' },
  { name: 'Magnum Riserva', description: 'Disponibile "Gold" (dorata) o "Copper" (ambrata). Gusto morbido e avvolgente con un retrogusto fruttato e floreale, arricchito dal trattamento delle bucce degli agrumi. (33cl, 5.0% Vol.)', price: '5.00', icons: '🍺🍊' },
];

const birreCommercialiItems: MenuItemData[] = [
    { name: 'Heineken', description: 'Lager olandese dal gusto equilibrato e note fruttate. (33cl)', price: '3.00', icons: '🍺' },
    { name: 'Ichnusa Non Filtrata', description: 'La classica lager sarda, corposa e dal gusto intenso. (33cl)', price: '3.50', icons: '🍺' },
    { name: 'Corona', description: 'Lager messicana leggera, da servire con una fetta di lime. (33cl)', price: '3.50', icons: '🍺🍋' },
    { name: 'Tennent\'s Super', description: 'Strong Lager scozzese, decisa e dal corpo pieno. (33cl)', price: '3.50', icons: '🍺' },
];

const BirreMenu: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center font-bold text-amber-300 text-lg py-2 rounded-lg bg-amber-950/50 border border-amber-800">
        <p>Menu valido dalle 18:00 alle 24:00</p>
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg mt-4">
        <img src="https://i.ibb.co/q3HY7Vt9/Adobe-Express-file-1.png" alt="Selezione di birre artigianali" className="w-full h-56 object-cover" />
      </div>

      <div className="p-6 rounded-xl border-2 border-amber-800/70 bg-gradient-to-br from-stone-900/40 to-amber-950/20 text-center shadow-lg">
        <h3 className="font-display text-2xl font-bold text-amber-300">Dalla Terra al Boccale</h3>
        <p className="mt-3 text-stone-300 italic">
            La nostra selezione di birre agricole nasce dalla stessa filosofia dei nostri prodotti da forno: valorizzare le materie prime del territorio per offrirti un'esperienza di gusto autentica e indimenticabile.
        </p>
      </div>

      <MenuSection 
        title="🍺 Le Nostre Birre Agricole" 
        subtitle="Una selezione speciale che celebra i sapori della nostra terra."
      >
        {birreAgricoleItems.map(item => <MenuItem key={item.name} {...item} />)}
      </MenuSection>
      
      <MenuSection 
        title="🌍 Le Classiche Commerciali" 
        subtitle="Etichette internazionali per tutti i gusti."
      >
        {birreCommercialiItems.map(item => <MenuItem key={item.name} {...item} />)}
      </MenuSection>

      <div className="mt-6 p-4 rounded-lg border border-amber-800 bg-amber-950/30 text-stone-300 text-sm text-center">
         <p className="font-bold text-amber-300">"La birra è la prova che Dio ci ama e vuole che siamo felici."</p>
         <p className="text-xs mt-1">- Benjamin Franklin</p>
      </div>
      
    </div>
  );
};

export default BirreMenu;
