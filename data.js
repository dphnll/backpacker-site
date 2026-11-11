/*
 * WIWI Tours — editorial data for the prototype.
 *
 * This is the only file an editor needs to touch for content. Everything on the
 * page is rendered from it. The programme is a working draft and will keep
 * changing: edit here, then run `node tests/data-check.mjs`.
 *
 * One route, one set of activities, people and places — three languages.
 *   Every visitor-facing text is written once, in place, as { en, ka, ru }.
 *   IDs, times, coordinates and relationships exist only once.
 *   Plain strings are for things that are never translated: clock times
 *   ("10:00–12:00"), brand names ("ChkhaValley Winery") and URLs.
 *   `topics`, `flags` and `region` may also be keys of the shared dictionary in
 *   i18n.js (topic.*, flag.*, region.*) for recurring terms.
 *
 * Structure
 *   tours[]   — each tour carries its own days and open questions.
 *               A tour without `days` is shown as a concept card only.
 *               To add the second tour, fill `days` of the "east" tour.
 *   places{}  — shared directory, referenced by id from activities (any tour).
 *   people{}  — shared directory of hosts, referenced by id from activities.
 *
 * Sources (11 Nov 2026)
 *   - "UVAMO × WIWI" spreadsheet: Itinerary, Concept & copy, Website fields
 *     (Manana Akhvlediani's draft; times and notes are taken from it).
 *   - Meeting of 9 November 2026: protocol and transcript. Used for open
 *     questions only; nothing discussed there is shown as decided.
 *   - WIWI_Tours_Prototype_2026-11-10.html: approximate map coordinates.
 *   `source` fields keep the draft wording for editors and are not displayed.
 *
 * Status vocabulary: "draft", "to-confirm", "placeholder", "confirmed"
 * (tours may also be "in-development"). Nothing is marked confirmed yet.
 *
 * Coordinates are APPROXIMATE (town or area level), not venue addresses.
 *
 * Wine links: `links.uvamoWine` / `links.uvamoSet` accept only complete public
 * UVAMO! URLs of the form …/tasting/<snapshotId> and …/tasting/<snapshotId>/wine/<index>.
 * Leave them null until WIWI supplies real URLs — the page then shows nothing.
 */
window.WIWI_DATA = {
  updated: "2026-11-11",

  tours: [
    {
      id: "west",
      status: "draft",
      title: {
        en: "Guests of Women Winemakers",
        ka: "ქალი მეღვინეების სტუმრად",
        ru: "В гостях у женщин-виноделов",
      },
      region: { en: "Western Georgia", ka: "დასავლეთ საქართველო", ru: "Западная Грузия" },
      tagline: {
        en: "From the Black Sea coast to the mountains of Racha and Lechkhumi",
        ka: "შავი ზღვის სანაპიროდან რაჭისა და ლეჩხუმის მთებამდე",
        ru: "От побережья Чёрного моря до гор Рачи и Лечхуми",
      },
      summary: {
        en: "Five wine regions, the women who make their wines and the dishes each of them pairs with her wine. Two comparisons run through the route: Chkhaveri from Adjara and Guria, Tsolikouri from Lechkhumi and Imereti.",
        ka: "ხუთი ღვინის რეგიონი, ქალები, რომლებიც იქ ღვინოს ქმნიან, და კერძები, რომლებსაც თითოეული მათგანი საკუთარ ღვინოს უხამებს. მარშრუტს ორი შედარება გასდევს: აჭარისა და გურიის ჩხავერი, ლეჩხუმისა და იმერეთის ცოლიკაური.",
        ru: "Пять винных регионов, женщины, которые делают там вино, и блюда, которые каждая из них подбирает к своему вину. Через весь маршрут проходят два сравнения: чхавери из Аджарии и Гурии, цоликоури из Лечхуми и Имерети.",
      },
      focus: ["adjara", "guria", "lechkhumi", "racha", "imereti", "tbilisi-mtskheta"],
      facts: [
        {
          label: { en: "6-day draft", ka: "6-დღიანი სამუშაო ვერსია", ru: "Черновик на 6 дней" },
          note: { en: "Manana's English text says 7 days", ka: "მანანას ინგლისურ ტექსტში 7 დღეა", ru: "В английском тексте Мананы — 7 дней" },
        },
        { label: { en: "5 wine regions", ka: "ღვინის 5 რეგიონი", ru: "5 винных регионов" } },
        {
          label: { en: "May–September", ka: "მაისი–სექტემბერი", ru: "Май–сентябрь" },
          note: { en: "October edition proposed", ka: "შემოთავაზებულია ოქტომბრის ვერსიაც", ru: "Предложена октябрьская версия" },
        },
        { label: { en: "Small groups", ka: "მცირე ჯგუფები", ru: "Небольшие группы" } },
      ],
      author: {
        en: "Route draft by Manana Akhvlediani",
        ka: "მარშრუტის სამუშაო ვერსია: მანანა ახვლედიანი",
        ru: "Черновик маршрута: Манана Ахвледиани",
      },
      // Optional "Explore in Clavelo": a published, read-only Clavelo share of a sample
      // programme, e.g. "https://app.clavelo.cc/?share=<token>". Shown only when set to such
      // a URL; null hides it. Use an ordinary share (not Organizer mode, which offers Join).
      clavelo: { url: null },


      // Questions WIWI must answer — working notes. Not listed on the site; a day with
      // `review: "<id>"` shows that question as its "section under review" banner.
      openQuestions: [
        {
          id: "length",
          title: { en: "Six or seven days?", ka: "ექვსი თუ შვიდი დღე?", ru: "Шесть или семь дней?" },
          text: {
            en: "The itinerary has six days; Manana's English text says “A 7-Day Boutique Wine & Culinary Journey”. At the 9 November meeting about seven days was named as the upper limit, and Racha may need more time.",
            ka: "პროგრამაში ექვსი დღეა, მანანას ინგლისურ ტექსტში კი წერია „A 7-Day Boutique Wine & Culinary Journey“. 9 ნოემბრის შეხვედრაზე ზედა ზღვრად დაახლოებით შვიდი დღე დასახელდა, რაჭას კი შესაძლოა მეტი დრო დასჭირდეს.",
            ru: "В программе шесть дней, а в английском тексте Мананы — «A 7-Day Boutique Wine & Culinary Journey». На встрече 9 ноября верхним пределом назвали около семи дней, а Раче может понадобиться больше времени.",
          },
        },
        {
          id: "racha-lechkhumi",
          title: {
            en: "Racha–Lechkhumi section may change",
            ka: "რაჭა–ლეჩხუმის მონაკვეთი შეიძლება შეიცვალოს",
            ru: "Участок Рача–Лечхуми может измениться",
          },
          text: {
            en: "The road to Miranda's winery may need a jeep transfer, and an extra night in the mountains was discussed. Alternatives raised: two nights in Kutaisi with Samegrelo, or Samtskhe in cooler months. No decision yet: the route is to be timed and tested first.",
            ka: "მირანდას მარნამდე შესაძლოა ჯიპებით მისვლა დაგვჭირდეს; განიხილებოდა მთაში დამატებითი ღამეც. ალტერნატივებად დასახელდა ორი ღამე ქუთაისში სამეგრელოს მონახულებით ან, გრილ თვეებში, სამცხე. გადაწყვეტილება ჯერ არ არის: ჯერ მარშრუტის დრო უნდა დაითვალოს და გზა ადგილზე უნდა გაიაროს.",
            ru: "К винодельне Миранды, возможно, придётся ехать на джипах; обсуждалась и дополнительная ночь в горах. Альтернативы: две ночи в Кутаиси с поездкой в Самегрело или, в прохладные месяцы, Самцхе. Решения нет: сначала маршрут нужно просчитать по времени и проехать.",
          },
        },
        {
          id: "mandarin",
          title: { en: "October mandarin harvest", ka: "მანდარინის კრეფა ოქტომბერში", ru: "Сбор мандаринов в октябре" },
          text: {
            en: "Proposed for Day 2 in October. It may add a day to the tour, and a second Adjarian host was mentioned as an option.",
            ka: "შემოთავაზებულია ოქტომბერში, მეორე დღეს. შესაძლოა მოგზაურობას ერთი დღე დაემატოს; ალტერნატივად აჭარაში მეორე მასპინძელიც დასახელდა.",
            ru: "Предложен на второй день в октябре. Это может добавить к поездке день; как вариант упоминалась вторая хозяйка в Аджарии.",
          },
        },
        {
          id: "season",
          title: { en: "Season", ka: "სეზონი", ru: "Сезон" },
          text: {
            en: "Core season May–September with an October edition. Racha–Lechkhumi suits summer best; May may be cold in the mountains.",
            ka: "ძირითადი სეზონი მაისი–სექტემბერია, ოქტომბრის ვერსიით. რაჭა–ლეჩხუმისთვის საუკეთესო დრო ზაფხულია; მაისში მთაში შეიძლება ციოდეს.",
            ru: "Основной сезон — май–сентябрь плюс октябрьская версия. Рача–Лечхуми лучше всего летом; в мае в горах может быть холодно.",
          },
        },
        {
          id: "flights",
          title: { en: "Arrival and departure", ka: "ჩამოფრენა და გაფრენა", ru: "Прилёт и вылет" },
          text: {
            en: "Start in Batumi and end in Tbilisi is the draft. Arriving and leaving via Tbilisi, Kutaisi or Batumi, and flights via Istanbul, are still being compared.",
            ka: "სამუშაო ვერსიით მოგზაურობა ბათუმში იწყება და თბილისში მთავრდება. ჯერ კიდევ განიხილება ჩამოფრენა და გაფრენა თბილისის, ქუთაისის ან ბათუმის გავლით, ასევე ფრენები სტამბოლის გავლით.",
            ru: "По черновику поездка начинается в Батуми и заканчивается в Тбилиси. Ещё сравниваются прилёт и вылет через Тбилиси, Кутаиси или Батуми, а также рейсы через Стамбул.",
          },
        },
        {
          id: "hosts",
          title: { en: "Who welcomes the guests", ka: "ვინ დახვდება სტუმრებს", ru: "Кто встречает гостей" },
          text: {
            en: "Which woman winemaker personally hosts at the Sarishvili, Lomtadze and Chkheidze wineries, and who cooks at each stop, is still to be confirmed.",
            ka: "ჯერ დასაზუსტებელია, რომელი ქალი მეღვინე მიიღებს სტუმრებს სარიშვილების, ლომთაძისა და ჩხეიძის მარნებში და ვინ მოამზადებს კერძებს თითოეულ გაჩერებაზე.",
            ru: "Ещё нужно уточнить, какая женщина-винодел лично принимает гостей у Саришвили, Ломтадзе и Чхеидзе и кто готовит на каждой остановке.",
          },
        },
        {
          id: "tbilisi",
          title: {
            en: "A Tbilisi tasting with WIWI members",
            ka: "დეგუსტაცია თბილისში WIWI-ის წევრებთან",
            ru: "Дегустация в Тбилиси с участницами WIWI",
          },
          text: {
            en: "A tasting and farewell evening in Tbilisi with WIWI's own women winemakers was discussed but is not yet planned.",
            ka: "განიხილებოდა დეგუსტაცია და გამოსამშვიდობებელი საღამო თბილისში WIWI-ის ქალ მეღვინეებთან, მაგრამ ჯერ არ დაგეგმილა.",
            ru: "Обсуждались дегустация и прощальный вечер в Тбилиси с женщинами-виноделами из WIWI, но пока они не запланированы.",
          },
        },
        {
          id: "logistics",
          title: { en: "Hotels, venues, timings, price", ka: "სასტუმროები, ადგილები, დრო, ფასი", ru: "Отели, места, время, цена" },
          text: {
            en: "Hotels, the Kutaisi restaurant, travel times, group size, price and inclusions are not confirmed. The team plans to travel the route before publishing a fixed programme.",
            ka: "სასტუმროები, ქუთაისის რესტორანი, გზაში დახარჯული დრო, ჯგუფის ზომა, ფასი და ფასში შემავალი მომსახურება დადასტურებული არ არის. ფიქსირებული პროგრამის გამოქვეყნებამდე გუნდი მარშრუტს თავად გაივლის.",
            ru: "Отели, ресторан в Кутаиси, время в пути, размер группы, цена и состав услуг не подтверждены. Команда планирует проехать маршрут, прежде чем публиковать окончательную программу.",
          },
        },
      ],

      days: [
        {
          n: 1,
          title: { en: "Batumi", ka: "ბათუმი", ru: "Батуми" },
          note: { en: "Free day", ka: "თავისუფალი დღე", ru: "Свободный день" },
          route: { en: "Batumi", ka: "ბათუმი", ru: "Батуми" },
          activities: [
            {
              id: "d1-arrival",
              time: null,
              type: "transport",
              title: { en: "Arrival in Batumi", ka: "ჩამოსვლა ბათუმში", ru: "Прибытие в Батуми" },
              summary: {
                en: "Arrive on the Black Sea coast.",
                ka: "ჩამოსვლა შავი ზღვის სანაპიროზე.",
                ru: "Прибытие на черноморское побережье.",
              },
              topics: ["arrival"],
              place: "batumi",
              status: "draft",
            },
            {
              id: "d1-hotel",
              time: null,
              type: "stay",
              title: {
                en: "Hotel check-in, rest and personal time",
                ka: "სასტუმროში განთავსება, დასვენება და პირადი დრო",
                ru: "Заселение в отель, отдых и личное время",
              },
              topics: ["stay", "free-time"],
              place: "batumi",
              flags: ["hotel"],
              status: "to-confirm",
              source: "Day 1 — Batumi. Free day. Arrival, hotel check-in, rest and personal time.",
            },
          ],
        },
        {
          n: 2,
          title: { en: "Adjara, Guria and Imereti", ka: "აჭარა, გურია და იმერეთი", ru: "Аджария, Гурия и Имерети" },
          note: { en: "Two wineries", ka: "ორი მარანი", ru: "Две винодельни" },
          route: {
            en: "Batumi → Adjara → Guria → Kutaisi",
            ka: "ბათუმი → აჭარა → გურია → ქუთაისი",
            ru: "Батуми → Аджария → Гурия → Кутаиси",
          },
          activities: [
            {
              id: "d2-breakfast",
              time: "09:00",
              type: "food",
              title: { en: "Breakfast", ka: "საუზმე", ru: "Завтрак" },
              topics: ["food"],
              place: "batumi",
              status: "draft",
            },
            {
              id: "d2-chkhavalley",
              time: "10:00–12:00",
              type: "wine",
              title: {
                en: "Maka Tedoradze at ChkhaValley Winery",
                ka: "მაკა თედორაძე — ChkhaValley Winery",
                ru: "Мака Тедорадзе — ChkhaValley Winery",
              },
              summary: {
                en: "Chkhaveri in the Adjarian style, with Adjarian dishes.",
                ka: "აჭარული სტილის ჩხავერი აჭარული კერძებით.",
                ru: "Чхавери в аджарском стиле с аджарскими блюдами.",
              },
              topics: ["wine", "food", "meet-winemaker"],
              place: "chkhavalley",
              people: ["maka-tedoradze"],
              wine: { en: "Chkhaveri, Adjarian style", ka: "ჩხავერი, აჭარული სტილი", ru: "Чхавери, аджарский стиль" },
              food: { en: "Adjarian dishes", ka: "აჭარული კერძები", ru: "Аджарская кухня" },
              seasonal: {
                en: "October edition: a mandarin-orchard visit and picking, depending on the harvest. Timing to confirm.",
                ka: "ოქტომბრის ვერსია: მანდარინის ბაღის მონახულება და კრეფა, მოსავლის მიხედვით. დრო დასაზუსტებელია.",
                ru: "Октябрьская версия: визит в мандариновый сад и сбор мандаринов, если позволит урожай. Время уточняется.",
              },
              flags: ["cook"],
              status: "draft",
              links: { uvamoWine: null, uvamoSet: null },
              source: "10:00–12:00 — Maka Tedoradze, ChkhaValley Winery. Adjara — main wine theme: Chkhaveri, Adjarian style. Culinary focus: Adjarian dishes. October: mandarin picking added to the ChkhaValley visit. Meeting 9 Nov: Guranda named as a possible alternative host for the harvest (transcript, name to verify).",
            },
            {
              id: "d2-to-guria",
              time: "12:00–13:45",
              type: "transport",
              title: { en: "Drive to Lanchkhuti", ka: "გზა ლანჩხუთისკენ", ru: "Переезд в Ланчхути" },
              topics: ["transfer"],
              route: { en: "Adjara → Guria", ka: "აჭარა → გურია", ru: "Аджария → Гурия" },
              flags: ["travel-time"],
              status: "draft",
            },
            {
              id: "d2-sarishvili",
              time: "14:00–16:00",
              type: "wine",
              title: {
                en: "Sarishvili family winery",
                ka: "სარიშვილების საოჯახო მარანი",
                ru: "Семейная винодельня Саришвили",
              },
              summary: {
                en: "Gurian wine and cuisine. Chkhaveri again, now in the Gurian style — to compare with the morning's Adjarian Chkhaveri.",
                ka: "გურული ღვინო და სამზარეულო. ისევ ჩხავერი, ამჯერად გურული სტილის — დილის აჭარულ ჩხავერთან შესადარებლად.",
                ru: "Гурийское вино и кухня. Снова чхавери, теперь в гурийском стиле, — чтобы сравнить с утренним аджарским.",
              },
              topics: ["wine", "food", "family-winery", "comparison"],
              place: "sarishvili",
              people: ["sarishvili"],
              wine: { en: "Chkhaveri, Gurian style", ka: "ჩხავერი, გურული სტილი", ru: "Чхавери, гурийский стиль" },
              food: { en: "Gurian cuisine", ka: "გურული სამზარეულო", ru: "Гурийская кухня" },
              flags: [
                {
                  en: "Woman winemaker and cook to confirm",
                  ka: "ქალი მეღვინე და მზარეული დასაზუსტებელია",
                  ru: "Женщина-винодел и повар уточняются",
                },
              ],
              status: "draft",
              links: { uvamoWine: null, uvamoSet: null },
            },
            {
              id: "d2-to-kutaisi",
              time: "16:00–17:45",
              type: "transport",
              title: { en: "Drive to Kutaisi", ka: "გზა ქუთაისისკენ", ru: "Переезд в Кутаиси" },
              topics: ["transfer"],
              route: { en: "Guria → Kutaisi", ka: "გურია → ქუთაისი", ru: "Гурия → Кутаиси" },
              flags: ["travel-time"],
              status: "draft",
            },
            {
              id: "d2-hotel",
              time: "18:00",
              type: "stay",
              title: { en: "Hotel check-in", ka: "სასტუმროში განთავსება", ru: "Заселение в отель" },
              topics: ["stay"],
              place: "kutaisi",
              flags: ["hotel"],
              status: "to-confirm",
            },
            {
              id: "d2-dinner",
              time: "20:00",
              type: "food",
              title: { en: "Dinner at Sami Da", ka: "ვახშამი რესტორან „სამი დაში“", ru: "Ужин в ресторане «Сами Да»" },
              summary: {
                en: "“Three Sisters” — the restaurant Manana proposes for the evening in Kutaisi.",
                ka: "„სამი და“ — რესტორანი, რომელსაც მანანა ქუთაისში საღამოსთვის გვთავაზობს.",
                ru: "«Три сестры» — ресторан, который Манана предлагает для вечера в Кутаиси.",
              },
              topics: ["food"],
              place: "sami-da",
              flags: ["restaurant"],
              status: "to-confirm",
              source: "20:00 — Dinner at the ‘Sami Da’ restaurant. ????????? Meeting 9 Nov: Manana chose “Three Sisters” because it is run by women (transcript).",
            },
          ],
        },
        {
          n: 3,
          title: { en: "Lechkhumi and Racha", ka: "ლეჩხუმი და რაჭა", ru: "Лечхуми и Рача" },
          note: { en: "Two wineries", ka: "ორი მარანი", ru: "Две винодельни" },
          route: {
            en: "Kutaisi → Lechkhumi → Racha",
            ka: "ქუთაისი → ლეჩხუმი → რაჭა",
            ru: "Кутаиси → Лечхуми → Рача",
          },
          review: "racha-lechkhumi",
          activities: [
            {
              id: "d3-breakfast",
              time: "08:00",
              type: "food",
              title: { en: "Breakfast", ka: "საუზმე", ru: "Завтрак" },
              topics: ["food"],
              place: "kutaisi",
              status: "draft",
            },
            {
              id: "d3-departure",
              time: "09:00",
              type: "transport",
              title: { en: "Departure from Kutaisi", ka: "გამგზავრება ქუთაისიდან", ru: "Выезд из Кутаиси" },
              topics: ["transfer"],
              route: { en: "Kutaisi → Lechkhumi", ka: "ქუთაისი → ლეჩხუმი", ru: "Кутаиси → Лечхуми" },
              status: "draft",
            },
            {
              id: "d3-tvishi",
              time: "10:30–12:30",
              type: "wine",
              title: { en: "Miranda's winery in Tvishi", ka: "მირანდას მარანი ტვიშში", ru: "Винодельня Миранды в Твиши" },
              summary: {
                en: "Tvishi Tsolikouri in the mountains of Lechkhumi.",
                ka: "ტვიშის ცოლიკაური ლეჩხუმის მთებში.",
                ru: "Цоликоури из Твиши в горах Лечхуми.",
              },
              topics: ["wine", "meet-winemaker"],
              place: "tvishi",
              people: ["miranda"],
              wine: { en: "Tsolikouri, Tvishi", ka: "ცოლიკაური, ტვიში", ru: "Цоликоури, Твиши" },
              flags: [
                {
                  en: "Road condition: a jeep transfer may be needed",
                  ka: "გზის მდგომარეობა: შესაძლოა ჯიპებით მისვლა დაგვჭირდეს",
                  ru: "Состояние дороги: возможно, понадобятся джипы",
                },
                {
                  en: "Visit length to confirm (3–4 hours discussed)",
                  ka: "ვიზიტის ხანგრძლივობა დასაზუსტებელია (განიხილებოდა 3–4 საათი)",
                  ru: "Длительность визита уточняется (обсуждали 3–4 часа)",
                },
              ],
              status: "draft",
              links: { uvamoWine: null, uvamoSet: null },
              source: "10:30–12:30 — Miranda's winery, Tvishi. Lechkhumi — main wine theme: Tsolikouri, Tvishi. Culinary focus: Lechkhumian dishes. Meeting 9 Nov: the road is bad, a neighbour's jeeps were suggested; guests could stay 3–4 hours.",
            },
            {
              id: "d3-lechkhumi-lunch",
              time: "12:30–13:30",
              type: "food",
              title: {
                en: "Authentic Lechkhumian dishes",
                ka: "ავთენტური ლეჩხუმური კერძები",
                ru: "Настоящие лечхумские блюда",
              },
              topics: ["food"],
              place: "tvishi",
              food: { en: "Lechkhumian cuisine", ka: "ლეჩხუმური სამზარეულო", ru: "Лечхумская кухня" },
              flags: ["cook"],
              status: "to-confirm",
            },
            {
              id: "d3-to-racha",
              time: "13:30–15:00",
              type: "transport",
              title: { en: "Drive to Khvanchkara", ka: "გზა ხვანჭკარისკენ", ru: "Переезд в Хванчкару" },
              topics: ["transfer"],
              route: { en: "Lechkhumi → Racha", ka: "ლეჩხუმი → რაჭა", ru: "Лечхуми → Рача" },
              status: "draft",
            },
            {
              id: "d3-lomtadze",
              time: "15:00–17:00",
              type: "wine",
              title: { en: "Tariel Lomtadze's winery", ka: "ტარიელ ლომთაძის მარანი", ru: "Винодельня Тариэла Ломтадзе" },
              summary: {
                en: "Khvanchkara and other Rachian wines, with lobiani and Rachian ham.",
                ka: "ხვანჭკარა და სხვა რაჭული ღვინოები, ლობიანითა და რაჭული ლორით.",
                ru: "Хванчкара и другие рачинские вина с лобиани и рачинской ветчиной.",
              },
              topics: ["wine", "food", "family-winery"],
              place: "khvanchkara",
              people: ["lomtadze"],
              wine: { en: "Khvanchkara and Rachian wines", ka: "ხვანჭკარა და რაჭული ღვინოები", ru: "Хванчкара и рачинские вина" },
              food: { en: "Lobiani, Rachian ham", ka: "ლობიანი, რაჭული ლორი", ru: "Лобиани, рачинская ветчина" },
              flags: [
                {
                  en: "Woman winemaker or host to confirm",
                  ka: "ქალი მეღვინე ან მასპინძელი დასაზუსტებელია",
                  ru: "Женщина-винодел или хозяйка уточняются",
                },
              ],
              status: "draft",
              links: { uvamoWine: null, uvamoSet: null },
            },
            {
              id: "d3-racha-stay",
              time: "17:30",
              type: "stay",
              title: { en: "Accommodation in Racha", ka: "ღამისთევა რაჭაში", ru: "Ночлег в Раче" },
              topics: ["stay"],
              place: "khvanchkara",
              flags: [
                {
                  en: "At the winery or elsewhere — to confirm",
                  ka: "მარანში თუ სხვაგან — დასაზუსტებელია",
                  ru: "В винодельне или в другом месте — уточняется",
                },
              ],
              status: "to-confirm",
              source: "17:30 — Accommodation in Racha (at Lomsadze's or?).",
            },
            {
              id: "d3-dinner",
              time: "19:00",
              type: "food",
              title: { en: "Dinner and rest", ka: "ვახშამი და დასვენება", ru: "Ужин и отдых" },
              topics: ["food", "free-time"],
              place: "khvanchkara",
              flags: ["cook"],
              status: "to-confirm",
            },
          ],
        },
        {
          n: 4,
          title: { en: "Racha, Imereti and Tbilisi", ka: "რაჭა, იმერეთი და თბილისი", ru: "Рача, Имерети и Тбилиси" },
          note: { en: "A long day", ka: "გრძელი დღე", ru: "Долгий день" },
          route: {
            en: "Racha → Imereti → Tbilisi",
            ka: "რაჭა → იმერეთი → თბილისი",
            ru: "Рача → Имерети → Тбилиси",
          },
          review: "racha-lechkhumi",
          activities: [
            {
              id: "d4-breakfast",
              time: "08:00",
              type: "food",
              title: { en: "Breakfast", ka: "საუზმე", ru: "Завтрак" },
              topics: ["food"],
              place: "khvanchkara",
              status: "draft",
            },
            {
              id: "d4-departure",
              time: "09:00",
              type: "transport",
              title: { en: "Departure", ka: "გამგზავრება", ru: "Выезд" },
              topics: ["transfer"],
              route: { en: "Racha", ka: "რაჭა", ru: "Рача" },
              status: "draft",
            },
            {
              id: "d4-nikortsminda",
              time: "09:45–10:15",
              type: "excursion",
              title: { en: "Nikortsminda", ka: "ნიკორწმინდა", ru: "Никорцминда" },
              summary: {
                en: "A short stop at the 11th-century cathedral.",
                ka: "მოკლე გაჩერება XI საუკუნის ტაძართან.",
                ru: "Короткая остановка у собора XI века.",
              },
              topics: ["heritage"],
              place: "nikortsminda",
              status: "draft",
            },
            {
              id: "d4-shaori",
              time: "10:30–11:00",
              type: "excursion",
              title: { en: "Shaori Lake", ka: "შაორის ტბა", ru: "Озеро Шаори" },
              summary: { en: "A stop for photographs.", ka: "გაჩერება ფოტოებისთვის.", ru: "Остановка для фотографий." },
              topics: ["nature"],
              place: "shaori",
              status: "draft",
            },
            {
              id: "d4-to-imereti",
              time: "11:00–13:00",
              type: "transport",
              title: { en: "Drive towards Obcha", ka: "გზა ობჩისკენ", ru: "Переезд в сторону Обчи" },
              topics: ["transfer"],
              route: { en: "Racha → Imereti", ka: "რაჭა → იმერეთი", ru: "Рача → Имерети" },
              status: "draft",
            },
            {
              id: "d4-chkheidze",
              time: "13:00–15:00",
              type: "wine",
              title: {
                en: "Simonika Chkheidze's winery",
                ka: "სიმონიკა ჩხეიძის მარანი",
                ru: "Винодельня Симоники Чхеидзе",
              },
              summary: {
                en: "Imeretian Tsolikouri — to compare with the Tvishi Tsolikouri of the day before.",
                ka: "იმერული ცოლიკაური — წინა დღის ტვიშის ცოლიკაურთან შესადარებლად.",
                ru: "Имеретинское цоликоури — чтобы сравнить с цоликоури из Твиши накануне.",
              },
              topics: ["wine", "comparison"],
              place: "obcha",
              people: ["chkheidze"],
              wine: { en: "Tsolikouri, Imeretian", ka: "ცოლიკაური, იმერული", ru: "Цоликоури, имеретинское" },
              food: { en: "Imeretian cuisine", ka: "იმერული სამზარეულო", ru: "Имеретинская кухня" },
              flags: [
                {
                  en: "Host and cook to confirm",
                  ka: "მასპინძელი და მზარეული დასაზუსტებელია",
                  ru: "Хозяйка и повар уточняются",
                },
              ],
              status: "draft",
              links: { uvamoWine: null, uvamoSet: null },
              source: "13:00–15:00 — Simonika Chkheidze's winery. Imereti — main wine theme: Imeretian Tsolikouri. Meeting 9 Nov: an overnight stay here was mentioned as an option to shorten the day.",
            },
            {
              id: "d4-lunch",
              time: "15:00–16:00",
              type: "food",
              title: { en: "Imeretian lunch", ka: "იმერული სადილი", ru: "Имеретинский обед" },
              topics: ["food"],
              place: "obcha",
              food: { en: "Imeretian cuisine", ka: "იმერული სამზარეულო", ru: "Имеретинская кухня" },
              flags: ["cook"],
              status: "to-confirm",
            },
            {
              id: "d4-to-tbilisi",
              time: "16:00–19:30",
              type: "transport",
              title: { en: "Drive to Tbilisi", ka: "გზა თბილისისკენ", ru: "Переезд в Тбилиси" },
              topics: ["transfer"],
              route: { en: "Imereti → Tbilisi", ka: "იმერეთი → თბილისი", ru: "Имерети → Тбилиси" },
              status: "draft",
            },
            {
              id: "d4-hotel",
              time: "19:30–20:00",
              type: "stay",
              title: { en: "Hotel check-in", ka: "სასტუმროში განთავსება", ru: "Заселение в отель" },
              topics: ["stay"],
              place: "tbilisi",
              flags: ["hotel"],
              status: "to-confirm",
            },
          ],
        },
        {
          n: 5,
          title: { en: "Tbilisi and Mtskheta", ka: "თბილისი და მცხეთა", ru: "Тбилиси и Мцхета" },
          note: { en: "Cultural day", ka: "კულტურის დღე", ru: "День культуры" },
          route: { en: "Tbilisi ↔ Mtskheta", ka: "თბილისი ↔ მცხეთა", ru: "Тбилиси ↔ Мцхета" },
          activities: [
            {
              id: "d5-tbilisi",
              time: { en: "Morning or afternoon", ka: "დილით ან ნაშუადღევს", ru: "Утром или днём" },
              type: "excursion",
              title: { en: "Tbilisi sightseeing", ka: "თბილისის დათვალიერება", ru: "Знакомство с Тбилиси" },
              topics: ["culture"],
              place: "tbilisi",
              flags: [
                {
                  en: "Order with Mtskheta depends on flights",
                  ka: "მცხეთასთან რიგითობა ფრენებზეა დამოკიდებული",
                  ru: "Порядок с Мцхетой зависит от рейсов",
                },
              ],
              status: "draft",
            },
            {
              id: "d5-mtskheta",
              time: { en: "Midday", ka: "შუადღისას", ru: "В середине дня" },
              type: "excursion",
              title: { en: "Visit Mtskheta", ka: "მცხეთის მონახულება", ru: "Поездка в Мцхету" },
              topics: ["heritage"],
              place: "mtskheta",
              status: "draft",
            },
            {
              id: "d5-dinner",
              time: { en: "Evening", ka: "საღამოს", ru: "Вечером" },
              type: "food",
              title: { en: "Dinner in Tbilisi", ka: "ვახშამი თბილისში", ru: "Ужин в Тбилиси" },
              topics: ["food"],
              place: "tbilisi",
              flags: [
                { en: "Venue to confirm", ka: "ადგილი დასაზუსტებელია", ru: "Место уточняется" },
                {
                  en: "A tasting with WIWI winemakers was discussed",
                  ka: "განიხილებოდა დეგუსტაცია WIWI-ის მეღვინეებთან",
                  ru: "Обсуждалась дегустация с виноделами WIWI",
                },
              ],
              status: "to-confirm",
            },
          ],
        },
        {
          n: 6,
          title: { en: "Tbilisi", ka: "თბილისი", ru: "Тбилиси" },
          note: { en: "Free day", ka: "თავისუფალი დღე", ru: "Свободный день" },
          route: { en: "Tbilisi", ka: "თბილისი", ru: "Тбилиси" },
          activities: [
            {
              id: "d6-free",
              time: null,
              type: "other",
              title: { en: "Free time", ka: "თავისუფალი დრო", ru: "Свободное время" },
              topics: ["free-time"],
              place: "tbilisi",
              status: "draft",
            },
            {
              id: "d6-departure",
              time: null,
              type: "transport",
              title: {
                en: "Airport transfer and departure",
                ka: "აეროპორტში გადაყვანა და გამგზავრება",
                ru: "Трансфер в аэропорт и вылет",
              },
              topics: ["transfer"],
              place: "tbilisi",
              status: "draft",
            },
          ],
        },
      ],
    },

    {
      id: "east",
      status: "in-development",
      title: {
        en: "Women of Kakheti & Eastern Georgia",
        ka: "კახეთისა და აღმოსავლეთ საქართველოს ქალები",
        ru: "Женщины Кахетии и Восточной Грузии",
      },
      region: { en: "Eastern Georgia · Kakheti", ka: "აღმოსავლეთ საქართველო · კახეთი", ru: "Восточная Грузия · Кахетия" },
      tagline: null,
      summary: {
        en: "A second journey being prepared with Ketino. Days, hosts and experiences will be added once the route has been agreed — nothing is shown before then.",
        ka: "მეორე მოგზაურობა ქეთინოსთან ერთად მზადდება. დღეები, მასპინძლები და შთაბეჭდილებები მარშრუტის შეთანხმების შემდეგ დაემატება — მანამდე აქ არაფერი გამოჩნდება.",
        ru: "Второе путешествие готовится вместе с Кетино. Дни, хозяева и впечатления появятся, когда маршрут будет согласован, — до тех пор здесь ничего не показано.",
      },
      focus: ["kakheti"],
      facts: [
        { label: { en: "Route in preparation", ka: "მარშრუტი მზადდება", ru: "Маршрут готовится" } },
        { label: { en: "Hosts to be confirmed", ka: "მასპინძლები დასაზუსტებელია", ru: "Хозяева уточняются" } },
      ],
      author: null,
      openQuestions: [
        {
          id: "east-route",
          title: { en: "Kakheti route", ka: "კახეთის მარშრუტი", ru: "Маршрут по Кахетии" },
          text: {
            en: "Manana and Ketino are to go through Kakheti together — wineries, hosts and hotels — before a draft itinerary exists.",
            ka: "მანანა და ქეთინო კახეთს ერთად გაივლიან — მარნებს, მასპინძლებსა და სასტუმროებს — სანამ სამუშაო პროგრამა შედგება.",
            ru: "Манана и Кетино вместе пройдут по Кахетии — винодельни, хозяева, отели, — прежде чем появится черновик программы.",
          },
        },
      ],
      days: [],
    },
  ],

  places: {
    batumi: {
      heroLabel: "left", // named on the hero illustration, label left of the pin
      name: { en: "Batumi", ka: "ბათუმი", ru: "Батуми" },
      region: "adjara",
      description: {
        en: "Black Sea port city and capital of Adjara. The journey begins here.",
        ka: "შავი ზღვის საპორტო ქალაქი და აჭარის დედაქალაქი. მოგზაურობა აქ იწყება.",
        ru: "Портовый город на Чёрном море и столица Аджарии. Здесь начинается путешествие.",
      },
      coord: [41.65, 41.636],
      locationLabel: { en: "City centre", ka: "ქალაქის ცენტრი", ru: "Центр города" },
    },
    chkhavalley: {
      name: "ChkhaValley Winery",
      region: "adjara",
      description: {
        en: "Maka Tedoradze's winery in Adjara, the first wine stop and the place for Adjarian Chkhaveri.",
        ka: "მაკა თედორაძის მარანი აჭარაში — პირველი ღვინის გაჩერება და აჭარული ჩხავერის ადგილი.",
        ru: "Винодельня Маки Тедорадзе в Аджарии — первая винная остановка и место аджарского чхавери.",
      },
      coord: [41.6, 41.72],
      locationLabel: {
        en: "Area in Adjara — exact address to confirm",
        ka: "აჭარა — ზუსტი მისამართი დასაზუსტებელია",
        ru: "Район в Аджарии — точный адрес уточняется",
      },
    },
    sarishvili: {
      name: { en: "Sarishvili family winery", ka: "სარიშვილების საოჯახო მარანი", ru: "Семейная винодельня Саришвили" },
      region: "guria",
      description: {
        en: "Family winery in Guria, near Lanchkhuti: Gurian Chkhaveri and Gurian cuisine.",
        ka: "საოჯახო მარანი გურიაში, ლანჩხუთთან ახლოს: გურული ჩხავერი და გურული სამზარეულო.",
        ru: "Семейная винодельня в Гурии, недалеко от Ланчхути: гурийское чхавери и гурийская кухня.",
      },
      coord: [42.089, 42.036],
      locationLabel: { en: "Lanchkhuti area", ka: "ლანჩხუთის მიდამოები", ru: "Окрестности Ланчхути" },
    },
    kutaisi: {
      heroLabel: "left", // named on the hero illustration, label left of the pin
      name: { en: "Kutaisi", ka: "ქუთაისი", ru: "Кутаиси" },
      region: "imereti",
      description: {
        en: "Imereti's main city and the overnight stop after Adjara and Guria.",
        ka: "იმერეთის მთავარი ქალაქი და ღამისთევის ადგილი აჭარისა და გურიის შემდეგ.",
        ru: "Главный город Имерети и место ночлега после Аджарии и Гурии.",
      },
      coord: [42.268, 42.7],
      locationLabel: { en: "City centre", ka: "ქალაქის ცენტრი", ru: "Центр города" },
    },
    "sami-da": {
      name: { en: "Sami Da", ka: "სამი და", ru: "Сами Да" },
      region: "imereti",
      description: {
        en: "Restaurant in Kutaisi proposed for dinner on Day 2. The name means “Three Sisters”.",
        ka: "რესტორანი ქუთაისში, რომელიც მეორე დღის ვახშმისთვის არის შემოთავაზებული.",
        ru: "Ресторан в Кутаиси, предложенный для ужина во второй день. Название означает «Три сестры».",
      },
      coord: null,
      locationLabel: {
        en: "Kutaisi — address not supplied",
        ka: "ქუთაისი — მისამართი მითითებული არ არის",
        ru: "Кутаиси — адрес не указан",
      },
      status: "to-confirm",
    },
    tvishi: {
      name: { en: "Tvishi", ka: "ტვიში", ru: "Твиши" },
      region: "lechkhumi",
      description: {
        en: "Mountain village in Lechkhumi known for Tsolikouri wine. Road access is being checked.",
        ka: "მთის სოფელი ლეჩხუმში, რომელიც ცოლიკაურით არის ცნობილი. მისასვლელი გზა ჯერ მოწმდება.",
        ru: "Горное село в Лечхуми, известное цоликоури. Подъезд ещё проверяется.",
      },
      coord: [42.54, 42.73],
      locationLabel: { en: "Tvishi area", ka: "ტვიშის მიდამოები", ru: "Окрестности Твиши" },
    },
    khvanchkara: {
      heroLabel: true, // named on the hero illustration
      name: { en: "Khvanchkara", ka: "ხვანჭკარა", ru: "Хванчкара" },
      region: "racha",
      description: {
        en: "Racha wine village that gives its name to the semi-sweet red Khvanchkara. Home of Tariel Lomtadze's winery.",
        ka: "რაჭის სოფელი, რომლის სახელსაც ნახევრად ტკბილი წითელი ღვინო ხვანჭკარა ატარებს. აქ არის ტარიელ ლომთაძის მარანი.",
        ru: "Рачинское винное село, давшее имя полусладкому красному вину «Хванчкара». Здесь винодельня Тариэла Ломтадзе.",
      },
      coord: [42.54, 43.15],
      locationLabel: {
        en: "Khvanchkara / Ambrolauri area",
        ka: "ხვანჭკარისა და ამბროლაურის მიდამოები",
        ru: "Окрестности Хванчкары и Амбролаури",
      },
    },
    nikortsminda: {
      name: { en: "Nikortsminda", ka: "ნიკორწმინდა", ru: "Никорцминда" },
      region: "racha",
      description: {
        en: "Village with an 11th-century cathedral. A short stop on the way out of Racha.",
        ka: "სოფელი XI საუკუნის ტაძრით. მოკლე გაჩერება რაჭიდან გამგზავრებისას.",
        ru: "Село с собором XI века. Короткая остановка на выезде из Рачи.",
      },
      coord: [42.463, 43.089],
      locationLabel: { en: "Village", ka: "სოფელი", ru: "Село" },
    },
    shaori: {
      name: { en: "Shaori Lake", ka: "შაორის ტბა", ru: "Озеро Шаори" },
      region: "racha",
      description: {
        en: "Mountain reservoir in Racha. A photo stop.",
        ka: "მთის წყალსაცავი რაჭაში. გაჩერება ფოტოებისთვის.",
        ru: "Горное водохранилище в Раче. Остановка для фотографий.",
      },
      coord: [42.42, 43.05],
      locationLabel: { en: "Reservoir", ka: "წყალსაცავი", ru: "Водохранилище" },
    },
    obcha: {
      name: { en: "Obcha", ka: "ობჩა", ru: "Обча" },
      region: "imereti",
      description: {
        en: "Village in Imereti where the journey visits Simonika Chkheidze's winery.",
        ka: "სოფელი იმერეთში, სადაც სიმონიკა ჩხეიძის მარანს ვსტუმრობთ.",
        ru: "Село в Имерети, где путешествие заходит в винодельню Симоники Чхеидзе.",
      },
      coord: [42.2, 42.8],
      locationLabel: { en: "Obcha area", ka: "ობჩის მიდამოები", ru: "Окрестности Обчи" },
    },
    tbilisi: {
      heroLabel: true, // named on the hero illustration
      name: { en: "Tbilisi", ka: "თბილისი", ru: "Тбилиси" },
      region: "tbilisi",
      description: {
        en: "Capital of Georgia and the final base of the journey.",
        ka: "საქართველოს დედაქალაქი და მოგზაურობის ბოლო გაჩერება.",
        ru: "Столица Грузии и последняя база путешествия.",
      },
      coord: [41.715, 44.827],
      locationLabel: { en: "City centre", ka: "ქალაქის ცენტრი", ru: "Центр города" },
    },
    mtskheta: {
      name: { en: "Mtskheta", ka: "მცხეთა", ru: "Мцхета" },
      region: "mtskheta-mtianeti",
      description: {
        en: "Georgia's ancient capital; its historic monuments are on the UNESCO World Heritage List.",
        ka: "საქართველოს ძველი დედაქალაქი; მისი ისტორიული ძეგლები იუნესკოს მსოფლიო მემკვიდრეობის ნუსხაშია.",
        ru: "Древняя столица Грузии; её исторические памятники входят в список Всемирного наследия ЮНЕСКО.",
      },
      coord: [41.845, 44.719],
      locationLabel: { en: "Town centre", ka: "ქალაქის ცენტრი", ru: "Центр города" },
    },
  },

  // Only hosts named in the draft. No biographies or photographs are invented:
  // `story` and `photo` stay null until the person supplies and approves them.
  // When a story arrives, add it as { en, ka, ru } like any other text.
  people: {
    "maka-tedoradze": {
      name: { en: "Maka Tedoradze", ka: "მაკა თედორაძე", ru: "Мака Тедорадзе" },
      role: { en: "Winemaker", ka: "მეღვინე", ru: "Винодел" },
      business: "ChkhaValley Winery",
      region: "adjara",
      status: "draft",
      story: null,
      photo: null,
    },
    miranda: {
      name: { en: "Miranda", ka: "მირანდა", ru: "Миранда" },
      role: { en: "Winemaker", ka: "მეღვინე", ru: "Винодел" },
      business: { en: "Miranda's winery, Tvishi", ka: "მირანდას მარანი, ტვიში", ru: "Винодельня Миранды, Твиши" },
      region: "lechkhumi",
      status: "draft",
      note: {
        en: "Surname and winery name to confirm.",
        ka: "გვარი და მარნის სახელი დასაზუსტებელია.",
        ru: "Фамилия и название винодельни уточняются.",
      },
      story: null,
      photo: null,
    },
    sarishvili: {
      name: { en: "Sarishvili family", ka: "სარიშვილების ოჯახი", ru: "Семья Саришвили" },
      role: { en: "Family winery", ka: "საოჯახო მარანი", ru: "Семейная винодельня" },
      business: { en: "Sarishvili family winery", ka: "სარიშვილების საოჯახო მარანი", ru: "Семейная винодельня Саришвили" },
      region: "guria",
      status: "to-confirm",
      note: {
        en: "Which woman winemaker welcomes the guests, and who cooks, is still to be confirmed.",
        ka: "ჯერ დასაზუსტებელია, რომელი ქალი მეღვინე მიიღებს სტუმრებს და ვინ მოამზადებს კერძებს.",
        ru: "Ещё уточняется, какая женщина-винодел принимает гостей и кто готовит.",
      },
      story: null,
      photo: null,
    },
    lomtadze: {
      name: { en: "Tariel Lomtadze's winery", ka: "ტარიელ ლომთაძის მარანი", ru: "Винодельня Тариэла Ломтадзе" },
      role: { en: "Winery", ka: "მარანი", ru: "Винодельня" },
      business: { en: "Tariel Lomtadze's winery", ka: "ტარიელ ლომთაძის მარანი", ru: "Винодельня Тариэла Ломтадзе" },
      region: "racha",
      status: "to-confirm",
      note: {
        en: "The draft names the winery of Tariel Lomtadze. A woman winemaker or host for the WIWI visit is still to be confirmed.",
        ka: "სამუშაო პროგრამაში დასახელებულია ტარიელ ლომთაძის მარანი. WIWI-ის ვიზიტისთვის ქალი მეღვინე ან მასპინძელი ჯერ დასაზუსტებელია.",
        ru: "В черновике названа винодельня Тариэла Ломтадзе. Женщина-винодел или хозяйка для визита WIWI ещё уточняется.",
      },
      story: null,
      photo: null,
    },
    chkheidze: {
      name: { en: "Simonika Chkheidze", ka: "სიმონიკა ჩხეიძე", ru: "Симоника Чхеидзе" },
      role: { en: "Winery", ka: "მარანი", ru: "Винодельня" },
      business: { en: "Simonika Chkheidze's winery", ka: "სიმონიკა ჩხეიძის მარანი", ru: "Винодельня Симоники Чхеидзе" },
      region: "imereti",
      status: "to-confirm",
      note: {
        en: "Spelt Simonika and Simonica in the sources. Who personally hosts the visit is still to be confirmed.",
        ka: "წყაროებში ლათინურად ორგვარად წერია: Simonika და Simonica. ვინ მიიღებს სტუმრებს პირადად, დასაზუსტებელია.",
        ru: "В источниках латиницей пишется по-разному: Simonika и Simonica. Кто лично принимает гостей, уточняется.",
      },
      story: null,
      photo: null,
    },
  },

  // Product names are not translated; their one-line roles live in i18n.js.
  // Footer links. A link appears only when `url` is set to a verified live page.
  // Datum Space: the credit needs WIWI's approval before any production publication.
  footerLinks: [
    { label: "footer.wiwi", url: "https://wiwi.ge/" },
    { label: "footer.uvamo", url: null }, // UVAMO! public landing — to be confirmed
    { label: "footer.datum", url: null }, // Datum Space website-development page — not yet published
  ],

  partners: [
    { name: "WIWI Tours", role: "partner.wiwi" },
    { name: "UVAMO!", role: "partner.uvamo", url: "https://app.uvamo.cc/" },
    { name: "Clavelo", role: "partner.clavelo", url: "https://app.clavelo.cc/" },
  ],
};
