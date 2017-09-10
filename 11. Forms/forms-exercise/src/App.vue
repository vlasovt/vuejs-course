<template>
    <div class="container">
        <form>
            <div class="row" v-if="!isFormSubmitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <form>
                        <div class="row">
                            <h1>Signup</h1>
                            <hr>
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <app-full-name v-model="user.fullName"></app-full-name>
                                <div class="form-group">
                                    <label for="email">Mail</label>
                                    <input type="email" 
                                            id="email" 
                                            class="form-control" 
                                            v-model.trim="user.email">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" 
                                            id="password" 
                                            class="form-control" 
                                            v-model="user.password">
                                </div>
                            </div>
                        </div>
                         <div class="row">
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                                <label>Store In Database?</label>
                                <label class="radioLabel" for="yes">
                                    <input
                                            type="radio"
                                            id="yes"
                                            value="Yes"
                                            v-model="user.storeInDatabase"> Yes
                                </label>
                                <label class="radioLabel" for="no">
                                    <input
                                            type="radio"
                                            id="no"
                                            value="No"
                                            v-model="user.storeInDatabase"> No
                                </label>
                            </div>
                        </div>
                         <div class="row">
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <button
                                        class="btn btn-primary"
                                        @click.prevent="submitted">Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isFormSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{user.fullName}}</p>
                        <p>Mail: {{user.email}}</p>
                        <p>Password: {{user.password}}</p>
                        <p>Store in Database?: {{user.storeInDatabase}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './FullName.vue'

export default {
    data(){
        return{
            user: {
                fullName: 'Sam Richardson',
                email: '',
                password: '',
                storeInDatabase: 'Yes'
            },

            isFormSubmitted: false
        }
    },
    methods:{
            submitted(){
                this.isFormSubmitted = true;
            }
        },

    components:{
        'app-full-name': FullName
    }
}
</script>

<style>
    .radioLabel{
        margin-left: 10px;
    }

</style>
