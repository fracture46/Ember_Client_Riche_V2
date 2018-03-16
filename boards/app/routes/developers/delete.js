import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  actions:{
    delete(dev){
        dev.destroyRecord().then(()=> {
          this.transitionTo("developer");
        })
    }
  }
});
