console.log("JavaScript is connected!");



$(document).ready(function() {
    let giftGrade = '';
    let continent = '';

    function loadLandingPage() {
        $('#landing').removeClass('display-none');
        $('#row1-id').addClass('display-none');
        $('#row2-id').addClass('display-none');
        $('#row3-id').addClass('display-none');
        // make sure to add the following class to the css:
        // .display-none {display: none;}
    }

    function loadPageOne() {
        $('#landing').addClass('display-none');
        $('#row1-id').removeClass('display-none');
        $('#row2-id').addClass('display-none');
        $('#row3-id').addClass('display-none');
        // make sure to add the following class to the css:
        // .display-none {display: none;}
    }

    function loadPageTwo() {
        $('#landing').addClass('display-none');
        $('#row1-id').addClass('display-none');
        $('#row2-id').removeClass('display-none');
        $('#row3-id').addClass('display-none');
        // make sure to add the following class to the css:
        // .display-none {display: none;}
    }

    function loadPageThree() {
        $('#landing').addClass('display-none');
        $('#row1-id').addClass('display-none');
        $('#row2-id').addClass('display-none');
        $('#row3-id').removeClass('display-none');
        // make sure to add the following class to the css:
        // .display-none {display: none;}
    }

    function getGiftGrade(grade) {
        // get the "value" attribute off button
        // 3 buttons with 1 corresponding value
        giftGrade = grade;
        loadPageTwo();
    };


    function getContinent(selectedContinent) {
        // get the "value" attribute off button
        // 3 buttons with 1 corresponding value
        continent = selectedContinent;
        loadPageThree();
    };

    $('#start-button').addEventListener('click', loadPageOne);
    $('.page-one-button').addEventListener('click', getGiftGrade);
    $('.page-two-button').addEventListener('click', getContinent);
    $('.page-one-back-button').addEventListener('click', loadLandingPage);
    $('.page-two-back-button').addEventListener('click', loadPageOne);
    $('.page-three-back-button').addEventListener('click', loadPageTwo);
});