import React, {useEffect} from 'react';

const HandleMobileNav = () => {
    useEffect(() => {

    const toggleMobileNav = () => {
        let navbar = document.querySelector('.navbar-main');
        if(navbar.classList.contains('hide-nav')){
            navbar.classList.remove('hide-nav');
            navbar.classList.add('display-nav');
        }
        else if(navbar.classList.contains('display-nav')){
            navbar.classList.remove('display-nav')
            navbar.classList.add('hide-nav')
        }
    }
        let hbMenu = document.querySelector('.hb-container');
        hbMenu.addEventListener('click', () => toggleMobileNav())
    }, [])
    return null;
}

export default HandleMobileNav;
