import Component from '@ember/component';
import Ember from 'ember';

const {
  get,
  inject: {service}
} = Ember;
export default Component.extend({
    queryParams: ['parameter'],

    parameter: false,
    toggel(){
       this.toggleProperty('parameter');
     },
  store: service(),
  actions:{
    updateNote(upstatus,note){

    this.store.findRecord('note',note.id).then(function(note){
      note.set('status',upstatus);
      note.save();

    })
this.refresh();
    },
  deleteNote(id){
      this.store.findRecord('note',id).then(function(note){
      note.destroyRecord();

    });
    const l="#card-id-"+id;
    console.log(l);
    $(l).hide();
  },
  sendData(title1,description1,date1,status,refre) {

// let status1 = Ember.get(this,'status2');
//status1.makepostrequest(title1,description1,date1,status);
let rec = this.store.createRecord('note',{ title: title1,description: description1,date:date1,status:status});
rec.save().then(()=> {this.toggleProperty('parameter');});

//this is toggle the model and rendering again
this.toggel();
//This is to refresh the submit form so you can submit freshly
//$("#container-id").html($("#container-id").html());
document.getElementById("myForm"+status).reset();


}
},

});
