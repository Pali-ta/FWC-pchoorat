// ==========================================
// 1. Vanilla JS: ระบบเปลี่ยนสีโทนชมพูด้วย Modulo (%) (cell03/ex01)
// ==========================================
const colorBtn = document.getElementById('color-btn');
const nameTag = document.getElementById('name-tag');

const pinkShades = ['#be185d', '#f472b6', '#fb7185', '#ec4899', '#db2777'];
let colorIndex = 0;

const changePinkAccent = () => {
    colorIndex = (colorIndex + 1) % pinkShades.length;
    if (nameTag) {
        nameTag.style.color = pinkShades[colorIndex];
    }
};

if (colorBtn) {
    colorBtn.addEventListener('click', changePinkAccent);
}


// ==========================================
// 2. jQuery: Smooth Scroll + ScrollSpy (cell03/ex04)
// ==========================================
$(document).ready(function () {
    
    // Smooth Scroll เมื่อคลิกเมนู Navbar
    $('.nav-item').on('click', function (e) {
        const targetAttr = $(this).attr('href');
        
        if (targetAttr.startsWith('#')) {
            e.preventDefault();
            const targetSection = $(targetAttr);
            
            if (targetSection.length) {
                $('html, body').animate({
                    scrollTop: targetSection.offset().top - 80
                }, 500);
            }
        }
    });

    // ScrollSpy Highlight เมนูตามตำแหน่งเลื่อนหน้าจอ
    $(window).on('scroll', function () {
        const scrollPos = $(window).scrollTop() + 100;

        $('section').each(function () {
            const sectionTop = $(this).offset().top;
            const sectionBottom = sectionTop + $(this).outerHeight();
            const sectionId = $(this).attr('id');

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                $('.nav-item').removeClass('active');
                $('.nav-item[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });

});