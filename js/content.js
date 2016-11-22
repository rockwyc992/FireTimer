function FireTimer(retry) {
    if (retry < 0) {
        console.log('Fire Timer fail.');
        return;
    }
    if ('CC' in window && 'timer' in CC) {

        CC.timer.mins = 1e100;
        CC.timer.reset();
        CC.timer.clear();
        console.log('CC.timer has cleared!');
    } else {
        console.log('' + retry + ': CC.timer not found!');
        setTimeout(function () {
            FireTimer(retry - 1);
        }, 1000);
    }
}

script = document.createElement("script");
script.type = "text/javascript";
script.innerHTML = FireTimer.toString() + "FireTimer(60);";
document.head.appendChild(script);

