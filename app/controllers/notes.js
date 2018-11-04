import Controller from '@ember/controller';
import Ember from 'ember';
import EmberObject, { computed } from '@ember/object';
import $ from 'jquery';
const {
  get,
  inject: {service}
} = Ember;
export default Controller.extend({
  queryParams: ['parameter'],
 parameter: false,
 selectedStatus:"todo",
toggel(){
   this.toggleProperty('parameter');
 },store: service(),
//  status2:Ember.inject.service('work-status'),
//   actions: {
//     sendData(title1,description1,date1,status) {
//
// // let status1 = Ember.get(this,'status2');
// //status1.makepostrequest(title1,description1,date1,status);
// let rec = this.store.createRecord('note',{ title: title1,description: description1,date:date1,status:status});
// rec.save().then(()=> {this.toggleProperty('parameter');});
//
// //this is toggle the model and rendering again
// this.toggel();
// //This is to refresh the submit form so you can submit freshly
// //$("#container-id").html($("#container-id").html());
// document.getElementById("myForm1").reset();
// document.getElementById("myForm2").reset();
// document.getElementById("myForm3").reset();
// },
// updateNote(upstatus,note){
//
// this.store.findRecord('note',note.id).then(function(note){
//   note.set('status',upstatus);
//   note.save();
// })
//  this.toggel();
// },
// deleteNote(id){
//     this.store.findRecord('note',id).then(function(note){
//     note.destroyRecord();
//   });
//
// }
// }

});

// let status1 = Ember.get(this,'status2');
// status1.makedeleterequest(id);

// this.toggleProperty('parameter');
// const l="#card-id-"+id;
// console.log(l);
// $(l).hide();
