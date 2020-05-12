$(document).ready(function () {
  //   $("h1").css({ background: "#000", color: "#fff", textAlign: "center" });
  var check = false;
  function Hide() {
    if (check === false) {
      $("#segundo").hide();
      check = true;
    } else if (check === true) {
      $("#segundo").show();
      check = false;
    }
  }

  function Toggle() {
    $("#segundo").toggle(1000);
  }

  //   ----------------------------------------------

  function FadeOut() {
    $("#segundo").fadeOut();
  }

  function FadeIn() {
    $("#segundo").fadeIn();
  }

  function Fade() {
    if (check === false) {
      $("#segundo").fadeOut(1000);
      check = true;
    } else if (check === true) {
      $("#segundo").fadeIn(1000);
      check = false;
    }
  }

  //   ----------------------------------------------
  function SlideUp() {
    $("#segundo").slideUp();
  }

  function SlideDown() {
    $("#segundo").slideDown();
  }

  function Slide() {
    if (check === false) {
      $("#segundo").slideUp(1000);
      check = true;
    } else if (check === true) {
      $("#segundo").slideDown(1000);
      check = false;
    }
  }

  //   var boton = $("#boton");
  //   boton.click(Hide);
  //   boton.click(Toggle);
  //   boton.click(FadeOut);
  //   boton.click(FadeIn);
  //   boton.click(Slide);

  // ---------------------------------------------------

  //   Seleccionar elemento padre de un elemento
  //   $("#segundo").parent();

  //   Seleccionar elementos padre de un elemento
  //   $("#segundo").parents().css("background", "#ccc");

  //   Seleccionar elementos hijo de un elemento
  //   $(".contenedor").children();

  //   Seleccionar elementos hijo específico de un elemento
  //   $(".contenedor").children("#segundo").css("background", "#fff");

  //   Seleccionar elementos dentro de un elemento no necesariamente hijos directos
  //   $("body").find(".texto").css("background", "#000");

  //   Seleccionar elementos hermanos de un elemento
  //   $("#segundo").siblings().css("background", "#666666");

  //   Seleccionar elementos anterior a un elemento
  //   $("#segundo").prev().css('background',"#444");
  //   $("#segundo").prevAll().css("background", "#444");

  //   Seleccionar elementos siguiente a un elemento
  //   $("#segundo").next().css("background", "#444");
  //   $("#segundo").nextAll().css("background", "#555");

  //   Seleccionando el primer elemento
  //   $(".texto").first();

  //   Seleccionando el ultimo elemento
  //   $(".texto").last();

  //   Seleccionando el elemento según su indice
  //   $(".texto").eq(0);

  //   Seleccionando el elemento según algún parámetro
  //   $(".texto").filter("#segundo");

  //   Seleccionando todo los elementos excepto el indicado
  //   $(".texto").not("#segundo");

  // ---------------------------------------------------

  //   Modificar texto
  // var textoSegundo=$('#segundo').text()
  //   $("#segundo").text("mensaaaaaaaaaje");

  //   Modificar HTML
  //   $("#segundo").html("<strong>Esto es un nuevo parrafo</strong>");

  //   Modificar o agregar atributos
  //   $("#segundo").eq(0).attr("id", "primero");
  //   $("#segundo").eq(0).attr({
  //     id: "primero",
  //     class: "texto fondo-rojo",
  //   });

  //   var contenedor = $(".contenedor");
  //   var segundoParrafo = $("#segundo");

  //   $("#boton").click(function () {
  //     var nuevoParrafo = $("<p>")
  //       .attr("class", "texto")
  //       .text("Esto es un nuevo parrafo");

  //     contenedor.prepend(nuevoParrafo);

  //     contenedor.append(nuevoParrafo);
  //   });

  // ---------------------------------------------------
  //   Añadir una clase al elemento
  //   $("#segundo").addClass("fondo-rojo");

  //   Eliminar una clase al elemento
  //   $("#segundo").removeClass("texto");

  //   Alternar en agregar o eliminar una clase
  //   function cambiarFondo() {
  //     $("#segundo").toggleClass("fondo-rojo");
  //   }

  //   $("#boton").click(cambiarFondo);

  //   var boton = $("#boton");
  //   Añadiendo un evento con función anónima
  //   boton.click(() => {
  //     alert("Hey");
  //   });
  //   Añadiendo un evento con función declarada
  //   function saludo() {
  //     alert("Hey");
  //   }
  //   boton.click(saludo);

  //   Añadiendo evento con .on()
  //   boton.on("dblclick", function () {
  //     alert("Hey");
  //   });

  //   Eliminando evento con .off
  //   boton.off("click");
  // ---------------------------------------------------

  //   ANIMACIONES
  var boton = $("#boton");
  var detener = $("#detener");

  //   .animate(Propiedades, tiempo en milisegundos,funcion(callback))

  //   boton.on("click", () => {
  //     // $("#segundo").animate(
  //     //   {
  //     //     width: "50%",
  //     //     height: "200px",
  //     //     margin: "auto",
  //     //   },
  //     //   3000,
  //     //   () => {
  //     //     alert("Hey");
  //     //   }
  //     // );

  //     $("#segundo").animate(
  //       {
  //         width: "50%",
  //         height: "200px",
  //         textAlign: "center",
  //       },
  //       3000
  //     );

  //     $("#segundo").animate(
  //       {
  //         width: "100%",
  //         height: "100px",
  //         textAlign: "center",
  //       },
  //       3000
  //     );
  //   });

  //   detener.on("click", () => {
  //     //   .stop(limpiarCola,saltarFinal)
  //     $("#segundo"), stop(true, false);
  //   });

  //   CALCULAR EL ANCHO
  //   boton.on("click", () => {
  //     //Ancho del elemento
  //     var ancho = $("#segundo").width();

  //     //Ancho del elemento incluyendo padding
  //     var ancho = $("#segundo").innerWidth();

  //     //Ancho del elemento incluyendo padding y border
  //     var ancho = $("#segundo").outerWidth();

  //     //Ancho del elemento padding, border y margin
  //     var ancho = $("#segundo").outerWidth(true);

  //     alert(ancho);
  //   });

  //   CALCULAR EL ALTO
  boton.on("click", () => {
    //Alto del elemento
    var alto = $("#segundo").heigth();

    //Alto del elemento incluyendo padding
    var alto = $("#segundo").innerHeight();

    //Alto del elemento incluyendo padding y border
    var alto = $("#segundo").outerHeight();

    //Alto del elemento padding, border y margin
    var alto = $("#segundo").outerHeight(true);

    alert(alto);
  });
});
