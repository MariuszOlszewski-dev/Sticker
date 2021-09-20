import React, {useState} from 'react'
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
    const [expand, setExpand] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: "" 
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => ({...prevNote, [name]: value }));
    }

    function submitNote(e) {
        e.preventDefault();
        if(note.title==="" || note.content==="")return
        props.addNote(note);
        setNote({
            title: "",
            content: "",
        });
    }
    function expanded(){
        setExpand(true)
    }
    return (
      <div>
        <form className="create-note">
            {expand && 
                <input
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
                />
            }
            <textarea
            name="content"
            onClick={expanded}
            onChange={handleChange}
            value={note.content}
            placeholder="Content"
            rows={expand ? '3' : '1'}
            />
            <Zoom in={expand}>
            <Fab color="primary" aria-label="add" onClick={submitNote}>
                <AddIcon />
            </Fab>
            </Zoom>
        </form>
      </div>
    );
}
 
export default CreateArea;