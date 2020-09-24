const http = "/api/malumotlar";
alert("Dasturda kiritgan barcha ma'lumotlaringiz MongoDB malumotlar bazasida saqlanadi.");
function fe(){
      $.ajax(http).done(function (response) {
        console.log(response);
        sd(response);
      });
}

fe();

function sd(mal){
    var malm = '';
    var f = 0;
    var uzunlik = mal.length;
    //   console.log(mal[0].ism)
    for(let i = 1; i <= uzunlik; i++){
       
    malm += '<tr> <td>' + i + '</td><td>' + mal[f].ism + '</td><td>' + mal[f].familya + '</td><td>'
    + mal[f].sharif + "</td></tr>";
    $(".tab").html(malm);
    f++;
    }
}

var masm = '';
var tr = 1;
$("#qoshish").click(function () {
    //console.log(sdf);
    let settings = {
        "url": http,
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({"ism":$("#ism").val(),"familya":$("#familya").val(),"sharif":$("#sharif").val()}),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    $("#ism").val("");
        $("#familya").val("");
        $("#sharif").val("");
    fe();
});








