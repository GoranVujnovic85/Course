window.addEventListener("load", () => {
    document.getElementById('page2').onclick = ()=>{
        document.getElementById('pageData').innerHTML= '<div>darko2</div>'
        darko = 2
        darko1()
    }
})
function darko2(){
    alert('darko2')
}
