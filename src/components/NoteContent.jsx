import React from "react";

function NoteContent({ title, createdAt, body }) {

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(createdAt).toLocaleDateString('id-ID', options);

  return (
    <div className="note-card__content">
      <h3 className="note-card__title">{title}</h3>
      <p className="note-card__created">{formattedDate}</p>
      <p className="note-card__body">{body}</p>
    </div>
  )
}

export default NoteContent;