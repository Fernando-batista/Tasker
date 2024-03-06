import { dashboard, project } from "./windows.js";

document.querySelector("#input-search").addEventListener("focus",()=>{
    document.querySelector("#search").style.outline = "1px solid #0095FF";
})
document.querySelector("#input-search").addEventListener("focusout",()=>{
    document.querySelector("#search").style.outline = "none";
})

const showWindow = (element) => {
    const windowContent = document.querySelector("#content-window");
    if(!(element.id == "dashboard")){
        windowContent.innerHTML = project;
    }else {
        windowContent.innerHTML = dashboard;

    }
}

const optionsBt = document.querySelectorAll(".option-dashboard");
optionsBt.forEach(function(element){
    element.addEventListener("click", ()=> showWindow(element))
})