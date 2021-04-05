import React, { useState } from 'react'
import "./index.css"
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Display = (props) => {

    const deleteNote = () => {
        props.deleteitem(props.id);
    }


    return (
        <>
            <div className="note">
                <div className="diplay_title">{props.title}</div><hr />
                <div className="diplay_content">{props.content}</div>
                <Button className="display_button" variant="contained" color="default" size="small" onClick={deleteNote}><DeleteOutlineIcon /></Button>
            </div>
        </>
    )
}

export default Display;