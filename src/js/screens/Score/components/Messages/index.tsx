import React from 'react';
import {actions} from '../../actions';
import { Form, Field, reduxForm, getFormValues } from 'redux-form';
import {useSelector, useDispatch, connect} from 'react-redux';

export const Messages = () => {
    const dispatch = useDispatch();
    const {score} = useSelector(state => state);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.sendMessage());
    };

    return <div className="messagesform" > 
    <b> Служба поддержки </b> <br/> <br/>
    <div className="viewarea">
    {
        score.messages.map(item => {
        return <div key={item.sentTime} >
            <div style={{float: item.author === 'Вы' ? 'right' : 'left', maxWidth: '170px',}}>
                <div style={{float: 'right', fontSize: "12px", textAlign: 'left'}}>
                    <div style={{color: 'grey', float: 'left'}}>{item.author}: </div>  <br/>
                    <div style={{color: 'blue', float: 'left',  border: '1px solid grey', borderRadius: '3px', background: '#c9e9ff', padding: '5px'}}> {item.msg} </div> 
                </div> <br/> <br/> 
                <div style={{fontSize: "8px"}}>
                    {item.sentTime}
                </div>  
            </div> <br/> <br/> <br/> <br/>
        </div>
        })
    }
    </div>
    <br/>
    <Form default onSubmit={handleSubmit}>   
        <Field name="messageWrite" component="textarea" type="text" placeholder="Введите сообщение" required style={{resize: "none", marginRight: "5px"}}/>
        <button type="submit" style={{position: "relative", top:"-15px"}}>>></button>       
    </Form>
    </div>
}
