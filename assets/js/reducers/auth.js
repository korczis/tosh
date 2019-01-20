/*
 * action types
 */

export const SET_AUTH_USER = 'SET_AUTH_USER'

/*
 * other constants
 */

// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

export function setAuthUser(user) {
    return {
        type: SET_AUTH_USER, user
    }
}

export const initialState = {
    user: null
}

/*
 * action creators
 */

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return action.user
        default:
            return state
    }
}

export default authReducer
