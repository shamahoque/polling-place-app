var trail_maker = false;
var newtrail = false;
var click = 0;
var trail2 = false;
var startX, startY;
var trail_canvas = document.getElementById('trail_canvas');
    var ctx = trail_canvas.getContext('2d');
    // var width  = $('#diagram').css("width");
    // var height = $('#diagram').css("height");
    // var offset = $('#diagram').offset();
    trail_canvas.style.position = "absolute";
    trail_canvas.height = 614;
    trail_canvas.width = 880;
    trail_canvas.style.left = "0px";
    trail_canvas.addEventListener('mousedown', function(e) {
      
      if(trail_maker){
        this.down = true;  
        this.X = e.clientX - 20;
        this.Y = e.clientY - 56;
      }

      if(trail2){
        this.style.cursor = 'pointer';
        click++;
        if(click == 3)
          click = 1;
        if(click == 1){
          startX = e.clientX -20;
          startY = e.clientY - 56;
          ctx.fillStyle="rgba(102, 102, 102, 0.3)";
          ctx.fillRect(startX,startY,15,15);
        }
        if(click == 2){
          ctx.clearRect(startX,startY,15,15);
          ctx.beginPath();
            ctx.moveTo(startX, startY);
            //ctx.lineCap = 'round';
             ctx.lineWidth = 20;
            ctx.lineTo(e.clientX - 20, e.clientY -56 );
            ctx.strokeStyle = "rgba(102, 102, 102, 0.3)";
            ctx.stroke();
        }
      }else
        this.style.cursor = '';
    }, 0);
    trail_canvas.addEventListener('mouseup', function() {
      if(trail_maker){
        this.down = false; 
      }
      console.log(click);     
    }, 0);
    trail_canvas.addEventListener('mousemove', function(e) {
      if(trail_maker){
        this.style.cursor = 'pointer';
        if(this.down) {
           // var img = document.createElement('img');
           // img.src = "./images/trail.png";
           // var pat=ctx.createPattern(img,"repeat");
            ctx.beginPath();
            ctx.moveTo(this.X, this.Y);
            //ctx.lineCap = 'round';
             ctx.lineWidth = 20;
            ctx.lineTo(e.clientX -20, e.clientY -56);
            ctx.strokeStyle = "rgba(102, 102, 102, 0.3)";
            ctx.stroke();
            console.log("done");
           this.X = e.clientX - 20;
           this.Y = e.clientY -56;

        }
      }else{
        this.style.cursor = "";
      }
    }, 0);


    
   
$('#trail1').click(function(e){
  trail2 = false;
    trail_maker = !trail_maker;
    $('#trail1').toggleClass("clicked");
    $('#trail2').removeClass("clicked");
    if(trail_maker){
      ctx.clearRect(0,0,880,614);
    }
  }  
  );

$('#trail2').click(function(e){
  trail2 = !trail2;
  trail_maker = false;
  $('#trail1').removeClass("clicked");
    $('#trail2').toggleClass("clicked");
    if(trail2){
      ctx.clearRect(0,0,880,614);
    }
  }  
  );