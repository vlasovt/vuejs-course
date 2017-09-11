<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input type="text" v-model="filterText">
        <ul>
            <!-- here computed function is better than  filter -->
            <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
    import {fruitMixin} from './fruitMixin';
    export default {
        mixins: [fruitMixin],
        created(){
            console.log('created List');
        }
    }
</script>

<style>

</style>