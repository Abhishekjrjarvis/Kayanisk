const navPopUp = document.querySelector('.nav-popup')
const hr = document.querySelectorAll('.far')
const img1 = document.querySelector('.img-1')
const img2 = document.querySelector('.img-2')
const img3 = document.querySelector('.img-3')
const img4 = document.querySelector('.img-4')
const img5 = document.querySelector('.img-5')
const img6 = document.querySelector('.img-6')
const img7 = document.querySelector('.img-7')
const img8 = document.querySelector('.img-8')

const visit = document.querySelectorAll('.visit')
const v1 = document.querySelector('.v-1')
const v2 = document.querySelector('.v-2')
const v3 = document.querySelector('.v-3')
const v4 = document.querySelector('.v-4')
const v5 = document.querySelector('.v-5')
const v6 = document.querySelector('.v-6')
const v7 = document.querySelector('.v-7')
const v8 = document.querySelector('.v-8')

const h1 = document.querySelector('.h-1')
const h2 = document.querySelector('.h-2')
const h3 = document.querySelector('.h-3')
const h4 = document.querySelector('.h-4')
const h5 = document.querySelector('.h-5')
const h6 = document.querySelector('.h-6')
const h7 = document.querySelector('.h-7')
const h8 = document.querySelector('.h-8')

navPopUp.style.display = 'none'

window.addEventListener('load', function(){
    for(let h of hr){
        h.style.display = 'none'
    }
    for(let v of visit){
        v.style.display = 'none'
    }
    const id = setInterval(() => {
        navPopUp.style.display = 'block'
    }, 3000);

    setInterval(() => {
        navPopUp.style.display = 'none'
        clearInterval(id)
    }, 10000);
}) 

img1.addEventListener('mouseover', function(){
    img1.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/28_281f1baa-f6fa-4bee-9844-2df9337441aa_540x.jpg?v=1631569376'
    h1.style.display = 'block'
    img1.classList.add('scale')
    v1.style.display = 'block'
})
img1.addEventListener('mouseleave', function(){
    img1.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/25_6866ea1a-2371-437c-ac44-012f925f6bb4_360x.jpg?v=1631569376'
    h1.style.display = 'none'
    v1.style.display = 'none'
})

img2.addEventListener('mouseover', function(){
    img2.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/28_c37288bf-627b-4f01-bad9-aae41e3de322_540x.jpg?v=1631568513'
    h2.style.display = 'block'
    img2.classList.add('scale')
    v2.style.display = 'block'
})
img2.addEventListener('mouseleave', function(){
    img2.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/26_424f76aa-fdba-4e77-a570-7931480f21d7_360x.jpg?v=1631568513'
    h2.style.display = 'none'
    v2.style.display = 'none'
})

img3.addEventListener('mouseover', function(){
    img3.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/11_05258f2f-cdf0-468d-9d82-ba54e292f5c2_540x.jpg?v=1631562526'
    h3.style.display = 'block'
    img3.classList.add('scale')
    v3.style.display = 'block'
})
img3.addEventListener('mouseleave', function(){
    img3.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/9_cfddf5a1-319d-4ca2-aa91-5b9e86110a37_360x.jpg?v=1631562526'
    h3.style.display = 'none'
    v3.style.display = 'none'
})

img4.addEventListener('mouseover', function(){
    img4.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/12_90ece599-d6f2-40d3-b47d-dadec6ca1ff6_540x.jpg?v=1631569826'
    h4.style.display = 'block'
    img4.classList.add('scale')
    v4.style.display = 'block'
})
img4.addEventListener('mouseleave', function(){
    img4.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/11_888a81d1-b739-4fcf-b0e9-f4e6cbb7e445_360x.jpg?v=1631569826'
    h4.style.display = 'none'
    v4.style.display = 'none'
})

img5.addEventListener('mouseover', function(){
    img5.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/17_0d989316-2354-430e-9bf2-134da6021741_540x.jpg?v=1631565457'
    h5.style.display = 'block'
    img5.classList.add('scale')
    v5.style.display = 'block'
})
img5.addEventListener('mouseleave', function(){
    img5.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/16_16c5deec-6e93-4d1a-be4e-7d32bce0a6b7_360x.jpg?v=1631565457'
    h5.style.display = 'none'
    v5.style.display = 'none'
})

img6.addEventListener('mouseover', function(){
    img6.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/27_fb2ed572-92a3-46f8-940a-7ea71f12c0ae_540x.jpg?v=1631575712'
    h6.style.display = 'block'
    img6.classList.add('scale')
    v6.style.display = 'block'
})
img6.addEventListener('mouseleave', function(){
    img6.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/25_f090a564-73ac-4513-94eb-355b8a2e4051_360x.jpg?v=1631575712'
    h6.style.display = 'none'
    v6.style.display = 'none'
})

img7.addEventListener('mouseover', function(){
    img7.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/30_7eece5eb-14a1-4c68-a0ef-f1c269a6173a_540x.jpg?v=1631563799'
    h7.style.display = 'block'
    img7.classList.add('scale')
    v7.style.display = 'block'
})
img7.addEventListener('mouseleave', function(){
    img7.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/27_a7019dda-7ac3-4657-bb1f-308aaddb30c8_360x.jpg?v=1631563799'
    h7.style.display = 'none'
    v7.style.display = 'none'
})

img8.addEventListener('mouseover', function(){
    img8.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/31_4f04bbfc-88fc-499f-9dd8-76c11bb6def8_540x.jpg?v=1631575717'
    h8.style.display = 'block'
    img8.classList.add('scale')
    v8.style.display = 'block'
})
img8.addEventListener('mouseleave', function(){
    img8.src = 'https://cdn.shopify.com/s/files/1/0601/3403/1568/products/30_b2795775-5383-41a5-99e1-4ac5331781ee_360x.jpg?v=1631575717'
    h8.style.display = 'none'
    v8.style.display = 'none'
})

