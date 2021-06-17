'use strict';

window.addEventListener('load', function() {
  function updateOnlineStatus() {
    clearNotifiers();
    var condition = navigator.onLine ? 'online' : 'offline';
    prependStatusNotifierToPage(condition);
    addCloseListener();
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});

function prependStatusNotifierToPage(condition) {
  var body = document.getElementsByTagName('body');
  var notification =
    '<div class="voltage_' + condition + ' voltage_notifier"> ';
  notification +=
    condition == 'online' ? 'You are connected!' : 'Your connection is lost!';
  notification += '<span class="voltage_close">&#10006;</span>';
  notification += '</div>';
  body[0].innerHTML = notification + body[0].innerHTML;
}

function clearNotifiers() {
  var elements = document.getElementsByClassName('voltage_notifier');

  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function addCloseListener() {
  var close = document.getElementsByClassName('voltage_close');
  close[0].addEventListener('click', function() {
    clearNotifiers();
  });
}
