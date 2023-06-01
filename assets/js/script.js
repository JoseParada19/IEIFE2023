var registrar = ()=>{
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    console.log(nombre);
    console.log(apellido);
    let persona = {"nombre":nombre,"apellido":apellido}
    let listadoPersonas = localStorage.getItem("personas");
    let listadoAntiguo = JSON.parse(listadoPersonas);
    if(listadoAntiguo==null){
        listadoNuevo = [persona]
    }else{
        //listadoAntiguo.push(persona)
        listadoNuevo = [...listadoAntiguo,persona]
    }
    console.log(persona)
    console.log(listadoAntiguo)
    console.log(listadoNuevo);
    localStorage.setItem("personas",JSON.stringify(listadoNuevo));
    //eContenedorTabla.innerHTML=""+listadoNuevo,length;
    render = "<table>"
    render+= "<tr><th>nombre</th><th>apellido</th><th>accion</th></tr>"
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element= listadoNuevo[i];
        console.log(element)
        render+="<tr>"
        render+="<td>"+element.nombre+"</td>"
        render+="<td>"+element.apellido+"</td>"
        render+="<td>"
        render+="<button id='btnEditar"+i+"'>editar</button>"
        render+="<button>eliminar</button>"
        render+="</td>"
        render+="</tr>"
        
    }   
    render += "</table>";
    eContenedorTabla.innerHTML = render;
    for(let i = 0; i < listadoNuevo.length; i++){
    var eBtn = document.getElementById("btnEditar"+i);
    let element = listadoNuevo[i]
    eBtn.addEventListener("click",()=>{alert("hola"+element.nombre+" "+element.apellido)})
    }
    
   }


document.getElementById("btn").addEventListener("click",registrar);
