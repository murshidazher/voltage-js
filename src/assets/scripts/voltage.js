window.addEventListener('load', function () {
    function updateOnlineStatus() {
        clearNotifiers();
        var condition = navigator.onLine ? "online" : "offline";
        prependStatusNotifierToPage(condition);
        addCloseListener();
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});


function prependStatusNotifierToPage(condition){
    var body = document.getElementsByTagName('body');
    var notification = '<div class="' + condition + ' notifier"> ';
    notification += (condition == "online" ? "&#10003; You are connected!" : "&#8800; Your connection is lost!");
    notification += '<span class="close">&#10006;</span>';
    notification += '</div>';
    body[0].innerHTML = notification + body[0].innerHTML;
}

function clearNotifiers() {
    var elements = document.getElementsByClassName('notifier');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}


function addCloseListener(){
    var close = document.getElementsByClassName('close');
    close[0].addEventListener('click',function () {
        clearNotifiers();
    });
}
