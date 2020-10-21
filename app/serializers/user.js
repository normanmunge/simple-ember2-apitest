import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        //expects the information to contain posts ie a hash with the posts
        payload = { users: payload };
       return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
