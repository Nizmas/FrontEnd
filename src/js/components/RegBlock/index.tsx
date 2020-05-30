import React from 'react';
import {useDispatch} from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form';
import { SUBMIT } from './actions';


const RegForm = props => {
    const dipsatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dipsatch({type: SUBMIT})
    };

    return (
        <div className="inputform">
        <Form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="login"></label>
                <Field name="login" component="input" type="email" placeholder="Email Addres" required/>
            </div>
            <br></br>
            <div>
                <label htmlFor="firstName"></label>
                <Field name="firstName" component="input" type="text" placeholder="First Name" required/>
            </div>
            <br></br>
            <div>
                <label htmlFor="password"></label>
                <Field name="password" component="input" type="new-password" placeholder="Password" required/>
            </div>
            <br></br>
            <div>
                <label htmlFor="passwordCheck"></label>
                <Field name="passwordCheck" component="input" type="new-password" placeholder="Password" required/>
            </div>
            <br></br>
            <button type="submit">Sign up</button>
        </Form>
        </div>
    )
}

export const RegBlock = reduxForm({
    // a unique name for the form
    form: 'regForm'
})(RegForm)