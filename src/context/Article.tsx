import { createContext, useState } from 'react'


interface Article {
  author: string
  content: string
  description: string 
  publishedAt: string
  source: {id: string, name: string}
  title: string
  url: string
  urlToImage: string
}

interface ArticleContext {
  article: Article | null,
  saveArticle: (article: Article) => void
}
export const ArticleContext = createContext<ArticleContext | null>(null)

export function ArticleProvider({ children }) {
  const [article, saveArticle] = useState<Article | null>(null)

  return <ArticleContext.Provider value={{article, saveArticle}}>
    {children}
  </ArticleContext.Provider>
}

export default ArticleContext