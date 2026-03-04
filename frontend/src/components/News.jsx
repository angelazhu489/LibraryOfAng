import { useState, useEffect } from "react"

const News = () => {
  const [error, setError] = useState(null);
  const [news, setNews] = useState([])

  useEffect(() => {
    const getTodaysNews = async () => {
      try {
        const response = await fetch('/api/news')
        const json = await response.json();
        if (json.status !== 'ok') {
          console.log("THERES AN ERROR")
          setError(json.message)
        } else {
          const headlines = json.results.map(obj => obj.webTitle)
          setNews(headlines)
          setError(null)
        }
      } catch (err) {
        setError(err)
      }
    }
    getTodaysNews()
  }, [])

  return (
    <div className="news">
      <h2 className="bg-amber-600 p-2">Today's news:</h2>
      <ul className="list-disc p-3">
        {news.map((x) => <li className="p-1">{x}</li>)}
      </ul>
      <h2>error:</h2>
      <p>{error || "no error"}</p>
    </div>
  )
}

export default News;