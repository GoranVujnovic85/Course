window.addEventListener("load", () => {
    document.getElementById('page3').onclick = () => {
        document.getElementById('pageData').innerHTML = '<div>darko3</div>'
        if (darko == showTrashHold) {
            
            document.getElementById('pageData').innerHTML = '<div>previous page was 2</div>'
            setBackground(nice)
            
        }
        if(nicePages.includes(3)){
            setBackground(nice)
        }
        darko = 3
        darko2()
    }
})
function darko3(){
    alert('darko3')
}