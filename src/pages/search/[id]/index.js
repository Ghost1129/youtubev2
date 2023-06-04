import Navbar from '@/components/Navbar'

import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styled from 'styled-components'

import  Video  from '../../../components/Video'

const Search = () => {

    const router = useRouter()
    const { id } = router.query
    const [videos, setVideos] = React.useState(null)
    
    
  return (
    <>
    <Navbar/>
    <SearchContainer>
        <SearchResult>
        {videos?.map((item)=> {
                return <Video key={item.videoId} video={item}/>
            })
            }
        </SearchResult>


    </SearchContainer>

    </>
  )
}

export default Search


const SearchContainer = styled.div`
    background-color: black;
    height: 95vh;
    margin-top: 5vh;
    overflow-y: scroll;
`

const SearchResult = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;

    @media screen and (min-width: 768px) 
    {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px){
        grid-template-columns: repeat(4, 1fr);
    }
`
