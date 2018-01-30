import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import {computed} from '@ember/object';

export default Route.extend({
  model(){
    return Service.create();
  },
  actions:{
    toogleActive:function(service){

    }
  }
});

const Service = EmberObject.extend({
  services: arrayOf,
  init:function (services) {
    services = [];
  }
  countActive:function () {
    let services = this.get('services');
    return services.@each.active;
  }
  sumActives:function () {
    let servies = this.get('services');

  }
});
