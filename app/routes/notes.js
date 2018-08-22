//The file is in app/routes/notes.js
import Route from '@ember/routing/route';
import Ember from 'ember'
export default Route.extend({
  queryParams: {
  parameter: {
    refreshModel: true, // if your model doesn't change, set this to false
  }
},
  model()  {
     return this.store.findAll('note');

   },
   aftermodel(){
     return this.store.findAll('note')
   }

});
