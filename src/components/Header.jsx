import React from 'react'
import { link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <a href="/">国別</a>
            <br />
            <a href="/world">全世界</a>
            {/* <link to="/world">全世界</link> */}

        </>
    )
}

export default Header
