
        /*
        setTimeout(function()
        {
             confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
             var haut=(screen.height-hauteur)/2;
             var Gauche=(screen.width-largeur)/2;

         }, 3000); */


let resultat = confirm ("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please. Allez sur xxxvidsxxx ?");

function BigFunction(resultat)
{
	if (resultat === true) 
    {
    window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
   	}
}

setTimeout(BigFunction(), 5000)