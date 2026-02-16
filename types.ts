
export interface MortgageState {
  homePrice: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
}

export interface AmenityScore {
  name: string;
  score: number;
  color: string;
}

export enum FeatureId {
  SEARCH = 'search',
  MORTGAGE = 'mortgage',
  MAP = 'map',
  LIFESTYLE = 'lifestyle',
  AI_ASSISTANT = 'ai-assistant'
}
