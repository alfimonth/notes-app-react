import React from "react";
import { getData } from "../utils/data";
import Header from "./Header";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      search: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(keyword) {
    const searchValue = keyword.target.value.toLowerCase();
    this.setState({ search: searchValue });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const confirm = window.confirm(
      "Apakah anda yakin ingin menghapus catatan ini?"
    );
    if (!confirm) return;
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.filter((note) => note.id === id);
    const note = (notes[0].archived = !notes[0].archived);
    this.setState({ note });
  }

  render() {
    const searchNotes = !this.state.search
      ? this.state.notes
      : this.state.notes.filter((note) =>
          note.title.toLowerCase().match(this.state.search)
        );
    const notArchivedNotes = searchNotes.filter((note) => !note.archived);
    const ArchivedNotes = searchNotes.filter((note) => note.archived);

    return (
      <div className="note-app">
        <Header onSearch={this.onSearchHandler} />
        <h2>Tambah Catatan</h2>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        <NoteList
          notes={notArchivedNotes}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
        <h2>Arsip</h2>
        <NoteList
          notes={ArchivedNotes}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
