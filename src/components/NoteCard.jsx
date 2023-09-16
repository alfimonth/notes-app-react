import React from "react";
import NoteContent from "./NoteContent";
import NoteAction from "./NoteAction";

function NoteCard({title, createdAt, body, id, archived, onArchive, onDelete}){
  return (
    <div className="note-card">
      <NoteContent title={title} createdAt={createdAt} body={body} />
      <NoteAction id={id} archived={archived} onArchive={onArchive} onDelete={onDelete}/>
    </div>
  )
}

export default NoteCard;