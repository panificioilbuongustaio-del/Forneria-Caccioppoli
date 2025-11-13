import React from 'react';

const menuItems = [
    { name: 'Cornetto Amalfitano', description: 'Delicious cornetto with latte nobile', price: 1.50 },
    { name: 'Cornetto Crema e Amarena', description: 'Creamy cornetto with amarena cherries', price: 1.70 },
    { name: 'Cornetto Confettura di Albicocche', description: 'Cornetto filled with pellecchiella apricot jam', price: 1.60 },
    { name: 'Caffè', description: 'Espresso coffee', price: 1.00 },
    { name: 'Macchiato', description: 'Espresso with a splash of milk', price: 1.20 },
    { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: 1.80 }
];

const ColazioneMenu = () => {
    return (
        <div>
            <h1>Colazione Menu</h1>
            <ul>
                {menuItems.map(item => (
                    <li key={item.name}>{item.name} - {item.description} - €{item.price.toFixed(2)}</li>
                ))}
            </ul>
        </div>
    );
};

export default ColazioneMenu;