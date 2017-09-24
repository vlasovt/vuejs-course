<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Mutation Increment</button>
        <button class="btn btn-primary" @click="decrement(100)">Mutation Decrement</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
    export default {
        methods: {
            // increment() {
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //    this.$store.commit('decrement');
            // }

            ...mapMutations('counters',['increment', 'decrement']),
            
        }
    }
</script>