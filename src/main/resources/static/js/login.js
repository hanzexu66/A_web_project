function login() {
    var email = document.getElementById('email1').value;
    var password = document.getElementById('psw1').value;
    if (email == "" || password == "") {
        alert("用户名或密码不能为空！");
        return;
    }
    login_ajax();
}

function login_ajax() {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var email = document.getElementById('email1').value;
    var password = document.getElementById('psw1').value;
    xhr.open('post', '/loginin');
    xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4)
            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                if (data) {
                    alert('登录成功！');
                    window.location.href = "../html/homePage.html";
                } else {
                    alert("用户名或密码不正确！");
                }
            }
    };
    xhr.send("email=" + email + '&password=' + password);
}

function register() {
    var email = document.getElementById('email2').value;
    var password = document.getElementById('psw2').value;
    var firstname = document.getElementById('name1').value;
    var secondname = document.getElementById('name2').value;
    if (email == "" || password == "" || firstname == "" || secondname == "") {
        alert("请将注册信息填写完整！");
        return;
    }
    register_ajax();
}

function register_ajax() {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var password = document.getElementById('psw2');
    xhr.open('post', '/register');
    xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4)
            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                if (data) {
                    alert('注册成功！');
                    window.location.href = "../html/login.html";
                } else {
                    alert("用户名已存在！");
                }
            }
    };
    xhr.send("email=" + document.getElementById('email2').value + '&password=' + password.value);
}