// This is a JavaScript file

// スワイプを検知したあとの処理
function swipeEvent(direction) {
    if (direction == 'right'){
      alert('右');
      location.href = "page/camera.html";
    } else if (direction == 'left'){
      alert('左');
      location.href = "page/picSelect.html";
    }
}