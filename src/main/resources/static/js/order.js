function findOrder() {
    isOnline();
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('post', '/findOrder');
    xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4)
            if (xhr.status == 200) {
                data = JSON.parse(xhr.responseText);
                for (var i = 0; i < data.length; i++) {
                    var a = data[i].id;
                    var b = data[i].num;
                    var c = data[i].tim;
                    var d = b * 3000;
                    var para = document.createElement("table");
                    var node1 = document.createElement("colgroup");
                    var node2 = document.createElement("tbody");
                    var node11 = document.createElement("col");
                    var node12 = document.createElement("col");
                    var node13 = document.createElement("col");
                    var node14 = document.createElement("col");
                    var node21 = document.createElement("tr");
                    var node211 = document.createElement("td");
                    var node212 = document.createElement("td");
                    var node213 = document.createElement("td");
                    var node214 = document.createElement("td");
                    var node2111 = document.createElement("div");
                    var node21111 = document.createElement("div");
                    var node21112 = document.createElement("div");
                    var node211111 = document.createElement("img");
                    node11.className = "bought-table-mod__col1___3kNhV";
                    node12.className = "bought-table-mod__col3___262xB";
                    node13.className = "bought-table-mod__col2___262xB";
                    node14.className = "bought-table-mod__col2___262xB";
                    node211.style.height = "100px";
                    node2111.style.height = "100px";
                    para.className = "bought-table-mod__table___1MPLL";
                    switch (a) {
                        case 1:
                            node211111.src = "../css/images/10S.png";
                            var node211121 = document.createTextNode("10s 10S 6GB+64GB 全网通版（幻夜黑）");
                            break;
                        case 2:
                            node211111.src = "../css/images/20.png";
                            var node211121 = document.createTextNode("20 荣耀20青春版 AMOLED屏幕指纹");
                            break;
                        case 3:
                            node211111.src = "../css/images/20pro.png";
                            var node211121 = document.createTextNode("20pro 荣耀20 PRO 4800万全焦段AI四摄");
                            break;
                        case 4:
                            node211111.src = "../css/images/mate30.png";
                            var node211121 = document.createTextNode("mate30 HUAWEI Mate 30 Pro 5G ");
                            break;
                        case 5:
                            node211111.src = "../css/images/nova5.png";
                            var node211121 = document.createTextNode("nova5 HUAWEI nova 5i 2400万AI四摄 ");
                            break;
                        case 6:
                            node211111.src = "../css/images/nova6.png";
                            var node211121 = document.createTextNode("nona6 HUAWEI nova 6 5G双模全网通 ");
                            break;
                        case 7:
                            node211111.src = "../css/images/play3.png";
                            var node211121 = document.createTextNode("play3 荣耀Play3 6.39英寸魅眼全视屏 ");
                            break;
                        case 8:
                            node211111.src = "../css/images/v30.png";
                            var node211121 = document.createTextNode("v30 荣耀V30 双模5G 麒麟990 ");
                            break;
                    }
                    node211111.style.height = "100px";
                    node211111.style.width = "100px";
                    node21111.style.width = "100px";
                    node21111.style.float = "left";
                    node21111.style.margin = "25px 0 0 10px";
                    node21112.style.height = "100px";
                    node21112.style.margin = "0 0 0 90px";
                    node21112.style.padding = "55px 0 0 0";
                    var node2121 = document.createTextNode(c);
                    var node2131 = document.createTextNode(b);
                    var node2141 = document.createTextNode(d);

                    para.appendChild(node1);
                    para.appendChild(node2);
                    node1.appendChild(node11);
                    node1.appendChild(node12);
                    node1.appendChild(node13);
                    node1.appendChild(node14);
                    node2.appendChild(node21);
                    node21.appendChild(node211);
                    node21.appendChild(node212);
                    node21.appendChild(node213);
                    node21.appendChild(node214);
                    node211.appendChild(node2111);
                    node2111.appendChild(node21111);
                    node2111.appendChild(node21112);
                    node21111.appendChild(node211111);
                    node21112.appendChild(node211121);
                    node212.appendChild(node2121);
                    node213.appendChild(node2131);
                    node214.appendChild(node2141);

                    var div = document.getElementById("content");
                    div.appendChild(para);
                }
            }
    };
    xhr.send();
}