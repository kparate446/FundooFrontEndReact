import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import { getAllTrashNotes } from '../Services/UserService/UserServices';
import NoteCard from '../Components/NoteCard';

class ShowTrashNote extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clickAway: true,
            title: '',
            discription: '',
            notes: null
        }
    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    showAllTrashNotes = () => {
        let token = localStorage.getItem("Token");
        // console.log(token);

        getAllTrashNotes(token)
            .then(Response => {
                this.setState({
                    notes: (Response.data.data).reverse()
                })
            })
    }

    componentDidMount() {
        this.showAllTrashNotes()
    }

    render() {

        return (
            <Container style={{ marginTop: '6em' }} >

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '2em',
                    marginLeft: '5%',
                }}>
                    {
                        this.state.notes !== null &&
                        (this.state.notes).map((items) => (
                            <NoteCard trash={true} items={items} />
                        ))
                    }
                </div>
            </Container >
        );
    }
}

export default ShowTrashNote;
