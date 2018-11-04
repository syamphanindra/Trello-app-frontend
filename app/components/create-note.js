import Component from '@ember/component';
import Ember from 'ember';
const {
  get,
  inject: {service}
} = Ember;
export default Component.extend({
  initialize(){
// console.log(  get(this,'router'));
},
  selectedOption: "todo",
store: service(),
status2:Ember.inject.service('work-status'),
  actions: {
    setSelection: function(selected) {
    this.set('selectedOption', selected)
    console.log(this.get('selectedOption'))
  },
    sendData(title1,description1,date1,status3) {
//       function accept(res)
// {
// get(this,'layout.referrer.owner.router').transitionTo('notes');
// }
// function failure(err)
// {
//
// }
let status1 = Ember.get(this,'status2');
status1.setProperty('done');
console.log()
    //  debugger;
  //   $.when($.ajax ({
  // //  get(this,'layout.referrer.owner.router').transitionTo('notes');
  //       type: 'POST',
  //       url:'http://localhost:3000/notes',
  //       data: {note:{title:title1,description:description1,date:date1,status:"done"}},
  //
  //     })).then(function(result){
  //       console.log(this);
  //
  //       console.log(result);
  //     }).catch(function(err){
  //       console.log(err);
  //     });
    //this.layout.referrer.owner.router


//     var request = $.post("/notes", {note:{title:title1,description:description1,date:date1,status:status3}})
//    request.then(accept.bind(this), failure.bind(this));
// console.log(this.layout.referrer.owner.router,"out")
//

      let rec = this.store.createRecord('note',{ title: title1,description: description1,date:date1,status:this.get('selectedOption')});
      rec.save().then(()=> {get(this,'layout.referrer.owner.router').transitionTo('notes');
    })



/* var res=this.store.createRecord(modelname,{
  name: this.get(uname)
}),
res.save();*/
}
}
});

/*

import Controller from '@ember/controller';
import { bind } from '@ember/runloop';


export default Controller.extend({

actions:{
    createThing: function(){

      let rec = this.store.createRecord('user',{ firstname: this.get('firstname'), lastname: this.get('lastname'), email: this.get('email'), password: this.get('password'), password_confirmation: this.get('password_confirmation'), types: this.get('types')})

      rec.save().then(()=> {
      this.transitionToRoute("login")
      },()=>{
      alert("enter valid credentials")
      });


    },
    setSelection: function(selected) {
     this.set('types', selected)
   },
  }
});
*/
