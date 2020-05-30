import {put, takeEvery, select} from 'redux-saga/effects';
import {actions, SUBMIT_AUTH} from './actions';
import {actionsToken} from '../../actions';
import {actionsName} from '../../actions';
import {Redirect} from 'react-router'
import axios from 'axios';

export function* formAuthSagaWatcher() {
    yield takeEvery(SUBMIT_AUTH, submitWorkerSaga);
}

function* submitWorkerSaga(action) {
    const {
        form: {
            authForm: {
                values: {
                    login, password
                }
            }
        }
    } = yield select();

    const requestBody = {
        username: login,
		password: password
    };

    try {
        console.log('Try');
        const response = yield axios.post('http://localhost:5000/api/token', requestBody);
        console.log('Entered');

        yield put(actionsToken.updateToken(response.data.token));
        yield put(actionsName.updateName(login));
        yield action.payload.push('/score')
    } catch(e) {
        const error = e.response.data;
        console.log('Not Entered');
        yield put(actions.setError(error));
        
    }
}