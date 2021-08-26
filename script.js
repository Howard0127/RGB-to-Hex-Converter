
const rgb = [0, 0, 0]
// const rNum = document.querySelector('.r-num')
// const gNum = document.querySelector('.g-num')
// const bNum = document.querySelector('.b-num')
const hexLetter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
const body = document.querySelector('body')
const sliderContainer = document.querySelector('.sliders')
const hexShow = document.querySelector('.hex-show')

body.style.backgroundColor = '#000'

sliderContainer.addEventListener('input', event => {
    const target = event.target
    const parent = target.parentElement
    const num = parent.children[2]
    num.innerText = `${target.value}`

    if (num.classList.contains('r-num')) {   
        rgb[0] = parseInt(target.value)
    } else if (num.classList.contains('g-num')) {
        rgb[1] = parseInt(target.value)
    } else {
        rgb[2] = parseInt(target.value)
    }

    let hex = convertToHex(rgb)
    hexShow.innerText = `${hex}`
    body.style.backgroundColor = `${hex}`
})


function convertToHex(rgb) {
    let result ='#'
    rgb.forEach(num => {
    let j = num % 16
    let i = (num - j) / 16

    let Letter1 = hexLetter[i]
    let Letter2 = hexLetter[j]

    result += Letter1 + Letter2
    })
return result
}




// const rSlider = document.querySelector('#r')
// rSlider.addEventListener('input', function getValue (e) {
//     rgb[0] = parseInt(e.target.value)
//     rNum.innerText = rgb[0]
//     body.style.backgroundColor = `${convertToHex (rgb)}`
//     hexShow.innerHTML = `${convertToHex (rgb)}`
// })

// const gSlider = document.querySelector('#g')
// gSlider.addEventListener('input', function getValue (e) {
//     rgb[1] = parseInt(e.target.value)
//     gNum.innerText = rgb[1]
//     body.style.backgroundColor = `${convertToHex (rgb)}`
//     hexShow.innerHTML = `${convertToHex (rgb)}`
// })

// const bSlider = document.querySelector('#b')
// bSlider.addEventListener('input', function getValue (e) {
//     rgb[2] = parseInt(e.target.value)
//     bNum.innerText = rgb[2]
//     body.style.backgroundColor = `${convertToHex (rgb)}`
//     hexShow.innerHTML = `${convertToHex (rgb)}`
// })
















