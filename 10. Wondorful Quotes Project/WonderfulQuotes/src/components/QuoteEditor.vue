<template>
    <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea class="form-control" v-model="quote" rows="5" id="comment"></textarea>
        <div class="addButton">
            <button class="btn btn-primary" @click="addQuote">Add Quote</button>
        </div>
        <app-quote v-for="quote in quotes" 
                   :key="quote" 
                   :quote="quote" 
                   @click="removeQuote(quote)"></app-quote>
    </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
    
    props: ['quotes'],
    data() {
        return {  
            quote:''
        }
    },
    methods:{
        addQuote(){
            this.quotes.push(this.quote);
        },
        removeQuote(quote){
            this.quotes.splice(this.quotes.indexOf(quote), 1);
        }
    },
    components:{
        'app-quote': Quote
    }
}
</script>

<style>
    .addButton{
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
    }
</style>
