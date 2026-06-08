//CRUD DE UNA UNICA PAGINA HACIENDO USO DE AJAX CON JQUERY
//SIN OLVIDAR QUE CON FETCH PODEMOS USAR AJAX DE MANERA NATIVA

//METODOS PARA EL CRUD
function listar(){
    //LISTA LOS PRODCUTOS DE MANERA ASINCRONA CON AJAX USANDO JQUERY
    $.ajax({
        method: "GET",
        url: "/productos/api/categorias",
        data: {},
        success: function (categorias) {
          let tabla = new DataTable('#exampleCategorias');
          tabla.clear().draw();

          categorias.forEach(categoria => {
            let botones = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-update-categoria" onclick="identificaActualizarCategoria(${categoria.id})"> Editar </button>`;
            botones += ` <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal-delete-categoria" onclick="identificaEliminarCategoria(${categoria.id})">Eliminar</button>`;

            tabla.row
                .add([categoria.id, categoria.nombre, botones])
                .draw()
                .node().id = 'renglon_cat_' + categoria.id;
          });
        },
        error: function (error) {
          console.error("Error al listar categorías:", error);
        }
      });

}

function guardar(){
    //GUARDA UN PRODUCTO DE MANERA ASINCRONA CON AJAX USANDO JQUERY
    let nombreCat = document.getElementById('nombre-categoria').value;

      if (!nombreCat) {
        alert("Por favor, ingrese el nombre de la categoría");
        return;
      }

      $.ajax({
        method: 'POST',
        url: "/productos/api/categorias",
        contentType: "application/json",
        data: JSON.stringify({
          nombre: nombreCat
        }),
        success: function (categoria) {
          let botones = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-update-categoria" onclick="identificaActualizarCategoria(${categoria.id})"> Editar </button>`;
          botones += ` <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal-delete-categoria" onclick="identificaEliminarCategoria(${categoria.id})">Eliminar</button>`;

          let tabla = new DataTable("#exampleCategorias");
          tabla.row
              .add([categoria.id, categoria.nombre, botones])
              .draw()
              .node().id = 'renglon_cat_' + categoria.id;

          alert("Categoría guardada correctamente");
          document.getElementById('nombre-categoria').value = "";
          $('#modal-add-categoria').modal('hide');
        }
      });

}

//DOS METODOS PARA ACTUALIZAR UN PRODUCTO
function identificaActualizar(id){
    //MOSTRAR DE MANERA ASINCRONA EL PRODUCTO A ACTUALIZAR
    $.ajax({
        method: 'GET',
        url: "/productos/api/categorias/" + id,
        success: function (categoria) {
          document.getElementById('id-update-categoria').value = categoria.id;
          document.getElementById('nombre-update-categoria').value = categoria.nombre;
        }
      });

}

function actualizar(){
    //ACTUALIZA EL PRODUCTO IDENTIFICADO CON AJAX USANDO JQUERY
    let idCat = document.getElementById('id-update-categoria').value;
      let nombreCat = document.getElementById('nombre-update-categoria').value;

      $.ajax({
        method: 'PUT',
        url: "/productos/api/categorias/" + idCat,
        contentType: 'application/json',
        data: JSON.stringify({
          nombre: nombreCat
        }),
        success: function () {
          let tabla = new DataTable("#exampleCategorias");
          let datos = tabla.row("#renglon_cat_" + idCat).data();
          datos[1] = nombreCat;

          tabla.row("#renglon_cat_" + idCat).data(datos).draw();
          alert('Categoría actualizada correctamente');
          $('#modal-update-categoria').modal('hide');
        }
      });

}

//DOS METODOS PARA ELIMINAR UN PRODUCTO
function identificaEliminar(id){
    //MUESTRA LOS DATOS DEL PRODUCTO A ELIMINAR DE MANERA ASINCRONA
    $.ajax({
        method: 'GET',
        url: "/productos/api/categorias/" + id,
        success: function (categoria) {
          document.getElementById('id-delete-categoria').value = categoria.id;
          document.getElementById('nombre-delete-categoria').value = categoria.nombre;
        }
      });

}

function eliminar(){
    //ELIMINA EL PRODUCTO IDENTIFICADO CON AJAX USANDO JQUERY
    let idCat = document.getElementById('id-delete-categoria').value;

      $.ajax({
        method: 'DELETE',
        url: "/productos/api/categorias/" + idCat,
        success: function () {
          alert('Categoría eliminada');
          let tabla = new DataTable('#exampleCategorias');
          tabla.row('#renglon_cat_' + idCat).remove().draw();
          $('#modal-delete-categoria').modal('hide');
        }
      });

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