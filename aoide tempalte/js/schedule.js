document.addEventListener("DOMContentLoaded", function () {
    const scheduleData = [
        {
            salon: "Salon 1",
            events: [
                { time: "15:00 pm", speaker: "Taylan Güney", image: "img/speakers/taylan-guney.jpg", title: "Keynote" },
                { time: "18:00 pm", speaker: "Ahmet Yılmaz", image: "img/speakers/olcay-atlioglu.jpg", title: "Frontend Trends" }
            ]
        },
        {
            salon: "Salon 2",
            events: [
                { time: "15:00 pm", speaker: "Elif Kaya", image: "img/speakers/merve-ucarkosar.jpg", title: "Vue.js Workshop" },
                { time: "17:00 pm", speaker: "Burak Demir", image: "img/speakers/lemi-orhan-ergin.jpg", title: "React Best Practices" }
            ]
        }
    ];

    const scheduleContainer = document.getElementById("schedule");

    scheduleData.forEach((salon) => {
        const salonElement = document.createElement("div");
        salonElement.classList.add("row");
        salonElement.style.marginBottom = "32px";

        salonElement.innerHTML = `
            <div class="col-md-10">
                <h4>${salon.salon}</h4>
                <div class="title-page-line mt-4 mb-3"></div>
            </div>
        `;

        salon.events.forEach((event) => {
            const eventElement = document.createElement("div");
            eventElement.classList.add("col-md-12");
            eventElement.style.display = "flex";
            eventElement.style.alignItems = "center";
            eventElement.style.marginBottom = "16px";

            eventElement.innerHTML = `
                <div class="col-md-2 schedule-time">
                    <p>${event.time}</p>
                </div>
                <div class="col-md-10 mt-4 mt-md-0" style="display: flex; align-items: center;">
                    <img width="50" height="50" style="border-radius: 50%; margin-right: 10px;" src="${event.image}" alt="${event.speaker}">
                    <div>
                        <h5>${event.title}</h5>
                        <p><em>${event.speaker}</em></p>
                    </div>
                </div>
            `;

            salonElement.appendChild(eventElement);
        });

        scheduleContainer.appendChild(salonElement);
    });
});
