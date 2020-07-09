import React from "react";

export default function Frame(el, id) {
  console.log(id);

  return (
    <div>
      <button onClick={() => test(el.id_question, id)} id={el.id_question}>
        {el.answer}
      </button>
    </div>
  );
}


function test(e, id) {
  if (id == e) {
    var el = document.getElementById(id);
    el.style.backgroundColor = "green";
  } else {
    var el = document.getElementById(id);
    el.style.backgroundColor = "green";
  }
  setTimeout(function(){ 

    window.location.reload()
}, 3000);  

}

