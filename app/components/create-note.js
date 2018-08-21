import Component from '@ember/component';
import Ember from 'ember';
const {get} = Ember;
export default Component.extend({
  initialize(){
// console.log(  get(this,'router'));
},
status2:Ember.inject.service('work-status'),
  actions: {
    sendData(title1,description1,date1,status3) {
      function accept(res)
{
get(this,'layout.referrer.owner.router').transitionTo('notes');
}
function failure(err)
{

}
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

    var request = $.post("/notes", {note:{title:title1,description:description1,date:date1,status:status3}})
   request.then(accept.bind(this), failure.bind(this));
console.log(this.layout.referrer.owner.router,"out")


}
}
});
