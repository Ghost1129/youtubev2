import React, { useEffect } from 'react'
import styled from 'styled-components'
import  Video  from '../components/Video'
import { fetchAPI } from '@/utlis/fetchapi'

const Feed = () => {

    useEffect(() => {
        fetchAPI('search?part=snippet&query=react')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])
  return (
    <Container>
        <Title>Recommended</Title>
        <VideoContainer>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
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

    

    @media screen and (min-width: 768px) {
        margin-left: 10%;   
    }

`

const Title = styled.h3`
    color: #fff;
`
const VideoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`