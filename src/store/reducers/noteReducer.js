const initState = {
    notes: [
        // {id: '1', title: 'title note 1', description: 'description note 1'},
        // {id: '2', title: 'title note 2', description: 'description note 2'},
        // {id: '3', title: 'title note 3', description: 'description note 3'},
    ]
}

const noteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_NOTES':
            // console.log('received notes', action.notes)
            // console.log('current user reducer', action.currentUser)
            return {
                ...state,
                // notes: action.notes
                notes: action.notes
                // notes: action.notes.filter(note => note.user_id === action.currentUser.id)
            }

        case 'GET_NOTES_ERROR':
            // console.log('received notes error', action.error)
            return state


        case 'CREATE_NOTE':
            // console.log('created note', action.note)
            return {
                ...state,
                notes: [...state.notes,
                    action.note
                ]
            }

        case 'CREATE_NOTE_ERROR':
            // console.log('create note error', action.error)
            return state

        case 'DELETE_NOTE':
            // console.log('deleted note', action.noteId)
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.noteId)
            }

        case 'DELETE_NOTE_ERROR':
            // console.log('delete note error', action.error)
            return state

        case 'GET_PROFILE_NOTE':
            // console.log('fetch with authorization header and token')
            return {
                ...state,
                notes: action.notes
            }

        case 'SIGNOUT_SUCCESS_NOTE':
            // console.log('signout success')
            return {
                notes: {}
            }

        case 'ACQUIRE_NOTE':
            // console.log('acquire note')
            return{
                ...state,
                currentNote: action.notes.find(note => note.id === action.noteId)
            }
        case 'ACQUIRE_NOTE_ERROR':
            // console.log('acquire note error', action.error)
            return state

        case 'EDIT_NOTE':
            // console.log('deleted note', action.note, action.noteId)
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id === action.note.id) {
                        return action.note}
                        return note})
                    
            }

        case 'EDIT_NOTE_ERROR':
            // console.log('edit note error', action.error)
            return state

        default:
            return state
    }
}

export default noteReducer