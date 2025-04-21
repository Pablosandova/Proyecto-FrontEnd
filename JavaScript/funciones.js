function obtenerFormulario() {
    //alert("ACCION DESDE EL FORMULARIO")
    var nombre = document.getElementById("nombre").value;
    var rut = document.getElementById("rut").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var reunion = document.getElementById("reunion").value;
    var direccion = document.getElementById("direccion").value;
    var idea = document.getElementById("idea").value;
    var errores = "";

    if (nombre.length <= 1) {
        errores += "<p class='text-danger'>*NOMBRE ES CAMPO REQUERIDO O DEBE SER MAYOR A 1 CARACTER</p>";
    }
    if (rut.length == 0) {
        errores += "<p class='text-danger'>*RUT ES CAMPO REQUERIDO</p>";
    }
    if (telefono.length == 0) {
        errores += "<p class='text-danger'>*TELÉFONO ES CAMPO REQUERIDO</p>";
    }
    if (correo.length == 0) {
        errores += "<p class='text-danger'>*CORREO ES CAMPO REQUERIDO</p>";
    }
    if (reunion.length == 0) {
        errores += "<p class='text-danger'>*REUNIÓN ES CAMPO REQUERIDO</p>";
    }
    if (direccion.length == 0) {
        errores += "<p class='text-danger'>*DIRECCIÓN ES CAMPO REQUERIDO</p>";
    }
    if (idea.length == 0) {
        errores += "<p class='text-danger'>*IDEA ES CAMPO REQUERIDO</p>";
    }

    if (errores != "") {
        alert(errores); // Muestra los errores en un cuadro de alerta
        return false; // Detiene la ejecución si hay errores
    }

    // Si no hay errores, muestra los valores en la consola
    console.log("Nombre: " + nombre + ", RUT: " + rut + ", Teléfono: " + telefono + ", Correo: " + correo);
    console.log("Reunión: " + reunion + ", Dirección: " + direccion + ", Idea: " + idea);

    return true; // Retorna true si todo está correcto
}

function obtenerFormularioJquery() {
    var nombre = $("#nombre").val();
    var rut = $("#rut").val();
    var telefono = $("#telefono").val();
    var correo = $("#correo").val();
    var reunion = $("#reunion").val();
    var direccion = $("#direccion").val();
    var idea = $("#idea").val();
    var errores = "";

    if (nombre.length <= 1) {
        errores += "* ¡NOMBRE ES CAMPO REQUERIDO O DEBE SER MAYOR A 1 CARÁCTER!\n";
    }
    if (rut.length == 0) {
        errores += "* ¡RUT ES CAMPO REQUERIDO!\n";
    }
    if (telefono.length == 0) {
        errores += "* ¡TELÉFONO ES CAMPO REQUERIDO!\n";
    }
    if (correo.length == 0) {
        errores += "* ¡CORREO ES CAMPO REQUERIDO!\n";
    }
    if (reunion.length == 0) {
        errores += "* ¡REUNIÓN ES CAMPO REQUERIDO!\n";
    }
    if (direccion.length == 0) {
        errores += "* ¡DIRECCIÓN ES CAMPO REQUERIDO!\n";
    }
    if (idea.length == 0) {
        errores += "* ¡IDEA ES CAMPO REQUERIDO!\n";
    }

    if (errores != "") {
        alert(errores); // Muestra los errores en un cuadro de alerta
        return false; // Detiene la ejecución si hay errores
    }

    // Si no hay errores, muestra los valores en la consola
    console.log("Nombre: " + nombre + ", RUT: " + rut + ", Teléfono: " + telefono + ", Correo: " + correo);
    console.log("Reunión: " + reunion + ", Dirección: " + direccion + ", Idea: " + idea);

    return true; // Retorna true si todo está correcto
}