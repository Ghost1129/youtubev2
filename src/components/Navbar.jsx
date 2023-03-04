import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import { SearchAlt} from '@styled-icons/boxicons-regular/SearchAlt'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
    const [search, setSearch] = React.useState('')
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(search){
            router.push(`/search/${search}`)
            setSearch('')
        }
    }

  return (
    <Nav>
        <a href="/">
            <Image src={Logo} alt="logo" width={50} height={50}  />
        </a>
        <Searchbar>
            <form onSubmit={handleSubmit}>
            <SearchInput onSubmit={handleSubmit} onChange={(e)=>setSearch(e.target.value)} value={search} placeholder='Search'/>
            </form>
            
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

