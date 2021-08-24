import React, { useState } from 'react'
import FooterLI from '../components/FooterLI'
import GalleryLI from '../components/GalleryLI'
import NavbarLI from '../components/NavbarLI'
import SidebarLI from '../components/SidebarLI'






const Loggedin = () => {
    
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}
    return (
        <>
        <SidebarLI isOpen={isOpen} toggle={toggle} />
        <NavbarLI toggle={toggle} />
        <GalleryLI />
        <FooterLI />
        </>
    )
}

export default Loggedin
