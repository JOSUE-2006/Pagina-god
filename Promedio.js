function Calcular_prom() {


    var n1= parseFloat(document.getElementById ("numero1").value);
    var n2= parseFloat(document.getElementById ("numero2").value);
    var n3= parseFloat(document.getElementById ("numero3").value);
    
    var p = (n1+n2+n3) / 3;

    document.getElementsByName("total")[0].value=p;
}