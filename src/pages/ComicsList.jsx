import { useParams, Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios'
import { EXPRESS_APP } from '../sevices/EXPRESS_APP'

const ComicsList = () => {

    const { seriesId } = useParams()

    const [comics, setComics] = useState([])

    useEffect(() => {
        axios.get(`${EXPRESS_APP}/comics/${seriesId}`)
        .then((response) => {
            console.log("Found Series ===>", response.data)
            setComics(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
 

  return (
    <div>ComicsList

        <>
            {
                comics.length > 0 &&

                <>
                    {comics.map((comic) => {
                        return (
                            <div>
                            <h3>{comic.title}</h3>
                            <Link to={`/book-details/${comic.id}`}>See book details</Link>

                            </div>
                        )
                    })}
                </>
            }
        </>
    
        <a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>
    </div>
  )
}

export default ComicsList