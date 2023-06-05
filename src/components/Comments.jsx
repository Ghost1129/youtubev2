import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Commentss = ({comments}) => {

    const Comment = ({data}) => {
        
        return<>
            <CommentData className="comment" >
                <Avatar>
                    <Image fill src={data?.authorProfileImageUrl} alt="avatar" />
                </Avatar>
                <div>
                <CommentName>{data?.authorDisplayName}</CommentName>
                <CommentText>{data?.textDisplay}</CommentText>
                </div>
            </CommentData>
        </>
    }

    const CommentList = ({comments}) => {

        return comments?.map((comment) => (
            <CommentsList key={comment.id}>
                {comment.snippet?.topLevelComment?.snippet? <Comment data={comment.snippet.topLevelComment.snippet} />:<Comment data={comment.snippet}/> }
                <CommentReplie>
                {comment.replies && <CommentList comments={comment.replies.comments} />}
                </CommentReplie>
            </CommentsList>
        ))
    }


   if(!comments) return <p>Loading...</p>
  return (
    <CommentsContainer>
        <h4>Comments</h4>
        
            
        {comments && <CommentList comments={comments} />}
        
        

    </CommentsContainer>
  )
}

export default Commentss


const CommentsContainer = styled.div`
    margin: 1rem;
    padding: 0.6rem;
    
    

    h4 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
`
    
const CommentData = styled.div`
    display: flex;
    margin-bottom: 1rem;
    div {
        display: flex;
        flex-direction: column;
        margin-left: 0.7rem;
    }
`


const CommentsList = styled.div`
    
    
`

const CommentReplie = styled.div`
margin-left: 2rem;
        border-left: 1px solid #ccc;

`

const Avatar = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #ccc;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    `

const CommentName = styled.span`
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 0.5rem;
`

const CommentText = styled.span`
    font-size: 0.8rem;
    max-width: 500px;
    
`