export const SET_ERROR = 'SET_ERROR';
export const SUBMIT = 'SUBMIT';
export type Error = string | object;

export const actions = {
    setError: (error: Error) => ({type: SET_ERROR, payload: { error }})
}