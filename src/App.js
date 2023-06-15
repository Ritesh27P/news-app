import { useState } from "react";
import Search from "./components/Search";
import { useFetchNewsQuery } from "./store";
import NewsList from "./components/NewsList";

const App = () => {
    const [query, setQuery] = useState(null)
    const handleSearch = searchQuery => {
        if (searchQuery.length > 1) setQuery(searchQuery)
    }

    return (
        <div className="col1">
            <div>
                <Search handleSearch={handleSearch}/>
            </div>
            { !query && <NewsList query="india" />}
            { query && <NewsList query={query} /> }
        </div>
    )
}

export default App;