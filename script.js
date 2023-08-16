const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

const randomIndex = Math.floor(Math.random() * images.length);

const imgElement = document.createElement('img');

imgElement.src = 'images/' + images[randomIndex];
imgElement.alt = 'image';
imgElement.width = 500;
imgElement.height = 500; 

document.body.appendChild(imgElement);