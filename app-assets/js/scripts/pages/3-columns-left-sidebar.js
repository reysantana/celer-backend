/*=========================================================================================
    File Name: 3-columns-left-sidebar.js
    Description: Invoices list datables configurations
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax HTML Admin Template
    Version: 1.1
    Author: Pixinvent
    Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function() {
    /***********************************
    *        js of small Slider        *
    ************************************/

    var sm_options = {
        start: [30,70],
        behaviour: 'drag',
        connect: true,
        range: {
            'min': 20,
            'max': 80
        }
    };
    var smallSlider = document.getElementById('small-slider');
    noUiSlider.create(smallSlider, sm_options);


    /*************************************
    *        Default Score Rating        *
    **************************************/
    $.fn.raty.defaults.path = '<?=base_url()?>app-assets/images/raty/';

    $('#score-rating').raty({
        score: 3
    });

    $(".sidebar-sticky").sticky();
});