document.addEventListener('DOMContentLoaded', function () {
    const nasheedList = document.getElementById('nasheed-list');

    const nasheeds = [
        { title: 'Esber | أصبر', src: '//mohamad.is-a.dev/n/esber.mp3' },
        { title: 'Haza Omar | هذا عمر', src: '//mohamad.is-a.dev/n/haza-omar.mp3' },
        // Add more nasheeds as needed
    ];

    // Populate nasheed list
    nasheeds.forEach((nasheed, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = nasheed.title;
        listItem.addEventListener('click', () => downloadNasheed(index));
        nasheedList.appendChild(listItem);
    });

    // Function to download nasheed
    function downloadNasheed(index) {
        const selectedNasheed = nasheeds[index];
        const link = document.createElement('a');
        link.href = selectedNasheed.src;
        link.download = `${selectedNasheed.title}.mp3`;
        link.click();
    }
});
