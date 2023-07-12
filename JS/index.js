function solicitudAJAX(params) {
    var url = "https://pokeapi.co/api/v2/pokemon/";
    let tarjetas = document.querySelector("#nPokemon");
    var objXMLHttpRequest = new XMLHttpRequest();
  
    objXMLHttpRequest.onreadystatechange = function () {
      if (objXMLHttpRequest.readyState === 4) {
        if (objXMLHttpRequest.status === 200) {
          let json = JSON.parse(objXMLHttpRequest.responseText);
          tarjetas.data = json;
          for (let i = 0; i < json.results.length; i++) {
            buscarPorURL(json.results[i].url);
          }
        } else {
          alert("Error Code: " + objXMLHttpRequest.status);
          alert("Error Message: " + objXMLHttpRequest.statusText);
        }
      }
    };
    objXMLHttpRequest.open("GET", url +"?limit=600");
    objXMLHttpRequest.send();
  }
  
  function buscarPorURL(urlPokemon) {
    var objXMLHttpRequest = new XMLHttpRequest();
    let div = document.querySelector("#ConteinerCard");
  
    objXMLHttpRequest.onreadystatechange = function () {
      if (objXMLHttpRequest.readyState === 4) {
        if (objXMLHttpRequest.status === 200) {
          let json = JSON.parse(objXMLHttpRequest.responseText);
          let nombre = json.name;
          let uriImg = json.sprites.other.home.front_default;
  
          let html =
            `<div class="card" style="width: 18rem;">
    <img src="` +
            uriImg +
            `" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">` +
            nombre +
            `</h5>
      <p class="card-text"></p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
          div.appendChild(html);
          console.log(div);
        } else {
          alert("Error Code: " + objXMLHttpRequest.status);
          alert("Error Message: " + objXMLHttpRequest.statusText);
        }
      }
    };
    objXMLHttpRequest.open("GET", urlPokemon);
    objXMLHttpRequest.send();
  }
  
  function busca() {
    let tarjetas = document.querySelector("#ConteinerCard");
    var data = document.querySelector("#nPokemon").data;
    var busqueda = document.querySelector("#nPokemon").value ;
  
    if (busqueda >= 0 && busqueda <601) {
        
    var url = data.results[busqueda-1].url;
      var objXMLHttpRequest = new XMLHttpRequest();
  
      objXMLHttpRequest.onreadystatechange = function () {
        if (objXMLHttpRequest.readyState === 4) {
          if (objXMLHttpRequest.status === 200) {
            let json = JSON.parse(objXMLHttpRequest.responseText);
          let nombre = json.name;
          let nombreMayus = nombre.charAt(0).toUpperCase() + nombre.slice(1);
          let uriImg = json.sprites.other.home.front_default;
          let pokeID = json.id;
          let pokeHP = json.stats[0].base_stat;
          let pokeATK = json.stats[1].base_stat;
          let pokeDEF = json.stats[2].base_stat;
          let pokeSPD = json.stats[5].base_stat;
          console.log(json)
          let html =
          `<div class="card" style="width: 18rem;">
          <img src="` +
                  uriImg +
                  `" class="card-img-top" alt="...">
          <div class="card-body"> <h3 class="card-title ftimpact">`+
                  nombreMayus +
                  `</h3>
                  <span class="badge bg-secondary ftmonospace mb-3">` +
                     pokeID +
                     `</span>
            <h5 class="card-text"><b>HP: </b>` +
                  pokeHP +
                  `&nbsp <b>ATK: </b>` +
                  pokeATK +
                  `<br> <b>DEF: </b>` +
                  pokeDEF +
                  `&nbsp <b>SPEED: </b>` +
                  pokeSPD +
            `</h5><a href="https://www.wikidex.net/wiki/` +
                nombreMayus +
            `" class="btn btn-primary">Ver más</a>
          </div>
        </div>`;
            tarjetas.innerHTML = html;
          } else {
            alert("Error Code: " + objXMLHttpRequest.status);
            alert("Error Message: " + objXMLHttpRequest.statusText);
          }
        }
      };
      objXMLHttpRequest.open("GET", url);
      objXMLHttpRequest.send();
    } else {
      alert("NOOOOOOOOOOOOOOOOOOOOOOOO , pofavor ingrese un numero valido entre el 1 y el 600 porfa :D");
      console.log("NOOOOO");
    }
  }
  