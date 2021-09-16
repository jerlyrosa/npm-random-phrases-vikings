const colors = require ('colors');


const messages = [
   "“Antes de entrar en un lugar, fíjate por dónde se puede salir.”",
   "“Si comes cerezas con los poderosos te arriesgas a que los huesos lluevan contra tu nariz.”",
   "“El hombre honra al amigo con afecto, responde a regalo con regalo. A risa responde con risa y al truco con trampa.”",
   "“Si consigues encontrar a un amigo leal y quieres que te sea útil, ábrele tu corazón, mándale regalos y viaja a menudo a verle.”",
   "“Un hombre sin amigos es como un abedul desnudo, sin hojas ni corteza, solitario en una colina pelada.”",
   "“Un invitado debe marchar a tiempo y no abusar de su bienvenida; incluso un amigo se vuelve molesto si se queda demasiado tiempo.”",
   "“Ni la pobreza obliga a nadie a robar ni la riqueza lo evita.”",
   "“Un hombre de respeto debe ser reservado, reflexivo y valiente en la batalla.”",
   "“Como huésped debes ser precavido al llegar al banquete, calla y escucha; oídos atentos, ojos alerta: así se protege un hombre sabio.”",
   "“Las riquezas mueren, los parientes mueren; uno también debe morir. Sé de una cosa que jamás muere: la fama de un hombre muerto.”",
   "“El corazón de un sabio rara vez es alegre.”",
   "“Ni lobo acostado consigue su tajada, ni hombre que duerme victoria.”",
   "“La ambición y la venganza siempre están hambrientas”",
   "“Cuando pases por una puerta ajena mira a diestra, mira a siniestra.”",
   "“Las migas son también pan.”",
   "“No alabes el día hasta que haya llegado la tarde; no alabes a una mujer hasta su pira; no alabes una espada hasta haberla probado; no alabes a una doncella hasta que se haya casado; no alabes el hielo hasta haberlo cruzado; no alabes la cerveza hasta haberla bebido.”",
   "“Lleva tu espada y tu lanza cuando vayas por un camino, pues algún día puede aparecer tu enemigo.”",
   "“Mejor pájaro libre que rey cautivo.”",
   "“Demasiada cerveza, y el corazón de un hombre estará abierto para que todos lo vean”",
   "“El error es el resultado de dejar que el miedo gobierne tus acciones”",
   "“No todas las nubes que oscurecen el día traen lluvia ”",


];

const randomMessages = () =>{
    const message = messages[Math.floor(Math.random() * messages.length)]

     return console.log(`
     ${colors.blue("~VIKINGS")}

        ${message.italic}
     
     `);
}

module.exports = { randomMessages };