import { useState, useContext } from "react"
import { CollectionContext } from "../context/collections.context"
import { useNavigate } from "react-router-dom"
import { JSON_SERVER } from "../sevices/JSON_SERVER"
import axios from "axios"

const AddCollection = () => {

    const [newCollection, setNewCollection ] = useState({
        name: "",
        owner: "",
        description: "",
        comics: []
    })

    const navigate = useNavigate()

    const { getCollections } = useContext(CollectionContext)

    const handleChange = (e) => {
        setNewCollection((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(JSON_SERVER + '/collections', newCollection)
            .then((response) => {
                console.log("This is the new collection===>", response.data)
                getCollections()
                navigate('/Collection')
            })
            .catch((err) => {
                console.log(err)
            })
    }

  return (
    <div className="AddNewCollections">
        <div className="addNewCollectionsInput">     
        <form onSubmit={handleSubmit}>
        <label style={{ color: '' }}>
                Name: 
                <input type="text" name="name" value={newCollection.name} onChange={handleChange} style={{ width: '50%', height: '30px' }} />
            </label>
            <label>
                Owner: 
                <input type="text" name="owner" value={newCollection.owner} onChange={handleChange} style={{ width: '50%', height: '30px'}}/>
            </label>
            <label>
                Description: 
                <textarea name="description" value={newCollection.description} onChange={handleChange} style={{ width: '60%' }}/>
            </label>

            <button type="submit">Add New Collection</button>

        </form>
    </div>
   

    </div>
  )
}

export default AddCollection                                                                                                                                    