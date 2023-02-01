import React from 'react'
import Card from './Card'
import { ArticleProvider } from '../../../../context/Article'

interface Props {
  articles: any[]
  activeArticle: number

}
function Cards({ articles, activeArticle }: Props) {
  console.log(articles)
  
  return (
    <ArticleProvider>
      <h1>News Cards</h1>
      { articles.map((article, number) => (
        <Card articleProp={article} activeArticle={activeArticle} number={number + 1}/>
      ))}
    </ArticleProvider>
  )
}

export default Cards