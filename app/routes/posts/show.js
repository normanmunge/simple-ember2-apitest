import Ember from 'ember';

const {Route, set} = Ember;

export default Route.extend({
    //if the route specified on router.js has paths etc then we can access params
    model(params) {
        return this.store.findRecord('post', params.id)
    },

    setupController(controller, model) {
        set(controller, 'post', model);
    }
});
