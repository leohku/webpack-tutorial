import lol from './lol.png';
import altText from './altText.txt';
import './add-image.scss';

class AddImage {
    render() {
        const img = document.createElement('img');
        img.alt = altText;
        img.width = 300;
        img.src = lol;
        img.classList.add("add-image");
        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default AddImage;