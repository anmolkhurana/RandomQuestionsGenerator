(function(){
    function Question(question, answer, correct){
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}


Question.prototype.displayQuestion = function (){
    console.log(this.question);
    
    for(var i = 0; i < this.answer.length; i ++){
        console.log(i + ': ' + this.answer[i]);
    }
}

Question.prototype.checkAnswer = function (ans, call){
    var sc;
    if(ans === this.correct){
            console.log('Correct Answer!');
            sc = call(true);
        
        }
    
    else {
        console.log('Wrong Answer!');
        sc= call(false);
    }
    
    this.displayScore(sc);
}

Question.prototype.displayScore = function(Score) {
    console.log('Current Score : ' + Score);
    console.log('-------------------------');
    
}
var q1 = new Question('Is Javascript is the coolest language in the world?', ['Yes','No'],0);
var q2 = new Question('What\'s the name of the teacher?',['John','Micheal','Jonas'],2);
var q3 = new Question('What describes best about coding?', ['Boring','Hard','Fun','Tedious'],2);

var questions = [q1,q2,q3];
    
function Score(){
    var sc = 0 ;
    
    return function(correct){
    if(correct){
            sc++;
        }
    return sc;    
    }       
}
     

var KeepScore = Score();
    
function nextQuestion(){
    
    var n = Math.floor(Math.random() * questions.length) ;
    questions[n].displayQuestion();
    var answer = prompt('What\'s the answer ?');
    

    if(answer !== 'exit'){
        
        questions[n].checkAnswer(parseInt(answer),KeepScore);
        nextQuestion();
    }
}    
        
nextQuestion();
    
    
    
    
    
})();




