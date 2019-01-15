const initialState = {
    username: '',
    id: '',
    profilePic: {}
}

const GET_USER_DATA = 'GET_USER_DATA'

export function getUserData(username, id, profile_pic) {
    return {
        type: GET_USER_DATA,
        payload: { username: username, id: id, profile_pic: profile_pic }
    }
}



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA:
            return { ...state, username: action.payload.username, id: action.payload.id, profile_pic: action.payload.profile_pic }
        default:
            return state
    }
}
// {
//     case GET_USER_DATA:
//     return Object.assign({}, state, { userInfo: action.payload })
// }