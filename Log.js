// Registering component in log-component.js
AFRAME.registerComponent('log', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'}
    },
    //run once
    init: function () {
        console.log(this.data.message);
  },
  //run in a loop
  tick: function () {
      console.log("hello")
    }
  });


