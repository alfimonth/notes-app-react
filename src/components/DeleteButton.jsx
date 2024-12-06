import { MdDelete } from "react-icons/md";
import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="note-item__delete" onClick={() => onDelete(id)} title="Hapus Catatan">
      <MdDelete />
    </button>
  );
}

export default DeleteButton;
