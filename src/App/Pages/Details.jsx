import React from 'react'
import '../../Assets/styles/css/details.css'
function Details({UniqueData}) {

    return (

        // details rendering
        <div className="Details">
            
           <div className="details-content">
           {
                            UniqueData.Poster=="N/A"? <div className="no-poster">
                            <p>No Poster Available</p>
                        </div>:<img src={UniqueData.Poster} alt="" />
                        }
           
            <div className="presentation">
                <h1>{UniqueData.Title}</h1>
               <div className="detials-general">
               <p><b>Country</b>: {UniqueData.Country}</p>
                <p><b>Genre</b> : {UniqueData.Genre}</p>
                <p><b>Language</b> : {UniqueData.Language}</p>
                <p><b>Rating</b> : {UniqueData.imdbRating}</p>
                <p><b>Released</b> : {UniqueData.Released}</p>
                <p><b>Year</b> : {UniqueData.Year}</p>
                <p><b>Runtime</b> : {UniqueData.Runtime}</p>
               </div>

               <h4>Director</h4>
               
                <p>{UniqueData.Director}</p>


               <h4  className="actor-heading">Actors</h4>
               
                <p>{UniqueData.Actors}</p>

               <h4>Writers</h4>
               
                <p>{UniqueData.Writer}</p>


               
               
            </div>
           </div>
        </div>
    )
}

export default Details
