function nombre(nom,apep,apem,fecha,rfc){
    if (nom.value == "")
        alert("Favor de ingresar nombre.");
    else if (!nom.value.match(/^[A-Z a-z]/))
            alert("Nombre ingresado no valido");
        else{
            apellidopaterno(apep);
            n=nom.value.match(/^[A-Z a-z]{1}/);
        }
        function apellidopaterno(apep){
            if (apep.value == "")
                alert("Favor de ingresar apellido paterno.");
            else
                if (!apep.value.match(/^[A-Z a-z]/))
                    alert("Apellido paterno ingresado no valido");
                else{
                    apellidomaterno(apem);
                    p=apep.value.match(/^[A-Z a-z]{2}/);
                }
                function apellidomaterno(apem){
                    if (apem.value == "")
                        alert("Favor de ingresar apellido materno.");
                    else
                        if (!apem.value.match(/^[A-Z a-z]/))
                            alert("Apellido materno ingresado no valido");
                        else{
                            dia(fecha);
                            m=apem.value.match(/^[A-Z a-z]{1}/);
                        }
                        function dia(fecha){
                            var dHoy = new Date();
                            var dCapt = "";
                                if (fecha.value == "")
                                    alert("Ingrese una fecha.");
                                else{
                                    dCapt = validaFecha(fecha.value);
                                    if (dCapt != "" && dCapt < dHoy){
                                        alert("Aqui hay"+dCapt);
                                        Dat(nom,apep,apem,fecha,rfc);
                                    }
                                    else
                                        alert("La fecha debe ser menor a la fecha actual"); 
                            
                            }
                    }
            }
}
function validaFecha(valor){
    var dConvertida = null;
    var nAnio=0, nMes=0, nDia = 0;
    if (valor.match(/^\d{4}\-\d{2}\-\d{2}$/)){
        nAnio = parseInt(valor.substring(0,4), 10);
        nMes =  parseInt(valor.substring(5,7), 10);
        nDia =  parseInt(valor.substring(8), 10);

        sAnio = valor.substring(0,4), 10;
        sMes =  valor.substring(5,7), 10;
        sDia =  valor.substring(8), 10;

    if (nDia <1 || nDia>31)
        alert("El día no es válido")
        else{
            if (nMes <1 || nMes>12)
        alert("El mes no es válido");
        else{
            if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||nMes==8 || nMes==10 || nMes==12) && nDia > 31)
                alert("El mes tiene máximo 31 días");
        else if ((nMes==4 || nMes==6 || nMes==9 ||nMes==11) && nDia > 30)
                alert("El mes tiene máximo 30 días");
        else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
                alert("Febrero tiene 28 días o 29 en bisiesto");
        else{
            dConvertida = new Date();
            dConvertida.setFullYear(nAnio, nMes-1, nDia);
            //validarfc(nAnio, nMes-1, nDia);
            }
        }
    }
        validarfc(sAnio,sMes,sDia);
}
        else{
            alert("No tiene formato de fecha");
        }
        return dConvertida;
    }
}
    function validarfc(a, m, d){
        alert("aqui hay"+a);
        alert("aqui hay"+m);
        alert("aqui hay"+d);
        if (campo.value == "")
            alert("Faltan datos");
        else
            if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/))
                alert("El RFC NO CONCUERDA CON LOS DATOS INGRESADOS.");
            else
                alert("RFC valido.");
            return year,mes,dias;
    }