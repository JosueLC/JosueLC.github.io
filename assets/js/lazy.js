const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const loadImage = (entry) => {
    const img = entry.target.children[0];
    img.src = img.dataset.src;
    observer.unobserve(entry.target);
    console.log('Loading picture.');
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});

const registerImage = (image) => {
    observer.observe(image);
}

const FOX_API = 'https://randomfox.ca/images/';

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const createNodeImage = () => {
    const fig = document.createElement('figure');
    const image = document.createElement('img');
    image.dataset.src = `${FOX_API}${random(1, 122)}.jpg`;
    fig.append(image);
    return fig;
}

const btnOnClick = () => {
    const mountNode = document.querySelector('.pics');
    const nuevaImagen = createNodeImage();
    mountNode.append(nuevaImagen);
    registerImage(nuevaImagen);
}

window.addEventListener('load', () => {
    const addButton = document.querySelector('button');
    addButton.addEventListener('click', btnOnClick);
});