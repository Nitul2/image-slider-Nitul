const images = [
    'alison-wang-mou0S7ViElQ-unsplash.jpg',
    'francesco-ungaro-qgZvBPM9Hm4-unsplash.jpg',
    'gracia-dharma-qTlbO6MKQH0-unsplash.jpg',
    'hugh-whyte-ianb-gm0Cw0-unsplash.jpg',
    'julia-sakalouskaya-Mpx9cZg_iXK-unsplash.jpg',
    'Karthik-sreenivas-81xxWruf4Gc-unsplash.jpg',
    'long-ltiga-nguyen-JSt9VzSFq3A-unsplash.jpg',
    'nikunj-singh-mMdCp7mLGKk-unsplash.jpg'
]
let imageIndex = 0;
const img = document.getElementById("image-slider")
setInterval(() => {
    if (imageIndex === images.length) {
        imageIndex = 0;
    }
    const imagelink = images[imageIndex];
    imageIndex++;
    // console.log(imagelink)
    img.setAttribute("src", imagelink)
}, 4000

)