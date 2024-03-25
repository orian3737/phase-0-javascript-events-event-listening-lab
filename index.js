document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');

    function clickAlert() {
        alert('Hee Hee!');
    }

    button.addEventListener('click', clickAlert);
});