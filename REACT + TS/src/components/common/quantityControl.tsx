import { useState } from 'react';

interface Props {
  initialAmount: number;
  onAmountChange: (newAmount: number) => void;
  size: string;
}

const QuantityControl = ({ initialAmount, onAmountChange, size }: Props) => {
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

  if (size === 'big') {
    return (
      <div className="flex gap-3 items-stretch">
        <button
          className="border-[1px] border-gray-400 px-3"
          onClick={quantityMinus}
        >
          -
        </button>
        <input
          type="number"
          className="w-16 dark:bg-gray-600 rounded-md p-2"
          value={amount}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            const newAmount = isNaN(value) ? 1 : value > 9999 ? 9999 : value;
            setAmount(newAmount);
            onAmountChange(newAmount);
          }}
        />
        <button
          className="border-[1px] border-gray-400 px-3"
          onClick={quantityPlus}
        >
          +
        </button>
      </div>
    );
  } else {
    return (
      <div className="h-full flex items-center">
        <button onClick={quantityMinus}>ᐊ</button>
        <input
          type="number"
          className="w-14 dark:bg-gray-600 rounded-md px-2"
          value={amount}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            const newAmount = isNaN(value) ? 1 : value > 9999 ? 9999 : value;
            setAmount(newAmount);
            onAmountChange(newAmount);
          }}
        />
        <button onClick={quantityPlus}>ᐅ</button>
      </div>
    );
  }
};

export default QuantityControl;
