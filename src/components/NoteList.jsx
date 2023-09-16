import React from "react";
import NoteCard from "./NoteCard";

function NoteList({ notes, onArchive, onDelete }) {
  return (
    <div className="note-list">
      {
        notes.length > 0 ? (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))
        ) : (
          <p className="note-list__empty">Tidak ada catatan</p>
        )}
    </div>
  );
}
export default NoteList;