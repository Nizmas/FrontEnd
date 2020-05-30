import React from 'react';
import {useDispatch} from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form';
import {useHistory} from 'react-router-dom';
import {Redirect} from 'react-router';
import { SUBMIT_AUTH } from './actions';

const AuthForm = props => {
    const dipsatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dipsatch({type: SUBMIT_AUTH, payload: history})
    };

    const signUpSubmit = (e) => {
        e.preventDefault();
        history.push('/reg');
    };


    return (
        <div className="inputform">
            <Form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="login"></label>
                    <Field name="login" component="input" type="email" placeholder="Email Address" required/>
                </div>
                <br></br>
                <div>
                    <label htmlFor="password"></label>
                    <Field name="password" component="input" type="password" placeholder="Password" required/>
                </div>
                <br></br>
                <button type="submit">Sign in</button>
            </Form>
            <Form onSubmit={signUpSubmit}>
                <br></br>
                <button type="submit">Sign up</button>
            </Form>  
        </div>
        
    )
}

export const AuthBlock = reduxForm({
    // a unique name for the form
    form: 'authForm'
})(AuthForm)