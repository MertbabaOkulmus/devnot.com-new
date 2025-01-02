const speakers = [
    {
        name: "Adem Şeker",
        title: "Yazılım ve Çözüm Bölüm Yöneticisi",
        company: "Tübitak Bilgem YTE",
        description: "",
        image: "images/speakers/adem-seker.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/ademseker/"},
        ]
      },
      {
        name: "Ali Tuğlu",
        title: "CEO",
        company: "AlbarakaTech Global",
        image: "images/speakers/ali-tuglu.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/ali-tuglu-27a86a15/"},
        ]
      },
      {
        name: "İlker Altıntaş",
        title: "Founder, Chief Advisor",
        company: "NIA Technology Advisory",
        image: "images/speakers/ilker-altintas.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/ilker-altintas-phd-71b5325/"},
        ]
      },
      {
        name: "Lemi Orhan Ergin",
        title: "Co-founder",
        company: "Craftgate",
        image: "images/speakers/lemi-orhan-ergin.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/lemiorhan/"},
        ]
      },
      {
        name: "Merve Uçarkoşar",
        title: "EMEA Delivery Director",
        company: "Alex Solutions",
        image: "images/speakers/merve-ucarkosar.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/merve-ucarkosar/"},
        ]
      },
      {
        name: "Nilay Azizoğlu",
        title: "CIO",
        company: "Setur",
        image: "images/speakers/nilay-azizoglu.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/nilayazizoglu/"},
        ]
      },
      {
        name: "Olcay Atlıoğlu",
        title: "CIO",
        company: "Halkbank",
        image: "images/speakers/olcay-atlioglu.jpg",
        social: [ 
            { platform: "Linkedin", url:  "https://www.linkedin.com/in/olcay-atlio%C4%9Flu-231a0120/"},
        ]
      },
      {
        name: "Taylan Güney",
        title: "CTO",
        company: "TOM Bank",
        image: "images/speakers/taylan-guney.jpg",
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
    <div class="col-md-3">
      <div class="speaker-image">
        <h6>${speaker.name}</h6>
        <img src="${speaker.image}" alt="${speaker.name}">
      </div>
    </div>
    <div class="col-md-9 mt-4 mt-md-0 mb-4">
      <h5>${speaker.title}</h5>
      <p><em>${speaker.company}</em></p>
      <p class="mt-4">${speaker.description}</p>
      <div class="social-team mt-4">
        ${socialLinks}
      </div>
    </div>
  `;
    container.innerHTML += speakerHTML;
});
