import {put, call, takeEvery, select} from 'redux-saga/effects';
import {actions} from './actions';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {getFormValues, isDirty, isPristine, isValid, isInvalid } from 'redux-form'

export function* formSubmitSagaWatcher() {
    yield takeEvery('SUBMIT', submitWorkerSaga);
}

function* submitWorkerSaga(action) {
    const {
        form: {
            regForm: {
                values: {
                    login, password, passwordCheck, firstName
                }
            }
        }
    } = yield select();

    const requestBody = {
        username: login,
		password: password,
		passwordcheck: passwordCheck,
		realname: firstName
    };

    try {
        yield axios.post('http://localhost:5000/newuser', requestBody);
        console.log('Registered');
        yield action.payload.push('/')  
    } catch(e) {
        const error = e.response.data;
        yield put(actions.setError(error));
    }
}
