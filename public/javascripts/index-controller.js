'use strict';

const login = _ => {
    $.post('/login', (res) => {
        console.log(res);
    });
};

$(_ => {
    $('#login-container').loadTemplate('/templates/login-form.html', {});
});
