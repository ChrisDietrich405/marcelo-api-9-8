export interface TreasuryYieldDataProps {
    date: string;
    value: string;
  }
  
export interface TreasuryYieldProps {
    data: TreasuryYieldDataProps[];
    interval: string;
    name: string;
    unit: string;
  }