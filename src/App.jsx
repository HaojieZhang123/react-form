import { useState } from 'react'

const articles = [
  'Articolo 1',
  'Articolo 2',
  'Articolo 3',
  'Articolo 4',
  'Articolo 5',
  'Articolo 6',
  'Articolo 7',
  'Articolo 8',
  'Articolo 9',
  'Articolo 10'
]
function App() {

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </>
  )
}

export default App
