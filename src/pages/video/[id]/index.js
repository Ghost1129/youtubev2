import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
// import {fetchAPI} from "@/utlis/fetchapi";
import ReactPlayer from 'react-player'
import Navbar from "@/components/Navbar";
import styled from "styled-components";
import Video from "@/components/Video";
import {CheckCircleFill}  from '@styled-icons/bootstrap/CheckCircleFill'
import useFetchVideo from '@/utlis/hooks/useFetchVideo';
import Sidebar from '@/components/Sidebar';



const VideoDetail = () => {
    const router = useRouter()
    const {id} = router.query

    const {response,related, error, isLoading} = useFetchVideo(id)
    
    

  



    if (!response[0]?.snippet) return <div>Loading...</div>
    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = response[0];

    return (
        <>
            <Navbar/>
            <Container>
            <Sidebar />
            <Container2>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width='100%' height='500px' className="Player" controls/>
                <VideoAbout>
                    <h1>{title}</h1>
                    <ChannelDetail>
                        <span>{channelTitle}</span>
                        <CheckCircleFill size={12}/>
                        <span>{viewCount} views</span>
                        <span>{likeCount} likes</span>
                    </ChannelDetail>
                </VideoAbout>
                <RelatedVideos>
                    {related?.map((item) => {
                        return <Video key={item.id} video={item}/>
                    })}
                </RelatedVideos>
            </Container2>
        </Container>
            <Navbar/>
            
        </>
    );
};

export default VideoDetail;


const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    
    
    `

const Container2 = styled.div`
    margin-top: 60px;
    width: 100%;
    background-color: black;
    color: white;
    overflow-y: scroll;
  
  
  
`

const VideoAbout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    margin-top: 20px;
    h1{
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;

    }

`

const ChannelDetail = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    span{
        margin-right: 10px;
        font-size: 14px;
        color: #606060;
    }
`

const RelatedVideos = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: space-around;
    

   
`