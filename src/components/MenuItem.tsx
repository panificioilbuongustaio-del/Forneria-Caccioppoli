
import React from 'react';
import { MenuItemData } from '../types';

const MenuItem: React.FC<MenuItemData> = ({ name, description, price, icons, seasonalNote }) => {
  const [amount, unit] = price.includes('/') ? price.split('/') : [price, null];

  return (
    <div className="py-3 border-b border-amber-900/50 last:border-b-0">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h4 className="font-bold text-stone-100">{name}</h4>
          <p className="text-sm text-stone-300 italic mt-1">{description}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-amber-400 whitespace-nowrap">
            € {amount.trim()}
          </div>
          {unit && <div className="text-xs text-stone-400 -mt-1">{unit.trim()}</div>}
        </div>
      </div>
      {seasonalNote && <p className="text-xs text-amber-300 mt-2 font-semibold">{seasonalNote}</p>}
      {icons && <p className="text-sm mt-2">{icons}</p>}
    </div>
  );
};

export default MenuItem;
