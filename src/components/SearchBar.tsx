import React, { useState } from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', query)
  }

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex items-center max-w-2xl mx-auto bg-white rounded-full overflow-hidden shadow-lg">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the web..."
          className="flex-grow px-6 py-3 text-lg focus:outline-none"
        />
        <button type="submit" className="bg-indigo-600 text-white p-3 hover:bg-indigo-700 transition duration-300">
          <Search size={24} />
        </button>
      </div>
    </form>
  )
}

export default SearchBar