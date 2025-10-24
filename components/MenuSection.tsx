import React from 'react';

interface MenuSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  subtitleClassName?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, subtitle, children, subtitleClassName }) => {
  return (
    <section className="bg-stone-900/20 p-4 md:p-6 rounded-xl border border-amber-900/50">
      <h3 className="text-2xl font-bold text-amber-300 tracking-wide">{title}</h3>
      {subtitle && <p className={`mt-2 text-stone-300 ${subtitleClassName || ''}`}>{subtitle}</p>}
      <div className="mt-4 space-y-2">
        {children}
      </div>
    </section>
  );
};

export default MenuSection;