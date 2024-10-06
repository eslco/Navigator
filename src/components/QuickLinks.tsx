import React from 'react'
import { Mail, Calendar, FileText, Bookmark } from 'lucide-react'

const QuickLinks = () => {
  const links = [
    { icon: Mail, text: 'Email', url: '#' },
    { icon: Calendar, text: 'Calendar', url: '#' },
    { icon: FileText, text: 'Documents', url: '#' },
    { icon: Bookmark, text: 'Bookmarks', url: '#' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <link.icon size={32} className="text-indigo-600 mb-2" />
          <span className="text-gray-800 font-medium">{link.text}</span>
        </a>
      ))}
    </div>
  )
}

export default QuickLinks