document.getElementById("download-btn").addEventListener('click', function () {
    ga('send', {
        hitType: 'event',
        eventCategory: 'Downloads',
        eventAction: 'download',
        eventLabel: 'Winimoji Downloads'
    });
})