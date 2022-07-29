const clockLabel = document.getElementById('clockLabel');
let intervale = setInterval(update, 1000);
function update(){
    let date = new Date;
    clockLabel.innerHTML = formatTime(date); 


    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm =  hours <= 12 ? 'am' : 'pm';

        hours = (hours % 12) || 12;

      hours = zeros(hours);
      minutes = zeros(minutes);
      seconds = zeros(seconds);  

return `${hours}:${minutes}:${seconds} ${amOrPm}`
    }
    function zeros(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}




