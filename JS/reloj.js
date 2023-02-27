const d= document;

export  function relojDigital(reloj, btnPlay, btnStop)
{
    let horaReloj;

    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay))
        {
            horaReloj = setInterval(()=>{let horaReloj= new Date().toLocaleTimeString();
            d.querySelector(reloj).innerHTML=`<h3>${horaReloj}</h3>`}, 1000);
            e.target.disabled = true;
        }
        if(e.target.matches(btnStop))
        {
            clearInterval(horaReloj);
            d.querySelector(reloj).innerHTML= null;
            d.querySelector(btnPlay).disabled= false;
            
        }


    })
}
export function Alarma()
{

}