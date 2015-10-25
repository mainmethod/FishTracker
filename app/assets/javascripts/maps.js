var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.1074186, lng: -105.4787592},
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

  $.ajax({
    url: '/catches/retrieve',
    dataType: 'json',
    success: function(data){
      $.each(data, function(i, el){
        var pos = { lat: parseFloat(el.lat), lng: parseFloat(el.lng) };
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
        });
        marker.addListener('click', function() {
          var catch_form = $(".catch-form form");
          populate(catch_form,el);

          var infowindow = new google.maps.InfoWindow({
            content: $(".catch-form").html()
          });
          infowindow.open(map, marker);
        });
      });
    }
  });

  map.addListener('click', function(event) {
    var marker = new google.maps.Marker({
      position: event.latLng,
      map: map,
    });


    marker.addListener('click', function() {
      var catch_form = $(".catch-form");
      catch_form.find("#catch_lat").val(event.latLng.lat());
      catch_form.find("#catch_lng").val(event.latLng.lng());

      var infowindow = new google.maps.InfoWindow({
        content: $(".catch-form").html()
      });
      infowindow.open(map, marker);
    });

  });
}

function populate(frm, data) {
  $(frm).find(":input, textarea").each(function(i, el){
    var key = $(el).attr("name").replace("catch[","").replace("]","");
    console.log(key + ' : ' + data[key] + ' ' + $(el));
    //if(data.hasOwnProperty(key)){
      $(el).val(data[key]);
    //}
    
  });
  // console.log(data);
  // $.each(data, function(key, value){  
  //   var $ctrl = $('input[name="catch['+key+']"]', frm);  
  //   console.log($ctrl.val() + ' : ' + value);
  //   switch($ctrl.attr("type"))  
  //   {  
  //       case "text" :   
  //       case "hidden":  
  //       $ctrl.val(value);   
  //       break;   
  //       case "radio" : case "checkbox":   
  //       $ctrl.each(function(){
  //          if($(this).attr('value') == value) {  $(this).attr("checked",value); } });   
  //       break;  
  //       default:
  //       $ctrl.val(value); 
  //   }  
  // });
}

function initFishTracker(){
  initMap();
}