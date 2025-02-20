document.addEventListener("DOMContentLoaded", function () {
    const scheduleData = [
        {
            salon: "Salon 1",
            events: [
                { time: "09:00", speaker: "Aynur Katırcıoğlu, Uğur Umutluoğlu", image: "img/speakers/aynur-katircioglu.jpg", image2: "img/speakers/ugur-umutluoglu.jpg", title: "Açılış Konuşması" },
                { time: "09:30", speaker: "İlker Altıntaş", image: "img/speakers/ilker-altintas.jpg", title: "Yapay Zeka Döneminde Değişen Organizasyonlar ve Liderlik" },
                { time: "10:10", speaker: "Olcay Atlıoğlu", image: "img/speakers/olcay-atlioglu.jpg", title: "Finansta Yapay Zeka: Yenilikçi Çözümler ve Sektöre Etkileri" },
                { time: "10:40", speaker: "Muharrem Demir", image: "img/speakers/muharrem-demir.jpg", title: "The Power of AI: A Completely New Perspective to Engineering Management" },
                { time: "11:20", speaker: "Ali Tuğlu, Mücahit Gündebahar", image: "img/speakers/ali-tuglu.jpg", image2: "img/speakers/mucahit-gundebahar.jpg", title: "Fintech Girişimciliğinde Küresele Yolculuk" },
                { time: "12:10", speaker: "Şükrü Çakmak, Aylin Ak, Burak Eren", image: "img/speakers/sukru-cakmak.jpg", image2: "img/speakers/aylin-ak.jpg", image3: "img/speakers/burak-eren.jpg", title: "Panel: Metric-Driven Management: Unlocking Software Engineering through Benchmarks" },

                { time: "13:00", speaker: "", image: "img/speakers/ogle-arasi.png", title: "Öğle Arası" },

                { time: "14:00", speaker: "Lemi Orhan Ergin", image: "img/speakers/lemi-orhan-ergin.jpg", title: "Everything You Know About Agile Is Wrong" },
                { time: "14:45", speaker: "Selim Çalık", image: "img/speakers/selim-calik.jpg", title: "Beyond Integration: Unlocking Efficiency with API Gateway" },
                { time: "15:30", speaker: "Elif Acar Özgüner", image: "img/speakers/elif-acar-ozguner.jpg", title: "Yapay Zeka ile Kod Geliştirmenin Geleceği: Yazılım Ekiplerinin Geleceği Nasıl Şekillenecek?" },
                { time: "16:15", speaker: "Berkay Özuygur", image: "img/speakers/berkay-ozuygur.jpg", title: "AIOps: Cloud Operations with the Power of AI" }
            ]
        },
        {
            salon: "Salon 2",
            events: [
                { time: "09:30", speaker: "Taylan Güney", image: "img/speakers/taylan-guney.jpg", title: "Yeni Çağda Dijital Bankacılık" },
                { time: "10:10", speaker: "Mutlu Önder", image: "img/speakers/mutlu-onder.jpg", title: "Beyond the AI Horizon: Preparing Your Organization for the Intelligence Revolution" },
                { time: "10:40", speaker: "Şerafettin Özer", image: "img/speakers/serafettin-ozer.jpg", title: "Reinvention of Business Processes with AI" },
                { time: "11:20", speaker: "Nilay Azizoğlu", image: "img/speakers/nilay-azizoglu.jpg", title: "Stratejik Dijitalleşme: Değişen İhtiyaçlara Göre Dijital Dönüşüm Programı Nasıl Yürütülür?" },
                { time: "12:10", speaker: "Uğur Tadık", image: "img/speakers/ugur-tadik.jpg", title: "Geçmişten Geleceğe GPT'nin Etkileri ve Yapay Zekâ" },

                { time: "13:00", speaker: "", image: "img/speakers/ogle-arasi.png", title: "Öğle Arası" },

                { time: "14:00", speaker: "Cenk Korkmaz", image: "img/speakers/cenk-korkmaz.jpg", title: "Yapay Zeka ile Gelişen Siber Güvenlik Stratejileri" },
                { time: "14:45", speaker: "Adem Şeker", image: "img/speakers/adem-seker.jpg", title: "Gelecek Nesil Yazılım Geliştirme Stratejileri" },
                { time: "15:30", speaker: "Merve Uçarkoşar", image: "img/speakers/merve-ucarkosar.jpg", title: "Delivery Management Insights: Building Success with Team and Software Metrics" },
                { time: "16:15", speaker: "Destan Keskinkılıç", image: "img/speakers/destan-keskinkilic.jpg", title: "Abonelik Tabanlı Mobil Uygulamalarda Yapay Zeka" }
            ]
        }
    ];

    const scheduleContainer = document.getElementById("schedule");

    scheduleData.forEach((salon) => {
        const salonElement = document.createElement("div");
        salonElement.classList.add("row");
        salonElement.style.marginBottom = "32px";

        salonElement.innerHTML = `
            <div class="offset-md-3 col-md-9">
                <h4>${salon.salon}</h4>
                <div class="title-page-line mt-4 mb-3"></div>
            </div>
        `;

        salon.events.forEach((event) => {
            const eventElement = document.createElement("div");
            eventElement.classList.add("col-md-12");
            eventElement.style.display = "flex";
            eventElement.style.alignItems = "center";
            eventElement.style.marginBottom = "32px";

            let slotContent  = `
                <div id="width" class="col-md-2 schedule-time">
                    <p style="font-size: 1.3em; font-weight: 500;">${event.time}</p>
                </div>
                <div class="col-md-10 mt-4 mt-md-0" style="display: flex; align-items: center;">
                    <img width="66" height="66" style="border-radius: 50%; margin-right: 10px;" src="${event.image}" alt="${event.speaker}">`;

                if(event.image2) {
                    slotContent+= `<img width="66" height="66" style="border-radius: 50%; margin-right: 10px;" src="${event.image2}" alt="${event.speaker}">`;
                }

                if(event.image3) {
                    slotContent+= `<img width="66" height="66" style="border-radius: 50%; margin-right: 10px;" src="${event.image3}" alt="${event.speaker}">`;
                }

                    slotContent += `<div style="padding-left: 15px;">
                        <h5 style="font-size: 1.4rem; padding-bottom: 10px;">${event.title}</h5>
                        <p><em>${event.speaker}</em></p>
                    </div>
                </div>
            `;

            eventElement.innerHTML = slotContent;
            salonElement.appendChild(eventElement);
        });

        scheduleContainer.appendChild(salonElement);
    });
});
