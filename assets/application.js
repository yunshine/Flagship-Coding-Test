// Put your application javascript here

// JS variables, event listeners, and function for closing product page modal
const modal = document.querySelector("#product-page-modal");
const modalHeaderButton = document.querySelector("#product-page-modal-header-button");
const modalCloseButton = document.querySelector("#product-page-modal-close-button");

function closeProductPageModal() {
    modal.style.display = "none";
}

modalHeaderButton.addEventListener('click', closeProductPageModal);
modalCloseButton.addEventListener('click', closeProductPageModal);
