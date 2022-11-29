import React from 'react'
import Main from '../components/Main'
import Row from "../components/Row"
import requests from "../Request"


function Home() {
  return (
    <div>
      <Main/>
      <Row RowID='1' title="Up Coming" fetchURL={requests.requestUpcoming}/>
      <Row RowID='2' title="Popular" fetchURL={requests.requestPopular}/>
      <Row RowID='3' title="Trending" fetchURL={requests.requestTrending}/>
      <Row RowID='4' title="Top Rated" fetchURL={requests.requestTopRated}/>
      <Row RowID='5' title="Now Playing" fetchURL={requests.requestNowPlaying}/>
    </div>
  )
}

export default Home
