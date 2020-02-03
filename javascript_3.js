function button_1()
{
  //console.log("button 1");
  let oldText = document.querySelector("#p_text").innerHTML;
  let newText = document.querySelector("#login_id").value;
  document.querySelector("#login_id").value = oldText;
  document.querySelector("#p_text").innerHTML = newText;
}

function button_2()
{
  console.log("button 1");
}
