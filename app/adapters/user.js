import DS from 'ember-data';
import Typicode from './typicode';

export default Typicode.extend({
    pathForType() {
        /** One of the methods on Ember Adapter to specify certain types */
        return 'users'
    }
});
