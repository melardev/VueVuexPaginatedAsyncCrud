import {AxiosService} from "./base/axios.service";

export const TodoAxiosService = {
    fetchAll(query = {page: 1, page_size: 5}) {

        if (query.completed)
            return AxiosService.fetchPage('todos/pending', query);
        else if (query.completed === false)
            return AxiosService.fetchPage('todos/completed', query);
        else
            return AxiosService.fetchPage('todos', query);
    },
    fetchById(id) {
        return AxiosService.get(`/todos/${id}`);
    },
    create(todo) {
        return AxiosService.post('/todos', todo);
    },
    update(todo) {
        return AxiosService.put(`/todos/${todo.id}`, todo);
    },
    delete(todo) {
        return AxiosService.delete(`/todos/${todo.id}`);
    }
};
