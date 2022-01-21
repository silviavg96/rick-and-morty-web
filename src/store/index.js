import { state, actions } from './store';
import { toCookie } from './storages';

toCookie(state, {
    attrs: ['token']
});

export {
    state,
    actions
};