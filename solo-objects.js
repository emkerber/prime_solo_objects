//makes the team Drag'n Thrust into an Object
var dragNThrust = {
  teamName: 'Drag\'n Thrust',
  sport: 'ultimate frisbee',
  homeCity: 'Minneapolis',
  headCoach: 'Jake Henderson',
  assistantCoach: 'Tallis Boyd',
  get captains() {
    return this.handlers[0] + ', ' + this.cutters[0] + ', and ' + this.cutters[1];
  },
  handlers: ['Jake McKean', 'Alicia Carr', 'Jeff Trosvig', 'Erica Baken', 'Brett Sullivan', 'Martha Lein', 'Danny Collom', 'Jacob Lein', 'Austin Lien', 'Chip Chang', 'Meredith Bray'],
  cutters: ['Brian Schoenrock', 'Sarah Meckstroth', 'Emily Regan', 'Pat Niles', 'David Shirley', 'Claire Oakley', 'Jay Drescher', 'Patty King', 'Eric VanderMolen', 'Mike Clark', 'Josh Hemmesch', 'Jamie Glader', 'Jimmy Kittleson', 'Sarah Anciaux', 'Sierra Barthen'],
  positionToBeDetermined: ['Greg Arneson'],
  nationalChampionshipsWonConsecutively: [2013, 2014, 2015],
  get consecutiveYearsAsNationalChampions() {
    return this.nationalChampionshipsWonConsecutively.length;
  }
};

//to initialize the champs variable, where the function will store values
//this variable will be/is a string that concatenates the three consecutive years during which Drag'n Thrust were national champions, including pretty print
var champs = '';

//this function gives the champs variable its desired value, including pretty print
function champions(object) {
  for (var i = 0; i < object.nationalChampionshipsWonConsecutively.length; i++) {
    if (i <= object.nationalChampionshipsWonConsecutively.length - 3) {
      champs += object.nationalChampionshipsWonConsecutively[i] + ', ';
    } else if (i === object.nationalChampionshipsWonConsecutively.length - 2) {
      champs += object.nationalChampionshipsWonConsecutively[i] + ', and ';
    } else if (i === object.nationalChampionshipsWonConsecutively.length - 1) {
      champs += object.nationalChampionshipsWonConsecutively[i];
    }
  }
};

//to execute the champions function and give the variable champs its value
champions(dragNThrust);

//to initialize the handle variable, which will pretty print the names of the handlers on the team
var handle = '';

//this function gives handle its desired value, including pretty print
function thoseWhoHandle(object) {
  for (var i = 0; i < object.handlers.length; i++) {
    if (i < object.handlers.length - 2) {
      handle += object.handlers[i] + ', ';
    } else if (i === object.handlers.length - 2) {
      handle += object.handlers[i] + ', and ';
    } else {
      handle += object.handlers[i];
    }
  }
};

//to execute the thoseWhoHandle function and give the variable handle its value
thoseWhoHandle(dragNThrust);

//to initialize the cut variable, which will pretty print the names of the cutters on the team
var cut = '';

//this function gives cut its desired value, including pretty print
function thoseWhoCut(object) {
  for (var i = 0; i < object.cutters.length; i++) {
    if (i < object.cutters.length - 2) {
      cut += object.cutters[i] + ', ';
    } else if (i === object.cutters.length - 2) {
      cut += object.cutters[i] + ', and ';
    } else {
      cut += object.cutters[i];
    }
  }
};

//to execute the thoseWhoCut function and give the variable cut its value
thoseWhoCut(dragNThrust);

//this is the function that creates the final product, which is a statement that uses pretty print and incorporates all of the values in the Drag'n Thrust object
function teamDescription(object) {
  return 'When it comes to ' + object.sport + ', ' + object.teamName + ' is a team to watch. They\'re a local team, based out of ' + object.homeCity + ' and have won ' + object.consecutiveYearsAsNationalChampions + ' consecutive national championships, in ' + champs + '. Their head coach is ' + object.headCoach + ', their assistant coach is ' + object.assistantCoach + ', and their captains are ' + object.captains + '. Those on the team who play as handlers are ' + handle + '. Those who play as cutters are ' + cut + '. ' + object.positionToBeDetermined + '\'s position has yet to be determined on the 2016 roster, but this player is sure to amaze in either case.';
};

//to run the teamDescription function with dragNThrust as its argument, and to console.log that result
console.log(teamDescription(dragNThrust));
