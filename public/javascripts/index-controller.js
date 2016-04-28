'use strict';

let login = _ => {
    console.log('Submitted');
};

$(_ => {
    $('#login-container').loadTemplate('/templates/login-form.html', {});
    $('#login-button').click(function () {
        console.log('Submitted');
    });
});
