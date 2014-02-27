/*
 * Polling Place Application
 * Copyright (c) 2013 Shama Hoque, Linda Avendano, Dan Gillette, Ted Selker
 * Licensed under Open Software License v. 3.0 (OSL-3.0)
 * Date: Wed, Dec 4 2013 
 */

 /*Camera and Photo Tag*/

 var tagData={};
    var snapped = false;
    var img = document.querySelector('#screenshot');
    var capturedImg = $('#screenshot')[0].src;
    tagData["total"] = 0;
    var rating = 1;

 function errorCallback(e) {
          if (e.code == 1) {
            alert('User denied access to their camera');
          } else {
            alert('getUserMedia() not supported in your browser.');
          }
          //e.target.src = 'http://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.ogv';
        }

 

        
        var video = document.querySelector('#screenshot-stream');
        var button = document.querySelector('#screenshot-button');
        var stopButton = document.querySelector('#screenshot-stop-button');
        var canvas = document.querySelector('#screenshot-canvas');
        
        var ctx = $('#screenshot-canvas')[0].getContext('2d');
        var localMediaStream = null;

        function sizeCanvas() {
          // video.onloadedmetadata not firing in Chrome so we have to hack.
          // See crbug.com/110938.
          setTimeout(function() {
            $('#screenshot-canvas')[0].width = $('#screenshot-stream')[0].videoWidth;
            $('#screenshot-canvas')[0].height = $('#screenshot-stream')[0].videoHeight;
            $('#screenshot')[0].height = $('#screenshot-stream')[0].videoHeight;
            $('#screenshot')[0].width = $('#screenshot-stream')[0].videoWidth;
          }, 100);
        }

        function snapshot() {
          $('#screenshot-canvas')[0].getContext('2d').drawImage( $('#screenshot-stream')[0], 0, 0);
          capturedImg = $('#screenshot-canvas')[0].toDataURL('image/webp');
          $('#screenshot')[0].src = capturedImg;
          console.log("Snap: " + capturedImg);
          $('#screenshot-stream').css('display', "none");
          $('#screenshot').css('display', "block");
          $('#screenshot-stream')[0].pause();
          localMediaStream.stop();
          localMediaStream = null;
          $('#screenshot-stop-button').css('display', "none");
          $('#screenshot-button').toggleClass("camera-button shot-button");
          snapped = true;

        }

        $('#screenshot-button').click(function(e){
          //$('#screenshot-button').toggleClass("camera-button shot-button");
          $('#screenshot')[0].src="";
          if(localMediaStream && localMediaStream != null) {
            
            snapshot();
            return;
          }    

            $('#screenshot').css('display', "none");
            $('#screenshot-stream').css('display', "block");

          if (navigator.getUserMedia) {
            navigator.getUserMedia('video', function(stream) {
              $('#screenshot-stream')[0].src = stream;
              localMediaStream = stream;
              sizeCanvas();
              $('#screenshot-button').toggleClass("camera-button shot-button");
              //$('#screenshot-stop-button').css('display', "inline-block");
            }, errorCallback);
          } else if (navigator.webkitGetUserMedia) {
            navigator.webkitGetUserMedia({video: true}, function(stream) {
              $('#screenshot-stream')[0].src = window.URL.createObjectURL(stream);
              localMediaStream = stream;
              sizeCanvas();
              $('#screenshot-button').toggleClass("camera-button shot-button");
             // $('#screenshot-stop-button').css('display', "inline-block");
            }, errorCallback);
          } else {
            errorCallback({target: video});
          }
        });

        // $('#screenshot-stream')[0].addEventListener('click', snapshot, false);

        $('#screenshot-stop-button').click(function(e) {
          $('#screenshot-stream')[0].pause();
          if(localMediaStream!= null){
          localMediaStream.stop(); // Doesn't do anything in Chrome.
          localMediaStream = null;
        }
        });
        
        function saveTags($taggedItem){

           $('#screenshot-stream')[0].pause();
          if(localMediaStream!= null){
	          localMediaStream.stop(); // Doesn't do anything in Chrome.
	          localMediaStream = null;
          }
          var tagID = $taggedItem.attr('id');
          if(tagID){
            
          }else{
            tagData["total"]++;
            $taggedItem.attr('id', "taggedItem"+tagData["total"]);
            
            
          }
          console.log(tagData[$taggedItem.attr('id')]);
          if(!snapped){
            capturedImg = "";
            if(tagData[$taggedItem.attr('id')]){}
            else
            tagData[$taggedItem.attr('id')] = { "img":"", "notes":"","rating": 1};
          }

          tagData[$taggedItem.attr('id')]={"img":snapped ? capturedImg : tagData[$taggedItem.attr('id')].img, "notes":$("#note").val(), "rating":rating};
          console.log("saved: " + capturedImg);
          
          
          console.log(tagData);
          snapped = false;
        }

         $('.star').click(function(e){
		    rating = parseInt(e.target.id);
		    setRatingStars(rating);
		          
        });

         function setRatingStars(rate){
         	for(i=rate;i>0;i--){
		        $('#'+i).removeClass("star");
		        $('#'+i).addClass("goldstar");
		    }
		    for(i=rate+1;i<6;i++){
		        $('#'+i).removeClass("goldstar");
		        $('#'+i).addClass("star");
		    }

         }

         $('#saveTag').click(function(e){
         	saveTags($taggedItem);
         	$('.saved_status').show();
         	setTimeout(function(){$('.saved_status').hide();},2000);
         });

         $('#cancelTag').click(function(e){
         	$('#screenshot-stream')[0].pause();
          if(localMediaStream!= null){
	          localMediaStream.stop(); // Doesn't do anything in Chrome.
	          localMediaStream = null;
          }
         	$.modal.close();
         });