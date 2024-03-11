import { useParams, Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios'
import { EXPRESS_APP } from '../sevices/EXPRESS_APP'

const SeriesDetail = () => {

    const { seriesId } = useParams()

    const [series, setSeries] = useState(null)

    useEffect(() => {
        axios.get(`${EXPRESS_APP}/series/details/${seriesId}`)
        .then((response) => {
            console.log("Found Series ===>", response.data)
            setSeries(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
 
  return (
    <div>{seriesId}

    {
        series && 
        <div>
            <h1>{series.title}</h1>
        </div>
    }

    <Link to={`/comics-list/${seriesId}`}>See list of comics</Link>

    <a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>
    </div>
  )
}

export default SeriesDetail