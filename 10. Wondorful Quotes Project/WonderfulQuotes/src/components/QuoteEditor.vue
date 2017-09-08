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
                   v-on:click.native="removeQuote(quote)"></app-quote>
    </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
    
    props: ['quotes', 'maxQuotes'],
    data() {
        return {  
            quote:''
        }
    },
    methods:{
        addQuote(){

            if(!this.quote){
                return;
            }

            if(this.quotes.length < this.maxQuotes){
                this.quotes.push(this.quote);
            }else{
                alert('You have reached the limit of '+ this.maxQuotes +' quotes. Please remove some items from the list before adding more.')
            }
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
