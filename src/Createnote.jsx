import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const Createnote = (props) => {

    const [note, setNote] = useState(
        {
            title: "",
            content: ""
        }
    )

    const changeInput = (e) => {

        const { name, value } = e.target;
        setNote((prevdata) => {
            return {
                ...prevdata,
                [name]: value,
            }
        })
    }

    const createNote = () => {
        props.passnote(note)
        setNote(
            {
                title: "",
                content: ""
            })
    }

    return (
        <>
            <form>
                <input type="text" name="title" placeholder="Enter title" value={note.title} onChange={changeInput} className="title" />
                <hr />
                <textarea type="text" name="content" placeholder="Enter note" rows="3" value={note.content} onChange={changeInput} className="content"></textarea>
                <Button variant="contained" color="default" size="small" className="create_button" onClick={createNote}><AddIcon /></Button>
            </form>
        </>
    )
}

export default Createnote;