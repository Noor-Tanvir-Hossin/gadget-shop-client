import { FaSearch } from "react-icons/fa";
const SeachBar = ({handleSearch}) => {
  return (
    <form className="flex items-center gap-[2px]" onSubmit={handleSearch}>
        <input type="text" 
        placeholder="Search Products"
        name="search"
        className="max-w-md p-[11px] border border-black rounded-l-md"
        />
        <button className="btn rounded-l-none rounded-r-md btn-outline bg-gray-300">
        <FaSearch />
        </button>
    </form>
  )
}

export default SeachBar