import {put, call, takeEvery, takeLatest, select} from 'redux-saga/effects';
import { GET_DETAILS, GET_ALL_SCORES, TRANSFER_MONEY, CREATE_SCORE, CLOSE_SCORE, SEND_MESSAGE, actions as scoreActions, GET_HISTORIES } from './actions';
import axios from 'axios';
import { actionsToken } from '../../actions';

export function* scoreScreenSagaWatcher() {
    yield takeEvery(GET_DETAILS, getDetailsSagaWorker);
    yield takeEvery(GET_ALL_SCORES, scoreLoadedSaga);
    yield takeEvery(TRANSFER_MONEY, transferMoneySaga);
    yield takeEvery(CREATE_SCORE, createScoreSaga);
    yield takeEvery(CLOSE_SCORE, closeScoreSaga);
    yield takeEvery(SEND_MESSAGE, sendMessageSaga);
    yield takeEvery(GET_HISTORIES, getHistoriesSaga);

}
function* getDetailsSagaWorker(actions) {
    try {
        const token = yield select(store => store.user.token);
        const response = yield axios.post('http://localhost:5000/extract', {
            scorefrom: actions.payload.num.toString()
        }, {
            headers: {
                Authorization: 'Bearer ' + token
            },
        });

        console.log(response.data)

        yield put(scoreActions.updateDetails(response.data));
    } catch(e) {
    }
}

function* scoreLoadedSaga() {
    console.log('scoreLoadedSaga');
    try {
        const token = yield select(store => store.user.token);
        const response = yield axios.get('http://localhost:5000/showmoney', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        yield put(scoreActions.setData(response.data));
    } catch(e) {
    }
}

function* transferMoneySaga() {
    try {
        const {scoreFrom, scoreTo, userName, howMuch} = yield select(store => store.form.paymentForm.values);
        const token = yield select(store => store.user.token);

        const requestBody = {
            ScoreFrom: scoreFrom, 
            ScoreTo: scoreTo,
            TakerName: userName,
            HowMuch: Number(howMuch)
        }

        yield axios.post('http://localhost:5000/transfermoney', requestBody, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        yield call(scoreLoadedSaga);
    } catch(e) {
    }
}

function* createScoreSaga() {
    try {
        const token = yield select(store => store.user.token);
        const response = yield axios.get('http://localhost:5000/newscore', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    } catch(e) {
    }
}

function* closeScoreSaga(actions) {
    try {
        const token = yield select(store => store.user.token);
        const response = yield axios.post('http://localhost:5000/closescore', {
            scorefrom: actions.payload.num.toString()
        }, {
            headers: {
                Authorization: 'Bearer ' + token
            },
        });
        console.log(response.data)
        yield put(scoreActions.updateDetails(response.data));
    } catch(e) {
    }
}
 
function* sendMessageSaga() {
    try {
        console.log('Message ready');
        const {messageWrite} = yield select(store => store.form.paymentForm.values);
        const token = yield select(store => store.user.token);
        const requestBody = {
            NewMessage: messageWrite 
        }
        const response = yield axios.post('http://localhost:5000/newmsg', requestBody, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        yield put(scoreActions.updateMessage(response.data));
    } catch(e) {
    }
}

function* getHistoriesSaga() {
    try {
        const {scoreFrom, timefrom, timeto} = yield select(store => store.form.paymentForm.values);
        const token = yield select(store => store.user.token);

        const requestBody = {
            scorefrom: scoreFrom,
            timefrom: timefrom,
            timeto: timeto
        }

        const response = yield axios.post('http://localhost:5000/history', requestBody, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        yield put(scoreActions.updateHistory(response.data));
    } catch(e) {
    }
}