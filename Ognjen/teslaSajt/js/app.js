document.addEventListener('DOMContentLoaded', () => {$('#start').on('click',function(){
    $('#subWrapper').remove();
    game.start(); 
        
})


let questions=[{
    question:'Gde je rođen Nikola Tesla?',
    answers:['U Smiljanu","U Beogradu","U Njujorku'],
    correctAnswer:'U Smiljanu'
},{
    question:'Gde je rođen Nikola Tesla?',
    answers:['U Smiljanu","U Beogradu","U Njujorku'],
    correctAnswer:'U Smiljanu'
},{
    question:'Gde je rođen Nikola Tesla?',
    answers:['U Smiljanu","U Beogradu","U Njujorku'],
    correctAnswer:'U Smiljanu'
},{
    question:'Gde je rođen Nikola Tesla?',
    answers:['U Smiljanu","U Beogradu","U Njujorku'],
    correctAnswer:'U Smiljanu'
},{
    question:'Gde je rođen Nikola Tesla?',
    answers:['U Smiljanu","U Beogradu","U Njujorku'],
    correctAnswer:'U Smiljanu'
},{
    question:'Gde je rođen Nikola Tesla?',
    answers:['U Smiljanu","U Beogradu","U Njujorku'],
    correctAnswer:'U Smiljanu'
}];

let game={
    correct: 0,
    incorrect: 0,
    counter: 20,
    start:function(){
        timer=setInterval(game.countdown, 1000);
        $('#subWrapper').prepend('<h2> Time Remaining: <span id="counter">20</span>seconds</h2>');
        for(var i=0; i<questions.length;i++){
            $('#subWrapper').append('<h2>'+questions[i].question+'</h2>')
            for(var j=0; j<questions[i].answers.length;j++){
                $('#subWrapper').append("<h2><input type='radio' name='question-"+i+"'value='</h2>"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
            }
        }
        
        
     
    }, 
    countdown:function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter <= 0){
            console.log("Isteklo je vreme!");
            game.done();  
        }
    },
 
    done: function(){
      $.each($('input[name="questions- 0"]:checked'),
      function(){
          if($(this).val()==questions[0].correctAnswer){
              game.correct++;
          } else {
              game.incorrect++;
          }
      });
      $.each($('input[name="questions- 1"]:checked'),
      function(){
          if($(this).val()==questions[1].correctAnswer){
              game.correct++;
          } else {
              game.incorrect++;
          }
      });
      $.each($('input[name="questions- 2"]:checked'),
      function(){
          if($(this).val()==questions[2].correctAnswer){
              game.correct++;
          } else {
              game.incorrect++;
          }
      });
      $.each($('input[name="questions- 3"]:checked'),
      function(){
          if($(this).val()==questions[3].correctAnswer){
              game.correct++;
          } else {
              game.incorrect++;
          }
      });
      $.each($('input[name="questions- 4"]:checked'),
      function(){
          if($(this).val()==questions[4].correctAnswer){
              game.correct++;
          } else {
              game.incorrect++;
          }
      });
      $.each($('input[name="questions- 5"]:checked'),
      function(){
          if($(this).val()==questions[5].correctAnswer){
              game.correct++;
          } else {
              game.incorrect++;
          }
      });
      this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#subWrapper h2').remove();
        $('#subWrapper').append("<h3>Game Over! </h3>");
        $('#subWrapper').append("<h3>Correct answers:"+this.correct+"</h3>");
        $('#subWrapper').append("<h3>Incorrect answers:"+this.incorrect+"</h3>");
        $('#subWrapper').append("<h3>Unasnwered Questions:"+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}
});