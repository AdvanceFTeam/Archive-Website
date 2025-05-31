window.onscroll = function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

document.querySelector('.btn-primary').addEventListener('click', function (e) {
    // e.preventDefault(); 
    window.location.href = "src/download.html";
});


// document.querySelector('.btn-primary').addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector('#features').scrollIntoView({ 
//         behavior: 'smooth' 
//     });
// });


document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', function () {
        const faqItem = this.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');

        document.querySelectorAll('.faq-item').forEach((item) => {
            if (item !== faqItem) {
                item.classList.remove('open');
                item.querySelector('.faq-answer').style.maxHeight = null;
                item.querySelector('.faq-answer').style.paddingTop = '0';
                item.querySelector('.faq-answer').style.paddingBottom = '0';
            }
        });

        faqItem.classList.toggle('open');

        if (faqItem.classList.contains('open')) {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
            faqAnswer.style.paddingTop = '10px';
            faqAnswer.style.paddingBottom = '10px';
        } else {
            faqAnswer.style.maxHeight = null;
            faqAnswer.style.paddingTop = '0';
            faqAnswer.style.paddingBottom = '0';
            faqAnswer.style.contains = "0";
        }
    });
});
