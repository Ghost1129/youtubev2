import Image from 'next/image'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import {Menu} from '@styled-icons/boxicons-regular/Menu'
import { SearchAlt} from '@styled-icons/boxicons-regular/SearchAlt'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch,useSelector } from 'react-redux'
import { selectIsMenuOpen, setMenuOpen } from '@/utlis/Slices/appSlice'
import { CacheSearch } from '@/utlis/Slices/searchSlice'


const Navbar = () => {
    const [search, setSearch] = React.useState('')
    const [suggestions, setSuggestions] = React.useState()
    const [showSuggestions, setShowSuggestions] = React.useState(false)
    const searchCache = useSelector((store) => store.search )
    
    
    const router = useRouter()
    const dispatch = useDispatch()
   

    const toggleMenu = () => {
        dispatch(setMenuOpen())
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchCache[search]){
                setSuggestions(searchCache[search])
            }
            else{
                fetchSuggestions()
            }
            
        }, 2000)

        return () => clearTimeout(timer)
    }, [search])

    const fetchSuggestions = async () => {


        const URL = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`+search;
        const response = await fetch(URL);
        const data = await response.json();
        setSuggestions(data[1]);

        dispatch(
            CacheSearch({
                [search]: data[1]
            })
        )
    };

  return (
    <Nav>
        <NavLeft>
        <MenuIcon size="32" onClick={toggleMenu}/>
        <Link href="/">
            <Image src={Logo} alt="logo" width={50} height={50}  />
        </Link>
        </NavLeft>
        
        <Searchbar>
            
            <SearchInput onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}  onChange={(e)=>setSearch(e.target.value)} value={search} placeholder='Search'/>
            <Searchlogo size="24"/>
            {showSuggestions && suggestions && <SearchResult>
                <ul>
                    {suggestions?.map((suggestion,index) => (
                        <li key={index}>{suggestion}</li>
                    ))}
                </ul>
            </SearchResult>}
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
const NavLeft = styled.div`
display: flex;
align-items: center;
`
const MenuIcon = styled(Menu)`
cursor: pointer;
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
position: relative;

@media screen and (min-width: 768px) {
    min-width: 30%;
}
`



const SearchResult = styled.div`
position: absolute;
top: 100%;
display: flex;
flex-direction: column;
background-color: #fff;
width: 90%;
border-radius: 10px;
/* padding: 10px 0; */

z-index: 1;

ul{
    list-style: none;
    padding: 0;
    margin: 10px 0;

    li{
        padding: 10px;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;

        &:hover{
            background-color: #f1f1f1;
        }
    }
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

