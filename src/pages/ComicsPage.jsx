import { useState } from "react"
import { EXPRESS_APP } from "../sevices/EXPRESS_APP"
import { Link } from "react-router-dom"


import axios from 'axios'

const ComicsPage = () => {

  const [foundSeries, setFoundSeries] = useState([])
  const [seriesInput, setSeriesInput] = useState('')

  const findSeries = (e) => {
    e.preventDefault()

    axios.get(`${EXPRESS_APP}/series/${seriesInput}`)
      .then((response) => {
        console.log("Found series ====>", response.data)
        setFoundSeries(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Comic Search</h1>

      <form onSubmit={findSeries}> 
        <label>
          Search for a Series
        </label>
        <input type="text" name="seriesInput" value={seriesInput} onChange={(e) => setSeriesInput(e.target.value)} />
        <button>Search</button>
      </form>

      {
        foundSeries.length > 0 &&

        <>

          {foundSeries.map((series) => {
            return (
              <div>
                <h3>{series.title}</h3>
                <img src={`${series.thumbnail.path}.${series.thumbnail.extension}`} style={{height: "10vh"}} alt="series-image"/>
                <Link to={`/series-details/${series.id}`}>See series details</Link>
              </div>
            )
          })}
        
        </>
      }

      <a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>

    </div>
  )
}

export default ComicsPage

// "thumbnail": {
//   "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/b0/5d939e25a9787",
//   "extension": "jpg"
// },