import DS from 'ember-data';
import posts from '../routes/posts';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        //expects the information to contain posts ie a hash with the posts
        payload = { posts: payload }; /** This is hasing ie converting one value to another */
        // payload.posts.forEach((post) => {
        //     post.user = post.userId;
        //     delete post.userId;
        // });
        return this._super(store, primaryModelClass, payload, id, requestType);
    },

    normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
        payload.posts.user = payload.posts.userId;
        delete payload.posts.userId;

        return this._super(store, primaryModelClass, payload, id, requestType)
    },

    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        //if you want to rename some of the keys from the api to match what you have in your model
        payload.posts.forEach((post) => {
            post.user = post.userId;
            delete post.userId;
        });

        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
