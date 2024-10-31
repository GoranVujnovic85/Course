window.addEventListener("load", () => {
    document.getElementById('page3').onclick = () => {
        document.getElementById('pageData').innerHTML = '<div>darko3</div>'
        if (darko == 2) {
            document.getElementById('pageData').innerHTML = '<div>previous page was 2</div>'
        }
        darko = 3
        darko2()
    }
})
function darko3(){
    alert('darko3')
}