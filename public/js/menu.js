$(document).ready(function () {
    const time = () => {
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };

        const date = () => {
            return (new Date).toLocaleString('ru', options);
        }

        $('header').append(`
        <div class="time">${date()}</div>
        `);

        setInterval(() => {
            $('.time').text(date());
        }, 1000);
    };

    time();
});
