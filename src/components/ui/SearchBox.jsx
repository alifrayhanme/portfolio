import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center bg-white rounded-4xl px-2.5">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="bg-transparent outline-none text-gray"
      />
      <button type="submit">
        <IoSearch className="text-gray cursor-pointer" />
      </button>
    </form>
  );
};

export default SearchBox;
