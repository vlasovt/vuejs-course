<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | toUppercase}}</p>
                <p>{{text | to-lowercase}}</p>
                <hr>
                <!-- only the copy of the mixin created for this template is changed-->
                <button @click="fruits.push('Berries')">Add New Item</button>
                <input type="text" v-model="filterText">
                <ul>
                    <!-- here computed function is better than  filter -->
                    <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
   import List from './List.vue';
   import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [fruitMixin],
         data(){
            return {
                text: 'Hello there!'
            }
        },
        filters:{
            toUppercase(value){
                return value.toUpperCase()
            }
        },
        components:{
            'app-list': List
        },
        created(){
            console.log('created App');
        }
    }
</script>

<style>

</style>
