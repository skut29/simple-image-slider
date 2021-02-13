let images = ['alena-aenami-chillcowfin.jpg', 'muhammx-nafay-insta-le_nafay-farm-house-blossom.jpg', 'sylvain-sarrailh-yoshifalaises.jpg'];
let i = 0;

function next () {
    if(i >= images.length - 1) i = -1
        i++
    return displayImage()
}

function prev () {
  if(i >= 0) i = images.length 
      i--
  return displayImage()
}

console.log(next)

function displayImage () {
    document.getElementById("slider").setAttribute('src', images[i])
}