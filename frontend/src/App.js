import React, { useState } from 'react';
import { searchCases } from './api';
import SearchBar from './components/SearchBar';
import CaseCard from './components/CaseCard';
import './App.css';

function App() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!query.trim()) return;
        setLoading(true);
        const data = await searchCases(query);
        setResults(data);
        setLoading(false);
    };

    return (
        <div className="app">
            <h1>LegalTales Case Explorer</h1>
            <SearchBar
                query={query}
                setQuery={setQuery}
                onSearch={handleSearch}
            />
            {loading && <p>Searching...</p>}
            <div className="results">
                {results.map((caseItem) => (
                    <CaseCard key={caseItem.id} caseItem={caseItem} />
                ))}
            </div>
        </div>
    );
}

export default App;