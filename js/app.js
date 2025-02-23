$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click', function(){
        mobileNav.classList.add('open');
        hamberger.style.display = 'none'; // Hide sidebar button
        times.style.display = 'block'; // Show cross button
    });

    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
        times.style.display = 'none'; // Hide cross button
        hamberger.style.display = 'block'; // Show sidebar button
    });

    // Add event listener for mobile nav links
    document.querySelectorAll('.mobile-nav ul li a').forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            mobileNav.classList.remove('open');
            times.style.display = 'none'; // Hide cross button
            hamberger.style.display = 'block'; // Show sidebar button
            let target = this.getAttribute('href');
            // If the link has a hash target, scroll to that element smoothly.
            if(target && target !== '#'){
                document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.getElementById('contactBtn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './files/Ankur Bombarde Resume.pdf';
    link.download = 'Ankur Bombarde Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});