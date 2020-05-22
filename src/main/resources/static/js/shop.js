function addCart(id) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('post', '/addCart');
    xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4)
            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                if (data) {
                    alert('加入成功！');
                } else {
                    alert("请先登录！");
                }
            }
    };
    xhr.send("id=" + id);
}

function buyOne(id) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('post', '/buyOne');
    xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4)
            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                if (data) {
                    alert('购买成功！');
                } else {
                    alert("请先登录！");
                }
            }
    };
    xhr.send("id=" + id);
}