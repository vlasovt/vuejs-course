import User from './components/user/User.vue'
import Home from './components/Home.vue'
import UserStart from './components/user/UserStart.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserDetail from './components/user/UserDetail.vue'

export const routes = [
    {path:'', component: Home, name: 'home'},
    {path:'/user', component: User, children: [
        {path:'', component: UserStart},
        // if prop is an object :'props: { newsletterPopup: false }'
        // a function can be applied to to change the value inamically: 'props: (route) => ({ query: route.query.q }) '
        {path:':id', component: UserDetail, props: true,},
        {path:':id/edit', component: UserEdit, props: true, name: 'userEdit'}
    ] }
];