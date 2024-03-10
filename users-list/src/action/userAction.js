export const fetchUsers = () => async dispatch => {
    dispatch({ type: 'FETCH_USERS_REQUEST' });

    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
};

export const addUser = (userData) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD_USER_REQUEST' });
        setTimeout(() => {
            dispatch({ type: 'ADD_USER_SUCCESS', payload: userData });
        }, 1000);
    } catch (error) {
        dispatch({ type: 'ADD_USER_FAILURE', payload: error.message });
    }
};
// actions/userActions.js
export const editUser = (userId, userData) => async (dispatch) => {
    try {
        dispatch({ type: 'EDIT_USER_REQUEST' });
        setTimeout(() => {
            dispatch({ type: 'EDIT_USER_SUCCESS', payload: { userId, userData } });
        }, 1000);
    } catch (error) {
        dispatch({ type: 'EDIT_USER_FAILURE', payload: error.message });
    }
};
// actions/userActions.js
export const deleteUser = (userIds) => async (dispatch) => {
    dispatch({ type: 'DELETE_USER_REQUEST' });
    try {
        dispatch({ type: 'DELETE_USER_SUCCESS', payload:  userIds  });
    } catch (error) {
        dispatch({ type: 'DELETE_USER_FAILURE', payload: error.message });
    }
};
