import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SearchForm() {
    
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  const handlerSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      navigate(`/category/?title=${searchTerm}`);
    }
  };
  console.log(searchTerm);

  return (
    <div className="py-3 w-[46.2%] bg-[#F0F0F0] rounded-full hidden lg:flex px-4">
      <Search className="text-gray-500" />
      <input
        className="bg-[#F0F0F0] rounded-full w-full outline-none px-3"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        onKeyDown={handlerSearch}
      />
    </div>
  );
}
