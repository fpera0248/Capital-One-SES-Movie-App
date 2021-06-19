import axios from 'axios'
import React, { useState } from 'react'
import hero from '../../Assets/img/hero.jpg'
import {HandlePageNumber,RefreshPageNumber} from '../../Assets/js/PageNumberCalc'
import Details from '../Pages/Details'
function SearchArea() {
    const [TotalResult,setTotalResults]=useState("")
    const [result,setresult]=useState([])
    const [Search,setSearch]=useState("")
    const [year,setyear]=useState("")
    const [UniqueData,setUniqueData]=useState()
    const [CurrrentPage,setCurrentPage]=useState(1)
    const [DetailsShow,setDetailsShow]=useState(false)
    const HandleSearch=e=>{
        
        let SearchValue=e.target.value

       
        setSearch(e.target.value)
       
    }

    // this function will fetch data movies
    const HandleFetch=async(e,search,action)=>{
        e.preventDefault()
    
         if(search!=""){
             let PageNumber=HandlePageNumber(action)
             document.querySelector(".error").style.display="none"
             document.querySelector(".heading-wrapper span").style.display="block"
             console.log(PageNumber)
            if(action!="next"){
                    PageNumber= RefreshPageNumber()
            }
            //  this is the api call
            await axios.get(`https://www.omdbapi.com/?s=${Search}&page=${PageNumber}&y=${year}&apikey=f78e3cc7`)
            .then(res=>{
             console.log(res)
         
            //  error handling
            if(!res.data.Error){
                setTotalResults(res.data.totalResults)
                if(action=="next"){
                    setresult([...result,...res.data.Search])
                }else{
                   
                    setresult(res.data.Search)
                }
                
                document.querySelector(".heading-wrapper span").style.display="none"
                document.querySelector(".heading-wrapper h1").style.display="Block"
                document.querySelector(".SearchArea .pagination-buttons").style.display="flex"
                document.querySelector(".error").style.display="none"
            }else{
                document.querySelector(".heading-wrapper span").style.display="none"
                document.querySelector(".error").style.display="block"
                document.querySelector(".error").textContent=res.data.Error
            }
           
         

        }).catch(err=>{
            document.querySelector(".error").style.display="block"
            document.querySelector(".error").textContent=err.message
         
            document.querySelector(".heading-wrapper span").style.display="none"
        })
    }
    }

    const HandleIdValue=e=>{
        let Id=e.target.id
        // UniqueData
        setUniqueData(Id)
        document.querySelector(".details-wrapper").style.display="flex"
        document.querySelector(".show-text-details").textContent="Please Wait we are fetching your movie details"
        document.querySelector(".show-text-details").style.display="block"
       
        axios.get(`https://www.omdbapi.com/?i=${Id}&apikey=f78e3cc7`).then(res=>{
            console.log(res)
            console.log(res.data)
            console.log("Fernando Peralta")
            document.querySelector(".show-text-details").style.display="none"
            
            setDetailsShow(true)
            setUniqueData(res.data)
            }).catch(err=>{
                document.querySelector(".show-text-details").textContent=err.message
                console.log(err)
            })
    }
    return (

        // this is the jsx rendering
        <div className="SearchArea">
            <form action="" onSubmit={e=>HandleFetch(e,Search)}>
             <div className="form-content">
             <div className="input-wrapper">
                <input type="text" placeholder="Search Movie Here" onChange={HandleSearch} value={Search} />
            </div>
            <input type="text" placeholder="Released Year" onChange={e=>setyear(e.target.value) 
             }value={year}  />
            <input type="button" value="Search" onClick={e=>HandleFetch(e,Search,CurrrentPage)}/>
             </div>
            </form>

            <div className="results-wrapper">
                <div className="heading-wrapper">
                <h1>Results About {Search} - ({TotalResult}) Results Found</h1>
                <span>Searching....</span>
                <span className="error">Movie Not Found</span>
                </div>
                
                <div className="results-content">
                    {result.length>0&&result.map(eachresult=>(
                   
                          <div className="each-result" onClick={HandleIdValue} id={eachresult.imdbID}key={eachresult.imdbID} >
                        {
                            eachresult.Poster=="N/A"? <div className="no-poster">
                            <p>No Poster Available</p>
                        </div>:<img src={eachresult.Poster&&eachresult.Poster} alt="" />
                        }
                          
                          <h1>{eachresult.Title}</h1>
                       </div>
                    
                       
                    ))}
                  
                </div>

                <div className="details-wrapper">
                    <span className="close" onClick={e=>{
                        document.querySelector(".details-wrapper").style.display="none"
                        setDetailsShow(false)
                    }}>X</span>
                    <p className="show-text-details" style={{textAlign:"center",marginTop:30}}>Please Wait While The API Fetches Your Movie Details</p>
                   {DetailsShow==true&&(
                        <Details UniqueData={UniqueData}/>
                   )}
                </div>


                <div className="pagination-buttons">
                  
                 
                    <button onClick={e=>{
                        HandleFetch(e,Search,"next")
                    
                    }}>Show More</button>
                </div>
            </div>
            
           
        </div>
    )
}

export default SearchArea
