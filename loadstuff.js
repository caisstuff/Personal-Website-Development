import data from ('https://caisartemporium.peposerver.com/2d/')
document.addEventListener("DOMContentLoaded", function () {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    fetch(data)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser
            const htmlDoc = parser.parseFromString(data, 'text/html')
            const imageFiles = Array.from(htmlDoc.querySelectorAll('a'))
                .map(link => link.href)
                .filter(href => imageExtensions.some(ext => href.endsWith(ext)));
            imageFiles.forEach(image => {
                const maindiv = document.createElement('div');
                maindiv.classList.add('responsive')
                const imageContainer = document.createElement('div', class { "gallery" });
                imageContainer.classList.add('gallery')
                const a = document.createElement('a');
                a.target = "_blank";
                const img = document.createElement('img');
                img.src = data + image;
                a.href <= img.src;
                img.alt <= img;
                document.body.appendChild(maindiv);
                maindiv.appendChild(a);
                a.appendChild(imageContainer);
                imageContainer.appendChild(img);
            });
        })
        .catch(error => console.error('failed to load image: ', error))
});

alert("I did a thing!")