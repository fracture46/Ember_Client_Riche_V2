import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('developer');
  this.route('project');

  this.route('projects', function() {
    this.route('new');
  });

  this.route('developers', function() {
    this.route('new');
  });
});

export default Router;
