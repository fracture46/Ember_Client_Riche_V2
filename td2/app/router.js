import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ex2', function() {
    this.route('choix');
    this.route('bilan');
  });
});

export default Router;
