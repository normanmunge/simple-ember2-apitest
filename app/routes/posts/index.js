import Ember from 'ember';

const {Route, set} = Ember;

export default Route.extend({
    model() {
        return this.store.findAll('post');
    },

    setupController(controller, model) {
        set(controller, 'posts', model);
    }
});
