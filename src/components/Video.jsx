import React from 'react'
import styled from 'styled-components'
import Image from "next/image";
import {CheckCircleFill}  from '@styled-icons/bootstrap/CheckCircleFill'
import Link from "next/link";

const Video = ({video: { id: { videoId ,channelId }, snippet}}) => {

  return (
    <Container>
      {videoId?
          //!! If videoId is true, then render the following:
          <VideoCard href={`/video/${videoId}`} >
            <Image src={snippet?.thumbnails?.high?.url } width={300} height={240} alt={'Image'} />
            <span>{snippet?.title}</span>
            <ChannelDetail>
                <span>{snippet?.channelTitle}</span>
                <CheckCircleFill size={12}/>
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
width: 300px;
height: 340px;

margin: 10px 0;
  
  
`

const VideoCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
    text-decoration: none;
    color: white;
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