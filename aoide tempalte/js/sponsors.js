const sections = [
    {
        title: "Platin Sponsor",
        items: [
            { url: "img/gallery/1.jpg", alt: "Image 1" },
            { url: "img/gallery/2.jpg", alt: "Image 2" },
            { url: "img/gallery/3.jpg", alt: "Image 3" },
            { url: "img/gallery/4.jpg", alt: "Image 4" },
        ],
    },
    {
        title: "Altın Sponsor",
        items: [
            { url: "img/gallery/5.jpg", alt: "Image 5" },
            { url: "img/gallery/6.jpg", alt: "Image 6" },
            { url: "img/gallery/7.jpg", alt: "Image 7" },
            { url: "img/gallery/8.jpg", alt: "Image 8" },
        ],
    },
    {
        title: "Gümüş Sponsor",
        items: [
            { url: "img/gallery/9.jpg", alt: "Image 9" },
            { url: "img/gallery/10.jpg", alt: "Image 10" },
            { url: "img/gallery/11.jpg", alt: "Image 11" },
            { url: "img/gallery/12.jpg", alt: "Image 12" },
        ],
    },
];

const galleryContainer = document.getElementById("gallery-group"); // Ana container

sections.forEach((section) => {
    // Başlık kısmı
    const sectionDiv = document.createElement("div");
    //sectionDiv.className = "mb-5";
    sectionDiv.style=" margin-bottom: 4rem";
    const titleDiv = document.createElement("div");
    //titleDiv.className = "offset-md-3";

    titleDiv.innerHTML = `
        <h4>${section.title}</h4>
        <div class="title-page-line mt-2"></div>
    `;

    sectionDiv.appendChild(titleDiv);

    // Resim galerisi
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";

    section.items.forEach((image, index) => {
        const colDiv = document.createElement("div");
        colDiv.className = `col-sm-6 col-md-4 mt-4`;
   
        colDiv.innerHTML = `
            <a href="${image.url}" data-fancybox="gallery">
                <div class="img-wrap gallery">
                    <img src="${image.url}" alt="${image.alt}">
                </div>
            </a>
        `;

        rowDiv.appendChild(colDiv);
    });

    sectionDiv.appendChild(rowDiv);
    galleryContainer.appendChild(sectionDiv);
});
