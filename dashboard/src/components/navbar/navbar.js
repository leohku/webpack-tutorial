import './navbar.scss';

const frontendList = [
    {
        name: 'Hello World',
        url: '/hello-world-page'
    },
    {
        name: 'Kiwi',
        url: '/kiwi-page'
    }
]

class NavBar {
    render() {
        const body = document.querySelector('body');
        const container = document.createElement('ul');
        container.classList.add('nav-container');
        body.appendChild(container);

        frontendList.map(data => {
            const item = document.createElement('li');
            item.innerHTML = `<a href="${data.url}">${data.name}</a>`;
            item.classList.add('nav-item');
            container.appendChild(item);
        })
    }
}

export default NavBar;