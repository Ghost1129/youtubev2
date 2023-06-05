import { setMessages } from '@/utlis/Slices/chatSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {generateRandomName, makeRandomMessage } from '@/utlis/helper/Random'

const Livechat = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = React.useState("")

    const chatMessages = useSelector((store) => store.chat.messages)

    useEffect(() => {

        // Api Polling
        const i =setInterval(() => {
            dispatch(setMessages({
                name: generateRandomName(),
                message: makeRandomMessage(10),
            }))
        }, 2000)

        return () => {
            clearInterval(i)
        }
    }, [])


  return (
    <>
    <Container>
        <InnerContainer>
            {chatMessages.map((data,index) => (
                <ChatData key={index}>
                <ChatAvatar></ChatAvatar>
                <AvatarName>{data.name}</AvatarName>
                <ChatText>{data.message}</ChatText>
            </ChatData>
            ))}
        
        </InnerContainer>
        <TypeContainer onSubmit={
            (e) => {
                e.preventDefault()
                dispatch(setMessages({
                    name: 'Admin',
                    message: message,
                }))
                setMessage("")
            }
        } >
        <input onChange={(e)=>setMessage(e.target.value)} value={message} type="text" placeholder="Type here..." />
        <button>Submit</button>

        </TypeContainer>
    </Container>
    
    </>

  )
}

export default Livechat


const Container = styled.div`
width: 100%;
border: 1px solid #ccc;
position:relative;
min-height: 200px;
max-height: 700px;
overflow-y: scroll;
display: flex;





@media screen and (min-width:768px) {
    width: 50%;
    
}
`

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-self: flex-end;
    margin-bottom: 2rem;
    overflow-y: scroll;
`

const ChatData = styled.div`
    display: flex;
    align-items: center;
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    padding: 0.5rem;
    gap: 0.5rem;
    
    

`
const ChatAvatar = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ccc;
`
const AvatarName = styled.span`
    font-weight: bold;
    font-size: 1rem;
`
const ChatText = styled.span`
    font-size: 0.8rem;
`

const TypeContainer = styled.form`
    position: absolute;
    bottom: 0;
    min-width: 100%;
    background: #fff;
    display: flex;
    border-radius: 0.5rem;

    input {
        width: 100%;
        padding: 0.5rem;
        border: none;
        outline: none;

    }

    button {
        padding: 0.5rem;
        border: none;
        outline: none;
        background: #ccc;
        cursor: pointer;
        border-radius: 0 0.5rem 0.5rem 0;

        &:hover {
            background: #000;
            color: #fff;

        }

    }
    
`