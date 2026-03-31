import { useEffect } from "react"

const Spotify = () => {
  const handleClick = () => {
    console.log("CLICKED")
  }

  return (
    <button onClick={handleClick} className="text-amber-600 rounded-md border-2 p-1 m-2 hover:cursor-pointer">get spotify songs</button>
  )
}
export default Spotify