<template>
    <div>
        <h3>Author</h3>
        <button @click="counter++">Increase!</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                counter: 0
            }
        },
        destroyed(){
            console.log('Author Destroyed!');
        },
         deactivated(){
            console.log('Author Deactivated!');
        },
         activated(){
            console.log('Author Activated!');
        }
    }
</script>
