// const icons = document.querySelectorAll('.icons-lists').forEach(icon => console.log('icon'))
// console.log(icons)



    const favs = document.getElementsByClassName('fav')
    let x = 0;
    for(i=0; i < favs.length; i++){
        favs[i].addEventListener('click', function(){
        for(let fa of favs){
            fa.classList.remove('active-icon')
        }
           this.classList.add('active-icon')
        })
       
    }
    const listItem = document.querySelectorAll('li')
    listItem.forEach(item => {
        item.onclick = function(){   
            for(let list of listItem){
                list.classList.remove('active')
            }
            this.classList.add('active')
        }
    })
    
    

// window.onload = function(){
//     const lists = [
//         'https://assets4.lottiefiles.com/packages/lf20_n8GX5U.json',
//         'https://assets3.lottiefiles.com/packages/lf20_c21tPU/electric-car-lottie-illustradraw-download.json',
//         'https://assets3.lottiefiles.com/packages/lf20_LjGOgX.json'
//     ]
//     const players = document.querySelectorAll('lottie-player');
//     let asset;
//         lists.forEach(list => {
//             asset = list
//             players.forEach(player => {
//                 player.load(asset)
//             })
//         })
    
// }

const lotties = document.querySelectorAll('.lottie')
const part = document.querySelector('.text-inside')
const second = document.querySelector('.second-page')
const show = document.getElementById('show-button')
const overlay = document.getElementById('over-lay-bar')
const close = document.getElementById('close-button')
const show_bar = document.querySelector('.bar-icon')
const side_icon = document.querySelector('.side-bar-icons')

show_bar.onclick = function(){
    show_bar.classList.toggle('rotate')
    if(show_bar.classList.contains('rotate')){
        side_icon.classList.add('animate-icon')
    }else{
        side_icon.classList.remove('animate-icon')
    }
}

show.onclick = function(){
    overlay.style.opacity = 1;
    overlay.style.width = '100%'
    overlay.style.height = '100%'
}

close.onclick = function(){
    overlay.style.opacity = 0;
    overlay.style.width = '0'
    overlay.style.height = '0'
}
// lotties.forEach(lottie => {
//     lottie.addEventListener('mouseenter', () => {
//         const oklet = part.querySelector('h5')
//         oklet.style.marginBottom = '0'
//         console.log('ok')
//     });
//     lottie.addEventListener('mouseleave', () => {
        
//     })
// })



const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.intersectionRatio)
        if(entry.intersectionRatio > 0){
           second.classList.add('animate-me')
        }else{
            second.classList.remove('animate-me')
        }
    })
})

observer.observe(second)