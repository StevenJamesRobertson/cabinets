
$(document).ready(function(){

    $('.cabinet').hover(function(){


          myVar = this;
          $( myVar ).css('z-index', '1000');
          $( myVar ).toggleClass('cabinetLg');
         // $( myVar ).find('div').fadeTo(600, 1, function(){
         //   $( '#cabinetOverlay').animate({
           //     left:0
             // }, 200);
         // })
      

      },  function(){
          $( myVar ).toggleClass('cabinetLg');
          $( myVar ).css('z-index', '100');
       //   $( myVar ).find('div').fadeTo(200, 0, function(){

        //  }) 
    })

            $('#lCabinetBtn').click( function(){
          $("#cabinetDiv").animate({right: '-=404px'});
        });
        $('#rCabinetBtn').click( function(){
          $("#cabinetDiv").animate({right: '+=404px'});
        });


        //

              //Listening for the "See Gallery" Click


        //
        var classname = document.getElementsByClassName("seeGallery");

        var myFunction = function() {
            var c = this.getAttribute("data-cabinetCode");
            cabinetView(c)
        };

        for (var i = 0; i < classname.length; i++) {
            classname[i].addEventListener('click', myFunction, false);
        }

        function cabinetView(code){

          var myDiv = document.getElementById("cabinetDiv");
       //  myDiv.classList.add('cabinetSm')
          
            var classname1 = document.getElementsByClassName("cabinet");
       

            for (var j = 0; j < classname1.length; j++) {
           
                classname1[j].classList.add('cabinetSm');

                //classname2[j].style.width = "2px"
            }

    
          
        }

})
/*
var itemsMainDiv = ('.cabinetCarousel');
var itemsDiv = ('.carouselInner');
var itemWidth = "";
  
  $('.leftLst, .rightLst').click(function () {
    var condition = $(this).hasClass("leftLst");
    if(condition)
      click(0,this);
    else
      click(1,this)
  });

  ResCarouselSize();




$(window).resize(function() {
  ResCarouselSize();
});

//this function define the size of the items
function ResCarouselSize()
{
  var incno = 0;
  var dataItems = ("data-items");
  var itemClass = ('.item');  
  var id = 0;
  var btnParentSb = '';
  var itemsSplit = '';
  var sampwidth = $(itemsMainDiv).width();
  var bodyWidth = $('body').width();
  $(itemsDiv).each(function() {
    id=id+1;
    var itemNumbers = $(this).find(itemClass).length;
      btnParentSb = $(this).parent().attr(dataItems);
      itemsSplit = btnParentSb.split(',');
      $(this).parent().attr("id","ResSlid"+id);


    if(bodyWidth>=1200)
    {
      incno=itemsSplit[3];
      itemWidth = sampwidth/incno;    
    }
    else if(bodyWidth>=992)
    {
      incno=itemsSplit[2];
      itemWidth = sampwidth/incno;
    }
    else if(bodyWidth>=768)
    {
      incno=itemsSplit[1];
      itemWidth = sampwidth/incno;
    }
    else
    {
      incno=itemsSplit[0];
      itemWidth = sampwidth/incno;
    }
    $(this).css({'transform':'translateX(0px)','width':itemWidth*itemNumbers});
    $(this).find(itemClass).each(function(){
      $(this).outerWidth(itemWidth);
    });

    $(".leftLst").addClass("outt");       
    $(".rightLst").removeClass("outt");

  });
}


//this function used to move the items
function ResCarousel(e, el, s){
  var leftBtn = ('.leftLst');
  var rightBtn = ('.rightLst');
  var translateXval = '';
  var divStyle = $(el+' '+itemsDiv).css('transform');
  var values = divStyle.match(/-?[\d\.]+/g);
  var xds = Math.abs(values[4]);
    if(e==0){
      translateXval = parseInt(xds)-parseInt(itemWidth*s);        
      $(el+' '+rightBtn).removeClass("outt");

      if(translateXval<= itemWidth/2){
        translateXval = 0;
        $(el+' '+leftBtn).addClass("outt");
      }
    }
    else if(e==1){
      var itemsCondition = $(el).find(itemsDiv).width()-$(el).width();
      translateXval = parseInt(xds)+parseInt(itemWidth*s);
      $(el+' '+leftBtn).removeClass("outt");

      if(translateXval>= itemsCondition-itemWidth/2){
        translateXval = itemsCondition;       
        $(el+' '+rightBtn).addClass("outt");    
      }
    }
    $(el+' '+itemsDiv).css('transform','translateX('+-translateXval+'px)');
}

//It is used to get some elements from btn
function click(ell,ee){
  var Parent ="#"+$(ee).parent().attr("id");
  var slide = $(Parent).attr("data-slide");
  ResCarousel(ell, Parent, slide);
}

});

*/