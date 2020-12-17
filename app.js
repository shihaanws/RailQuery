var inputValue = document.querySelector('.inputValue');
var inputNumber = document.querySelector('.inputNumber');

var name = document.querySelector('.name');
var line2 = document.querySelector('.line2');
var line3 = document.querySelector('.line3');
var line1 = document.querySelector('.line1');
var button= document.querySelector('.button');
var button1= document.querySelector(".button1");
var api_key = config.API_KEY;

// FETCH STATION CODE DETAILS

button.addEventListener('click', function(){
fetch('https://indianrailapi.com/api/v2/StationLocationOnMap/apikey/'+api_key+'/StationCode/'+inputValue.value+'/')
.then(response => response.json())
.then(data => { console.log(data)
  var line2Value =  data.StationCode+ ' - Map Location';
  var line1Value ='Train Name : ' +data.StationName ;
  var line3Value = data.URL;

  line1.innerHTML = line1Value;
  line2.innerHTML = line2Value;
  // line3.innerHTML = line3Value;

// TAKING THE URL WITHOUT HTTP PART
  var linkonly = line3Value.slice(7, );
  console.log(linkonly);

// DISPLAYING MAP ON DOM
line3.innerHTML =  `<div class="mapouter"><div class="gmap_canvas"><iframe width="300" 
height="107" id="gmap_canvas" src="https://${linkonly}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" 
marginwidth="0"></iframe><a href="https://elitetorrent-es.com">elitetorrent</a></div><style>.mapouter{position:relative;text-align:right;
height:107px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:107px;width:300px;}</style></div>`

})

.catch(err => alert("Wrong station code!"));
})


// FETCH TRAIN NUMBER DETAILS

button1.addEventListener('click', function(){
  fetch('https://indianrailapi.com/api/v2/TrainInformation/apikey/'+api_key+'/TrainNumber/'+inputNumber.value+'/')
  .then(response => response.json())
  .then(data => { console.log(data)
    var line2Value = 'Departs  ' +data.Source.Code+' at ' +data.Source.Arrival;
    
    var line1Value= 'Train Name : ' +data.TrainName;

    var line3Value = 'Arrives  ' +data.Destination.Code+' at ' +data.Destination.Arrival;
   
    line1.innerHTML = line1Value;
    line2.innerHTML = line2Value;
    line3.innerHTML = line3Value;
    
  })
  
  .catch(err => alert("Currently unable to fetch the details!"));
  })
  


