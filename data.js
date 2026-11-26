/* WIWI Tours editorial data — founder revision, 25 November 2026. */
window.WIWI_DATA = {
  updated: "2026-11-25",

  tours: [
    {
      id: "west",
      status: "draft",
      title: {
        en: "Visiting Women Winemakers · Western Georgia",
        ka: "ქალი მეღვინეების სტუმრად · დასავლეთ საქართველო",
        ru: "В гостях у женщин-виноделов. Западная Грузия",
      },
      region: { en: "Western Georgia", ka: "დასავლეთ საქართველო", ru: "Западная Грузия" },
      tagline: {
        en: "Six days from Batumi to Tbilisi, shaped around family wineries, kitchens and the women who receive the guests.",
        ka: "ექვსი დღე ბათუმიდან თბილისამდე — საოჯახო მარნები, სამზარეულოები და ქალები, რომლებიც სტუმრებს მასპინძლობენ.",
        ru: "Шесть дней от Батуми до Тбилиси: семейные винодельни, кухни и женщины, которые принимают гостей.",
      },
      summary: {
        en: "From Batumi to Tbilisi via Adjara, Guria, Samegrelo and Imereti. Family cellars, local cooking and time with the winemakers.",
        ka: "ბათუმიდან თბილისამდე გზა აჭარაზე, გურიაზე, სამეგრელოსა და იმერეთზე გადის. გზად საოჯახო მარნებში შევივლით და ადგილობრივ კერძებს გავსინჯავთ.",
        ru: "От Батуми до Тбилиси через Аджарию, Гурию, Самегрело и Имерети. По дороге — семейные винодельни, местная кухня и встречи с хозяйками.",
      },
      focus: ["adjara", "guria", "samegrelo", "imereti", "tbilisi-mtskheta"],
      facts: [
        { label: { en: "6-day working route", ka: "6-დღიანი სამუშაო მარშრუტი", ru: "Рабочий маршрут на 6 дней" } },
        { label: { en: "Comfortable midrange", ka: "კომფორტული საშუალო სეგმენტი", ru: "Комфортный средний сегмент" } },
        { label: { en: "Hosted family wineries", ka: "მასპინძელი საოჯახო მარნები", ru: "Семейные винодельни с хозяевами" } },
        {
          label: { en: "Route inspection pending", ka: "მარშრუტი ადგილზე შესამოწმებელია", ru: "Нужна проверка маршрута на месте" },
          note: { en: "Roads, timing and availability", ka: "გზები, დრო და ხელმისაწვდომობა", ru: "Дороги, время и доступность" },
        },
      ],
      author: {
        en: "Working route agreed with Manana · 25 November 2026",
        ka: "მანანასთან შეთანხმებული სამუშაო მარშრუტი · 2026 წლის 25 ნოემბერი",
        ru: "Рабочий маршрут согласован с Мананой · 25 ноября 2026",
      },
      // The existing share still contains the superseded Racha–Lechkhumi route.
      clavelo: { url: null },

      openQuestions: [
        {
          id: "georgian-title",
          title: { en: "Georgian title", ka: "ქართული სათაური", ru: "Грузинское название" },
          text: {
            en: "The Georgian working title needs Manana's native-language approval.",
            ka: "სამუშაო ქართული სათაური მანანამ უნდა შეამოწმოს და დაამტკიცოს.",
            ru: "Рабочее грузинское название должно пройти проверку и одобрение Мананы.",
          },
        },
        {
          id: "day-two-variant",
          title: { en: "Autumn route choice", ka: "შემოდგომის მარშრუტის არჩევანი", ru: "Выбор осеннего маршрута" },
          text: {
            en: "If the group stays for Maka’s mandarin harvest, it goes straight to Kutaisi and skips Sarishvili.",
            ka: "თუ ჯგუფი მაკასთან მანდარინის კრეფაზე დარჩება, სარიშვილებთან აღარ შეივლის და პირდაპირ ქუთაისში გაემგზავრება.",
            ru: "Если группа останется у Маки на сбор мандаринов, из Эрге поедем прямо в Кутаиси, минуя Саришвили.",
          },
        },
        {
          id: "day-three-options",
          title: { en: "One stop, time permitting", ka: "ერთი გაჩერება, თუ დრო დაგვრჩა", ru: "Остановка по пути" },
          text: {
            en: "There may be time for one more stop on the way back to Kutaisi.",
            ka: "ქუთაისში დაბრუნებისას, თუ დრო დაგვრჩა, კიდევ ერთ ადგილას შევივლით.",
            ru: "На обратном пути в Кутаиси можно заехать в одно из мест ниже, если позволит время.",
          },
        },
        {
          id: "nini-name",
          title: { en: "Lunch in Obcha", ka: "სადილი ობჩაში", ru: "Обед в Обча" },
          text: {
            en: "Lunch at Simonica is still to be arranged. If the visit falls through, Baia’s Wine is the alternative.",
            ka: "Simonica-ში სადილი ჯერ შესათანხმებელია. თუ სტუმრობა ვერ შედგა, ალტერნატივა „ბაიას ღვინოა“.",
            ru: "Обед в Simonica ещё нужно согласовать. Если визит не состоится, запасной вариант — Baia’s Wine.",
          },
        },
        {
          id: "exponati-host",
          title: { en: "Order of visits", ka: "სტუმრობის თანმიმდევრობა", ru: "Порядок поездки" },
          text: {
            en: "The order of the Tbilisi walk and the Mtskheta visit is still open.",
            ka: "ჯერ გადასაწყვეტია, როდის მოვინახულებთ მცხეთას — თბილისში გასეირნებამდე თუ შემდეგ.",
            ru: "Пока уточняем, когда поедем в Мцхету: до прогулки по Тбилиси или после неё.",
          },
        },
        {
          id: "logistics",
          title: { en: "Operational details", ka: "საოპერაციო დეტალები", ru: "Организационные детали" },
          text: {
            en: "Hotels, flights, airport, exact timing, roads, restaurant availability and all host visits must be confirmed through an inspection or partner trip before sale.",
            ka: "გაყიდვამდე ადგილზე ან პარტნიორულ ტურზე უნდა დადასტურდეს სასტუმროები, ფრენები, აეროპორტი, ზუსტი დრო, გზები, რესტორნების ხელმისაწვდომობა და ყველა მასპინძლის ვიზიტი.",
            ru: "До продажи во время инспекции или партнёрской поездки нужно подтвердить отели, рейсы, аэропорт, точное время, дороги, доступность ресторанов и все визиты к хозяевам.",
          },
        },
      ],

      days: [
        {
          n: 1,
          title: { en: "Batumi", ka: "ბათუმი", ru: "Батуми" },
          note: { en: "Arrival and rest", ka: "ჩამოსვლა და დასვენება", ru: "Прибытие и отдых" },
          route: { en: "Batumi", ka: "ბათუმი", ru: "Батуми" },
          activities: [
            {
              id: "d1-arrival", time: null, type: "transport",
              title: { en: "Arrival in Batumi", ka: "ჩამოსვლა ბათუმში", ru: "Прибытие в Батуми" },
              summary: { en: "The journey begins on the Black Sea coast.", ka: "მოგზაურობა შავი ზღვის სანაპიროზე იწყება.", ru: "Путешествие начинается на берегу Чёрного моря." },
              topics: ["arrival"], place: "batumi", status: "draft",
            },
            {
              id: "d1-rest", time: null, type: "stay",
              title: { en: "Hotel, rest and an optional easy walk", ka: "სასტუმრო, დასვენება და სურვილისამებრ მსუბუქი გასეირნება", ru: "Отель, отдых и необязательная лёгкая прогулка" },
              summary: { en: "Arrival arrangements are still open.", ka: "ჩამოსვლის დეტალები ჯერ შესათანხმებელია.", ru: "Детали встречи по прибытии ещё уточняются." },
              topics: ["stay", "free-time"], place: "batumi", flags: ["hotel"], status: "to-confirm",
            },
          ],
        },
        {
          n: 2,
          title: { en: "Adjara and Guria", ka: "აჭარა და გურია", ru: "Аджария и Гурия" },
          note: { en: "Two family wineries, or the autumn variant", ka: "ორი საოჯახო მარანი ან შემოდგომის ვერსია", ru: "Две семейные винодельни или осенний вариант" },
          route: { en: "Batumi → Erge → Guria → Kutaisi", ka: "ბათუმი → ერგე → გურია → ქუთაისი", ru: "Батуми → Эрге → Гурия → Кутаиси" },
          review: "day-two-variant",
          activities: [
            {
              id: "d2-chkhavalley", time: { en: "First visit", ka: "პირველი ვიზიტი", ru: "Первый визит" }, type: "wine",
              title: { en: "Maka Tedoradze at ChkhaValley", ka: "მაკა თედორაძე ChkhaValley-ში", ru: "Мака Тедорадзе в ChkhaValley" },
              summary: { en: "The family cellar sits in Erge, between Batumi and the mountains.", ka: "საოჯახო მარანი ერგეშია, ბათუმსა და მთებს შორის.", ru: "Семейный погреб находится в Эрге, между Батуми и горами." },
              topics: ["wine", "food", "meet-winemaker", "family-winery"], place: "chkhavalley", people: ["maka-tedoradze"],
              wine: { en: "Chkhaveri and Tsolikouri", ka: "ჩხავერი და ცოლიკაური", ru: "Чхавери и цоликоури" },
              food: { en: "Local Adjarian food", ka: "ადგილობრივი აჭარული კერძები", ru: "Местные аджарские блюда" },
              seasonal: { en: "Mandarin picking may take most of the day in October or November. Harvest dates and meals are still open.", ka: "ოქტომბერში ან ნოემბერში მანდარინის კრეფამ შეიძლება დღის დიდი ნაწილი დაიკავოს. მოსავლის აღების დრო და კვება ჯერ შესათანხმებელია.", ru: "В октябре или ноябре сбор мандаринов может занять почти весь день. Сроки сбора и обед ещё нужно согласовать." },
              status: "draft", links: { uvamoWine: null, uvamoSet: null },
            },
            {
              id: "d2-sarishvili", time: { en: "Later", ka: "შემდეგ", ru: "Позже" }, type: "wine",
              title: { en: "Sarishvili family winery", ka: "სარიშვილების საოჯახო მარანი", ru: "Семейная винодельня Саришвили" },
              summary: { en: "A shared table in the family’s fruit orchard.", ka: "სუფრა ოჯახის ხეხილის ბაღში.", ru: "Общий стол в семейном фруктовом саду." },
              topics: ["wine", "food", "family-winery"], place: "sarishvili", people: ["sarishvili"],
              wine: { en: "Chkhaveri", ka: "ჩხავერი", ru: "Чхавери" },
              flags: [{ en: "Host identity, exact village and meal arrangements to confirm", ka: "მასპინძლის ვინაობა, ზუსტი სოფელი და კვების დეტალები დასაზუსტებელია", ru: "Нужно уточнить хозяина, точное село и организацию обеда" }],
              status: "to-confirm", links: { uvamoWine: null, uvamoSet: null },
            },
            {
              id: "d2-kutaisi", time: { en: "Evening", ka: "საღამო", ru: "Вечер" }, type: "transport",
              title: { en: "Continue to Kutaisi", ka: "გზა ქუთაისისკენ", ru: "Переезд в Кутаиси" },
              summary: { en: "Overnight in Kutaisi. If there’s time, try Bikentia’s kebab with its signature sauce.", ka: "ღამისთევა ქუთაისში. თუ დრო დაგვრჩა, ბიკენტიას ქაბაბსაც გავსინჯავთ თავისი გამორჩეული სოუსით.", ru: "Ночь в Кутаиси. Если будет время, можно попробовать кебаб Бикентии с его фирменным соусом." },
              topics: ["transfer", "food"], place: "kutaisi", flags: ["hotel", "restaurant"], status: "to-confirm",
            },
          ],
        },
        {
          n: 3,
          title: { en: "Samegrelo", ka: "სამეგრელო", ru: "Самегрело" },
          note: { en: "Argvani and one possible nearby sight", ka: "არგვანი და ერთი შესაძლო ახლომდებარე ადგილი", ru: "Аргвани и одна возможная достопримечательность рядом" },
          route: { en: "Kutaisi → Abedati / Martvili → Kutaisi", ka: "ქუთაისი → აბედათი / მარტვილი → ქუთაისი", ru: "Кутаиси → Абедати / Мартвили → Кутаиси" },
          review: "day-three-options",
          activities: [
            {
              id: "d3-argvani", time: { en: "Main visit", ka: "მთავარი ვიზიტი", ru: "Главный визит" }, type: "wine",
              title: { en: "Khatia Jakhua at Family Winery Argvani", ka: "ხატია ჯახუა არგვანის საოჯახო მარანში", ru: "Хатия Джахуа в семейной винодельне Argvani" },
              summary: { en: "Wine in Abedati, with a chance to hear Khatia talk about Georgian ornament.", ka: "ღვინის დაგემოვნება აბედათში და, თუ მოხერხდა, ხატიასთან საუბარი ქართულ ორნამენტზე.", ru: "Вино в Абедати и, если получится, разговор с Хатией о грузинском орнаменте." },
              topics: ["wine", "meet-winemaker", "heritage", "family-winery"], place: "argvani", people: ["khatia-jakhua"],
              wine: { en: "Ojaleshi and Chvitiluri", ka: "ოჯალეში და ჭვიტილური", ru: "Оджалеши и чвитилури" },
              flags: [{ en: "Host availability to confirm", ka: "მასპინძლის ხელმისაწვდომობა დასადასტურებელია", ru: "Нужно подтвердить доступность хозяйки" }],
              status: "to-confirm", links: { uvamoWine: null, uvamoSet: null },
            },
            {
              id: "d3-sight", time: { en: "Optional", ka: "სურვილისამებრ", ru: "По возможности" }, type: "excursion",
              title: { en: "A stop in nature", ka: "გაჩერება ბუნებაში", ru: "Остановка на природе" },
              summary: { en: "Martvili Canyon, Okatse Canyon or Prometheus Cave.", ka: "მარტვილის კანიონი, ოკაცეს კანიონი ან პრომეთეს მღვიმე.", ru: "Мартвильский каньон, каньон Окаце или пещера Прометея." },
              topics: ["nature"], route: { en: "Samegrelo / Imereti option", ka: "სამეგრელოს / იმერეთის ვარიანტი", ru: "Вариант в Самегрело / Имерети" },
              flags: ["travel-time"], status: "to-confirm",
            },
            {
              id: "d3-dinner", time: { en: "Evening", ka: "საღამო", ru: "Вечер" }, type: "food",
              title: { en: "Return to Kutaisi · Sisters / Three Sisters", ka: "დაბრუნება ქუთაისში · Sisters / Three Sisters", ru: "Возвращение в Кутаиси · Sisters / Three Sisters" },
              summary: { en: "The exact restaurant is still to be identified.", ka: "ჯერ დასაზუსტებელია, რომელ რესტორანში იქნება ვახშამი.", ru: "Ещё нужно уточнить, о каком именно ресторане речь." },
              topics: ["food"], place: "kutaisi", flags: ["restaurant"], status: "to-confirm",
            },
          ],
        },
        {
          n: 4,
          title: { en: "Imereti to Tbilisi", ka: "იმერეთიდან თბილისში", ru: "Из Имерети в Тбилиси" },
          note: { en: "Simonica on the road", ka: "Simonica გზად", ru: "Simonica по дороге" },
          route: { en: "Kutaisi → Meore Obcha → Tbilisi", ka: "ქუთაისი → მეორე ობჩა → თბილისი", ru: "Кутаиси → Меоре Обча → Тбилиси" },
          review: "nini-name",
          activities: [
            {
              id: "d4-simonica", time: { en: "On the road", ka: "გზად", ru: "По дороге" }, type: "wine",
              title: { en: "Simonica in Meore Obcha", ka: "Simonica მეორე ობჩაში", ru: "Simonica в Меоре Обча" },
              summary: { en: "Qvevri wines made from the family’s own organically grown grapes.", ka: "ქვევრის ღვინოები ოჯახის ორგანულ ვენახებში მოყვანილი ყურძნისგან.", ru: "Вина из квеври, сделанные из винограда с семейных органических виноградников." },
              topics: ["wine", "food", "meet-winemaker", "family-winery"], place: "obcha", people: ["nini-chkheidze"],
              wine: { en: "Tsolikouri, Tsitska and Otskhanuri Sapere", ka: "ცოლიკაური, ციცქა და ოცხანური საფერე", ru: "Цоликоури, цицка и оцханури сапере" },
              food: { en: "Lunch at the winery", ka: "სადილი მარანში", ru: "Обед на винодельне" },
              flags: [{ en: "The winery visit is still to be arranged.", ka: "მარანში სტუმრობა ჯერ შესათანხმებელია.", ru: "Визит на винодельню ещё нужно согласовать." }],
              status: "to-confirm", links: { uvamoWine: null, uvamoSet: null },
            },
            {
              id: "d4-tbilisi", time: { en: "Evening", ka: "საღამო", ru: "Вечер" }, type: "stay",
              title: { en: "Tbilisi check-in and optional Old Town stroll", ka: "თბილისში განთავსება და სურვილისამებრ ძველ ქალაქში გასეირნება", ru: "Заселение в Тбилиси и необязательная прогулка по Старому городу" },
              topics: ["stay", "heritage", "free-time"], place: "tbilisi", flags: ["hotel"], status: "to-confirm",
            },
          ],
        },
        {
          n: 5,
          title: { en: "Tbilisi and Mtskheta", ka: "თბილისი და მცხეთა", ru: "Тбилиси и Мцхета" },
          note: { en: "Culture and a proposed cellar visit", ka: "კულტურა და შემოთავაზებული მარნის ვიზიტი", ru: "Культура и предложенный визит в винный погреб" },
          route: { en: "Tbilisi ↔ Mtskheta", ka: "თბილისი ↔ მცხეთა", ru: "Тбилиси ↔ Мцхета" },
          review: "exponati-host",
          activities: [
            {
              id: "d5-tbilisi", time: null, type: "excursion",
              title: { en: "A walk in Tbilisi", ka: "გასეირნება თბილისში", ru: "Прогулка по Тбилиси" },
              summary: { en: "Time to explore the city on foot.", ka: "დრო ქალაქში ფეხით სასეირნოდ.", ru: "Время пройтись по городу пешком." },
              topics: ["heritage"], place: "tbilisi", status: "draft",
            },
            {
              id: "d5-mtskheta", time: null, type: "excursion",
              title: { en: "Mtskheta", ka: "მცხეთა", ru: "Мцхета" },
              summary: { en: "A visit to Georgia’s ancient capital.", ka: "სტუმრობა საქართველოს ძველ დედაქალაქში.", ru: "Поездка в древнюю столицу Грузии." },
              topics: ["heritage"], place: "mtskheta", status: "draft",
            },
            {
              id: "d5-exponati", time: null, type: "wine",
              title: { en: "Exponati cellar, museum and shop", ka: "Exponati-ის მარანი, მუზეუმი და მაღაზია", ru: "Винный погреб, музей и магазин Exponati" },
              summary: { en: "A chance to taste wine and see the exhibits.", ka: "ღვინის დაგემოვნება და ექსპონატების ნახვა.", ru: "Дегустация и знакомство с экспонатами." },
              topics: ["wine", "heritage"], place: "exponati", people: ["exponati-host"],
              flags: [{ en: "The host, venue operator and availability still need confirming.", ka: "ჯერ გასარკვევია, ვინ უძღვება ამ ადგილს, ვინ დაგვხვდება და შეძლებენ თუ არა ჩვენს მიღებას.", ru: "Ещё нужно уточнить, кто ведёт погреб, кто примет группу и возможен ли визит." }],
              status: "to-confirm", links: { uvamoWine: null, uvamoSet: null },
            },
          ],
        },
        {
          n: 6,
          title: { en: "Tbilisi", ka: "თბილისი", ru: "Тбилиси" },
          note: { en: "Free time and departure", ka: "თავისუფალი დრო და გამგზავრება", ru: "Свободное время и отъезд" },
          route: { en: "Tbilisi", ka: "თბილისი", ru: "Тбилиси" },
          activities: [
            { id: "d6-free", time: null, type: "other", title: { en: "Free time", ka: "თავისუფალი დრო", ru: "Свободное время" }, topics: ["free-time"], place: "tbilisi", status: "draft" },
            {
              id: "d6-departure", time: null, type: "transport",
              title: { en: "Airport transfer and departure", ka: "აეროპორტში გადაყვანა და გამგზავრება", ru: "Трансфер в аэропорт и вылет" },
              summary: { en: "Transfer time will depend on the flight.", ka: "ტრანსფერის დრო ფრენაზე იქნება დამოკიდებული.", ru: "Время трансфера будет зависеть от рейса." },
              topics: ["transfer"], place: "tbilisi",
              flags: [{ en: "Airport and flight details to confirm", ka: "აეროპორტი და ფრენის დეტალები დასაზუსტებელია", ru: "Нужно уточнить аэропорт и данные рейса" }], status: "to-confirm",
            },
          ],
        },
      ],
    },

    {
      id: "east", status: "in-development",
      title: { en: "Women of Kakheti & Eastern Georgia", ka: "კახეთისა და აღმოსავლეთ საქართველოს ქალები", ru: "Женщины Кахетии и Восточной Грузии" },
      region: { en: "Eastern Georgia · Kakheti", ka: "აღმოსავლეთ საქართველო · კახეთი", ru: "Восточная Грузия · Кахетия" },
      tagline: null,
      summary: {
        en: "A journey through wine country, planned with Ketino around visits with women winemakers.",
        ka: "ქეთინოსთან ერთად ვგეგმავთ მოგზაურობას და შეხვედრებს ქალ მეღვინეებთან.",
        ru: "Вместе с Кетино планируем поездку в гости к женщинам-виноделам.",
      },
      focus: ["kakheti"],
      facts: [
        { label: { en: "Route in preparation", ka: "მარშრუტი მზადდება", ru: "Маршрут готовится" } },
        { label: { en: "No itinerary published", ka: "პროგრამა ჯერ არ გამოქვეყნებულა", ru: "Программа ещё не опубликована" } },
      ],
      author: null,
      openQuestions: [{
        id: "east-route", title: { en: "Kakheti route", ka: "კახეთის მარშრუტი", ru: "Маршрут по Кахетии" },
        text: { en: "Manana and Ketino will agree wineries, hosts and logistics before a draft exists.", ka: "მანანა და ქეთინო სამუშაო ვერსიის შექმნამდე შეათანხმებენ მარნებს, მასპინძლებსა და ლოგისტიკას.", ru: "Манана и Кетино согласуют винодельни, хозяев и логистику до появления черновика." },
      }],
      days: [],
    },
  ],

  places: {
    batumi: {
      heroLabel: "left", name: { en: "Batumi", ka: "ბათუმი", ru: "Батуми" }, region: "adjara",
      description: { en: "Black Sea city and the first base of the journey.", ka: "შავი ზღვის ქალაქი და მოგზაურობის პირველი ბაზა.", ru: "Черноморский город и первая база путешествия." },
      coord: [41.65, 41.636], locationLabel: { en: "City centre", ka: "ქალაქის ცენტრი", ru: "Центр города" },
    },
    chkhavalley: {
      name: "ChkhaValley Winery", region: "adjara",
      description: { en: "Maka Tedoradze and Davit Bibineishvili's family winery in Erge, about 10 km from Batumi.", ka: "მაკა თედორაძისა და დავით ბიბინეიშვილის საოჯახო მარანი ერგეში, ბათუმიდან დაახლოებით 10 კილომეტრში.", ru: "Семейная винодельня Маки Тедорадзе и Давита Бибинеишвили в Эрге, примерно в 10 км от Батуми." },
      coord: [41.61, 41.72], locationLabel: { en: "Erge, Adjara · approximate", ka: "ერგე, აჭარა · დაახლოებით", ru: "Эрге, Аджария · приблизительно" },
      photo: "./assets/hosts/chkhavalley-table.jpg",
    },
    sarishvili: {
      name: { en: "Sarishvili family winery", ka: "სარიშვილების საოჯახო მარანი", ru: "Семейная винодельня Саришвили" }, region: "guria",
      description: { en: "A family cellar in Guria with Chkhaveri and a fruit orchard.", ka: "საოჯახო მარანი გურიაში, ჩხავერითა და ხეხილის ბაღით.", ru: "Семейный погреб в Гурии, где делают чхавери и выращивают фрукты." },
      coord: [42.08, 42.04], locationLabel: { en: "Guria · exact village to confirm", ka: "გურია · ზუსტი სოფელი დასაზუსტებელია", ru: "Гурия · точное село нужно уточнить" },
      status: "to-confirm", photo: "./assets/hosts/sarishvili-wine.jpg",
    },
    kutaisi: {
      heroLabel: "left", name: { en: "Kutaisi", ka: "ქუთაისი", ru: "Кутаиси" }, region: "imereti",
      description: { en: "Two nights here leave time for Guria, Samegrelo and perhaps a stop nearby.", ka: "ქუთაისში ორი ღამეა გათვალისწინებული, რომ გურიისა და სამეგრელოს მონახულებაც მოვასწროთ.", ru: "Две ночи в Кутаиси дают время съездить в Гурию и Самегрело, а если получится, заглянуть ещё куда-нибудь поблизости." },
      coord: [42.268, 42.7], locationLabel: { en: "City centre", ka: "ქალაქის ცენტრი", ru: "Центр города" },
    },
    argvani: {
      name: { en: "Family Winery Argvani", ka: "არგვანის საოჯახო მარანი", ru: "Семейная винодельня Argvani" }, region: "samegrelo",
      description: { en: "Khatia Jakhua's winery in Abedati, about 9 km from central Martvili.", ka: "ხატია ჯახუას მარანი აბედათში, მარტვილის ცენტრიდან დაახლოებით 9 კილომეტრში.", ru: "Винодельня Хатии Джахуа в Абедати, примерно в 9 км от центра Мартвили." },
      coord: [42.39, 42.36], locationLabel: { en: "Abedati near Martvili · village-level", ka: "აბედათი, მარტვილთან · სოფლის დონეზე", ru: "Абедати рядом с Мартвили · точка села" },
    },
    obcha: {
      name: { en: "Simonica · Chkheidze Wines", ka: "Simonica · ჩხეიძეების ღვინო", ru: "Simonica · вина Чхеидзе" }, region: "imereti",
      description: { en: "Family winery in Meore Obcha, Imereti, producing natural qvevri wines from its own organic vineyards.", ka: "საოჯახო მარანი იმერეთის სოფელ მეორე ობჩაში, რომელიც საკუთარი ორგანული ვენახებიდან ბუნებრივ ქვევრის ღვინოს აწარმოებს.", ru: "Семейная винодельня в селе Меоре Обча в Имерети, производящая натуральные квеври-вина из собственных органических виноградников." },
      coord: [42.18, 42.8], locationLabel: { en: "Meore Obcha, Imereti · approximate", ka: "მეორე ობჩა, იმერეთი · დაახლოებით", ru: "Меоре Обча, Имерети · приблизительно" },
    },
    tbilisi: {
      heroLabel: true, name: { en: "Tbilisi", ka: "თბილისი", ru: "Тбилиси" }, region: "tbilisi",
      description: { en: "Georgia’s capital and the last stop of the journey.", ka: "საქართველოს დედაქალაქი და მოგზაურობის ბოლო გაჩერება.", ru: "Столица Грузии, где завершится путешествие." },
      coord: [41.715, 44.827], locationLabel: { en: "City centre", ka: "ქალაქის ცენტრი", ru: "Центр города" },
    },
    mtskheta: {
      name: { en: "Mtskheta", ka: "მცხეთა", ru: "Мцхета" }, region: "mtskheta-mtianeti",
      description: { en: "Georgia's ancient capital and the cultural destination proposed for Day 5.", ka: "საქართველოს ძველი დედაქალაქი და მეხუთე დღის შემოთავაზებული კულტურული მიმართულება.", ru: "Древняя столица Грузии и культурная точка, предложенная на пятый день." },
      coord: [41.845, 44.719], locationLabel: { en: "Town centre", ka: "ქალაქის ცენტრი", ru: "Центр города" },
    },
    exponati: {
      name: "Exponati", region: "mtskheta-mtianeti",
      description: { en: "A wine cellar, museum and shop in Mtskheta.", ka: "ღვინის მარანი, მუზეუმი და მაღაზია მცხეთაში.", ru: "Винный погреб, музей и магазин в Мцхете." },
      coord: null, locationLabel: { en: "Mtskheta · exact location to verify", ka: "მცხეთა · ზუსტი ადგილი გადასამოწმებელია", ru: "Мцхета · точное место нужно проверить" }, status: "to-confirm",
    },
  },

  people: {
    "maka-tedoradze": {
      name: { en: "Maka Tedoradze", ka: "მაკა თედორაძე", ru: "Мака Тедорадзе" },
      role: { en: "Winemaker", ka: "მეღვინე", ru: "Винодел" },
      business: "ChkhaValley Winery", region: "adjara",
      location: { en: "Erge, Adjara", ka: "ერგე, აჭარა", ru: "Эрге, Аджария" },
      wines: { en: "Chkhaveri · Tsolikouri", ka: "ჩხავერი · ცოლიკაური", ru: "Чхавери · Цоликоури" }, status: "draft",
      story: { en: "Maka runs ChkhaValley with Davit Bibineishvili. Their family has tended vines and made wine in Erge since 2010. They serve Adjarian dishes at their table.", ka: "მაკა ChkhaValley-ს დავით ბიბინეიშვილთან ერთად უძღვება. მათი ოჯახი ერგეში 2010 წლიდან უვლის ვაზს და აყენებს ღვინოს. მათ სუფრაზე ღვინოს აჭარული კერძები ახლავს.", ru: "Мака ведёт ChkhaValley вместе с Давитом Бибинеишвили. Их семья с 2010 года выращивает виноград и делает вино в Эрге. К вину за их столом подают аджарские блюда." },
      note: { en: "Portrait, logo and table image were supplied for this preview; final public reuse permission should remain on record.", ka: "პორტრეტი, ლოგო და სუფრის ფოტო ამ პრევიუსთვის იყო მოწოდებული; საჯარო გამოყენების საბოლოო ნებართვა დოკუმენტურად უნდა დარჩეს.", ru: "Портрет, логотип и фото стола предоставлены для этого превью; окончательное разрешение на публичное использование нужно сохранить документально." },
      photo: "./assets/hosts/chkhavalley-maka.jpg", logo: "./assets/hosts/chkhavalley-logo.jpg",
      gallery: [{ kind: "atmosphere", src: "./assets/hosts/chkhavalley-table.jpg", alt: { en: "A hosted table at ChkhaValley", ka: "სტუმრების სუფრა ChkhaValley-ში", ru: "Гостевой стол в ChkhaValley" } }],
      links: { website: "https://chkhavalley.com/", instagram: "https://www.instagram.com/chkhavalley_winery", facebook: "https://www.facebook.com/198576696681515" },
    },
    sarishvili: {
      name: { en: "Sarishvili family", ka: "სარიშვილების ოჯახი", ru: "Семья Саришвили" },
      role: { en: "Host to be confirmed", ka: "მასპინძელი დასაზუსტებელია", ru: "Кто примет гостей, ещё уточняется" },
      business: { en: "Sarishvili family winery", ka: "სარიშვილების საოჯახო მარანი", ru: "Семейная винодельня Саришвили" }, region: "guria",
      location: { en: "Guria", ka: "გურია", ru: "Гурия" },
      wines: { en: "Chkhaveri", ka: "ჩხავერი", ru: "Чхавери" }, status: "to-confirm",
      story: { en: "The family grows fruit and makes Gurian Chkhaveri. They’ve suggested setting a table in the orchard.", ka: "ოჯახი ხილს ზრდის და გურულ ჩხავერს აყენებს. სტუმრებისთვის სუფრის გაშლა ხეხილის ბაღში შემოგვთავაზეს.", ru: "Семья выращивает фрукты и делает гурийское чхавери. Хозяева предложили накрыть стол в саду." },
      note: { en: "Do not confuse this winery with the unrelated Sarajishvili brand. Portrait, logo, atmosphere, official site and social channels are still needed.", ka: "ეს მარანი არ უნდა აგვერიოს სხვა ბრენდში Sarajishvili. საჭიროა პორტრეტი, ლოგო, გარემოს ფოტო, ოფიციალური საიტი და სოციალური არხები.", ru: "Эту винодельню нельзя путать с не связанным с ней брендом Sarajishvili. Ещё нужны портрет, логотип, фото атмосферы, официальный сайт и соцсети." },
      photo: null, logo: null,
      gallery: [{ kind: "wine", src: "./assets/hosts/sarishvili-wine.jpg", alt: { en: "Bottles of Sarishvili Chkhaveri", ka: "სარიშვილის ჩხავერის ბოთლები", ru: "Бутылки чхавери Sarishvili" } }], links: {},
    },
    "khatia-jakhua": {
      name: { en: "Khatia Jakhua", ka: "ხატია ჯახუა", ru: "Хатия Джахуа" }, role: { en: "Winemaker and artist", ka: "მეღვინე და მხატვარი", ru: "Винодел и художница" },
      business: { en: "Family Winery Argvani", ka: "არგვანის საოჯახო მარანი", ru: "Семейная винодельня Argvani" }, region: "samegrelo",
      location: { en: "Abedati near Martvili", ka: "აბედათი, მარტვილთან", ru: "Абедати рядом с Мартвили" },
      wines: { en: "Ojaleshi · Chvitiluri", ka: "ოჯალეში · ჭვიტილური", ru: "Оджалеши · Чвитилури" }, status: "to-confirm",
      story: { en: "Khatia brought winemaking back to her family, replanted the vineyard and built a cellar. She’s also an artist with an interest in Georgian ornament.", ka: "ხატიამ ოჯახში მეღვინეობა გააცოცხლა, ვენახი ხელახლა გააშენა და მარანი ააგო. ის მხატვარიცაა და ქართული ორნამენტითაა დაინტერესებული.", ru: "Хатия вернула в семью виноделие: заново посадила виноградник и построила погреб. Она художница, и одна из её тем — грузинский орнамент." },
      note: { en: "Availability, portrait permission, logo, wine and atmosphere imagery, website and social channels are still needed.", ka: "საჭიროა ხელმისაწვდომობის, პორტრეტის ნებართვის, ლოგოს, ღვინისა და გარემოს ფოტოების, საიტისა და სოციალური არხების დადასტურება.", ru: "Ещё нужны подтверждение доступности, разрешение на портрет, логотип, фото вина и атмосферы, сайт и соцсети." },
      photo: null, logo: null, gallery: [], links: { wiwi: "https://wiwi.ge/ge/members_details/29/khatia-jakhua" },
    },
    "nini-chkheidze": {
      name: { en: "Nini / Nino Chkheidze", ka: "ნინი / ნინო ჩხეიძე", ru: "Нини / Нино Чхеидзе" }, role: { en: "Winemaker", ka: "მეღვინე", ru: "Винодел" },
      business: { en: "Simonica · Chkheidze Wines", ka: "Simonica · ჩხეიძეების ღვინო", ru: "Simonica · вина Чхеидзе" }, region: "imereti",
      location: { en: "Meore Obcha, Imereti", ka: "მეორე ობჩა, იმერეთი", ru: "Меоре Обча, Имерети" },
      wines: { en: "Tsolikouri · Tsitska · Otskhanuri Sapere", ka: "ცოლიკაური · ციცქა · ოცხანური საფერე", ru: "Цоликоури · Цицка · Оцханури сапере" }, status: "to-confirm",
      story: { en: "Nugzar and Mamuka Chkheidze founded the cellar. The next generation now helps make natural qvevri wines from the family’s organic vineyards.", ka: "მარანი ნუგზარ და მამუკა ჩხეიძეებმა დააარსეს. დღეს ოჯახის ორგანული ვენახების ყურძნისგან ბუნებრივ ქვევრის ღვინოს ახალი თაობაც აყენებს.", ru: "Погреб основали Нугзар и Мамука Чхеидзе. Теперь натуральные вина в квеври из винограда с семейных органических участков помогает делать и новое поколение." },
      note: { en: "WIWI's heading says Nini while the biography says Nino. Portrait, logo and approved winery imagery are still needed; Facebook was not verified.", ka: "WIWI-ის სათაურში წერია ნინი, ბიოგრაფიაში კი ნინო. საჭიროა პორტრეტი, ლოგო და დამტკიცებული ფოტოები; Facebook ვერ დადასტურდა.", ru: "В заголовке WIWI указано Нини, а в биографии — Нино. Ещё нужны портрет, логотип и одобренные фото; Facebook не подтверждён." },
      photo: null, logo: null, gallery: [],
      links: { website: "https://www.simonica.ge/", instagram: "https://www.instagram.com/simonica.wines", wiwi: "https://www.wiwi.ge/public/ge/members_details/24/nini-chkheidze" },
    },
    "exponati-host": {
      name: { en: "Exponati host", ka: "Exponati-ის მასპინძელი", ru: "Хозяин Exponati" },
      role: { en: "Host to be confirmed", ka: "მასპინძელი დასაზუსტებელია", ru: "Кто примет гостей, ещё уточняется" },
      business: "Exponati", region: "mtskheta-mtianeti",
      location: { en: "Mtskheta · exact location to verify", ka: "მცხეთა · ზუსტი ადგილი გადასამოწმებელია", ru: "Мцхета · точное место нужно проверить" }, wines: null, status: "to-confirm",
      story: { en: "A cellar, museum and shop where the group may stop for wine and exhibits.", ka: "მარანი, მუზეუმი და მაღაზია. თუ სტუმრობა შედგა, აქ ღვინოსაც გავსინჯავთ და ექსპონატებსაც ვნახავთ.", ru: "Погреб, музей и магазин. Если визит состоится, здесь можно будет попробовать вино и посмотреть экспонаты." },
      note: { en: "Manana must supply the host, official channels, availability and all approved visual assets.", ka: "მანანამ უნდა მოგვაწოდოს მასპინძელი, ოფიციალური არხები, ხელმისაწვდომობა და ყველა დამტკიცებული ვიზუალური მასალა.", ru: "Манана должна сообщить хозяина, официальные каналы, доступность и предоставить все одобренные визуальные материалы." },
      photo: null, logo: null, gallery: [], links: {},
    },
  },

  footerLinks: [
    { label: "footer.wiwi", url: "https://wiwi.ge/en" },
    { label: "footer.uvamo", url: "https://uvamo.cc/" },
  ],
  footerCredit: { label: "footer.credit", url: "https://digital.datumspace.cc/" },
  partners: [],
};
