import { Input } from "@/components/ui/input";
import { SearchInputProps } from "@/app/lib/props";

const SearchInput = ({ setQuery }: SearchInputProps) => {
  const handleChange = (e: any) => {
    setTimeout(() => {
      setQuery(e.target.value);
    }, 1000);
  };
  return (
    <Input
      type="text"
      placeholder="Product name"
      className="md:w-3/5 xl:w-3/12"
      onChange={handleChange}
    />
  );
};

export default SearchInput;
