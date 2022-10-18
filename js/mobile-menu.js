(() => {
    const refs = {
        openMenuBtn: document.querySelector(".menu-open"),
        closeMenuBtn: document.querySelector(".menu-close"),
        menu: document.querySelector(".mob-menu"),
        body: document.querySelector("body"),
        menuList: document.querySelector("mob-menu-list"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    refs.menuList.addEventListener("click", removeMenu);

    function toggleMenu() {
        refs.menu.classList.toggle("visually-hidden");
        refs.body.classList.toggle("no-scroll");
        refs.body.classList.toggle("no-scroll");
    }

    function removeMenu() {
        refs.menu.classList.add("visually-hidden")
    }
    })()

// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();