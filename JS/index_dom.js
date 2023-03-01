import hamburguerMenu from "./menu_hanburguesa.js";
import { relojDigital, alarma } from "./reloj.js";
import { shortcuts } from "./teclado.js";


const d=document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    relojDigital("#reloj","#activar-reloj", "#desactivar-reloj");
    alarma("/EjerciciosDom/assets/alarma.mp3","#activar-alarma", "#desactivar-alarma");
    shortcuts();
})
d.addEventListener("keydown", e=>shortcuts(e));
//d.addEventListener("keyup", e=>shortcuts(e));
//d.addEventListener("keypress", e=>shortcuts(e));