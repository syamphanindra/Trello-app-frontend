import Controller from '@ember/controller';
import Ember from 'ember';
import EmberObject, { computed } from '@ember/object';
import $ from 'jquery';
export default Controller.extend({
  queryParams: ['parameter'],
 parameter: false,
  status2:Ember.inject.service('work-status'),
  actions: {
    sendData(title1,description1,date1,status) {

let status1 = Ember.get(this,'status2');
status1.makepostrequest(title1,description1,date1,status);
//this is toggle the model and rendering again
this.toggleProperty('parameter');
//This is to refresh the submit form so you can submit freshly
//$("#container-id").html($("#container-id").html());
document.getElementById("myForm1").reset();
document.getElementById("myForm2").reset();
document.getElementById("myForm3").reset();
},
updateNote(upstatus,note){
let status1 = Ember.get(this,'status2');
status1.makeputrequest(upstatus, note.id);
this.toggleProperty('parameter');
note.set('status',upstatus)
},
deleteNote(id){
  let status1 = Ember.get(this,'status2');
  status1.makedeleterequest(id);
  this.toggleProperty('parameter');
  const l="#card-id-"+id;
  console.log(l);
  $(l).hide();
}
},
filteredModel1: computed('model.length', 'selectedStatus', function() {
  return this.get('model').filterBy('status', "todo");
  this.toggleProperty('parameter');

}),
filteredModel2: computed('model.length', 'selectedStatus', function() {
  return this.get('model').filterBy('status', "doing");
  this.toggleProperty('parameter');
}),

filteredModel3: computed('model.length', 'selectedStatus', function() {
  return this.get('model').filterBy('status', "done");
  this.toggleProperty('parameter');
}),


});
