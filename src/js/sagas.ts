import { all, fork } from 'redux-saga/effects';
import { formSubmitSagaWatcher } from './components/RegBlock/sagas';
import { formAuthSagaWatcher } from './components/AuthBlock/sagas';
import {scoreScreenSagaWatcher} from './screens/Score/sagas';

export function* rootSaga() {
    yield all([
        fork(formSubmitSagaWatcher),
fork(formAuthSagaWatcher),
fork(scoreScreenSagaWatcher)
    ]);
}