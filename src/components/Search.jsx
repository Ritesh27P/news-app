import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../store";

const Search = ({handleSearch}) => {
    const dispatch = useDispatch()
    const search = useSelector(state => state.search.value)
    
    const handleEvents = e => {
        handleSearch(search);
        dispatch(updateSearch(''))
    }

    return (
        <div className="nav">
            <h2>ShortNews</h2>

            <div className="search">
                <input value={search} onChange={event => dispatch(updateSearch(event.target.value))} />
                <button onClick={handleEvents}>Search</button>
            </div>
        </div>
    );
}

export default Search;