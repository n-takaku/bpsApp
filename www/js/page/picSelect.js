// This is a JavaScript file

// スワイプを検知したあとの処理
function swipeEvent(direction) {
    if (direction == 'right'){
      alert('右');
      location.href = "../index.html";
    } else if (direction == 'left'){
      alert('左');
    }
}