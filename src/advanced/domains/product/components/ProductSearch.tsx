import { Input } from "../../../shared/components/ui/Input";
import { useProductStore } from "../store/productStore";

export function ProductSearch() {
  const { searchTerm, setSearchTerm } = useProductStore();

  return (
    <Input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="상품 검색..."
      className="w-full"
    />
  );
}
