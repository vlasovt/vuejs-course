<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 5, duration: 3000})">Async Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 5, duration: 3000})">Async Decrement</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
    export default {
        methods: {
            // asyncIncrement(by){
            //      this.$store.dispatch('asyncIncrement', by);
            // },
            // asyncDecrement(by){
            //      this.$store.dispatch('asyncDecrement', by);
            // },

            ...mapActions('counters',['asyncIncrement', 'asyncDecrement'])
        }
    }
</script>