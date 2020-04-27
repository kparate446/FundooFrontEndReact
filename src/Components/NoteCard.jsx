import React from 'react';
import Card from '@material-ui/core/Card';
import ShowNote from '../Components/ShowNote';
import '../CSSFile/Notes.css';

const NoteCard = props => {
  return (
    <Card
      className="noteCard"
      label="Multiline Placeholder"
      multiline
      style={{
        borderRadius: 10,
        width: 309,
        display: 'flex',
        flexDirection: 'column',
        margin: 5,
        padding: 7,
      }}
    >
      {/* <ShowNote/> */}
      <ShowNote
        id={props.items.id}
        title={props.items.title}
        discription={props.items.discription}
      />
    </Card>
  );
};

export default NoteCard;
