import React, { useEffect } from 'react'
import styled from 'styled-components'
import  Video  from '../components/Video'


const Feed = ({videos}) => {
    

  return (
    <Container>
        <Title>Recommended</Title>
        <VideoContainer>
            {videos?.map((item)=> {
                return <Video key={item.videoId} video={item}/>
            })
            }
        </VideoContainer>
        

    </Container>
  )
}

export default Feed


const Container = styled.div`
    margin-top: 60px;
    margin-left: 60px;
    width: 90%;
    height: calc(100vh - 60px);
    background-color: black;
    padding: 5px;
    overflow-y: scroll;
    gap: 10px;

    

    @media screen and (min-width: 768px) {
        margin-left: 10%;   
    }

`

const Title = styled.h3`
    color: #fff;
`
const VideoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media screen and (min-width: 768px) 
    {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px){
        grid-template-columns: repeat(4, 1fr);
    }
`