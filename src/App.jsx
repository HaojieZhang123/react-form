import { useState } from 'react'

const articlesArray = [
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

  const [articles, setArticles] = useState(articlesArray)
  const [newArticle, setNewArticle] = useState('')

  const createArticle = (e) => {
    e.preventDefault()
    setArticles([...articles, newArticle])
    setNewArticle('')
  }

  const deleteArticle = (index) => {
    const updatedArticles = [...articles]
    updatedArticles.splice(index, 1)
    setArticles(updatedArticles)
  }

  return (
    <>
      <div className="container">
        <h1>Blog List</h1>
        <ul>
          {articles.map((element, index) => (
            <li key={index}>
              {element}
              <button onClick={() => deleteArticle(index)}>Cancella</button>
            </li>
          ))}
        </ul>

        <form onSubmit={createArticle}>
          <input type="text" value={newArticle} onChange={(e) => setNewArticle(e.target.value)} />
          <button>Aggiungi</button>
        </form>
      </div>
    </>
  )
}

export default App
