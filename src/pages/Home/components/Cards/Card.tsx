import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import classNames from 'classNames'
import ArticleContext from "../../../../context/Article"
import { Link } from 'react-router-dom';

interface Props {
  article: any;
  number: number,
  activeArticle: number
}

function Card({ article: articleProp, number, activeArticle}: Props) {
  const {article, saveArticle } = useContext(ArticleContext)
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate(`/${number}`)
  }, [article])
  
  const handleClick = () => {
    saveArticle(articleProp)
    // navigate(`/${number}`)
  }
  return (
    <div>
      New Card
      <h1 style={{backgroundColor: activeArticle == number? 'blue': 'transparent'}}>
        { articleProp.title }
      </h1>
      <p>{ articleProp.description}</p>
      <small>{number}</small>
      <button onClick={handleClick}>
        {/* <Link to={`/${article.source.id}`}> */}
          Show More
        {/* </Link> */}
        </button>
    </div>
  )
}

export default Card