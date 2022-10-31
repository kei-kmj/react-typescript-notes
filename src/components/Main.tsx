import "./Main.css"
import {Note} from "./Types/Note";


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
            <p className="markdown-preview">{activeNote.content}</p>

        </div>
    </div>)
}

export default Main