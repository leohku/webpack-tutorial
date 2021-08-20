import './heading.scss';

class Heading {
    render(pageName) {
        const body = document.querySelector('body');
        const heading = document.createElement('h1');
        heading.innerHTML = 'Webpack is awesome. This is "' + pageName + '" page.'; 
        body.appendChild(heading);
    }
}

export default Heading;