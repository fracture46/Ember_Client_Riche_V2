import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import {computed} from '@ember/object';

export default Route.extend({
  model() {
    return Note.create({
      MAX: 100,
      content: "entrez votre texte",
      info: ""
    });
  },
   actions:{
     save:function(){
       let model = this.modelFor(this.routeName);
       if(model.get('content') != '')
         model.set('info', `Note enregistrée <b>$(model.get('content'))</b>`); // les quotes AltGr+7 permettent de mettre
       if(model.get('content') == '')                                         //directement des variables avec $
         model.set('info', "");
     },
     clear:function(model){
       model.set('content', '');
       model.set('info', "");
     }
   }
});

const Note = EmberObject.extend({
  info: String,
  size: computed('content', function(){
    let content = this.get('content');
    let MAX = this.get('MAX');
    if(content != '')
      this.set('info', 'Note modifiée');
    return MAX-content.length;
  }),
  style: computed('size', function(){
    let size = this.get('size');
    let style='alert-info';
    if(size < 50)
      style = 'alert-warning';
    if(size < 20)
      style = 'alert-danger';
    return style;
  }),
  alertVisible: computed('info', function(){
    //computed properties : le premier élément et ce sur quoi est fait la màj et le second est la fonction)
    let info = this.get('info');
    if(info != "")
      return true;
    if(info == "")
      return false;
  })
});

