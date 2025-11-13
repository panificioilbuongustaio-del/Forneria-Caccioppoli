import React from 'react';

const TegliucciItems = [
    { name: 'Tegliuccio Orto di Inverno', seasonalNotes: 'Ottobre-Febbraio' },
    { name: 'Tegliuccio with Seasonal Ingredients', seasonalNotes: 'for various seasons' },
    { name: 'Tegliuccio with Cheese', seasonalNotes: 'available year-round' },
    { name: 'Tegliuccio with Meat', seasonalNotes: 'available year-round' },
    { name: 'Tegliuccio with Veggies', seasonalNotes: 'available year-round' },
    { name: 'Tegliuccio with Fish', seasonalNotes: 'available year-round' },
    { name: 'Tegliuccio Dolci', seasonalNotes: 'for dessert' },
];

const specialeDelMeseItem = { name: 'Baccalà', description: 'Featured dish of the month with olio al basilico.', seasonalNotes: 'seasonal item' };

const specialiItems = [
    { name: 'Margherita', description: 'Classic pizza with Triticale dough.' },
    { name: 'Marinara', description: 'Pizza with garlic and olive oil, featuring Triticale.' },
];

const SalatoMenu = () => {
    return (
        <div>
            <header>
                <h1>Salato Menu</h1>
                <img src='salato-menu-image.jpg' alt='Salato Menu' />
            </header>
            <p>Azienda Agricola Caccioppoli</p>
            <section>
                <h2>Speciale del Mese</h2>
                <p>{specialeDelMeseItem.name} - {specialeDelMeseItem.description}</p>
            </section>
            <section>
                <h2>I Nostri Tegliucci</h2>
                <ul>
                    {TegliucciItems.map(item => (
                        <li key={item.name}>{item.name} ({item.seasonalNotes})</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Speciali con Impasto con farina di Triticale</h2>
                <ul>
                    {specialiItems.map(item => (
                        <li key={item.name}>{item.name} - {item.description}</li>
                    ))}
                </ul>
            </section>
            <footer>
                <p>Allergy Information: Capperi lacrimella del Vesuvio, olive denocciolate, emulsione all'aglio.</p>
            </footer>
        </div>
    );
};

export default SalatoMenu;