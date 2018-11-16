window.onload = function() {
    var optionsLeft = {
        zone: document.getElementById("left_controller")
    }
    
    var optionsRight = {
        zone: document.getElementById("right_controller")
    }
    
    var managerRight = nipplejs.create(optionsLeft);
    var managerLeft = nipplejs.create(optionsRight);


    managerRight.on('start end', function(evt, data) {
      }).on('move', function(evt, data) {
        console.log(data.angle.radian, data.distance);
      });

      managerLeft.on('start end', function(evt, data) {
      }).on('move', function(evt, data) {
        console.log(data.angle.radian, data.distance);
      });
}


