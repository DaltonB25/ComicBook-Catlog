import axios from "axios"
import { EXPRESS_APP } from "../sevices/EXPRESS_APP"
import { JSON_SERVER } from "../sevices/JSON_SERVER"
import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { CollectionContext } from "../context/collections.context"

const BookDetails = () => {

    let [ thisBook, setThisBook ] = useState(null)

    let [ collectionId, setCollectionId] = useState(0)

    const { collections, getCollections } = useContext(CollectionContext)

    const { comicId } = useParams()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (collectionId) {

            let thisCollection = collections.find((collection) => collection.id == collectionId)
            let comics = [...thisCollection.comics, thisBook]
            thisCollection.comics = comics
            axios.put(`${JSON_SERVER}/collections/${collectionId}`, thisCollection)
                .then((response) => {
                    console.log("This is our updated collection", response.data)
                    getCollections()
                    navigate(`/collection-details/${response.data.id}`)
                })
                .catch((err) => {
                    console.log(err)
                })


        } else {
            alert("You must first select a collection")
        }
    }

    useEffect(() => {

        axios.get(`${EXPRESS_APP}/comics/details/${comicId}`)
            .then((response) => {
                console.log("This is our found book ===>", response.data)
                setThisBook(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
            
        
    }, [])

  return (
    <div>
        {
            thisBook &&
        <>
        
            <h1>Book Details for {thisBook.title}</h1>
            <img src={`${thisBook.thumbnail.path}.${thisBook.thumbnail.extension}`} alt="book-image"/>

            {
                collections.length > 0 &&
                <form onSubmit={handleSubmit}>

                    <select onChange={(e) => setCollectionId(e.target.value)}>
                        <option value={null}>Choose Collection</option>
                        {
                            collections.map((collection) => {
                                return (
                                    <option value={collection.id}>{collection.name}</option>
                                )
                            })
                        }
                    </select>

                    <button type="submit">Add to Collection</button>

                </form>
            }
        </>
        }
    </div>
  )
}

export default BookDetails