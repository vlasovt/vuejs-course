export const fruitMixin = {
    data(){
        return {
            fruits: ['Apple', 'Banana', 'Pineapple', 'Mango'],
            filterText: ''
        }
    },
    computed:{
        filteredFruits(){
            return this.fruits.filter((element)=> {
                return element.toLowerCase().match(this.filterText.toLowerCase());
            });
        }
    },
    created(){
        console.log('created');
    }
}