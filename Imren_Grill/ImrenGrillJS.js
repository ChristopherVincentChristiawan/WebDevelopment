var clock = document.getElementById('clock');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  clock.textContent =
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);


var displaydate = document.getElementById('displaydate')
function date() {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    displaydate.textContent =
        day + "." + month + "." + year;
}
setInterval(date, 1000);


var apply = document.getElementById('apply')
apply.addEventListener("click", displayDetails);
function displayDetails() {
    var row=1;
    var nama = document.getElementById("nama").value;
    var harga = document.getElementById("harga").value;
    var jumlah = document.getElementById("jumlah").value;
    if(!nama || !harga || !jumlah) {
        alert("Terdapat input yang kosong.");
    } else {
        var table = document.getElementById("table");
        var newRow = table.insertRow(row);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = " ";
        cell2.innerHTML = nama;
        cell3.innerHTML = jumlah + '*' + harga;
        cell4.innerHTML = jumlah*harga;

        row++;

        var array = []
        for (var i = 1; i < table.rows.length; i++)
           {
               sumVal = parseInt(table.rows[i].cells[3].innerHTML);
               array.push(sumVal)
           }

        var total=0;
        for(var i in array) { total += array[i]; }
        document.getElementById("total").innerHTML = total;

        document.getElementById("nama").value = ""
        document.getElementById("harga").value = ""
        document.getElementById("jumlah").value = ""
    }
}

var laporan = document.getElementById('laporan')
laporan.addEventListener("click", laporan_append);
var row_2=1;
function laporan_append() {

    var table_kasir = document.getElementById("table");
    var getter_nama = []
    var getter_jumlah = []
    var getter_jam = document.getElementById("clock").innerHTML;
    for (var x = 1; x < table_kasir.rows.length; x++)
    {
        names = table_kasir.rows[x].cells[1].innerHTML;
        getter_nama.push(names)

        amount = table_kasir.rows[x].cells[3].innerHTML;
        getter_jumlah.push(amount)
    }

    var table_pemasukan = document.getElementById("pemasukan");

    console.log(getter_nama);
    console.log(getter_jumlah);
    for (var y = 0; y < table_kasir.rows.length-1; y++)
    {
          table_pemasukan.innerHTML += "<tr><td>" + " " +"</td><td>" + getter_jam + "</td><td>" + getter_nama[y] + "</td><td>" + getter_jumlah[y] + "</td></tr>"

    }

    for (var y = table_kasir.rows.length-1; y > 0; y--)
    {
            table_kasir.deleteRow(y)
    }

    var total2 = document.getElementById("total");
    var empty_space1 = document.getElementById("empty_space1");
    var empty_space3 = document.getElementById("empty_space3");

    var total_pemasukan = parseInt(empty_space1.innerHTML) + parseInt(total2.innerHTML)
    var cash = parseInt(empty_space3.innerHTML) + parseInt(total2.innerHTML)
    if (cash >= 1000000){
        document.getElementById("setor").style.opacity = 1
        document.getElementById("setor").style.pointerEvents = "auto"
    }

    empty_space1.innerHTML = total_pemasukan;
    empty_space3.innerHTML = cash;

}


var rincian= document.getElementById('setor')
rincian.addEventListener("click", transfer);
function transfer() {
    var getter_transfer = document.getElementById("empty_space2");
    var getter_cash = document.getElementById("empty_space3");
    getter_cash.innerHTML = parseInt(getter_cash.innerHTML) - 1000000
    getter_transfer.innerHTML = parseInt(getter_transfer.innerHTML) + 1000000
    if (parseInt(getter_cash.innerHTML) < 1000000){
        document.getElementById("setor").style.opacity = 0
        document.getElementById("setor").style.pointerEvents = "none"
        return;
    }
}
