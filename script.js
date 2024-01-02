document.addEventListener('DOMContentLoaded', function () {
    const nasheedList = document.getElementById('nasheed-list');

    const nasheeds = [
    { title: 'Esber | أصبر', href: '//mohamad.is-a.dev/n/esber.mp3' },
    { titlconst nasheeds = [
    { title: 'Esber | أصبر', href: '//mohamad.is-a.dev/n/esber.mp3' },
    { title: 'Haza Omar | هذا عمر', href: '//mohamad.is-a.dev/n/haza-omar.mp3' },
    { title: 'Tora Bora | تورا بورا', href: '//mohamad.is-a.dev/n/tora-bora.mp3' },
   { title: 'Qad Tasama | قد تساما', href: '//mohamad.is-a.dev/n/qadtasama.mp3' },
   { title: 'Fatat Al Khayr | فتاة الخير', href: '//mohamad.is-a.dev/n/fatatalkhayr.mp3' },
   { title: 'Qawlul Sawarim | قول الصوارم', href: '//mohamad.is-a.dev/n/qawlalsawarim.mp3' },
   { title: 'Taweel Al Shawq | طويل الشوق', href: '//mohamad.is-a.dev/n/Taweel_Al_Shawq.mp3' },
   { title: 'Ana Maradun | انا مرض', href: '//mohamad.is-a.dev/n/Ana_Maradun.mp3' },
  
 { title: 'Ghuraba | غرباء ', href: '//mohamad.is-a.dev/n/ghurabaa.mp3' },
 { title: 'Rasamat Usratuna | رسمت أسرتنا', href: '//mohamad.is-a.dev/n/rasamat-usratuna.mp3' },
 { title: 'Invade The Invader  | أغرو على الغازي ', href: '//mohamad.is-a.dev/n/invade-the-invader.mp3' },
 { title: 'Darat Rahaha | دارت رحاها', href: '//mohamad.is-a.dev/n/darat-rahaha.mp3' },
 { title: 'Sa Nakhoudu  | سنخوض', href: '//mohamad.is-a.dev/n/snakhoudu.mp3' },
 { title: 'Salul Ahzab | اسالوا الاحزاب', href: '//mohamad.is-a.dev/n/salul-ahzab.mp3' },
 { title: 'Say No To Christmas | قل لا للكرسمس', href: '//mohamad.is-a.dev/n/say-no-to-christmas.mp3' },
  { title: 'Ya Rafadi  | يا رافادي', href: '//mohamad.is-a.dev/n/ya-rafadi.mp3' },
{ title: 'Ghaltida  | غالتيدا', href: '//mohamad.is-a.dev/n/ghaltida.mp3' },
{ title: 'Brigade 103  | اللواء ١٠٣', href: '//mohamad.is-a.dev/n/brigade-103.mp3' },
{ title: 'I Challenge The Apache  | أبا اتحدا الأباتشي', href: '//mohamad.is-a.dev/n/i-challenge-the-apache.mp3' },
{ title: 'Astu Ardal Maqam  | لست ارضى المقام', href: '//mohamad.is-a.dev/n/astu-ardal-maqam.mp3' },
{ title: 'Ma Vengeance', href: '//mohamad.is-a.dev/n/ma-vengeance.mp3' },


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
