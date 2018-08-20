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
  makepostrequest(title1,description1,date1,status2)
  {
      console.log("enter")
        $.when($.ajax ({
      //  get(this,'layout.referrer.owner.router').transitionTo('notes');
            type: 'POST',
            url:'http://localhost:3000/notes',
            data: {note:{title:title1,description:description1,date:date1,status:status2}},

          })).then(function(result){
            console.log(this);

            console.log(result);
          }).catch(function(err){
            console.log(err);
          });
          
  }


});
