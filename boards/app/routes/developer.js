import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findAll('developer');
  },
  actions:{
   modifier(dev){
     this.get('store').find('dev');
     //lien vers le formulaire
   },
   supprimer(dev){

   }
  }
});
