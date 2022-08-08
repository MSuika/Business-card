"use strict"

let click = document.getElementById('submit');
click.addEventListener('click', addData);

let arr = new Array();

function addData(){
    getData();
    arr.push({
        name:document.getElementById('full_name').value,
        email:document.getElementById('email').value,
        address:document.getElementById('address').value,
        phone:document.getElementById('phone_number').value,
        description:document.getElementById('description').value,
    });

        localStorage.setItem("localData", JSON.stringify(arr));
        addElement();

}

function getData(){
    var str = localStorage.getItem("localData");
    if (str!= null)
        arr = JSON.parse(str);
}

function addElement()
{

  let newDiv = document.createElement("div");
  const newContent = localStorage.getItem("localData");
  newDiv.append(newContent);

  let app = document.getElementById("app");
  document.body.insertBefore(newDiv, app);
}

// function addElement () {
//     // tipo array
     
//     let newElement = app.createElement('div');
//     const newContentString = JSON.stringify(newContent);
//     app.append(newContentString);
//   }

// Clear everything
let click2 = document.getElementById('clear');
click2.addEventListener('click', deleteData);

function deleteData(){
    localStorage.clear();
    location.reload();
    }
