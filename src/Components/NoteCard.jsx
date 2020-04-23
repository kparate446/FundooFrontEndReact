import React from 'react';
import Card from '@material-ui/core/Card';
import ShowNote from '../Components/ShowNote';
import '../CSSFile/Notes.css';

const NoteCard = (props) => {
    return (
        <Card className='noteCard' label="Multiline Placeholder"
        multiline style={{ borderRadius: 10, width: 288,  display: 'flex', flexDirection: 'column', border: 'solid rgba(128, 128, 128, 0.21)', margin: 5, padding: 7 }}>
               {/* <ShowNote/> */}
               <ShowNote id={props.items.id}
                title={props.items.title}
                discription={props.items.discription} />
        </Card>
    );
};

export default NoteCard;