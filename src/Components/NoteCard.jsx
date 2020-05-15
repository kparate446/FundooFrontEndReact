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
        width: 285,
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        backgroundColor: props.items.color,
        padding: 12,
      }}
    >
      <ShowNote
        update={props.update}
        id={props.items.id}
        labelName={props.items.labelList}
        title={props.items.title}
        discription={props.items.discription}
        trash={props.trash}
        collabrators={props.items.collabrators}
        reminder={props.items.reminder}
      />
    </Card>
  );
};

export default NoteCard;
