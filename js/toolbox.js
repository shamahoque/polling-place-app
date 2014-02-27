/*
 * Polling Place Application
 * Copyright (c) 2013 Shama Hoque, Linda Avendano, Dan Gillette, Ted Selker
 * Licensed under Open Software License v. 3.0 (OSL-3.0)
 * Date: Wed, Dec 4 2013 
 */

var imagesArray = new Array("entrance.jpg",
    "exit.jpg",
    "helpH.png",
    "registrationH.png",
    "votingMachine.png",
    "AccessibleVotingMachine.png",
    "BallotH.png",
    "ObserversH.png",
    "BallotBox.png",
    "DRE.png",
    "wait.png",
    "walkRight.png",
    "walkLeft.png",
    "walkUp.png",
    "walkDown.png",
    "trash.jpg");
var imagesArrayToolTip = new Array("Entrance",
    "Exit",
    "Help Station",
    "Registration Station",
    "Voting Booth",
    "Accessible Voting Booth",
    "Ballot Station",
    "Observers",
    "Ballot Box",
    "DRE",
    "Waiting Area",
    "Right",
    "Left",
    "Up",
    "Down",
    "Refuse");

var imgNumber = 0;

function createToolbox() {
    var imgNum = 0;
    var num_rows = 6;
    var num_cols = 2;
    var title = "<h3>Toolbox</h3>"
    var instructions = "<h4> Drag and drop the furniture in the outline. Click each image to see helpful checklists.</h4> <div class='toolboxTable'>";
    var tbody = '';
    var theader = '<table border="0">\n';
    var imgBase = qualifyURL("./images/toolbox/");
    for (var i = 0; i < num_rows; i++) {
        tbody += '<tr>';
        for (var j = 0; j < num_cols; j++) {
            tbody += '<td class="toolboxCell">';
            tbody += '<div class="toolboxImage"><img class="itemImage" title="'+imagesArrayToolTip[imgNum]+'" src="' + imgBase + imagesArray[imgNum] + '" id="img_' + (imgNum) +
            '"/></div>';
            tbody += '</td>'
            imgNum++;
        }
        tbody += '</tr>\n';
    }
    var tfooter = '</table></div></div>';
    document.getElementById('toolbox').innerHTML = title + instructions + theader + tbody + tfooter;
}