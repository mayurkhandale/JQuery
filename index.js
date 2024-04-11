$(document).ready(function () {
  var store = [];
  var flag = false;
  $('.add-user').hide()
  function apiCall() {
    return $.ajax({
      url: "index.json",
      success: function (result) {
        console.log(result, "3:::");
        store = result;
      },
    });
  
  }
  var empID = $('#empId').val();
  var empName = $('#empName').val();
  var empDesg = $('#empDesg').val();
  if(empID && empName && empDesg){
    
  }else{
    $('.submit-btn').attr("disabled",true)
  }
  console.log(empID,empName,empDesg,'17::')
  async function getData() {
    $("#overlay").fadeIn(300);
    try {

      store = await apiCall();
      console.log(store, "12::");
      $('#myTable').css({ 'text-align': "center", "margin-left": "auto", "margin-right": "auto", "border": "1px solid black" })
      var myTable = $('#myTable tbody')
      console.log(myTable, store, 'result')
      $.each(store, function (item, i) {
        console.log(item, '23::')
        var newRow = $('<tr>')
        newRow.append('<td>' + i.id + '</td>')
        newRow.append('<td>' + i.name + '</td>')
        newRow.append('<td>' + i.desgn + '</td>')
        newRow.append('<td ><i class="fa fa-trash" aria-hidden="true"></i></td>')
        if (i.flag) {
          newRow.append('<td  class="tick-green"><i class="fa fa-check" aria-hidden="true"></i></td>')
        } else {
          newRow.append('<td  class="tick-red"><i class="fa fa-times" aria-hidden="true"></i></td>')
        }
        $("tr:even").css("background-color", "#eeeeee");
        $("tr:odd").css("background-color", "#ffffff");
        myTable.append(newRow)
      })
      $('.fa').removeAttr("display")
      $('.fa-trash').click(function () {

        console.log('trigger',)
        var flag = window.confirm('Are you want to Delete');

        if (flag) {
          console.log(flag, $(this).parent('tr'), '37::')

          $(this).parents('tr').first().remove();
          if ($("#myTable").find('tr').length == 1) {
            $('#myTable').after('<div class="no-records"> No Records Found..!</div>')
          }

        }

      })
      console.log(myTable, '23::');

      return store;
    } catch (err) {
      console.log(err);
    }
  }
  console.log(store, "333::");
  console.log("page isd Ready..");
  var $heading = "<h1>JQuery Practice </h1>";
  $(".heading").append($heading);
  $('.heading').attr('title', "J Query Practice").css('color', 'red')
  $(".heading").css({ "text-align": "center", "color": "red" });
  var $img =
    '<img src="https://w7.pngwing.com/pngs/720/46/png-transparent-jquery-plain-wordmark-logo-icon-thumbnail.png" alt="image not Found"/>';
  $(".heading").append($img);
  $('.heading').find("img").css({
    width: "150px",
    height: "150px",
    "border-radius": "20px",
    border: "1px solid  red",
    opacity: "0.5",
  });
  $btn = '<button class="btnClick">click here</button>';
  $(".btnAdd").append($btn);

  $(".btnModel").click(function () {
    console.log("enter");

    $(".checkModal").toggle();
    let flag = $(".checkModal").css("display") == "none";
    if (flag) {
      $(".btnModel").addClass("fa fa-trash");
      $(".btnModel").removeClass("fa-home");
    } else {
      $(".btnModel").addClass("fa fa-home");
      $(".btnModel").removeClass("fa-trash");
    }
  });
  $inputField =
    '<input class="variable-search" type="text" placeholder="search name here"/>';
  $(".variable").append($inputField);
  $(".variable-search").on("keyup", _onSearch);

  function _onSearch() {
    var cvalue = $(this).val().toLowerCase();

    var filterData = store.filter(
      (items) => cvalue && items.name.includes(cvalue)
    );
    console.log(filterData, "56::;");

    $(".list").empty();
    if (filterData.length) {
      filterData.forEach((items) => {
        $(".list").append(`<div class="list-item">${items.name}</div>`);
      });
    } else {
      $(".list").append(`<div class="list-item">Does not found Data</div>`);
    }
    console.log(filterData, "trigger");
  }
  $(".btnClick").click(function () {
    console.log("trigger");
    $(".checkModal").toggle();
  });
  $(".clickMe").on("click", myFun);
  function myFun() {
    $('body').css('background-image', 'url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg)')
    let randomValue = Math.random();
    $(".random").html(randomValue);
  }
  getData()

  $('.a1 + .b1').before($('<div class="new">Middle</div>'));

  // How to scroll page to 1000px from top on page load using jQuery?
  $('html, body').animate({
    scrollTop: $("table").offset().top + 1000
  }, 2000);
  var pTag = $('.lorem');
  $('.btnWrap').click(function () {
    console.log('wrap', pTag)
    if (pTag.parent().is("div")) {
      pTag.unwrap()
    }
    else {
      pTag.wrap('<div class="wrap-div"></div>')
    }
  })
  $('.mr').click(function () {
    console.log("trigerrr")
  });

  $('.show-employee').click(function () {
    $('body').css('background-image', 'url()')
    $('.add-user').toggle('slow')
    var data = $('.add-user').css('display')
    if (data == 'block') {
      $('.show-employee').text('Cancel')
    } else {
      $('.show-employee').text('Add Employee')
    }
  })
  console.log('hii i am reddy');
  $('.submit-btn').click(function () {
    var myTable = $('#myTable tbody')
    var empID = $('#empId').val();
    var empName = $('#empName').val();
    var empDesg = $('#empDesg').val();
    console.log(empID, empName, empDesg, '164:::')
    var newAdd = $('<tr/>');
    newAdd.append(`<td>${empID}</td>`);
    newAdd.append(`<td>${empName}</td>`);
    newAdd.append(`<td>${empDesg}</td>`);
    newAdd.append('<td ><i class="fa fa-trash" aria-hidden="true"></i></td>')
    newAdd.append('<td  class="tick-green"><i class="fa fa-check" aria-hidden="true"></i></td>')
    myTable.append(newAdd);
    var empID = $('#empId').val('');
    var empName = $('#empName').val('');
    var empDesg = $('#empDesg').val('');
  })

});
