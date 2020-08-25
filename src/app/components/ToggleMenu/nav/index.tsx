import React, { useState, useEffect } from 'react';
import './nav.scss'

interface INav{
    openMenu: boolean
}

const Nav: React.FC<INav> = ({openMenu}) => {
    
   const [windowState] = useState<string>(window.location.toString().replace('/', ''))

    const [searchState, setSearchState] = useState("");

    const handleSearchState = (e: any) => {
        setSearchState(e.target.value);
    }

    useEffect(() => {
        openMenu && setSearchState("");  
    }, [openMenu])
   
    
    return (
        <nav id="menu_nav" className={openMenu? 'show' : ''}>
            <ul>
                <li>
                  <input
                   placeholder="Search"
                   value = {searchState}
                   onChange={handleSearchState}
                  />
                </li>          
                <li className={windowState.includes('home') ? 'active' : ''}>
                    HOME
                </li>
                <li className={windowState.includes('articles') ? 'active' : ''}>
                    ARTICLES
                </li>
                <li className={windowState.includes('audio')? 'active' : ''}>
                    AUDIO
                </li>
            </ul>
        </nav>
    )
}

export default Nav;