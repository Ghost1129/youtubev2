import React from 'react'
import styled from 'styled-components'
import {HomeAlt} from '@styled-icons/boxicons-regular/HomeAlt'
import {ReactLogo} from '@styled-icons/boxicons-logos/ReactLogo'


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
    position: fixed;
    top: 60px;
    left: 0;
    width: 60px;
    padding: 10px 10px;
    border-right: 1px solid #686868;
    height: 100vh;
    overflow-y: scroll;
    background-color: black;
    color: #fff;

    @media screen and (min-width: 768px) {
        width: 10%;
    }

`
const Categories = styled.div`
    padding: 10px;
    cursor: pointer;
    border-radius: 50px;   
    display: flex;
    gap: 10px;
    margin: 10px 0;

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
