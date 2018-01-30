import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('test', function() {
    this.route('new');
  });
  this.route('ex1');
  this.route('ex2');
});

export default Router;
