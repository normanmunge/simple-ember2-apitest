import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;


//https://www.youtube.com/watch?v=UuOhsf2R_b4&list=PLelL5s7nDFKVVPZNwfnuDG-Xe_28F1PSO&index=3&ab_channel=ScottBatson