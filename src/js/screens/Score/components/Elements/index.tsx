import {Field} from 'redux-form';
import React from 'react';

export interface ElementsProps {
    handleDepositBtn: () => void
    handleTransactionBtn: () => void
    handlePaymentBtn: () => void
    handleDetailsBtn: () => void
    handleCloseScoreBtn: () => void
}

export const Elements = (props: ElementsProps) => {
    return <div className="elementsform" >
    
        <div>
            <label htmlFor="scoreFrom">Счёт № </label>
            <Field name="scoreFrom" component="input" type="text" readOnly/>
        </div>
        <br></br>   
        <div>
            <label htmlFor="amountShow">Баланс: </label>
            <Field name="amountShow" component="input" type="text" readOnly/>
        </div>  
        <br/>       
        <button onClick={ props.handleDepositBtn} style={{marginRight: '10px'}}>Пополнить</button>
        <button onClick={ props.handleTransactionBtn} style={{marginRight: '10px'}}>Перевод</button>
        <button onClick={ props.handlePaymentBtn} style={{marginRight: '10px'}}>Платёж</button>
        <br/> <br/> 
        <button onClick={props.handleDetailsBtn} style={{marginRight: '10px'}}>Выписка</button>
        <button onClick={ () => {}} style={{marginRight: '10px'}}>Создать шаблон</button>
        <button onClick={props.handleCloseScoreBtn} style={{ display: 'block', fontSize:"70%", margin: 'auto 0px auto auto', background: 'pink'}}>Закрыть счёт</button>
</div>
}