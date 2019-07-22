$(document).ready(function(){

    var brzinaSmenjivanja = 500;
    var brzinaSlajdera = 2100;
    var brDece = 9;
  
    
       function nacrtaj(params) {
           console.log('hej');
           
        for(j = brDece; j >= 1 ;j--) {
            $('#slider').append('<img id="slajdslika'+j+'"src="img/'+j+'.jpg">');
        }
        // $('#slider').append('<img id="slajdslika'+1+'"src="img/'+1+'.jpg">');
       }

        nacrtaj();
    $('#slajdslika2').hide();
    
    i = 2;
    setInterval(() => {
        
        $('#slajdslika'+(i-1)+'').fadeOut(brzinaSmenjivanja);
  
        if (i == (brDece+1)) i = 1;
        $('#slajdslika'+i).show().fadeIn(brzinaSmenjivanja);
        i++; 
        console.log(i);
        
    }, brzinaSlajdera);

 
    $("#natpis1").mouseenter(function () {
        $('#natpis1').animate({
            top:'100px'
        })
        $('#natpis2').slideDown(1000);
    })
    $("main").mouseleave(function () {
        $('#natpis1').animate({
            top:'52%'
        })
        $('#natpis2').fadeOut();
    })

   
  });