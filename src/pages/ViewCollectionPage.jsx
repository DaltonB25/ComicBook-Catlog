import { useContext } from "react"
import { Link } from "react-router-dom"
import { CollectionContext } from "../context/collections.context"

const ViewCollectionPage = () => {

  const { collections } = useContext(CollectionContext)

  return (
    
    <div className="collectionPage">
      <h1>Collections List</h1>
<div className="boxes">
      {
        collections.length > 0 &&
        <>
        {
          collections.map((collection) => {
            return (
              <div className="collections">
                {/* {console.log(collection.comics[0].title)} */}
                <h2>Collection Name: {collection.name}</h2>
                <h2>Collector: {collection.owner}</h2>
                <Link to={`/collection-details/${collection.id}`}>See collection details</Link>
              </div>
            )
          })
        }
        </>
      }

    </div></div>
  )
}

export default ViewCollectionPage