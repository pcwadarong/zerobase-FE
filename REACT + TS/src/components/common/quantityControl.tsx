import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  initialAmount: number;
  onAmountChange: (newAmount: number) => void;
}

const QuantityControl = ({ initialAmount, onAmountChange }: Props) => {
  const [amount, setAmount] = useState(initialAmount);

  const quantityMinus = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      onAmountChange(amount - 1);
    }
  };

  const quantityPlus = () => {
    const newAmount = amount + 1 > 9999 ? 9999 : amount + 1;
    setAmount(newAmount);
    onAmountChange(newAmount);
  };

  return (
    <div className="flex gap-3 items-stretch">
      <Button onClick={quantityMinus}>-</Button>
      <input
        type="number"
        className="w-14"
        value={amount}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          const newAmount = isNaN(value) ? 1 : value > 9999 ? 9999 : value;
          setAmount(newAmount);
          onAmountChange(newAmount);
        }}
      />
      <Button onClick={quantityPlus}>+</Button>
    </div>
  );
};

export default QuantityControl;
