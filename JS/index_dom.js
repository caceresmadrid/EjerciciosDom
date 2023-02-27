import hamburguerMenu from "./menu_hanburguesa.js";
import { relojDigital, alarma } from "./reloj.js";

const d=document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    relojDigital("#reloj","#activar-reloj", "#desactivar-reloj");
    alarma("/EjerciciosDom/assets/alarma.mp3","#activar-alarma", "#desactivar-alarma");
})
