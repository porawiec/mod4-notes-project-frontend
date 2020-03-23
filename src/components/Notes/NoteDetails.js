import React from 'react'
import { connect } from 'react-redux'
import { deleteNote } from '../../store/actions/noteActions'

const moment = require("moment");

const NoteDetails = (props) => {
    // console.log('note detail props', props)
    // const id = props.routing.match.params.id
    const { note } = props
    
    if (note) {

    const handleDelete = (e) => {
        e.preventDefault()
        // console.log(props)
        props.deleteNote(props.note.id)
        props.routing.history.push('/')

    }

    const createDate = moment(note.created_at)
    const updateDate = moment(note.updated_at)

        return(
            <div className='container section note-details'>
            {console.log('return details props', props)}
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>
                            {note.title}
                        </span>
                        <p>
                            {note.description}
                        </p>
                    </div>
                    <div className='card-action grey lighten-4 grey-text'>
                        <div className='row'>
                            <div className='col s10'>
                                <div> Created: {createDate.format('MMM DD, YYYY - h:mma')} </div>
                                <div> Updated: {updateDate.format('MMM DD, YYYY - h:mma')} </div>
                            </div>
                            <div className='col s1'>
                                <a onClick={handleDelete} className='waves-effect waves-light btn-small'>Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
    return (
        <div className='container center'>
            <p>Loading Note...</p>
        </div>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.routing.match.params.id)
    // console.log('map state', state)
    const notes = state.note.notes
    // console.log('maps state notes', notes)
        return {
            note: notes.find((note) => {
                // console.log(note.id)
                return (
                    note.id === id
                )
            })
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (noteId) => dispatch(deleteNote(noteId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetails)