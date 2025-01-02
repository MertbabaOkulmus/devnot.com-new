const speakers = [
    {
        name: "Ivan Kulis",
        title: "CEO",
        company: "Albaraka Bank",
        description:
            "",
        image: "img/t3.jpg",
        social: [
            { platform: "TW", url: "https://twitter.com/ivan_kulis" },
            { platform: "Face", url: "https://facebook.com/ivan.kulis" },
        ],
    },
    {
        name: "Marco Furius",
        title: "CEO",
        company: "Albaraka Bank",
        description:
            "",
        image: "img/t4.jpg",
        social: [
            { platform: "TW", url: "https://twitter.com/marco_furius" },
            { platform: "LkIn", url: "https://linkedin.com/in/marcofurius" },
        ],
    },
    {
        name: "Nia Johnson",
        title: "CEO",
        company: "Albaraka Bank",
        description:
            "",
        image: "img/t5.jpg",
        social: [
            { platform: "LkIn", url: "https://linkedin.com/in/niajohnson" },
        ],
    },
    {
        name: "Ivan Kulis",
        title: "CEO",
        company: "Albaraka Bank",
        description:
            "",
        image: "img/t3.jpg",
        social: [
            { platform: "TW", url: "https://twitter.com/ivan_kulis" },
            { platform: "Face", url: "https://facebook.com/ivan.kulis" },
        ],
    },
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
