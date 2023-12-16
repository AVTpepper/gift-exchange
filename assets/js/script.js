$(document).ready(function () {
    let giftGrade = '';
    let continent = '';
    let calculatedGift = '';

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
        calculateGift();
        loadPageThree();
    };


    function calculateGift() {
        let calculation = Math.round((Math.floor(Math.random() * 11)) / 100 * 20) + 1;
        if (continent == "North America") {
            if (giftGrade == "affordable") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702746501/gift-images/gift-cheap-na1_gam5s9.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702746502/gift-images/gift-cheap-na2_titthk.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702746503/gift-images/gift-cheap-na3_eos2u8.png');
                }
            } else if (giftGrade == "moderate") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == "expensive") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == '') {
                console.log("no gift grade selected!");
            } else {
                console.log("Error! value of giftGrade is:" + giftGrade);
            };
        } else if (continent == "Europe") {
            if (giftGrade == "affordable") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == "moderate") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == "expensive") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == '') {
                console.log("no gift grade selected!");
            } else {
                console.log("Error! value of giftGrade is:" + giftGrade);
            };
        } else if (continent == "Asia") {
            if (giftGrade == "affordable") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == "moderate") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == "expensive") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == '') {
                console.log("no gift grade selected!");
            } else {
                console.log("Error! value of giftGrade is:" + giftGrade);
            };
        } else if (continent == "South America") {
            if (giftGrade == "affordable") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == "moderate") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == "expensive") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == '') {
                console.log("no gift grade selected!");
            } else {
                console.log("Error! value of giftGrade is:" + giftGrade);
            };
        } else if (continent == "Africa") {
            if (giftGrade == "affordable") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == "moderate") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == "expensive") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == '') {
                console.log("no gift grade selected!");
            } else {
                console.log("Error! value of giftGrade is:" + giftGrade);
            };
        } else if (continent == "Oceania") {
            if (giftGrade == "affordable") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == "moderate") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == "expensive") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', '');
                }
            } else if (giftGrade == '') {
                console.log("no gift grade selected!");
            } else {
                console.log("Error! value of giftGrade is:" + giftGrade);
            };
        } else if (continent == '') {
            console.log("Error, no country picked!");
        } else {
            console.log("Error! value of continent is:" + continent);
        };
    }

      // go back to "Home" button
    $('#return-home').on('click', function() {
        loadLandingPage();
    });


    $('#start-gifting-button').on('click', loadPageOne);
    $('.page-one-button').on('click', getGiftGrade);
    $('.page-two-button').on('click', getContinent);
    
    // back buttons and styling
    function hoverBackButton() {
        $(this).children('.back-button-text').removeClass('display-none');
    }

    function unHoverBackButton() {
        $(this).children('.back-button-text').addClass('display-none');
    }

    $('#page-one-back-button').on('click', loadLandingPage);
    $('#page-two-back-button').on('click', loadPageOne);
    $('#page-three-back-button').on('click', loadPageTwo);
    $('.back-button').on('mouseenter', hoverBackButton);
    $('.back-button').on('mouseleave', unHoverBackButton);


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
                    loadPageFour();
                    document.getElementById('contact-form').reset();
                }, function (error) {
                    console.log('FAILED...', error);
                    document.getElementById('contact-form').reset();
                });
        });
    // }
});