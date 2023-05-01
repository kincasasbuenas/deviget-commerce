define([
    'jquery',
], function($) {
    'use strict';
    
    var jq = {
        init: function(){
            this.backTopHtml();
            this.btnClick();
            this.scrollTop();
        },

        backTopHtml(){
            console.log('hola');
            $('<div id="scrollTop"></div>').appendTo('body');
        },

        scrollTop() {
            $(window).scroll(function () {
                if($(this).scrollTop()){
                    $('#scrollTop').fadeIn();
                } else {
                    $('#scrollTop').fadeOut();
                }
            })
        },

        btnClick(){
            $('#scrollTop').on('click',function () {
                $('html, body').animate({scrollTop:0}, 1000);
            })
        }
    }

    $(document).ready(function() {
        jq.init();
    })

});