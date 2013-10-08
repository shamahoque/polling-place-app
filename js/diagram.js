var imgNumber = 0;
var layoutNumber;
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
    "Refuse")
var checklist = new Array(16);
//  "entrance"
checklist[0] = new Array("Outside lighting and reserved handicapped parking are required.",
    "American Flag is required inside the polling room and outside on pole (if available)",
    "Automatic doors should stay open at least 3 seconds");
// "exit"
checklist[1] = new Array("Signs designating the polling place must be placed on the exterior doors",
    "Hang the “Vote Here” and “Have Identification Ready” posters outside",
    "Check entrances, ramps and pathways for barriers");
//"help station"
checklist[2] = new Array("Post sample ballots, amendment posters, voter ID sign and other information",
"Space permitting, place bond issue flyers (English and Spanish) on table for voters",
"Encourage voters to read sample ballots and info while they are waiting in line");
// "registration station"
checklist[3] = new Array("Bring your own stapler, flashlight and calculator",
    "Place 'present ID' sign on tables for voters",
   "Place Voter Identification handout on tables for Pollbook officers to reference",
    "Place Voting Permit cards next to each Pollbook/EPB",
        "Ask each voter for Full Legal Name and check identification",
    "Keep the magnifying glass out on the Check-In table, so voters know that it is available");
//   "Voting Booth"
checklist[4] = new Array("Arrange booths for privacy; voters should not have lines/people passing behind them",
"Check that overhead lights do not create glare on the screen",
"Tape cords to floor and/or to booth legs for safety");
//   "Accessible voting booth"
checklist[5] = new Array("Place the magnifying glass, magnifying sheet, clip boards and voter assistance forms on pollbook table or ballot table so they are readily available",
"Provide chairs for seniors and voters who may have difficulty standing in line",
"Provide an accessible table with privacy screen for paper ballot voters",
"Place a touch screen machine with a headset (in its booth) on a table for audio ballot voters",
"Chief will designate Officers to assist curbside voters (outside the polls)",
"Identify a phone number (cell or office) that curbside voters may call for assistance. Write the  phone number on the “call” sign and post with the curbside voting signs.");
//   "Ballot stations"
checklist[6] = new Array("Set out Envelope #4, privacy folders, extra pens, clipboards",
    "Set out Voter Assistance forms for use as needed",
    "Set out one package of English ballots and envelope of Spanish ballots",
    "Place sign that informs that Spanish language ballots are available");
//    "observers"
checklist[7] = new Array("The observers must be registered to vote in Virginia and have written authorization from their party chairman or from an independent candidate who is on the ballot",
"Does not have to be the same person all day. They may switch off, but each poll watcher must have his/her own authorization form",
"Must wear a Poll Watcher identification badge (provided by precinct Chief) while inside the polls",
"Must return the Poll Watcher ID badge when leaving or being replaced by another Poll Watcher for the same candidate",
"While the polls are open, one representatives per party or candidate are permitted for each pollbook (paper or EPB station.) ",
"May use an electronic communication device, but may not take photos",
"May not campaign or display campaign material within the 40-ft. Prohibited Area");
//   "BallotBox"
checklist[8] = new Array("After depositing the ballot, the voter should immediately exit the polling place");
//   "DRE"
checklist[9] = new Array("Note the location of electrical outlets and figure out where to place electronic equipment so voters won't be tripping over cords");
// "waiting area
checklist[10] = new Array("Provide chairs for these voters if there are long waits in the lines");
// "rigth"
checklist[11] = new Array("Keep a good traffic flow in the voting area");
//left
checklist[12] = new Array("Keep a good traffic flow in the voting area");
//up
checklist[13] = new Array("Keep a good traffic flow in the voting area");
//down
checklist[14] = new Array("Keep a good traffic flow in the voting area");
//refuse
checklist[15] = new Array("Refuse for help materials");

var navigationTabs = new Array(4);
navigationTabs[0] = "Prior to Election Day";
navigationTabs[1] = "Opening the Polls";
navigationTabs[2] = "During the day";
navigationTabs[3] = "Closing the poles";

var navigationTabsContent = new Array(4);
navigationTabsContent[0] = new Array("Check the supplies in your kit against your supply list",
    "Arrange to Visit Polling Place on Monday (or earlier.)",
    "Ask the Assistant Chief to visit/check the polling location with you",
    "Election Officers need all-day access to telephone, restrooms, etc.",
    "Obtain the Name and Phone Number for a 5:00 a.m. Emergency Contact",
    "Note emergency evacuation route(s) -  a floor plan should be posted in each building",
    "Locate reserved voter parking spaces (see Notice 8422 for schools.)",
    "Is the lightning enough?",
    "Do you have enough tables and chairs?",
    "Is a flag available?",
    "Locate telephone and restrooms; make sure they won't be locked between 5:00 a.m. and 10 p.m.",
    "Check reserved accessible parking spaces. Are additional spaces needed?",
    "If the main entrance has steps, identify the alternate entrance. Will it be unlocked by 6 a.m.?",
    "Check entrances, ramps and pathways for barriers. Can obstacles be removed or marked?",
    "Is additional signage needed to reserve parking or direct voters to alternate entrance(s)?",
    "Locate Cart with Voting Machines",
    "Plug in the cart to charge the machine batteries.",
    "Mark Absentees in Paper Precinct Pollbooks with Blue Ink.");
navigationTabsContent[1] = new Array("Promptly at 5:00 a.m., swear in Election Officers; assign numbers",
"Welcome authorized representatives (Poll Watchers)",
    "Open voting machine cart",
    "Prepare the Paper Ballots",
    "Never, ever, leave ballots unattended!",
    "Check machine ballot against precinct sample ballot",
    "Post the following signs outside the polling place:",
    "Post VOTE HERE sign(s) at most visible site from road/parking lot",
    "Post additional POLLING PLACE signs on street corners or parking lot entrances as needed, especially if your polling place is difficult for new voters to locate",
    "Post other signs, such as arrows, as needed to direct voters to voting entrance. This is especially important if you are not in your normal room",
    "Required: post PROHIBITED AREA notices at main entrance to building",
    "Required: post CURBSIDE VOTING signs at main entrance to building and at the designated, handicapped parking spaces. Post the 'call for assistance' sign with an appropriate phone number for your location",
    "As needed: post HANDICAPPED PARKING / ALTERNATE ENTRANCE signs",
    "As needed: establish additional HANDICAPPED PARKING spaces close to your entrance",
    "Inspect exterior and interior pathways for obstacles",
    "Post the following signs in hallway or inside the polling place:",
    "Required: Post IDENTIFICATION / GIVE FULL LEGAL NAME signs on check-in tables",
    "For Paper Pollbooks - use ALPHABETICAL DIVISION signs on tables and in room to direct voters as quickly as possible into their correct line",
    "Required: Voting Instruction Posters",
    "Required: Post MAP of Fairfax County",
    "Required: Post SAMPLE BALLOTS, minimum of 2 sets",
    "Required: Post VOTER RIGHTS AND RESPONSIBILITIES [HAVA] POSTER",
    "Required: When Ballot Box is set up, attach the BALLOT BOX sign to the door of the Auxiliary Ballot bin on the left side of the Ballot Box",
    "Post additional signs as needed: Use ARROWS, ENTRANCE and EXIT to direct voters.");
navigationTabsContent[2] = new Array(
    "Keep the lines at the Check-in Tables, not in the voting area. Ask the Greeter to slow  down the pace at check-in if needed.",
    "NO VOTER MAY LEAVE THE VOTING LOCATION WITH A PAPER BALLOT IN HAND!!",
    "To assist the elderly and voters with disabilities:",
    "Ask the person if he/she would like assistance. Don't assume or insist",
    "At your discretion, you may move very frail or disabled voters to the front of the line - most 'able-bodied' voters won't object",
    "Provide chairs for these voters if there are long waits in the lines",
    "Keep the magnifying glass out on the Check-In table, so voters know that it is available",
    "If you don't have Pages at your polling place, ask the party workers distributing campaign literature to alert you if a voter needs assistance outside",
    "Post a curbside sign with an office or cell phone number to call for assistance",
    "For blind or severely visually-impaired voters notify the voter that an audio ballot is available",
    "For language-minority or illiterate voters any voter may bring an assistant to translate or read the ballot for them"
);
navigationTabsContent[3] =new Array( "At 6:45 p.m. - Announce outside 'The polls will close in 15 minutes'",
        "Check official TIME at U.S. Naval Observatory: 202-762-1401 or 202-762-1069",
        "At 7:00 p.m. - Announce outside 'The polls are officially closed'",
        "After the last voter has voted and departed the polling place welcome authorized Representatives (Poll Watchers)",
        "Get organized: assign tasks for Election Officer teams",
        "Team 1 to certify the Pollbook(s) and unused paper ballots",
        "Team 2 to close touch screen machines",
        "Team 3 to close the optical scan machine and certify voted paper ballots",
        "Clean up the area",
        "Place privacy booths, cardboards, machines and cords into the cart",
        "Check and lock the Cart",
        "Seal and Sign Envelope #7A",
        "Do NOT return ballots in the cart!",
        "Do NOT put the Blue Bag back into the cart",
        "The Blue Bag and Ballots must be returned to the Government Center!");
function createEditableLayout(index) {
    document.getElementById('diagram').style.backgroundImage="url(./images/Rec"+index+".PNG)";
}
function createToolbox() {
    var imgNum = 0;
    var num_rows = 4;
    var num_cols = 3;
    var title = "<h3>Toolbox</h3>"
    var instructions = "<h4> Drag and drop the furniture in the outline. Click each image to see helpful checklists.</h4>";
    var tbody = '';
    var theader = '<table border="0" class="toolboxTable">\n';
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
    var tfooter = '</table></div>';
    document.getElementById('toolbox').innerHTML = title + instructions + theader + tbody + tfooter;
}
function createToDoDivs(imgId) {
    var allToDos = document.getElementById("allToDos");
    var match = imgId.match(/\d+/);
    var index = parseInt(match[0]);
    var checkboxList = "";
    var clonedDiv = document.getElementById('checkboxToDoList').cloneNode(true);
    var list = checklist[index];
    for (var j = 0; j < list.length; j++) {
        checkboxList += '<input type="checkbox">' + list[j] + '</input><br/>';
    }
    clonedDiv.id = "clon_div_" + imgId;
    clonedDiv.innerHTML = checkboxList;
    clonedDiv.className = "hidden";
    allToDos.appendChild(clonedDiv);

}

function createTabNav() {
    var tabs = "";
    tabs += '<ul>';
    for (var i = 0; i < navigationTabs.length; i++) {
        tabs += '<li><a class="active" href="#" onclick="showTabContent(' + i + ')">' + navigationTabs[i] + '</a></li>';
    }
    tabs += '</ul>';
    var topNav = document.getElementById("topnav");
    topNav.innerHTML = tabs;
}

function createTabContent() {
    var allToDosTabs = document.getElementById("tabContent");
    var prevClonedDiv = null;

    for (var i = 0; i < navigationTabsContent.length; i++) {
        var checkboxList = "";
        var clonedDiv = document.getElementById('tabsToDoList').cloneNode(true);
        var checklist = navigationTabsContent[i];
        for (j = 0; j < checklist.length; j++) {
            checkboxList += '<input type="checkbox">' + checklist[j] + '</input><br/>';
        }

        clonedDiv.id = "clon_todo_div_" + i;
        clonedDiv.innerHTML = checkboxList;
        clonedDiv.className = "hidden";
        allToDosTabs.insertBefore(clonedDiv, prevClonedDiv);

    }


}

function showTabContent(index) {
    //get all other divs
    var tabContentDiv = document.getElementById("tabContent");
    var children = tabContentDiv.childNodes;
    for (var i = 0; i < children.length; i++) {
        var child = children [i];
        if (child.tagName == "DIV" && child.id.indexOf("clon_todo_div_") != -1) {
            child.className = "hidden";
        }
    }
    var allToDoTab = document.getElementById("clon_todo_div_" + index);
    allToDoTab.className = "shown";
}

function showChecklist(ev, windowname) {
    createToDoDivs(ev.target.id);
    //get all other divs
    var allToDos = document.getElementById("allToDos");
    var children = allToDos.childNodes;
    for (var i = 0; i < children.length; i++) {
        var child = children [i];
        if (child.tagName == "DIV" && child.id.indexOf("clon_div_") != -1) {
            child.className = "hidden";
        }
    }
    var toDoDiv = document.getElementById("clon_div_" + ev.target.id)
    toDoDiv.className = "shown";
    popup(windowname);
}

function reset() {
    $('#edit .drop').remove();
    createEditableLayout(layoutNumber);
}


function toggle(div_id) {
    var el = document.getElementById(div_id);
    if (el.style.display == 'none') {
        el.style.display = 'block';
    }
    else {
        el.style.display = 'none';
    }
}
function blanket_size(popUpDivVar) {
    if (typeof window.innerWidth != 'undefined') {
        viewportheight = window.innerHeight;
    } else {
        viewportheight = document.documentElement.clientHeight;
    }
    if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
        blanket_height = viewportheight;
    } else {
        if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
            blanket_height = document.body.parentNode.clientHeight;
        } else {
            blanket_height = document.body.parentNode.scrollHeight;
        }
    }
    var blanket = document.getElementById('blanket');
    blanket.style.height = blanket_height + 'px';
    var popUpDiv = document.getElementById(popUpDivVar);
    popUpDiv_height = blanket_height / 2 - 200;//200 is half popup's height
    popUpDiv.style.top = popUpDiv_height + 'px';
  //  popUpDiv.style.height = '200px';
}
function window_pos(popUpDivVar) {
    if (typeof window.innerWidth != 'undefined') {
        viewportwidth = window.innerHeight;
    } else {
        viewportwidth = document.documentElement.clientHeight;
    }
    if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
        window_width = viewportwidth;
    } else {
        if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
            window_width = document.body.parentNode.clientWidth;
        } else {
            window_width = document.body.parentNode.scrollWidth;
        }
    }
    var popUpDiv = document.getElementById(popUpDivVar);
    window_width = window_width / 2 - 200;//200 is half popup's width
    popUpDiv.style.left = window_width + 'px';
}
function popup(windowname) {
    blanket_size(windowname);
    window_pos(windowname);
    toggle('blanket');
    toggle(windowname);
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
    createTabNav();
    createTabContent();
    $( init );

}