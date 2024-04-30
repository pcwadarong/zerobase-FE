import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SortingSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="SORT BY" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="grapes">Recommendations</SelectItem>
          <SelectItem value="apple">New Item</SelectItem>
          <SelectItem value="banana">Price ascending</SelectItem>
          <SelectItem value="blueberry">Price descending</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
