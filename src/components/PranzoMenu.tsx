import React from 'react';
import { MenuItemData } from '../types';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

const pranzoItems: MenuItemData[] = [
    { name: 'Tegliuccio Chieno alla Mortazza', description: "Mortadella Bonfatti, finocchio in osmosi con aceto, sedano cotto in ghiaccio, olio EVO.", price: '5.00 / fetta', icons: [] },
    { name: 'Tegliuccio Chieno Spalla di Maiale Nero', description: "Spalla di maiale nero cotta a bassa temperatura, mozzarella del Caseificio Aurora, provolone dei Monti Lattari, sbattuto di olio EVO monocultivar Rotondella, prezzemolo, peperoncino, gocce di marmellata di albicocche Pellecchiella del Vesuvio.", price: '5.00 / fetta', icons: [] },
    { name: "Tegliuccio Chieno di Sant'Antonio Abate", description: "Porchetta di Sant'Antonio Abate, patate rosolate al burro affumicato del Caseificio Aurora, maionese al limone fatta in casa.", price: '5.00 / fetta', icons: [] },
    { name: 'Tegliuccio alla Genovese', description: "Cipolla ramata di Montoro, sfilaccetti di carne di manzo, crema di pecorino dei Monti Lattari, profumo di alloro, pepe intero biologico macinato al momento, basilico, olio EVO monocultivar Rotondella.", price: '5.00 / fetta', icons: [] },
    { name: 'Tegliuccio della Costiera', description: "Base di ricotta dei Monti Lattari, alici di Cetara, basilico fresco, pomodorino datterino semidry biologico, gocce di marmellata al limone.", price: '5.00 / fetta', icons: [] },
    { name: 'Tegliuccio Marinara del Passato (Impasto con farina di Triticale)', description: "Pomodoro San Marzano biologico arrosto, pomodorino datterino semidry rosso biologico, ristretto di pomodoro San Marzano, origano dei Monti Lattari, olive denocciolate Rotondella sott'olio, emulsione all'aglio, capperi 'lacrimella' del Vesuvio, alici di Cetara, olio EVO monocultivar Rotondella.", price: '5.00 / fetta', icons: [] },
    { name: 'Tegliuccio Patate e Würstel Artigianali', description: 'Patate fritte a stick, würstel artigianale "Cillo" di Marchigiana, provola liquida, fiordilatte del Caseificio Aurora, olio EVO.', price: '4.50 / fetta', icons: [] },
    { name: 'Tegliuccio Essenza di Pomodoro e Mozzarella', description: "Ristretto di datterino biologico, battuto di olio EVO Rotondella con aglio, prezzemolo e peperoncino, filetti di pomodoro San Marzano arrosto, datterino giallo biologico confit, mozzarella liquida, tranci di mozzarella del Caseificio Aurora fresca.", price: '4.50 / fetta', icons: [] },
    { name: 'Tegliuccio Diavolo Giallo', description: 'Ristretto di datterino giallo biologico, datterino giallo confit, mozzarella del Caseificio Aurora, filetti di salame a punta di coltello "Cillo", basilico, olio EVO monocultivar Rotondella.', price: '4.50 / fetta', icons: [] },
    { name: 'Tegliuccio Broccoli e Salsiccia', description: "Crema di broccolo 'Friariello' di Sant'Antonio Abate, 'Friariello' di Sant'Antonio Abate saltato in padella, salsiccia di maiale nero, Parmigiano 'dei poverelli' (pane grattugiato, olio, aglio, peperoncino e basilico), olio EVO.", price: '5.00 / fetta', icons: [], seasonalNote: 'Disponibile da Ottobre a Marzo' },
];

const PranzoMenu: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center font-bold text-amber-300 text-lg py-2 rounded-lg bg-amber-950/50 border border-amber-800">
        <p>Menu Pranzo - Valido dalle 12:00 alle 15:00</p>
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src="https://i.ibb.co/v6zpPmN6/Adobe-Express-file-2.png" alt="Tegliucci salati per pranzo" className="w-full h-56 object-cover mt-[5px]" />
      </div>

      <MenuSection
        title="I Nostri Tegliucci per il Pranzo"
        subtitle='Scegli tra i nostri tegliucci monoporzione o i ricchi tegliucci "chieni" serviti a fette.'
      >
        {pranzoItems.map(item => <MenuItem key={item.name} {...item} />)}
      </MenuSection>

      <div className="mt-6 p-4 rounded-lg border border-amber-800 bg-amber-950/30 text-stone-300 text-sm">
        <h4 className="font-bold text-amber-300 mb-2">Nota Allergeni</h4>
        <p>Per qualsiasi informazione su allergeni e ingredienti non esitate a chiedere al nostro personale.</p>
        <p className="mt-2 text-lg">🌾 🥛 🥚 🐖 🌿 🐟</p>
      </div>
    </div>
  );
};

export default PranzoMenu;