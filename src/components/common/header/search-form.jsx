import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Nếu vào trang chi tiết sản phẩm thì xóa từ khóa tìm kiếm
    if (location.pathname.startsWith("")) {
      setSearchTerm("");
    }
  }, [location.pathname]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    navigate(`/products/?title=${encodeURIComponent(value)}`);
  };

  return (
    <div className="py-3 w-[46.2%] bg-[#F0F0F0] rounded-full hidden lg:flex px-4">
      <Search className="text-gray-500" />
      <input
        className="bg-[#F0F0F0] rounded-full w-full outline-none px-3"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchForm;
