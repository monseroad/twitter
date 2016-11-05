function anadirTarea(){
  
   //CONTENEDOR 
   seccionTarea = document.getElementById("contenedor-tareas").value;
   
   //TAREA QUE SE AÑADIRA
   nuevaTarea = document.createElement("div");
  
   //CONTENIDO DE LA TAREA AÑADIDA
   contenidoTarea = document.getElementById("caja-tareas").value;

   //DONDE SE INGRESARA EL CONTENIDO DE LA TAREA AÑADIDA
   campoTarea = document.createElement("p");
   separacion = document.createElement("hr");
   
   //TRANSFORMAR TAREA A NODO DE TEXTO 
   nodoTarea = document.createTextNode(contenidoTareas);



  
  
}