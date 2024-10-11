import { Component } from "react";
import Note from "./Note";
import NewNote from "./NewNote";

interface INote {
  id: number;
  content: string;
}
type TNotesState = { notes: INote[] };
type TNotesProps = {
  url: string;
};

class Notes extends Component<TNotesProps, TNotesState> {
  constructor(props: TNotesProps) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount(): void {
    this.loadNotes();
  }

  handleUpdate = () => {
    this.loadNotes();
  };

  handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = (e.target as HTMLElement).closest(".note").getAttribute("id");

    fetch(this.props.url + "/" + id, {
      method: "DELETE",
    });

    this.loadNotes();
  };

  handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement
    const text = target.querySelector("textarea").value;
    target.querySelector("textarea").value = "";
    const newNote = {
      id: 0,
      content: text,
    };
    fetch(this.props.url, {
      method: "POST",
      body: JSON.stringify(newNote),
    });
    this.loadNotes();
  };

  loadNotes = () => {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ notes: json });
      });
  };

  render() {
    return (
      <div className="notes">
        <div className="header">Notes</div>
        <button className="btn-update" onClick={this.handleUpdate}>
          ↺
        </button>
        <div className="note-container">
          {Array.from(this.state.notes).map((note) => (
            <Note
              key={note.id}
              id={note.id}
              content={note.content}
              handleDelete={this.handleDelete}
            />
          ))}
        </div>
        <NewNote handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default Notes;
