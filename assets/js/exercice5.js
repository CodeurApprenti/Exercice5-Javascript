// déclaration de variable
let emailSaisi;
let positionArobase;
let emailcoupe;
let message = document.getElementById("message");

// Vérification Email Valide

function verificationemail() {
  // La méthode includes() détermine si une chaîne de caractères est contenue dans une autre et renvoie true ou false selon le cas de figure.

  emailSaisi= document.getElementById("email").value;

  // La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.

  if (emailSaisi.includes("@") && emailSaisi.includes(".")) {

    //   La fonction "indexOf()" renvoi la position de la première occurrence d'un caractère donné.
      positionArobase = emailSaisi.indexOf('@');

    //   La fonction "substring()" est utilisé pour couper une chaîne de caractère.
      emailcoupe = emailSaisi.substring(positionArobase);


    message.innerHTML =
      '<span class="text-success">Votre adresse email est valide</span>';
  } else {
    message.innerHTML =
      '<span class="text-danger">Votre adresse email est invalide</span>';
  }
}
// Ajout d'un écouteur d'événement pour vérifier si l'email est valide ou non();
// Récupère la saisie du clavier après pression de la touche immédiatement avec Keyup ou au moment du relâchement de la touche avec Keydown.

document.getElementById("email").addEventListener("keyup", verificationemail, false);
