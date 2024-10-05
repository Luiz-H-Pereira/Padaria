let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function trocarImagem(){

    images[currentImageIndex]
        .classList.remove("selecionar")

    currentImageIndex++

    if(currentImageIndex >= max){
        currentImageIndex = 0
    }
    images[currentImageIndex]
        .classList.add("selecionar")
}

function start(){
    setInterval(() => {
        trocarImagem()
    }, time)
}

window.addEventListener("load", start)

