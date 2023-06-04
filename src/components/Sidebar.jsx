import React from 'react'
import styled from 'styled-components'
import {HomeAlt} from '@styled-icons/boxicons-regular/HomeAlt'
import {ReactLogo} from '@styled-icons/boxicons-logos/ReactLogo'
import { useSelector } from 'react-redux'
import { selectIsMenuOpen } from '@/utlis/Slices/appSlice'



const categories = [
    {
        name: "Home",
        icon: HomeAlt,
    },
    {
        name: "React",
        icon: ReactLogo
    },
    {
        name: "Blue",
        icon: HomeAlt,
    },
    {
        name: "Something",
        icon: ReactLogo
    },


]


const Sidebar = ({query,setQuery}) => {
    const isOpen = useSelector((state)=>selectIsMenuOpen(state))
    console.log(isOpen)
    if (!isOpen) return null
  return (
    <Container>
        {categories.map((category) => (
            <Categories key={category.name} onClick={()=>setQuery(category.name)} >
                <HomeIcon size='18'>{category.icon}</HomeIcon>
                <Text>{category.name}</Text>
            </Categories>
        ))}
    </Container>
  )
}

export default Sidebar



const Container = styled.div`
    margin-top: 60px;
    top: 60px;
    left: 0;
    width: 140px;
    padding: 10px 10px;
    border-right: 1px solid #686868;
    
    overflow-y: scroll;
    background-color: black;
    color: #fff;

    @media screen and (min-width: 768px) {
        /* width: 10%; */
    }

`
const Categories = styled.div`
    padding: 10px;
    cursor: pointer; 
    border-radius: 50px;   
    display: flex;
    gap: 10px;
    margin: 10px 0;
    font-size: 12px;
    align-items: center;

    &:hover {
        background-color: red;
        color: #fff;
    }

`

const HomeIcon = styled(HomeAlt)`
    color: red;

    ${Categories}:hover & {
        color: #fff;
    }
`
const Text = styled.div`
    text-align: center;
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
    }

`
