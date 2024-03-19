const collapsibleLinkControl = (() => {
    const container = document.querySelector('.collapsible');
    const button = document.querySelector('.collapsible__img');

    const hideContainer = () => {
        if (container.classList.contains('show')) {
            container.classList.toggle('show', false);
            container.classList.toggle('hide', true);
            button.style.transform = 'rotate(180deg)';
        }
    };

    const showContainer = () => {
        if (container.classList.contains('hide')) {
            container.classList.toggle('hide', false);
            container.classList.toggle('show', true);
            button.style.transform = 'rotate(0deg)';
        }
    };

    const btnClickHandler = () => {
        if (container.classList.contains('show')) {
            hideContainer();
        } else {
            showContainer();
        }
    };

    const buttonEventsInit = () => {
        button.addEventListener('click', btnClickHandler);
    };

    return {
        buttonEventsInit: buttonEventsInit,
        hideContainer: hideContainer,
        showContainer: showContainer,
    };
})();

window.addEventListener('load', collapsibleLinkControl.buttonEventsInit);

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition > 0) {
        collapsibleLinkControl.hideContainer();
    } else if (scrollPosition == 0) {
        collapsibleLinkControl.showContainer();
    }
});
