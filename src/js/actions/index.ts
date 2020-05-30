export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_SCORE = 'UPDATE_SCORE'; 

export type Token = string;
export type Name = string;

export const actionsToken = {
    updateToken: (token: Token) => ({type: UPDATE_TOKEN, payload: { token }})
}
export const actionsName = {
    updateName: (name: Name) => ({type: UPDATE_NAME, payload: { name }})
}

export const actionsNumber = {
    selectNumber: (score: string) => ({type: UPDATE_SCORE, payload: { score }})
}