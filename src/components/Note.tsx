import { Component } from 'react'


type TNoteProps = {
  id: number;
    content: string;
    handleDelete: (arg0: React.MouseEvent<HTMLButtonElement> ) => void
  };

export class Note extends Component <TNoteProps> {
    constructor(props:TNoteProps) {
        super(props);
    }

  render() {
    return (
        <div className='note' id={String(this.props.id)} >
              <div className='note-text'>{this.props.content}</div>
              <button className='delete-note' onClick={this.props.handleDelete}>✖</button>
        </div>
    )
  }
}

export default Note