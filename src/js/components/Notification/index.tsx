import React from 'react';
import {useSelector} from 'react-redux';

export const Notification = () => {
    const error = useSelector(state => state.components.regBlock?.error);

    return error
        ? <div className="notification">
            {error}
        </div>
        : null
};