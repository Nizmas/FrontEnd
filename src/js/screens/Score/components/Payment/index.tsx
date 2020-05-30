import React, {Dispatch, SetStateAction} from 'react';
import {actions} from '../../actions';
import { Form, Field} from 'redux-form';
import {useDispatch} from 'react-redux';


export interface PaymentProps {
    setPayment: Dispatch<SetStateAction<boolean>>
    paymentHeader: string
}

export const Payment = (props: PaymentProps) => {
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(actions.transferMoney());
        props.setPayment(false);
    };
    
    const cancelSubmit = () => {
        props.setPayment(false);
    }

    return <div className="inputform" >
        {props.paymentHeader && <h2>{props.paymentHeader}</h2>}
        <Form default onSubmit={handleSubmit}>
            <div>
                <Field name="scoreFrom" component="input" type="text" readOnly/>
            </div>
            <br></br>   
            <div>
                <Field name="scoreTo" component="input" type="text" placeholder="Acceptor number" required/>
            </div>
            <br></br>   
            <div>
                <Field name="userName" component="input" type="email" placeholder="Acceptor Email" required/>
            </div>
            <br></br>   
            <div>
                <Field name="howMuch" component="input" type="number" placeholder="Amount of money" required/>
            </div>
            <br></br>   
            <button type="submit">Send</button>      
            <br></br>      
        </Form>
        <Form default onSubmit={cancelSubmit}>
            <br></br>   
            <button type="submit">Cancel</button>  
        </Form>
    </div>
}