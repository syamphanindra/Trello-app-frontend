import Component from '@ember/component';

export default Component.extend({

  actions: {
    sendData(title1,description1,date1) {
    $.when($.ajax ({
        type: 'POST',
        url:'http://localhost:3000/notes',
        data: {note:{title:title1,description:description1,date:date1}},

      })).then(function(result){
        console.log(result);
      });
}
}
});
