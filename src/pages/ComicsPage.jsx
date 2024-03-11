import { useState } from "react"

import axios from 'axios'

const ComicsPage = () => {

  const [foundSeries, setFoundSeries] = useState([])
  const [seriesInput, setSeriesInput] = useState('')

  const findSeries = (e) => {
    e.preventDefault()

    axios.get(`https://gateway.marvel.com:443/v1/public/series?title=${seriesInput}&contains=comic&orderBy=title&apikey=68dc792e94e7280b93993a62a39a7181`)
      .then((response) => {
        console.log("Found series ====>", response.data)
        setFoundSeries(response.data.results)
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
                <h3>{series.name}</h3>
                <img src={`${series.thumbnail.path}.${series.thumbnail.extension}`} alt="series-image"/>
              </div>
            )
          })}
        
        </>
      }

    </div>
  )
}

export default ComicsPage

// "thumbnail": {
//   "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/b0/5d939e25a9787",
//   "extension": "jpg"
// },