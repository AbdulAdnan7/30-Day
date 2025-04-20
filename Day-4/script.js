function updatetime() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

   hours = hours < 10 ? "0" + hours : hours;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;

    const Display = `${hours}:${minutes}:${seconds}`;

    const clock = document.getElementById('time').textContent = Display;

}

 setInterval(updatetime, 1000);


 updatetime()