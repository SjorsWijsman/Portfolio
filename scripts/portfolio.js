//
// ----------------
// Useful Functions
// ----------------
//

// Returns random number from min (inclusive) to max (exclusive)
function randrange(min, max) {
  return Math.random() * (max - min) + min;
}

// Return HSL string format from list[Hue, Saturation, Lightness]
function listToHSL(list) {
  return "hsl(" + list[0] + "," + list[1] + "%," + list[2] + "%)";
}

// Return subtraction/addition from hue
function calcHue(hue, difference) {
  var newHue = Math.floor(hue + difference) % 359;
  if (newHue < 0) {
    newHue = 359 + newHue;
  }
  return newHue;
}



//
// ----------------
// Website Theme Generation
// ----------------
//

function generateTheme() {
  // 360 hue colors with a contrast ratio of at least 5:1 against white
  // var colorList = [[0,80,46],[1,80,46],[2,80,46],[3,80,46],[4,80,46],[5,80,45],[6,80,45],[7,80,45],[8,80,44],[9,80,44],[10,80,44],[11,80,43],[12,80,43],[13,80,43],[14,80,42],[15,80,42],[16,80,41],[17,80,41],[18,80,41],[19,80,40],[20,80,40],[21,80,39],[22,80,39],[23,80,38],[24,80,38],[25,80,37],[26,80,37],[27,80,36],[28,80,36],[29,80,36],[30,80,35],[31,80,35],[32,80,34],[33,80,34],[34,80,33],[35,80,33],[36,80,32],[37,80,32],[38,80,32],[39,80,31],[66,80,25],[67,80,25],[68,80,25],[69,80,25],[70,80,25],[71,80,25],[72,80,25],[73,80,25],[74,80,25],[75,80,25],[76,80,25],[77,80,25],[78,80,26],[79,80,26],[80,80,26],[81,80,26],[82,80,26],[83,80,26],[84,80,26],[85,80,26],[86,80,26],[87,80,26],[88,80,26],[89,80,26],[90,80,26],[91,80,26],[92,80,26],[93,80,26],[94,80,26],[95,80,26],[96,80,26],[97,80,27],[98,80,27],[99,80,27],[100,80,27],[101,80,27],[102,80,27],[103,80,27],[104,80,27],[105,80,27],[106,80,27],[107,80,27],[108,80,27],[109,80,27],[110,80,27],[111,80,27],[112,80,27],[113,80,27],[114,80,27],[115,80,27],[116,80,27],[117,80,27],[118,80,27],[119,80,27],[120,80,27],[121,80,27],[122,80,27],[123,80,27],[124,80,27],[125,80,27],[126,80,27],[127,80,27],[128,80,27],[129,80,27],[130,80,27],[131,80,27],[132,80,27],[133,80,27],[134,80,27],[135,80,27],[136,80,27],[137,80,27],[138,80,27],[139,80,27],[140,80,27],[141,80,27],[142,80,27],[143,80,27],[144,80,27],[145,80,27],[146,80,27],[147,80,27],[148,80,27],[149,80,27],[150,80,27],[151,80,27],[152,80,27],[153,80,27],[154,80,27],[155,80,27],[156,80,27],[157,80,27],[158,80,27],[159,80,27],[160,80,27],[161,80,27],[162,80,27],[163,80,27],[164,80,26],[165,80,26],[166,80,26],[167,80,26],[168,80,26],[169,80,26],[170,80,26],[171,80,26],[172,80,26],[173,80,26],[174,80,26],[175,80,26],[176,80,26],[177,80,26],[178,80,26],[179,80,26],[180,80,26],[181,80,26],[182,80,27],[183,80,27],[184,80,27],[185,80,28],[186,80,28],[187,80,29],[188,80,29],[189,80,30],[190,80,30],[191,80,31],[192,80,31],[193,80,31],[194,80,32],[195,80,32],[196,80,33],[197,80,34],[198,80,34],[199,80,35],[200,80,35],[201,80,36],[202,80,37],[203,80,37],[204,80,38],[205,80,39],[206,80,39],[207,80,40],[208,80,41],[209,80,42],[210,80,42],[211,80,43],[212,80,44],[213,80,45],[214,80,46],[215,80,47],[216,80,48],[217,80,49],[218,80,50],[219,80,51],[220,80,52],[221,80,52],[222,80,53],[223,80,54],[224,80,55],[225,80,55],[226,80,56],[227,80,57],[228,80,57],[229,80,58],[230,80,58],[231,80,59],[232,80,60],[233,80,60],[234,80,61],[235,80,61],[236,80,62],[237,80,62],[238,80,63],[239,80,63],[240,80,63],[241,80,63],[242,80,63],[243,80,63],[244,80,63],[245,80,63],[246,80,63],[247,80,62],[248,80,62],[249,80,62],[250,80,62],[251,80,62],[252,80,61],[253,80,61],[254,80,61],[255,80,61],[256,80,61],[257,80,61],[258,80,60],[259,80,60],[260,80,60],[261,80,60],[262,80,59],[263,80,59],[264,80,59],[265,80,59],[266,80,58],[267,80,58],[268,80,58],[269,80,57],[270,80,57],[271,80,57],[272,80,56],[273,80,56],[274,80,55],[275,80,55],[276,80,54],[277,80,54],[278,80,53],[279,80,53],[280,80,52],[281,80,51],[282,80,51],[283,80,50],[284,80,49],[285,80,49],[286,80,48],[287,80,48],[288,80,47],[289,80,46],[290,80,46],[291,80,45],[292,80,45],[293,80,44],[294,80,44],[295,80,43],[296,80,43],[297,80,42],[298,80,42],[299,80,41],[300,80,41],[301,80,41],[302,80,41],[303,80,41],[304,80,42],[305,80,42],[306,80,42],[307,80,42],[308,80,42],[309,80,42],[310,80,43],[311,80,43],[312,80,43],[313,80,43],[314,80,43],[315,80,43],[316,80,43],[317,80,43],[318,80,44],[319,80,44],[320,80,44],[321,80,44],[322,80,44],[323,80,44],[324,80,44],[325,80,44],[326,80,44],[327,80,44],[328,80,45],[329,80,45],[330,80,45],[331,80,45],[332,80,45],[333,80,45],[334,80,45],[335,80,45],[336,80,45],[337,80,46],[338,80,46],[339,80,46],[340,80,46],[341,80,46],[342,80,46],[343,80,46],[344,80,46],[345,80,46],[346,80,46],[347,80,46],[348,80,46],[349,80,46],[350,80,46],[351,80,46],[352,80,46],[353,80,46],[354,80,46],[355,80,46],[356,80,46],[357,80,46],[358,80,46],[359,80,46]]

  // Get random background Hue from list
  // var listItem = Math.floor(randrange(0, colorList.length));
  // var foregroundColor = colorList[listItem];
  // var foregroundHue = foregroundColor[0];

  var foregroundHue = Math.floor(randrange(0, 360));
  var foregroundColor = [foregroundHue, 80, 45]

  // Set background hue css variable
  document.documentElement.style.setProperty("--hue-foreground", foregroundHue);
  document.documentElement.style.setProperty("--color-foreground", listToHSL(foregroundColor))

  // Generate foreground color based on baseHue
  var backgroundRand = randrange(0, 1);
  // 50% for Hue in 10° range from baseHue
  if (backgroundRand < .5) {
    var hueRange = Math.floor(randrange(-10, 11));
  }
  // 30% chance for Hue in 60° range from baseHue
  else if (backgroundRand < .7) {
    var hueRange = Math.floor(randrange(-30, 31));
  }
  // 30% change for Hue in full 360° range
  else {
    var hueRange = Math.floor(randrange(0, 360));
  }
  var backgroundHue = calcHue(foregroundHue, hueRange);

  document.documentElement.style.setProperty("--hue-background", backgroundHue);

  // Create starfield
  generateStarField(foregroundHue);

  // Generate random wave animations
  waveAnimations();

  // Add event listener for a new star field on resize to prevent low res stars
  window.onresize = function(){generateStarField(foregroundHue)};
}
generateTheme();

// from: https://andreasrohner.at/posts/Web%20Development/JavaScript/Random-starfield-generator-for-THREE-js/
function generateStarField(foregroundHue) {
  // Select canvas starfield element
  var canvas = document.getElementById('starfield');

  // https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	canvas.width = width;
	canvas.height = height;
  // Maximum amount of stars
  var starMax = (screen.width * screen.height) * 0.001;
  // Minimum amount of stars
  var starMin = (screen.width * screen.height) * 0.0001;

	var ctx = canvas.getContext('2d');

  // Draw stars
	for (var i = 0; i < randrange(starMin, starMax); ++i) {
		var radius = Math.random() * 2;
		var x = Math.floor(Math.random() * width);
		var y = Math.floor(Math.random() * height);

		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    var hue = foregroundHue;
    var saturation = "100";
    var lightness = randrange(50, 90);
    var alpha = randrange(0.1, 1);
		ctx.fillStyle = "hsla(" + hue + ", " + saturation + "%, " + lightness + "%, " + alpha + ")";
		ctx.fill();
	}

  header = document.body.getElementsByTagName("header")[0];
  header.appendChild(canvas);
}

// Randomize wave animations
function waveAnimations() {
  waves = document.body.getElementsByClassName("wave-container")[0].children;
  for (var i = 0; i < waves.length; i+=2) {
    animationDelay = randrange(-20, 0) + "s";
    waves[i].style.animationDelay = animationDelay;
    waves[i+1].style.animationDelay = animationDelay;

    animationDuration = (15 * i) + 20 + "s";
    waves[i].style.animationDuration = animationDuration;
    waves[i+1].style.animationDuration = animationDuration;

    bottom = randrange(0, 6) + "vmin"
    waves[i].style.bottom = bottom;
    waves[i+1].style.bottom = bottom;
  }
  // Reset front wave bottom value
  waves[0].style.bottom = "0px";
  waves[1].style.bottom = "0px";
}

// Hide header-box after scrolling past 2x screenheight
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    document.querySelector(".header-box").classList.add("hidden");
  } else {
    document.querySelector(".header-box").classList.remove("hidden");
  }
});

//
// ----------------
// Projects
// ----------------
//

// Loads projects into project nav from projects.json file
var projects = new Vue({
  el: "#project-nav",
  data: {
    projects: []
  },
  methods: {
    viewProject: function(index, dir) {
      viewProject(index, dir)
    }
  },
  updated: function() {
    viewProject(0, "/recipile/")
  }
})

// https://www.w3schools.com/js/js_json_parse.asp
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var projectsObj = JSON.parse(this.responseText);
    projects.projects = projectsObj;
  }
};
xmlhttp.open("GET", "projects/projects.json", true);
xmlhttp.send();

// Load project from dir and view on page
function viewProject(index, dir) {
  // https://www.w3schools.com/js/js_json_parse.asp
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var projectObj = JSON.parse(this.responseText);
      project.project = projectObj;
      var projectControl = document.querySelector("#project-nav").firstChild;
      for (item of projectControl.children) {
        item.firstChild.classList.remove("active")
        item.firstChild.classList.add("inactive")
      }
      projectControl.children[index].firstChild.classList.add("active")
      projectControl.children[index].firstChild.classList.remove("inactive")
    }
  };
  xmlhttp.open("GET", "projects" + dir + "project.json", true);
  xmlhttp.send();
}

var project = new Vue({
  el: "#project-view",
  data: {
    project: {
      meta: {
      	dir: "/recipile/",
      }
    }
  }
})

function expandDetails() {
  var details = document.querySelector(".details")
  details.classList.toggle("expanded")
  if (details.classList.contains("expanded")) {
    details.firstChild.innerHTML = "Close details"
  } else {
    details.firstChild.innerHTML = "More about this project"
  }
}



//
// ----------------
// Toolbox
// ----------------
//
var toolbox = new Vue({
  el: "#toolbox",
  data: {
    toolbox: []
  }
})

// https://www.w3schools.com/js/js_json_parse.asp
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var toolboxObj = JSON.parse(this.responseText);
    toolbox.toolbox = toolboxObj;
  }
};
xmlhttp.open("GET", "toolbox/toolbox.json", true);
xmlhttp.send();


//
// ----------------
// Lasers easteregg
// ----------------
//

function lasers() {
  var hover = window.matchMedia("(hover: hover)")
  // Check for pointer with hover capability
  if (hover.matches) {
    // Toggle "laser" text
    var laserText = document.getElementById("lasers-text");
    laserText.classList.toggle("active");
    // Toggle "solutions" text
    var solutionText = document.getElementsByClassName("solutions")
    for (span of solutionText) {
      span.classList.toggle("hidden");
    }
    var starfield = document.getElementById("starfield")
    // Toggle laser amount input
    var laserAmount = document.getElementById("lasers-amount")
    laserAmount.classList.toggle("active");
    laserAmount.addEventListener("blur", validateLaserAmount);
    // If lasers easteregg is active after click, enable functionalities:
    if (laserText.classList.contains("active")) {
      laserAmount.contentEditable = "true";
      laserAmount.innerHTML = "01";
      starfield.style = "cursor: crosshair";
      starfield.addEventListener("click", drawLaser);
    }
    // If lasers easteregg is inactive after click, disable functionalities:
    else {
      laserAmount.contentEditable = "false";
      laserAmount.innerHTML = "99";
      starfield.style = "cursor: inherit";
      starfield.removeEventListener("click", drawLaser);
      foregroundHue = getComputedStyle(document.documentElement).getPropertyValue('--hue-foreground');
      generateStarField(foregroundHue);
    }
  }
}

function validateLaserAmount(event) {
  var text = event.srcElement.innerHTML;
  var newText = ""
  // Check if newtext is longer than 1 character
  // If longer, trim to 2 characters
  if (text.length > 1) {
    newText = text[0] + text[1];
  }
  // If shorter, add 0 to start (eg 4 > 04)
  else {
    newText = "0" + text[0];
  }
  // Check if number of length two
  regex = /^\d{2}$/
  // If regex fails or newtext is zero, reset text to 01
  if (!regex.test(newText) || newText == "00") {
    newText = "01"
  }
  // Set new text
  event.srcElement.innerHTML = newText;
}

// Get full length of border (borderLength), select a random location (randStart)
// on that border and draw laser (ctx.moveTo()) from that side to pointer (ctx.lineTo)
function drawLaser(event) {
  ctx = starfield.getContext("2d");
  amount = parseInt(document.getElementById("lasers-amount").innerHTML, 10);
  // Draw laser for amount entered
  for (var i = 0; i < amount; i++) {
    ctx.beginPath();
    randX = randrange(0, starfield.width+1);
    randY = randrange(0, starfield.height+1);
    borderLength = starfield.width * 2 + starfield.height * 2;
    randStart = Math.floor(randrange(0, borderLength+1));
    // Start on top side
    if (randStart < starfield.width) {
      ctx.moveTo(randX, 0);
    }
    // Start on right side
    else if (randStart < starfield.width + starfield.height) {
      ctx.moveTo(starfield.width, randY);
    }
    // Start on bottom side
    else if (randStart < starfield.width * 2 + starfield.height) {
      ctx.moveTo(randX, starfield.height);
    }
    // Start on left side
    else {
      ctx.moveTo(0, randY);
    }
    ctx.lineTo(event.x, event.y);
    laserHue = randrange(0,360)
    ctx.strokeStyle = "hsla(" + laserHue + ",100%, 70%)";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "hsla(" + laserHue + ", 100%, 60%, 0.5)";
    ctx.stroke();
  }
}
