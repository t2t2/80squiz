/* Author: t2t2

*/

now.update_scores = function() {
	$("#score-Brian").text(now.scores.Brian)
	$("#score-Justin").text(now.scores.Justin)
	$("#score-Ernie").text(now.scores.Ernie)
}
now.update_question = function() {
	$("#question").html(now.question.text)
	$(".answer-text, .player-choice").html("&nbsp;")
	$("#answer-1").html(now.question["answer-1"])
	$("#answer-2").html(now.question["answer-2"])
	$("#answer-3").html(now.question["answer-3"])
	$("#answer-4").html(now.question["answer-4"])
	$(".choice.btn-success").removeClass("btn-success")
	$(".answer").removeClass("answer-true").removeClass("answer-false")
	if(now.lockedin[now.player]) {
		$(".choice, #lockin").attr("disabled", "disabled")
	} else {
		$(".choice, #lockin").removeAttr("disabled")
	}
}
now.update_locked = function() {
	if(now.lockedin.Brian) {
		$("#locked-Brian").addClass("locked")
	} else {
		$("#locked-Brian").removeClass("locked")
	}
	if(now.lockedin.Justin) {
		$("#locked-Justin").addClass("locked")
	} else {
		$("#locked-Justin").removeClass("locked")
	}
	if(now.lockedin.Ernie) {
		$("#locked-Ernie").addClass("locked")
	} else {
		$("#locked-Ernie").removeClass("locked")
	}
	if(now.player == "t2t2") {
		$(".choice, #lockin").removeAttr("disabled")
	}
}
now.update_answers = function() {
	$("#answer-"+now.answers.Brian+"-Brian").html("&#10004;")
	$("#answer-"+now.answers.Justin+"-Justin").html("&#10004;")
	$("#answer-"+now.answers.Ernie+"-Ernie").html("&#10004;")
}
now.update_reveal = function(answer, correct) {
	if(correct) {
		$("#answerrow-"+answer).addClass("answer-true")
	} else {
		$("#answerrow-"+answer).addClass("answer-false")
	}
}

if(location.search.length > 8) {
	now.player = location.search.slice(8)
	if(now.player == "t2t2") {
		$("#admin").show()
	}
} else {
	now.player = "Public"
}
$(".admin-btn").click(function() {
	now.admin($(this).data("admin"))
});
$(".choice").click(function() {
	now.answer($(this).data("answer"))
	$(".choice.btn-success").removeClass("btn-success")
	$(this).addClass("btn-success")
});
$("#lockin").click(function() {
	if($(".choice.btn-success").length == 0) {
		return false;
	}
	now.lockin()
	$(".choice, #lockin").attr("disable", "disable")
});
$("#pingt2t2").click(function() {
	now.logStuff("PING FROM "+now.player)
});

now.ready(function() {
	now.join()
});
