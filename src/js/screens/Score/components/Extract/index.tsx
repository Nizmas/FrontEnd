import { Form} from 'redux-form';
import React, { Dispatch, SetStateAction} from 'react';
import {useSelector} from 'react-redux';

export interface ExtractProps {
    setExtract: Dispatch<SetStateAction<boolean>>
}

export const Extract = (props: ExtractProps) => {
   const score = useSelector(state => state.score);
   const cancelSubmit = () => {
    props.setExtract(false);
   }

   return score.details ? 
   <div className="extract">
       <h4>Выписка</h4>
       <div className="viewarea">
         <pre>{score.details}</pre>
         <br></br> 
        </div> 
       <Form default onSubmit={cancelSubmit}>
         <br></br>   
         <button type="submit">Закрыть</button>  
       </Form> 
    </div> : null
}