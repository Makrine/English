$(document).ready(function() {
  
generateBars();

editAllBars("saba", false, false, false, false, false, false, false,
false, false, false, true, false, false, false, true, true, false,
false, true, true, true, true, true, true, true, true);

editAllBars("keti", false, false, false, false, false, false, false,
false, false, false, true, false, false, false, true, true, false,
false, true, true, true, true, true, true, true, true);


getCSVDataValue("keti", "xp")
  .then(score => console.log(score)); // Output: 20


});

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
    if(name == "keti") index = 1;

    if(lock)
    {
        var parent = progressBars[index].parentNode.parentNode;
        var title = parent.querySelector('h3');
        title.innerHTML +=" <img class='lock-icon' src='Assets/lock-solid.svg'/>";
        percentage = 0;
    }

    // getCSVDataValue(name, dictionary.get(bar))
    // .then(value => progressBars[index].style.width = value + "%");
    
}

function generateBars()
{
    var barsContainers = document.getElementsByClassName("bars-container");

    for(var i = 0; i < barsContainers.length; i++)
    {
        var articles = createProgressBar("Articles (a/an/the)", 10, "articles-bar");
        var spelling = createProgressBar("Spelling", 10, "spelling-bar");
        var pronunciation = createProgressBar("Pronunciation", 10, "pronunciation-bar");
        var ob_pron = createProgressBar("Objective Pronouns", 10, "objective-bar");
        var pos_pron = createProgressBar("Possessive Pronouns", 10, "possessive-bar");
        var ref_pron = createProgressBar("Reflective Pronouns", 10, "reflective-bar");
        var irr_verbs = createProgressBar("Irregular Verbs", 10, "irregular-bar");

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

        var others = createTitle("Others");
        var phrasalVerbs = createProgressBar("Phrasal Verbs", 10, "phrasal-bar");

        barsContainers[i].appendChild(articles);
        barsContainers[i].appendChild(spelling);
        barsContainers[i].appendChild(pronunciation);
        barsContainers[i].appendChild(ob_pron);
        barsContainers[i].appendChild(pos_pron);
        barsContainers[i].appendChild(ref_pron);
        barsContainers[i].appendChild(irr_verbs);
        
        barsContainers[i].appendChild(presentTenses);
        barsContainers[i].appendChild(presentSimple);
        barsContainers[i].appendChild(presentContinuous);
        barsContainers[i].appendChild(presentPerfect);
        barsContainers[i].appendChild(presentPerfectContinuous);

        barsContainers[i].appendChild(pastTenses);
        barsContainers[i].appendChild(pastSimple);
        barsContainers[i].appendChild(usedTo);
        barsContainers[i].appendChild(pastContinuous);
        barsContainers[i].appendChild(pastPerfect);
        barsContainers[i].appendChild(pastPerfectContinuous);

        barsContainers[i].appendChild(futureTenses);
        barsContainers[i].appendChild(futureSimple);
        barsContainers[i].appendChild(goingTo);
        barsContainers[i].appendChild(futureContinuous);
        barsContainers[i].appendChild(futurePerfect);
        barsContainers[i].appendChild(futurePerfectContinuous);

        barsContainers[i].appendChild(futureInThePastTenses);
        barsContainers[i].appendChild(futureInThePastSimple);
        barsContainers[i].appendChild(futureInThePastContinuous);
        barsContainers[i].appendChild(futureInThePastPerfect);
        barsContainers[i].appendChild(futureInThePastPerfectContinuous);
        
        barsContainers[i].appendChild(others);
        barsContainers[i].appendChild(phrasalVerbs);

    }
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
    div2.style.width = percentage + "%";

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
    return fetch('https://raw.githubusercontent.com/Makrine/English/master/Data/data.csv?token=GHSAT0AAAAAAB7INCJHNLARPZGLWFNQ7GQEZBT5VOA')
      .then(response => response.text())
      .then(data => {
        // Parse CSV data using a library like Papaparse
        const parsedData = Papa.parse(data, { header: true });
        // Find the object with the given name
        const obj = parsedData.data.find(obj => obj.name === name);
  
        // Return the value of the given key in the object
        return obj[key];
      })
      .catch(error => console.error(error));
  }
  
  
  var dictionary = new Map([
    ["articles-bar", "articles"],
    ["spelling-bar", "spelling"],
    ["pronunciation-bar", "pronunciation"],
    ["ob_pron-bar", "ob_pron"],
    ["pos_pron-bar", "pos_pron"],
    ["ref_pron-bar", "ref_pron"],
    ["irr_verbs-bar", "irr_verbs"],
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
    ["phrasal-verbs-bar", "phrasalVerbs"]
  ]);
  