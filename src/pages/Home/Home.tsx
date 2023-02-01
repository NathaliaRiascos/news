import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import styles from '../styles/Home.module.css'

const alanKey: string = '761c89ec1953cbeeea6bed94eb2e15d22e956eca572e1d8b807a3e2338fdd0dc/stage'

import '../../App'
import { Cards } from './components'
import { wordsToNumbers } from '../../utilities/wordstoNumber'


function Home() {
  const [ newsArticles, setNewArticles ] = useState([])
  const [ activeArticle, setActiveArticle ] = useState(0)

  useEffect(() => {
    const instance = alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }: any) => {
        if (command === 'getArticles') {
          console.log(articles)
          setNewArticles(articles)
        } else if (command === 'highlight') {
          setActiveArticle(prev => prev + 1 )
        } 
        else if  (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers(number): number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20){
            instance.playText('Please try that again')
          } else if (article) {
            window.open(articles[parsedNumber].url, '_blank')
            instance.playText('Opening...')
          }     
        }
      }
    })
  }, [])

  return (
    <div className="App">
     <h1>Holi</h1>
     {
      !newsArticles.length? <p>No hay</p>
      : <Cards articles={newsArticles} activeArticle={activeArticle}/>
     }
     
    </div>
  )
}

export default Home
