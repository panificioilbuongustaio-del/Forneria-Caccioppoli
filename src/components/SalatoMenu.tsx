import React from 'react';
import { MenuItemData } from '../types';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

const tegliucciItems: MenuItemData[] = [
  { name: 'Tegliuccio Allardiato', description: "Pomodoro datterino biologico, lardo di maiale nero, pecorino dei Monti Lattari grattugiato, profumo di alloro, pepe intero biologico macinato al momento, basilico, olio EVO monocultivar Rotondella.", price: '8.00', icons: '🌾🥛🐖' },
  { name: 'Tegliuccio "A Cas e Mammà"', description: "Ragù di pomodoro San Marzano biologico, braciola di manzo con capperi 'lacrimella' del Vesuvio, prezzemolo e pecorino dei Monti Lattari, profumo di alloro, pepe intero biologico macinato al momento, basilico, olio EVO monocultivar Rotondella.", price: '8.00', icons: '🌾🥛🐖' },
  { name: 'Tegliuccio Patate e Würstel Artigianali', description: 'Patate fritte a stick, würstel artigianale "Cillo" di Marchigiana, provola liquida, fior di latte del Caseificio Aurora, olio EVO.', price: '8.00', icons: '🌾🥛' },
  { name: 'Tegliuccio Diavolo Giallo', description: 'Ristretto di datterino giallo biologico, datterino giallo confit, mozzarella del Caseificio Aurora, filetti di salame a punta di coltello "Cillo", basilico, olio EVO Rotondella.', price: '8.00', icons: '🌾🥛🐖' },
  { name: 'Tegliuccio Broccoli e Salsiccia', description: "Crema di broccolo 'Friariello' di Sant'Antonio Abate, salsiccia di maiale nero, provola dei Monti Lattari, basilico, olio EVO.", price: '8.00', icons: '🌾🥛🐖', seasonalNote: 'Disponibile da Ottobre a Marzo' },
  { name: 'Tegliuccio Orto di Inverno', description: "Zucca, Cardoncelli, Porcini freschi, Provola di Agerola, aglio, olio, peperoncino", price: '8.00', icons: '🌾🥛', seasonalNote: 'Disponibile da Ottobre a Febbraio' },
  { name: 'Tegliuccio Essenza di Pomodoro e Mozzarella', description: "Ristretto di datterino biologico, battuto di olio EVO monocultivar Rotondella con aglio, prezzemolo e peperoncino, filetti di pomodoro San Marzano arrosto, datterino giallo biologico confit, mozzarella liquida, tranci di mozzarella del Caseificio Aurora fresca.", price: '8.00', icons: '🌾🥛' },
];

const specialeDelMeseItem: MenuItemData[] = [
    { name: 'Tegliuccio al Baccalà (Impasto con farina di Triticale)', description: "Ristretto di pomodoro San Marzano biologico, filetti di pomodoro San Marzano arrosto, baccalà mantecato, battuta di olio EVO, prezzemolo e peperoncino, olive denocciolate Rotondella, olio al basilico.", price: '10.00', icons: '🌾🐟' },
];

const specialiItems: MenuItemData[] = [
    { name: 'Tegliuccio Margherita del Contadino (Impasto con farina di Triticale)', description: "Pomodorino datterino biologico arrosto, ristretto di pomodoro datterino rosso biologico, emulsione all'aglio, basilico, mozzarella di bufala a tranci, olio EVO monocultivar Rotondella.", price: '8.00', icons: '🌾🥛🥚' },
    { name: 'Tegliuccio Marinara del Passato (con farina di Triticale)', description: "Pomodoro San Marzano biologico arrosto, pomodorino datterino semidry rosso biologico, ristretto di pomodoro San Marzano, origano dei Monti Lattari, olive denocciolate Rotondella sott'olio, emulsione all'aglio, capperi 'lacrimella' del Vesuvio, alici di Cetara, olio EVO monocultivar Rotondella.", price: '8.00', icons: '🌾🐟' },
];

const SalatoMenu: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center font-bold text-amber-300 text-lg py-2 rounded-lg bg-amber-950/50 border border-amber-800">
        <p>Menu Cena - Valido dalle 18:00 alle 24:00</p>
      </div>
      
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src="https://i.ibb.co/v6zpPmN6/Adobe-Express-file-2.png" alt="Tegliucci salati" className="w-full h-56 object-cover mt-[5px]" />
      </div>

      <div className="p-6 rounded-xl border-2 border-amber-800/70 bg-gradient-to-br from-stone-900/40 to-amber-950/20 text-center shadow-lg">
        <h3 className="font-display text-2xl font-bold text-amber-300">La Nostra Filosofia: Dalla Terra alla Teglia</h3>
        <p className="mt-3 text-stone-300 italic">
            Crediamo nel legame indissolubile con la nostra terra. Per questo, ogni ingrediente che assaggiate proviene direttamente dai campi della nostra <strong>Azienda Agricola Caccioppoli</strong> o dalle mani sapienti di piccoli produttori locali che condividono la nostra stessa passione per la qualità.
        </p>
        <p className="mt-4 font-display text-xl text-amber-400 font-semibold tracking-wider">
            "Ogni morso farà fiorire chilometri di agricoltura"
        </p>
      </div>

      <MenuSection 
        title="🌟 Speciale del Mese" 
        subtitle="Una creazione unica, disponibile solo per un periodo limitato."
      >
        {specialeDelMeseItem.map(item => <MenuItem key={item.name} {...item} />)}
      </MenuSection>

      <MenuSection 
        title="I Nostri Tegliucci" 
        subtitle="Creazioni uniche con ingredienti del territorio, servite in teglia."
      >
        {tegliucciItems.map(item => <MenuItem key={item.name} {...item} />)}
      </MenuSection>

      <MenuSection 
        title="Speciali con Impasto con farina di Triticale" 
        subtitle="Le nostre creazioni con impasto con farina di Triticale e abbinamenti ricercati."
      >
        {specialiItems.map(item => <MenuItem key={item.name} {...item} />)}
      </MenuSection>

      <div className="mt-6 p-4 rounded-lg border border-amber-800 bg-amber-950/30 text-stone-300 text-sm">
        <h4 className="font-bold text-amber-300 mb-2">Nota Allergeni</h4>
        <p>Per qualsiasi informazione su allergeni e ingredienti non esitate a chiedere al nostro personale. I piatti possono contenere tracce dei seguenti allergeni.</p>
        <p className="mt-2 text-lg">🌾 🥛</p>
      </div>

    </div>
  );
};

export default SalatoMenu;