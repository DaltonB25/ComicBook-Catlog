import React from 'react'

const ComicBox = ({comicObj ,handleDelete}) => {
    return (
        <div className="comic-card">
            {/* <div className="comic-image">
                <img src={comicObj.thumbnail} alt={comicObj.Title} />
            </div> */}

            <h3 className="comic-title">{comicObj.Title}</h3>

            <div className='comic-btns'>
                {/* <button onClick={() => handleDelete(comicObj.Name)}>Delete</button>
                <Link to = {`/comic/${comicObj.Name}`}>
                    <button>Details</button>           
                </Link> */}
            </div>
        </div>
   )
}

export default ComicBox