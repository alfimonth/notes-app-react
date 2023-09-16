import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteAction({ id, onDelete, archived, onArchive }) {
  return (
    <div className="note-card__action">
      <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}

export default NoteAction;