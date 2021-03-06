import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    // console.log('signedinlinks', props)
    
    return(
        <ul className='right'>
            <li><NavLink to='/create'>Create New Note</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>

            {/* user icon logged in initial*/}
            <li><NavLink to='/' className='btn btn-floating cyan lighten-1'>
                { props.currentUser.user ? props.currentUser.user.username.charAt(0) : null }
            </NavLink></li>
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)