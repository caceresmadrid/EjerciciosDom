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
export function alarma(sonido, btnPlay, btnStop)
{
    let alarmaTempo;
    const $alarm = d.createElement("audio");
    $alarm.src=sonido;
    d.addEventListener("click", e=>
    {
        if(e.target.matches(btnPlay))
        {
           alarmaTempo= setTimeout(() => {
                $alarm.play();
                e.target.disabled = true;
            }, 2000);
        }
        if(e.target.matches(btnStop))
        {
            clearTimeout(alarmaTempo);
            $alarm.pause();
            $alarm.currentTime=0;
            d.querySelector(btnPlay).disabled= false;

        }
    })
}