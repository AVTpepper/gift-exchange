$(document).ready(function() {
    // const CHEAP = $('#cheap-button').attr('value');
    // const MID = $('#page1').attr('value');
    // const EXPENSIVE = $('#page1').attr('value');
    // const CONTINENTTEST = $('#page2').attr('value');
    let giftGrade = '';
    let continent = '';

    function loadLandingPage() {
        // makes sure landing page displays if page reloaded
        // or back button pressed
        $('#landing-page').removeClass('display-none');
        $('#page1').addClass('display-none');
        $('#page2').addClass('display-none');
        $('#page3').addClass('display-none');

        $('#landing-page').addClass('d-flex');
        $('#page1').removeClass('d-flex');
        $('#page2').removeClass('d-flex');
        $('#page3').removeClass('d-flex');
    }
    loadLandingPage();

    function loadPageOne() {
        // makes sure page one loads on start button click
        // or back button pressed
        $('#landing-page').addClass('display-none');
        $('#page1').removeClass('display-none');
        $('#page2').addClass('display-none');
        $('#page3').addClass('display-none');

        $('#landing-page').removeClass('d-flex');
        $('#page1').addClass('d-flex');
        $('#page2').removeClass('d-flex');
        $('#page3').removeClass('d-flex');
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

        $('#landing-page').removeClass('d-flex');
        $('#page1').removeClass('d-flex');
        $('#page2').removeClass('d-flex');
        $('#page3').addClass('d-flex');
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


    $('#start-gifting-button').on('click', loadPageOne);
    $('.page-one-button').on('click', getGiftGrade);
    $('.page-two-button').on('click', getContinent);
    $('#page-one-back-button').on('click', loadLandingPage);
    $('#page-two-back-button').on('click', loadPageOne);
    $('#page-three-back-button').on('click', loadPageTwo);

});