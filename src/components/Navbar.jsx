import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import { SearchAlt} from '@styled-icons/boxicons-regular/SearchAlt'

const Navbar = () => {
  return (
    <Nav>
        <Image src={Logo} alt="logo" width={50} height={50} />
        <Searchbar>
            <SearchInput placeholder='Search'/>
            <Searchlogo size="24"/>
        </Searchbar>
    </Nav>
  )
}

export default Navbar


const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 60px;
padding: 0 10px;
background-color: #fffcea;

`
const Searchbar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid #000;
width: max-content;
min-width: 80px;
border-radius: 20px;
padding: 5px 15px;
background-color: #fff;

@media screen and (min-width: 768px) {
    min-width: 30%;
}
`
const SearchInput = styled.input`
outline: none;
border: none;
padding: 10px;
width: 70%;

@media screen and (min-width: 768px) {
    width: 100%;
}

`
const Searchlogo = styled(SearchAlt)`

`

