import React from 'react';
import $ from 'jquery';


export default function loader() {

    return (
        <div className='loader-section'>
            <div class="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

$(window).on('load', function () {
    $('.loader-section').fadeOut(300);
});

$(document).ready(function () {
    $('.loader-section').show();
});

