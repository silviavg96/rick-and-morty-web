import Vue from 'vue';
import BaseLayout from './Layout';

const Layout = Vue.extend({
    ...BaseLayout,
    watch: {
        $route(to) {
            const name = to.meta.layout || to.matched[0].meta.layout || 'fullscreen';
            this.setLayout(name);
        }
    }
});

export {
    Layout
};
