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