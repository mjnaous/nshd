document.addEventListener('DOMContentLoaded', function () {
    const nasheedList = document.getElementById('nasheed-list');

    const nasheeds = [
    { title: 'Esber | أصبر', href: '//mohamad.is-a.dev/n/esber.mp3' },
    { title: 'Haza Omar | هذا عمر', href: '//gh.naous.eu.org/n/haza-omar.mp3' },
    { title: 'Tora Bora | تورا بورا', href: '//gh.naous.eu.org/n/tora-bora.mp3' },
   { title: 'Qad Tasama | قد تساما', href: '//gh.naous.eu.org/n/qadtasama.mp3' },
   { title: 'Fatat Al Khayr | فتاة الخير', href: '//gh.naous.eu.org/n/fatatalkhayr.mp3' },
   { title: 'Qawlul Sawarim | قول الصوارم', href: '//gh.naous.eu.org/n/qawlalsawarim.mp3' },
   { title: 'Taweel Al Shawq | طويل الشوق', href: '//gh.naous.eu.org/n/Taweel_Al_Shawq.mp3' },
   { title: 'Ana Maradun | انا مرض', href: '//gh.naous.eu.org/n/Ana_Maradun.mp3' },
  
 { title: 'Ghuraba | غرباء ', href: '//gh.naous.eu.org/n/ghurabaa.mp3' },
 { title: 'Rasamat Usratuna | رسمت أسرتنا', href: '//gh.naous.eu.org/n/rasamat-usratuna.mp3' },
 { title: 'Invade The Invader  | أغرو على الغازي ', href: '//gh.naous.eu.org/n/invade-the-invader.mp3' },
 { title: 'Darat Rahaha | دارت رحاها', href: '//gh.naous.eu.org/n/darat-rahaha.mp3' },
 { title: 'Sa Nakhoudu  | سنخوض', href: '//gh.naous.eu.org/n/snakhoudu.mp3' },
 { title: 'Salul Ahzab | اسالوا الاحزاب', href: '//gh.naous.eu.org/n/salul-ahzab.mp3' },
 { title: 'Say No To Christmas | قل لا للكرسمس', href: '//gh.naous.eu.org/n/say-no-to-christmas.mp3' },
  { title: 'Ya Rafadi  | يا رافادي', href: '//gh.naous.eu.org/n/ya-rafadi.mp3' },
{ title: 'Ghaltida  | غالتيدا', href: '//gh.naous.eu.org/n/ghaltida.mp3' },
{ title: 'Brigade 103  | اللواء ١٠٣', href: '//gh.naous.eu.org/n/brigade-103.mp3' },
{ title: 'I Challenge The Apache  | أبا اتحدا الأباتشي', href: '//gh.naous.eu.org/n/i-challenge-the-apache.mp3' },
{ title: 'Astu Ardal Maqam  | لست ارضى المقام', href: '//gh.naous.eu.org/n/astu-ardal-maqam.mp3' },
{ title: 'Ma Vengeance', href: '//gh.naous.eu.org/n/ma-vengeance.mp3' },


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
    link.href = selectedNasheed.href;
    link.download = `${selectedNasheed.href}`;
    link.click();
  }
});

    
