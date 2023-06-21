let faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        const icon = faq.querySelector(".faq i");
        if (icon.className == "fas fa-minus") {
          icon.className = "fa fa-plus";
        } else {
          icon.className = "fas fa-minus";
        }
    })
})



