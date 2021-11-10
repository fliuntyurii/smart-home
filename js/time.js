window.onload = function(){
        (function(){
            const date = new Date();
            const time = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
            document.getElementById('time').innerHTML = time;
            window.setTimeout(arguments.callee, 1000);
        })();
    };
    