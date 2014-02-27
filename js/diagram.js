/*
 * Polling Place Application
 * Copyright (c) 2013 Shama Hoque, Linda Avendano, Dan Gillette, Ted Selker
 * Licensed under Open Software License v. 3.0 (OSL-3.0)
 * Date: Wed, Dec 4 2013 
 */
var layoutNumber;


function createEditableLayout(index) {
    document.getElementById('diagram').style.backgroundImage="url(./images/Rec"+index+".PNG)";
}


function reset() {
    $('#edit .drop').remove();
    createEditableLayout(layoutNumber);
}


function escapeHTML(s) {
    return s.split('&').join('&amp;').split('<').join('&lt;').split('"').join('&quot;');
}

function qualifyURL(url) {
    var el = document.createElement('div');
    el.innerHTML = '<a href="' + escapeHTML(url) + '">x</a>';
    return el.firstChild.href;
}

function saveCopy() {
    var styleSheetLink = qualifyURL("../styles/diagram_layout.css");
    var savedPage = "<html><head>";
    savedPage += '<title>Layout</title>';
    savedPage += '<link rel="stylesheet" href="' + styleSheetLink + '"  type="text/css">';
    savedPage += '</head><body>';
    var diagramName='edit';
    savedPage += document.getElementById(diagramName).outerHTML;
    savedPage += '</body></html>';

    var blob = new Blob([savedPage], {type: "text/html"});
    saveAs(blob, 'diagram.html');
}

function makeLayoutPage(layout_number){
    layoutNumber = layout_number;
    document.getElementById("homepage").style.display = "none"; 
    document.getElementById("topbar").style.display = "none"; 
    document.getElementById("layout_edit").style.display = "block";
    createEditableLayout(layout_number);
    createToolbox();
    //createTabNav();
    createTabContent();
    $( init );
    $( "#tabNav" ).tabs();

}

//New code - jquery and JS to implement the new functionality
// TO-DO: Refactor
var ele;
var $taggedItem;

function init() {
    var visible = true;
  ele = $('.toolboxImage');
  $('.toolboxImage').draggable({
    helper: "clone"
  });



  $('#diagram').droppable({
    drop: function (event, ui) {
      if ($(ui.helper).hasClass('drop')){
        clickDroppedItem();
        return true;
      }else{
        $newItem = $(ui.helper).clone();
      $(this).after($newItem.draggable({containment: '#zoom-parent', drag: removeStyle, stop: addStyle}).rotatable().addClass('drop'));
      clickDroppedItem();
        
      // Create handle dynamically
      $newItem.append($('<div class="delete"></div>'));
      $newItem.append($('<div class="clone"></div>'));
      $newItem.append($('<div class="tag"></div>'));

      $('.drop').on('mousedown touchstart click', function( e ) {
            e.stopImmediatePropagation();
      });
      
      clickDelete();
      clickClone();
      clickTag();
  }

    }
  });

  ele.css('position', 'relative');
//checklists

  $('#checklistMenu').click(function(event){

    $('#checklistMenu').hide();
    $('#workspaceMenu').show();
    if ( visible ) {
        $('#edit_body').slideUp('slow','swing', function(){
            $('#edit_body').addClass('hide')
            .slideDown(0);
        });
        $('#checklist_view').slideUp(0,function(){
            $('#checklist_view').removeClass('hide')
            .slideDown('slow', 'swing');
        });
    } else {
        $('#edit_body').slideUp(0,function(){
            $('#edit_body').removeClass('hide')
            .slideDown('slow', 'swing');
        });
        $('#checklist_view').slideUp('slow', 'swing', function(){
            $('#checklist_view').addClass('hide')
            .slideDown(0);
        });
    }
    visible = ! visible;
  });

  $('#workspaceMenu').click(function(event){

    $('#workspaceMenu').hide();
    $('#checklistMenu').show();
    
    if ( visible ) {
        $('#edit_body').slideUp('slow', 'swing', function(){
            $('#edit_body').addClass('hide')
            .slideDown(0);
        });
        $('#checklist_view').slideUp(0,function(){
            $('#checklist_view').removeClass('hide')
            .slideDown('slow', 'swing');
        });
    } else {
        $('#edit_body').slideUp(0,function(){
            $('#edit_body').removeClass('hide')
            .slideDown('slow', 'swing');
        });
        $('#checklist_view').slideUp('slow', 'swing', function(){
            $('#checklist_view').addClass('hide')
            .slideDown(0);
        });
    }
    visible = ! visible;
  });

  

}

function clickClone(){
  $('.clone').click(function(event){
    
    
    if (event.target.className == "clone"){
        event.stopImmediatePropagation();
      var clonedElement = $(event.target).parent().clone().draggable({containment: '#zoom-parent', drag: removeStyle, stop: addStyle});
      clonedElement.children('.ui-rotatable-handle').remove();
      clonedElement.rotatable();
      console.log(event.clientX);
      clonedElement.css({
        'left': event.clientX + 30,
        'top': event.clientY
      });
      clonedElement.appendTo($('#zoom'));
      clickDroppedItem();
      clickDelete();
      clickClone();
      clickTag();
    }

  });
}
function clickDelete(){
  $('.delete').click(function(event){
    
    
    if (event.target.className == "delete"){
        event.stopImmediatePropagation();
      $(event.target).parent().remove();
    }

  });
}

function clickTag(){
  $('.tag').click(function(event){
   
    
    if (event.target.className == "tag"){
        event.stopImmediatePropagation();
        $('#screenshot')[0].src = "";
        $taggedItem = $(event.target).parent();
        if($taggedItem.attr('id')){
            $('#screenshot')[0].src = tagData[$taggedItem.attr('id')].img;
            $('#note').val(tagData[$taggedItem.attr('id')].notes);
            rating = tagData[$taggedItem.attr('id')].rating;
            setRatingStars(rating);
            $('#screenshot-stream').css("display", "none");
            $('#screenshot').css("display", "block");
        }else{
            rating=1;
            setRatingStars(rating);
            $('#screenshot')[0].src="";
            $("#note").val("");
        }
      //tag code
      $("#default-tag-inputbox").modal({
        containerCss: {
            width: 650,
            height: 400
        },
        closeClass: 'none',
        onShow: function() {
            $('.none').remove();
        },
        onClose: function() {
           //saveTags($taggedItem);
           $.modal.close(); 
        }
      });
    }

  });
}
function clickDroppedItem (){
  $('.drop').click(function(event){
    
    if (event.target.className != "delete" && event.target.className != "clone" && event.target.className != "tag"){
      showChecklist(event);
      event.preventDefault();

    $("#clon_div_"+event.target.id.match(/img_\d+/)[0]).modal();
  }
  });

}

function removeStyle(event, ui){
  $(event.target).removeClass("toolboxImage");
  //event.stopImmediatePropagation();
  ($('#zoom')).panzoom("option", "disablePan", true);
}

function addStyle(event, ui){
  $(event.target).addClass("toolboxImage");
  ($('#zoom')).panzoom("option", "disablePan", false);
}

function applyRotation() {
  $('.handler').draggable({
    opacity: 0.01,
    helper: 'clone',
    drag: function (event, ui) {
      var rotateCSS = 'rotate(' + ui.position.left + 'deg)';
      $(this).parent().css({
        '-moz-transform': rotateCSS,
        '-webkit-transform': rotateCSS
      });
    }
  });
}
