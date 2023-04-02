const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--vh-menu', `${vh}px`);
let ww = window.innerWidth;

window.addEventListener(
    'resize',
    () => {
        ww = window.innerWidth;

        if (ww <= 1200) {
            return;
        }

        setTimeout(() => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }, 0);
    },
    true
);

window.addEventListener(
    'resize',
    () => {
        ww = window.innerWidth;

        setTimeout(() => {
            const vhMenu = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh-menu', `${vhMenu}px`);
        }, 0);
    },
    true
);

window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.documentElement.style.setProperty('--vh-menu', `${vh}px`);
    }, 500);
});

export default () => {};
