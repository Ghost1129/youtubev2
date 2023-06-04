import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import  Video  from '../components/Video'
// import {fetchMostPopularVideos} from '@/utlis/fetchapi'
import useFetchPopular from '@/utlis/hooks/useFetchPopular'


const Feed = () => {
    
    const {response, error, loading } = useFetchPopular()
    
    

  return (
    <Container>
        {/* <Title>Recommended</Title> */}
        <VideoContainer>
            {response?.map((item)=> {
                return <Video key={item.id} video={item}/>
            })
            }
        </VideoContainer>
        

    </Container> 
  )
}

export default Feed


const Container = styled.div`
    /* margin-top: 60px; */
    /* margin-left: 60px; */
    width: 100%;
    height: calc(100vh - 60px);
    background-color: #000000;
    padding: 5px;
    overflow-y: scroll;
    gap: 20px;
    overflow-x: hidden;
    margin-top: 60px;

    

    @media screen and (min-width: 768px) {
        /* margin-left: 10%;    */
    }

`

const Title = styled.h3`
    color: #fff;
    font-size: 20px;
    margin: 10px 0;
    font-family: 'Roboto', sans-serif;
`
const VideoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    justify-content: center;
    /* grid-template-columns: repeat(1, 1fr); */

    @media screen and (min-width: 768px) 
    {
        /* grid-template-columns: repeat(2, 1fr); */
    }

    @media screen and (min-width: 1024px){
        /* grid-template-columns: repeat(4, 1fr); */
    }
`