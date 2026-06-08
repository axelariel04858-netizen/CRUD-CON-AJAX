function listar() {
    //tener las categorias antes de todo
    $.ajax({
        method: "GET",
        url: "/productos/api/categorias",
        success: function(categorias) {
            let mapaCategorias = {};
            categorias.forEach(c => { mapaCategorias[c.id] = c.nombre; });

            $.ajax({
                method: "GET",
                url: "/productos/api/productos",
                data: {},
                success: function (productos) {
                    let tabla = new DataTable('#example1');
                    productos.forEach(producto=>{

                        let botones = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-update" onclick="identificaActualizar('+producto.id+')"> Editar </button>';
                        botones = botones + ' <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal-delete" onclick="identificaEliminar('+producto.id+')">Eliminar</button>';
                        //si no se pone categoria
                        let nombreCategoria = mapaCategorias[producto.categoria] || "Sin Categoría";

                        let rowNode = tabla.row
                            .add([producto.id, producto.nombre, '$ '+producto.precio, producto.stock,nombreCategoria, botones])
                            .draw()
                            .node().id = 'renglon_' + producto.id;
                    })
                }
            });
        }
    });
}

function guardar() {
    //Guarda producto de manera asincrona usando ajax - jQuery
    let nombreProducto = document.getElementById('nombre').value;
    let precioProducto = document.getElementById("precio").value;
    let stockProducto = document.getElementById("stock").value;
    let categoriaProducto = document.getElementById("categoria").value;
    //Solcitud de guardar un producto usando AJAX
    $.ajax({
        method:'POST',
        url: "/productos/api/productos",
        contentType:"application/json",
        //Body - RequestBody
        data: JSON.stringify({
            nombre: nombreProducto,
            precio:precioProducto,
            stock:stockProducto,
            categoria:categoriaProducto
        })
        ,
        success: function (producto) {
            //Es la respuesta del servidor
            //Agregar el producto a la tabla
            let botones = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-update" onclick="identificaActualizar('+producto.id+')"> Editar </button>';
            botones = botones + ' <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal-delete" onclick="identificaEliminar('+producto.id+')">Eliminar</button>';
            let selectCategoria = document.getElementById('categoria');
            let nombreCategoria = selectCategoria.options[selectCategoria.selectedIndex].text;
            let tabla = new DataTable("#example1");
            var rowNode = tabla.row
                .add([producto.id,producto.nombre,'$ '+producto.precio,producto.stock,nombreCategoria,botones])
                .draw()
                .node().id='renglon_'+producto.id;

            alert("Producto Guardado Correctamente");
            limpiarFormulario();
            //Cerrar la ventana modal
        }
    });
}

function limpiarFormulario(){
    document.getElementById('nombre').value="";
    document.getElementById('precio').value="";
    document.getElementById('stock').value="";
    document.getElementById('nombre').focus();
}

//Dos metodos para actualizar un productos
function identificaActualizar(id) {
    //Mostrar de manera asincrona el producto actualizar
    $.ajax({
        method:'GET',
        url: "/productos/api/productos/"+id,
        data: {},
        success: function( producto ) {
            //Mostralo en el modal de Actualizar
            document.getElementById('id-update').value=producto.id
            document.getElementById('nombre-update').value=producto.nombre;
            document.getElementById('precio-update').value=producto.precio;
            document.getElementById('stock-update').value=producto.stock;
            document.getElementById('categoria-update').value=producto.categoria;
        }
    });
}

function actualizar() {
    //Actualiza el producto identificado
    let idPoducto = document.getElementById('id-update').value;
    let nombreProducto=document.getElementById('nombre-update').value;
    let precioProducto = document.getElementById('precio-update').value;
    let stockProducto =document.getElementById('stock-update').value;
    let catetoriaProducto = document.getElementById('categoria-update').value
    $.ajax({
        method:'PATCH',
        contentType:'application/json',
        url: "/productos/api/productos/"+idPoducto,
        data: JSON.stringify({
            nombre:nombreProducto,
            precio:precioProducto,
            stock:stockProducto,
            categoria:catetoriaProducto
        }),
        success: function( producto ) {
            let selectCategoria = document.getElementById('categoria-update');
            let nombreCategoria = selectCategoria.options[selectCategoria.selectedIndex].text;
            //Editar el renglon de la tabla
            let tabla = new DataTable("#example1");
            var datos = tabla.row("#renglon_"+idPoducto).data()
            datos[1]=nombreProducto;
            datos[2]=precioProducto;
            datos[3]=stockProducto;
            datos[4]=nombreCategoria;
            tabla.row("#renglon_"+idPoducto).data(datos)
            tabla.draw();
            alert('Producto actualizado');
        }
    });
}

//Dos metodos para eliminar
function identificaEliminar(id) {
    //Recueprar los datos del producto del servidor usando AJAX
    $.ajax({
        method:'GET',
        url: "/productos/api/productos/"+id,
        data: {},
        success: function( producto ) {
            //Mostrar en el modal los datos del producto
            document.getElementById('id-eliminar').value=producto.id;
            document.getElementById('nombre-delete').value=producto.nombre;
            document.getElementById('precio-delete').value=producto.precio;
            document.getElementById('stock-delete').value=producto.stock;
            document.getElementById('categoria-delete').value=producto.categoria
        }
    });
}

function eliminar() {
    //Elimina de manera asincrona con ajax usando jQuery
    const idEliminar=document.getElementById('id-eliminar').value;
    $.ajax({
        method:'DELETE',
        url: "/productos/api/productos/"+idEliminar,
        data: {},
        success: function( producto ) {
            alert('Producto Eliminado')
            //Eliminar de la tabla el producto
            //Hay que implementar borrar el renglon
            let tabla = new DataTable('#example1');

            let rows = tabla
                .row('#renglon_'+idEliminar)
                .remove()
                .draw();
        }
    });
}


//para que carguen las categorias
function cargarSelectsDeCategorias() {
    $.ajax({
        method: "GET",
        url: "/productos/api/categorias",
        success: function (categorias) {
            let selectAgregar = document.getElementById('categoria');
            let selectEditar = document.getElementById('categoria-update');
            let selectEliminar = document.getElementById('categoria-delete');
            if(selectAgregar) selectAgregar.innerHTML = '<option value="">Seleccione una categoría...</option>';
            if(selectEditar) selectEditar.innerHTML = '<option value="">Seleccione una categoría...</option>';
            if(selectEliminar) selectEliminar.innerHTML = '<option value="">Seleccione una categoría...</option>';

            categorias.forEach(cat => {
                let opcion = `<option value="${cat.id}">${cat.nombre}</option>`;
                if(selectAgregar) selectAgregar.innerHTML += opcion;
                if(selectEditar) selectEditar.innerHTML += opcion;
                if(selectEliminar) selectEliminar.innerHTML += opcion;
            });
        },
        error: function(err) {
            console.error("Error cargando categorías dinámicas:", err);
        }
    });
}