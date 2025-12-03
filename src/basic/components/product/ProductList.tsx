import useSearch from "../../hooks/useSearch";
import { ProductWithUI } from "../../types";
import ProductItem from "./ProductItem";

export default function ProductList({
  products,
}: {
  products: ProductWithUI[];
}) {
  const { searchTerm, debouncedSearchTerm } = useSearch();
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="lg:col-span-3">
      <section>
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">전체 상품</h2>
          <div className="text-sm text-gray-600">
            총 {products.length}개 상품
          </div>
        </div>
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              "{debouncedSearchTerm}"에 대한 검색 결과가 없습니다.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductItem product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
