// Создаем переменные 
var width = 400;  
var height = 400;  
var clicks = 0;  

// Получаем случайное число от 0 до size-1
var getRandomNumber = function (size) {    
    return Math.floor(Math.random() * size);  
};  

// Случайная позиция клада 
var target = {    
    x: getRandomNumber(width),    
    y: getRandomNumber(height)  
};  


// Вычисляем расстояние от клика (event) до клада (target)  
var getDistance = function (event, target) {    
    var diffX = event.offsetX - target.x;    
    var diffY = event.offsetY - target.y;    
    return Math.sqrt((diffX * diffX) + (diffY * diffY));  
};  

// Получаем для расстояния строку подсказки
var getDistanceHint = function (distance) {
    if (distance < 20) {      
        return "Очень горячо";    
    } else if (distance < 40) {      
        return "Горячо";    
    } else if (distance < 80) {      
        return "Тепло";    
    } else if (distance < 160) {      
        return "Холодно";    
    } else if (distance < 320) {      
        return "Очень холодно";    
    } else {      
        return "Замерзнешь!";    
    }  
};  

// Добавляем элементу img обработчик клика 
document.getElementById("map").onclick = function(event){
    clicks++;
    
    var distance = getDistance(event, target);
    var distanceHint = getDistanceHint(distance);   
    var out =  document.getElementById("out");
    
    document.getElementById("distance").innerHTML = distanceHint;
    
    out.innerHTML = "У Вас осталось " + (10 - clicks)+ " попыток";
    
    if(clicks > 5){
        out.innerHTML = "У Вас осталось " + (10 - clicks)+ " попытки";
    }
    
    if(clicks > 8){
        out.innerHTML = "У Вас осталась " + (10 - clicks)+ " попытка";
    }
    
    if(clicks > 9){
        out.innerHTML = "КОНЕЦ ИГРЫ! Нажмите F5.";
        setTimeout("window.location.reload()", 2000);
    }
    
    if (distance < 15) {      
        out.innerHTML = "Клад найден! Сделано кликов: " + clicks;    
    }  
};
