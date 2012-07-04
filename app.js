// Static server
var files = new (require('node-static').Server)('./public');
var httpServer = require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        // Serve files!
        files.serve(request, response);
    });
});
httpServer.listen(8888);

// Game server

var nowjs = require("now");
var everyone = nowjs.initialize(httpServer);

var game = {
	questions: [
		{	"text":		"What 1980s movie videogame adaptation ended with the following phrase:<br /><br />Congratulations !!!<br />You have completed a great game.<br />And proved the justice of our culture.<br />Now go and rest our heroes !",
			"answer-1":	"Back to the Future",
			"answer-2": "Friday the 13th",
			"answer-3": "Ghostbusters",
			"answer-4": "Karate Kid",
			"correct": 3
		},
		{	"text":		"In Back to the Future Part 2, what year was Emmett Brown sent to at the end of the film?",
			"answer-1":	"1884",
			"answer-2": "1885",
			"answer-3": "1931",
			"answer-4": "1955",
			"correct": 2
		},
		{	"text":		"Which hit album by Canadian Rock Band Rush featured \"The Camera Eye\" and \"YYZ\"?",
			"answer-1":	"Hold Your Fire",
			"answer-2": "2112",
			"answer-3": "Moving Pictures",
			"answer-4": "Rush",
			"correct": 3
		},
		{	"text":		"Which one of these TV Mystery/Crime Dramas was not only the most successful, but longest-running?",
			"answer-1":	"Magnum P.I",
			"answer-2": "Remington Steele",
			"answer-3": "Simon & Simon",
			"answer-4": "Murder She Wrote",
			"correct": 4
		},
		{	"text":		"What is the literal translation to the name <em>Nintendo</em>?",
			"answer-1":	"\"Your life will have no meaning\"",
			"answer-2": "\"Thank you playing\"",
			"answer-3": "\"To the stars, and beyond\"",
			"answer-4": "\"Leave luck to heaven\"",
			"correct": 4
		},
		{	"text":		"What deleted scene in the movie The Goonies was mentioned at the end of the film?",
			"answer-1":	"The Giant Octopus scene",
			"answer-2": "The Smoking of the Map scene",
			"answer-3": "The Blending of Chunk’s Hand scene",
			"answer-4": "The Scene where Sean Astin finally admits his love to Elijah Wood",
			"correct": 1
		},
		{	"text":		"What year did the Berlin Wall fall?",
			"answer-1":	"1982",
			"answer-2": "1985",
			"answer-3": "1988",
			"answer-4": "1989",
			"correct": 4
		},
		{	"text":		"What \"Cheers\" actor also had a role in The Empire Strikes Back?",
			"answer-1":	"Woody Harrelson",
			"answer-2": "John Ratzenberger",
			"answer-3": "Rhea Perlman",
			"answer-4": "Kirstie Alley",
			"correct": 2
		},
		{	"text":		"What 1984 Computer was the first commercially successful PC to feature a mouse and a GUI?",
			"answer-1":	"Apple 2 GS",
			"answer-2": "Lisa",
			"answer-3": "Macintosh",
			"answer-4": "Xerox Alto",
			"correct": 3
		},
		{	"text":		"Which one of these games was not on the list of games on the WOPR system in the movie Wargames?",
			"answer-1":	"Chess",
			"answer-2": "Gin Rummy",
			"answer-3": "Theaterwide Tactical Warfare",
			"answer-4": "Urban Combat",
			"correct": 4
		},
		{	"text":		"What’s on the plates of the space flying car on the Last Starfighter?",
			"answer-1":	"KODAN",
			"answer-2": "RYLOS",
			"answer-3": "Outatime",
			"answer-4": "TRANTOR",
			"correct": 2
		},
		{	"text":		"In the movie Ferris Beuller\'s Day Off, what painting is Cameron staring at in the Art Institute of Chicago?",
			"answer-1":	"Sunday Afternoon on the Island of La Grande Jatte",
			"answer-2": "Banks of Seine",
			"answer-3": "The Pine Tree at St. Tropez ",
			"answer-4": "The Flowers",
			"correct": 1
		},
		{	"text":		"Which one of these phrases did Jack Burton say in the movie Big Trouble in Little China",
			"answer-1":	"What the Hell...",
			"answer-2": "I'm an a&#9608;&#9608;hole",
			"answer-3": "Playing with myself! I'm going in. ",
			"answer-4": "Where's the president?",
			"correct": 1
		},
		{	"text":		"What is the maximum possible score a player can achieve in Pac-Man?",
			"answer-1":	"9,999,999",
			"answer-2": "3,333,360",
			"answer-3": "2,560,000",
			"answer-4": "250",
			"correct": 2
		},
		{	"text":		"What Hi-C flavor did Slimer promote?",
			"answer-1":	"Slimin' Lime",
			"answer-2": "Proto-Plasma",
			"answer-3": "Ecto - Cooler ",
			"answer-4": "Fruit Punch",
			"correct": 3
		},
		{	"text":		"TIE BREAKER $2000000000000 Brian Buck question!!!!!<br/><br />The US release of the NES game Legend of Zelda make an reference to a feature on the Japanese Famicom. Which feature is this?",
			"answer-1":	"A modem hookup",
			"answer-2": "A microphone",
			"answer-3": "Turbo button",
			"answer-4": "Better Sounding Music",
			"correct": 2
		},
		{	"text":		"THE END",
			"answer-1":	"",
			"answer-2": "",
			"answer-3": "",
			"answer-4": "",
			"correct": 0
		}
	],
	current: -1,
	answers: {
		"Brian": 0,
		"Justin": 0,
		"Ernie": 0
	},
	scored: true
}

everyone.now.logStuff = function(msg){
    console.log(msg);
}

everyone.now.scores = {
	"Brian": 0,
	"Justin": 0,
	"Ernie": 0
}
everyone.now.question = {
	"text":		"Waiting for start",
	"answer-1":	"",
	"answer-2": "",
	"answer-3": "",
	"answer-4": "",
	"correct": 0
}
everyone.now.answers = {
	"Brian": 0,
	"Justin": 0,
	"Ernie": 0
}
everyone.now.lockedin = {
	"Brian": true,
	"Justin": true,
	"Ernie": true,
	"t2t2": true
}
everyone.now.revealed = {
	1: false,
	2: false,
	3: false,
	4: false
}

everyone.now.join = function() {
	console.log("New connection: "+this.now.player)
	this.now.update_scores()
	this.now.update_question()
	this.now.update_locked()
	if(everyone.now.lockedin.Brian && everyone.now.lockedin.Justin && everyone.now.lockedin.Ernie) {
		this.now.update_answers()
	}
}
everyone.now.answer = function(answer) {
	if(["Brian", "Justin", "Ernie"].indexOf(this.now.player) > -1) {
		game.answers[this.now.player] = answer
		console.log(this.now.player+" answered "+answer)
	} else if(this.now.player == "t2t2") {
		everyone.now.update_reveal(answer, game.questions[game.current].correct == answer)
		console.log("Reveal: "+answer)
	}
}
everyone.now.lockin = function() {
	if(everyone.now.lockedin[this.now.player]) {
		return false;
	}
	everyone.now.lockedin[this.now.player] = true
	console.log(this.now.player+" locked in")
	console.log(everyone.now.lockedin)
	everyone.now.update_locked()
	if(everyone.now.lockedin.Brian && everyone.now.lockedin.Justin && everyone.now.lockedin.Ernie) {
		everyone.now.lockedin.t2t2 = false
		everyone.now.update_locked()
		everyone.now.answers = game.answers
		everyone.now.update_answers()
	}
}

everyone.now.admin = function(data) {
	if(this.now.player != "t2t2") {
		return false;
	}
	if(data == "next") {
		game.answers = {
			"Brian": 0,
			"Justin": 0,
			"Ernie": 0
		}
		everyone.now.lockedin = {
			"Brian": false,
			"Justin": false,
			"Ernie": false,
			"t2t2": true
		}
		everyone.now.revealed = {
			1: false,
			2: false,
			3: false,
			4: false
		}
		game.scored = false
		game.current = game.current + 1
		everyone.now.question = game.questions[game.current]
		everyone.now.update_question()
		everyone.now.update_locked()
	} else if(data == "score") {
		if(game.scored) {
			return false;
		}
		if(game.answers.Brian == game.questions[game.current].correct) {
			everyone.now.scores.Brian = everyone.now.scores.Brian + 1
		}
		if(game.answers.Justin == game.questions[game.current].correct) {
			everyone.now.scores.Justin = everyone.now.scores.Justin + 1
		}
		if(game.answers.Ernie == game.questions[game.current].correct) {
			everyone.now.scores.Ernie = everyone.now.scores.Ernie + 1
		}
		everyone.now.update_scores()
		game.scored = true
	}
}

