import React, {useEffect, useState, Dispatch, SetStateAction} from 'react';
import {actions} from './actions';
import {actionsToken} from '../../actions';
import {actionsNumber} from '../../actions';
import { Form, Field, reduxForm, getFormValues } from 'redux-form';
import {useSelector, useDispatch, connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Extract, Elements, Payment, Messages, History, Tools} from './components'

export const ScoreScreenWrap = (props) => {
    const dispatch = useDispatch();
    const [showPayment, setPayment] = useState(false);
    const [showExtract, setExtract] = useState(false);
    const [paymentHeader, setHeader] = useState('');
    const [paymentMail, setMail] = useState('');
    const {score, user: {name, selectedScore, token}} = useSelector(state => state);
    const [count, setCount] = useState(0);
    const history = useHistory();


    const handleAuthorization = () =>  {
        history.push('/');
    };

    if (!token){
        handleAuthorization();
    }

    const handleSelectorBtn = (num: number, amount: number) => () => {
        props.initialize({scoreFrom: num, amountShow: amount});
        dispatch(actionsNumber.selectNumber(num.toString()));
    };

    const handleSettingsBtn = () => () => {
        dispatch(actions.createScore());
    };

    const handleNewScoreBtn = () =>  {
        console.log("new score pressed");
        dispatch(actions.createScore());
        setCount(count + 1);
    };

    const handleCloseScoreBtn = () => {
        dispatch(actions.closeScore(selectedScore));
        setCount(count + 1);
    };

    const handleExtractBtn = () => {
        dispatch(actions.getDetails(selectedScore));
        setExtract(true);
    }

    const handlePaymentBtn = () => {
        props.initialize({scoreFrom: selectedScore});
        setPayment(true);
    };

    const handleDepositBtn = () => {
        props.initialize({scoreFrom: 'AddMoney', scoreTo: selectedScore, userName: name});
        setHeader('Пополнить');
        setPayment(true);
    };

    const handleTransactionBtn = () => {
        props.initialize({scoreFrom: selectedScore, userName: name});
        setHeader('Перевод');
        setPayment(true);
    };

    const handleExitBtn = () => {
        dispatch(actionsToken.updateToken(undefined));
        history.push('/');
    };

    useEffect(() => {
        dispatch(actions.componentLoaded());
    }, [count]) // обновление страницы

    useEffect(() => {
        if (score.data.length) {
            const firstElement = score.data[0];
            props.initialize({scoreFrom: firstElement.number, amountShow: firstElement.amount});
            dispatch(actionsNumber.selectNumber(firstElement.number.toString()));
        }
    }, [score.data]);

    // Render the UI for your table
    return (
        <>
        {showPayment && <Payment paymentHeader={paymentHeader} setPayment={setPayment} />}
        {<Tools  paymentMail={paymentMail} handleExitBtn={handleExitBtn}/>}
        {<Elements handleDepositBtn={handleDepositBtn} handleTransactionBtn={handleTransactionBtn} handlePaymentBtn={handlePaymentBtn} 
        handleDetailsBtn={handleExtractBtn} handleCloseScoreBtn={handleCloseScoreBtn}/>}   
        {<Messages />}
        <div className="scorelist" >
        <b> Счета </b>
        <div   className="viewarea">
                {score.data.map(item => {
                    return <div key={item.number}>
                         <button onClick={handleSelectorBtn(item.number, item.amount)}>{item.number}</button>
                    </div>
                })}      
        </div>
            <button onClick={handleNewScoreBtn} style={{background:"#20B2AA", marginTop: "10px"}}>Новый счёт</button> 
        </div>
        
        {showExtract && <Extract setExtract={setExtract} />}
        {<History />}
        </>
    )
}






export const ScoreScreen = reduxForm({
    form: 'paymentForm'
})(ScoreScreenWrap)