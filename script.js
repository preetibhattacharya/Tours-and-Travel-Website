
function read() {
  var less, more, button;
  var less = document.getElementById("less");
  var more = document.getElementById("more");
  var button = document.getElementById("read_more");
  if (less.style.display === "none") {
    less.style.display = "inline";
    button.innerHTML = "Learn More";
    more.style.display = "none";
  }
  else {
   less.style.display = "none";
    button.style.display = "none";
    more.style.display = "inline";
  }


}
function less() {
  var less, more, button;
  var less = document.getElementById("less");
  var more = document.getElementById("more");
  var button = document.getElementById("view_less");

  if (more.style.display === "none") {

    button.style.display = "none";
  }
  else {
   more.style.display = "inline";
    more.style.display = "none";
           }

}




var counter=1;
setInterval(function(){
  document.getElementById('radio'+ counter).checked= true;
  counter++;
   if (counter>5){
    counter=1;
  }
}, 5000);


  let togglebtn=document.querySelector('.toggle_btn');
  let togglebtnicon=document.querySelector('.toggle_btn i');
  let dropdown=document.querySelectorall('.dropdown_menu');
togglebtn.onclick = function(){
  dropdown.classList.toggle('open');
  let isopen=dropdown.classList.contains('open')
  togglebtnicon.classlist=isopen
  ? 'fa-solid fa-xmark'
  : 'fas fa-bars'
}

