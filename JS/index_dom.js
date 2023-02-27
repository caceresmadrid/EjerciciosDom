import hamburguerMenu from "./menu_hanburguesa.js";
import { relojDigital, Alarma } from "./reloj.js";

const d=document;
d.addEventListener("DOMContentLoaded",e=>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    relojDigital("#reloj","#activar-reloj", "#desactivar-reloj");
})
