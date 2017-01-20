$(document).ready(function() {
    
    /* For the sticky navigation */
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
          offset: '60px;'
        });
    
    /* Scroll on buttons */
    
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.section-steps').offset().top}, 2000)
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 2000)
    });
    
    /* Navigation scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 2000);
            return false;
          }
        }
      });
    });
    
    /* Animations on scroll */
    
//    $('.js--wp-1').waypoint(function(direction) {
//        $('.js--wp-1').addClass('animated fadeIn');
//    }, {
//        offset: '50%'
//    });
    
    $('.js--wp-img').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated puls');
    }, {
        offset: '50%'
    });
    

    /* Mobile navigation */
    
    $('.js--nav-icon').click(function() {
        var  nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    $('.js--wp-2').click(function() {
        if ($(".js--wp-2").hasClass('js--wp-small')) {
            $('.js--wp-2').addClass('js--wp--big');
            $('.js--wp-2').removeClass('js--wp-small');
            $('.js--pig--game').addClass('do-show');
            $('.js--pig--game').removeClass('.do-not-show');
            $('.js--wp--body').addClass('.js--wp--bodyfix');
        }
    });
    
//    Maps

    var map = new GMaps({
        div: '.map',
        lat: 44.979152,
        lng: -25.890697,
        zoom: 2

});
    
    map.addMarker({
        lat: 39.123682,
        lng: -77.231511,
        title: 'Gaithersburg, MD',
        infoWindow: {
        content: '<p>I live here.</p>'
        }
    });
    
    map.addMarker({
        lat: 49.386551,
        lng: 36.214407,
        title: 'Pervomaiskyi',
        infoWindow: {
        content: '<img src="resources/img/20160502_171708-1.jpg" style="width:100px;"> <p>I was born in Ukraine.</p>'
        }
    });
    
    
    
});

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if (gamePlaying) {
    
    
        //1. Rundom nummber
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'resources/img/dice-' + dice + '.png';

        //3. Update the round score IF the rolled number was NOT a 1

        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            //Next player
            nextPlayer();

        }  
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if (gamePlaying) { 
        
        // Add current score to global score

        scores[activePlayer] +=roundScore;

        // update UI

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game

        if (scores[activePlayer] >= 100) {

            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else {
            // Next player
            nextPlayer();
        }   
    }
        
    
});


document.querySelector('.btn-new').addEventListener('click', init);



function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    //document.querySelector('#current-' + activePlayer).textContent = dice;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
}

function nextPlayer() {
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

$('.js--pig-icon').click(function() {
    if ($('.js--pig--game').hasClass('do-show'))
    $('.js--pig--game').addClass('do-not-show');
    $('.js--pig--game').removeClass('do-show');
    $('.js--wp-2').removeClass('js--wp--big');
    $('.js--wp-2').addClass('js--wp-small');
    $('.js--wp--body').removeClass('.js--wp--bodyfix');
    
});


