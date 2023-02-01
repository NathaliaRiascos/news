import React, { useContext, useEffect } from 'react'
import classNames from 'classNames'
import ArticleContext from "../../context/Article"

function Article() {
  const { article } = useContext(ArticleContext) 

  console.log(article)
  return (
    <div>Article {article?.title}</div>
  )
}

export default Article