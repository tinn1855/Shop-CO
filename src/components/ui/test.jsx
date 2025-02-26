// import useQueryProductsByTitle from "@/src/hooks/queries/use-query-products-by-title";
// import { useState } from "react";

// const SearchProduct = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const { products, loading, error } = useQueryProductsByTitle(searchTerm);

//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         className="border p-2 w-full rounded"
//         placeholder="Tìm kiếm sản phẩm..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       {loading && <p>Đang tải...</p>}
//       {error && <p className="text-red-500">Lỗi khi tải dữ liệu</p>}
//       {products.length === 0 && !loading && !error && <p>Không tìm thấy sản phẩm nào.</p>}
//       <ul className="mt-4">
//         {products.map((product) => (
//           <li key={product.id} className="border-b py-2">
//             {product.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchProduct;
