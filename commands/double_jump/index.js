const check = document.getElementsByClassName("checkbox")[0];
const displayOriginal = check.style.display;
check.addEventListener("click",()=>{
    for(const li of document.getElementsByClassName("bodyli2")){
        li.style.display = check.checked?displayOriginal:"none";
    }
})