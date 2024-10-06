import React from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import QuickLinks from './components/QuickLinks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">Welcome to Your Navigator</h1>
        <SearchBar />
        <QuickLinks />
      </main>
      <Footer />
    </div>
  )
}

export default App