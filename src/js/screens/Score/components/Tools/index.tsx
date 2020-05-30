import {useSelector} from 'react-redux';
import React from 'react';

export interface ToolsProps {
    paymentMail: string
    handleExitBtn: () => void
}

export const Tools = (props: ToolsProps) => {
    const {name} = useSelector(state => state.user);
    return <div className="toolsform" >
           <u> {name}</u>
        <button onClick={()=>{}} style={{marginLeft: "10px"}}><img src="src/images/settings.png" height="12"/></button> 
        <button onClick={()=>{}} style={{marginLeft: "10px"}}><img src="src/images/photo.png" height="15"/></button> 
        <button onClick={props.handleExitBtn} style={{marginLeft: "10px"}}><img src="src/images/exit.png" height="12"/></button> 
    </div>
}