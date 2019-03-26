/* Carousel-demo - v0.1.0 -2016-02-13 *///check whether or not namespace exist
var MyApp = MyApp || {};

//create my app namespace
var MyApp = (function(){

  //private method - loads the JSON data in the DOM 
  var _loadJSON = function () {

    //JSON to retrieve the carousel data
    var jsonData = { 
        "data" : {
          "carousel" :  {
            "format" : {
              "paging" : 4,
              "heading" : "A Teaser carousel"
            },
            "items" : [
                {
                  "url" : "instructions.html",
                  "img" : "test_carousel_image_1.jpg",
                  "alt" : "Alt text for image 1" ,
                  "title" : "1st Item",
                  "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                    
                  
                },
                {
                  "url" : "instructions.html",
                  "img" : "test_carousel_image_2.jpg",
                  "alt" : "Alt text for image 2" ,
                  "title" : "2nd Item",
                  "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                    
                  
                },
                {
                  "url" : "instructions.html",
                  "img" : "test_carousel_image_3.jpg",
                  "alt" : "Alt text for image 3" ,
                  "title" : "3rd Item",
                  "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                    
                  
                },
                {
                  "url" : "instructions.html",
                  "img" : "test_carousel_image_4.jpg",
                  "alt" : "Alt text for image 4" ,
                  "title" : "4th Item",
                  "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                    
                  
                },
                {
                  "url" : "instructions.html",
                  "img" : "test_carousel_image_5.jpg",
                  "alt" : "Alt text for image 5" ,
                  "title" : "5th Item",
                  "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                    
                  
                },
                {
                  "url" : "instructions.html",
                  "img" : "test_carousel_image_6.jpg",
                  "alt" : "Alt text for image 6" ,
                  "title" : "6th Item",
                  "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                    
                  
                },
                {
                  "url" : "instructions.html",
                  "img" : "test_carousel_image_7.jpg",
                  "alt" : "Alt text for image 7" ,
                  "title" : "7th Item",
                  "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                    
                  
                },
                {
                  "url" : "instructions.html",
                  "img" : "test_carousel_image_8.jpg",
                  "alt" : "Alt text for image 8" ,
                  "title" : "8th Item",
                  "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                    
                  
                },
                {
                  "url" : "instructions.html",
                  "img" : "test_carousel_image_9.jpg",
                  "alt" : "Alt text for image 1" ,
                  "title" : "9th Item",
                  "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                    
                  
                },
                {
                  "url" : "instructions.html",
                  "img" : "test_carousel_image_10.jpg",
                  "alt" : "Alt text for image 10" ,
                  "title" : "10th Item",
                  "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                    
                  
                },
                {
                  "url" : "instructions.html",
                  "img" : "test_carousel_image_11.jpg",
                  "alt" : "Alt text for image 11" ,
                  "title" : "11th Item",
                  "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                    
                  
                },
                {
                  "url" : "instructions.html",
                  "img" : "test_carousel_image_12.jpg",
                  "alt" : "Alt text for image 12" ,
                  "title" : "12th Item",
                  "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "             
                }
              ]
            }
          }
      }


      //add main heading to the DOM from JSON
      $(".main-heading").html(jsonData.data.carousel.format.heading);

      //loop through the JSON and inject the HTML into the DOM
      for (var i = 0; i < jsonData.data.carousel.items.length; i++) {

        var value = jsonData.data.carousel.items[i];
        
        var item = $('<li class="items__item">'+ '<a href="'+ value.url +'" class="item-link" title="'+ value.title+'"><img alt="'+ value.alt +'" src="img/'+ value.img +'" /></a>' +
                  '<a class="item-heading-link" href="' + value.url +'"><h3 class="item-heading">'+ value.title + '</h3></a>' +
                  '<p class="item-desc">'+ value.content +'</p></li>');

        //append each item to the list
        $(".items").append(item);
      }


      //I cannot use the external JSON file as both Firefox and Chrome block files imported locally. The file should be on a web server to be accesible.
      //Hence I'm simulating it with the code above.
      //Below is how I would import the JSON with an AJAX request if the JSON file would be on an external web server.

      // $.ajax({
      //   url: 'json/basic_carousel.json',
      //   dataType: 'json',
      //   type: 'GET',
      //   cache:'false',
      //   success: function(data){
      //       $(data.data.carousel.items).each(function(index,value){

      //           var item = $('<li class="items__item">'+ '<a href="'+ value.url +'" class="item-link"><img alt="'+ value.alt +'" src="img/'+ value.img +'" /></a>' +
      //           '<a class="item-heading-link" href="' + value.url +'"><h3 class="item-heading">'+ value.title + '</h3></a>' +
      //           '<p class="item-desc">'+ value.content +'</p></li>');

      //           $(".items").append(item);
      //       });
      //   }
      // });
  }


  //private method - handles the dots event
  var _handleDotsButton = function (objectTarget) {

    //don't do anything if clicked on already selected dot 
    if(!objectTarget.hasClass("is-active")){

      //access initial carousel setup
      var carouselSetup = _initCarouselData();

      //get the control href reference to check what direction the slider should move
      var pageSelected = objectTarget.find("a").attr("href").charAt(1);
      var activeEl = $(".controls").find('.is-active');

      //get previous dot selected
      var pageToDeselect = activeEl.find("a").attr("href").charAt(1);

      //get the direction selected
      var slideDirection = pageSelected - pageToDeselect;

      //check the slider direction according to what the user selects - >0 is positive, means right
      if(slideDirection > 0){
        //calculate the new left indent of the list  
        var leftIndent = (carouselSetup.currentPos - carouselSetup.toSlidePartial)*slideDirection; 
      }
      else{ //if negative means moving left

        //if we skip more than one image at a time
        if(slideDirection < -1){

          //calculate how backwards we need to skip
          var slideBackward = carouselSetup.toSlidePartial * slideDirection;

          //calculate the new left indent of the list  
          var leftIndent = carouselSetup.currentPos - slideBackward; 
        }
        else{
          //calculate the new left indent of the list 
          var leftIndent = carouselSetup.currentPos + carouselSetup.toSlidePartial; 
        }
      }

      //this check prevents to trigger/animate carousel if already in animation
      if(!$(".items").is(':animated')){

          //remove active class from old dot and add to the new one
          $(activeEl).removeClass("is-active"); 
          objectTarget.addClass("is-active");   

          //performs the carousel animation applying new value to left rule
          $(".items").animate({"left" : leftIndent},carouselSetup.slideVelocity,function(){
      
              //set the new indentation position 
              $('.items').css({'left' : leftIndent});  
          });
      }

    }
  }


  //private method - handles the prev button event
  var _handlePrevButton = function () {

    //access initial carousel setup
    var carouselSetup = _initCarouselData();

    //if we have reach the far right position don't scroll across anymore
    if(carouselSetup.currentPos < 0){

     //find the active dot
     var dotSelected = $(".controls").find(".is-active");

     //calculate the new left indent of the list  
     var leftIndent = carouselSetup.currentPos + carouselSetup.toSlidePartial; 

     //this check prevents to trigger/animate carousel if already in animation
     if(!$(".items").is(':animated')){

        //remove active class from old dot and add to the new one
        $(dotSelected).removeClass("is-active").prev().addClass("is-active");      

        //performs the carousel animation applying new value to left rule
        $(".items").animate({"left" : leftIndent},carouselSetup.slideVelocity,function(){
    
            //set the new indentation position 
            $('.items').css({'left' : leftIndent});  
        });
      }
    }
  }


  //private method - handles the next button event
  var _handleNextButton = function () {

    //access initial carousel setup
    var carouselSetup = _initCarouselData();

    //calculate the new left indent of the list  
    var leftIndent = carouselSetup.toSlidePartial - carouselSetup.currentPos; 
 
    //if we have reach the far right position don't scroll across anymore
    if(leftIndent <= carouselSetup.totalToSlide){

      //find the active dot
      var dotSelected = $(".controls").find(".is-active");
       
       //this check prevents to trigger/animate carousel if already in animation
       if(!$(".items").is(':animated')){

          //remove active class from old dot and add to the new one
          $(dotSelected).removeClass("is-active").next().addClass("is-active");
          
          //performs the carousel animation applying new value to left rule
          $(".items").animate({"left" : -leftIndent},carouselSetup.slideVelocity,function(){           
              
              //set the new indentation position 
              $('.items').css({'left' : -leftIndent});  
          });
        }
    }

  }

  //public method - handles the form submit
  var initCarousel = function () {

    //enable controls
    $("body").addClass("js");

    //initialise and load JSON data in the DOM
    _loadJSON();

    //setup the initial carousel setup
    _initCarouselData();
      
  };


  //private method - initial setup carousel
  var _initCarouselData = function () {

    //set carousel slide velocity
    var slideVelocity = 250;

    //get the width of the items
    var itemWidth = $('.items li').outerWidth(true); 

    //calculates how much to slide each time
    var toSlidePartial = itemWidth * 4; 

    //calculates the limit of sliding 
    var totalToSlide = itemWidth * $(".items li").length - toSlidePartial;

    //get list current position
    var currentPos = parseInt($(".items").css('left'),10);
  
    //returns an object with an initial carousel setup
    return {
        itemWidth : itemWidth,
        toSlidePartial : toSlidePartial,
        totalToSlide : totalToSlide,
        currentPos : currentPos,
        slideVelocity : slideVelocity
    }
  }

  //public method - handles the button click and its functionalities
  var carouselEventListener = function () {

      //listens to the hit button event
      $('.prev').click(function() {
        _handlePrevButton();
      });

      //listens to the stand button event
      $('.next').click(function() {   
        _handleNextButton();
      });

      //listens to the next hand button event
      $('.nav-dots').click(function() {   
        _handleDotsButton($(this));
      });
  };

  return {
      initCarousel : initCarousel,
      carouselEventListener : carouselEventListener
  };

})();

MyApp.initCarousel();
MyApp.carouselEventListener();

