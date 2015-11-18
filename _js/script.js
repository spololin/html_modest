function initialize() {
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(23.02255, 72.57087)
    }
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
