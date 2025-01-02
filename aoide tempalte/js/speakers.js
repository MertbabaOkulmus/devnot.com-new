const speakers = [
    { 
        name: "Adem Şeker",
        title: "Yazılım ve Çözüm Bölüm Yöneticisi",
        company: "Tübitak Bilgem YTE",
        description: "",
        image: "img/speakers/adem-seker.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/ademseker/"},
        ]
      },
      {
        name: "Ali Tuğlu",
        title: "CEO",
        company: "AlbarakaTech Global",
        image: "img/speakers/ali-tuglu.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/ali-tuglu-27a86a15/"},
        ]
      },
      {
        name: "İlker Altıntaş",
        title: "Founder, Chief Advisor",
        company: "NIA Technology Advisory",
        image: "img/speakers/ilker-altintas.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/ilker-altintas-phd-71b5325/"},
        ]
      },
      {
        name: "Lemi Orhan Ergin",
        title: "Co-founder",
        company: "Craftgate",
        image: "img/speakers/lemi-orhan-ergin.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/lemiorhan/"},
        ]
      },
      {
        name: "Merve Uçarkoşar",
        title: "EMEA Delivery Director",
        company: "Alex Solutions",
        image: "img/speakers/merve-ucarkosar.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/merve-ucarkosar/"},
        ]
      },
      {
        name: "Nilay Azizoğlu",
        title: "CIO",
        company: "Setur",
        image: "img/speakers/nilay-azizoglu.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/nilayazizoglu/"},
        ]
      },
      {
        name: "Olcay Atlıoğlu",
        title: "CIO",
        company: "Halkbank",
        image: "img/speakers/olcay-atlioglu.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/olcay-atlio%C4%9Flu-231a0120/"},
        ]
      },
      {
        name: "Taylan Güney",
        title: "CTO",
        company: "TOM Bank",
        image: "img/speakers/taylan-guney.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/taylan-guney-2239974/"},
        ]
      }
];

const container = document.getElementById("speakers-container");

speakers.map((speaker) => {
    const socialLinks = speaker.social
        .map(
            (social) =>
                `<a href="${social.url}" target="_blank" rel="noopener noreferrer">${social.platform}</a>`
        )
        .join("");
    const speakerHTML = `
    <div style=" flex: 1 1 calc(25% - 16px); max-width: calc(25% - 16px);">
        <div style="padding-left: 15px !important;" class="">
            <div style="margin-bottom: 8px !important" class="speaker-image">
                <img src="${speaker.image}" alt="${speaker.name}">
                <div style="text-align: center;">${speaker.name}</div>
            </div>
        </div>
        <div style="text-align: center; display: flex; flex-direction: column; align-items: center; max-width: none;"  class="col-md-9 mt-4 mt-md-0 mb-4">
            <h5>${speaker.title}</h5>
            <p>${speaker.company}</p>
            <p class="mt-4">${speaker.description}</p>
            <div style="display: flex;" class="social-team mt-4">
                ${socialLinks}
            </div>
        </div>
    </div>
  `;
    container.innerHTML += speakerHTML;
});
