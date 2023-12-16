$(document).ready(function () {
    // const CHEAP = $('#cheap-button').attr('value');
    // const MID = $('#page1').attr('value');
    // const EXPENSIVE = $('#page1').attr('value');
    // const CONTINENTTEST = $('#page2').attr('value');
    let giftGrade = '';
    let continent = '';

    lottie.loadAnimation({
        container: document.getElementById("lottie-container"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "assets/images/json/santa-delivery.json", // path to your animation file
    });

    function loadLandingPage() {
        // makes sure landing page displays if page reloaded
        // or back button pressed
        $('#landing-page').removeClass('display-none');
        $('#page1').addClass('display-none');
        $('#page2').addClass('display-none');
        $('#page3').addClass('display-none');
        $('#page4').addClass('display-none');

        $('#landing-page').addClass('d-flex');
        $('#page1').removeClass('d-flex');
        $('#page2').removeClass('d-flex');
        $('#page3').removeClass('d-flex');
        $('#page4').removeClass('d-flex');
    }
    loadLandingPage();

    function loadPageOne() {
        // makes sure page one loads on start button click
        // or back button pressed
        $('#landing-page').addClass('display-none');
        $('#page1').removeClass('display-none');
        $('#page2').addClass('display-none');
        $('#page3').addClass('display-none');
        $('#page4').addClass('display-none');

        $('#landing-page').removeClass('d-flex');
        $('#page1').addClass('d-flex');
        $('#page2').removeClass('d-flex');
        $('#page3').removeClass('d-flex');
        $('#page4').removeClass('d-flex');
    }

    function loadPageTwo() {
        // makes sure page two loads on start button click
        // or back button pressed
        $('#landing-page').addClass('display-none');
        $('#page1').addClass('display-none');
        $('#page2').removeClass('display-none');
        $('#page3').addClass('display-none');

        $('#landing-page').removeClass('d-flex');
        $('#page1').removeClass('d-flex');
        $('#page2').addClass('d-flex');
        $('#page3').removeClass('d-flex');
    }

    function loadPageThree() {
        // makes sure page three loads on start button click
        // or back button pressed
        $('#landing-page').addClass('display-none');
        $('#page1').addClass('display-none');
        $('#page2').addClass('display-none');
        $('#page3').removeClass('display-none');
        $('#page4').addClass('display-none');

        $('#landing-page').removeClass('d-flex');
        $('#page1').removeClass('d-flex');
        $('#page2').removeClass('d-flex');
        $('#page3').addClass('d-flex');
        $('#page4').removeClass('d-flex');
    }

    // Add a new function for loading page 4
    function loadPageFour() {
        console.log('inside page 4')
        $('#landing-page').addClass('display-none');
        $('#page1').addClass('display-none');
        $('#page2').addClass('display-none');
        $('#page3').addClass('display-none');
        $('#page4').removeClass('display-none');

        $('#landing-page').removeClass('d-flex');
        $('#page1').removeClass('d-flex');
        $('#page2').removeClass('d-flex');
        $('#page3').removeClass('d-flex');
        $('#page4').addClass('d-flex');
    }


    function getGiftGrade() {
        // get the "value" attribute off the clicked gift-grade buttons
        giftGrade = $(this).attr('data-value');
        console.log("grade selected: " + giftGrade);
        loadPageTwo();
    };

    function getContinent() {
        // get the "value" attribute off the clicked continent buttons
        continent = $(this).attr('data-value');
        console.log("continent selected: " + continent);
        loadPageThree();
    };

      // go back to "Home" button
    $('#return-home').on('click', function() {
        loadLandingPage();
    });


    $('#start-gifting-button').on('click', loadPageOne);
    $('.page-one-button').on('click', getGiftGrade);
    $('.page-two-button').on('click', getContinent);
    $('#page-one-back-button').on('click', loadLandingPage);
    $('#page-two-back-button').on('click', loadPageOne);
    $('#page-three-back-button').on('click', loadPageTwo);



    //change the Santa image based on screen width
    function santaImageVisibility() {
        if ($(window).width() <= 768) {
            $('.santa-image').hide();
        } else {
            $('.santa-image').show();
        }
    }

    $('#start-gifting-button').on('click', function() {
        loadPageOne();
        santaImageVisibility();
    });

    // resize to adjust the Santa image visibility
    $(window).resize(santaImageVisibility);



    // EmailJS script:
    // (function () {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init('eE_kGwavkK_CYEjee');
    // })();

    // window.onload = function () {
        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();
            this.send_gift.value = giftGrade
            // this.received_gift.value = 
            this.continent.value = continent
            // these IDs from the previous steps
            emailjs.sendForm('service_lcrv0bl', 'contact_form', this)
                .then(function () {
                    console.log('SUCCESS!');
                    loadPageFour(); 
                }, function (error) {
                    console.log('FAILED...', error);
                });
        });
    // }
});