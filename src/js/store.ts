import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

import {SET_ERROR} from './components/RegBlock/actions';

const sagaMiddleware = createSagaMiddleware();

interface ComponentsState {
  regBlock: RegBlockState
}

export interface RegBlockState {
  error: Error
}

export interface UserInfo {
  token: string,
  name: string,
  selectedScore: string
}

const componentInitialState: ComponentsState = {
  regBlock: null
};

function componentsReducer(state = componentInitialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        regBlock: {
          error: action.payload.error
        }
      };
     default:
      return state;
  }
}

const userInfoStore: UserInfo = {
  token: '',
  name: '',
  selectedScore: ''
};

function userInfoReducer(state = userInfoStore, action) {
  switch (action.type) {
    case 'UPDATE_TOKEN':
      return {...state, token: action.payload.token};
    case 'UPDATE_NAME':
      return {...state, name: action.payload.name};
    case 'UPDATE_SCORE':
      return {...state, selectedScore: action.payload.score};
    default:
      return state;
  }
}

export interface ScoreData {
  number: number,
  amount: string
}

export interface HistoryData {
  byTemplate: boolean,
  howMuch: number,
  scoreFrom: string,
  scoreTo: string,
  sentTime: string,
  type: Date,
}

export interface MessageData {
  author: string,
  msg: string,
  sentTime: Date,
}

export interface ScoreState {
  details: string,
  history: HistoryData[],
  messages: MessageData[],
  data: ScoreData[]
}

const scoreState: ScoreState = {
  details: '',
  history: [],
  messages: [],
  data: []
};

function scoreReducer(state = scoreState, action) {
  switch (action.type) {
    case 'UPDATE_DETAILS':
      return {
        ...state,
        details: action.payload.details
      };
    case 'UPDATE_HISTORIES':
      return {
        ...state,
        history: action.payload.histories
      };
    case 'UPDATE_MESSAGES':
        return {
          ...state,
          messages: action.payload.messages
        };
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload.data
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  form: formReducer,
  components: componentsReducer,
  score: scoreReducer,
  user: userInfoReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

// @ts-ignore
window._reduxStore = store;