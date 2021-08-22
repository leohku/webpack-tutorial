import NavBar from './components/navbar/navbar';
const url = window.location.pathname;

const navBar = new NavBar();
navBar.render();

if (url === '/hello-world-page') {
    import('HelloWorldApp/HelloWorldPage').then(HelloWorldPageModule => {
        const HelloWorldPage = HelloWorldPageModule.default;
        const helloWorldPage = new HelloWorldPage();
        helloWorldPage.render();
    });
} else if (url === '/kiwi-page') {
    import('KiwiApp/KiwiPage').then(KiwiPageModule => {
        const KiwiPage = KiwiPageModule.default;
        const kiwiPage = new KiwiPage();
        kiwiPage.render();
    });
};