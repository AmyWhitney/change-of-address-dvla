$("#next").on("click",function(e){
  e.preventDefault();
  var whatDoYouWantToDo = $("input[name='what-do-you-want-to-do']:checked").val();
  console.log(whatDoYouWantToDo);
  if(whatDoYouWantToDo == "change-v5c"){
    window.location = "#";
  }
  if(whatDoYouWantToDo == "change-licence"){
    window.location = "driving-licence";
  }
  if(whatDoYouWantToDo == "change-v5c change-licence"){
    window.location = "sign-in";
  }
})
