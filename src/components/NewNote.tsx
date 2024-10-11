import { Component } from 'react'

type TNewNoteProps = {
  handleAdd: (arg0: React.FormEvent<HTMLFormElement>) => void
};

export class NewNote extends Component <TNewNoteProps>{
  constructor(props: TNewNoteProps) {
    super(props);
  }

  render() {
    return (
      <form className='form-new-note' onSubmit={this.props.handleAdd}>
        <label htmlFor="note-text">New Note</label>
        <textarea className='input-new-note' name='note-text' required/>
        <button className='btn-new-note' type='submit' >➤</button>
      </form>
    )
  }
}

export default NewNote