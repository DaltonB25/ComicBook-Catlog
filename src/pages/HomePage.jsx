import React from "react";
import comicsJason from "../comics.json";
import ComicBox from "../components/ComicBox";


function HomePage( { comics, setComics} ) {
  
  const handleDelete = (Title) => {
    const updateComics = comics.filter(comic => comic.Title !== Title);
    setComics(updateComics);
};


    return (
      <div className="home-page">
      <div class="Miles">
      </div>
      <div className="Marvel-Intro">
      </div>
        <div className="page-img"></div>
      </div>
    );
  }


export default HomePage;
/* 
/*
 return (
      <div className="comics-list">
        <h1> Comics List </h1>
        <div className='comics-list-conatiner'>
          {comics.map(comic => {
            return <ComicCard key={comic.Name} product={comic} handleDelete={handleDelete}/>
            })
          }
        </div>
      </div>
  )



    {
      "Name": "Black Panther",
      "Title": "Jungle Action",
      "Issue #": 16,
      "Date": "July",
      "Year": null,
      "# of Issues": 1,
      "Price": ""
    },

  
*/
