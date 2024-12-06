import { MdUnarchive } from "react-icons/md";
import { MdArchive } from "react-icons/md";
import React from "react";

function ArchiveButton({ id, archived, onArchive }) {
  return (
    <button
      className="note-item__archive"
      onClick={() => onArchive(id)}
      title={archived ? "Keluarkan dari Arsip" : "Arsipkan"}
    >
      {archived ? <MdUnarchive /> : <MdArchive />}
    </button>
  );
}

export default ArchiveButton;
