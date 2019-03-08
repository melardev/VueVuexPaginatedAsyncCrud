<template>
    <div v-if="getToast.message !== ''" :class="getToast.class_name">
        {{getToast.message}}
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex';
    import {UiAction} from "../../store/action.types";

    export default {
        name: "Notifications",
        methods: {
            ...mapMutations({clearToast: UiAction.CLEAR_TOAST, clearDialog: UiAction.CLEAR_DIALOG}),
        },
        computed: {
            ...mapGetters(['getToast', 'getToastMessage']),
            /*getToast() {
                // return this.$store.getters.getToast;
                return this.$store.state.toast;
            }
            */
            dialog() {
                // return this.$store.state.dialog;
                // or
                return this.$store.getters.getDialog;
            }
        },
        watch: {
            // WARNING: if you plan using this keyword, the functions should not be implemented with () =>{} but as below:
            dialog: function () {
                if (this.$store.state.dialog.message !== "") {
                    this.$toasted.show(this.$store.getters.getDialogMessage, {
                        duration: 5000,
                        className: this.$store.state.dialog.class_name
                    });
                    setTimeout(this.clearDialog, 3000);
                }
            },

            getToast: function () {
                if (this.getToastMessage !== "") {
                    setTimeout(() => this.$store.commit(UiAction.CLEAR_TOAST), 3000);
                }

            }
        }
    }
</script>

<style scoped>

</style>
