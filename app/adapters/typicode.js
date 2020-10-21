import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://jsonplaceholder.typicode.com',
    //namespace: 'api/v1/test',
});
