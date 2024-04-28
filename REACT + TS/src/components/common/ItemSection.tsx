import ItemList from './ItemList';

interface Props {
  title: string;
}

const ItemSection: React.FC<Props> = ({ title }) => (
  <div className="flex flex-col gap-10 justify-center">
    <div className="w-[85rem] mx-auto grid grid-cols-4 gap-8 py-32">
      <div className="col-span-full">
        <h2 className="text-xl font-extra">{title}</h2>
      </div>
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
    </div>
  </div>
);

export default ItemSection;
