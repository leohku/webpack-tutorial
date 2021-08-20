import './heading.scss';

class Heading {
    render() {
        const body = document.querySelector('body');
        const heading = document.createElement('h1');
        heading.innerHTML = "Webpack is awesome";
        body.appendChild(heading);
    }
}

export default Heading;