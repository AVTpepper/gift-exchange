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


document.addEventListener('DOMContentLoaded', (event) => {
    const giftButton = document.getElementById('gift-button');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const landingPage = document.getElementById('landing-page');
    const page1Images = page1.getElementsByClassName('selection-option');
    const page2Images = page2.getElementsByClassName('selection-option');

    // Show Page 1 when Gift button is clicked
    giftButton.addEventListener('click', function() {
        landingPage.style.display = 'none';
        page1.style.display = 'block';
    });

    // Function to hide current page and show next page
    function changePage(currentPage, nextPage) {
        currentPage.style.display = 'none';
        nextPage.style.display = 'block';
    }

    // For each image on Page 1, add click event to show Page 2
    Array.from(page1Images).forEach(function(image) {
        image.addEventListener('click', function() {
            changePage(page1, page2);
        });
    });

    // For each image on Page 2, add click event to show Page 3
    Array.from(page2Images).forEach(function(image) {
        image.addEventListener('click', function() {
            changePage(page2, page3);
        });
    });
});
