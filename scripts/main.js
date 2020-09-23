//instanciar el objeto
import Btree from "./model/tree.js";

/**
 *
 */
function encryptOrDecrypt(text, code, today, typeOperation) {
  if(validateInfo(text,code,today)==false){
    return "";
  }
  var btree = new Btree();
  var word = "";
  var ac = true;
  for (let index = 0; index < code.length; index++) {
    if(ac&&(index+2)>=code.length){ 
      btree.add(code.charAt(index)+code.charAt(index));
      console.log();
    }else{
      btree.add(code.charAt(index));
    }
  
  }
  btree.add(today.getDate());
  btree.add(today.getMonth() + 1);
  btree.add(Math.trunc(today.getFullYear() / 100));
  btree.add(today.getFullYear() - Math.trunc(today.getFullYear() / 100) * 100);
  var password = btree.searchLeaf(new Array());
  if (typeOperation) {
    for (let index = 0; index < text.length; index++) {
      var pos =
        text.charCodeAt(index) + (password[index % password.length] % 255);
      word += String.fromCharCode(pos); // returns 'ABC'
    }
    M.toast({
      html: "Encriptado!  desliza para ver tu mensaje",
      classes: "rounded",
    });
  } else {
    for (let index = 0; index < text.length; index++) {
      var pos =
        text.charCodeAt(index) - (password[index % password.length] % 255);
      word += String.fromCharCode(pos); // returns 'ABC'
    }
    M.toast({
      html: "Desencriptado!  desliza para ver tu mensaje",
      classes: "rounded",
    });
 }

    ac = false;return word;
}


function validateInfo(text,code,today){
  if (text.length > 5000) {
    var toastHTML =
      '<span>Excedio el Tamaño del texto</span><button class="btn-flat toast-action">Ok</button>';
    M.toast({ html: toastHTML });
    return false;
  }
  if (code.length > 10) {
    var toastHTML =
      '<span>Excedio el Tamaño de la clave</span><button class="btn-flat toast-action">Ok</button>';
    M.toast({ html: toastHTML });
    return false;
  }
  if (code.length==0) {
    var toastHTML =
    '<span>Inserta codigo</span><button class="btn-flat toast-action">Ok</button>';
    M.toast({ html: toastHTML });
      return false;
  }

  if (text.length==0) {
    var toastHTML =
    '<span>Inserta Mensaje </span><button class="btn-flat toast-action">Ok</button>';
    M.toast({ html: toastHTML });
      return false;
  }
  for (let i = 1; i < code.length; i++) {
    for (let j = 0; j < i; j++) {
    if (code.charCodeAt(i)==code.charCodeAt(j)) {
      var toastHTML =
        '<span>No se pueden repetir numeros en el codigo</span><button class="btn-flat toast-action">Ok</button>';
      M.toast({ html: toastHTML });
      return false;
    }
  }
}


  for (let index = 0; index < code.length; index++) {
    if (code.charCodeAt(index) < 47 || code.charCodeAt(index) > 58) {
      var toastHTML =
        '<span>Solo se admite numeros en la clave</span><button class="btn-flat toast-action">Ok</button>';
      M.toast({ html: toastHTML });
      return "";
    }
  }
}

//metodo recibe coge la informacion y la encripta5
var contenido = document.getElementById("parrafo");
var buttonEncriptar = document.getElementById("Encriptar");
if (buttonEncriptar != null) {
  buttonEncriptar.onclick = function (e) {
    e.preventDefault();
    var message = document.getElementById("id_mensaje").value;
    var code = document.getElementById("id_clave").value;
    var today = new Date();
    var textV = encryptOrDecrypt(message, code, today, true);
    contenido.innerHTML = textV;
    if (textV!="") {
      var elem = document.getElementById("modal2");
      var instance = M.Modal.getInstance(elem);
      instance.open();
    }
  };
}

//metodo recibe coge la informacion y la encripta5
var buttonDesencriptar = document.getElementById("Desencriptar");
if (buttonDesencriptar != null) {
  buttonDesencriptar.onclick = function (e) {
    e.preventDefault();
    var message = document.getElementById("id_mensaje").value;
    var code = document.getElementById("id_clave").value;
    var today = new Date(document.getElementById("id_date").value);
    var textV = encryptOrDecrypt(message, code, today, false);
    contenido.innerHTML = textV;
    if (textV!="") {
      var elem = document.getElementById("modal2");
      var instance = M.Modal.getInstance(elem);
      instance.open();
    }
  };
}
var cerrar = document.getElementById("cerrar");
if (cerrar != null) {
  cerrar.onclick = function (e) {
    e.preventDefault();
    location.reload();
  };
  }
  var limpiar = document.getElementById("Limpiar");
    if (limpiar != null) {
      limpiar.onclick = function (e) {
        e.preventDefault();
        location.reload();
      };
    }