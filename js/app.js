let formEl = document.querySelector(".form");
let btnEl = document.querySelector(".search__btn");
let inputEl = document.querySelector(".search__input");
let divEl = document.querySelector(".write__cart");
let h2El = document.querySelector(".cart__title");
let pEl = document.querySelector(".cart__desc");
let audioEl = document.querySelector(".audio");



formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputEl.value}`)
  .then((response) => response.json())
  .then((json) => {
    json.forEach((element) => {
      console.log(element);
      h2El.innerHTML = element.word + " - " + element.phonetics[1].text.split('').slice(1, -1).join('');
   
      pEl.innerHTML = `${element.meanings[0]
        .definitions[0].definition 
        }` + "<br><br>" + `${element.meanings[0].definitions[1].definition
        }`  + "<br><br>" + `${element.meanings[0].definitions[2].definition}`
      if(element.meanings[0]
        .definitions[0].definition == undefined){
        pEl.textContent = ""
      }  
         

   
    // } ) 
    // let a = element.meanings[0].definitions
    //     for(let i = 0; i < a.length; i++){
    //         console.log(a[i].definition);
    //         let ab = document.createElement("ul")
    //         let ac = document.createElement("li")
    //         ac.textContent = a[i].definition
    //         pEl.appendChild(ab)
    //         ab.appendChild(ac)
    //         if(inputEl.value == ""){
    //             pEl.textContent = ""
    //         }
    //     }
      audioEl.setAttribute("controls", "")
      audioEl.src = element.phonetics[0].audio;
      if(element.phonetics[0].audio == ""){
        audioEl.innerHTML = "Sorry the word is not found audio "
      }
      else{
        audioEl.src = element.phonetics[0].audio;
      }
    });
  });
    
});