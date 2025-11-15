import React from 'react';
import { MenuItem } from './MenuItem';

const FrittiMenu = () => {
  return (
    <div>
      <h1>Fritti Menu</h1>
      <ul>
        <MenuItem name="Frittatina alla Bolognese" description="Delicious frittatina with Bolognese sauce." price={2.50} icons={['🌾', '🥩']} />
        <MenuItem name="Frittatina Cacio e Pepe" description="Classic Roman frittatina with cheese and pepper." price={2.50} icons={['🧀', '🌾']} />
        <MenuItem name="Frittatina di Pasta e Patate" description="Frittatina with pasta and potatoes." price={2.50} icons={['🥔', '🌾']} />
        <MenuItem name="Polpetta della Nonna" description="Grandma's meatball frittatina." price={2.50} icons={['🥩', '🍞']} />
        <MenuItem name="Crocchè Napoletano" description="Neapolitan potato croquette." price={2.50} icons={['🥔', '🌾']} />
        <MenuItem name="Frittatina Genovese" description="Pasta Senatore Cappelli, genovese con tasca di manzo, besciamella" price={2.50} icons={['🌾', '🥛', '🥚', '🥩']} />
      </ul>
    </div>
  );
};

export default FrittiMenu;