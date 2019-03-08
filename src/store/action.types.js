export const TodoAction = {
    remote: {
        FETCH_TODOS: 'FETCH_TODOS',
        FETCH_BY_ID: 'FETCH_BY_ID',
        CREATE_TODO: 'CREATE_TODO',
        UPDATE_TODO: 'UPDATE_TODO',
        DELETE_TODO: 'DELETE_TODO',
    },
    local: {
        SET_TODOS: 'SET_TODOS',
        TODO_DELETED_SUCCESS: 'TODO_DELETED_SUCCESS',
        SET_SELECTED_TODO: 'SET_SELECTED_TODO',
        SET_SELECTED_TODO_SIMPLE: 'SET_SELECTED_TODO_SIMPLE',
        TODO_UPDATED_SUCCESS: 'TODO_UPDATED_SUCCESS',
        TODO_CREATED_SUCCESS: 'TODO_CREATED_SUCCESS',
    }
};

export const UiAction = {
    SHOW_TOAST_SUCCESS: 'SHOW_TOAST_SUCCESS',
    SHOW_TOAST_ERROR: 'SHOW_TOAST_ERROR',
    CLEAR_TOAST: 'CLEAR_TOAST',

    SHOW_DIALOG_SUCCESS: 'SHOW_DIALOG_SUCCESS',
    SHOW_DIALOG_ERROR: 'SHOW_DIALOG_ERROR',
    CLEAR_DIALOG: 'CLEAR_DIALOG'
};
