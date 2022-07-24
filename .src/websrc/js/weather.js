let xmlhttp=new XMLHttpRequest();

xmlhttp.open
("get","https://devapi.qweather.com/v7/weather/now?key=0d5f7fe72fed436ba39649f69061273a&location=140.85,36.31")
xmlhttp.send();
xmlhttp.onreadystatechange=()=>{
    if(xmlhttp.readyState==4){
        if(xmlhttp.status==200||
xmlhttp.status==304){
            console.log(JSON.parse(xmlhttp.responseText).now.temp);
            const data = JSON.parse(xmlhttp.responseText)
            Object.keys(data.now).forEach(key => {
                if (document.getElementById(key)) {
                    document.getElementById(key).innerHTML = data.now[key];
                }
            })
            
        }
    }
}