function initialize() {
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(23.02255, 72.57087)
    };
    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);
    //var image = "http://i.neoseeker.com/mgv/499846/846/33/15847_179440563793_179437393793_2772323_4548598_n_icon.jpg";
    var myLatLng = new google.maps.LatLng(23.023, 72.571);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map
        //icon: image
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

$(window).load(function() {
    var hideTheModal = $.cookie('hideTheModal');
    if(hideTheModal == null){
        $('#popup-win').modal();
        $('.close-modal').click(function(){
            $.cookie('hideTheModal', { expires: 1, path: '/' });
        });
    }
});

$(document).ready(function () {
    $('.btn-item-team').each(function() {
        $(this).addClass('hidden');
    });
    $('.work-description').each(function() {
        $(this).addClass('hidden');
    });
    $('.team-item').hover(
        function func1() {
            var $social_team = $(this).children('.btn-item-team');
            var $description_team = $(this).children('.team-item-description');
            var $name_team = $(this).children('.team-item-description').children('.team-title-name');
            var $post_team = $(this).children('.team-item-description').children('.team-title-post');
            $social_team.fadeIn(200);
            $social_team.toggleClass('hidden');
            $description_team.css('background-color', '#3a454d');
            $name_team.css('color', '#ffffff');
            $post_team.css('color', '#ffffff');
        },
        function() {
            var $social_team = $(this).children('.btn-item-team');
            var $description_team = $(this).children('.team-item-description');
            var $name_team = $(this).children('.team-item-description').children('.team-title-name');
            var $post_team = $(this).children('.team-item-description').children('.team-title-post');
            $social_team.stop().animate();
            $social_team.fadeOut(100);
            $social_team.toggleClass('hidden');
            $description_team.css('background-color', '#e1e6ea');
            $name_team.css('color', '#292f36');
            $post_team.css('color', '#8d8f92');
        }
    );
    $('.work-item').hover(
        function() {
            $(this).children('.work-description').fadeIn(200);
            $(this).children('.work-item-img').children('img').css('opacity', '0.5');
            $(this).children('.work-description').toggleClass('hidden');
            $(this).children('.span-plus').toggleClass('hidden');
        },
        function() {
            $(this).children('.work-description').stop().animate();
            $(this).children('.work-description').fadeOut(100);
            $(this).children('.work-item-img').children('img').stop().animate();
            $(this).children('.work-item-img').children('img').css('opacity', '1');
            $(this).children('.work-description').toggleClass('hidden');
            $(this).children('.span-plus').toggleClass('hidden');
        }
    );
    var linkNav = document.querySelectorAll('[href^="#"]'),
        V = 0.2;  // скорость, может иметь дробное значение через точку
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function(e) {
            e.preventDefault();
            var w = window.pageYOffset,  // прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1'),  // id элемента, к которому нужно перейти
                t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
                window.scrollTo(0,r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash;  // URL с хэшем
                }
            }
        }, false);
    }
});