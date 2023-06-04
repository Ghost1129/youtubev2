import React from 'react'
import styled from 'styled-components'
import Image from "next/image";
import {CheckCircleFill}  from '@styled-icons/bootstrap/CheckCircleFill'
import Link from "next/link";

const Video = ({video}) => {
  console.log(video)
  const {snippet,statistics} = video
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <Container>
      {video?.id.kind==='youtube#video'||video?.kind==='youtube#video'?
          //!! If videoId is true, then render the following:
          <VideoCard href={`/video/${video.id}`} >
            <Image src={thumbnails?.medium?.url } width={320} height={200} alt={'Image'} style={{borderRadius:'20px'}} />
            <span>{title}</span>
            <ChannelDetail>
                <span>{channelTitle}</span>
                <CheckCircleFill size={10}/>
            </ChannelDetail>
          </VideoCard>
          :
          //!! If videoId is false, then render the following:
          <ChannelCard>
            <Image src={snippet?.thumbnails?.high?.url } width={180} height={180} alt={'Image'} className="VideoCard-Image" />
            <ChannelDetail>
              <span>{snippet?.channelTitle}</span>
              <CheckCircleFill size={12}/>
            </ChannelDetail>
          </ChannelCard>
      }
    </Container>
  )
}

export default Video

const Container = styled.div`
  color: white;
width: 320px;
height: 300px;
margin: 0 10px ;



/* margin: 10px; */
  
  
`

const VideoCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  height: 100%;
  
  
  &:hover{
    box-shadow: 0 0 10px 0 rgba(116, 116, 116, 0.5);

  }

  >span {
    
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
  }
`

const ChannelCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
    cursor: pointer;

  .VideoCard-Image{
    border-radius: 100%;
  }
`

const ChannelDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  
  span{
    color: gainsboro;
    cursor: pointer;
    font-size: 14px;
    
    :hover{
        color: white;
    }
  }
`