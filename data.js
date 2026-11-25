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
        en: "A comfortable boutique journey through Adjara, Guria, Samegrelo and Imereti. The working route combines wine, local food and personal stories without presenting provisional visits as confirmed bookings.",
        ka: "კომფორტული ბუტიკური მოგზაურობა აჭარაში, გურიაში, სამეგრელოსა და იმერეთში. სამუშაო მარშრუტი აერთიანებს ღვინოს, ადგილობრივ კერძებსა და პირად ისტორიებს, თუმცა დაგეგმილი ვიზიტები დადასტურებულ ჯავშნებად არ არის წარმოდგენილი.",
        ru: "Комфортное бутиковое путешествие по Аджарии, Гурии, Самегрело и Имерети. Рабочий маршрут объединяет вино, местную кухню и личные истории, не выдавая предложенные визиты за подтверждённые бронирования.",
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
            en: "In October or November, mandarin picking with Maka may take most of the day. In that version Sarishvili is skipped and the group travels directly to Kutaisi. Harvest timing and meal arrangements remain to be checked.",
            ka: "ოქტომბერში ან ნოემბერში მაკასთან მანდარინის კრეფამ შესაძლოა დღის უმეტესი ნაწილი დაიკავოს. ამ ვერსიაში სარიშვილების მარანი გამოტოვებულია და ჯგუფი პირდაპირ ქუთაისში მიდის. მოსავლის დრო და კვების დეტალები გადასამოწმებელია.",
            ru: "В октябре или ноябре сбор мандаринов у Маки может занять почти весь день. В этом варианте Саришвили пропускают и едут прямо в Кутаиси. Сроки урожая и организация обеда ещё проверяются.",
          },
        },
        {
          id: "day-three-options",
          title: { en: "Choose one nearby sight", ka: "ერთი ახლომდებარე ადგილის არჩევა", ru: "Выбрать одну достопримечательность рядом" },
          text: {
            en: "Martvili Canyon, Okatse Canyon and Prometheus Cave are alternatives, not a combined promise. The route and available time will decide whether any one of them fits.",
            ka: "მარტვილის კანიონი, ოკაცეს კანიონი და პრომეთეს მღვიმე ალტერნატივებია და არა ერთდროულად დაპირებული პროგრამა. მარშრუტი და ხელმისაწვდომი დრო განსაზღვრავს, რომელი მათგანი ჩაეტევა.",
            ru: "Мартвильский каньон, каньон Окаце и пещера Прометея — альтернативы, а не единая обещанная программа. Маршрут и доступное время определят, поместится ли один из вариантов.",
          },
        },
        {
          id: "nini-name",
          title: { en: "Nini or Nino Chkheidze", ka: "ნინი თუ ნინო ჩხეიძე", ru: "Нини или Нино Чхеидзе" },
          text: {
            en: "The WIWI member heading says Nini; its biography and Manana's note use Nino. WIWI should confirm the public name. Lunch is proposed, not booked; Baia's Wine remains a fallback only.",
            ka: "WIWI-ის წევრის სათაურში წერია ნინი, ბიოგრაფიასა და მანანას ჩანაწერში — ნინო. საჯარო სახელი WIWI-მ უნდა დაადასტუროს. სადილი მხოლოდ შეთავაზებულია და დაჯავშნილი არ არის; „ბაიას ღვინო“ მხოლოდ სარეზერვო ვარიანტია.",
            ru: "В заголовке профиля WIWI указано Нини, а в биографии и заметке Мананы — Нино. Публичное имя должна подтвердить WIWI. Обед предложен, но не забронирован; Baia’s Wine остаётся только запасным вариантом.",
          },
        },
        {
          id: "exponati-host",
          title: { en: "Exponati visit", ka: "Exponati-ის ვიზიტი", ru: "Визит в Exponati" },
          text: {
            en: "The cellar, museum and shop are a proposed Mtskheta stop. Manana will supply the host or operator, confirm availability and decide the order of the Tbilisi and Mtskheta visits.",
            ka: "მარანი, მუზეუმი და მაღაზია მცხეთაში შემოთავაზებული გაჩერებაა. მანანა მოგვაწვდის მასპინძლის ან ოპერატორის მონაცემებს, დაადასტურებს ხელმისაწვდომობას და განსაზღვრავს თბილისისა და მცხეთის ვიზიტების თანმიმდევრობას.",
            ru: "Винный погреб, музей и магазин предложены как остановка в Мцхете. Манана сообщит данные хозяина или оператора, подтвердит доступность и определит порядок визитов в Тбилиси и Мцхету.",
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
              summary: { en: "Meet the Black Sea coast and settle into the first base of the route.", ka: "შავი ზღვის სანაპიროს გაცნობა და მარშრუტის პირველ ქალაქში განთავსება.", ru: "Знакомство с черноморским побережьем и размещение в первой точке маршрута." },
              topics: ["arrival"], place: "batumi", status: "draft",
            },
            {
              id: "d1-rest", time: null, type: "stay",
              title: { en: "Hotel, rest and an optional easy walk", ka: "სასტუმრო, დასვენება და სურვილისამებრ მსუბუქი გასეირნება", ru: "Отель, отдых и необязательная лёгкая прогулка" },
              summary: { en: "A quiet first day. The hotel and arrival logistics will be agreed before the season.", ka: "მშვიდი პირველი დღე. სასტუმრო და ჩამოსვლის ლოგისტიკა სეზონის დაწყებამდე შეთანხმდება.", ru: "Спокойный первый день. Отель и логистику прибытия согласуют до начала сезона." },
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
              summary: { en: "A family winery in Erge: Chkhaveri and Tsolikouri, local Adjarian food and the landscape between Batumi and the mountains.", ka: "საოჯახო მარანი ერგეში: ჩხავერი და ცოლიკაური, ადგილობრივი აჭარული კერძები და ბათუმსა და მთებს შორის მდებარე გარემო.", ru: "Семейная винодельня в Эрге: чхавери и цоликоури, местная аджарская еда и пейзаж между Батуми и горами." },
              topics: ["wine", "food", "meet-winemaker", "family-winery"], place: "chkhavalley", people: ["maka-tedoradze"],
              wine: { en: "Chkhaveri and Tsolikouri", ka: "ჩხავერი და ცოლიკაური", ru: "Чхавери и цоликоури" },
              food: { en: "Local Adjarian food", ka: "ადგილობრივი აჭარული კერძები", ru: "Местные аджарские блюда" },
              seasonal: { en: "October–November option: mandarin picking may replace the Guria visit and fill most of the day.", ka: "ოქტომბერ–ნოემბრის ვარიანტი: მანდარინის კრეფამ შეიძლება გურიის ვიზიტი ჩაანაცვლოს და დღის უმეტესი ნაწილი დაიკავოს.", ru: "Вариант октября–ноября: сбор мандаринов может заменить визит в Гурию и занять почти весь день." },
              status: "draft", links: { uvamoWine: null, uvamoSet: null },
            },
            {
              id: "d2-sarishvili", time: { en: "Later", ka: "შემდეგ", ru: "Позже" }, type: "wine",
              title: { en: "Sarishvili family winery", ka: "სარიშვილების საოჯახო მარანი", ru: "Семейная винодельня Саришвили" },
              summary: { en: "Gurian Chkhaveri, a family fruit garden and a shared table. This stop is omitted when the mandarin-harvest version runs.", ka: "გურული ჩხავერი, ოჯახის ხეხილის ბაღი და საერთო სუფრა. მანდარინის კრეფის ვერსიაში ეს გაჩერება გამოტოვებულია.", ru: "Гурийское чхавери, семейный фруктовый сад и общий стол. В версии со сбором мандаринов эту остановку пропускают." },
              topics: ["wine", "food", "family-winery"], place: "sarishvili", people: ["sarishvili"],
              wine: { en: "Chkhaveri", ka: "ჩხავერი", ru: "Чхавери" },
              flags: [{ en: "Host identity, exact village and meal arrangements to confirm", ka: "მასპინძლის ვინაობა, ზუსტი სოფელი და კვების დეტალები დასაზუსტებელია", ru: "Нужно уточнить хозяина, точное село и организацию обеда" }],
              status: "to-confirm", links: { uvamoWine: null, uvamoSet: null },
            },
            {
              id: "d2-kutaisi", time: { en: "Evening", ka: "საღამო", ru: "Вечер" }, type: "transport",
              title: { en: "Continue to Kutaisi", ka: "გზა ქუთაისისკენ", ru: "Переезд в Кутаиси" },
              summary: { en: "Arrival and overnight in Kutaisi. Bikentia's kebab with its distinctive sauce is an optional local stop, not a fixed inclusion.", ka: "ჩამოსვლა და ღამისთევა ქუთაისში. ბიკენტიას ქაბაბი დამახასიათებელი სოუსით მხოლოდ სურვილისამებრ ადგილობრივი გაჩერებაა და არა ფიქსირებული პროგრამა.", ru: "Прибытие и ночёвка в Кутаиси. Кебаб у Бикентии с характерным соусом — необязательная местная остановка, а не фиксированная часть программы." },
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
              summary: { en: "Khatia is an artist who revived her family's winegrowing in Abedati. The visit can connect wine with Georgian ornamental-art traditions.", ka: "ხატია მხატვარია, რომელმაც აბედათში ოჯახის მევენახეობა აღადგინა. ვიზიტი ღვინოს ქართული ორნამენტის ტრადიციას უკავშირებს.", ru: "Хатия — художница, возродившая семейное виноградарство в Абедати. Визит может связать вино с традициями грузинского орнамента." },
              topics: ["wine", "meet-winemaker", "heritage", "family-winery"], place: "argvani", people: ["khatia-jakhua"],
              wine: { en: "Ojaleshi and Chvitiluri", ka: "ოჯალეში და ჭვიტილური", ru: "Оджалеши и чвитилури" },
              flags: [{ en: "Host availability to confirm", ka: "მასპინძლის ხელმისაწვდომობა დასადასტურებელია", ru: "Нужно подтвердить доступность хозяйки" }],
              status: "to-confirm", links: { uvamoWine: null, uvamoSet: null },
            },
            {
              id: "d3-sight", time: { en: "Optional", ka: "სურვილისამებრ", ru: "По возможности" }, type: "excursion",
              title: { en: "One nearby sight, if the route allows", ka: "ერთი ახლომდებარე ადგილი, თუ მარშრუტი იძლევა საშუალებას", ru: "Одна достопримечательность рядом, если позволит маршрут" },
              summary: { en: "Martvili Canyon, Okatse Canyon or Prometheus Cave will be evaluated as alternatives after the route is timed.", ka: "მარშრუტის დროის შემოწმების შემდეგ ალტერნატივად შეფასდება მარტვილის კანიონი, ოკაცეს კანიონი ან პრომეთეს მღვიმე.", ru: "После проверки времени маршрута выберут один из вариантов: Мартвильский каньон, каньон Окаце или пещеру Прометея." },
              topics: ["nature"], route: { en: "Samegrelo / Imereti option", ka: "სამეგრელოს / იმერეთის ვარიანტი", ru: "Вариант в Самегрело / Имерети" },
              flags: ["travel-time"], status: "to-confirm",
            },
            {
              id: "d3-dinner", time: { en: "Evening", ka: "საღამო", ru: "Вечер" }, type: "food",
              title: { en: "Return to Kutaisi · Sisters / Three Sisters", ka: "დაბრუნება ქუთაისში · Sisters / Three Sisters", ru: "Возвращение в Кутаиси · Sisters / Three Sisters" },
              summary: { en: "A suggested dinner, subject to confirming the correct establishment and availability.", ka: "შემოთავაზებული ვახშამი; საჭიროა სწორი დაწესებულებისა და ხელმისაწვდომობის დადასტურება.", ru: "Предложенный ужин; нужно подтвердить правильное заведение и доступность." },
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
              title: { en: "Nini / Nino Chkheidze at Simonica", ka: "ნინი / ნინო ჩხეიძე Simonica-ში", ru: "Нини / Нино Чхеидзе в Simonica" },
              summary: { en: "A family winery in Meore Obcha making natural qvevri wines from its own organic vineyards. A winery visit and lunch are proposed.", ka: "საოჯახო მარანი მეორე ობჩაში, რომელიც საკუთარი ორგანული ვენახების ყურძნისგან ბუნებრივ ქვევრის ღვინოს აწარმოებს. შემოთავაზებულია მარნის ვიზიტი და სადილი.", ru: "Семейная винодельня в Меоре Обча производит натуральные квеври-вина из винограда собственных органических виноградников. Предложены визит и обед." },
              topics: ["wine", "food", "meet-winemaker", "family-winery"], place: "obcha", people: ["nini-chkheidze"],
              wine: { en: "Tsolikouri, Tsitska and Otskhanuri Sapere", ka: "ცოლიკაური, ციცქა და ოცხანური საფერე", ru: "Цоликоури, цицка и оцханури сапере" },
              food: { en: "Proposed lunch", ka: "შემოთავაზებული სადილი", ru: "Предложенный обед" },
              flags: [{ en: "Public name and lunch to confirm; Baia's Wine is fallback only", ka: "საჯარო სახელი და სადილი დასადასტურებელია; „ბაიას ღვინო“ მხოლოდ სარეზერვო ვარიანტია", ru: "Нужно подтвердить публичное имя и обед; Baia’s Wine — только запасной вариант" }],
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
              title: { en: "Tbilisi cultural walking time", ka: "კულტურული გასეირნება თბილისში", ru: "Культурная прогулка по Тбилиси" },
              summary: { en: "A flexible city walk; the order with Mtskheta remains to be agreed.", ka: "მოქნილი ქალაქის გასეირნება; მცხეთასთან თანმიმდევრობა შესათანხმებელია.", ru: "Гибкая прогулка по городу; порядок с Мцхетой ещё предстоит согласовать." },
              topics: ["heritage"], place: "tbilisi", status: "draft",
            },
            {
              id: "d5-mtskheta", time: null, type: "excursion",
              title: { en: "Mtskheta", ka: "მცხეთა", ru: "Мцхета" },
              summary: { en: "Time in Georgia's ancient capital, arranged around the final route order.", ka: "დრო საქართველოს ძველ დედაქალაქში, საბოლოო მარშრუტის თანმიმდევრობის მიხედვით.", ru: "Время в древней столице Грузии в соответствии с окончательным порядком маршрута." },
              topics: ["heritage"], place: "mtskheta", status: "draft",
            },
            {
              id: "d5-exponati", time: { en: "Proposed", ka: "შემოთავაზებული", ru: "Предложено" }, type: "wine",
              title: { en: "Exponati cellar, museum and shop", ka: "Exponati-ის მარანი, მუზეუმი და მაღაზია", ru: "Винный погреб, музей и магазин Exponati" },
              summary: { en: "A proposed tasting and exhibits stop. The personal host, operator and availability have not been confirmed.", ka: "შემოთავაზებული დეგუსტაცია და ექსპონატების ნახვა. პირადი მასპინძელი, ოპერატორი და ხელმისაწვდომობა დადასტურებული არ არის.", ru: "Предложенная остановка с дегустацией и экспонатами. Личный хозяин, оператор и доступность не подтверждены." },
              topics: ["wine", "heritage"], place: "exponati", people: ["exponati-host"],
              flags: [{ en: "Host and official channels to be supplied by Manana", ka: "მასპინძელი და ოფიციალური არხები მანანამ უნდა მოგვაწოდოს", ru: "Манана должна сообщить хозяина и официальные каналы" }],
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
              summary: { en: "Airport, flight and exact transfer time remain to be agreed.", ka: "აეროპორტი, ფრენა და ტრანსფერის ზუსტი დრო შესათანხმებელია.", ru: "Аэропорт, рейс и точное время трансфера ещё предстоит согласовать." },
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
        en: "A separate journey being prepared with Ketino. Days, hosts and experiences will appear only after the route has been agreed.",
        ka: "ცალკე მოგზაურობა ქეთინოსთან ერთად მზადდება. დღეები, მასპინძლები და შთაბეჭდილებები მხოლოდ მარშრუტის შეთანხმების შემდეგ გამოჩნდება.",
        ru: "Отдельное путешествие готовится вместе с Кетино. Дни, хозяева и впечатления появятся только после согласования маршрута.",
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
      description: { en: "A Gurian family winery proposed for Chkhaveri, a fruit garden and a shared table. Exact village and host are pending.", ka: "გურული საოჯახო მარანი, რომელიც ჩხავერის, ხეხილის ბაღისა და საერთო სუფრისთვის არის შემოთავაზებული. ზუსტი სოფელი და მასპინძელი დასაზუსტებელია.", ru: "Гурийская семейная винодельня, предложенная для чхавери, фруктового сада и общего стола. Точное село и хозяин уточняются." },
      coord: [42.08, 42.04], locationLabel: { en: "Guria · exact village to confirm", ka: "გურია · ზუსტი სოფელი დასაზუსტებელია", ru: "Гурия · точное село нужно уточнить" },
      status: "to-confirm", photo: "./assets/hosts/sarishvili-wine.jpg",
    },
    kutaisi: {
      heroLabel: "left", name: { en: "Kutaisi", ka: "ქუთაისი", ru: "Кутаиси" }, region: "imereti",
      description: { en: "The route's two-night base for Guria, Samegrelo and optional nearby sights.", ka: "მარშრუტის ორდღიანი ბაზა გურიის, სამეგრელოსა და ახლომდებარე ადგილებისთვის.", ru: "Двухдневная база маршрута для Гурии, Самегрело и возможных достопримечательностей рядом." },
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
      description: { en: "Georgia's capital and the final base of the journey.", ka: "საქართველოს დედაქალაქი და მოგზაურობის ბოლო ბაზა.", ru: "Столица Грузии и последняя база путешествия." },
      coord: [41.715, 44.827], locationLabel: { en: "City centre", ka: "ქალაქის ცენტრი", ru: "Центр города" },
    },
    mtskheta: {
      name: { en: "Mtskheta", ka: "მცხეთა", ru: "Мцхета" }, region: "mtskheta-mtianeti",
      description: { en: "Georgia's ancient capital and the cultural destination proposed for Day 5.", ka: "საქართველოს ძველი დედაქალაქი და მეხუთე დღის შემოთავაზებული კულტურული მიმართულება.", ru: "Древняя столица Грузии и культурная точка, предложенная на пятый день." },
      coord: [41.845, 44.719], locationLabel: { en: "Town centre", ka: "ქალაქის ცენტრი", ru: "Центр города" },
    },
    exponati: {
      name: "Exponati", region: "mtskheta-mtianeti",
      description: { en: "A proposed wine cellar, museum and shop stop in Mtskheta. The operator, host and exact verified location are pending.", ka: "მცხეთაში შემოთავაზებული ღვინის მარნის, მუზეუმისა და მაღაზიის გაჩერება. ოპერატორი, მასპინძელი და ზუსტი დადასტურებული მდებარეობა დასაზუსტებელია.", ru: "Предложенная остановка в винном погребе, музее и магазине в Мцхете. Оператор, хозяин и точное подтверждённое место уточняются." },
      coord: null, locationLabel: { en: "Mtskheta · exact location to verify", ka: "მცხეთა · ზუსტი ადგილი გადასამოწმებელია", ru: "Мцхета · точное место нужно проверить" }, status: "to-confirm",
    },
  },

  people: {
    "maka-tedoradze": {
      name: { en: "Maka Tedoradze", ka: "მაკა თედორაძე", ru: "Мака Тедорадзе" },
      role: { en: "Winemaker and family host", ka: "მეღვინე და ოჯახის მასპინძელი", ru: "Винодел и хозяйка семейного приёма" },
      business: "ChkhaValley Winery", region: "adjara",
      location: { en: "Erge, Adjara", ka: "ერგე, აჭარა", ru: "Эрге, Аджария" },
      wines: { en: "Chkhaveri · Tsolikouri", ka: "ჩხავერი · ცოლიკაური", ru: "Чхавери · Цоликоури" }, status: "draft",
      story: { en: "Maka runs ChkhaValley with Davit Bibineishvili. Their family has grown grapes and made wine in Erge since 2010, pairing regional varieties with a Georgian kitchen.", ka: "მაკა ChkhaValley-ს დავით ბიბინეიშვილთან ერთად უძღვება. მათი ოჯახი ერგეში 2010 წლიდან ვაზს უვლის და ღვინოს აყენებს, რეგიონულ ჯიშებს კი ქართულ სამზარეულოს უხამებს.", ru: "Мака ведёт ChkhaValley вместе с Давитом Бибинеишвили. Их семья выращивает виноград и делает вино в Эрге с 2010 года, сочетая региональные сорта с грузинской кухней." },
      note: { en: "Portrait, logo and table image were supplied for this preview; final public reuse permission should remain on record.", ka: "პორტრეტი, ლოგო და სუფრის ფოტო ამ პრევიუსთვის იყო მოწოდებული; საჯარო გამოყენების საბოლოო ნებართვა დოკუმენტურად უნდა დარჩეს.", ru: "Портрет, логотип и фото стола предоставлены для этого превью; окончательное разрешение на публичное использование нужно сохранить документально." },
      photo: "./assets/hosts/chkhavalley-maka.jpg", logo: "./assets/hosts/chkhavalley-logo.jpg",
      gallery: [{ kind: "atmosphere", src: "./assets/hosts/chkhavalley-table.jpg", alt: { en: "A hosted table at ChkhaValley", ka: "სტუმრების სუფრა ChkhaValley-ში", ru: "Гостевой стол в ChkhaValley" } }],
      links: { website: "https://chkhavalley.com/", instagram: "https://www.instagram.com/chkhavalley_winery", facebook: "https://www.facebook.com/198576696681515" },
    },
    sarishvili: {
      name: { en: "Sarishvili family", ka: "სარიშვილების ოჯახი", ru: "Семья Саришвили" },
      role: { en: "Family winery · host to confirm", ka: "საოჯახო მარანი · მასპინძელი დასაზუსტებელია", ru: "Семейная винодельня · хозяин уточняется" },
      business: { en: "Sarishvili family winery", ka: "სარიშვილების საოჯახო მარანი", ru: "Семейная винодельня Саришвили" }, region: "guria",
      location: { en: "Guria · village to confirm", ka: "გურია · სოფელი დასაზუსტებელია", ru: "Гурия · село нужно уточнить" },
      wines: { en: "Chkhaveri", ka: "ჩხავერი", ru: "Чхавери" }, status: "to-confirm",
      story: { en: "Manana describes a family fruit garden, Gurian Chkhaveri and a shared table. The woman who will personally host, the exact village and visit format are still pending.", ka: "მანანას აღწერით, აქ არის ოჯახის ხეხილის ბაღი, გურული ჩხავერი და საერთო სუფრა. რომელი ქალი უმასპინძლებს სტუმრებს, ზუსტი სოფელი და ვიზიტის ფორმატი ჯერ დასაზუსტებელია.", ru: "По описанию Мананы, здесь есть семейный фруктовый сад, гурийское чхавери и общий стол. Какая женщина будет лично принимать гостей, точное село и формат визита ещё уточняются." },
      note: { en: "Do not confuse this winery with the unrelated Sarajishvili brand. Portrait, logo, atmosphere, official site and social channels are still needed.", ka: "ეს მარანი არ უნდა აგვერიოს სხვა ბრენდში Sarajishvili. საჭიროა პორტრეტი, ლოგო, გარემოს ფოტო, ოფიციალური საიტი და სოციალური არხები.", ru: "Эту винодельню нельзя путать с не связанным с ней брендом Sarajishvili. Ещё нужны портрет, логотип, фото атмосферы, официальный сайт и соцсети." },
      photo: null, logo: null,
      gallery: [{ kind: "wine", src: "./assets/hosts/sarishvili-wine.jpg", alt: { en: "Bottles of Sarishvili Chkhaveri", ka: "სარიშვილის ჩხავერის ბოთლები", ru: "Бутылки чхавери Sarishvili" } }], links: {},
    },
    "khatia-jakhua": {
      name: { en: "Khatia Jakhua", ka: "ხატია ჯახუა", ru: "Хатия Джахуа" }, role: { en: "Winemaker and artist", ka: "მეღვინე და მხატვარი", ru: "Винодел и художница" },
      business: { en: "Family Winery Argvani", ka: "არგვანის საოჯახო მარანი", ru: "Семейная винодельня Argvani" }, region: "samegrelo",
      location: { en: "Abedati near Martvili", ka: "აბედათი, მარტვილთან", ru: "Абедати рядом с Мартвили" },
      wines: { en: "Ojaleshi · Chvitiluri", ka: "ოჯალეში · ჭვიტილური", ru: "Оджалеши · Чвитилури" }, status: "to-confirm",
      story: { en: "Khatia revived her family's viticulture, replanted the vineyard and built a new cellar. As an artist, she can connect the visit with the history of Georgian ornament.", ka: "ხატიამ ოჯახის მევენახეობა აღადგინა, ვენახი ხელახლა გააშენა და ახალი მარანი ააგო. როგორც მხატვარს, მას შეუძლია ვიზიტი ქართული ორნამენტის ისტორიას დაუკავშიროს.", ru: "Хатия возродила семейное виноградарство, заново заложила виноградник и построила новый погреб. Как художница, она может связать визит с историей грузинского орнамента." },
      note: { en: "Availability, portrait permission, logo, wine and atmosphere imagery, website and social channels are still needed.", ka: "საჭიროა ხელმისაწვდომობის, პორტრეტის ნებართვის, ლოგოს, ღვინისა და გარემოს ფოტოების, საიტისა და სოციალური არხების დადასტურება.", ru: "Ещё нужны подтверждение доступности, разрешение на портрет, логотип, фото вина и атмосферы, сайт и соцсети." },
      photo: null, logo: null, gallery: [], links: { wiwi: "https://wiwi.ge/ge/members_details/29/khatia-jakhua" },
    },
    "nini-chkheidze": {
      name: { en: "Nini / Nino Chkheidze", ka: "ნინი / ნინო ჩხეიძე", ru: "Нини / Нино Чхеидзе" }, role: { en: "Winemaker · public name to confirm", ka: "მეღვინე · საჯარო სახელი დასაზუსტებელია", ru: "Винодел · публичное имя уточняется" },
      business: { en: "Simonica · Chkheidze Wines", ka: "Simonica · ჩხეიძეების ღვინო", ru: "Simonica · вина Чхеидзе" }, region: "imereti",
      location: { en: "Meore Obcha, Imereti", ka: "მეორე ობჩა, იმერეთი", ru: "Меоре Обча, Имерети" },
      wines: { en: "Tsolikouri · Tsitska · Otskhanuri Sapere", ka: "ცოლიკაური · ციცქა · ოცხანური საფერე", ru: "Цоликоури · Цицка · Оцханури сапере" }, status: "to-confirm",
      story: { en: "The family winery was founded by Nugzar and Mamuka Chkheidze and is now managed with the next generation. It makes natural qvevri wine from grapes grown in its own organic vineyards.", ka: "საოჯახო მარანი ნუგზარ და მამუკა ჩხეიძეებმა დააარსეს და დღეს მას ახალი თაობაც მართავს. აქ საკუთარი ორგანული ვენახების ყურძნისგან ბუნებრივ ქვევრის ღვინოს აყენებენ.", ru: "Семейную винодельню основали Нугзар и Мамука Чхеидзе, а сегодня ею управляет и следующее поколение. Здесь делают натуральное квеври-вино из винограда собственных органических виноградников." },
      note: { en: "WIWI's heading says Nini while the biography says Nino. Portrait, logo and approved winery imagery are still needed; Facebook was not verified.", ka: "WIWI-ის სათაურში წერია ნინი, ბიოგრაფიაში კი ნინო. საჭიროა პორტრეტი, ლოგო და დამტკიცებული ფოტოები; Facebook ვერ დადასტურდა.", ru: "В заголовке WIWI указано Нини, а в биографии — Нино. Ещё нужны портрет, логотип и одобренные фото; Facebook не подтверждён." },
      photo: null, logo: null, gallery: [],
      links: { website: "https://www.simonica.ge/", instagram: "https://www.instagram.com/simonica.wines", wiwi: "https://www.wiwi.ge/public/ge/members_details/24/nini-chkheidze" },
    },
    "exponati-host": {
      name: { en: "Exponati host · to confirm", ka: "Exponati-ის მასპინძელი · დასაზუსტებელია", ru: "Хозяин Exponati · уточняется" },
      role: { en: "Proposed cellar, museum and shop visit", ka: "შემოთავაზებული მარნის, მუზეუმისა და მაღაზიის ვიზიტი", ru: "Предложенный визит в винный погреб, музей и магазин" },
      business: "Exponati", region: "mtskheta-mtianeti",
      location: { en: "Mtskheta · exact location to verify", ka: "მცხეთა · ზუსტი ადგილი გადასამოწმებელია", ru: "Мцхета · точное место нужно проверить" }, wines: null, status: "to-confirm",
      story: { en: "Exponati is being considered for a tasting and exhibits stop. A third-party listing does not establish the personal host or the operating details.", ka: "Exponati განიხილება დეგუსტაციისა და ექსპონატების სანახავად. მესამე მხარის ჩამონათვალი პირად მასპინძელსა და საოპერაციო დეტალებს არ ადასტურებს.", ru: "Exponati рассматривается как остановка для дегустации и экспонатов. Сторонний каталог не подтверждает личность хозяина и рабочие детали." },
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
