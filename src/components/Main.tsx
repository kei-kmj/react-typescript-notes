import "./Main.css"
import {Note} from "./Types/Note";
import { ReactMarkdown} from "react-markdown/lib/react-markdown"


const Main = ({activeNote, onUpdateNote}: Note[]) => {

    const onEditNote = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            modDate: Date.now()
        })
    }
    if (!activeNote) {
        return <div className="no-active-note">ノートが選択されていません</div>
    }
    return (<div className="app-main">
        <div className="app-main-note-edit">
            <input
                type="text"
                value={activeNote.title}
                onChange={(e) => onEditNote("title", e.target.value)}/>
            <textarea
                id=""
                placeholder="内容"
                value={activeNote.content}
                onChange={(e) => onEditNote("content", e.target.value)}/>

        </div>
        <div className="app-main-note-preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            <ReactMarkdown className="markdown-preview">{activeNote.content}</ReactMarkdown>

        </div>
    </div>)
}

export default Main