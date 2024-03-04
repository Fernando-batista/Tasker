document.querySelector("#input-search").addEventListener("focus",()=>{
    document.querySelector("#search").style.outline = "1px solid #0095FF";
})
document.querySelector("#input-search").addEventListener("focusout",()=>{
    document.querySelector("#search").style.outline = "none";
})
