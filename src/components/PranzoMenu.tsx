import React from 'react';
import { MenuItemData } from '../types';
import MenuSection from './MenuSection';
import MenuItem from './MenuItem';

const pranzoItems: MenuItemData[] = [
  {
    name: 'Tegliuccio Essenza di Pomodoro e Mozzarella',
    description:
      'Ristretto di datterino biologico, battuto di olio EVO Rotondella con aglio, prezzemolo e peperoncino, filetti di pomodoro San Marzano arrosto, datterino giallo biologico confit, mozzarella liquida e tranci di mozzarella del Caseificio Aurora.',
    price: '9.50',
    icons: '🍅🧀',
  },
  {
    name: 'Tegliuccio Marinara del Passato',
    description:
      "Impasto con farina di Triticale: pomodoro San Marzano biologico arrosto, pomodorino datterino semidry rosso biologico, ristretto di pomodoro San Marzano, origano dei Monti Lattari, olive denocciolate Rotondella sott'olio, emulsione all'aglio, capperi 'lacrimella' del Vesuvio, alici di Cetara, olio EVO monocultivar Rotondella.",
    price: '9.00',
    icons: '🍅🌿',
  },
  {
    name: 'Tegliuccio Patate e Würstel Artigianali',
    description:
      'Patate fritte a stick, würstel artigianale "Cillo" di Marchigiana, provola liquida, fiordilatte del Caseificio Aurora, olio EVO.',
    price: '8.50',
    icons: '🥔🌭',
  },
  {
    name: 'Tegliuccio Broccoli e Salsiccia',
    description: `Crema di broccolo "Friariello" di Sant'Antonio Abate, Friariello saltato in padella, salsiccia di maiale nero, Parmigiano "dei poverelli" (pane grattugiato, olio, aglio, peperoncino e basilico), olio EVO. (Disponibile da Ottobre a Marzo)`,
    price: '9.50',
    icons: '🥦🌭',
  },
  {
    name: 'Tegliuccio Chieno alla Mortazza',
    description:
      'Mortadella Bonfatti, finocchio in osmosi con aceto, sedano cotto in ghiaccio, olio EVO.',
    price: '8.50',
    icons: '🍞🥬',
  },
];

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
        {pranzoItems.map(item => (
          <MenuItem key={item.name} {...item} />
        ))}
      </MenuSection>

      <div className="mt-6 p-4 rounded-lg border border-amber-800 bg-amber-950/30 text-stone-300 text-sm">
        <h4 className="font-bold text-amber-300 mb-2">Nota Allergeni</h4>
        <p>Per qualsiasi informazione su allergeni e ingredienti non esitate a chiedere al nostro personale.</p>
      </div>
    </div>
  );
};

export default PranzoMenu;
