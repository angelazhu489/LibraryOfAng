import { useState } from "react"
import formatDistance from 'date-fns/formatDistanceToNow'

const News = () => {
  const [error, setError] = useState(null);
  const [news, setNews] = useState([])

  const getTodaysNews = async () => {
    try {
      const response = await fetch('/api/news')
      const json = await response.json();
      if (json.message) {
        setError(json.message)
      } else {
        setNews(json)
        setError(null)
      }
    } catch (error) {
      setError(error)
    }
  }
  getTodaysNews()

  return (
    <div className="news">
      <p>error: {error}</p>
      <p>news: {news}</p>
    </div>
  )
}

export default News;