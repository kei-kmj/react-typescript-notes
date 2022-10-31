import {useState} from 'react'
import reactLogo from './assets/react.svg'
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import {Note} from "./components/Types/Note"
import uuid from "react-uuid"
import './App.css'

function App() {
    const [notes, setNotes] = useState<Note[]>([])
    const [activeNote, setActiveNote] = useState<number>()
    const onAddNote = () => {
        const newNote = {
            id: uuid(),
            title: "新しいノート",
            content: "",
            modDate: Date.now()
        }
        setNotes([...notes, newNote])
    }

    const onUpdateNote = (updatedNote) => {
        const updatedNotes = notes.map((note) => {
            if(note.id === updatedNote.id){
                return updatedNote
            }else{
                return note
            }
        })
        setNotes(updatedNotes)
    }

    const onDeleteNote = (id) => {
        const filterNotes = notes.filter((note) => note.id !== id)
        setNotes(filterNotes)
    }

    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote)

    }
    return (
        <div className="App">
            <Sidebar
                onAddNote={onAddNote}
                notes={notes}
                onDeleteNote={onDeleteNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}

            />
            <Main
                activeNote={getActiveNote()}
                onUpdateNote={onUpdateNote}/>

        </div>
    )
}

export default App
