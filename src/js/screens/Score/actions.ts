import {ScoreData} from '../../store';
import {HistoryData} from '../../store';
import {MessageData} from '../../store';

export const UPDATE_DETAILS = 'UPDATE_DETAILS';
export const GET_DETAILS = 'GET_DETAILS';
export const SET_DATA = 'SET_DATA';
export const GET_ALL_SCORES = 'GET_ALL_SCORES';
export const TRANSFER_MONEY = 'TRANSFER_MONEY';
export const CREATE_SCORE = 'CREATE_SCORE';
export const CLOSE_SCORE = 'CLOSE_SCORE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const GET_HISTORIES = 'GET_HISTORIES';
export const UPDATE_HISTORIES = 'UPDATE_HISTORIES';
export const UPDATE_MESSAGES = 'UPDATE_MESSAGES';


export const actions = {
    setData: (data: ScoreData) => ({type: SET_DATA, payload: {data}}),
    getDetails: (num: number) => ({type: GET_DETAILS, payload: {num}}),
    updateDetails: (details: string) => ({type: UPDATE_DETAILS, payload: { details }}),
    componentLoaded: () => ({type: GET_ALL_SCORES}),
    transferMoney: () => ({type: TRANSFER_MONEY}),
    createScore: () => ({type: CREATE_SCORE}),
    closeScore: (num: number) => ({type: CLOSE_SCORE, payload: {num}}),   
    getHistories: () => ({type: GET_HISTORIES}),
    updateHistory: (histories: HistoryData) => ({type: UPDATE_HISTORIES, payload: { histories }}),
    sendMessage: () => ({type: SEND_MESSAGE}),
    updateMessage: (messages: MessageData) => ({type: UPDATE_MESSAGES, payload: { messages }}),
}
