export enum MenuTab {
  COLAZIONE = 'COLAZIONE',
  DOLCE_SERA = 'DOLCE_SERA',
  PRANZO = 'PRANZO',
  CENA = 'CENA',
  FRITTI = 'FRITTI',
  BIRRE = 'BIRRE',
}

export interface MenuItemData {
  name: string;
  description: string;
  price: string;
  icons: string;
  seasonalNote?: string;
}