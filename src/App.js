import { useState } from 'react';
import './App.css';
import Header from './Header.jsx'
import Createnote from './Createnote.jsx'
import Display from './Display'

const App = () => {

  const [noteitem, setNoteitem] = useState([]);

  const addNote = (note) => {
    setNoteitem((prevdata) => {
      return [...prevdata, note]
    })
  }

  const onDelete = (id) => {
    setNoteitem((prevdata) => prevdata.filter((currentdata, index) => {
      return index != id;
    }))

  }

  return (
    <>
      <Header />
      <Createnote passnote={addNote} />
      <div className="display_notes">
        {
          noteitem.map((val, index) => {
            return (
              <Display
                id={index}
                key={index}
                title={val.title}
                content={val.content}
                deleteitem={onDelete}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default App;
