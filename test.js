function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var output = '';
            for(var i = 0; i < data.length; i++) {
                output += '<tr>';
                output += '<td>' + data[i].id + '</td>';
                output += '<td>' + data[i].name + '</td>';
                output += '<td>' + data[i].password + '</td>';
                output += '</tr>';
            }
            document.getElementById('mytable').innerHTML = output;
        }
    };
    xhttp.open("GET", "myphp.php", true);
    xhttp.send();
}
