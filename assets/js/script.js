$(document).ready(function() {
    const CHEAPBUTTON = $('#row1-id').attr('value');
    const CONTINENTTEST = $('#row2-id').attr('value');
    let giftGrade = '';
    let continent = '';

    function loadLandingPage() {
        // makes sure landing page displays if page reloaded
        // or back button pressed
        $('#landing').removeClass('display-none');
        $('#row1-id').addClass('display-none');
        $('#row2-id').addClass('display-none');
        $('#row3-id').addClass('display-none');
    }

    function loadPageOne() {
        // makes sure page one loads on start button click
        // or back button pressed
        $('#landing').addClass('display-none');
        $('#row1-id').removeClass('display-none');
        $('#row2-id').addClass('display-none');
        $('#row3-id').addClass('display-none');
    }

    function loadPageTwo() {
        // makes sure page two loads on start button click
        // or back button pressed
        $('#landing').addClass('display-none');
        $('#row1-id').addClass('display-none');
        $('#row2-id').removeClass('display-none');
        $('#row3-id').addClass('display-none');
    }

    function loadPageThree() {
        // makes sure page three loads on start button click
        // or back button pressed
        $('#landing').addClass('display-none');
        $('#row1-id').addClass('display-none');
        $('#row2-id').addClass('display-none');
        $('#row3-id').removeClass('display-none');
    }

    function getGiftGrade() {
        // get the "value" attribute off the clicked gift-grade buttons
        giftGrade = $(this).attr('value');
        console.log("grade selected: " + giftGrade);
        loadPageTwo();
    };

    function getContinent() {
        // get the "value" attribute off the clicked continent buttons
        continent = $(this).attr('value');
        console.log("continent selected: " + continent);
        loadPageThree();
    };


    $('#start-button').on('click', loadPageOne);
    $('#page-one-button').on('click', getGiftGrade);
    $('#page-two-button').on('click', getContinent);
    $('#page-one-back-button').on('click', loadLandingPage);
    $('#page-two-back-button').on('click', loadPageOne);
    $('#page-three-back-button').on('click', loadPageTwo);

});