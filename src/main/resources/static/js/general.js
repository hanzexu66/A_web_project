window.onload = isOnline;

function logout() {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('post', '/logout');
    xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4)
            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                if (data) {
                    alert('退出成功！');
                    window.location.href = "/html/homePage.html";
                }
            }
    };
    xhr.send();
}

function isOnline() {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('post', '/isOnline');
    xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4)
            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                var lo = document.getElementById('lo');
                var cr = document.getElementById('cr');
                var od = document.getElementById('od');
                var lg = document.getElementById('lg');
                if (data == '-1') {
                    lo.style.visibility = 'hidden';
                    od.style.visibility = 'hidden';
                    cr.style.visibility = 'hidden';
                    lg.style.visibility = 'visible';
                    return false;
                } else {
                    lg.style.visibility = 'hidden';
                    lo.style.visibility = 'visible';
                    od.style.visibility = 'visible';
                    cr.style.visibility = 'visible';
                    return true;
                }
            }
    };
    xhr.send();
}