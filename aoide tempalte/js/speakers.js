const speakers = [
    { 
        name: "Adem Şeker",
        title: "Yazılım ve Çözüm <br/> Bölüm Yöneticisi",
        company: "Tübitak Bilgem YTE",
        image: "img/speakers/adem-seker.jpg",
        url:  "https://www.linkedin.com/in/ademseker/"
      },
      {
        name: "Ali Tuğlu",
        title: "CEO",
        company: "AlbarakaTech Global",
        image: "img/speakers/ali-tuglu.jpg",
        url:  "https://www.linkedin.com/in/ali-tuglu-27a86a15/"
      },
      {
        name: "İlker Altıntaş",
        title: "Founder, Chief Advisor",
        company: "NIA Technology Advisory",
        image: "img/speakers/ilker-altintas.jpg",
        url:  "https://www.linkedin.com/in/ilker-altintas-phd-71b5325/"
      },
      {
        name: "Lemi Orhan Ergin",
        title: "Co-founder",
        company: "Craftgate",
        image: "img/speakers/lemi-orhan-ergin.jpg",
        url:  "https://www.linkedin.com/in/lemiorhan/"
      },
      {
        name: "Merve Uçarkoşar",
        title: "EMEA Delivery Director",
        company: "Alex Solutions",
        image: "img/speakers/merve-ucarkosar.jpg",
        url:  "https://www.linkedin.com/in/merve-ucarkosar/"
      },
      {
        name: "Nilay Azizoğlu",
        title: "CIO",
        company: "Setur",
        image: "img/speakers/nilay-azizoglu.jpg",
        url:  "https://www.linkedin.com/in/nilayazizoglu/"
      },
      {
        name: "Olcay Atlıoğlu",
        title: "CIO",
        company: "Halkbank",
        image: "img/speakers/olcay-atlioglu.jpg",
        url: "https://www.linkedin.com/in/olcay-atlio%C4%9Flu-231a0120/"
      },
      {
        name: "Taylan Güney",
        title: "CTO",
        company: "TOM Bank",
        image: "img/speakers/taylan-guney.jpg",
        url:  "https://www.linkedin.com/in/taylan-guney-2239974/"
      }
];

const container = document.getElementById("speakers-container");

speakers.map((speaker) => {
    const speakerHTML = `
    <div style="text-align: center; display: flex; flex-direction: column; justify-content: space-between; align-items: center; min-height: 200px">
        <div style="padding-left: 15px !important;" class="">
            <div style="margin-bottom: 8px !important" class="speaker-image">
                <img src="${speaker.image}" alt="${speaker.name}">
                <div style="text-align: center; font-size: 20px !important;">${speaker.name}</div>
            </div>
        </div>
        <div style="font-size: 16px !important; text-align: center; display: flex; flex-direction: column; justify-content: space-between; align-items: center; max-width: none;"  class="mt-4 mt-md-0 mb-4">
            <h5>${speaker.title}</h5>
            <p>${speaker.company}</p>
            <a href="${speaker.url}" style="display: block; position: relative; z-index: 300003;" class="social-team mt-4">
            <img width="30" height="30" src="./img/linkedin.svg" alt="">
            </a>
        </div>
    </div>
  `;
    container.innerHTML += speakerHTML;
});
