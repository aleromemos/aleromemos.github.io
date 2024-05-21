const datosElementos = [
    { itemID: '1', descripcion: 'Es un color amarillo anaranjado'},
    { itemID: '2', descripcion: 'Color que tiene un color parecido al oro o el limón' },
    { itemID: '3', descripcion: 'Es la denominación de un color cian, de saturación débil' },
    { itemID: '4', descripcion: 'Es un color púrpura azulado semiclaro' },
    { itemID: '5', descripcion: 'Que es de color negro brillante' },
    { itemID: '6', descripcion: 'Que es de color parecido al cielo' },
    { itemID: '7', descripcion: 'Un color amarillo rosado pálido' },
    { itemID: '8', descripcion: 'Que es del color de la nieve o leche' },
    { itemID: '9', descripcion: 'Que tiene color como el del café o el chocolate' },
    { itemID: '10', descripcion: 'Color acanelado, alazán, ocre, rojizo. castaño' },
    { itemID: '11', descripcion: 'Es un color negro de aspecto mate y tonalidad nula' },
    { itemID: '12', descripcion: 'Es un color rojo purpúreo vivo' },
    { itemID: '13', descripcion: 'Es un color rojo intenso, algo purpúreo, semioscuro' },
    { itemID: '14', descripcion: 'Es un color azul-cian semiclaro, de saturación intensa' },
    { itemID: '15', descripcion: 'Es un color celeste saturado, de tonalidad media' },
    { itemID: '16', descripcion: 'Es un color pardo rojizo medio, no saturado, que posee una tonalidad rojo naranja' },
    { itemID: '17', descripcion: 'Es un color Amarillo naranja de saturación fuerte, que evoca el aspecto cromático del oro casi puro' },
    { itemID: '18', descripcion: 'Es un color verde azulado, semitransparente, de saturación fuerte y de textura visual vítrea brillante' },
    { itemID: '19', descripcion: 'Es un color magenta o rosa intenso' },
    { itemID: '20', descripcion: 'Color que proviene de una mezcla entre blanco y negro' },
    { itemID: '21', descripcion: 'Color proveniente de una gama de blanco con tonalidades marrones muy claras, más claro que el beige' },
    { itemID: '22', descripcion: 'Color proveniente de variedades oscuras y profundas del color azul' },
    { itemID: '23', descripcion: 'Color que consiste en una tonalidad pálida de amarillo anaranjado' },
    { itemID: '24', descripcion: 'Es una combinación perfecta entre el verde y el azul' },
    { itemID: '25', descripcion: 'Es un color que puede denotar un color amarillo ocráceo a ocre verdoso, claro a semioscuro y de saturación moderada a semineutra' },
    { itemID: '26', descripcion: 'Es una variante pálida o clara del color violeta' },
    { itemID: '27', descripcion: 'Define un color claro perteneciente a la gama del morado y es similar al lavanda' },
    { itemID: '28', descripcion: 'Es un color verde amarillo brillante, a medio camino entre amarillo y el verde puro' },
    { itemID: '29', descripcion: 'Proviene de una gama de colores que pueden variar del rosa intenso al púrpura saturado' },
    { itemID: '30', descripcion: 'Proviene de una gama de colores claros pertenecientes a la gama del violeta y el magent' },
    { itemID: '31', descripcion: 'Es un color amarillo pálido' },
    { itemID: '32', descripcion: 'Es un color o gama de colores verdes claros' },
    { itemID: '33', descripcion: 'Se trata de un color que mezcla pequeños toques naranjas con matices en amarillo' },
    { itemID: '34', descripcion: 'Color similar al del fruto del naranjo que se obtiene mezclando rojo y amarillo' },
    { itemID: '35', descripcion: 'Color como el del carbón' },
    { itemID: '36', descripcion: 'Color de tonalidad amarillo oscuro' },
    { itemID: '37', descripcion: 'Es un color Amarillo naranja de saturación fuerte' },
    { itemID: '38', descripcion: 'Es un color que se basa en la coloración de las olivas verdes' },
    { itemID: '39', descripcion: 'Es un color verde que se basa en la coloración de los pistachos' },
    { itemID: '40', descripcion: 'Es un color gris claro brillante que recuerda la plata' },
    { itemID: '41', descripcion: 'Es un color que se encuentra al mezclar el rojo y el azul' },
    { itemID: '42', descripcion: 'Que es de un color como el del tomate o la sangre' },
    { itemID: '43', descripcion: 'Color resultante de mezclar rojo y blanco' },
    { itemID: '44', descripcion: 'Es un color que se basa en la coloración del rubí'},
    { itemID: '45', descripcion: 'Es un color rosa anaranjado, de intensidad media'},
    { itemID: '46', descripcion: 'Es un color azul verde semiclaro o cian semisaturado'},
    { itemID: '47', descripcion: 'Es un color que se basa en la coloración de la uva'},
    { itemID: '48', descripcion: 'Color semejante al de la hierba fresca'},
    { itemID: '49', descripcion: 'Es un matiz oscuro del color rojo o rojo purpúreo'},
    { itemID: '50', descripcion: 'Es un color de tono purpúreo o morado que es considerado intermedio entre el azul y el magenta'},
    { itemID: '51', descripcion: 'Es un color que se basa en la coloración del zafiro'},
    { itemID: '52', descripcion: 'Es un color que se basa en la coloración de la carne de la sandía'},
    { itemID: '53', descripcion: 'Una línea recta es una forma continua, unidimensional y sin anchura. Está formada por un número infinito de puntos conectados a ambos lados de un punto.'},
    { itemID: '54', descripcion: 'Una línea curva, como su nombre indica, es una línea que se dobla.'},
    { itemID: '55', descripcion: 'Son figuras geométricas planas, básicas, que poseen tres lados en contacto entre sí en puntos comunes denominados vértices.'},
    { itemID: '56', descripcion: 'Un triángulo equilátero es aquel cuyos lados tienen la misma longitud y cuyos ángulos internos presentan la misma medida.'},
    { itemID: '57', descripcion: 'Un triángulo isósceles es un triángulo que tiene dos lados de igual longitud.'},
    { itemID: '58', descripcion: 'Un triángulo escaleno es un triángulo que tiene todos sus lados de longitudes diferentes​'},
    { itemID: '59', descripcion: 'Se denomina triángulo rectángulo a cualquier triángulo que tiene un ángulo recto, es decir, un ángulo de 90 grados​'},
    { itemID: '60', descripcion: 'El triángulo obtuso es un triángulo que posee un ángulo obtuso y dos ángulos agudos​'},
    { itemID: '61', descripcion: 'Es una figura geométrica en la cual los tres ángulos internos son agudos, es decir, la medida de cada uno de ellos es inferior a 90º​'},
    { itemID: '62', descripcion: 'Es una figura plana de cuatro lados congruentes y paralelos dos a dos, y cuatro ángulos interiores rectos (90°)​'},
    { itemID: '63', descripcion: 'Es un paralelogramo cuyos cuatro lados forman ángulos rectos entre sí. Los lados opuestos tienen la misma longitud​'},
    { itemID: '64', descripcion: 'Paralelogramo que tiene los lados iguales y dos de sus ángulos mayores que los otros dos​'},
    { itemID: '65', descripcion: 'Paralelogramo cuyos lados contiguos son desiguales y dos de sus ángulos mayores que los otros dos​'},
    { itemID: '66', descripcion: 'Un trapezoide es un cuadrilátero sin lados paralelos'},
    { itemID: '67', descripcion: 'Se llama trapecio a un cuadrilátero que tiene solamente un par de lados paralelos'},
    { itemID: '68', descripcion: 'Un paralelogramo es un cuadrilátero cuyos pares de lados opuestos son iguales y paralelos dos a dos'},
    { itemID: '69', descripcion: 'Es un trapezoide con dos pares de lados consecutivos iguales'},
    { itemID: '70', descripcion: 'Polígono de cinco lados y cinco vértices'},
    { itemID: '71', descripcion: 'Una cruz es una figura geométrica formada por dos líneas o barras que se cruzan, generalmente perpendiculares entre sí'},
    { itemID: '72', descripcion: 'Es un polígono equilátero y equiángulo que se autointerseca'},
    { itemID: '73', descripcion: 'Es un polígono convexo con seis lados iguales y seis ángulos iguales'},
    { itemID: '74', descripcion: 'Un heptágono es un polígono con siete lados, siete ángulos y siete vértices'},
    { itemID: '75', descripcion: 'Es una figura plana con ocho lados y ocho vértices'},
    { itemID: '76', descripcion: 'Es un polígono de nueve lados y nueve vértices'},
    { itemID: '77', descripcion: 'Se denomina decágono a un polígono de diez lados y diez vértices'},
    { itemID: '78', descripcion: 'Área o superficie plana contenida dentro de una circunferencia.'},
    { itemID: '79', descripcion: 'Es la figura geométrica plana (bidimensional) delimitada por un diámetro y la mitad de una circunferencia.'},
    { itemID: '80', descripcion: 'Curva cerrada, con la convexidad vuelta siempre a la parte de afuera, de forma parecida a la de la elipse, y simétrica respecto de uno o de dos ejes.'},
    { itemID: '81', descripcion: 'Es una curva plana y cerrada, simétrica respecto a dos ejes perpendiculares entre sí'},
    { itemID: '82', descripcion: 'Representado por una forma anatómicamente inexacta del corazón humano'},
    { itemID: '83', descripcion: 'Es un símbolo o emblema utilizado para representar la fase lunar del primer trimestre'},
    { itemID: '84', descripcion: 'Representado por un pie en el que una de sus porciones ha sido tomada'},
    { itemID: '85', descripcion: 'Representado por la figura de una flecha'},
    { itemID: '86', descripcion: 'Un anillo es algo -uniforme o compuesto- que se asemeja a la forma de un círculo'},
    { itemID: '87', descripcion: 'Es el conjunto de los puntos del espacio tridimensional que tienen la misma distancia a un punto fijo denominado centro'},
    { itemID: '88', descripcion: 'También llamado hexaedro regular, es un poliedro limitado por seis caras cuadradas congruentes'},
    { itemID: '89', descripcion: 'Es un hexaedro, un sólido de seis caras'},
    { itemID: '90', descripcion: 'Es un poliedro, constituido por un polígono simple y cuyas caras laterales son triángulos que se juntan en un vértice común'},
    { itemID: '91', descripcion: 'Es un sólido de revolución generado por el giro de un triángulo rectángulo alrededor de uno de sus catetos'},
    { itemID: '92', descripcion: 'Un cilindro es una superficie de las denominadas cuádricas formada por el desplazamiento paralelo de una recta llamada generatriz, a lo largo de una curva plana, denominada directriz'},
    { itemID: '93', descripcion: 'Sentimiento de querer estar en todo momento con esa persona. Se sienten cosquilleos, nervios. Se sienten mariposas en el estómago y estás como en una nube. Deseo y total similitud emocional con la otra persona.'},
    { itemID: '94', descripcion: 'La compasión es el deseo de actuar para evitar el sufrimiento de otras personas cuando se enfrentan a él'},
    { itemID: '95', descripcion: 'Se refiere a la capacidad de nombrar nuestras emociones, identificándolas y reconociendo la relación que existe entre emociones y experiencias propias para poder darles sentido y significado'},
    { itemID: '96', descripcion: 'Inclinación afectiva entre personas, generalmente espontánea y mutua.'},
    { itemID: '97', descripcion: 'Es el sentimiento ante personas, cosas o situaciones que se consideran merecedoras de un amor o un cariño gratuito'},
    { itemID: '98', descripcion: 'Se trata de una emoción positiva que suele venir acompañada de bienestar y gozo'},
    { itemID: '99', descripcion: 'Es un sentimiento de placer y felicidad extremos. Es un estado de ánimo que se alcanza cuando experimentamos algo que nos aporta una inmensa alegría y satisfacción'},
    { itemID: '100', descripcion: 'Es un estado de ánimo que se considera como de «exaltación» o fervor ante un hecho o situación de la vida'},
    { itemID: '101', descripcion: 'Es un estado mental y emocional en el cual se manifiesta exacerbación del estado de ánimo, que proviene de un sentimiento de alegría o de sensaciones placenteras'},
    { itemID: '102', descripcion: 'Se refiere al intenso sentimiento de alegría, energía y emoción'},
    { itemID: '103', descripcion: 'Es una emoción definida como un sentimiento muy fuerte hacia una persona, reacción intensa que engloba el entusiasmo o deseo por algo'},
    { itemID: '104', descripcion: 'Es una reacción emocional espontánea provocada por algún acontecimiento imprevisto, extraño o nuevo'},
    { itemID: '105', descripcion: 'Es una actitud o un estado de ánimo realista pero optimista, la creencia de que un cambio positivo es posible y la voluntad de establecer y trabajar para conseguir objetivos'},
    { itemID: '106', descripcion: 'Se refiere a poseer un sentido interno y realista de nuestras capacidades'},
    { itemID: '107', descripcion: 'Es una perspectiva positiva y esperanzada del futuro, de sí mismo y del mundo que lo rodea'},
    { itemID: '108', descripcion: 'Sentimiento de complacencia en la posesión, recuerdo o esperanza de bienes o cosas apetecibles'},
    { itemID: '109', descripcion: 'Viva alegría, y especialmente la que se manifiesta con signos exteriores. regocijo, algazara, alborozo, entusiasmo, exultación, exaltación, alegría, felicidad, contento, gozo, placer'},
    { itemID: '110', descripcion: 'Es sentirse agradecido por las cosas positivas de la vida'},
    { itemID: '111', descripcion: 'Implica reconocer y disfrutar las cualidades positivas de las personas'},
    { itemID: '112', descripcion: 'Perturbar, inquietar, alterar, mover fuertemente o con eficacia a alguien o algo'},
    { itemID: '113', descripcion: 'Es un estado interno que activa, dirige y mantiene la conducta de la persona hacia metas o fines determinados'},
    { itemID: '114', descripcion: 'Es una emoción agradable que involucra la búsqueda de información, conocimientos y experiencias nuevas'},
    { itemID: '115', descripcion: 'Es un estado mental de elevado poder'},
    { itemID: '116', descripcion: 'Es un estado emocional subjetivo, repentino y efímero, en el que de manera concentrada experimentamos sentido y tras el que, generalmente, nos vemos motivados a actuar'},
    { itemID: '117', descripcion: 'La intriga es aquel sentimiento de tensión que aumenta gracias a la ocultación de información.'},
    { itemID: '118', descripcion: 'Es una sensación de calma en la que dejamos de luchar contra los pensamientos y las emociones negativas y perturbadoras'},
    { itemID: '119', descripcion: 'El alivio significa que una sensación o situación desagradable ha terminado'},
    { itemID: '120', descripcion: 'Hace referencia a un estado psicológico en el que una persona se siente segura'},
    { itemID: '121', descripcion: 'Sentimiento de placer y contento, por haber dado cumplimiento a una necesidad o gusto'},
    { itemID: '122', descripcion: 'Es el sufrimiento de pensar en algo que se ha tenido o vivido en una etapa y ahora no se tiene, está extinto o ha cambiado'},
    { itemID: '123', descripcion: 'Es una impresión desagradable que es originada por algo que nos repugna, que nos asquea'},
    { itemID: '124', descripcion: 'Sentimiento de hostilidad u odio mutuo entre dos o más personas'},
    { itemID: '125', descripcion: 'Es una emoción compleja compuesta por sentimientos de terror, de asco y de conmoción'},
    { itemID: '126', descripcion: 'Es la incapacidad para pensar de manera tan clara y rápida como uno normalmente lo hace'},
    { itemID: '127', descripcion: 'Emoción vinculada a la confusión o aturdimiento que una persona experimenta cuando no entiende algo o cuando no sabe cómo actuar'},
    { itemID: '128', descripcion: 'Es la falta de determinación ante una situación, vivida como conflictiva, que nos impide tomar una decisión'},
    { itemID: '129', descripcion: 'Es una emoción que puede ser definida como ”un sentimiento desagradable, en la que una persona deposita previamente todos sus esfuerzos físicos, psíquicos, actitudes, aptitudes y tiempo, con el fin de alcanzar un objetivo establecido.”'},
    { itemID: '130', descripcion: 'La persona impaciente no tiene la capacidad de esperar algo sin ponerse nerviosa ni la facultad de realizar acciones minuciosas o complejas que requieren de calma'},
    { itemID: '131', descripcion: 'Es un sentimiento de miedo, temor e inquietud'},
    { itemID: '132', descripcion: 'Es lo que sentimos cuando algo nos empuja fuera de nuestra zona de confort y nos desafía de maneras que pueden resultar incómodas o incluso confrontadoras'},
];

let mostrador = document.getElementById("counter");
let seleccion = document.getElementById("selection");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("id-1");

function load(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;
    modeloSeleccionado.innerHTML = item.getElementsByClassName("english-name")[0].innerHTML;
    precioSeleccionado.innerHTML = item.getElementsByClassName("spanish-name")[0].innerHTML;

    let itemID = item.getAttribute('data-item-id');
    descripSeleccionada.innerHTML = obtenerDescripcion(itemID);
}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}

function quitarBordes(){
    let items = document.getElementsByClassName("item");
    for(let i = 0; i < items.length; i++){
        items[i].style.border = "none";
    }
}

function obtenerDescripcion(itemID) {
    let elemento = datosElementos.find(el => el.itemID === itemID);
    return elemento ? elemento.descripcion : "Descripción no disponible.";
}

function mostrarRecuadro() {
    var recuadro = document.getElementById('selection');
    var scrollY = window.scrollY || window.pageYOffset;
  
    recuadro.style.display = 'block';
    recuadro.style.top = scrollY + '-50';
  }
  
  var elemento = document.getElementById('follow-up');
  elemento.addEventListener('click', mostrarRecuadro);
  
  window.onscroll = function() {
    var scrollY = window.scrollY || window.pageYOffset;
    var recuadro = document.getElementById('selection');
    recuadro.style.top = scrollY + 'px';
  };