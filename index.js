
var filename = "saba.html"; // Default value
$(document).ready(function() {
    filename = location.href.split("/").slice(-1); // Get the last part of the URL (i.e. the filename)
    

    var login = document.getElementById("body-login");
    if(login != null) { console.log("login page"); return;}

});


function loginSuccess()
{
    var body = document.getElementsByTagName("body");

    if(filename[0] == "saba.html")
    body[0].innerHTML = 

   `<a href="index.html"><button class="button button-left">Back</button></a>
    <div class="avatar">
        <img src="Assets/saba.png" alt="Avatar-saba" class="avatar-saba">
        <h2 class="student-name">Saba Jariashvili</h2>
    </div>
    <br>
    <h2 class="lvl">Level: <k id="lvl-saba">1</k></h2>
    <h3 class="txt">XP</h3>
    <div class="w3-light-grey">
        <div class="w3-green" id="xp-bar-saba" style="height:24px;width:0%"></div>
        
      </div>
      <div id="xp-points">0/100</div>

      <div class="bars-container"></div>`;

      else
      {
        body[0].innerHTML = 
        `
        <a href="index.html"><button class="button button-left">Back</button></a>
            <div class="avatar">
                <img src="Assets/keti.png" alt="Avatar-keti" class="avatar-keti">
                <h2 class="student-name">Keti Jariashvili</h2>
            </div>
            <br>
            <h2 class="lvl">Level: <k id="lvl-keti">1</k></h2>
            <h3 class="txt">XP</h3>
			<div class="w3-light-grey">
                <div class="w3-green" id="xp-bar-keti" style="height:24px;width:0%"></div>
              </div>
              <div id="xp-points">0/100</div>
              <div class="bars-container"></div>
        `;
      }


    generateBars();

    if(filename[0] == "saba.html")
        editAllBars("saba", false, false, false, false, false, false, false,
    false, false, false, true, false, false, false, true, true, false,
    false, true, true, true, true, true, true, true, true);
    
     else if(filename[0] == "keti.html") //console.log("keti");
        editAllBars("keti", false, false, false, false, false, false, false,
        false, false, false, true, false, false, false, true, true, false,
        false, true, true, true, true, true, true, true, true);
}

function updateXP(name, amount)
{
    var xpBar;
    if(name == "saba") xpBar = document.getElementById("xp-bar-saba");
    else xpBar = document.getElementById("xp-bar-keti");

    var currentAmount = xpBar.style.width;
    // remove the % sign
    currentAmount = currentAmount.substring(0, currentAmount.length - 1);
    currentAmount = parseInt(currentAmount);
    var newAmount = currentAmount + amount;

    if(newAmount >= 100) {newAmount %= 100; updateLevel(name);}

    xpBar.style.width = newAmount + "%";
    
}

function updateLevel(name)
{
    var lvl;
    if(name == "saba") lvl = document.getElementById("lvl-saba");
    else lvl = document.getElementById("lvl-keti");

    var currentLevel = lvl.innerHTML;
    currentLevel = parseInt(currentLevel);
    var newLevel = currentLevel + 1;
    lvl.innerHTML = newLevel;
}

function editAllBars(name,
    articles, spelling, pronunciation, ob_pron, pos_pron, ref_pron, irr_verbs,
    presentSimple, presentContinuous, presentPerfect, presentPerfectContinuous,
    pastSimple, usedTo, pastContinuous, pastPerfect, pastPerfectContinuous,
    futureSimple, goingTo, futureContinuous, futurePerfect, futurePerfectContinuous,
    futureInThePastSimple, futureInThePastContinuous, futureInThePastPerfect, futureInThePastPerfectContinuous,
    phrasalVerbs)
{
    var level;
    var xp;

    var currLvl = 1;
    var currXP = 0;
    console.log(name);
    if(name == "saba")
    {
        level = document.getElementById("lvl-saba");
        xp = document.getElementById("xp-bar-saba");
    }
    else
    {
        level = document.getElementById("lvl-keti");
        xp = document.getElementById("xp-bar-keti");
    }

    getCSVDataValue(name, "level").then(result => {
        if(level != null)
            level.innerHTML = result;
            currLvl = result;
      });
      
    getCSVDataValue(name, "xp").then(result => {
        xp.style.width = result + "%";
        currXP = result;
      });
      
    updateXPPointsNumerical(currLvl, currXP);

    editBar("articles-bar", 10, articles, name);
    editBar("spelling-bar", 10, spelling, name);
    editBar("pronunciation-bar", 10, pronunciation, name);
    editBar("objective-bar", 10, ob_pron, name);
    editBar("possessive-bar", 10, pos_pron, name);
    editBar("reflective-bar", 10, ref_pron, name);
    editBar("irregular-bar", 10, irr_verbs, name);
    editBar("present-simple-bar", 10, presentSimple, name);
    editBar("present-continuous-bar", 10, presentContinuous, name);
    editBar("present-perfect-bar", 10, presentPerfect, name);
    editBar("present-perfect-continuous-bar", 10, presentPerfectContinuous, name);
    editBar("past-simple-bar", 10, pastSimple, name);
    editBar("used-to-bar", 10, usedTo, name);
    editBar("past-continuous-bar", 10, pastContinuous, name);
    editBar("past-perfect-bar", 10, pastPerfect, name);
    editBar("past-perfect-continuous-bar", 10, pastPerfectContinuous, name);
    editBar("future-simple-bar", 10, futureSimple, name);
    editBar("going-to-bar", 10, goingTo, name);
    editBar("future-continuous-bar", 10, futureContinuous, name);
    editBar("future-perfect-bar", 10, futurePerfect, name);
    editBar("future-perfect-continuous-bar", 10, futurePerfectContinuous, name);
    editBar("future-in-the-past-simple-bar", 10, futureInThePastSimple, name);
    editBar("future-in-the-past-continuous-bar", 10, futureInThePastContinuous, name);
    editBar("future-in-the-past-perfect-bar", 10, futureInThePastPerfect, name);
    editBar("future-in-the-past-perfect-continuous-bar", 10, futureInThePastPerfectContinuous, name);
    editBar("phrasal-bar", 10, phrasalVerbs, name);
}

function editBar(bar, percentage, lock=false, name)
{
    var index = 0;
    var progressBars = document.getElementsByClassName(bar);
    

    if(lock)
    {
        var parent = progressBars[index].parentNode.parentNode;
        var title = parent.querySelector('h3');
        title.innerHTML +=" <img class='lock-icon' src='Assets/lock-solid.svg'/>";
        percentage = 0;
    }

    getCSVDataValue(name, dictionary.get(bar)).then(result => {
        progressBars[index].style.width = result + "%";
      });
}

function generateBars()
{
    var barsContainer = document.getElementsByClassName("bars-container");
    barsContainer = barsContainer[0];

        var skills = createTitle("Skills");
        var articles = createProgressBar("Articles (a/an/the)", 10, "articles-bar");
        var spelling = createProgressBar("Spelling", 10, "spelling-bar");
        var pronunciation = createProgressBar("Pronunciation", 10, "pronunciation-bar");
        var ob_pron = createProgressBar("Objective Pronouns", 10, "objective-bar");
        var pos_pron = createProgressBar("Possessive Pronouns", 10, "possessive-bar");
        var ref_pron = createProgressBar("Reflective Pronouns", 10, "reflective-bar");
        var irr_verbs = createProgressBar("Irregular Verbs", 10, "irregular-bar");
        var phrasalVerbs = createProgressBar("Phrasal Verbs", 10, "phrasal-bar");

        var presentTenses = createTitle("Present Tenses");
        var presentSimple = createProgressBar("Present Simple", 10, "present-simple-bar");
        var presentContinuous = createProgressBar("Present Continuous", 10, "present-continuous-bar");
        var presentPerfect = createProgressBar("Present Perfect", 10, "present-perfect-bar");
        var presentPerfectContinuous = createProgressBar("Present Perfect Continuous", 10, "present-perfect-continuous-bar");

        var pastTenses = createTitle("Past Tenses");
        var pastSimple = createProgressBar("Past Simple", 10, "past-simple-bar");
        var usedTo = createProgressBar("Used To", 10, "used-to-bar");
        var pastContinuous = createProgressBar("Past Continuous", 10, "past-continuous-bar");
        var pastPerfect = createProgressBar("Past Perfect", 10, "past-perfect-bar");
        var pastPerfectContinuous = createProgressBar("Past Perfect Continuous", 10, "past-perfect-continuous-bar");

        var futureTenses = createTitle("Future Tenses");
        var futureSimple = createProgressBar("Future Simple", 10, "future-simple-bar");
        var goingTo = createProgressBar("Going To", 10, "going-to-bar");
        var futureContinuous = createProgressBar("Future Continuous", 10, "future-continuous-bar");
        var futurePerfect = createProgressBar("Future Perfect", 10, "future-perfect-bar");
        var futurePerfectContinuous = createProgressBar("Future Perfect Continuous", 10, "future-perfect-continuous-bar");

        var futureInThePastTenses = createTitle("Future in the Past Tenses");
        var futureInThePastSimple = createProgressBar("Future in the Past Simple", 10, "future-in-the-past-simple-bar");
        var futureInThePastContinuous = createProgressBar("Future in the Past Continuous", 10, "future-in-the-past-continuous-bar");
        var futureInThePastPerfect = createProgressBar("Future in the Past Perfect", 10, "future-in-the-past-perfect-bar");
        var futureInThePastPerfectContinuous = createProgressBar("Future in the Past Perfect Continuous", 10, "future-in-the-past-perfect-continuous-bar");
        
        barsContainer.appendChild(skills);
        barsContainer.appendChild(articles);
        barsContainer.appendChild(spelling);
        barsContainer.appendChild(pronunciation);
        barsContainer.appendChild(ob_pron);
        barsContainer.appendChild(pos_pron);
        barsContainer.appendChild(ref_pron);
        barsContainer.appendChild(irr_verbs);
        barsContainer.appendChild(phrasalVerbs);
        
        barsContainer.appendChild(presentTenses);
        barsContainer.appendChild(presentSimple);
        barsContainer.appendChild(presentContinuous);
        barsContainer.appendChild(presentPerfect);
        barsContainer.appendChild(presentPerfectContinuous);

        barsContainer.appendChild(pastTenses);
        barsContainer.appendChild(pastSimple);
        barsContainer.appendChild(usedTo);
        barsContainer.appendChild(pastContinuous);
        barsContainer.appendChild(pastPerfect);
        barsContainer.appendChild(pastPerfectContinuous);

        barsContainer.appendChild(futureTenses);
        barsContainer.appendChild(futureSimple);
        barsContainer.appendChild(goingTo);
        barsContainer.appendChild(futureContinuous);
        barsContainer.appendChild(futurePerfect);
        barsContainer.appendChild(futurePerfectContinuous);

        barsContainer.appendChild(futureInThePastTenses);
        barsContainer.appendChild(futureInThePastSimple);
        barsContainer.appendChild(futureInThePastContinuous);
        barsContainer.appendChild(futureInThePastPerfect);
        barsContainer.appendChild(futureInThePastPerfectContinuous);
        
}

function createTitle(title)
{
    // create a div element
    var div = document.createElement("div");

    var br = document.createElement("br");
    var h2 = document.createElement("h2");
    h2.className = "bar-group";
    h2.innerHTML = title;
    var br2 = document.createElement("br");

    div.appendChild(br);
    div.appendChild(h2);
    div.appendChild(br2);

    return div;
}

function createProgressBar(barName, percentage, className)
{
    // create a div element with a class "bar-container"
    var barContainer = document.createElement("div");
    barContainer.className = "bar-container";
    
    // create a h3 element
    var h3 = document.createElement("h3");
    h3.className = "txt";
    h3.innerHTML = barName;

    // create a div element with a class "w3-light-grey"
    var div = document.createElement("div");
    div.className = "w3-light-grey";

    // create a div element with a class "w3-blue"
    var div2 = document.createElement("div");
    div2.className = "w3-blue" + " " + className;

    // set style height to 24px and width to percentage + "%"
    div2.style.height = "24px";
    div2.style.width = 0 + "%";

    // append div2 to div
    div.appendChild(div2);
    barContainer.appendChild(h3);
    barContainer.appendChild(div);

    return barContainer;
}


function readCSV()
{
    fetch('https://raw.githubusercontent.com/Makrine/English/master/Data/data.csv?token=GHSAT0AAAAAAB7INCJHNLARPZGLWFNQ7GQEZBT5VOA')
  .then(response => response.text())
  .then(data => {
    // Parse CSV data using a library like Papaparse
    const parsedData = Papa.parse(data, { header: true });
    
    // Access the parsed data as an array of objects
    console.log(parsedData.data);
  })
  .catch(error => console.error(error));

}


function getCSVDataValue(name, key) { 

    return fetch('https://raw.githubusercontent.com/Makrine/English/master/Data/data.csv')
        .then(response => response.text())
        .then(data => {
        const parsedData = Papa.parse(data, { header: true });
        const myObj = parsedData.data.find(obj => obj.name === name);
        const result = myObj[key];
        return result;
        })
        .catch(error => console.error(error));
}
  


function updateXPPointsNumerical(lvl, xp)
{
    var xpPoints = document.getElementById("xp-points");
    var nextLevel = lvl + 1;
    var requiredXPForNextLevel = xpPointsLevelDict.get(nextLevel);
    xpPoints.innerHTML = xp + "/" + requiredXPForNextLevel;
}

var xpPointsLevelDict = new Map([
    [2, 100],
    [3, 100],
    [4, 100],
    [5, 150],
    [6, 200],
    [7, 250],
    [8, 250],
    [9, 300],
    [10, 400],
    [11, 500]
])

var dictionary = new Map([
    ["articles-bar", "articles"],
    ["spelling-bar", "spelling"],
    ["pronunciation-bar", "pronunciation"],
    ["objective-bar", "obj_pronouns"],
    ["possessive-bar", "poss_pronouns"],
    ["reflective-bar", "ref_pronouns"],
    ["irregular-bar", "irr_verbs"],
    ["present-simple-bar", "presentSimple"],
    ["present-continuous-bar", "presentContinuous"],
    ["present-perfect-bar", "presentPerfect"],
    ["present-perfect-continuous-bar", "presentPerfectContinuous"],
    ["past-simple-bar", "pastSimple"],
    ["used-to-bar", "usedTo"],
    ["past-continuous-bar", "pastContinuous"],
    ["past-perfect-bar", "pastPerfect"],
    ["past-perfect-continuous-bar", "pastPerfectContinuous"],
    ["future-simple-bar", "futureSimple"],
    ["going-to-bar", "goingTo"],
    ["future-continuous-bar", "futureContinuous"],
    ["future-perfect-bar", "futurePerfect"],
    ["future-perfect-continuous-bar", "futurePerfectContinuous"],
    ["future-in-the-past-simple-bar", "futureInThePastSimple"],
    ["future-in-the-past-continuous-bar", "futureInThePastContinuous"],
    ["future-in-the-past-perfect-bar", "futureInThePastPerfect"],
    ["future-in-the-past-perfect-continuous-bar", "futureInThePastPerfectContinuous"],
    ["phrasal-bar", "phrasalVerbs"]
  ]);