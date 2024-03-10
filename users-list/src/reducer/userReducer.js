import {
    ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILURE,
    DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS,
    EDIT_USER_FAILURE, EDIT_USER_REQUEST, EDIT_USER_SUCCESS,
    FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS
} from "../constants/actionTypes";



// Define initial state
const initialState = {
    users: [],
    loading: false,
    error: null
};

// Define reducer function
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
        case ADD_USER_REQUEST:
        case EDIT_USER_REQUEST:
        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
        case ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...state.users, action.payload],
                error: null
            };
        case EDIT_USER_SUCCESS:
            const { userId, userData } = action.payload;
            const updatedUsers = [...state.users];
            const index = updatedUsers.findIndex(user => user.id === userId);
            updatedUsers[index + 1] = { ...updatedUsers[index], ...userData };
            return {
                ...state,
                loading: false,
                users: updatedUsers
            };
        case DELETE_USER_SUCCESS:
            const userIds = action.payload;
            const updatedItems = state.users.filter(user => !userIds.includes(user.id));
            return {
                ...state,
                loading: false,
                users: updatedItems
            };

        case FETCH_USERS_FAILURE:
        case ADD_USER_FAILURE:
        case EDIT_USER_FAILURE:
        case DELETE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
