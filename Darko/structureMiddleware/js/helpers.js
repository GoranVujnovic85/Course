function printData(dataToPrint){
    document.getElementById(pintId).innerHTML= dataToPrint
}

function setBackground(color){

    document.getElementsByTagName('body')[0].style.backgroundColor = color
}


function markPagePretty(pageNumber){
    if(nicePages.includes(pageNumber)){
        setBackground(nice)
    }else{
        setBackground(defaultBackground)
    }
}