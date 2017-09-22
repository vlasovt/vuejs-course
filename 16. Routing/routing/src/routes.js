import User from './components/user/User.vue'
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import UserStart from './components/user/UserStart.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserDetail from './components/user/UserDetail.vue'

export const routes = [
    {path:'', components: {
        default: Home,
        'header-top': Header
    }, name: 'home'},
    {path:'/user', components: {
        default: User,
        'header-bottom': Header
    }, children: [
        {path:'', component: UserStart},
        // if prop is an object :'props: { newsletterPopup: false }'
        // a function can be applied to to change the value inamically: 'props: (route) => ({ query: route.query.q }) '
        //beforeEnter: route guard on the route level
        {path:':id', component: UserDetail, props: true, beforeEnter: (to, from, next) =>{
            console.log('inside route setup');
            next();
        }},
        {path:':id/edit', component: UserEdit, props: true, name: 'userEdit'}
    ] },
    {path: '/redirect-me', redirect: '/user'},
    //catch-all route
    {path: '*', redirect: '/'}
]; 