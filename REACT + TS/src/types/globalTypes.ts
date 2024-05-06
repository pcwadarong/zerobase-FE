interface IRating {
  readonly rate?: number;
  readonly count?: number;
}

export interface IProduct {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly price: number;
  readonly image: string;
  readonly rating: IRating;
}

export interface FormProps {
  handleUserIDChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ICartItems {
  readonly id: number;
  readonly image: string;
  readonly title: string;
  readonly count: number;
  readonly custom: number;
  readonly price: number;
}

export interface ICartState {
  readonly items?: Record<string | number, ICartItems>;
}