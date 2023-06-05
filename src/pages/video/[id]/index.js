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
import Commentss from '@/components/Comments';
import Livechat from '@/components/Livechat';



const VideoDetail = () => {
    const router = useRouter()
    const {id} = router.query
    const [Comments, setComments] = useState([])
    const YOUTUBE_COMMENTS_API =`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=`+process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    const {response,related, error, isLoading} = useFetchVideo(id)
    


    useEffect(() => {
        const getComments =  async() => {
            const res = await fetch(YOUTUBE_COMMENTS_API)
            const data = await res.json()
            setComments(data.items)
            
        }
    

        getComments()

    }, [YOUTUBE_COMMENTS_API])
    
    

  



    if (!response[0]?.snippet) return <div>Loading...</div>
    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = response[0];

    return (
        <>
            <Navbar/>
            <Container>
            <Sidebar />
            <Container2>
                <VideoContainer>
                    <UpperContainer>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' width='100%' height='100%' controls/>
                    </UpperContainer>
                    <Livechat/>
                </VideoContainer>
                    <VideoAbout>
                    <h1>{title}</h1>
                    <ChannelDetail>
                        <span>{channelTitle}</span>
                        <CheckCircleFill size={12}/>
                        <span>{viewCount} views</span>
                        <span>{likeCount} likes</span>
                    </ChannelDetail>
                </VideoAbout>
                <Commentss comments={Comments}/>
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
const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 100%; */

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

`

const UpperContainer = styled.div`
position: relative;
padding-top: 56.25%;
background-color: red;
/* width:60%; */
/* height: 80%; */
@media screen and (min-width: 768px)  {
    width: 100%;
    
}


.react-player {
  position: absolute;
  top: 0;
  left: 0;
}
`

const VideoAbout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    margin-top: 20px;
    border-bottom: 1px solid #606060;
    /* width:max-content; */
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
        color: white;
    }
`

const RelatedVideos = styled.div`
    /* display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: space-around; */
    

   
`