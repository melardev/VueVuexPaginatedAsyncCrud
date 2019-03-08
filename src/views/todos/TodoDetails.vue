<template>
    <div v-if="todo.id" class="container">
        <div>
            {{todo.title}}
            <br/>
            Description:
            {{todo.description}}
        </div>
        <div>
        </div>

        <label>Completed
            <input type="checkbox" :checked="todo.completed" disabled/>
        </label>

        <hr/>

        <div class="btn-group btn-group-sm">
            <router-link to="/" type="button" class="btn btn-success">Back</router-link>
            &nbsp;
            <router-link class="btn btn-warning" :to="`/todos/${todo.id}/edit`">Edit</router-link>
            &nbsp;
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import {TodoAction} from "../../store/action.types";

    export default {
        name: "TodoDetails",
        data() {
            return {todo: {id: -1}}
        },
        mounted() {
            debugger
            this.todo.id = parseInt(this.$router.currentRoute.params.id);
            this.fetchById(this.todo.id).then(res => {
                if (res.success) {
                    this.todo = this.getTodoById()(this.todo.id);
                    console.log(this.todo);
                }
            });
        },
        methods: {
            ...mapActions({fetchById: TodoAction.remote.FETCH_BY_ID}),
            ...mapGetters(['getTodoById']),
            /*
            getTodoById() {
              return  this.$store.getters.getTodoById
            },
            */
        },
    }
</script>

<style scoped>

</style>
