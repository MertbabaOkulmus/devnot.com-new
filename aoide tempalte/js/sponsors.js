const sections = [
    {
        title: "Platin Sponsor",
        items: [
            { url: "img/sponsors/oobeya-logo.png", alt: "Oobeya", link: "https://oobeya.io/" },
            { url: "img/sponsors/valven-logo.png", alt: "Valven", link: "https://www.valven.com/" }
        ],
    },
    {
        title: "Altın Sponsor",
        items: [
            { url: "img/sponsors/logitech-logo.png", alt: "Logitech", link: "https://www.logitech.com/tr-tr" }
        ],
    }
];

const galleryContainer = document.getElementById("gallery-group"); // Ana container

sections.forEach((section) => {
    // Başlık kısmı
    const sectionDiv = document.createElement("div");
    //sectionDiv.className = "mb-5";
    sectionDiv.style=" margin-bottom: 4rem; position: relative; width: 100%; display: block;";
    const titleDiv = document.createElement("div");
    //titleDiv.className = "offset-md-3";

    titleDiv.innerHTML = `
        <h5 style="padding-left: 14px; color: #ffed84;">${section.title}</h5>
        <div class="title-page-line mt-2"></div>
    `;

    sectionDiv.appendChild(titleDiv);

    // Resim galerisi
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    rowDiv.style = "padding-top: 10px;";

    section.items.forEach((image, index) => {
        const colDiv = document.createElement("div");
        colDiv.className = `col-sm-6 col-md-4 mt-4`;
   
        colDiv.innerHTML = `
            <a href="${image.link}">
                <div>
                    <img src="${image.url}" alt="${image.alt}">
                </div>
            </a>
        `;

        rowDiv.appendChild(colDiv);
    });

    sectionDiv.appendChild(rowDiv);
    galleryContainer.appendChild(sectionDiv);
});
