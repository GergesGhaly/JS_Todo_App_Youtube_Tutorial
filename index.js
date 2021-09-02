const inputbx = document.querySelector('.inputfiled input')
const addbtn = document.querySelector('.inputfiled button')
const todo = document.querySelector('.todolist')
const clear = document.querySelector('.footer button')

inputbx.onkeyup = ()=>{

let userdata = inputbx.value

if(userdata != 0 ){

    addbtn.classList.add('active')


}else{

    addbtn.classList.remove('active')

}

}


addbtn.onclick = ()=>{

    let userdata = inputbx.value;
    let getstorg = localStorage.getItem('new todo')
    if(getstorg == null){

        listarr=[];
    }else{
        listarr= JSON.parse(getstorg)
    }

    listarr.push(userdata)
    localStorage.setItem('new todo',JSON.stringify (listarr))
    showtasks();
    addbtn.classList.remove('active')

}

function showtasks(){


    let getstorg = localStorage.getItem('new todo')
    if(getstorg == null){

        listarr=[];
    }else{
        listarr= JSON.parse(getstorg)
    }
    const ped= document.querySelector('.pending')
    ped.textContent= listarr.length
    if(listarr.length > 0 ){

        clear.classList.add('active')
        
        }else{
        
            clear.classList.remove('active')
        
        }
        
    let newlitag = '';
    listarr.forEach((element, index, ) => {


        newlitag += `<li> ${element} <span onclick="delettask(${index})";><i class="fas fa-trash"></i></span> </li>`


    })

todo.innerHTML =newlitag;
inputbx.value="";


}

function delettask(index){

    let getstorg = localStorage.getItem('new todo')
    listarr= JSON.parse(getstorg)
    listarr.splice(index,1)
    localStorage.setItem('new todo',JSON.stringify(listarr))
showtasks()

}


clear.onclick=()=>{

    listarr=[];

    localStorage.setItem('new todo',JSON.stringify(listarr))
showtasks()


}