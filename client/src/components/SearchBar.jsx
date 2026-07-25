function SearchBar({search,setSearch}){


return (

<input

className="search"

type="text"

placeholder="Search by name or email..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

);


}


export default SearchBar;