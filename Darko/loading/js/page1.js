// window.onload = (event) => {
window.addEventListener("load", () => {
    document.getElementById('page1').onclick = () => {
        document.getElementById('pageData').innerHTML= '<div>darko1</div>'
        darko = 1
        darko4()
    }
})

function darko1(){
    alert('darko1')
}