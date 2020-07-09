const shareBtn = document.querySelector('.cta');
const socialsContainer = document.querySelector('.socials');

shareBtn.addEventListener('click', () => {
  shareBtn.classList.toggle('open');
  socialsContainer.classList.toggle('open');
})
