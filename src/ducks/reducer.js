const initialState = {
    username: '',
    id: '',
    profilePic: {}
}

export const GET_USER_DATA = 'GET_USER_DATA'
export const POST_FAVORITE = 'POST_FAVORITE'
export const ADD_FAVORITE = 'ADD_FAVORITE'

export function getUserData(username, id, profile_pic) {
    return {
        type: GET_USER_DATA,
        payload: { username: username, id: id, profile_pic: profile_pic }
    }
}

export function addFavorite(constel_id, planet_id, galaxy_id) {
    return {
        type: ADD_FAVORITE,
        payload: { constel_id: constel_id, planet_id: planet_id, galaxy: galaxy_id }
    }
}



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA:
            return { ...state, username: action.payload.username, id: action.payload.id, profile_pic: action.payload.profile_pic }
        default:
            return state

        case ADD_FAVORITE:
            return { ...state, constel_id: action.payload.constel_id, planet_id: action.payload.planet_id, galaxy_id: action.payload.galaxy_id }

    }
}
// {
//     case GET_USER_DATA:
//     return Object.assign({}, state, { userInfo: action.payload })
// }