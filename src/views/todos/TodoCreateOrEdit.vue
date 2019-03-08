<template>
    <div class="container" style="width: 300px;">
        <h3>{{todo.id ? 'Update' : 'Create'}} Todo</h3>
        <form v-on:submit.prevent>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" required name="title"
                       v-model="todo.title"/>
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <textarea type="text" class="form-control" id="description" required
                          v-model="todo.description"
                          name="description"></textarea>
            </div>

            <div class="form-group">
                <label for="completed">Completed</label>&nbsp;
                <input type="checkbox" id="completed" required v-model="todo.completed"
                       name="completed">
            </div>

            <div class="row">
                <button class="btn btn-success" @click="createOrUpdateTodo()" :disabled="isSubmitting">
                    {{todo.id ? 'Update' : 'Create'}}
                </button>
                &nbsp;
                <button v-if="todo.id" class="btn btn-danger" @click="destroyTodo()" :disabled="isSubmitting">
                    Delete
                </button>
                &nbsp;
                <router-link class="btn btn-warning" to="/" :disabled="isSubmitting">
                    Back Home
                </router-link>
            </div>
        </form>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import {TodoAction} from "../../store/action.types";

    export default {
        name: "TodoCreateOrEdit",
        data() {
            return {
                todo: {},
                isSubmitting: false,
                submitted: false,
            }
        },
        mounted() {
            const id = this.$router.currentRoute.params.id;
            if (id) {
                // Edit mode
                this.fetchById(id).then(result => {
                    if (result.success) {
                        this.todo = {...result.todo};
                    }
                }).catch(err => {
                    debugger
                });
            }
        },
        computed: {
            ...mapGetters(['getTodoById']),
        },
        methods: {
            ...mapActions({
                fetchById: TodoAction.remote.FETCH_BY_ID,
                updateTodo: TodoAction.remote.UPDATE_TODO,
                createTodo: TodoAction.remote.CREATE_TODO,
                deleteTodo: TodoAction.remote.DELETE_TODO
            }),
            createOrUpdateTodo() {
                const id = this.$router.currentRoute.params.id;
                this.isSubmitting = true;
                if (id) {
                    // edit mode
                    this.updateTodo({...this.todo, id}).then(res => {
                        this.isSubmitting = false;
                        if (res.success)
                            this.$router.push('/');
                    }).catch(err => {
                        this.isSubmitting = false;
                    });
                } else {
                    this.createTodo(this.todo).then(res => {
                        this.isSubmitting = false;
                        if (res.success)
                            this.$router.push('/');
                    }).catch(err => {
                        this.isSubmitting = false;
                    });
                }
            },
            destroyTodo() {
                const id = this.$router.currentRoute.params.id;
                this.isSubmitting = true;
                if (id) {
                    this.deleteTodo(this.todo).then(res => {
                        if (res.success) {
                            this.$router.push('/');
                        }
                        this.isSubmitting = false;
                    }).catch(err => {
                        this.isSubmitting = false;
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
