import React from 'react';
import {useSelector} from 'react-redux';
import { Form, Field } from 'redux-form';
import {useDispatch} from 'react-redux';
import {actions} from '../../actions';

export interface HistoryProps {
    paymentMail: string
}

export const History = () => {
    const dispatch = useDispatch();
    const {user:{selectedScore}, score} = useSelector(state => state);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.getHistories());
    };
    return <div className="historyform" >
     <Form default onSubmit={handleSubmit}> 
        <b style={{position: "absolute" , left: "10px", fontSize : '13px'}}>История операций по счёту: {selectedScore}</b>   
          c <Field name="timefrom" component="input" type="date" required style={{resize: "none", marginRight: "5px"}}/>
          по  <Field name="timeto" component="input" type="date" required style={{resize: "none", marginRight: "5px"}}/>
            <button type="submit" style={{position: "relative"}}>>></button> 
     </Form> <br/> 
           <div className="viewarea">
           {
               score.history.map(item => {
                return <div key={item.sentTime}>
                    <div>{item.type} {item.howMuch} рублей cо счёта {item.scoreFrom} на {item.scoreTo}</div>
                    <div style={{}}>{item.sentTime}</div>
                    <br/>
                </div>
               })
           }
           </div>
    </div>
}