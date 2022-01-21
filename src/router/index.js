import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes(authGuard)
});

export default router;

function beforeEnter (routes, callback) {
    return routes.map(route => {
        return { ...route, beforeEnter: callback };
    });
}

function authGuard (routes) {
    return beforeEnter(routes, (to, from, next) => {
        next();
    });
}


















