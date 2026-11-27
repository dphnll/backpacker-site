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
      clavelo: { url: "https://app.clavelo.cc/?share=ff358b0d2fbd9340c235238236a7857b04956a460f3f5ab0ab89d682cb22db9c" },

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
            en: "If the group stays for Maka’s mandarin harvest, it goes straight to Kutaisi and skips Sarishvili",
            ka: "თუ ჯგუფი მაკასთან მანდარინის კრეფაზე დარჩება, სარიშვილებთან აღარ შეივლის და პირდაპირ ქუთაისში გაემგზავრება",
            ru: "Если группа останется у Маки на сбор мандаринов, из Эрге поедем прямо в Кутаиси, минуя Саришвили",
          },
        },
        {
          id: "day-three-options",
          title: { en: "One stop, time permitting", ka: "ერთი გაჩერება, თუ დრო დაგვრჩა", ru: "Остановка по пути" },
          text: {
            en: "There may be time for one more stop on the way back to Kutaisi",
            ka: "ქუთაისში დაბრუნებისას, თუ დრო დაგვრჩა, კიდევ ერთ ადგილას შევივლით",
            ru: "На обратном пути в Кутаиси можно заехать в одно из мест ниже, если позволит время",
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
            en: "The order of the Tbilisi walk and the Mtskheta visit is still open",
            ka: "ჯერ გადასაწყვეტია, როდის მოვინახულებთ მცხეთას — თბილისში გასეირნებამდე თუ შემდეგ",
            ru: "Пока уточняем, когда поедем в Мцхету: до прогулки по Тбилиси или после неё",
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
          note: { en: "Arrival, settling in and rest", ka: "ჩამოსვლა, დაბინავება და დასვენება", ru: "Прибытие, размещение и отдых" },
          route: { en: "Batumi", ka: "ბათუმი", ru: "Батуми" },
          activities: [
            {
              id: "d1-arrival", time: null, type: "transport",
              title: { en: "Arrival in Batumi", ka: "ჩამოსვლა ბათუმში", ru: "Прибытие в Батуми" },
              summary: { en: "The journey begins on the Black Sea coast", ka: "მოგზაურობა შავი ზღვის სანაპიროზე იწყება", ru: "Путешествие начинается на берегу Чёрного моря" },
              topics: ["arrival"], place: "batumi", status: "draft",
            },
            {
              id: "d1-rest", time: null, type: "stay",
              title: { en: "Hotel, rest and an optional easy walk", ka: "სასტუმრო, დასვენება და სურვილისამებრ მსუბუქი გასეირნება", ru: "Отель, отдых и необязательная лёгкая прогулка" },
              summary: { en: "Arrival arrangements are still open", ka: "ჩამოსვლის დეტალები ჯერ შესათანხმებელია", ru: "Детали встречи по прибытии ещё уточняются" },
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
              summary: { en: "The family cellar sits in Erge, between Batumi and the mountains", ka: "საოჯახო მარანი ერგეშია, ბათუმსა და მთებს შორის", ru: "Семейный погреб находится в Эрге, между Батуми и горами" },
              topics: ["wine", "food", "meet-winemaker", "family-winery"], place: "chkhavalley", people: ["maka-tedoradze"],
              wine: { en: "Chkhaveri and Tsolikouri", ka: "ჩხავერი და ცოლიკაური", ru: "Чхавери и цоликоури" },
              food: { en: "Local Adjarian food", ka: "ადგილობრივი აჭარული კერძები", ru: "Местные аджарские блюда" },
              seasonal: { en: "Mandarin picking may take most of the day in October or November. Harvest dates and meals are still open.", ka: "ოქტომბერში ან ნოემბერში მანდარინის კრეფამ შეიძლება დღის დიდი ნაწილი დაიკავოს. მოსავლის აღების დრო და კვება ჯერ შესათანხმებელია.", ru: "В октябре или ноябре сбор мандаринов может занять почти весь день. Сроки сбора и обед ещё нужно согласовать." },
              status: "draft", links: { uvamoWine: null, uvamoSet: null },
            },
            {
              id: "d2-sarishvili", time: { en: "Later", ka: "შემდეგ", ru: "Позже" }, type: "wine",
              title: { en: "Sarishvili family winery", ka: "სარიშვილების საოჯახო მარანი", ru: "Семейная винодельня Саришвили" },
              summary: { en: "A shared table in the family’s fruit orchard", ka: "სუფრა ოჯახის ხეხილის ბაღში", ru: "Общий стол в семейном фруктовом саду" },
              topics: ["wine", "food", "family-winery"], place: "sarishvili", people: ["sarishvili"],
              wine: { en: "Chkhaveri", ka: "ჩხავერი", ru: "Чхавери" },
              flags: [{ en: "Exact village and meal arrangements to confirm", ka: "ზუსტი სოფელი და კვების დეტალები დასაზუსტებელია", ru: "Нужно уточнить точное село и организацию обеда" }],
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
              summary: { en: "Wine in Abedati, with a chance to hear Khatia talk about Georgian ornament", ka: "ღვინის დაგემოვნება აბედათში და, თუ მოხერხდა, ხატიასთან საუბარი ქართულ ორნამენტზე", ru: "Вино в Абедати и, если получится, разговор с Хатией о грузинском орнаменте" },
              topics: ["wine", "meet-winemaker", "heritage", "family-winery"], place: "argvani", people: ["khatia-jakhua"],
              wine: { en: "Ojaleshi and Chvitiluri", ka: "ოჯალეში და ჭვიტილური", ru: "Оджалеши и чвитилури" },
              flags: [{ en: "Host availability to confirm", ka: "მასპინძლის ხელმისაწვდომობა დასადასტურებელია", ru: "Нужно подтвердить доступность хозяйки" }],
              status: "to-confirm", links: { uvamoWine: null, uvamoSet: null },
            },
            {
              id: "d3-sight", time: { en: "Optional", ka: "სურვილისამებრ", ru: "По возможности" }, type: "excursion",
              title: { en: "A stop in nature", ka: "გაჩერება ბუნებაში", ru: "Остановка на природе" },
              summary: { en: "Martvili Canyon, Okatse Canyon or Prometheus Cave", ka: "მარტვილის კანიონი, ოკაცეს კანიონი ან პრომეთეს მღვიმე", ru: "Мартвильский каньон, каньон Окаце или пещера Прометея" },
              topics: ["nature"], route: { en: "Samegrelo / Imereti option", ka: "სამეგრელოს / იმერეთის ვარიანტი", ru: "Вариант в Самегрело / Имерети" },
              flags: ["travel-time"], status: "to-confirm",
            },
            {
              id: "d3-dinner", time: { en: "Evening", ka: "საღამო", ru: "Вечер" }, type: "food",
              title: { en: "Return to Kutaisi · Sisters / Three Sisters", ka: "დაბრუნება ქუთაისში · Sisters / Three Sisters", ru: "Возвращение в Кутаиси · Sisters / Three Sisters" },
              summary: { en: "The exact restaurant is still to be identified", ka: "ჯერ დასაზუსტებელია, რომელ რესტორანში იქნება ვახშამი", ru: "Ещё нужно уточнить, о каком именно ресторане речь" },
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
              summary: { en: "Qvevri wines made from the family’s own organically grown grapes", ka: "ქვევრის ღვინოები ოჯახის ორგანულ ვენახებში მოყვანილი ყურძნისგან", ru: "Вина из квеври, сделанные из винограда с семейных органических виноградников" },
              topics: ["wine", "food", "meet-winemaker", "family-winery"], place: "obcha", people: ["nini-chkheidze"],
              wine: { en: "Tsolikouri, Tsitska and Otskhanuri Sapere", ka: "ცოლიკაური, ციცქა და ოცხანური საფერე", ru: "Цоликоури, цицка и оцханури сапере" },
              food: { en: "Lunch at the winery", ka: "სადილი მარანში", ru: "Обед на винодельне" },
              flags: [{ en: "The winery visit is still to be arranged", ka: "მარანში სტუმრობა ჯერ შესათანხმებელია", ru: "Визит на винодельню ещё нужно согласовать" }],
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
              summary: { en: "Time to explore the city on foot", ka: "დრო ქალაქში ფეხით სასეირნოდ", ru: "Время пройтись по городу пешком" },
              topics: ["heritage"], place: "tbilisi", status: "draft",
            },
            {
              id: "d5-mtskheta", time: null, type: "excursion",
              title: { en: "Mtskheta", ka: "მცხეთა", ru: "Мцхета" },
              summary: { en: "A visit to Georgia’s ancient capital", ka: "სტუმრობა საქართველოს ძველ დედაქალაქში", ru: "Поездка в древнюю столицу Грузии" },
              topics: ["heritage"], place: "mtskheta", status: "draft",
            },
            {
              id: "d5-exponati", time: null, type: "wine",
              title: { en: "Exponati cellar, museum and shop", ka: "Exponati-ის მარანი, მუზეუმი და მაღაზია", ru: "Винный погреб, музей и магазин Exponati" },
              summary: { en: "A chance to taste wine and see the exhibits", ka: "ღვინის დაგემოვნება და ექსპონატების ნახვა", ru: "Дегустация и знакомство с экспонатами" },
              topics: ["wine", "heritage"], place: "exponati", people: ["exponati-host"],
              flags: [{ en: "Availability for the group still needs confirming", ka: "ჯგუფის მიღების შესაძლებლობა ჯერ შესათანხმებელია", ru: "Возможность принять группу ещё нужно согласовать" }],
              status: "to-confirm", links: { uvamoWine: null, uvamoSet: null },
            },
          ],
        },
        {
          n: 6,
          title: { en: "Tbilisi", ka: "თბილისი", ru: "Тбилиси" },
          note: { en: "Free time, walks and getting ready to leave", ka: "თავისუფალი დრო, სეირნობა და გამგზავრებისთვის მზადება", ru: "Свободное время, прогулки и подготовка к отъезду" },
          route: { en: "Tbilisi", ka: "თბილისი", ru: "Тбилиси" },
          activities: [
            { id: "d6-free", time: null, type: "other", title: { en: "Free time", ka: "თავისუფალი დრო", ru: "Свободное время" }, topics: ["free-time"], place: "tbilisi", status: "draft" },
            {
              id: "d6-departure", time: null, type: "transport",
              title: { en: "Airport transfer and departure", ka: "აეროპორტში გადაყვანა და გამგზავრება", ru: "Трансфер в аэропорт и вылет" },
              summary: { en: "Transfer time will depend on the flight", ka: "ტრანსფერის დრო ფრენაზე იქნება დამოკიდებული", ru: "Время трансфера будет зависеть от рейса" },
              topics: ["transfer"], place: "tbilisi",
              flags: [{ en: "Airport and flight details to confirm", ka: "აეროპორტი და ფრენის დეტალები დასაზუსტებელია", ru: "Нужно уточнить аэропорт и данные рейса" }], status: "to-confirm",
            },
          ],
        },
      ],
    },

    {
      id: "east", status: "in-development",
      title: {
        en: "Visiting Women Winemakers · Eastern Georgia",
        ka: "ქალი მეღვინეების სტუმრად · აღმოსავლეთ საქართველო",
        ru: "В гостях у женщин-виноделов. Восточная Грузия",
      },
      region: { en: "Eastern Georgia · Kakheti", ka: "აღმოსავლეთ საქართველო · კახეთი", ru: "Восточная Грузия · Кахетия" },
      tagline: null,
      summary: {
        en: "A journey through wine country, planned with Ketino around visits with women winemakers",
        ka: "ქეთინოსთან ერთად ვგეგმავთ მოგზაურობას და შეხვედრებს ქალ მეღვინეებთან",
        ru: "Вместе с Кетино планируем поездку в гости к женщинам-виноделам",
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
      "name": {
        "en": "Maka Tedoradze",
        "ka": "მაკა თედორაძე",
        "ru": "Мака Тедорадзе"
      },
      "role": {
        "en": "Winemaker",
        "ka": "მეღვინე",
        "ru": "Винодел"
      },
      "business": "ChkhaValley Winery",
      "region": "adjara",
      "location": {
        "en": "Erge, Adjara",
        "ka": "ერგე, აჭარა",
        "ru": "Эрге, Аджария"
      },
      "wines": {
        "en": "Chkhaveri · Tsolikouri · Saperavi · Kisi",
        "ka": "ჩხავერი · ცოლიკაური · საფერავი · ქისი",
        "ru": "Чхавери · Цоликоури · Саперави · Киси"
      },
      "status": "draft",
      "story": {
        "en": "Maka Tedoradze trained as a financier. Her path into wine began with the family vineyard in Erge, a village just ten kilometres from Batumi, between the Black Sea and the mountains of Adjara.\n\nThe family has grown grapes since 2010. After studying winemaking, Maka made her first wine with her husband, Davit Bibineishvili, in 2023. Together they began developing their own winery, ChkhaValley.\n\nChkhaveri, an old western Georgian variety, has a special place here, producing both rosé and amber wines. The family also grows Tsolikouri. Adjara’s humid climate calls for close attention to the vines, and Maka aims to follow the principles of natural winemaking.\n\nAt ChkhaValley, getting to know the wines continues around the family table. Home-cooked Georgian food includes Adjarian sinori, khachapuri, mchadi and seasonal dishes. Welcoming guests has become an important part of the family’s work.",
        "ka": "მაკა თედორაძე პროფესიით ფინანსისტია. მისი გზა მეღვინეობისკენ სოფელ ერგეში, საოჯახო ვენახიდან დაიწყო — ბათუმიდან სულ ათ კილომეტრში, შავ ზღვასა და აჭარის მთებს შორის.\n\nოჯახი ვაზს 2010 წლიდან უვლის. მეღვინეობის შესწავლის შემდეგ, 2023 წელს, მაკამ მეუღლესთან, დავით ბიბინეიშვილთან ერთად პირველი ღვინო დააყენა და საკუთარი მეურნეობის, ChkhaValley-ს განვითარებას შეუდგა.\n\nმათ საქმიანობაში განსაკუთრებული ადგილი ჩხავერს უჭირავს — დასავლეთ საქართველოს ძველ ჯიშს, რომლისგანაც აქ ვარდისფერ და ქარვისფერ ღვინოებს აყენებენ. ოჯახს ცოლიკაურიც მოჰყავს. აჭარის ნოტიო კლიმატში ვაზს განსაკუთრებით ფრთხილი მოვლა სჭირდება, მაკა კი ბუნებრივი მეღვინეობის პრინციპების დაცვას ცდილობს.\n\nChkhaValley-ში ღვინის გაცნობა საოჯახო სუფრასთან გრძელდება. აქ შინაურ ქართულ კერძებს ამზადებენ, მათ შორის აჭარულ სინორს, ხაჭაპურს, მჭადსა და სეზონურ ნუგბარს. სტუმართმოყვარეობა საოჯახო საქმის მნიშვნელოვან ნაწილად იქცა.",
        "ru": "По профессии Мака Тедорадзе — финансист. Её путь в виноделие начался с семейного виноградника в селе Эрге, всего в десяти километрах от Батуми, между Чёрным морем и горами Аджарии.\n\nСемья выращивает виноград с 2010 года. Пройдя обучение виноделию, в 2023 году Мака вместе с супругом Давитом Бибинеишвили сделала своё первое вино и начала развивать собственное хозяйство ChkhaValley.\n\nОсобое место в их работе занимает чхавери — старинный сорт Западной Грузии, из которого здесь делают розовые и янтарные вина. Вместе с ним семья выращивает цоликоури. Влажный климат Аджарии требует особенно внимательного ухода за лозой, а Мака стремится придерживаться принципов натурального виноделия.\n\nВ ChkhaValley знакомство с вином продолжается за семейным столом. Здесь готовят домашние грузинские блюда, среди которых аджарский синори, хачапури, мчади и сезонные угощения. Гостеприимство стало важной частью семейного проекта."
      },
      "photo": "./assets/hosts/chkhavalley-maka.jpg",
      "logo": "./assets/hosts/chkhavalley-logo.webp",
      "gallery": [
        {
          "kind": "food",
          "src": "./assets/hosts/chkhavalley-food.webp",
          "alt": {
            "en": "Hospitality · ChkhaValley Winery",
            "ka": "სტუმართმოყვარეობა · ChkhaValley Winery",
            "ru": "Гостеприимство · ChkhaValley Winery"
          }
        },
        {
          "kind": "wine",
          "src": "./assets/hosts/chkhavalley-wine.webp",
          "alt": {
            "en": "Wines · ChkhaValley Winery",
            "ka": "ღვინოები · ChkhaValley Winery",
            "ru": "Вина · ChkhaValley Winery"
          }
        },
        {
          "kind": "atmosphere",
          "src": "./assets/hosts/chkhavalley-landscape.webp",
          "alt": {
            "en": "The setting · ChkhaValley Winery",
            "ka": "გარემო · ChkhaValley Winery",
            "ru": "Место · ChkhaValley Winery"
          }
        }
      ],
      "links": {
        "website": "https://chkhavalley.com/",
        "instagram": "https://www.instagram.com/chkhavalley_winery",
        "facebook": "https://www.facebook.com/profile.php?id=61556347416179"
      },
      "cardStory": {
        "en": "A financier turned winemaker, with family wines from rare Georgian grapes in the foothills of Adjara",
        "ka": "ფინანსისტი, რომელიც მეღვინე გახდა — იშვიათი ქართული ჯიშების საოჯახო ღვინოები აჭარის მთისწინეთში",
        "ru": "Финансист, ставшая виноделом, и семейные вина из редких грузинских сортов в предгорьях Аджарии"
      }
    },
    "sarishvili": {
      "name": {
        "en": "Sarishvili Family",
        "ka": "სარიშვილების ოჯახი",
        "ru": "Семья Саришвили"
      },
      "role": {
        "en": "Family winery",
        "ka": "საოჯახო მარანი",
        "ru": "Семейная винодельня"
      },
      "business": {
        "en": "Sarishvili Family Winery",
        "ka": "სარიშვილების საოჯახო მარანი",
        "ru": "Семейная винодельня Саришвили"
      },
      "region": "guria",
      "location": {
        "en": "Guria",
        "ka": "გურია",
        "ru": "Гурия"
      },
      "wines": {
        "en": "Chkhaveri",
        "ka": "ჩხავერი",
        "ru": "Чхавери"
      },
      "status": "to-confirm",
      "story": {
        "en": "The Sarishvili family winery introduces guests to one of western Georgia’s most distinctive grapes, Chkhaveri. This old variety holds a special place in Guria’s wine culture, where families have kept winemaking traditions alive for generations.\n\nAmong the winery’s wines is a dry rosé Chkhaveri available through specialist Georgian wine shops. The production notes for one release describe fermentation with native yeasts, a short period of skin contact and subsequent ageing in a steel tank. This approach preserves the grape’s freshness and character.\n\nThe family also grows fruit. Our journey envisages tasting their wines at a shared table in the family orchard, with time to meet the hosts and get a sense of everyday life in rural Guria.",
        "ka": "სარიშვილების საოჯახო მარანი სტუმრებს დასავლეთ საქართველოს ერთ-ერთ გამორჩეულ ჯიშს — ჩხავერს აცნობს. ამ ძველ ჯიშს განსაკუთრებული ადგილი უჭირავს გურიის მეღვინეობაში, სადაც ღვინის დაყენების საოჯახო ტრადიცია თაობიდან თაობას გადაეცემოდა.\n\nმეურნეობის ერთ-ერთი ღვინო მშრალი ვარდისფერი ჩხავერია, რომელიც ქართული ღვინის სპეციალიზებულ მაღაზიებში იყიდება. ერთ-ერთი გამოშვების აღწერის მიხედვით, ღვინო ბუნებრივ საფუარზე დუღდება, ყურძნის კანთან ხანმოკლე შეხებით, შემდეგ კი ფოლადის ჭურჭელში ძველდება. ასეთი მიდგომა ჯიშის სიხალისისა და ხასიათის შენარჩუნებას უწყობს ხელს.\n\nოჯახი ხილსაც ზრდის. ჩვენი მოგზაურობის ფარგლებში მათ ღვინოებს საოჯახო ხეხილის ბაღში, საერთო სუფრასთან გავეცნობით, თუ სტუმრობა შეთანხმდება. ეს მასპინძლებთან დროის გატარებისა და გურიის შინაური ყოფის გაცნობის შესაძლებლობაა.",
        "ru": "Винодельня семьи Саришвили знакомит гостей с одним из самых характерных сортов Западной Грузии — чхавери. Этот старинный сорт занимает особое место в винодельческой культуре Гурии, где традиции семейного виноделия сохранялись на протяжении поколений.\n\nОдно из вин хозяйства — сухое розовое чхавери, представленное в специализированных грузинских винных магазинах. Для одного из его выпусков описан способ ферментации на природных дрожжах с непродолжительным контактом с кожицей винограда и последующей выдержкой в стальной ёмкости. Такой подход позволяет сохранить свежесть и характер сорта.\n\nСемья занимается также выращиванием фруктов. В рамках нашего путешествия предполагается знакомство с их винами за общим столом в семейном фруктовом саду — возможность провести время с хозяевами и познакомиться с домашним укладом жизни Гурии."
      },
      "cardStory": {
        "en": "Rare rosé Chkhaveri and a family welcome at a shared table among the fruit trees of their orchard",
        "ka": "იშვიათი ვარდისფერი ჩხავერი და საოჯახო სტუმართმოყვარეობა — საერთო სუფრა ხეხილის ბაღში",
        "ru": "Редкое розовое чхавери и семейное гостеприимство за столом среди фруктовых деревьев"
      },
      "photo": "./assets/hosts/sarishvili-portrait.webp",
      "logo": "./assets/hosts/sarishvili-logo.webp",
      "gallery": [
        {
          "kind": "food",
          "src": "./assets/hosts/sarishvili-food.webp",
          "alt": {
            "en": "Hospitality · Sarishvili Winery",
            "ka": "სტუმართმოყვარეობა · სარიშვილების მარანი",
            "ru": "Гостеприимство · Винодельня Саришвили"
          }
        },
        {
          "kind": "wine",
          "src": "./assets/hosts/sarishvili-wine.webp",
          "alt": {
            "en": "Wines · Sarishvili Winery",
            "ka": "ღვინოები · სარიშვილების მარანი",
            "ru": "Вина · Винодельня Саришвили"
          }
        },
        {
          "kind": "atmosphere",
          "src": "./assets/hosts/sarishvili-landscape.webp",
          "alt": {
            "en": "The setting · Sarishvili Winery",
            "ka": "გარემო · სარიშვილების მარანი",
            "ru": "Место · Винодельня Саришвили"
          }
        }
      ],
      "links": {
        "website": "https://www.sarishviliwinery.ge/",
        "instagram": "https://www.instagram.com/sarishvili_winery/",
        "facebook": "https://www.facebook.com/profile.php?id=100054597752907"
      }
    },
    "khatia-jakhua": {
      "name": {
        "en": "Khatia Jakhua",
        "ka": "ხატია ჯახუა",
        "ru": "Хатия Жахуа"
      },
      "role": {
        "en": "Winemaker and artist",
        "ka": "მეღვინე და მხატვარი",
        "ru": "Винодел и художница"
      },
      "business": {
        "en": "Family Winery Argvani",
        "ka": "არგვანის საოჯახო მარანი",
        "ru": "Семейная винодельня Argvani"
      },
      "region": "samegrelo",
      "location": {
        "en": "Abedati, Samegrelo",
        "ka": "აბედათი, სამეგრელო",
        "ru": "Абедати, Самегрело"
      },
      "wines": {
        "en": "Ojaleshi · Chvitiluri — the principal local varieties the winery works with",
        "ka": "ოჯალეში · ჩვიტილური — ძირითადი ადგილობრივი ჯიშები, რომლებთანაც მეურნეობა მუშაობს",
        "ru": "Оджалеши · Чвитилури — основные местные сорта, с которыми работает хозяйство"
      },
      "status": "to-confirm",
      "story": {
        "en": "Khatia Jakhua is an artist and the founder of the family winery Argvani in Abedati, nine kilometres from Martvili.\n\nHer family had long grown grapes, brought in the harvest and pressed wine in a traditional Georgian wooden trough, the satsnakheli. Over time, that tradition was almost lost. Khatia and her brother decided to bring it back, restoring the vineyard and building a new marani. Argvani has been developing its own wine production since 2021.\n\nKhatia pays particular attention to preserving and promoting Megrelian grapes, especially Ojaleshi and Chvitiluri. The winery combines traditional and modern approaches, experimenting with Georgian and European varieties.\n\nArt is another part of her life. Khatia studies Georgian ornament and introduces guests to its history and symbolism. Meeting her offers a fresh view of Samegrelo’s cultural heritage, drawing connections between art, architecture, local wines and family traditions.\n\nMegrelian food, which Khatia enjoys discussing with her guests, completes an introduction to Argvani.",
        "ka": "ხატია ჯახუა მხატვარი და საოჯახო მარნის, Argvani-ს დამფუძნებელია. მარანი სოფელ აბედათში, მარტვილიდან ცხრა კილომეტრში მდებარეობს.\n\nმის ოჯახში ოდითგანვე უვლიდნენ ვაზს, იღებდნენ მოსავალს და ყურძენს ტრადიციულ ქართულ საწნახელში წურავდნენ. დროთა განმავლობაში ეს ტრადიცია თითქმის დაიკარგა. ხატიამ და მისმა ძმამ მისი გაცოცხლება გადაწყვიტეს — ვენახი აღადგინეს და ახალი მარანი ააშენეს. 2021 წლიდან Argvani საკუთარი ღვინის წარმოებას ავითარებს.\n\nხატია განსაკუთრებულ ყურადღებას მეგრული ჯიშების, უპირველესად ოჯალეშისა და ჩვიტილურის, შენარჩუნებასა და პოპულარიზაციას უთმობს. მეურნეობაში მეღვინეობის ტრადიციულ და თანამედროვე მიდგომებს აერთიანებენ და ქართულ თუ ევროპულ ჯიშებზე ექსპერიმენტობენ.\n\nმისი ცხოვრების კიდევ ერთი მხარე ხელოვნებაა. ხატია ქართულ ორნამენტს სწავლობს და სტუმრებს მის ისტორიასა და სიმბოლიკას აცნობს. მასთან შეხვედრა სამეგრელოს კულტურული მემკვიდრეობის სხვაგვარად დანახვის საშუალებას იძლევა — ხელოვნებას, არქიტექტურას, ადგილობრივ ღვინოსა და საოჯახო ტრადიციებს შორის კავშირის აღმოჩენას.\n\nArgvani-ს გაცნობას მეგრული სამზარეულოც ახლავს, რომელზეც ხატია სტუმრებს სიამოვნებით ესაუბრება.",
        "ru": "Хатия Жахуа — художница и основательница семейной винодельни Argvani в селе Абедати, в девяти километрах от Мартвили.\n\nВ её семье издавна выращивали виноград, собирали урожай и давили вино в традиционном грузинском давильном корыте — сацнахели. Со временем эта традиция оказалась почти утрачена. Хатия вместе с братом решила вернуть её к жизни: они восстановили виноградник и построили новый марани. С 2021 года Argvani развивает собственное производство вина.\n\nОсобое внимание Хатия уделяет сохранению и популяризации мегрельских сортов, прежде всего оджалеши и чвитилури. В хозяйстве сочетают традиционные и современные подходы к виноделию, экспериментируют с грузинскими и европейскими сортами.\n\nЕщё одна сторона её жизни — искусство. Хатия изучает грузинский орнамент и знакомит гостей с его историей и символикой. Встреча с ней позволяет по-новому взглянуть на культурное наследие Самегрело: увидеть связь между искусством, архитектурой, местными винами и семейными традициями.\n\nЗнакомство с Argvani дополняет мегрельская кухня, о которой Хатия с удовольствием рассказывает своим гостям."
      },
      "photo": "./assets/hosts/argvani-portrait.webp",
      "logo": "./assets/hosts/argvani-logo.webp",
      "gallery": [
        {
          "kind": "food",
          "src": "./assets/hosts/argvani-food.webp",
          "alt": {
            "en": "Hospitality · Argvani Cellar",
            "ka": "სტუმართმოყვარეობა · მარანი არგვანი",
            "ru": "Гостеприимство · Марани Argvani"
          }
        },
        {
          "kind": "wine",
          "src": "./assets/hosts/argvani-wine.webp",
          "alt": {
            "en": "Wines · Argvani Cellar",
            "ka": "ღვინოები · მარანი არგვანი",
            "ru": "Вина · Марани Argvani"
          }
        },
        {
          "kind": "atmosphere",
          "src": "./assets/hosts/argvani-landscape.webp",
          "alt": {
            "en": "The setting · Argvani Cellar",
            "ka": "გარემო · მარანი არგვანი",
            "ru": "Место · Марани Argvani"
          }
        }
      ],
      "links": {
        "instagram": "https://www.instagram.com/vinoargvani/",
        "facebook": "https://www.facebook.com/xatia.jaxua/",
        "wiwi": "https://www.wiwi.ge/en/members_details/29/khatia-jakhua"
      },
      "cardStory": {
        "en": "An artist who revived her family vineyard, sharing Megrelian wines and the stories held in Georgian ornament",
        "ka": "მხატვარი, რომელმაც საოჯახო ვენახი აღადგინა და სტუმრებს მეგრული ღვინისა და ქართული ორნამენტის სამყაროს აცნობს",
        "ru": "Художница, возродившая семейный виноградник и открывающая гостям мир мегрельских вин и грузинского орнамента"
      }
    },
    "nini-chkheidze": {
      "name": {
        "en": "Nini Chkheidze",
        "ka": "ნინი ჩხეიძე",
        "ru": "Нини Чхеидзе"
      },
      "business": {
        "en": "Simonica — Chkheidze Wines",
        "ka": "Simonica — ჩხეიძეების ღვინო",
        "ru": "Simonica — вина Чхеидзе"
      },
      "region": "imereti",
      "location": {
        "en": "Meore Obcha, Imereti",
        "ka": "მეორე ობჩა, იმერეთი",
        "ru": "Меоре Обча, Имерети"
      },
      "wines": {
        "en": "Tsitska · Tsolikouri · Krakhuna · Otskhanuri Sapere · Ojaleshi",
        "ka": "ციცქა · ცოლიკაური · კრახუნა · ოცხანური საფერე · ოჯალეში",
        "ru": "Цицка · Цоликоури · Крахуна · Оцханури сапере · Оджалеши"
      },
      "status": "to-confirm",
      "story": {
        "en": "Nini Chkheidze is the third generation of winemakers in her family. Before joining the family winery, she spent more than ten years in marketing, earned an MBA at France’s Grenoble École de Management and a WSET Level 3 qualification, and studied viticulture and oenology at the Agricultural University of Georgia.\n\nBrothers Nugzar and Mamuka Chkheidze founded Simonica in 2008. Nini now develops the family business alongside her father and uncle, bringing contemporary professional knowledge to the experience passed down through generations.\n\nThe family has vineyards in two wine regions of western Georgia, in Meore Obcha in Imereti and Zana in Samegrelo. They grow local varieties, from Imeretian Tsitska, Tsolikouri, Krakhuna and Otskhanuri Sapere to Megrelian Ojaleshi, Egudzguri and Chvitiluri.\n\nSimonica follows the principles of organic viticulture and natural winemaking. Alongside traditional qvevri wines, it makes rosé and naturally sparkling wines. The winery has been a member of Georgia’s Natural Wine Association since 2017.",
        "ka": "ნინი ჩხეიძე თავისი ოჯახის მეღვინეთა მესამე თაობას წარმოადგენს. საოჯახო მეურნეობაში ჩართვამდე ის ათ წელზე მეტხანს მარკეტინგში მუშაობდა, საფრანგეთის გრენობლის მენეჯმენტის სკოლაში MBA-ის ხარისხი მიიღო, მოიპოვა WSET Level 3-ის კვალიფიკაცია და საქართველოს აგრარულ უნივერსიტეტში მევენახეობა და ენოლოგია შეისწავლა.\n\nმეღვინეობა Simonica 2008 წელს ძმებმა ნუგზარ და მამუკა ჩხეიძეებმა დააარსეს. დღეს ნინი საოჯახო საქმეს მამასა და ბიძასთან ერთად ავითარებს და თაობების გამოცდილებას თანამედროვე პროფესიულ ცოდნას უთავსებს.\n\nოჯახს ვენახები დასავლეთ საქართველოს ორ მეღვინეობის რეგიონში აქვს — იმერეთში, სოფელ მეორე ობჩაში, და სამეგრელოში, სოფელ ზანაში. აქ ადგილობრივი ჯიშები მოჰყავთ — იმერული ციცქა, ცოლიკაური, კრახუნა და ოცხანური საფერე, ასევე მეგრული ოჯალეში, ეგუძგური და ჩვიტილური.\n\nSimonica ორგანული მევენახეობისა და ბუნებრივი მეღვინეობის პრინციპებს მისდევს. ქვევრის ტრადიციულ ღვინოებთან ერთად მეურნეობა ვარდისფერ და ბუნებრივად ცქრიალა ღვინოებსაც აწარმოებს. 2017 წლიდან მარანი საქართველოს ბუნებრივი ღვინის ასოციაციის წევრია.",
        "ru": "Нини Чхеидзе представляет третье поколение виноделов своей семьи. Прежде чем присоединиться к семейному хозяйству, она более десяти лет работала в маркетинге, получила MBA во французской Grenoble École de Management, квалификацию WSET Level 3 и прошла обучение виноградарству и энологии в Аграрном университете Грузии.\n\nВинодельню Simonica основали в 2008 году братья Нугзар и Мамука Чхеидзе. Сегодня Нини развивает семейное дело вместе с отцом и дядей, соединяя накопленный поколениями опыт с современными профессиональными знаниями.\n\nУ семьи есть виноградники в двух винодельческих регионах Западной Грузии: в Имерети, в селе Меоре Обча, и в Самегрело, в селе Зана. Здесь выращивают местные сорта — от имеретинских цицки, цоликоури, крахуны и оцханури сапере до мегрельских оджалеши, эгудзгури и чвитилури.\n\nSimonica придерживается принципов органического виноградарства и натурального виноделия. Наряду с традиционными винами в квеври хозяйство выпускает розовые и естественно игристые вина. С 2017 года винодельня входит в грузинскую Ассоциацию натурального вина."
      },
      "photo": "./assets/hosts/simonika-portrait.webp",
      "logo": "./assets/hosts/simonika-logo.webp",
      "gallery": [
        {
          "kind": "food",
          "src": "./assets/hosts/simonika-food.webp",
          "alt": {
            "en": "Hospitality · Simonika - Chkheidze Wines",
            "ka": "სტუმართმოყვარეობა · Simonika - ჩხეიძეების ღვინო",
            "ru": "Гостеприимство · Simonika - вина Чхеидзе"
          }
        },
        {
          "kind": "wine",
          "src": "./assets/hosts/simonika-wine.webp",
          "alt": {
            "en": "Wines · Simonika - Chkheidze Wines",
            "ka": "ღვინოები · Simonika - ჩხეიძეების ღვინო",
            "ru": "Вина · Simonika - вина Чхеидзе"
          }
        },
        {
          "kind": "atmosphere",
          "src": "./assets/hosts/simonika-landscape.webp",
          "alt": {
            "en": "The setting · Simonika - Chkheidze Wines",
            "ka": "გარემო · Simonika - ჩხეიძეების ღვინო",
            "ru": "Место · Simonika - вина Чхеидзе"
          }
        }
      ],
      "links": {
        "website": "https://www.simonica.ge/",
        "instagram": "https://www.instagram.com/simonica.wines/",
        "facebook": "https://www.facebook.com/simonica.wines/",
        "wiwi": "https://wiwi.ge/en/members_details/24/nini-chkheidze"
      },
      "role": {
        "en": "Winemaker",
        "ka": "მეღვინე",
        "ru": "Винодел"
      },
      "cardStory": {
        "en": "An MBA, WSET Level 3 and three generations of winemaking — a fresh perspective on the family’s qvevri tradition",
        "ka": "MBA, WSET Level 3 და მეღვინეთა მესამე თაობა — ახალი ხედვა ქართული ქვევრის ღვინის საოჯახო ტრადიციაზე",
        "ru": "MBA, WSET Level 3 и третье поколение виноделов — новый взгляд на семейную традицию грузинского квеври"
      }
    },
    "exponati-host": {
      "name": {
        "en": "Exponati",
        "ka": "Exponati",
        "ru": "Exponati"
      },
      "role": {
        "en": "Wine cellar",
        "ka": "ღვინის მარანი",
        "ru": "Винный погреб"
      },
      "business": {
        "en": "Exponati Wine Cellar",
        "ka": "Exponati — ღვინის მარანი",
        "ru": "Винный погреб Exponati"
      },
      "region": "kartli",
      "location": {
        "en": "Mtskheta, Kartli",
        "ka": "მცხეთა, ქართლი",
        "ru": "Мцхета, Картли"
      },
      "wines": null,
      "status": "to-confirm",
      "story": {
        "en": "In the historic heart of Mtskheta, close to Svetitskhoveli Cathedral, Exponati brings a tasting cellar and wine shop together in one space.\n\nWhat distinguishes the place is the opportunity to explore several approaches to winemaking. Its wines include those made by the traditional Georgian method in clay qvevri, alongside wines made using European methods and barrel ageing.\n\nA visit to Exponati continues the introduction to Georgian wine culture after the journey through family wineries in Adjara, Guria, Samegrelo and Imereti. Here, guests can compare wine styles and learn more about how they are made.\n\nIts location in Georgia’s ancient capital brings wine and Mtskheta’s historic heritage into the same visit.",
        "ka": "მცხეთის ისტორიულ ნაწილში, სვეტიცხოვლის ტაძრის მახლობლად, ღვინის სივრცე Exponati მდებარეობს, რომელიც სადეგუსტაციო მარანსა და ღვინის მაღაზიას აერთიანებს.\n\nამ ადგილის თავისებურება მეღვინეობის რამდენიმე მიდგომის გაცნობის შესაძლებლობაა. აქ წარმოდგენილია როგორც ტრადიციული ქართული ტექნოლოგიით, თიხის ქვევრებში დაყენებული ღვინოები, ისე ევროპული მეთოდებითა და კასრში დაძველებით შექმნილი ღვინოები.\n\nExponati-ში სტუმრობა ქართული ღვინის კულტურის გაცნობას აგრძელებს აჭარის, გურიის, სამეგრელოსა და იმერეთის საოჯახო მეურნეობების მონახულების შემდეგ. აქ სხვადასხვა სტილის ღვინის შედარება და მათი დამზადების გზების უკეთ გაცნობა შეიძლება.\n\nსაქართველოს ძველ დედაქალაქში მდებარეობა ღვინის გაცნობასა და მცხეთის ისტორიული მემკვიდრეობის მონახულებას ერთ ვიზიტში აერთიანებს.",
        "ru": "В исторической части Мцхеты, неподалёку от собора Светицховели, находится винное пространство Exponati, объединяющее дегустационный погреб и магазин вина.\n\nОсобенность этого места — возможность познакомиться с несколькими подходами к виноделию. Здесь представлены вина, изготовленные по традиционной грузинской технологии в глиняных квеври, а также вина, созданные с применением европейских методов и выдержки в бочках.\n\nПосещение Exponati станет продолжением знакомства с винной культурой Грузии после путешествия по семейным хозяйствам Аджарии, Гурии, Самегрело и Имерети. Здесь можно будет сопоставить разные стили вина и узнать больше о способах его изготовления.\n\nРасположение в древней столице Грузии позволяет объединить знакомство с вином и историческим наследием Мцхеты."
      },
      "cardStory": {
        "en": "A wine cellar near Svetitskhoveli, where different traditions of Georgian winemaking meet in the glass",
        "ka": "ღვინის მარანი სვეტიცხოველთან — ადგილი ქართული მეღვინეობის სხვადასხვა ტრადიციის გასაცნობად",
        "ru": "Винный погреб рядом со Светицховели, где знакомятся с разными традициями грузинского виноделия"
      },
      "photo": "./assets/hosts/exponati-portrait.webp",
      "logo": "./assets/hosts/exponati-logo.webp",
      "gallery": [
        {
          "kind": "food",
          "src": "./assets/hosts/exponati-food.webp",
          "alt": {
            "en": "Hospitality · Exponati",
            "ka": "სტუმართმოყვარეობა · Exponati",
            "ru": "Гостеприимство · Exponati"
          }
        },
        {
          "kind": "wine",
          "src": "./assets/hosts/exponati-wine.webp",
          "alt": {
            "en": "Wines · Exponati",
            "ka": "ღვინოები · Exponati",
            "ru": "Вина · Exponati"
          }
        },
        {
          "kind": "atmosphere",
          "src": "./assets/hosts/exponati-landscape.webp",
          "alt": {
            "en": "The setting · Exponati",
            "ka": "გარემო · Exponati",
            "ru": "Место · Exponati"
          }
        }
      ],
      "links": {
        "instagram": "https://www.instagram.com/_exponati_/",
        "facebook": "https://www.facebook.com/exponatiwine"
      }
    }
  },

  footerLinks: [
    { label: "footer.wiwi", url: "https://wiwi.ge/en" },
    { label: "footer.uvamo", url: "https://uvamo.cc/" },
  ],
  footerCredit: { label: "footer.credit", url: "https://digital.datumspace.cc/" },
  partners: [],
};
