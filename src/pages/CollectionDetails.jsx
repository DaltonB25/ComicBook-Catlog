import { CollectionContext } from "../context/collections.context"
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { JSON_SERVER } from "../sevices/JSON_SERVER";


function CollectionDetails() {
  const { collectionId } = useParams();
  // console.log("collectionId -->", collectionId);
  const { collections, getCollections } = useContext(CollectionContext);

  const [ thisCollection, setThisCollection ] = useState(null)
  const [udpatedCollection, setUpdatedCollection] = useState(null)

  const [ isEdting, setIsEditing] = useState(false)

  const navigate = useNavigate('')

  const handleChange = (e) => {
    setUpdatedCollection((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.put(JSON_SERVER + '/collections/' + collectionId, udpatedCollection)
      .then((response) => {
          console.log("This is the new collection===>", response.data)
          getCollections()
          setIsEditing(false)
      })
      .catch((err) => {
          console.log(err)
          setIsEditing(false)
          alert('Error editing collection')
      })
  }

  const handleRemove = (comicId) => {
    let ourCollection = {...thisCollection}
    let ourComics = ourCollection.comics.filter((comic) => comic.id != comicId)
    ourCollection.comics = ourComics
    axios.put(JSON_SERVER + '/collections/' + collectionId, ourCollection)
      .then((response) => {
          console.log("This is the new collection===>", response.data)
          getCollections()
      })
      .catch((err) => {
          console.log(err)
          alert('Error editing collection')
      })
  }

  const handleDeleteCollection = (id) => {

    axios.delete(JSON_SERVER + '/collections/' + id)
      .then((response) => {
          console.log("This is the new collection===>", response.data)
          getCollections()
          navigate('/Collection')
      })
      .catch((err) => {
          console.log(err)
          alert('Error editing collection')
      })


  }

  useEffect(() => {

    if(collections.length) {
      let foundCollection = collections.find((collection) => collection.id == collectionId)
      setThisCollection(foundCollection)
      setUpdatedCollection(foundCollection)
    }

  }, [collections])

  return (
    <div>
      <h1>Collection Details</h1>

    {
      thisCollection &&

        <div className="details">
          <h3>Collection name: {thisCollection.name}</h3>
          <h3>Collector: {thisCollection.owner}</h3>
          <p>{thisCollection.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit details</button>
          <button onClick={() => handleDeleteCollection(thisCollection.id)}>Delete Collection</button>

          <>

            {
              isEdting && 

              <div>

                <form onSubmit={handleSubmit}>

                    <label>
                        Name: 
                        <input type="text" name="name" value={udpatedCollection.name} onChange={handleChange} />
                    </label>
                    <label>
                        Owner: 
                        <input type="text" name="owner" value={udpatedCollection.owner} onChange={handleChange}/>
                    </label>
                    <label>
                        Description: 
                        <textarea name="description" value={udpatedCollection.description} onChange={handleChange}/>
                    </label>
        
                    <button type="submit">Update Collection</button>
    
                </form>

                <button onClick={() => setIsEditing(false)}>Cancel</button>

              </div>

            
            }
          
          
          </>

          <>

          {
            thisCollection.comics.length > 0 && 

            <>
            <div className="comicsDetails">
              {
                thisCollection.comics.map((comic) => {
                  return (
                    <div className="oneComic">
                      <h3>{comic.title}</h3>
                      <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="book-image"/>
                      <Link to={`/book-details/${comic.id}`}>See book details</Link>
                      <button onClick={() => handleRemove(comic.id)}>Remove from collection</button>
                    </div>
                  )
                })
              }
            </div>
            
            </>

          }
          
          
          </>

          
          {/* <button>
            <Link to={`/editComicList/${comic.id}`}>Edit Comic</Link>
          </button> */}
        </div>

    }

    </div>
  );
}

export default CollectionDetails;

