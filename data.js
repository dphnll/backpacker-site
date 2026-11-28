/* WIWI Tours editorial data — Manana feedback, 27 November 2026. */
window.WIWI_DATA = {
  updated: "2026-11-27",

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
        en: "Working route agreed with Manana · updated 27 November 2026",
        ka: "მანანასთან შეთანხმებული სამუშაო მარშრუტი · განახლდა 2026 წლის 27 ნოემბერს",
        ru: "Рабочий маршрут согласован с Мананой · обновлён 27 ноября 2026",
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
          title: { en: "Order of the day", ka: "დღის თანმიმდევრობა", ru: "Порядок дня" },
          text: {
            en: "In November the mandarin harvest at ChkhaValley comes first. The order of Makhuntseti, Shekvetili, Sarishvili and the Kutaisi walk will be set once timings are checked; if the harvest takes most of the day, the group goes straight to Kutaisi and skips Sarishvili",
            ka: "ნოემბერში უპირატესობა ChkhaValley-ში მანდარინის კრეფას ენიჭება. მახუნცეთის, შეკვეთილის, სარიშვილებისა და ქუთაისში გასეირნების თანმიმდევრობა დროის შემოწმების შემდეგ განისაზღვრება; თუ კრეფა დღის დიდ ნაწილს დაიკავებს, ჯგუფი სარიშვილებთან აღარ შეივლის და პირდაპირ ქუთაისში გაემგზავრება",
            ru: "В ноябре приоритет у сбора мандаринов в ChkhaValley. Порядок Махунцети, Шекветили, Саришвили и прогулки по Кутаиси определим после проверки времени; если сбор займёт большую часть дня, группа поедет прямо в Кутаиси, минуя Саришвили",
          },
        },
        {
          id: "day-three-options",
          title: { en: "Martvili, Okatse and Prometheus", ka: "მარტვილი, ოკაცე და პრომეთე", ru: "Мартвили, Окаце и Прометей" },
          text: {
            en: "Martvili Canyon or Martvili Monastery is chosen on the day, depending on the weather. Okatse Canyon and Prometheus Cave are both in the programme; how they are split between Days 3 and 4 will be set after the logistics check",
            ka: "მარტვილის კანიონსა და მონასტერს შორის არჩევანს ადგილზე, ამინდის მიხედვით გავაკეთებთ. ოკაცეს კანიონი და პრომეთეს მღვიმე ორივე პროგრამაშია; როგორ გადანაწილდება ისინი მესამე და მეოთხე დღეებს შორის, ლოგისტიკის შემოწმების შემდეგ დაზუსტდება",
            ru: "Между Мартвильским каньоном и монастырём выберем на месте, в зависимости от погоды. Каньон Окаце и пещера Прометея оба в программе; как распределить их между третьим и четвёртым днями, решим после проверки логистики",
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
          note: { en: "Arrival, rest and an optional walk in Old Batumi", ka: "ჩამოსვლა, დასვენება და სურვილისამებრ გასეირნება ძველ ბათუმში", ru: "Прибытие, отдых и необязательная прогулка по Старому Батуми" },
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
              title: { en: "Hotel and rest", ka: "სასტუმრო და დასვენება", ru: "Отель и отдых" },
              summary: { en: "Arrival arrangements are still open", ka: "ჩამოსვლის დეტალები ჯერ შესათანხმებელია", ru: "Детали встречи по прибытии ещё уточняются" },
              topics: ["stay"], place: "batumi", flags: ["hotel"], status: "to-confirm",
            },
            {
              id: "d1-old-batumi", time: { en: "Optional", ka: "სურვილისამებრ", ru: "По желанию" }, type: "excursion",
              title: { en: "A walk through Old Batumi", ka: "გასეირნება ძველ ბათუმში", ru: "Прогулка по Старому Батуми" },
              topics: ["heritage", "free-time"], place: "batumi", status: "draft",
              sights: ["old-batumi", "europe-square", "piazza", "batumi-boulevard"],
              sightNote: { en: "The length of the walk depends on the arrival time", ka: "გასეირნების ხანგრძლივობა ჩამოსვლის დროზეა დამოკიდებული", ru: "Продолжительность прогулки зависит от времени прибытия" },
            },
          ],
        },
        {
          n: 2,
          title: { en: "Adjara, Guria and Kutaisi", ka: "აჭარა, გურია და ქუთაისი", ru: "Аджария, Гурия и Кутаиси" },
          note: { en: "Mountains, mandarins, two family wineries and the road to Kutaisi", ka: "მთები, მანდარინი, ორი საოჯახო მარანი და გზა ქუთაისისკენ", ru: "Горы, мандарины, две семейные винодельни и дорога в Кутаиси" },
          route: { en: "Batumi → Makhuntseti → Erge → Guria → Kutaisi", ka: "ბათუმი → მახუნცეთი → ერგე → გურია → ქუთაისი", ru: "Батуми → Махунцети → Эрге → Гурия → Кутаиси" },
          review: "day-two-variant",
          activities: [
            {
              id: "d2-adjara", time: null, type: "excursion",
              title: { en: "Into the mountains of Adjara", ka: "აჭარის მთებისკენ", ru: "В горы Аджарии" },
              topics: ["nature", "heritage"], route: { en: "Acharistskali valley", ka: "აჭარისწყლის ხეობა", ru: "Долина Аджарисцкали" },
              flags: ["travel-time"], status: "to-confirm",
              sights: ["makhuntseti", "tamar-bridge"],
            },
            {
              id: "d2-chkhavalley", time: null, type: "wine",
              title: { en: "Maka Tedoradze at ChkhaValley", ka: "მაკა თედორაძე ChkhaValley-ში", ru: "Мака Тедорадзе в ChkhaValley" },
              summary: { en: "The family cellar sits in Erge, between Batumi and the mountains", ka: "საოჯახო მარანი ერგეშია, ბათუმსა და მთებს შორის", ru: "Семейный погреб находится в Эрге, между Батуми и горами" },
              topics: ["wine", "food", "meet-winemaker", "family-winery"], place: "chkhavalley", people: ["maka-tedoradze"],
              wine: { en: "Chkhaveri and Tsolikouri", ka: "ჩხავერი და ცოლიკაური", ru: "Чхавери и цоликоури" },
              food: { en: "Local Adjarian food", ka: "ადგილობრივი აჭარული კერძები", ru: "Местные аджарские блюда" },
              seasonal: { en: "November mandarin harvest — join the hosts in picking mandarins in their orchard. In November the harvest comes first; if it takes most of the day, the group goes straight to Kutaisi and skips Sarishvili", ka: "ნოემბერში მანდარინის კრეფა — შეუერთდით მასპინძლებს მათ ბაღში. ნოემბერში კრეფას ენიჭება უპირატესობა; თუ ის დღის დიდ ნაწილს დაიკავებს, ჯგუფი სარიშვილებთან აღარ შეივლის და პირდაპირ ქუთაისში გაემგზავრება", ru: "Ноябрьский сбор мандаринов — присоединитесь к хозяевам и соберите мандарины в их саду. В ноябре сбор в приоритете; если он займёт большую часть дня, группа поедет прямо в Кутаиси, минуя Саришвили" },
              status: "draft", links: { uvamoWine: null, uvamoSet: null },
            },
            {
              id: "d2-shekvetili", time: null, type: "excursion",
              title: { en: "A pause on the Guria coast", ka: "შესვენება გურიის სანაპიროზე", ru: "Остановка на побережье Гурии" },
              topics: ["nature"], route: { en: "Guria coast", ka: "გურიის სანაპირო", ru: "Побережье Гурии" },
              status: "to-confirm",
              sights: ["shekvetili"],
            },
            {
              id: "d2-sarishvili", time: null, type: "wine",
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
            {
              id: "d2-kutaisi-walk", time: { en: "If time allows", ka: "თუ დრო დაგვრჩა", ru: "Если позволит время" }, type: "excursion",
              title: { en: "Evening walk in Kutaisi", ka: "საღამოს გასეირნება ქუთაისში", ru: "Вечерняя прогулка по Кутаиси" },
              topics: ["heritage"], place: "kutaisi", status: "draft",
              sights: ["kutaisi-centre", "white-bridge"],
            },
          ],
        },
        {
          n: 3,
          title: { en: "Samegrelo and Imereti", ka: "სამეგრელო და იმერეთი", ru: "Самегрело и Имерети" },
          note: { en: "Argvani, Martvili and the canyons and caves of Imereti", ka: "არგვანი, მარტვილი და იმერეთის კანიონები და მღვიმეები", ru: "Аргвани, Мартвили, каньоны и пещеры Имерети" },
          route: { en: "Kutaisi → Abedati / Martvili → Imereti → Kutaisi", ka: "ქუთაისი → აბედათი / მარტვილი → იმერეთი → ქუთაისი", ru: "Кутаиси → Абедати / Мартвили → Имерети → Кутаиси" },
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
              id: "d3-martvili", time: null, type: "excursion",
              title: { en: "Martvili: canyon or monastery", ka: "მარტვილი: კანიონი ან მონასტერი", ru: "Мартвили: каньон или монастырь" },
              topics: ["nature", "heritage"], route: { en: "Martvili, Samegrelo", ka: "მარტვილი, სამეგრელო", ru: "Мартвили, Самегрело" },
              status: "to-confirm",
              sights: ["martvili-canyon", "martvili-monastery"], sightChoice: true,
              sightNote: { en: "Depending on the weather", ka: "ამინდის მიხედვით", ru: "В зависимости от погоды" },
            },
            {
              id: "d3-imereti", time: null, type: "excursion",
              title: { en: "Okatse Canyon and Prometheus Cave", ka: "ოკაცეს კანიონი და პრომეთეს მღვიმე", ru: "Каньон Окаце и пещера Прометея" },
              topics: ["nature"], route: { en: "Imereti", ka: "იმერეთი", ru: "Имерети" },
              flags: ["travel-time"], status: "to-confirm",
              sights: ["okatse", "prometheus"],
              sightNote: { en: "Both are in the programme. Whether both fit into Day 3 or one moves to Day 4 will be confirmed after the logistics check", ka: "ორივე პროგრამაშია. ორივე მესამე დღეს მოვასწრებთ თუ ერთ-ერთი მეოთხე დღეზე გადავა, ლოგისტიკის შემოწმების შემდეგ დაზუსტდება", ru: "Оба объекта в программе. Поместятся ли они в третий день или один перейдёт на четвёртый, уточним после проверки логистики" },
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
          note: { en: "Simonica and Ubisi on the road", ka: "Simonica და უბისი გზად", ru: "Simonica и Убиси по дороге" },
          route: { en: "Kutaisi → Meore Obcha → Ubisi → Tbilisi", ka: "ქუთაისი → მეორე ობჩა → უბისა → თბილისი", ru: "Кутаиси → Меоре Обча → Убиса → Тбилиси" },
          review: "nini-name",
          activities: [
            {
              id: "d4-simonica", time: { en: "Main visit", ka: "მთავარი ვიზიტი", ru: "Главный визит" }, type: "wine",
              title: { en: "Simonica in Meore Obcha", ka: "Simonica მეორე ობჩაში", ru: "Simonica в Меоре Обча" },
              summary: { en: "Qvevri wines made from the family’s own organically grown grapes", ka: "ქვევრის ღვინოები ოჯახის ორგანულ ვენახებში მოყვანილი ყურძნისგან", ru: "Вина из квеври, сделанные из винограда с семейных органических виноградников" },
              topics: ["wine", "food", "meet-winemaker", "family-winery"], place: "obcha", people: ["nini-chkheidze"],
              wine: { en: "Tsolikouri, Tsitska and Otskhanuri Sapere", ka: "ცოლიკაური, ციცქა და ოცხანური საფერე", ru: "Цоликоури, цицка и оцханури сапере" },
              food: { en: "Lunch at the winery", ka: "სადილი მარანში", ru: "Обед на винодельне" },
              flags: [{ en: "The winery visit is still to be arranged", ka: "მარანში სტუმრობა ჯერ შესათანხმებელია", ru: "Визит на винодельню ещё нужно согласовать" }],
              status: "to-confirm", links: { uvamoWine: null, uvamoSet: null },
            },
            {
              id: "d4-ubisi", time: { en: "On the road", ka: "გზად", ru: "По дороге" }, type: "excursion",
              title: { en: "Ubisi Monastery", ka: "უბისის მონასტერი", ru: "Монастырь Убиси" },
              topics: ["heritage"], route: { en: "Dzirula valley, Imereti", ka: "ძირულის ხეობა, იმერეთი", ru: "Долина Дзирулы, Имерети" },
              flags: ["travel-time"], status: "to-confirm",
              sights: ["ubisi"],
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
          note: { en: "Old Tbilisi, Mtskheta and a proposed cellar visit", ka: "ძველი თბილისი, მცხეთა და შემოთავაზებული მარნის ვიზიტი", ru: "Старый Тбилиси, Мцхета и предложенный визит в винный погреб" },
          route: { en: "Tbilisi ↔ Mtskheta", ka: "თბილისი ↔ მცხეთა", ru: "Тбилиси ↔ Мцхета" },
          review: "exponati-host",
          activities: [
            {
              id: "d5-tbilisi", time: null, type: "excursion",
              title: { en: "A walk in Old Tbilisi", ka: "გასეირნება ძველ თბილისში", ru: "Прогулка по Старому Тбилиси" },
              topics: ["heritage"], place: "tbilisi", status: "draft",
              sights: ["metekhi", "abanotubani", "leghvtakhevi"],
            },
            {
              id: "d5-mtskheta", time: null, type: "excursion",
              title: { en: "Mtskheta", ka: "მცხეთა", ru: "Мцхета" },
              summary: { en: "Georgia’s ancient capital", ka: "საქართველოს ძველი დედაქალაქი", ru: "Древняя столица Грузии" },
              topics: ["heritage"], place: "mtskheta", status: "draft",
              sights: ["svetitskhoveli", "jvari"],
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
          note: { en: "The Dry Bridge market, free time and departure", ka: "მშრალი ხიდის ბაზრობა, თავისუფალი დრო და გამგზავრება", ru: "Рынок у Сухого моста, свободное время и отъезд" },
          route: { en: "Tbilisi", ka: "თბილისი", ru: "Тбилиси" },
          activities: [
            {
              id: "d6-free", time: null, type: "excursion",
              title: { en: "Free time in Tbilisi", ka: "თავისუფალი დრო თბილისში", ru: "Свободное время в Тбилиси" },
              summary: { en: "Independent walks around the city before departure", ka: "დამოუკიდებელი სეირნობა ქალაქში გამგზავრებამდე", ru: "Самостоятельные прогулки по городу перед отъездом" },
              topics: ["free-time"], place: "tbilisi", status: "draft",
              sights: ["dry-bridge"],
            },
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
      description: { en: "Maka Tedoradze and Davit Bibineishvili's family winery in Erge, about 10 km from Batumi. In November guests can join the hosts for the mandarin harvest in their orchard.", ka: "მაკა თედორაძისა და დავით ბიბინეიშვილის საოჯახო მარანი ერგეში, ბათუმიდან დაახლოებით 10 კილომეტრში. ნოემბერში სტუმრებს შეუძლიათ მასპინძლებს მათ ბაღში მანდარინის კრეფაში შეუერთდნენ.", ru: "Семейная винодельня Маки Тедорадзе и Давита Бибинеишвили в Эрге, примерно в 10 км от Батуми. В ноябре гости могут присоединиться к хозяевам и собирать мандарины в их саду." },
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
      description: { en: "Two nights here leave time for Guria, Samegrelo and the canyons and caves of Imereti.", ka: "ქუთაისში ორი ღამეა გათვალისწინებული, რომ გურიის, სამეგრელოსა და იმერეთის კანიონებისა და მღვიმეების მონახულებაც მოვასწროთ.", ru: "Две ночи в Кутаиси дают время съездить в Гурию и Самегрело и увидеть каньоны и пещеры Имерети." },
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

    // ---- Cultural, nature and heritage sights (27 November 2026) ----
    // `summary` is the one-line photo-card text; `description` is the 60–100-word story in About the place.
    // Coordinates are site-level approximations. Photos: Wikimedia Commons, see photoCredit and ASSET_LEDGER.md.
    "old-batumi": {
      sight: true, name: { en: "Old Batumi", ka: "ძველი ბათუმი", ru: "Старый Батуми" }, region: "adjara",
      summary: { en: "Historic streets and architecture of a Black Sea city", ka: "შავი ზღვის ქალაქის ისტორიული ქუჩები და არქიტექტურა", ru: "Исторические улицы и архитектура черноморского города" },
      description: {
        en: "Old Batumi grew up around the harbour in the late nineteenth century, when the port became a gateway for oil and trade on the Black Sea. Its compact grid of streets mixes two- and three-storey houses with wrought-iron balconies, courtyards, small churches and a mosque. The quarter is easy to explore on foot and links naturally with Europe Square, Piazza and the seafront. On the first evening the walk is optional and depends on the arrival time.",
        ka: "ძველი ბათუმი ნავსადგურის გარშემო მეცხრამეტე საუკუნის ბოლოს გაიზარდა, როცა პორტი შავ ზღვაზე ნავთობისა და ვაჭრობის კარიბჭედ იქცა. კომპაქტურ ქუჩებში ორ- და სამსართულიან სახლებს მოჭედილი აივნებით ეზოები, პატარა ეკლესიები და მეჩეთი ენაცვლება. უბანი ფეხით ადვილად დაიარება და ბუნებრივად უკავშირდება ევროპის მოედანს, პიაცასა და სანაპიროს. პირველ საღამოს გასეირნება სურვილისამებრაა და ჩამოსვლის დროზეა დამოკიდებული.",
        ru: "Старый Батуми вырос вокруг гавани в конце XIX века, когда порт стал воротами для нефти и торговли на Чёрном море. В компактной сетке улиц двух- и трёхэтажные дома с коваными балконами соседствуют с внутренними двориками, небольшими церквями и мечетью. Квартал удобно обходить пешком, и он естественно соединяется с площадью Европы, Пьяццей и набережной. В первый вечер прогулка необязательна и зависит от времени прибытия.",
      },
      coord: [41.6496, 41.6383], locationLabel: { en: "Old town, Batumi", ka: "ძველი ქალაქი, ბათუმი", ru: "Старый город, Батуми" },
      photo: "./assets/places/old-batumi.webp",
      photoCredit: { author: "Jelger Groeneveld", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", source: "https://commons.wikimedia.org/wiki/File:Old_town_of_Batumi.jpg" },
    },
    "europe-square": {
      sight: true, name: { en: "Europe Square", ka: "ევროპის მოედანი", ru: "Площадь Европы" }, region: "adjara",
      summary: { en: "One of Batumi’s most striking architectural squares", ka: "ბათუმის ერთ-ერთი ყველაზე გამორჩეული არქიტექტურული მოედანი", ru: "Одна из самых выразительных архитектурных площадей Батуми" },
      description: {
        en: "Europe Square is one of the most expressive spaces in central Batumi. Restored facades in different historical styles frame the square, and a tall column carries a statue of Medea holding the Golden Fleece, a reminder of the ancient legend that links Colchis, the coastal land of western Georgia, with the voyage of the Argonauts. One of the buildings on the square carries an astronomical clock. In the evening locals gather here, and the square becomes a natural meeting point for a walk.",
        ka: "ევროპის მოედანი ბათუმის ცენტრის ერთ-ერთი ყველაზე გამორჩეული სივრცეა. მას სხვადასხვა ისტორიული სტილის აღდგენილი ფასადები აკრავს, მაღალ სვეტზე კი მედეას ქანდაკება დგას ოქროს საწმისით — შეხსენება ძველი თქმულებისა, რომელიც დასავლეთ საქართველოს ზღვისპირა მიწას, კოლხეთს, არგონავტების ლაშქრობას უკავშირებს. მოედნის ერთ-ერთ შენობაზე ასტრონომიული საათია. საღამოობით აქ ქალაქელები იკრიბებიან და მოედანი გასეირნებისთვის შეხვედრის ბუნებრივ ადგილად იქცევა.",
        ru: "Площадь Европы — одно из самых выразительных пространств в центре Батуми. Её обрамляют отреставрированные фасады в разных исторических стилях, а на высокой колонне стоит статуя Медеи с золотым руном — напоминание о древней легенде, связывающей Колхиду, приморскую землю Западной Грузии, с походом аргонавтов. На одном из зданий площади установлены астрономические часы. По вечерам здесь собираются горожане, и площадь становится естественной точкой встречи для прогулки.",
      },
      coord: [41.6514, 41.6362], locationLabel: { en: "Central Batumi", ka: "ბათუმის ცენტრი", ru: "Центр Батуми" },
      photo: "./assets/places/europe-square.webp",
      photoCredit: { author: "Andrzej Wójtowicz", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", source: "https://commons.wikimedia.org/wiki/File:Batumi_(9461089636).jpg" },
    },
    piazza: {
      sight: true, name: { en: "Piazza", ka: "პიაცა", ru: "Пьяцца" }, region: "adjara",
      summary: { en: "Mosaics, architecture and the atmosphere of the old town", ka: "მოზაიკა, არქიტექტურა და ძველი ქალაქის განწყობა", ru: "Мозаики, архитектура и атмосфера старого города" },
      description: {
        en: "Piazza is a small enclosed square in the heart of Old Batumi, designed in an Italian spirit. Arcades, balconies and a clock tower surround a paved courtyard, while colourful mosaics and stained glass decorate its walls and floor. Cafés and restaurants open onto the square. Although Piazza is a recent addition to the city, it keeps to the scale of the old town and is a pleasant place to pause during the walk.",
        ka: "პიაცა ძველი ბათუმის გულში მდებარე პატარა, შემოსაზღვრული მოედანია, იტალიური სულისკვეთებით გაფორმებული. მოკირწყლულ ეზოს თაღები, აივნები და საათის კოშკი აკრავს, კედლებსა და იატაკს კი ფერადი მოზაიკა და ვიტრაჟები ამშვენებს. მოედანზე კაფეები და რესტორნები გადის. პიაცა ქალაქის ახალი ნაწილია, თუმცა ძველი უბნის მასშტაბს ერგება და გასეირნებისას მოკლე შესვენებისთვის სასიამოვნო ადგილია.",
        ru: "Пьяцца — небольшая замкнутая площадь в сердце Старого Батуми, задуманная в итальянском духе. Мощёный двор окружают аркады, балконы и часовая башня, а стены и мостовую украшают яркие мозаики и витражи. На площадь выходят кафе и рестораны. Пьяцца появилась недавно, но сохраняет масштаб старого города и хорошо подходит для короткой остановки во время прогулки.",
      },
      coord: [41.6508, 41.6376], locationLabel: { en: "Old town, Batumi", ka: "ძველი ქალაქი, ბათუმი", ru: "Старый город, Батуми" },
      photo: "./assets/places/piazza.webp",
      photoCredit: { author: "Kober", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Piazza,_Batumi._Aug_2016_(1).jpg" },
    },
    "batumi-boulevard": {
      sight: true, name: { en: "Batumi Boulevard", ka: "ბათუმის ბულვარი", ru: "Батумский бульвар" }, region: "adjara",
      summary: { en: "A walk along the Black Sea", ka: "გასეირნება შავი ზღვის გასწვრივ", ru: "Прогулка вдоль Чёрного моря" },
      description: {
        en: "Batumi Boulevard runs for several kilometres along the Black Sea, between the pebble beach and the city. It was first laid out as a seaside park in the late nineteenth century and has grown into the city’s main promenade, with alleys of palms, magnolias and pines, fountains, sculptures and cycle paths. Walking here at sunset is one of the simplest ways to feel the rhythm of Batumi. The route can be shortened or extended depending on the arrival time.",
        ka: "ბათუმის ბულვარი შავი ზღვის გასწვრივ, კენჭოვან სანაპიროსა და ქალაქს შორის, რამდენიმე კილომეტრზეა გადაჭიმული. ზღვისპირა პარკი აქ მეცხრამეტე საუკუნის ბოლოს გაშენდა და დროთა განმავლობაში ქალაქის მთავარ სასეირნო ადგილად იქცა: პალმების, მაგნოლიებისა და ფიჭვების ხეივნები, შადრევნები, ქანდაკებები და ველობილიკები. მზის ჩასვლისას აქ გასეირნება ბათუმის რიტმის შეგრძნების ერთ-ერთი უმარტივესი გზაა. მარშრუტი ჩამოსვლის დროის მიხედვით შეიძლება შემოკლდეს ან გაგრძელდეს.",
        ru: "Батумский бульвар тянется на несколько километров вдоль Чёрного моря, между галечным пляжем и городом. В конце XIX века здесь разбили приморский парк, и со временем он превратился в главный променад города: аллеи пальм, магнолий и сосен, фонтаны, скульптуры и велодорожки. Прогулка на закате — один из самых простых способов почувствовать ритм Батуми. Маршрут можно сократить или продлить в зависимости от времени прибытия.",
      },
      coord: [41.6545, 41.6318], locationLabel: { en: "Seafront, Batumi", ka: "სანაპირო, ბათუმი", ru: "Набережная, Батуми" },
      photo: "./assets/places/batumi-boulevard.webp",
      photoCredit: { author: "polinakoshkadelik", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", source: "https://commons.wikimedia.org/wiki/File:Batumi_littoral_boulevard_aerial_view.jpg" },
    },
    makhuntseti: {
      sight: true, name: { en: "Makhuntseti Waterfall", ka: "მახუნცეთის ჩანჩქერი", ru: "Водопад Махунцети" }, region: "adjara",
      summary: { en: "A waterfall among the mountain landscapes of Adjara", ka: "ჩანჩქერი აჭარის მთის პეიზაჟებში", ru: "Водопад среди горных пейзажей Аджарии" },
      description: {
        en: "Makhuntseti Waterfall lies in the Acharistskali valley, a short drive inland from Batumi on the road into mountainous Adjara. A narrow stream falls down a dark rock wall into a green gorge framed by ferns and forest. A short path leads from the road to the foot of the falls, where the air is cooler than on the coast. The waterfall is close to Queen Tamar’s Bridge, so the two are usually visited together.",
        ka: "მახუნცეთის ჩანჩქერი აჭარისწყლის ხეობაშია, ბათუმიდან მთიანი აჭარისკენ მიმავალ გზაზე, ქალაქიდან არც თუ შორს. ვიწრო ნაკადი მუქი კლდიდან მწვანე ხეობაში ეშვება, რომელსაც გვიმრები და ტყე აკრავს. გზიდან ჩანჩქერის ძირამდე მოკლე ბილიკი მიდის; აქ ჰაერი სანაპიროსთან შედარებით გრილია. ჩანჩქერთან ახლოს თამარ მეფის ხიდია, ამიტომ ორივე ადგილს ჩვეულებრივ ერთად ათვალიერებენ.",
        ru: "Водопад Махунцети находится в долине Аджарисцкали, недалеко от Батуми по дороге в горную Аджарию. Узкий поток срывается с тёмной скалы в зелёное ущелье, обрамлённое папоротниками и лесом. От дороги к подножию водопада ведёт короткая тропа; воздух здесь прохладнее, чем на побережье. Рядом находится мост царицы Тамары, поэтому оба места обычно посещают вместе.",
      },
      coord: [41.5749, 41.8583], locationLabel: { en: "Makhuntseti, Keda municipality", ka: "მახუნცეთი, ქედის მუნიციპალიტეტი", ru: "Махунцети, муниципалитет Кеда" },
      photo: "./assets/places/makhuntseti.webp",
      photoCredit: { author: "Wojciech Biegun", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", source: "https://commons.wikimedia.org/wiki/File:Makhuntseti_Waterfall_-_%E1%83%9B%E1%83%90%E1%83%AE%E1%83%A3%E1%83%9C%E1%83%AA%E1%83%94%E1%83%97%E1%83%98%E1%83%A1_%E1%83%A9%E1%83%90%E1%83%9C%E1%83%A9%E1%83%A5%E1%83%94%E1%83%A0%E1%83%98_-_panoramio.jpg" },
    },
    "tamar-bridge": {
      sight: true, name: { en: "Queen Tamar’s Bridge", ka: "თამარ მეფის ხიდი", ru: "Мост царицы Тамары" }, region: "adjara",
      summary: { en: "A medieval stone arch bridge over a mountain river", ka: "შუა საუკუნეების ქვის თაღოვანი ხიდი მთის მდინარეზე", ru: "Средневековый каменный арочный мост через горную реку" },
      description: {
        en: "Near the village of Makhuntseti, a single stone arch spans the Acharistskali River. The bridge was built in the Middle Ages, when a trade route crossed the mountains of Adjara, and local tradition links it with the time of Queen Tamar, who ruled Georgia at the turn of the twelfth and thirteenth centuries. Its high, narrow arch has no railings and still stands above the fast mountain river. Makhuntseti Waterfall is a few minutes away.",
        ka: "სოფელ მახუნცეთთან მდინარე აჭარისწყალს ერთთაღიანი ქვის ხიდი კვეთს. ხიდი შუა საუკუნეებში აშენდა, როცა აჭარის მთებზე სავაჭრო გზა გადიოდა, ადგილობრივი გადმოცემა კი მას თამარ მეფის ეპოქას უკავშირებს, რომელიც საქართველოს XII–XIII საუკუნეების მიჯნაზე მეფობდა. მაღალი, ვიწრო, მოაჯირის გარეშე თაღი დღემდე დგას ჩქარი მთის მდინარის თავზე. მახუნცეთის ჩანჩქერამდე აქედან რამდენიმე წუთის სავალია.",
        ru: "У села Махунцети реку Аджарисцкали пересекает однопролётная каменная арка. Мост построен в Средние века, когда через горы Аджарии проходил торговый путь, а местное предание связывает его со временем царицы Тамары, правившей Грузией на рубеже XII и XIII веков. Высокая узкая арка без перил до сих пор стоит над быстрой горной рекой. До водопада Махунцети отсюда несколько минут.",
      },
      coord: [41.5725, 41.8609], locationLabel: { en: "Makhuntseti, Keda municipality", ka: "მახუნცეთი, ქედის მუნიციპალიტეტი", ru: "Махунцети, муниципалитет Кеда" },
      photo: "./assets/places/tamar-bridge.webp",
      photoCredit: { author: "Yasuhiro Kojima", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Makhuntseti_Bridge_1.jpg" },
    },
    shekvetili: {
      sight: true, name: { en: "Shekvetili", ka: "შეკვეთილი", ru: "Шекветили" }, region: "guria",
      summary: { en: "Black Sea shore with distinctive black magnetic sand", ka: "შავი ზღვის სანაპირო გამორჩეული შავი მაგნიტური ქვიშით", ru: "Черноморское побережье с характерным чёрным магнитным песком" },
      description: {
        en: "Shekvetili lies on the Guria coast, where a pine forest runs almost to the edge of the Black Sea. The beach here is covered with dark sand rich in magnetite, the same magnetic sand found along the neighbouring coast at Ureki, and local tradition has long valued it for its health effects. The quiet shoreline is a good place for a short pause between the two family wineries of the day, if the timing allows.",
        ka: "შეკვეთილი გურიის სანაპიროზე მდებარეობს, სადაც ფიჭვნარი თითქმის შავი ზღვის პირამდე აღწევს. აქაური პლაჟი მაგნეტიტით მდიდარი მუქი ქვიშითაა დაფარული — იგივე მაგნიტური ქვიშით, რაც მეზობელ ურეკის სანაპიროზე, და ადგილობრივები მის სამკურნალო თვისებებს დიდი ხანია აფასებენ. მშვიდი სანაპირო დღის ორ საოჯახო მარანს შორის მოკლე შესვენებისთვის გამოდგება, თუ დრო საშუალებას მოგვცემს.",
        ru: "Шекветили находится на побережье Гурии, где сосновый лес подходит почти к самой кромке Чёрного моря. Пляж здесь покрыт тёмным песком с высоким содержанием магнетита — тем же магнитным песком, что и на соседнем побережье в Уреки, — и местные жители издавна ценят его целебные свойства. Тихий берег подходит для короткой остановки между двумя семейными винодельнями дня, если позволит время.",
      },
      coord: [41.9278, 41.7681], locationLabel: { en: "Guria coast, Ozurgeti municipality", ka: "გურიის სანაპირო, ოზურგეთის მუნიციპალიტეტი", ru: "Побережье Гурии, муниципалитет Озургети" },
      photo: "./assets/places/shekvetili.webp",
      photoCredit: { author: "Iscream icecream", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Shekvetili_Praia.jpg", cropped: true },
    },
    "kutaisi-centre": {
      sight: true, name: { en: "Kutaisi Historic Centre", ka: "ქუთაისის ისტორიული ცენტრი", ru: "Исторический центр Кутаиси" }, region: "imereti",
      summary: { en: "An introduction to one of Georgia’s oldest cities", ka: "საქართველოს ერთ-ერთი უძველესი ქალაქის გაცნობა", ru: "Знакомство с одним из древнейших городов Грузии" },
      description: {
        en: "Kutaisi is one of the oldest cities in Georgia, linked in legend with Aia, the capital of Colchis in the story of the Argonauts, and in the Middle Ages it served as a royal capital. Its compact centre has tree-lined streets, nineteenth-century houses and the drama and opera theatres. On the central square, the Colchis Fountain reproduces figures from the gold treasures found by archaeologists at Vani. Bagrati Cathedral stands on a hill above the city.",
        ka: "ქუთაისი საქართველოს ერთ-ერთი უძველესი ქალაქია; თქმულება მას არგონავტების მითის კოლხეთის დედაქალაქ აიას უკავშირებს, შუა საუკუნეებში კი ის სამეფო დედაქალაქი იყო. კომპაქტურ ცენტრში მწვანე ქუჩები, XIX საუკუნის სახლები, დრამატული და ოპერის თეატრებია. ცენტრალურ მოედანზე „კოლხეთის შადრევანი“ ვანში არქეოლოგების მიერ აღმოჩენილი ოქროს განძის ფიგურებს იმეორებს. ქალაქის თავზე, ბორცვზე, ბაგრატის ტაძარი დგას.",
        ru: "Кутаиси — один из древнейших городов Грузии: легенда связывает его с Аей, столицей Колхиды из мифа об аргонавтах, а в Средние века он был царской столицей. В компактном центре — зелёные улицы, дома XIX века, драматический и оперный театры. На центральной площади фонтан «Колхида» воспроизводит фигурки из золотых сокровищ, найденных археологами в Вани. Над городом на холме стоит собор Баграти.",
      },
      coord: [42.2706, 42.7047], locationLabel: { en: "Central Square, Kutaisi", ka: "ცენტრალური მოედანი, ქუთაისი", ru: "Центральная площадь, Кутаиси" },
      photo: "./assets/places/kutaisi-centre.webp",
      photoCredit: { author: "Alexkom000", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", source: "https://commons.wikimedia.org/wiki/File:2025-06-21_Colchis_Fountain,_Kutaisi.jpg" },
    },
    "white-bridge": {
      sight: true, name: { en: "White Bridge", ka: "თეთრი ხიდი", ru: "Белый мост" }, region: "imereti",
      summary: { en: "A walk above the Rioni River", ka: "გასეირნება მდინარე რიონის თავზე", ru: "Прогулка над рекой Риони" },
      description: {
        en: "The White Bridge crosses the Rioni River in the old centre of Kutaisi. The iron bridge dates from the second half of the nineteenth century and has become one of the city’s best-known landmarks. Glass panels set into the deck let walkers look straight down at the river beneath their feet. From the bridge there are views along the Rioni to the old houses on its banks and the hills around the city.",
        ka: "თეთრი ხიდი ქუთაისის ძველ ცენტრში მდინარე რიონს კვეთს. რკინის ხიდი XIX საუკუნის მეორე ნახევარში აშენდა და ქალაქის ერთ-ერთ ყველაზე ცნობილ ღირსშესანიშნაობად იქცა. ხიდის იატაკში ჩასმული მინის პანელებიდან მდინარეს პირდაპირ ფეხქვეშ დაინახავთ. ხიდიდან რიონის გასწვრივ ნაპირებზე მდგარი ძველი სახლებისა და ქალაქის გარშემო მთაგორიანი ხედი იშლება.",
        ru: "Белый мост пересекает Риони в старом центре Кутаиси. Железный мост построен во второй половине XIX века и стал одной из самых узнаваемых достопримечательностей города. Через стеклянные панели в настиле можно посмотреть на реку прямо под ногами. С моста открываются виды вдоль Риони на старые дома по её берегам и холмы вокруг города.",
      },
      coord: [42.2722, 42.7006], locationLabel: { en: "Old centre, Kutaisi", ka: "ძველი ცენტრი, ქუთაისი", ru: "Старый центр, Кутаиси" },
      photo: "./assets/places/white-bridge.webp",
      photoCredit: { author: "Kober", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", source: "https://commons.wikimedia.org/wiki/File:Kutaisi_White_Bridge_(August_2011).jpg" },
    },
    "martvili-canyon": {
      sight: true, name: { en: "Martvili Canyon", ka: "მარტვილის კანიონი", ru: "Мартвильский каньон" }, region: "samegrelo",
      summary: { en: "Turquoise water, limestone cliffs and Colchic forest", ka: "ფირუზისფერი წყალი, კირქვის კლდეები და კოლხური ტყე", ru: "Бирюзовая вода, известняковые скалы и колхидский лес" },
      description: {
        en: "The Abasha River has cut a narrow canyon through limestone near Martvili, creating turquoise pools and small waterfalls beneath steep, moss-covered walls. The surrounding Colchic forest stays green for most of the year. The area was once part of the summer residences of the Dadiani family, the rulers of Samegrelo. A walking trail with viewpoints follows the gorge, and boat trips run in the warmer season. The canyon is one of two weather-dependent options for Day 3.",
        ka: "მდინარე აბაშამ მარტვილთან კირქვაში ვიწრო კანიონი გამოკვეთა — ფირუზისფერი ტბორებითა და პატარა ჩანჩქერებით ციცაბო, ხავსით დაფარული კედლების ქვეშ. გარშემო კოლხური ტყე წლის უმეტეს ნაწილში მწვანეა. ოდესღაც ეს ადგილები სამეგრელოს მმართველების, დადიანების, საზაფხულო რეზიდენციების ნაწილი იყო. ხეობის გასწვრივ ბილიკი და სანახავი მოედნებია, თბილ სეზონზე კი ნავით სეირნობაც შეიძლება. კანიონი მესამე დღის ორი ვარიანტიდან ერთ-ერთია; არჩევანი ამინდზეა დამოკიდებული.",
        ru: "Река Абаша прорезала в известняке у Мартвили узкий каньон с бирюзовыми заводями и небольшими водопадами под крутыми, поросшими мхом стенами. Окружающий колхидский лес остаётся зелёным большую часть года. Когда-то эти места входили в летние резиденции Дадиани, владетелей Самегрело. Вдоль ущелья проложена тропа со смотровыми площадками, а в тёплый сезон работают лодочные прогулки. Каньон — один из двух вариантов третьего дня, выбор зависит от погоды.",
      },
      coord: [42.4557, 42.3759], locationLabel: { en: "Near Martvili", ka: "მარტვილთან", ru: "Рядом с Мартвили" },
      photo: "./assets/places/martvili-canyon.webp",
      photoCredit: { author: "Jami430", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Martvili_Canyon_Natural_Monument_June_2017.jpg" },
    },
    "martvili-monastery": {
      sight: true, name: { en: "Martvili Monastery (Chkondidi)", ka: "მარტვილის მონასტერი (ჭყონდიდი)", ru: "Мартвильский монастырь (Чкондиди)" }, region: "samegrelo",
      summary: { en: "A historic monastery and medieval Georgian architecture", ka: "ისტორიული მონასტერი და შუა საუკუნეების ქართული არქიტექტურა", ru: "Исторический монастырь и средневековая грузинская архитектура" },
      description: {
        en: "Martvili Monastery stands on a hill above the town, on a site that tradition connects with an ancient sacred oak: Chkondidi, the older name of the place, means “great oak” in Megrelian. The main church dates back to the early Middle Ages and was rebuilt in later centuries, and Chkondidi became the seat of an important bishopric of western Georgia. The hilltop also gives wide views over the Samegrelo countryside. In wet weather the monastery replaces the canyon.",
        ka: "მარტვილის მონასტერი ქალაქის თავზე, ბორცვზე დგას, ადგილას, რომელსაც გადმოცემა ძველ წმინდა მუხას უკავშირებს: ჭყონდიდი, ამ ადგილის ძველი სახელი, მეგრულად „დიდ მუხას“ ნიშნავს. მთავარი ტაძარი ადრეულ შუა საუკუნეებს უკავშირდება და მოგვიანებით გადაკეთდა, ჭყონდიდი კი დასავლეთ საქართველოს მნიშვნელოვანი საეპისკოპოსოს ცენტრი გახდა. ბორცვიდან სამეგრელოს სოფლების ფართო ხედი იშლება. წვიმიან ამინდში მონასტერი კანიონს ჩაანაცვლებს.",
        ru: "Мартвильский монастырь стоит на холме над городом, на месте, которое предание связывает с древним священным дубом: Чкондиди, старое название этого места, по-мегрельски означает «большой дуб». Главный храм восходит к раннему Средневековью и позднее перестраивался, а Чкондиди стал центром важной епархии Западной Грузии. С холма открываются широкие виды на сельскую Самегрело. В дождливую погоду монастырь заменяет каньон.",
      },
      coord: [42.4142, 42.3775], locationLabel: { en: "Martvili", ka: "მარტვილი", ru: "Мартвили" },
      photo: "./assets/places/martvili-monastery.webp",
      photoCredit: { author: "Lika (ლიკა)", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/File:Martvili_monastery2.jpg", source: "https://commons.wikimedia.org/wiki/File:Martvili_monastery2.jpg" },
    },
    okatse: {
      sight: true, name: { en: "Okatse Canyon", ka: "ოკაცეს კანიონი", ru: "Каньон Окаце" }, region: "imereti",
      summary: { en: "Panoramic views of a deep, forested gorge", ka: "პანორამული ხედები ღრმა, ტყიან ხეობაზე", ru: "Панорамные виды на глубокое лесистое ущелье" },
      description: {
        en: "Okatse Canyon lies near the village of Zeda Gordi, about 50 km north of Kutaisi. A 780-metre walkway hangs on the side of the cliff above the gorge, which is between 20 and 100 metres deep, and ends at a viewing platform suspended over the river. Below, the Okatse flows between limestone walls and dense forest. The walk is easy to follow but suits those comfortable with heights; the day of the visit is still to be confirmed.",
        ka: "ოკაცეს კანიონი სოფელ ზედა გორდთან, ქუთაისიდან ჩრდილოეთით დაახლოებით 50 კილომეტრში მდებარეობს. კლდის კედელზე, 20-დან 100 მეტრამდე სიღრმის ხეობის თავზე, 780-მეტრიანი დაკიდებული ბილიკია გაყვანილი, რომელიც მდინარის თავზე გადმოკიდებული სანახავი მოედნით მთავრდება. ქვემოთ მდინარე ოკაცე კირქვის კედლებსა და ხშირ ტყეს შორის მიედინება. ბილიკი მარტივია, თუმცა სიმაღლის შიში არ უნდა გქონდეთ; მონახულების დღე ჯერ დასაზუსტებელია.",
        ru: "Каньон Окаце находится у села Зеда-Горди, примерно в 50 км к северу от Кутаиси. Вдоль скалы над ущельем глубиной от 20 до 100 метров подвешена тропа длиной 780 метров; она заканчивается смотровой площадкой, нависающей над рекой. Внизу река Окаце течёт между известняковыми стенами и густым лесом. Маршрут несложный, но подойдёт тем, кто спокойно относится к высоте; день посещения ещё уточняется.",
      },
      coord: [42.4513, 42.5501], locationLabel: { en: "Zeda Gordi, Imereti", ka: "ზედა გორდი, იმერეთი", ru: "Зеда-Горди, Имерети" },
      photo: "./assets/places/okatse.webp",
      photoCredit: { author: "United States Embassy Tbilisi", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/File:Okatse_Canyon_Nature_Reserve,_Georgia_04.jpg", source: "https://commons.wikimedia.org/wiki/File:Okatse_Canyon_Nature_Reserve,_Georgia_04.jpg" },
    },
    prometheus: {
      sight: true, name: { en: "Prometheus Cave", ka: "პრომეთეს მღვიმე", ru: "Пещера Прометея" }, region: "imereti",
      summary: { en: "Underground halls with stalactites and stalagmites", ka: "მიწისქვეშა დარბაზები სტალაქტიტებითა და სტალაგმიტებით", ru: "Подземные залы со сталактитами и сталагмитами" },
      description: {
        en: "Prometheus Cave, also known as Kumistavi Cave, lies near Tskaltubo, a short drive from Kutaisi. Of its 22 underground halls, six are open to visitors along a walking route of just under 1.5 km. The path passes stalactites, stalagmites, petrified waterfalls and underground lakes, lit to reveal the shapes of the limestone. When conditions allow, the visit can end with a short boat ride on the underground river. Inside, the cave stays cool all year.",
        ka: "პრომეთეს, ანუ ყუმისთავის, მღვიმე წყალტუბოსთან, ქუთაისიდან ახლოს მდებარეობს. 22 მიწისქვეშა დარბაზიდან ექვსი მნახველებისთვისაა გახსნილი; საფეხმავლო მარშრუტი 1,5 კილომეტრზე ოდნავ მოკლეა. ბილიკი სტალაქტიტებს, სტალაგმიტებს, გაქვავებულ ჩანჩქერებსა და მიწისქვეშა ტბებს ჩაუვლის, რომლებიც ისეა განათებული, რომ კირქვის ფორმები კარგად ჩანდეს. თუ პირობები საშუალებას იძლევა, ვიზიტი მიწისქვეშა მდინარეზე ნავით მოკლე გასეირნებით შეიძლება დასრულდეს. მღვიმეში მთელი წლის განმავლობაში გრილა.",
        ru: "Пещера Прометея, или Кумистави, находится у Цхалтубо, недалеко от Кутаиси. Из 22 подземных залов шесть открыты для посетителей; пешеходный маршрут чуть короче 1,5 км. Тропа ведёт мимо сталактитов, сталагмитов, окаменевших водопадов и подземных озёр, подсвеченных так, чтобы были видны формы известняка. Если позволяют условия, визит можно завершить короткой прогулкой на лодке по подземной реке. Внутри пещеры прохладно в любое время года.",
      },
      coord: [42.3767, 42.6006], locationLabel: { en: "Kumistavi, near Tskaltubo", ka: "ყუმისთავი, წყალტუბოსთან", ru: "Кумистави, рядом с Цхалтубо" },
      photo: "./assets/places/prometheus.webp",
      photoCredit: { author: "Dmitrij Rodionov", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", source: "https://commons.wikimedia.org/wiki/File:Kumistavi_Cave_-_uphill_view.jpg" },
    },
    ubisi: {
      sight: true, name: { en: "Ubisi Monastery", ka: "უბისის მონასტერი", ru: "Монастырь Убиси" }, region: "imereti",
      summary: { en: "A medieval monastery known for its frescoes", ka: "შუა საუკუნეების მონასტერი, განთქმული ფრესკებით", ru: "Средневековый монастырь, известный своими фресками" },
      description: {
        en: "Ubisi Monastery stands in the Dzirula valley in eastern Imereti, close to the road between Kutaisi and Tbilisi. The monastic complex dates back to the early Middle Ages. Its hall Church of St George is known for frescoes painted in the fourteenth century, which cover the interior with Gospel scenes and images of saints. A tall medieval tower beside the church once served as a refuge. The stop fits naturally into the long transfer to Tbilisi on Day 4.",
        ka: "უბისის მონასტერი იმერეთის აღმოსავლეთით, ძირულის ხეობაში, ქუთაისი–თბილისის გზასთან ახლოს დგას. სამონასტრო კომპლექსი ადრეულ შუა საუკუნეებს უკავშირდება. წმინდა გიორგის დარბაზული ეკლესია XIV საუკუნის ფრესკებითაა ცნობილი: სახარების სცენები და წმინდანთა გამოსახულებები მთელ ინტერიერს ფარავს. ეკლესიის გვერდით მაღალი შუა საუკუნეების კოშკი დგას, რომელიც ოდესღაც თავშესაფრად გამოიყენებოდა. გაჩერება მეოთხე დღეს თბილისამდე ხანგრძლივ მგზავრობას ბუნებრივად ერგება.",
        ru: "Монастырь Убиси стоит в долине Дзирулы на востоке Имерети, недалеко от дороги из Кутаиси в Тбилиси. Монастырский комплекс восходит к раннему Средневековью. Зальная церковь Святого Георгия известна фресками XIV века: евангельские сцены и образы святых покрывают весь её интерьер. Рядом с церковью стоит высокая средневековая башня, когда-то служившая убежищем. Остановка естественно вписывается в долгий переезд в Тбилиси в четвёртый день.",
      },
      coord: [42.0986, 43.2242], locationLabel: { en: "Ubisi, Kharagauli municipality", ka: "უბისა, ხარაგაულის მუნიციპალიტეტი", ru: "Убиса, муниципалитет Харагаули" },
      photo: "./assets/places/ubisi.webp",
      photoCredit: { author: "Aleksey Muhranoff", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", source: "https://commons.wikimedia.org/wiki/File:Ubisi_monastery._A_fresco_(Photo_A._Muhranoff,_2011)-2.jpg" },
    },
    metekhi: {
      sight: true, name: { en: "Metekhi Church", ka: "მეტეხის ტაძარი", ru: "Церковь Метехи" }, region: "tbilisi",
      summary: { en: "A historic church above the Mtkvari", ka: "ისტორიული ტაძარი მტკვრის თავზე", ru: "Исторический храм над Курой" },
      description: {
        en: "Metekhi Church of the Assumption stands on a cliff above the Mtkvari, opposite the old quarters of Tbilisi. The site was once part of a royal residence, and the present church was built in the thirteenth century. Beside it stands a statue of King Vakhtang Gorgasali, whom tradition credits with founding Tbilisi. The terrace by the church offers one of the classic views of the old town, Narikala Fortress and the bath district below.",
        ka: "მეტეხის ღვთისმშობლის მიძინების ტაძარი მტკვრის თავზე, კლდეზე, ძველი თბილისის უბნების პირდაპირ დგას. ოდესღაც აქ სამეფო რეზიდენცია იყო, ამჟამინდელი ტაძარი კი XIII საუკუნეშია აგებული. გვერდით ვახტანგ გორგასლის ძეგლი დგას, რომელსაც გადმოცემა თბილისის დამაარსებლად მიიჩნევს. ტაძართან მდებარე ტერასიდან ძველი ქალაქის, ნარიყალას ციხისა და ქვემოთ აბანოთუბნის ერთ-ერთი კლასიკური ხედი იშლება.",
        ru: "Церковь Успения Богородицы в Метехи стоит на скале над Курой, напротив старых кварталов Тбилиси. Когда-то здесь находилась царская резиденция, а нынешний храм построен в XIII веке. Рядом стоит памятник царю Вахтангу Горгасали, которого предание считает основателем Тбилиси. С террасы у церкви открывается один из классических видов на старый город, крепость Нарикала и квартал бань внизу.",
      },
      coord: [41.6906, 44.8106], locationLabel: { en: "Old Tbilisi", ka: "ძველი თბილისი", ru: "Старый Тбилиси" },
      photo: "./assets/places/metekhi.webp",
      photoCredit: { author: "Alexxx1979", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Tbilisi_The_Metekhi_Church_of_Assumption_IMG_8842_1920.jpg" },
    },
    abanotubani: {
      sight: true, name: { en: "Abanotubani", ka: "აბანოთუბანი", ru: "Абанотубани" }, region: "tbilisi",
      summary: { en: "The quarter of Tbilisi’s famous sulphur baths", ka: "თბილისის განთქმული გოგირდის აბანოების უბანი", ru: "Квартал знаменитых серных бань" },
      description: {
        en: "Abanotubani, the bath district, grew up around the warm sulphur springs that gave Tbilisi its name: tbili means “warm” in Georgian. Low brick domes rise from the ground above the bathhouses, most of which date from the seventeenth to the nineteenth centuries. The tiled, Persian-style facade of the Orbeliani Baths is one of the best-known images of the old town. Visitors can still book a private room and bathe in the mineral water.",
        ka: "აბანოთუბანი თბილი გოგირდის წყაროების გარშემო გაჩნდა, რომლებმაც თბილისს სახელი დაარქვეს. აბანოების თავზე მიწიდან დაბალი აგურის გუმბათები ამოდის; ნაგებობების უმეტესობა XVII–XIX საუკუნეებით თარიღდება. ორბელიანის აბანოს მოჭიქული ფილებით მოპირკეთებული აღმოსავლური ფასადი ძველი ქალაქის ერთ-ერთი ყველაზე ცნობადი სახეა. აბანოებში დღესაც შეიძლება ცალკე ოთახის დაქირავება და მინერალურ წყალში ბანაობა.",
        ru: "Абанотубани, квартал бань, вырос вокруг тёплых серных источников, давших имя Тбилиси: по-грузински «тбили» значит «тёплый». Над банями прямо из земли поднимаются низкие кирпичные купола; большинство построек относится к XVII–XIX векам. Облицованный изразцами фасад Орбелиановской бани в персидском стиле — один из самых узнаваемых образов старого города. В банях и сегодня можно снять отдельный номер и искупаться в минеральной воде.",
      },
      coord: [41.688, 44.8105], locationLabel: { en: "Old Tbilisi", ka: "ძველი თბილისი", ru: "Старый Тбилиси" },
      photo: "./assets/places/abanotubani.webp",
      photoCredit: { author: "Wowan1978", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Roofs_of_the_sulfur_baths_in_Tbilisi.jpg" },
    },
    leghvtakhevi: {
      sight: true, name: { en: "Leghvtakhevi Gorge", ka: "ლეღვთახევი", ru: "Ущелье Легвтахеви" }, region: "tbilisi",
      summary: { en: "Fig Gorge and a waterfall in the heart of the old town", ka: "ლეღვის ხევი და ჩანჩქერი ძველი ქალაქის გულში", ru: "Инжировое ущелье и водопад в сердце старого города" },
      description: {
        en: "Leghvtakhevi, the Fig Gorge, is a narrow ravine that begins right behind the bath district. Its name comes from the fig trees that grow on its rocky sides. A paved path follows the stream between cliffs and old houses with wooden balconies, passes small bridges and ends at a waterfall in the very heart of the old city. It is a short, easy walk that reveals a surprisingly wild side of Tbilisi, only minutes from busy streets.",
        ka: "ლეღვთახევი ვიწრო ხევია, რომელიც აბანოთუბნის უკან იწყება. სახელი მას კლდოვან ფერდობებზე ამოსულმა ლეღვის ხეებმა დაარქვა. მოკირწყლული ბილიკი ნაკადულს მიუყვება კლდეებსა და ხის აივნებიან ძველ სახლებს შორის, პატარა ხიდებს ჩაუვლის და ჩანჩქერთან, ძველი ქალაქის სულ გულში, მთავრდება. ეს მოკლე და მსუბუქი გასეირნებაა, რომელიც ხმაურიანი ქუჩებიდან რამდენიმე წუთში თბილისის მოულოდნელად ველურ მხარეს გაჩვენებთ.",
        ru: "Легвтахеви, Инжировое ущелье, — узкий овраг, который начинается сразу за кварталом бань. Название ему дали фиговые деревья, растущие на скалистых склонах. Мощёная тропа идёт вдоль ручья между скалами и старыми домами с деревянными балконами, мимо небольших мостиков, и приводит к водопаду в самом сердце старого города. Это короткая и лёгкая прогулка, открывающая неожиданно дикую сторону Тбилиси в нескольких минутах от оживлённых улиц.",
      },
      coord: [41.6866, 44.8091], locationLabel: { en: "Old Tbilisi", ka: "ძველი თბილისი", ru: "Старый Тбилиси" },
      photo: "./assets/places/leghvtakhevi.webp",
      photoCredit: { author: "Valen1988", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:%D5%8B%D6%80%D5%BE%D5%A5%D5%AA%D5%A8.jpg" },
    },
    svetitskhoveli: {
      sight: true, name: { en: "Svetitskhoveli Cathedral", ka: "სვეტიცხოვლის ტაძარი", ru: "Собор Светицховели" }, region: "mtskheta-mtianeti",
      summary: { en: "A landmark of Georgian history and architecture", ka: "ქართული ისტორიისა და არქიტექტურის უმნიშვნელოვანესი ძეგლი", ru: "Один из важнейших памятников грузинской истории и архитектуры" },
      description: {
        en: "Svetitskhoveli Cathedral stands in the centre of Mtskheta, the ancient capital of Georgia. The present building was raised between 1010 and 1029 by the architect Arsukidze, on the site of earlier churches. According to tradition, Christ’s robe is buried here, which made the cathedral one of the most important sanctuaries of the Georgian Church. Together with Jvari Monastery it belongs to the Historical Monuments of Mtskheta, a UNESCO World Heritage Site.",
        ka: "სვეტიცხოვლის ტაძარი მცხეთის, საქართველოს ძველი დედაქალაქის, ცენტრში დგას. ამჟამინდელი შენობა 1010–1029 წლებში, ადრინდელი ეკლესიების ადგილას, ხუროთმოძღვარმა არსუკიძემ ააგო. გადმოცემით, აქ ქრისტეს კვართია დაფლული, რის გამოც ტაძარი ქართული ეკლესიის ერთ-ერთ მთავარ სიწმინდედ იქცა. ჯვრის მონასტერთან ერთად ის იუნესკოს მსოფლიო მემკვიდრეობის ძეგლის — „მცხეთის ისტორიული ძეგლების“ — ნაწილია.",
        ru: "Собор Светицховели стоит в центре Мцхеты, древней столицы Грузии. Нынешнее здание возведено в 1010–1029 годах зодчим Арсукидзе на месте более ранних храмов. По преданию, здесь погребён хитон Христа, поэтому собор стал одной из главных святынь Грузинской церкви. Вместе с монастырём Джвари он входит в объект Всемирного наследия ЮНЕСКО «Исторические памятники Мцхеты».",
      },
      coord: [41.8421, 44.7208], locationLabel: { en: "Mtskheta", ka: "მცხეთა", ru: "Мцхета" },
      photo: "./assets/places/svetitskhoveli.webp",
      photoCredit: { author: "Dmitry A. Mottl", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Mtskheta_and_Svetitskhoveli_Cathedral_3x2.jpg" },
    },
    jvari: {
      sight: true, name: { en: "Jvari Monastery", ka: "ჯვრის მონასტერი", ru: "Монастырь Джвари" }, region: "mtskheta-mtianeti",
      summary: { en: "A view over the meeting of the Mtkvari and Aragvi", ka: "ხედი მტკვრისა და არაგვის შესართავზე", ru: "Панорама слияния Куры и Арагви" },
      description: {
        en: "Jvari Monastery stands on a rocky hilltop above Mtskheta, where, according to tradition, Saint Nino raised a wooden cross in the fourth century. The church built here between 585 and 604 became a model for many later Georgian churches. From its terrace there is a wide view of Mtskheta and the place where the Mtkvari and Aragvi rivers meet. Jvari is part of the Historical Monuments of Mtskheta, a UNESCO World Heritage Site.",
        ka: "ჯვრის მონასტერი მცხეთის თავზე, კლდოვან მწვერვალზე დგას — იქ, სადაც გადმოცემით წმინდა ნინომ IV საუკუნეში ხის ჯვარი აღმართა. 585–604 წლებში აქ აგებული ტაძარი მრავალი შემდგომი ქართული ეკლესიის ნიმუშად იქცა. მისი ტერასიდან მცხეთისა და მტკვრისა და არაგვის შესართავის ფართო ხედი იშლება. ჯვარი იუნესკოს მსოფლიო მემკვიდრეობის ძეგლის — „მცხეთის ისტორიული ძეგლების“ — ნაწილია.",
        ru: "Монастырь Джвари стоит на скалистой вершине над Мцхетой — там, где, по преданию, святая Нино в IV веке воздвигла деревянный крест. Храм, построенный здесь в 585–604 годах, стал образцом для многих более поздних грузинских церквей. С его террасы открывается широкий вид на Мцхету и место слияния Куры и Арагви. Джвари входит в объект Всемирного наследия ЮНЕСКО «Исторические памятники Мцхеты».",
      },
      coord: [41.8383, 44.7336], locationLabel: { en: "Above Mtskheta", ka: "მცხეთის თავზე", ru: "Над Мцхетой" },
      photo: "./assets/places/jvari.webp",
      photoCredit: { author: "Alexxx1979", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", source: "https://commons.wikimedia.org/wiki/File:Georgia_Jvari_monastery_IMG_9345_2070.jpg" },
    },
    "dry-bridge": {
      sight: true, name: { en: "Dry Bridge Market", ka: "მშრალი ხიდის ბაზრობა", ru: "Рынок у Сухого моста" }, region: "tbilisi",
      summary: { en: "Antiques, vintage finds and work by local artists", ka: "ანტიკვარიატი, ვინტაჟური ნივთები და ადგილობრივი მხატვრების ნამუშევრები", ru: "Антиквариат, винтажные вещи и работы местных художников" },
      description: {
        en: "The open-air market by the Dry Bridge in central Tbilisi takes its name from a nineteenth-century bridge over a former branch of the Mtkvari that was later filled in. On most days sellers lay out old cameras, jewellery, Soviet badges, carpets, books and household objects, while local artists show paintings in the neighbouring park. It is a lively place to browse and look for a souvenir. How much time it gets depends on the flight time.",
        ka: "თბილისის ცენტრში, მშრალ ხიდთან, ღია ცის ქვეშ მოწყობილ ბაზრობას სახელი XIX საუკუნის ხიდმა დაარქვა, რომელიც მტკვრის ყოფილ ტოტზე იყო გადებული; ტოტი მოგვიანებით ამოავსეს. თითქმის ყოველდღე გამყიდველები აქ ძველ ფოტოაპარატებს, სამკაულებს, საბჭოთა სამკერდე ნიშნებს, ხალიჩებს, წიგნებსა და საოჯახო ნივთებს აწყობენ, ადგილობრივი მხატვრები კი ნახატებს მეზობელ სკვერში ფენენ. აქ სასიამოვნოა ხეტიალი და სუვენირის ძებნა. ბაზრობაზე რამდენ დროს გავატარებთ, ფრენის დროზეა დამოკიდებული.",
        ru: "Рынок под открытым небом у Сухого моста в центре Тбилиси назван по мосту XIX века, перекинутому через бывший рукав Куры, который позже засыпали. Почти каждый день продавцы раскладывают старые фотоаппараты, украшения, советские значки, ковры, книги и предметы быта, а местные художники выставляют картины в соседнем сквере. Здесь интересно бродить и искать сувенир. Сколько времени удастся провести на рынке, зависит от времени вылета.",
      },
      coord: [41.7005, 44.8026], locationLabel: { en: "Central Tbilisi", ka: "თბილისის ცენტრი", ru: "Центр Тбилиси" },
      photo: "./assets/places/dry-bridge.webp",
      photoCredit: { author: "Alexkom000", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", source: "https://commons.wikimedia.org/wiki/File:2025-03-30_Dry_Bridge_Market,_Tbilisi_5.jpg" },
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
        "en": "Maka Tedoradze trained as a financier. Her path into wine began with the family vineyard in Erge, a village just ten kilometres from Batumi, between the Black Sea and the mountains of Adjara.\n\nThe family has grown grapes since 2010. After studying winemaking, Maka made her first wine with her husband, Davit Bibineishvili, in 2023. Together they began developing their own winery, ChkhaValley.\n\nChkhaveri, an old western Georgian variety, has a special place here, producing both rosé and amber wines. The family also grows Tsolikouri. Adjara’s humid climate calls for close attention to the vines, and Maka aims to follow the principles of natural winemaking.\n\nAt ChkhaValley, getting to know the wines continues around the family table. Home-cooked Georgian food includes Adjarian sinori, khachapuri, mchadi and seasonal dishes. Welcoming guests has become an important part of the family’s work.\n\nIn November the family orchard adds a seasonal experience: the mandarin harvest. Guests can join the hosts in picking mandarins, and in the November version of the journey the harvest takes priority over the rest of the day.",
        "ka": "მაკა თედორაძე პროფესიით ფინანსისტია. მისი გზა მეღვინეობისკენ სოფელ ერგეში, საოჯახო ვენახიდან დაიწყო — ბათუმიდან სულ ათ კილომეტრში, შავ ზღვასა და აჭარის მთებს შორის.\n\nოჯახი ვაზს 2010 წლიდან უვლის. მეღვინეობის შესწავლის შემდეგ, 2023 წელს, მაკამ მეუღლესთან, დავით ბიბინეიშვილთან ერთად პირველი ღვინო დააყენა და საკუთარი მეურნეობის, ChkhaValley-ს განვითარებას შეუდგა.\n\nმათ საქმიანობაში განსაკუთრებული ადგილი ჩხავერს უჭირავს — დასავლეთ საქართველოს ძველ ჯიშს, რომლისგანაც აქ ვარდისფერ და ქარვისფერ ღვინოებს აყენებენ. ოჯახს ცოლიკაურიც მოჰყავს. აჭარის ნოტიო კლიმატში ვაზს განსაკუთრებით ფრთხილი მოვლა სჭირდება, მაკა კი ბუნებრივი მეღვინეობის პრინციპების დაცვას ცდილობს.\n\nChkhaValley-ში ღვინის გაცნობა საოჯახო სუფრასთან გრძელდება. აქ შინაურ ქართულ კერძებს ამზადებენ, მათ შორის აჭარულ სინორს, ხაჭაპურს, მჭადსა და სეზონურ ნუგბარს. სტუმართმოყვარეობა საოჯახო საქმის მნიშვნელოვან ნაწილად იქცა.\n\nნოემბერში საოჯახო ბაღი სეზონურ შთაბეჭდილებას გვთავაზობს — მანდარინის კრეფას. სტუმრებს შეუძლიათ კრეფაში მასპინძლებს შეუერთდნენ, მოგზაურობის ნოემბრის ვერსიაში კი კრეფას დღის დანარჩენ გეგმაზე უპირატესობა ენიჭება.",
        "ru": "По профессии Мака Тедорадзе — финансист. Её путь в виноделие начался с семейного виноградника в селе Эрге, всего в десяти километрах от Батуми, между Чёрным морем и горами Аджарии.\n\nСемья выращивает виноград с 2010 года. Пройдя обучение виноделию, в 2023 году Мака вместе с супругом Давитом Бибинеишвили сделала своё первое вино и начала развивать собственное хозяйство ChkhaValley.\n\nОсобое место в их работе занимает чхавери — старинный сорт Западной Грузии, из которого здесь делают розовые и янтарные вина. Вместе с ним семья выращивает цоликоури. Влажный климат Аджарии требует особенно внимательного ухода за лозой, а Мака стремится придерживаться принципов натурального виноделия.\n\nВ ChkhaValley знакомство с вином продолжается за семейным столом. Здесь готовят домашние грузинские блюда, среди которых аджарский синори, хачапури, мчади и сезонные угощения. Гостеприимство стало важной частью семейного проекта.\n\nВ ноябре семейный сад дарит сезонное впечатление — сбор мандаринов. Гости могут присоединиться к хозяевам, а в ноябрьской версии путешествия сбор урожая становится главным событием дня."
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
        "ru": "Хатия Джахуа"
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
        "ru": "Хатия Джахуа — художница и основательница семейной винодельни Argvani в селе Абедати, в девяти километрах от Мартвили.\n\nВ её семье издавна выращивали виноград, собирали урожай и давили вино в традиционном грузинском давильном корыте — сацнахели. Со временем эта традиция оказалась почти утрачена. Хатия вместе с братом решила вернуть её к жизни: они восстановили виноградник и построили новый марани. С 2021 года Argvani развивает собственное производство вина.\n\nОсобое внимание Хатия уделяет сохранению и популяризации мегрельских сортов, прежде всего оджалеши и чвитилури. В хозяйстве сочетают традиционные и современные подходы к виноделию, экспериментируют с грузинскими и европейскими сортами.\n\nЕщё одна сторона её жизни — искусство. Хатия изучает грузинский орнамент и знакомит гостей с его историей и символикой. Встреча с ней позволяет по-новому взглянуть на культурное наследие Самегрело: увидеть связь между искусством, архитектурой, местными винами и семейными традициями.\n\nЗнакомство с Argvani дополняет мегрельская кухня, о которой Хатия с удовольствием рассказывает своим гостям."
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
