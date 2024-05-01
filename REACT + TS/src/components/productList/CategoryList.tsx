import { Category } from '@/components/constants/category';

interface Props {
  selectedCategory: string;
  onChange: (category: string) => void;
}

export default function CategoryList({ selectedCategory, onChange }: Props) {
  return (
    <ul className="flex gap-5">
      {Object.entries(Category).map(([key]) => (
        <li
          key={key}
          className={`text-gray-500 cursor-pointer p-2 text-md tracking-wider hover:text-black ${selectedCategory === key ? 'border-b-[1px] border-slate-500 text-black' : ''}`}
          onClick={() => onChange(key)}
        >
          {key.toUpperCase()}
        </li>
      ))}
    </ul>
  );
}