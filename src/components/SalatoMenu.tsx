import React from 'react';
import { MenuItemData } from '../types';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

const tegliucciItems: MenuItemData[] = [
  { name: 'Tegliuccio Allardiato', description: "Pomodoro datterino biologico, lardo di maiale nero, pecorino dei Monti Lattari grattugiato, profumo di alloro, pepe intero biologico macinato al momento.", price: '9.00', icons: '🍞🧀' },
  { name: 'Tegliuccio Chieno Spalla di Maiale Nero', description: "Spalla di maiale nero cotta a bassa temperatura, mozzarella del Caseificio Aurora, provolone dei Monti Lattari, battuto di olio EVO.", price: '9.00', icons: '🥩🧀' },
  { name: 'Tegliuccio Chieno alla Mortazza', description: "Mortadella Bonfatti, finocchio in osmosi con aceto, sedano cotto in ghiaccio, olio EVO.", price: '8.50', icons: '🍞🥬' },
  { name: 'Tegliuccio della Costiera', description: "Base di ricotta dei Monti Lattari, alici di Cetara, basilico fresco, pomodorino datterino semidry biologico, marmellata al limone.", price: '9.00', icons: '🐟🧀' },
  { name: 'Tegliuccio Marinara del Passato', description: "Impasto con farina di Triticale: pomodoro San Marzano biologico arrosto, pomodorino datterino semidry rosso biologico, ristretto di pomodoro San Marzano, origano dei Monti Lattari, olive denocciolate Rotondella sott'olio, emulsione all'aglio, capperi 'lacrimella' del Vesuvio, alici di Cetara, olio EVO monocultivar Rotondella.", price: '9.00', icons: '🍅🌿' },
  { name: 'Tegliuccio Patate e Würstel Artigianali', description: 'Patate fritte a stick, würstel artigianale "Cillo" di Marchigiana, provola liquida, fiordilatte del Caseificio Aurora, olio EVO.', price: '8.50', icons: '🥔🌭' },
  { name: 'Tegliuccio Essenza di Pomodoro e Mozzarella', description: 'Ristretto di datterino biologico, battuto di olio EVO Rotondella con aglio, prezzemolo e peperoncino, filetti di pomodoro San Marzano arrosto, datterino giallo biologico confit, mozzarella liquida e tranci di mozzarella del Caseificio Aurora.', price: '9.50', icons: '🍅🧀' },
  { name: 'Tegliuccio Diavolo Giallo', description: 'Ristretto di datterino giallo biologico, datterino giallo confit, mozzarella del Caseificio Aurora, filetti di salame a punta di coltello "Cillo", basilico, olio EVO monocultivar Rotondella.', price: '9.50', icons: '🌶️🧀' },
  { name: 'Tegliuccio Broccoli e Salsiccia', description: `Crema di broccolo "Friariello" di Sant'Antonio Abate, Friariello saltato in padella, salsiccia di maiale nero, Parmigiano "dei poverelli" (pane grattugiato, olio, aglio, peperoncino e basilico), olio EVO. (Disponibile da Ottobre a Marzo)`, price: '9.50', icons: '🥦🌭' },
];

const SalatoMenu: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* header and philosophy text */}
      <MenuSection title="I Nostri Tegliucci" subtitle="Creazioni uniche con ingredienti del territorio, servite in teglia.">
        {tegliucciItems.map(item => <MenuItem key={item.name} {...item} />)}
      </MenuSection>
    </div>
  );
};

export default SalatoMenu;
