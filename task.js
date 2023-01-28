$(document).ready(function () {
    $("#btn").click(function () {
        var x = $("#name").val();
        var y = $("#txt").val();
        var z = $("input[type='radio']:checked").val();
        var a = $("#slc0").val();

        $("#m").html(x);
        $("#n").html(y);
        $("#o").html(z)
        $("#p").html(a);
    })

})

$(".container1").hide();
$("#btn").click(function () {
    $(".container1").show();
})

$(".workdone").hide();
$(".workundone").hide();
$(".timetaken").hide();

$("#btn1").click(function () {
    $(".workdone").show();
    $(".workundone").hide();
    $(".timetaken").hide();
})
$("#btn2").click(function () {
    $(".workdone").hide();
    $(".workundone").show();
    $(".timetaken").hide();
})
$("#btn3").click(function () {
    $(".workdone").hide();
    $(".workundone").hide();
    $(".timetaken").show();
})


var arr = [];
var table = document.getElementById("tab");
function done() {
    $(".container").find("input[type=checkbox]").each(function (index, value) {
        if ($("#c" + index).prop("checked") == true) {
            var item = {};
            item.name = $("#t" + index).text();
            item.time = $("#n" + index).val();
            arr.push(item);
        }
    });
    table.innerHTML = `<tr><th>Task</th><th>Completed</th><th>Took Time</th></tr>`
    $.each(arr, function (index, value) {
        var tr = document.createElement('tr')
        tr.innerHTML =
            ` <td>${value.name}</td>
              <td><b>True<b></td>
              <td> ${value.time} </td>`;
        {
            table.append(tr)
        }
    })
}

$(document).ready(function () {
    $("#btn2").click(function () {
        var b = $("#c0").prop("checked") ? "" : $("#c0").val();
        var c = $("#c1").prop("checked") ? "" : $("#c1").val();
        var d = $("#c2").prop("checked") ? "" : $("#c2").val();
        var e = $("#c3").prop("checked") ? "" : $("#c3").val();
        var f = $("#c4").prop("checked") ? "" : $("#c4").val();

        $("#span2").html(b);
        $("#span3").html(c);
        $("#span4").html(d);
        $("#span5").html(e);
        $("#span6").html(f);
    })

})

$(document).ready(function(){
    $("#btn3").click(function (){
        var sum=parseInt($("#c0").prop("checked") ?$("#n0").val():0)+parseInt($("#c1").prop("checked") ?$("#n1").val():0)+parseInt($("#c2").prop("checked") ?$("#n2").val():0)+parseInt($("#c3").prop("checked") ?$("#n3").val():0)+parseInt($("#c4").prop("checked") ?$("#n4").val():0);

        $("#span7").html(sum);
    })
})