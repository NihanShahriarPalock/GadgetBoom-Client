import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ handleSearch }) => {
  return (
    <form className='flex items-center gap-[2px]' onSubmit={handleSearch}>
      <input
        type='text'
        name='search'
        placeholder='Search Products'
        className='max-w-md p-[11px] border border-black rounded-l-md'
      />
      <button className='btn rounded-l-none rounded-r-md btn-outline bg-gray-300'>
        <IoMdSearch></IoMdSearch>
      </button>
    </form>
  );
};

export default SearchBar;
