function DateTime (){
    
    var currentDate = new Date();
    var contDay = currentDate.getDate();
    var contMonth = currentDate.getMonth();
    var contYear = currentDate.getFullYear();
    var contHour = currentDate.getHours();
    var contMinutes = currentDate.getMinutes();
    var contSeconds = currentDate.getSeconds();
    
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');
    const hour = document.getElementById('hour');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const miliseconds = document.getElementById('miliseconds');
    year.innerHTML = contYear;
    if(contDay < 10){
        day.innerHTML = '0' + contDay ;
    } else{
        day.innerHTML = contDay ;
    }

    if(contMonth < 10){
        month.innerHTML = '0' + contMonth ;
    } else{
        month.innerHTML = contMonth ;
    }

    if(contHour < 10){
        hour.innerHTML = '0' + contHour ;
    } else{
        hour.innerHTML = contHour ;
    }

    if(contMinutes < 10){
        minutes.innerHTML = '0' + contMinutes ;
    } else{
        minutes.innerHTML = contMinutes ;
    }
    if(contSeconds < 10){
        seconds.innerHTML = '0' + contSeconds ;
    } else{
        seconds.innerHTML = contSeconds ;
    }
}
setInterval(() => {
    DateTime();
}, 1000);

DateTime();
