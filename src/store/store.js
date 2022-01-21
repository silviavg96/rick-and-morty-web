import Vue from 'vue';
import { toLocal } from './storages';

const store = {
    token: null,
    user: null,
};

const state = Vue.observable(store);

toLocal(state, {
    attrs: ['token']
});

const actions = {
    setToken(token) {
        state.token = token;
    },
    setUser(user) {
        state.user = user;
    },
    resetAuth() {
        state.token = null;
        state.user = null;
    }
};

export {
    state,
    actions
};