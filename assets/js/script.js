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
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747490/gift-images/Cropped%20images/gift-mod-na1_boecqh_a7alip.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747496/gift-images/Cropped%20images/gift-mod-na2_mail4b_uc2vaj.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/t_crop/v1702746527/gift-images/gift-mod-na3_nqa0ru.png');
                }
            } else if (giftGrade == "expensive") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747491/gift-images/Cropped%20images/gift-exp-na1_tz1zcu_aozd4l.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747483/gift-images/Cropped%20images/gift-exp-na2_pl7dtm_kuredt.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747479/gift-images/Cropped%20images/gift-exp-na3_pgepoo_expx1c.png');
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
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747488/gift-images/Cropped%20images/gift-cheap-eu1_ziqdgv_xkg07h.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747479/gift-images/Cropped%20images/gift-cheap-eu2_eup1ib_qaqyll.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747481/gift-images/Cropped%20images/gift-cheap-eu3_qpjkve_ggpn22.png');
                }
            } else if (giftGrade == "moderate") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747485/gift-images/Cropped%20images/gift-mod-eu1_ktgjtd_i4zgfw.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747495/gift-images/Cropped%20images/gift-mod-eu2_vmasnv_tlttla.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747486/gift-images/Cropped%20images/gift-mod-eu3_gfhxvw_i17mnq.png');
                }
            } else if (giftGrade == "expensive") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747486/gift-images/Cropped%20images/gift-exp-eu1_zdesvb_w8ebul.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747487/gift-images/Cropped%20images/gift-exp-eu2_gwagcq_fkw06r.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747490/gift-images/Cropped%20images/gift-exp-eu3_owmzqp_skjc9q.png');
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
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747478/gift-images/Cropped%20images/gift-cheap-asia1_gprn6k_hufpzc.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747477/gift-images/Cropped%20images/gift-cheap-asia2_lzqv6h_ijpejt.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/t_crop/v1702746500/gift-images/gift-cheap-asia3_gbrt7g.png');
                }
            } else if (giftGrade == "moderate") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/t_crop/v1702746520/gift-images/gift-mod-asia1_yhcufv.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/t_crop/v1702746522/gift-images/gift-mod-asia2_zohysw.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747485/gift-images/Cropped%20images/gift-mod-asia3_sexxwt_ccv7hu.png');
                }
            } else if (giftGrade == "expensive") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747486/gift-images/Cropped%20images/gift-exp-asia1_uwwsme_nzj71c.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747483/gift-images/Cropped%20images/gift-exp-asia2_bv8teo_yccor2.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/t_crop/v1702746515/gift-images/gift-exp-asia3_nlqvpa.png');
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
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747481/gift-images/Cropped%20images/gift-cheap-sa1_grgckr_lzshj6.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747482/gift-images/Cropped%20images/gift-cheap-sa2_rf2j7p_syihr1.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747492/gift-images/Cropped%20images/gift-cheap-sa3_hmpm1g_s0fn4j.png');
                }
            } else if (giftGrade == "moderate") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747481/gift-images/Cropped%20images/gift-mod-sa1_exqeux_wre75k.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/t_crop/v1702746528/gift-images/gift-mod-sa2_q4diqs.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747491/gift-images/Cropped%20images/gift-mod-sa3_zpxjyr_rugccl.png');
                }
            } else if (giftGrade == "expensive") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747492/gift-images/Cropped%20images/gift-exp-sa1_ox9q5f_ranvjb.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747493/gift-images/Cropped%20images/gift-exp-sa2_g6au09_f1631v.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/t_crop/v1702746515/gift-images/gift-exp-sa3_b7gew8.png');
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
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/t_crop/v1702749236/gift-images/gift-cheap-africa_uh7vsg.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/t_crop/v1702749154/gift-images/gift-cheap-africa2_y0aqex.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/t_crop/v1702749112/gift-images/gift-cheap-africa3_mnjwaz.png');
                }
            } else if (giftGrade == "moderate") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747484/gift-images/Cropped%20images/gift-mod-africa1_vtcgsr_vksni0.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747479/gift-images/Cropped%20images/gift-mod-africa2_aephp4_aienrf.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/t_crop/v1702748893/gift-images/gift-mod-africa3_eaupkk.png');
                }
            } else if (giftGrade == "expensive") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/t_crop/v1702749061/gift-images/gift-exp-africa1_qoqlsl.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/t_crop/v1702749024/gift-images/gift-exp-africa2_hvzltt.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/t_crop/v1702748966/gift-images/gift-exp-africa3_fifuhc.png');
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
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747477/gift-images/Cropped%20images/gift-cheap-aus1_ndpsvq_rdp12e.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747478/gift-images/Cropped%20images/gift-cheap-aus2_anwick_z3z5pp.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747494/gift-images/Cropped%20images/gift-cheap-aus3_sorbij_v63fue.png');
                }
            } else if (giftGrade == "moderate") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747489/gift-images/Cropped%20images/gift-mod-aus1_pqxxuo_hpadus.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747493/gift-images/Cropped%20images/gift-mod-aus2_va8jyc_xatpla.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747487/gift-images/Cropped%20images/gift-mod-aus3_dwrzjn_arv6wk.png');
                }
            } else if (giftGrade == "expensive") {
                if (calculation == 1) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747485/gift-images/Cropped%20images/gift-exp-aus1_vtwtua_jusfuh.png');
                } else if (calculation == 2) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747490/gift-images/Cropped%20images/gift-exp-aus2_wpewco_qu9xya.png');
                } else if (calculation == 3) {
                    calculatedGift = '';
                    $('#giftReceivedImage').prop('src', 'https://res.cloudinary.com/dpumbh2hj/image/upload/v1702747491/gift-images/Cropped%20images/gift-exp-aus3_jihoxl_vnyuip.png');
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