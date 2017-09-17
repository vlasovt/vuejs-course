<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username">  
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email">  
                </div>
                <button @click="submit" class="btn btn-primary">Submit</button>
                <hr>
                <input type="text" class="form-control" v-model="node">  
                <br><br>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(user, index) in users" :key="index">
                        {{user.username}} - {{user.email}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                user:{
                    username: '',
                    email: ''
                },
                users:[],
                resource: {},
                node:'data'
            };
        },
        methods:{
            submit(){
                // this.$http.post('', this.user)
                // .then(response => {
                //     alert('user posted!');
                // },error => {
                //     alert('user post failed!');
                // });

                // alertnative way
                //this.resource.save({}, this.user);

                //alternative way
                this.resource.saveAlt(this.user);
                
            },
            fetchData(){
                // this.$http.get('')
                // .then(response => {
                //     return response.json()
                //     .then(
                //         data => {
                //             this.users = data
                //         }
                //     );
                // },error => {
                //     alert('user get failed!');
                // });
                this.resource.getData({node: this.node})
                .then(response => {
                     return response.json()
                     .then(
                         data => {
                             this.users = data
                         }
                     );
                 },error => {
                     alert('user get failed!');
                 });
            }
        },
        created(){
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'}
            };
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style>
</style>
