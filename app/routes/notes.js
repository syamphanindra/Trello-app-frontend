//The file is in app/routes/notes.js
import Route from '@ember/routing/route';
import Ember from 'ember'
const {
  RSVP:{hash}
} = Ember;
export default Route.extend({
  queryParams: {
  parameter: {
    refreshModel: true, // if your model doesn't change, set this to false
  }
},
  model()  {
     return hash({
      notes : this.store.findAll('note')

  }
  )

   },


});
