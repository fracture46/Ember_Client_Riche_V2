import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    return new RSVP.hash({
      story: this.get('store').findRecord('story',params.story_id),
      //project: this.get('store').findRecord('project',params.story_id),
      developers: this.get('store').findAll('developer'),
      idDeveloper:[],
      idTags:[],
      tags: this.get('store').findAll('tag'),
      colors:['black','blue','green','orange','pink','purple','red','teal','yellow','positive','negative'],
      tag: EmberObject.create({})
    });
  },
  afterModel(model){
    let story=EmberObject.create(JSON.parse(JSON.stringify(model.story)));
    set(story,'tags',get(model,'story.tags'));
    set(model,'data',story);
  },
  actions:{
    didTransition() {
      Ember.run.next(this, 'initUI');
    },
    save(story,data){
      story.set('code',data.code);
      story.set('description',data.description);

      let model = this.modelFor(this.routeName);
      //let project=Ember.get(model,'project');
      //let idDeveloper = get(model, 'idDeveloper');
      //let dev = get(model, 'developers').find('_id', model.idDeveloper);
      let dev = this.get('store').peekRecord('developer', data.idDeveloper);
      story.set('developer',dev);

      //Ember.set(story,'step',data.step);
      //set(story,'project',data.project);
      set(story,'tags',get(data,'tags'));
      //set(story,'tasks',get(data,'tasks'));
      debugger;
      story.save().then(()=>{
        this.transitionTo("project",project);
      })
    },
    cancel(){
      let model = this.modelFor(this.routeName);
      let project=Ember.get(model,'project');
      this.transitionTo("project",project);
    },
    newTag(tag){
      tag=this.get('store').createRecord('tag',{title:tag.title,color:tag.color});
      let self=this;
      tag.save().then(()=>{
        let model = self.modelFor(this.routeName);
        Ember.$('#ddTags').dropdown('set selected',tag.id);
        Ember.set(model,'tag',EmberObject.create({}));
      });
    }
  },
  initUI() {
    Ember.$('.ui.dropdown').dropdown();
  }
});
