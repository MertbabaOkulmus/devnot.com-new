const speakers = [
    {
        name: "Ivan Kulis",
        title: "chief economist",
        company: "some company name, city",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.",
        image: "img/t3.jpg",
        social: [
            { platform: "Twitter", url: "https://twitter.com/ivan_kulis" },
            { platform: "Facebook", url: "https://facebook.com/ivan.kulis" },
            { platform: "Behance", url: "https://behance.net/ivankulis" },
        ],
    },
    {
        name: "Marco Furius",
        title: "research director",
        company: "some company name, city",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.",
        image: "img/t4.jpg",
        social: [
            { platform: "Twitter", url: "https://twitter.com/marco_furius" },
            { platform: "Facebook", url: "https://facebook.com/marco.furius" },
            { platform: "Behance", url: "https://behance.net/marcofurius" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/marcofurius" },
        ],
    },
    {
        name: "Nia Johnson",
        title: "head of innovation",
        company: "some company name, city",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.",
        image: "img/t5.jpg",
        social: [
            { platform: "Behance", url: "https://behance.net/niajohnson" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/niajohnson" },
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
