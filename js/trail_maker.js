var trail_maker = false;
var newtrail = false;
var click = 0;
var trail2 = false;
var startX, startY;
var points = [];
var trail_canvas = document.getElementById('trail_canvas');
    var ctx = trail_canvas.getContext('2d');
    // var width  = $('#diagram').css("width");
    // var height = $('#diagram').css("height");
    // var offset = $('#diagram').offset();
    trail_canvas.style.position = "absolute";
    trail_canvas.height = 614;
    trail_canvas.width = 880;
    trail_canvas.style.left = "0px";

var lastX;
var lastY;
var mouseX;
var mouseY;
var offsetX = 20;
var offsetY = 56;
var isMouseDown = false;




    $("#trail_canvas").mousedown(function(e) {
      
      if(trail_maker){
        handleMouseDown(e);
        if(points.length > 0){
          $('#undo').show();
        }
        // this.down = true;  
        // this.X = e.clientX - offsetX;
        // this.Y = e.clientY - offsetY;
      }

      if(trail2){
        this.style.cursor = 'pointer';
        click++;
        if(click == 3)
          click = 1;
        if(click == 1){
          startX = e.clientX -offsetX;
          startY = e.clientY - offsetY;
          ctx.fillStyle="rgba(102, 102, 102, 0.3)";
          ctx.fillRect(startX,startY,15,15);
        }
        if(click == 2){
          ctx.clearRect(startX,startY,15,15);
          ctx.beginPath();
            ctx.moveTo(startX, startY);
            //ctx.lineCap = 'round';
             ctx.lineWidth = 30;
            ctx.lineTo(e.clientX - offsetX, e.clientY -offsetY );
            ctx.strokeStyle = "rgba(102, 102, 102, 0.3)";
            ctx.stroke();
        }
      }else
        this.style.cursor = '';
    });
    $("#trail_canvas").mouseup(function(e) {
      if(trail_maker){
        handleMouseUp(e);
      }
      console.log(click);     
    });
    $("#trail_canvas").mousemove(function(e) {
      if(trail_maker){
        this.style.cursor = 'pointer';
        handleMouseMove(e);
        // if(this.down) {
        //    // var img = document.createElement('img');
        //    // img.src = "./images/trail.png";
        //    // var pat=ctx.createPattern(img,"repeat");
        //     ctx.beginPath();
        //     ctx.moveTo(this.X, this.Y);
        //     //ctx.lineCap = 'round';
        //      ctx.lineWidth = 30;
        //     ctx.lineTo(e.clientX -offsetX, e.clientY -offsetY);
        //     ctx.strokeStyle = "rgba(102, 102, 102, 0.3)";
        //     ctx.stroke();
        //     console.log("done");
        //    this.X = e.clientX - offsetX;
        //    this.Y = e.clientY -offsetY;

        //}
      }else{
        this.style.cursor = "";
      }
    });

function handleMouseDown(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);

    // Put your mousedown stuff here
    
    points.push({
        x: mouseX,
        y: mouseY,
        mode: "begin"
    });
    lastX = mouseX;
    lastY = mouseY;
    isMouseDown = true;
}

function handleMouseUp(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);

    // Put your mouseup stuff here
    isMouseDown = false;
    points.push({
        x: mouseX,
        y: mouseY,
        mode: "end"
    });
}


function handleMouseMove(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);

    // Put your mousemove stuff here
    if (isMouseDown) {
      ctx.lineJoin = "bevel";
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);

        ctx.lineWidth = 30;
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = "rgba(102, 102, 102, 0.3)";
        ctx.stroke();
        lastX = mouseX;
        lastY = mouseY;
        // command pattern stuff
        points.push({
            x: mouseX,
            y: mouseY,
            mode: "draw"
        });
    }
}

function redrawAll() {

    if (points.length == 0) {
        return;
    }

    ctx.clearRect(0, 0, trail_canvas.width, trail_canvas.height);

    for (var i = 0; i < points.length; i++) {

        var pt = points[i];
        var x, y;
         if (pt.mode == "begin") {
            x = pt.x;
            y = pt.y;
        }
        if(pt.mode == "draw"){
          ctx.beginPath();
          ctx.lineJoin = "round";
          ctx.moveTo(x, y);
          ctx.lineWidth = 30;
          ctx.lineTo(pt.x, pt.y);
          ctx.strokeStyle = "rgba(102, 102, 102, 0.3)";
          ctx.stroke();
          x = pt.x;
          y = pt.y;
        }
            
        if (pt.mode == "end" || (i == points.length - 1)) {
            //ctx.stroke();
        }
    }
    //ctx.stroke();
}

function undoLast() {
    points.pop();
    redrawAll();
}

var interval;
$("#undo").mousedown(function () {
    interval = setInterval(undoLast, 80);
}).mouseup(function () {
    clearInterval(interval);
    if(points.length == 0){
      $('#undo').hide();
    }
});
    
   
$('#trail1').click(function(e){
  trail2 = false;
    trail_maker = !trail_maker;
    //$('#undo').toggle();
    $('#trail1').toggleClass("clicked");
    $('#trail2').removeClass("clicked");
    if(trail_maker){
      ctx.clearRect(0,0,880,614);
    }
  }  
  );

$('#trail2').click(function(e){
  trail2 = !trail2;
  $('#undo').css('display','none');
  trail_maker = false;
  $('#trail1').removeClass("clicked");
    $('#trail2').toggleClass("clicked");
    if(trail2){
      ctx.clearRect(0,0,880,614);
    }
  }  
  );