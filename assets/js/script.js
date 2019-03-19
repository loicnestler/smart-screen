$(document).ready(function() {

    const hours = $('#hours');
    const dot = $('#dot');
    const minutes = $('#minutes');
    const seconds = $('#seconds');

    const active = $('.active');
    const half = $('.half');
    const inactive = $('.inactive');

    var runHalf = false;

    function updateClock() {
        var date = new Date();

        var hh = date.getHours();
        if(hh < 10)
            hh = '0' + hh;
        var mm = date.getMinutes();
        if(mm < 10)
            mm = '0' + mm;
        var ss = date.getSeconds();

        if((ss % 2) == 0)
            runHalf = true;

        if(runHalf)
            half.toggleClass('null');
        dot.toggleClass('hidden');

        var actives = '·'.repeat(Math.floor(ss / 2));

        var inactives = '·'.repeat(30 - actives.length);

        if (!half.hasClass('null'))
            inactives = inactives.slice(0, -1);



        active.text(actives);
        inactive.text(inactives);

        hours.text(hh);
        minutes.text(mm);

        setTimeout(updateClock, 1000);

    }

    updateClock();


});
