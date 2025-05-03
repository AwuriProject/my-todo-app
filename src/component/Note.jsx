import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";

const Note = ({ id, title, content, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const handleDelete = () => {
    onDelete(id);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    onEdit(id, newTitle, newContent);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setNewTitle(title);
    setNewContent(content);
    setIsEditing(false);
  };
  return (
    <div className="note flex justify-between dark:bg-[#0a1f44]">
      {isEditing ? (
        <>
          <div className="flex justify-center items-center w-full">
            <div>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="form-group dark:text-white"
              />
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="form-group dark:text-white"
              ></textarea>
            </div>
            <div className="flex items-center">
              <button type="submit" onClick={handleSave} className="note-btn">
                <VerticalAlignBottomIcon fontSize="50" />
              </button>
              <button className="note-btn" onClick={handleCancel}>
                <CloseIcon fontSize="50" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <h1 className="text-black text-lg mb-1.5 capitalize dark:text-white">
              {title}
            </h1>
            <p className="whitespace-pre-wrap wrap-break-word text-lg -scroll-mb-2.5 capitalize dark:text-white">
              {content}
            </p>
          </div>
          <div className="flex items-center">
            <button type="submit" onClick={handleDelete} className="note-btn">
              <DeleteIcon fontSize="50" />
            </button>
            <button className="note-btn">
              <EditIcon onClick={handleEdit} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Note;
