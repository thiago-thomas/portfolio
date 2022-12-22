// Get the image and insert it inside the modal - use its "alt" text as a caption
function openModal(evt) {
  let modal = evt.target.nextElementSibling
  modal.style.display = "block";
}
function closeModal(evt) {
  let modal = evt.target.closest('div');
  modal.style.display = "none";
}

let projectImgs = document.querySelectorAll('.project-img');

for (let i = 0; i < projectImgs.length; i++) {
  let el = projectImgs[i];
  el.addEventListener('click',openModal)

  let modal = el.nextElementSibling;

  let close = modal.querySelector('.close');
  close.addEventListener('click', closeModal)
}
