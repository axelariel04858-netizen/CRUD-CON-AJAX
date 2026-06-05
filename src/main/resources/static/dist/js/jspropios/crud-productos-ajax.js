//CRUD DE UNA UNICA PAGINA HACIENDO USO DE AJAX CON JQUERY
//SIN OLVIDAR QUE CON FETCH PODEMOS USAR AJAX DE MANERA NATIVA
alert("hola");
//METODOS PARA EL CRUD
function listar() {
    //LISTA LOS PRODCUTOS DE MANERA ASINCRONA CON AJAX USANDO JQUERY
    $.ajax( { //EL SIMBOLO $ NOS DICE QUE USAMOS JQUERY
        method:"GET",//OBTENER DATOS
        url: "/productos/api/productos",
        // BODY
        data: {},
        success: function(productos) {//TODO LO QUE SE LISTE DENTRO DEL METODO, SE LISTARA Y GUARDARA DENTRO DE LA VARIABLE DENTRO DE ()
            let tabla = new DATATABLE ('#example1')
            productos.forEach (producto=>{

                let botones = '<button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#modal-update">Editar</button>'
                botones = botones + '<button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#modal-eliminar">Eliminar</button>'

                let rownode = tabla.row
                    .add([producto.id,producto.nombre,'$ '+producto.precio,producto.stock,botones])
                    .draw()
                    .node().id='renglon_'+producto.id;

            })
            }
    });

}

function guardar(){
    //GUARDA UN PRODUCTO DE MANERA ASINCRONA CON AJAX USANDO JQUERY
    let nombreProducto = document.getElementById('nombre').value;
    let precioProducto = document.getElementById('precio').value;
    let stockProducto = document.getElementById('stock').value;
    let categoriaProducto = document.getElementById('categoria').value;
    //SOLICITUD DE GUARDAR UN PRODUCTO USANDO AJAX
    $.ajax({ //EL SIMBOLO $ NOS DICE QUE USAMOS JQUERY
        method:'POST',//ENVIAR DATOS
        url: "/productos/api/productos",
        contentType:"application/json",
        //BODY

        data: JSON.stringify({
                    nombre: nombreProducto,
                    precio: precioProducto,
                    stock: stockProducto,
                    categoria:categoriaProducto
        })
        ,
        success: function( producto ) {
            //ES LA RESPUESTA DEL SERVIDOR
            //AGREGAR PRODUCTO A LA TABLA
            let botones = '<button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#modal-update">Editar</button>'
            botones = botones + '<button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#modal-eliminar">Eliminar</button>'

            let tabla = new DATATABLE ("#example1")
            var rownode = tabla.row
                .add([producto.id,producto.nombre,producto.precio,producto.stock,botones])
                .draw()
                .node().id='renglon_'+producto.id;

            alert("PRODUCTO GUARDADO CORRECTAMENTE");
            limpiarFormulario();
            //CERRAR LA VENTANA MODAL
        }
    });

}

function limpiarFormulario(){
    document.getElementById('nombre').value="";
    document.getElementById('precio').value="";
    document.getElementById('stock').value="";
    document.getElementById('nombre').focus();
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