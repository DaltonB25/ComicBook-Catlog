import { useState, useEffect, createContext } from "react";
import { JSON_SERVER } from "../sevices/JSON_SERVER";
import axios from "axios";

const CollectionContext = createContext()

const CollectionProvider = ({children}) => {

    const [collections, setCollections] = useState([])

    const getCollections = () => {
        axios.get(JSON_SERVER + '/collections')
            .then((response) => {
                console.log("Found collections ====>", response.data)
                setCollections(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCollections()
    }, [])


    return (
        <CollectionContext.Provider value={{ collections, getCollections }}>
            {children}
        </CollectionContext.Provider>

    )
}

export { CollectionContext, CollectionProvider }