import React from 'react'
import NotesIcon from '@material-ui/icons/Notes';
import './index.css';

const Header = () => {
    return (
        <div className="header">
            <NotesIcon className="logo" fontSize="large" />
            <h1 className="site_title">NotesKeeper</h1>
        </div>
    )
}

export default Header;