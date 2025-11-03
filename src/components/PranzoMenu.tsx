import React from 'react';
import { MenuItemData } from '../types';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

const pranzoItems: MenuItemData[] = [
    { name: 'Tegliuccio Chieno alla Mortazza', description: "Mortadella Favola Palmieri, finocchio in osmosi con aceto, sedano cotto in ghiaccio, olio EVO frantoiano.", price: '5.00 / fetta', icons: [] },
    { name: 'Tegliuccio Chieno Spalla di Maiale Nero', description: "Spalla di maiale nero cotta a bassa temperatura, mozzarella Paolo Amato, provolone dei Monti Lattari, sbattuto di olio Rotondella, prezzemolo e peperoncino.", price: '5.00 / fetta', icons: [] },
    // MODIFIED - changed to double quotes because the name contains apostrophes
    { name: "Tegliuccio Chieno di Sant'Antonio Abate", description: "Porchetta di Sant'Antonio Abate, patate al forno in burro affumicato sì Paolo Amato, provola liquida, filetti di provola di vacca Jersey, pepe biologico.", price: '5.00 / fetta', icons: [] },

    // MODIFIED
    { name: 'Tegliuccio alla Genovese', description: "Cipolla ramata di Montoro, sfilaccetti di tasca di manzo, crema di pecorino dei Monti Lattari, profumo di alloro, pepe intero biologico macinato fresco.", price: '5.00 / fetta', icons: [] },

    { name: 'Tegliuccio della Costiera', description: "Base di ricotta dei Monti Lattari, alici di Cetara, basilico fresco, pomodorino datterino semidry biologico, spunta di marmellata al limone.", price: '5.00 / fetta', icons: [] },

    // MODIFIED
    { name: 'Tegliuccio Marinara del Passato (Impasto Integrale)', description: "Pomodoro arrosto di datterino biologico, ristretto di pomodoro San Marzano biologico, origano di Pantelleria, olive nere denocciolate, aglio rosso di Sulmona, alici di azienda Sciacca.", price: '4.50 / fetta', icons: [] },

    { name: 'Tegliuccio Patate e Wurstel Artigianali', description: 'Patate fritte a stick, wurstel artigianale "Cillo" di Marchigiana, provola liquida, fior di latte Paolo Amato, olio EVO frantoiano.', price: '5.00 / fetta', icons: [] },
    { name: 'Tegliuccio Essenza di Pomodoro e Mozzarella', description: "Ristretto di datterino biologico, battuto di olio EVO Rotondella con aglio, prezzemolo e peperoncino, filetti di pomodoro San Marzano biologico, fiordilatte Paolo Amato.", price: '4.50 / fetta', icons: [] },

    // MODIFIED
    { name: 'Tegliuccio Diavolo Giallo', description: 'Ristretto di datterino giallo biologico, datterino giallo confit, mozzarella Paolo Amato, filetti di salame di maiale Neri fattorie Cillo, basilico fresco.', price: '5.00 / fetta', icons: [] },

    // MODIFIED
    { name: 'Tegliuccio Broccoli e Salsiccia', description: "Crema di broccolo 'Friariello' di Sant'Antonio Abate, salsiccia di maiale nero, provola di Paolo Amato, basilico, olio EVO frantoiano, parmigiano dei poverelli al friariello.", price: '5.00 / fetta', icons: [] },

    // MODIFIED - changed to double quotes because the name contains apostrophes
    { name: "Tegliuccio Orto d'Inverno", description: "Zucca grigliata e condita con battuto di prezzemolo, olio monocultivar rotondella e peperoncino secco, fior di latte di vacca Jersey, porcini dei monti di Vico Equense ripassati in padella ai profumi di cipolla", price: '5.00 / fetta', icons: [] },

    // MODIFIED
    { name: 'Tegliuccio Allardiato', description: "Sugo allardiato, mozzarella Paolo Amato, parmigiano reggiano, olio Rotondella, profumo di alloro al pomodoro datterino biologico.", price: '4.50 / fetta', icons: [] },

    // MODIFIED
    { name: "Tegliuccio a Casa e Mammà", description: "Ragù napoletano di San Marzano biologico, mozzarella Paolo Amato, parmigiano reggiano, olio Rotondella, profumo di alloro dopo ragù di San Marzano biologico.", price: '5.00 / fetta', icons: [] }
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
        subtitle="Scegli tra i nostri tegliucci monoporzione o i ricchi tegliucci chieni serviti a fetta."
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