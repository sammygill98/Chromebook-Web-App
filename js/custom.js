function checkSearchBySchool() {
  if(options[options.selectedIndex].value == "school") {
    document.getElementById("school-options").style.display = "inline";
    changeCurrentRooms();
  }
  else {
    document.getElementById("school-options").style.display = "none";
  }
}

function hideSchoolRooms() {
  document.getElementById("marshall-rooms").style.display = "none";
  document.getElementById("fremont-rooms").style.display = "none";
  document.getElementById("sutter-rooms").style.display = "none";
  document.getElementById("malaga-rooms").style.display = "none";
  document.getElementById("fhs-rooms").style.display = "none";

}

function changeCurrentRooms() {
  hideSchoolRooms();

  var selectOptions = document.getElementById("school-options").options;
  var selectedIndex = document.getElementById("school-options").selectedIndex;
  var school = selectOptions[selectedIndex].value;
  school = school.concat("-rooms");
  document.getElementById(school).style.display = "inline";
}


function fillEditData(school, room, asset, serial, model, status) {
  school = school.toLowerCase();
  var roomOptionsString = school.concat("-rooms");
  var roomOptions = document.getElementById(roomOptionsString).innerHTML;

  document.getElementById("edit-school-select").value = school;
  document.getElementById("edit-room-field").innerHTML = roomOptions;
  document.getElementById("edit-room-field").value = room;
  document.getElementById("edit-asset-field").value = asset;
  document.getElementById("edit-serial-field").value = serial;
  document.getElementById("edit-model-select").value = model;
  document.getElementById("edit-physical-status-select").value = status;
  document.getElementById("original-asset").value = asset;
}

function checkAscending(columnName) {
  var rows = document.getElementsByClassName(columnName);
  for(i = 0; i < (rows.length - 1); i++) {
    if(rows[i + 1].innerHTML < rows[i].innerHTML) {
      return true;
    }
  }
  return false;
}

function sortTable(columnName) {
  if(checkAscending(columnName)) {
    sortAscending(columnName);
  }
  else {
    sortDescending(columnName);
  }
}


function sortAscending(columnName) {
  var rows = document.getElementsByClassName(columnName);
  for(i = 0; i < (rows.length); i++) {
    var indexElement = rows[i].innerHTML;
    var j = i;
    while( j > 0 && (rows[j-1].innerHTML > indexElement)) {
      var parentRow = document.getElementById("resultTable").rows[j];
      var childRow = document.getElementById("resultTable").rows[j + 1];
      var table = parentRow.parentNode;
      table.insertBefore(childRow, parentRow);
      j--;
    }
  }
}

function sortDescending(columnName) {
  var rows = document.getElementsByClassName(columnName);
  for(i = 0; i < (rows.length); i++) {
    var indexElement = rows[i].innerHTML;
    var j = i;
    while( j > 0 && (rows[j-1].innerHTML < indexElement)) {
      var parentRow = document.getElementById("resultTable").rows[j];
      var childRow = document.getElementById("resultTable").rows[j + 1];
      var table = parentRow.parentNode;
      table.insertBefore(childRow, parentRow);
      j--;
    }
  }
}
