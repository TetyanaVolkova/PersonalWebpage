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
        $('html, body').animate({scrollTop: $('.second-row').offset().top}, 2000)
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.franklin').offset().top}, 2000)
    });
    
    /* Navigation scroll */
//    $(function() {
//      $('a[href*="#"]:not([href="#"])').click(function() {
//        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//          var target = $(this.hash);
//          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//          if (target.length) {
//            $('html, body').animate({
//              scrollTop: target.offset().top
//            }, 2000);
//            return false;
//          }
//        }
//      });
//    });
    
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
    
    $('.section-cities').waypoint(function(direction) {
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
            $('.js--pig--game').removeClass('do-not-show');
            $('.js--wp--body').addClass('js--wp--bodyfix');
            $('.steps-box').removeClass('span-1-of-2');
            $('.steps-box').addClass('rules100');
        }
    });
    
//    Maps

    var map = new GMaps({
        div: '.map',
        lat: 26.619879,
        lng: -35.413152,
        zoom: 3

});
    
    map.addMarker({
        lat: 39.123682,
        lng: -77.231511,
        title: 'My Home',
        infoWindow: {
        content: '<img src="resources/img/home.jpg" style="width:150px; margin:auto"> <p style="text-align:center">I live here <br> This is my home.</p>'
        }
    });
    
    map.addMarker({
        lat: 49.386551,
        lng: 36.214407,
        title: 'Home Town',
        infoWindow: {
        content: '<img src="resources/img/20160502_171708-1.jpg" style="width:150px; margin:auto"> <p style="text-align:center">I was born in Ukraine</p>'
        }
    });
    
    map.addMarker({
        lat: 39.059337,
        lng: -77.120135,
        title: 'MY Work',
        infoWindow: {
        content: '<img src="resources/img/NETE.jpg" style="width:150px; margin:auto"> <p style="text-align:center">My current job<br><a href="https://www.nete.com" target="_blank">NETE</a></p>'
        }
    });
    
    map.addMarker({
        lat: 24.572565,
        lng: -81.770993,
        title: 'Vacation on Key West',
        infoWindow: {
        content: '<img src="resources/img/vacation.jpg" style="width:150px; margin:auto"> <p style="text-align:center"> I have been at Key West<br/>For the New 2017 Year</p>'
        }
    });
    
    map.addMarker({
        lat: 34.746778,
        lng: -111.968708,
        title: 'Sedona Mago Retreat',
        infoWindow: {
        content: '<img src="resources/img/sedona.jpg" style="width:150px; margin:auto"> <p style="text-align:center">Sedona Mago Retreat<br><a href="https://www.flickr.com/photos/91598970@N05/albums/72157644260023204" target="_blank">Mago Garden</a></p>'
        }
    });
    
    map.addMarker({
        lat: 49.316814,
        lng: -56.119492,
        title: 'Newfoundland, Canada',
        infoWindow: {
        content: '<img src="resources/img/newfoundland.jpg" style="width:150px; margin:auto"> <p style="text-align:center">Newfoundland, Canada<br><a href="https://www.flickr.com/photos/91598970@N05/albums/72157675893570724" target="_blank">Hiking in Newfoundland</a></p>'
        }
    });
    
    map.addMarker({
        lat: 37.773836,
        lng: -119.561997,
        title: 'Yosemite National Park',
        infoWindow: {
        content: '<img src="resources/img/yosemite.jpg" style="width:150px; margin:auto"> <p style="text-align:center">Hiking in Yosemite National Park<br><a href="https://www.flickr.com/photos/91598970@N05/albums/72157644260023204" target="_blank">Yosemite National Park</a></p>'
        }
    });
    
    map.addMarker({
        lat: 40.790754,
        lng: -119.203681,
        title: 'Burning Man, Black Rock Desert',
        infoWindow: {
        content: '<img src="resources/img/burningMan.jpg" style="width:150px; margin:auto"> <p style="text-align:center">Burning Man, Black Rock Desert<br><a href="https://www.flickr.com/photos/91598970@N05/albums/72157675886841574" target="_blank">Burning Man</a></p>'
        }
    });
    
    map.addMarker({
        lat: 15.512559,
        lng: -61.362928,
        title: 'Dominica',
        infoWindow: {
        content: '<img src="resources/img/dominica.jpg" style="width:150px; margin:auto"> <p style="text-align:center">Vacation on Dominica</p>'
        }
    });
    
    map.addMarker({
        lat: 30.870349,
        lng: -81.418915,
        title: 'Cumberland Island, Georgia',
        infoWindow: {
        content: '<img src="resources/img/cumberland.jpg" style="width:150px; margin:auto"> <p style="text-align:center">Vacation on Cumberland Island, Georgia<br><a href="https://www.flickr.com/photos/91598970@N05/albums/72157679594121625/with/31686635154/" target="_blank">Cumberland Island pics</a></p>'
        }
    });
    
   
    
    
    
//    $('.mapPins').click(function() {
//        var lats = $('#lats').val();
//        var lngs = $('#lngs').val();
//        console.log(lats);
//        map.addMarker({
//        lat: lats,
//        lng: lngs,
//        title: 'Gaithersburg, MD',
//        infoWindow: {
//        content: '<p>I live here.</p>'
//        }
//    });
//    
//    });
    
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

var closePreview = $('.js--pig-icon');

closePreview.click(function() {
    if ($('.js--pig--game').hasClass('do-show'))
    $('.js--pig--game').addClass('do-not-show');
    $('.js--pig--game').removeClass('do-show');
    $('.js--wp-2').removeClass('js--wp--big');
    $('.js--wp-2').addClass('js--wp-small');
    $('.js--wp--body').removeClass('js--wp--bodyfix');
    $('.steps-box').addClass('span-1-of-2');
    $('.steps-box').removeClass('rules100');
    
});

//    $(window).scroll(function() {
//       var hT = $('.section-testimonials').offset().top,
//           hH = $('.section-testimonials').outerHeight(),
//           wH = $(window).height(),
//           wS = $(this).scrollTop();
//       if (wS > (hT+hH-wH)){
//        $('.js--pig--game').addClass('do-not-show');
//        $('.js--pig--game').removeClass('do-show');
//        $('.js--wp-2').removeClass('js--wp--big');
//        $('.js--wp-2').addClass('js--wp-small');
//        $('.js--wp--body').removeClass('js--wp--bodyfix');
//        $('.steps-box').addClass('span-1-of-2');
//        $('.steps-box').removeClass('rules100');
//       }
//    }); 

// Clock

  const secondHand = document.querySelector('.sec-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
  setInterval(setDate, 1000);
  setDate();

// My Information

	$('.anim').on('click', function(e){
        e.preventDefault();
        console.log(e);
		var anim = $(this).attr('data-anim');
		$('#cube').removeClass().addClass(anim);
	});


