import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CustomSelectProps } from "@/app/lib/props";

const CustomSelect = ({ setQuantity }: CustomSelectProps) => {
  return (
    <>
      <Select
        onValueChange={(value) => {
          setQuantity(parseInt(value));
        }}
      >
        <SelectTrigger className="md:w-2/5 xl:w-1/12">
          <SelectValue defaultValue="6" placeholder="6 items" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="6">6 items</SelectItem>
          <SelectItem value="8">8 items</SelectItem>
          <SelectItem value="12">12 items</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default CustomSelect;
