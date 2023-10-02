import { debounce } from 'debounce';

type SearchBarProps = {
    setSearch: (search: string) => void
    id ?: string
}

const SearchBar = ({setSearch, id = 'search'}: SearchBarProps) => {

const onChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setSearch(value)
}, 1000)

return (
    <>
        <label htmlFor={id} className="block mb-2 text-sm font-bold text-gray-700">Search</label>
        <input 
            type="text" 
            id={id}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
            placeholder="Enter a location" 
            onChange={onChange}
        />
    </>
    )
}

export default SearchBar