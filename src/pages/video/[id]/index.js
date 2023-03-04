import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {fetchAPI} from "@/utlis/fetchapi";
import ReactPlayer from 'react-player'
import Navbar from "@/components/Navbar";
import styled from "styled-components";
import Video from "@/components/Video";
import {CheckCircleFill}  from '@styled-icons/bootstrap/CheckCircleFill'



const VideoDetail = () => {
    const router = useRouter()
    const {id} = router.query
    const [video, setVideo] = useState(null)
    const [relatedVideos, setRelatedVideos] = useState(null)

    useEffect(() => {
        fetchAPI(`videos?part=snippet&id=${id}`)
            .then(res => setVideo(res?.items[0]))

        fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video}`)
            .then(res => setRelatedVideos(res.items))

    }, [id])

  



    if (!video?.snippet) return <div>Loading...</div>
    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = video;

    return (
        <>
            <Navbar/>
            <Container>
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
                    {relatedVideos?.map((item) => {
                        return <Video key={item.videoId} video={item}/>
                    })}
                </RelatedVideos>
            </Container>
        </>
    );
};

export default VideoDetail;


const Container = styled.div`
    margin-top: 60px;
    width: 100%;
    background-color: black;
    color: white;
  
  
  
`

const VideoAbout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    margin-top: 20px;
    h1{
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 10px;

    }

`

const ChannelDetail = styled.div`
    display: flex;
    align-items: center;
    span{
        margin-right: 10px;
        font-size: 14px;
        color: #606060;
    }
`

const RelatedVideos = styled.div`
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