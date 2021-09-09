// import {$,jQuery} from 'jquery';

// window.$ = $;
// window.jQuery = jQuery;

console.log('entre al js')
$(document).ready(function () {
    $('button').on('click', function() {
        
        $('.grid table').html('');
        
        let rows = $('input[name="row"]').val();
        let cols = $('input[name="column"]').val();

        console.log (rows)

        for (i = 0; i < rows; i++) {
        $('.grid table').append('<tr></tr>')
        }
        for (t = 0; t < cols; t++) {
        $('.grid table tr').each(function() {
            $(this).append('<td></td>')
        })
        }
    })

})