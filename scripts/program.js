$(document).ready(function(){
    var br = 1;
    for (let i = 0; i < oblasti.length; i++) {
        $('#program').append(`<div class="oblast">
        <h1>${oblasti[i].naslov}</h1>`);
        for (let j = 0; j < oblasti[i].casovi.length; j++) {
            if (i > 2) {
                $('#program').append(`<div id='${i}${j}' class="cas">
                ${oblasti[i].casovi[j].substring(0,10)}
               </div>`)
            } else {
                $('#program').append(`<div id='${i}${j}' class="cas">
                ${oblasti[i].casovi[j].substring(0,8)}
               </div>`)
            }
           
        }    
    }



    $(".cas").mouseenter(function() {
        var i = this.id.substring(0,1);
        var j = this.id.substring(1,2);
        $(this).css({
            'color' : 'white',
            'background' : 'black'
        })
        $('#detalji').html(`
            ${oblasti[i].casovi[j]}
        `);
        $('#detalji').fadeIn(300);
    })
    $(".cas").mouseleave(function() {
        $('#detalji').hide();
        $(this).css({
            'color' : 'black',
            'background' : 'white'
        })
    })
});
