'use strict';

{
    $('#logout-button').click((e) => {
        e.preventDefault();

        $.post('/logout', (res) => {
            window.location.replace('/');
        });
    });
}
