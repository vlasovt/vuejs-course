<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>    
        <p>Number of Clicks: {{ stringCounter }}</p>  
    </div>   
</template>

<script>
import {mapGetters} from 'vuex';
    export default {
        computed:{
            // counter(){
            //     return  this.$store.getters.doubleCounter;
            // },
            //  stringCounter(){
            //     return  this.$store.getters.stringCounter;
            // }

            //ES6 spread operator (need to add stage 2 presets for babel )
            ...mapGetters('counters',[
                'doubleCounter',
                'stringCounter'
            ])
        }
    }
</script>