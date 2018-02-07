import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import {computed} from '@ember/object';

const Service = EmberObject.extend({
  countActive: Ember.computed ('services.@each.active', function () {
    return this.get('services').filterBy('active', true).length;
  }),
  sumActives: Ember.computed ('services.@each.active',function () {
    let service = this.get('services').filterBy('active',true);
    let total = 0;
    service.forEach(service=>total = total+service.price);
      return total;
  }),
  txRemise: Ember.computed('promo', function(){
    //promo = ce qui a été saisi dans le champ texte (voir model.promo sur graphique)
    let promo=this.get('promo');
    let promos = this.get('promos');
    return promos[promo] || '';
  }),
  sumReduit: Ember.computed('services.@each.active', function(){
    let montantReduction = this.get('txRemise');
    let montantInitial = this.get('sumActives');
    let montantDeduit = montantInitial*montantReduction;
    return montantInitial-montantDeduit;
  })
});

// taper debugger pour faire des points d'arrêts dans le script
// /!\ la console doit être ouverte pour que les points d'arrêts se déclenchent

export default Route.extend({
  model(){
    return Service.create({services:
    [
      {
        "name": "Web Development",
        "price": 300,
        "active":true
      },{
      "name": "Design",
      "price": 400,
      "active":false
    },{
      "name": "Integration",
      "price": 250,
      "active":true
    },{
      "name": "Formation",
      "price": 220,
      "active":false
    }
  ],
      promos:
        {
          "B22":0.05,
          "AZ":0.01,
          "UBOAT":0.02
        }
    });
  },
  actions:{
    toggleActive:function(service){
        Ember.set(service, 'active', !service.active);
      //pas de set/get sur les objets JS, pour accéder aux set et get d'objets Ember, il faut passer par ce type de commande
    }
  }
});

