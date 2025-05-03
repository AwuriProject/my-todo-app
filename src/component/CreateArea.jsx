import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";

const CreateArea = (props) => {
  const [isExpand, setIsExpand] = useState(false);
  const [createNote, setCreateNote] = useState({ title: "", content: "" });

  const handleNote = (e) => {
    const { name, value } = e.target;
    setCreateNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (e) => {
    props.onAdd(createNote);
    setCreateNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  };

  const handleExpand = () => {
    setIsExpand(true);
  };

  return (
    <div className=" w-full flex items-center justify-center">
      <form action="" className="form inset-shadow-no">
        {isExpand && (
          <input
            name="title"
            className="form-group"
            type="text"
            placeholder="Title"
            value={createNote.title}
            onChange={handleNote}
          />
        )}

        <textarea
          className="form-group"
          name="content"
          rows={isExpand ? "3" : 1}
          onClick={handleExpand}
          value={createNote.content}
          onChange={handleNote}
          placeholder="Your note..."
        ></textarea>
        <Zoom in={true}>
          <Fab
            type="submit"
            className="btn"
            sx={{ backgroundColor: "#f5ba13" }}
            onClick={submitNote}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
