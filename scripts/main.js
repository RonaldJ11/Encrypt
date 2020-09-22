//instanciar el objeto
import Btree from "./model/tree.js";

/**
 *
 */
function encryptOrDecrypt(text, code, today, typeOperation) {
  if (text.length > 5000) {
    var toastHTML =
      '<span>Exedio el Tamaño del texto</span><button class="btn-flat toast-action">Ok</button>';
    M.toast({ html: toastHTML });
    return "";
  }
  if (code.length > 10) {
    var toastHTML =
      '<span>Exedio el Tamaño de la clave</span><button class="btn-flat toast-action">Ok</button>';
    M.toast({ html: toastHTML });
    return "";
  }
  for (let index = 0; index < code.length; index++) {
    if (code.charCodeAt(index) <= 48 && code.charCodeAt(index) >= 57) {
      var toastHTML =
        '<span>Solo se admite numeros en la clave</span><button class="btn-flat toast-action">Ok</button>';
      M.toast({ html: toastHTML });
      return "";
    }
  }

  var btree = new Btree();
  var word = "";
  for (let index = 0; index < code.length; index++) {
    btree.add(code.charAt(index));
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

  return word;
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
    contenido.innerHTML = `${encryptOrDecrypt(message, code, today, true)}`;
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
    contenido.innerHTML = `${encryptOrDecrypt(message, code, today, false)}`;
    document.getElementById("id_mensaje").value=null;
    document.getElementById("id_clave").value=null;
    document.getElementById("id_date").value=null;
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