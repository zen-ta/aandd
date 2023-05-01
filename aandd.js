function show(array) {
    var html = '';
    html = html + '<table border="1">';
    html = html + '<tr>';
    for (var i = 0; i < array.length; i++) {
        html = html + '<td>' + array[i] + '</td>';
    }
    html = html + '</tr>';
    html = html + '</table>';
    //document.getElementById('res').innerHTML = html;
    document.getElementById('res').insertAdjacentHTML('beforeend', html);
}

function createSequentiaNumbers(array,n){
    for (var j = 1;j <=n;j++){
        array.push(j);
    }
    return array;
}

function createRandomNumbers(array,n){
    for (var j = 1;j <=n;j++){
        html = Math.floor(Math.random()*10)+1;
        array.push(html);
    }
    return array;
}