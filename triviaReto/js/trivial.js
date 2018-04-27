var contador=0;

//Funcion que da la bienvenida y pregunta si desea jugar
function enter()
{
  // esconder el div1 de clase contaner
  document.getElementById("div1").setAttribute("class", "divClass");

  var name = document.getElementById("name").value;
  name = name.toUpperCase();
  document.getElementById("showName").innerHTML = "BIENVENIDA " + name + " !!";

  // Salto de linea
  //txt = document.getElementById("showName").createElement('<br>');
  //contenedor.appendChild(txt);

  document.getElementById("play").innerHTML = "¿Te gustaría jugar =)?";

  var buttonYes = document.createElement("BUTTON");
  var textButtonYes = document.createTextNode("ACEPTAR");
  buttonYes.appendChild(textButtonYes);
  document.getElementById("play").appendChild(buttonYes);
  buttonYes.onclick = function()
  {
    accept();
  }

  var buttonNo = document.createElement("BUTTON");
  var textButtonNo = document.createTextNode("CANCELAR");
  buttonNo.appendChild(textButtonNo);
  document.getElementById("play").appendChild(buttonNo);
  buttonNo.onclick = function()
  {
    cancel();
  }
}

//Funcion que muestra si el usuario no desea jugar
 function cancel()
 {
  //ocultar la caja de bienvenida
  document.getElementById("showName").setAttribute("class","welcomeClass");
  document.getElementById("play").setAttribute("class","playClass");

  document.getElementById("question1").innerHTML = "QUE PENA!";
  }

//Funcion que empieza el juego
function accept()
{
  //ocultar la caja de bienvenida
  document.getElementById("showName").setAttribute("class","welcomeClass");
  document.getElementById("play").setAttribute("class","playClass");

  document.getElementById("question1").innerHTML = "";

  // parrafo que contiene la pregunta
  var pQuestion1 = document.createElement("P");
  var textQuestion1 = document.createTextNode("1.¿Como se escribe un comentario en HTML?");
  pQuestion1.appendChild(textQuestion1);
  document.getElementById("question1").appendChild(pQuestion1);

  // creando tabla que contiene las alternativas
  var x = document.createElement("UL");
  x.setAttribute("id", "myUL");
  document.getElementById("question1").appendChild(x);

  var ya = document.createElement("LI");
  var t = document.createTextNode("-- Esto es un comentario");
  ya.appendChild(t);
  document.getElementById("myUL").appendChild(ya);
  ya.onclick = function()
  {
    question2();

  }

  var yb = document.createElement("LI");
  var t = document.createTextNode("<!-- Esto es un comentario -->");
  yb.appendChild(t);
  document.getElementById("myUL").appendChild(yb);
  yb.onclick = function()
  {
    question2();
    contador = contador + 2;
    console.log(contador);
  }

  var yc = document.createElement("LI");
  var t = document.createTextNode("# Esto es un comentario");
  yc.appendChild(t);
  document.getElementById("myUL").appendChild(yc);
  yc.onclick = function()
  {
    question2();
  }
}
//***************************************
function question2()
{
  //escondiendo la primera pregunta
  document.getElementById("question1").setAttribute("class","preguntaClass");

  var pQuestion1 = document.createElement("P");
  var textQuestion1 = document.createTextNode("2. Para terminar las instrucciones en Javascript se utiliza?");
  pQuestion1.appendChild(textQuestion1);
  document.getElementById("question2").appendChild(pQuestion1);

  // creando tabla
  var x = document.createElement("UL");
  x.setAttribute("id", "myUL2");
  document.getElementById("question2").appendChild(x);

// creando tabla que contiene las alternativas
  var ya = document.createElement("LI");
  var t = document.createTextNode("Un punto y coma");
  ya.appendChild(t);// crear el atributo id = myUl
  document.getElementById("myUL2").appendChild(ya);
  ya.onclick = function()
  {
    question3();
    contador = contador + 2;
    console.log(contador);

  }

  var yb = document.createElement("LI");
  var t = document.createTextNode("Un punto y coma o una salto de línea");
  yb.appendChild(t);
  document.getElementById("myUL2").appendChild(yb);
  yb.onclick = function()
  {
    question3();
  }

  var yc = document.createElement("LI");
  var t = document.createTextNode("La sentencia End");
  yc.appendChild(t);
  document.getElementById("myUL2").appendChild(yc);
  yc.onclick = function()
  {
    question3();
  }
}
//***************************************
function question3()
{
  //escondiendo la segunda pregunta
  document.getElementById("question2").setAttribute("class","preguntaClass");
  var pQuestion1 = document.createElement("P");
  var textQuestion1 = document.createTextNode("3.¿Qué etiqueta de HTML se emplea para escribir código JavaScript?");
  pQuestion1.appendChild(textQuestion1);
  document.getElementById("question3").appendChild(pQuestion1);

  // creando tabla
  var x = document.createElement("UL");
  x.setAttribute("id", "myUL3");
  document.getElementById("question3").appendChild(x);

  var ya = document.createElement("LI");
  var t = document.createTextNode("<script>");
  ya.appendChild(t);
  document.getElementById("myUL3").appendChild(ya);
  ya.onclick = function()
  {
    result();
  }

  var yb = document.createElement("LI");
  var t = document.createTextNode("<scripting>");
  yb.appendChild(t);
  document.getElementById("myUL3").appendChild(yb);
  yb.onclick = function()
  {
    result();
  }

  var yc = document.createElement("LI");
  var t = document.createTextNode("<javascript>");
  yc.appendChild(t);
  document.getElementById("myUL3").appendChild(yc);
  yc.onclick = function()
  {
    contador = contador + 2;
    console.log(contador);
    result();
  }
}
//*********************RESULTADO FINAL *************************************
function result()
{
  //escondiendo la tercera pregunta
  document.getElementById("question3").setAttribute("class","preguntaClass");
  if(contador>=4)
  {
    document.getElementById("rpta").innerHTML = "MUY BIEN... ERES UNA GENIO!";
  }
  else
  {
    document.getElementById("rpta").innerHTML = "QUE PENA!!";
  }
}
