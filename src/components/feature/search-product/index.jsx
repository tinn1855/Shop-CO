import useQueryProductsByTitle from "@/src/hooks/queries/use-query-products-by-title";
import { useLocation } from "react-router-dom";
import { Sidebar } from "../category/sidebar";
import { CategoryProduct } from "../../molecules/category-product";

export function SearchProduct() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("title") || "";

    const { products, loading, error } = useQueryProductsByTitle(searchTerm);

    return (
        <div className="container mx-auto px-4 lg:px-5">
            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-1">
                    <Sidebar />
                </div>
                <div className="col-span-3">
                    {loading && <p>Đang tải...</p>}
                    {error && <p className="text-red-500">Lỗi khi tải dữ liệu</p>}
                    {products.length === 0 && !loading && !error && <p>Không tìm thấy sản phẩm nào.</p>}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {products.map((product) => (
                            <CategoryProduct product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
