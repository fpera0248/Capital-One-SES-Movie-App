import React from 'react'
import Header from '../Components/Header'
import '../../Assets/styles/css/home.css'
import Hero from '../Components/Hero'
import SearchArea from '../Components/SearchArea'
function Home() {
    return (
        <div className="Home"> 
            {/* Header */}
            <Header/>

            {/* hero */}
            <Hero />


            {/* Search Area */}
            <SearchArea/>

        </div>
    )
}

export default Home
 