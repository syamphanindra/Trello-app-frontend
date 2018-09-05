import Service from '@ember/service';

export default Service.extend({
  status:"done",
  setProperty(state)
  {

  this.set('status',state);
},
  getProperty()
  {
    return this.get('status');
  },
  // makepostrequest(title1,description1,date1,status2)
  // {
  //     console.log("enter")
  //       $.when($.ajax ({
  //     //  get(this,'layout.referrer.owner.router').transitionTo('notes');
  //           type: 'POST',
  //           url:'http://localhost:3000/notes',
  //           data: {note:{title:title1,description:description1,date:date1,status:status2}},
  //
  //         })).then(function(result){
  //           console.log(result);
  //         }).catch(function(err){
  //           console.log(err);
  //         });
  //
  // },
  // makeputrequest(status1,id1)
  // {
  //   $.when($.ajax ({
  // //  get(this,'layout.referrer.owner.router').transitionTo('notes');
  //       type: 'PUT',
  //       url:'http://localhost:3000/notes/'+id1,
  //       data: {note:{status:status1}},
  //
  //     })).then(function(result){
  //       console.log(result);
  //     }).catch(function(err){
  //       console.log("you have error")
  //     });
  // },
  // makedeleterequest(id){
  //   $.when($.ajax ({
  // //  get(this,'layout.referrer.owner.router').transitionTo('notes');
  //       type: 'DELETE',
  //       url:'http://localhost:3000/notes/'+id,
  //     })).then(function(result){
  //       console.log("you have deleted");
  //     }).catch(function(err){
  //       console.log("you have error")
  //     });
  // }


});
