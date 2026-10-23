const menuButton = document.querySelector('.mobile-menu');
const header = document.querySelector('.site-header');
const chatButton = document.querySelector('.chat-button');
const chatPanel = document.querySelector('.chat-panel');
const chatClose = document.querySelector('.chat-close');

menuButton?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

chatButton?.addEventListener('click', () => {
  const isOpen = chatPanel.classList.toggle('open');
  console.log("Clicked")
  chatPanel.setAttribute('aria-hidden', String(!isOpen));
});

chatClose?.addEventListener('click', () => {
  chatPanel.classList.remove('open');
  chatPanel.setAttribute('aria-hidden', 'true');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    chatPanel?.classList.remove('open');
    chatPanel?.setAttribute('aria-hidden', 'true');
    header?.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});

const navItems = document.querySelectorAll('.has-mega-menu');

navItems.forEach((item) => {
  const trigger = item.querySelector('.nav-trigger');

  trigger?.addEventListener('click', (event) => {
    event.stopPropagation();

    const willOpen = !item.classList.contains('menu-open');

    navItems.forEach((otherItem) => {
      otherItem.classList.remove('menu-open');
      otherItem
        .querySelector('.nav-trigger')
        ?.setAttribute('aria-expanded', 'false');
    });

    if (willOpen) {
      item.classList.add('menu-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

/* Close when clicking outside the navigation */
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) {
    navItems.forEach((item) => {
      item.classList.remove('menu-open');
      item
        .querySelector('.nav-trigger')
        ?.setAttribute('aria-expanded', 'false');
    });
  }
});

/* Close menus with Escape */
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    navItems.forEach((item) => {
      item.classList.remove('menu-open');
      item
        .querySelector('.nav-trigger')
        ?.setAttribute('aria-expanded', 'false');
    });
  }
});
