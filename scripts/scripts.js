$(document).ready(function(){    
    $('#btn').one('click',function(){
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=byron+center&units=imperial&APPID=e8ceda90ee3d22ed7e818b40deaa0da6",function(data){
            console.log(data);
                        
            let icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            let weather = data.weather[0].main;
            let temp = Math.floor(data.main.temp) + " ° f  ";
            let humidity = (data.main.humidity) + " %" + " rh";
            $(".icon").attr("src",icon);
            $('.weather').append(weather);
            $('.temp').append(temp) + "degrees f ";
            $('.humidity').append(humidity);
            
            
            })

    });
});


  


