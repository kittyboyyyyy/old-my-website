/*banner 1*/ 

document.querySelectorAll('.banner img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
    }
})

document.querySelector('.banner span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}


/*banner-2*/ 

document.querySelectorAll('.banner1 img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image1').style.display = 'block';
    }
})

document.querySelector('.banner1 span').onclick = () =>{
    document.querySelector('.popup-image1').style.display = 'none';
}