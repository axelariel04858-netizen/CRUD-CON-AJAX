//CRUD DE UNA UNICA PAGINA HACIENDO USO DE AJAX CON JQUERY
//SIN OLVIDAR QUE CON FETCH PODEMOS USAR AJAX DE MANERA NATIVA

//METODOS PARA EL CRUD
function listar(){
    //LISTA LOS PRODCUTOS DE MANERA ASINCRONA CON AJAX USANDO JQUERY
    $.ajax({ //EL SIMBOLO $ NOS DICE QUE USAMOS JQUERY
        method:"GET",//OBTENER DATOS
        url: "/api/getWeather",
        data: {},
        success: function( listado_result ) {//TODO LO QUE SE LISTE DENTRO DEL METODO, SE LISTARA Y GUARDARA DENTRO DE LA VARIABLE DENTRO DE ()
            //GENERALMENTE LO LISTAMOS DENTRO DEL HTML - EN LA DATATABLE
            $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
        }
    });

}

function guardar(){
    //GUARDA UN PRODUCTO DE MANERA ASINCRONA CON AJAX USANDO JQUERY
    let nombre = document.getElementById('nombre').value;
    $.ajax({ //EL SIMBOLO $ NOS DICE QUE USAMOS JQUERY
        method:"POST",//ENVIAR DATOS
        url: "/api/getWeather",
        data: {
            nombre: nombreProducto,
            precio: 1,
            stock: 20,
            categoria:1
        },//DECIMOS LOS DATOS QUE SE VAN A MANDAR DESDE EL HTML
        success: function( listado_result ) {//TODO LO QUE SE LISTE DENTRO DEL METODO, SE LISTARA Y GUARDARA DENTRO DE LA VARIABLE DENTRO DE ()
            //GENERALMENTE LO LISTAMOS DENTRO DEL HTML - EN LA DATATABLE
            $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
        }
    });

}

//DOS METODOS PARA ACTUALIZAR UN PRODUCTO
function identificaActualizar(){
    //MOSTRAR DE MANERA ASINCRONA EL PRODUCTO A ACTUALIZAR


}

function actualizar(){
    //ACTUALIZA EL PRODUCTO IDENTIFICADO CON AJAX USANDO JQUERY


}

//DOS METODOS PARA ELIMINAR UN PRODUCTO
function identificaEliminar(){
    //MUESTRA LOS DATOS DEL PRODUCTO A ELIMINAR DE MANERA ASINCRONA


}

function eliminar(){
    //ELIMINA EL PRODUCTO IDENTIFICADO CON AJAX USANDO JQUERY


}


$.ajax({
  url: "/api/getWeather",
  data: {
    zipcode: 97201
  },
  success: function( result ) {
    $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
  }
});