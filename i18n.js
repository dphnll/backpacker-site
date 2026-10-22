(() => {
  "use strict";

  const SUPPORTED_LOCALES = ["ru", "en", "fr", "ka", "de", "hy", "zh"];
  const STORAGE_KEY = "backpacker.landing.locale";
  const APP_URL = "https://app.clavelo.cc/";
  const CONTACT_EMAIL = "hello@clavelo.cc";

  const TRANSLATIONS = {
    en: {
      "meta.title": "Clavelo – your trips and group programs",
      "meta.description": "Plan your own trips or prepare programs for other people. Tickets, meetings, stays, places and key details – in one clear plan.",
      "meta.ogTitle": "Clavelo – your trips and group programs",
      "meta.ogDescription": "Plan your own trips or prepare programs for other people. Tickets, meetings, stays, places and key details – in one clear plan.",
      skip: "Skip to content",
      "language.label": "Language",
      "nav.label": "Sections",
      "nav.travel": "I travel",
      "nav.organize": "I organize",
      "nav.participate": "I take part",
      "action.openShort": "Open",
      "hero.kicker": "For your own trips and for groups",
      "hero.title": "The trip is ready. Everyone knows what’s next",
      "hero.lead": "Plan your own trips or prepare programs for other people. Tickets, meetings, stays, places and key details – in one clear plan.",
      "hero.toOrganizers": "For organizers",
      "hero.note": "Works in the browser. You can start without signing up",
      "hero.planLabel": "Your plan",
      "hero.planAlt": "Tbilisi visit planned by day: transfers, hotel and dinners with the organizer’s budget.",
      "roles.title": "Who are you on this trip?",
      "roles.lead": "One person can organize one trip and take part in another. Clavelo shows each of them exactly what they need.",
      "roles.travel.name": "I travel",
      "roles.travel.body": "My plans, bookings, places I like, documents and budget – together",
      "roles.travel.link": "Your own trip",
      "roles.organize.name": "I organize",
      "roles.organize.body": "One program for the people I host or accompany",
      "roles.organize.link": "A program for a group",
      "roles.participate.name": "I take part",
      "roles.participate.body": "I know where, when and what happens, because the program is at hand",
      "roles.participate.link": "The participant’s program",
      "org.kicker": "For organizers",
      "org.title": "You prepare the program. Guests know what to expect",
      "org.lead": "For anyone who hosts guests, leads a group or puts together a visit program",
      "org.audienceLabel": "Who it is for",
      "org.who.guides": "Guides and tour operators",
      "org.who.hospitality": "Hospitality managers",
      "org.who.business": "Business trips and visits",
      "org.who.events": "Group and event coordinators",
      "org.who.family": "Trips for family and friends",
      "org.step1.title": "Build the program",
      "org.step1.body": "Arrival, transfers, stays, meetings, events and departure – by day and by time. Prices, bookings and notes stay with you.",
      "org.step2.title": "Share it with participants",
      "org.step2.body": "One link to the published program. It has times, places, price, what is included and the materials they need.",
      "org.step3.title": "Update it as plans change",
      "org.step3.body": "A time moved or a place changed? Edit the program. From the same link, participants open the current version and see when it was updated.",
      "org.panelAlt": "Organizer panel: the list of joined participants and the participant link.",
      "org.panelCaption": "Who has joined and the participant link",
      "org.mirror.title": "One program, two sides",
      "org.mirror.organizer": "The organizer fills in",
      "org.mirror.organizerAlt": "The organizer’s form: price per person, currency, what is included, what is not, important information.",
      "org.mirror.link": "one link",
      "org.mirror.participant": "The participant sees",
      "org.mirror.participantAlt": "The participant’s “About the program” block: price, included and not included, important information and materials.",
      "org.privacy": "Your internal budget stays yours. Participants see the program and the terms, not your costs",
      "org.cta": "Create a program in Clavelo",
      "org.pilot": "Discuss a pilot",
      "org.howto": "Organizer mode is turned on inside a trip: “Share trip” → “Run a trip for a group”. It requires signing in with email.",
      "guest.kicker": "For guests and participants",
      "guest.title": "You’ve landed. The program is already on your phone",
      "guest.lead": "The organizer sent a link – it has everything you need for the coming days",
      "guest.where.title": "Where and when",
      "guest.where.body": "Meetings, transfers and events by day – with times and places",
      "guest.included.title": "What is included",
      "guest.included.body": "Price, what is and isn’t included, what to know in advance",
      "guest.materials.title": "Materials",
      "guest.materials.body": "Guides, maps and documents the organizer shared with the group",
      "guest.note": "You can view the program from the link without signing up. To join the group and keep the program in your list, you need an email and a name.",
      "guest.daysAlt": "Three days of the Tbilisi visit for a participant: airport meeting, hotel, working meeting, Old Town walk, Mtskheta and the airport transfer.",
      "guest.example": "Example: three days in Tbilisi, made-up data",
      "travel.kicker": "For your own trips",
      "travel.title": "Your trip. Your pace",
      "travel.lead": "Gather what you’ve found, lay it out by day and keep it at hand on the road",
      "travel.collect.title": "Collect",
      "travel.collect.body": "Describe the trip by text or voice – Clavelo builds a draft from your words only. Save finds from websites with the Chrome extension.",
      "travel.extension": "Clavelo Travel Capture for Chrome",
      "travel.arrange.title": "Lay it out",
      "travel.arrange.body": "Every event is a card with time, price, booking and files. Plans changed? Drag the card to another day.",
      "travel.use.title": "Use it on the trip",
      "travel.use.body": "Tickets, addresses and bookings open from your phone. Totals for each day and the whole trip add up on their own.",
      "closing.title": "Where shall we start?",
      "closing.travel.title": "Plan a trip",
      "closing.travel.body": "Open Clavelo in the browser and start from a draft or an empty trip",
      "closing.pilot.title": "Discuss a pilot for a group",
      "closing.pilot.body": "Do you host guests or lead groups? Write to us and we’ll go through your scenario together",
      "closing.pilot.cta": "Write to us",
      "closing.note": "The app is available in Russian, English, French, Georgian, German, Armenian and Simplified Chinese",
      "pilot.subject": "Clavelo: a pilot for a group",
      "photo.street.alt": "A traveler with a backpack checks her plan on her phone in an old-town street",
      "photo.group.alt": "A group with luggage boards a minibus before departure",
      "photo.airport.alt": "A host with a name sign welcomes a family in the arrivals hall",
      "photo.cafe.alt": "A woman at a street café writes trip ideas in her notebook",
      "action.open": "Open Clavelo",
      "footer.privacy": "Privacy Policy",
      "travel.collect.linkAria": "Open Clavelo and create a trip draft",
      "travel.collect.imageAlt": "Trip draft screen with a text field and voice input action.",
      "travel.arrange.linkAria": "Open Clavelo and plan the trip by day",
      "travel.arrange.imageAlt": "Two days of a trip plan shown as event cards.",
      "travel.use.linkAria": "Open Clavelo and view the trip budget",
      "travel.use.imageAlt": "Trip budget summary with totals for paid, reserved and available amounts.",
    },
    ru: {
      "meta.title": "Clavelo – свои поездки и программы для групп",
      "meta.description": "Планируйте собственные путешествия или готовьте программы для других. Билеты, встречи, жильё, места и важные детали – в одном понятном плане.",
      "meta.ogTitle": "Clavelo – свои поездки и программы для групп",
      "meta.ogDescription": "Планируйте собственные путешествия или готовьте программы для других. Билеты, встречи, жильё, места и важные детали – в одном понятном плане.",
      skip: "Перейти к содержанию",
      "language.label": "Язык",
      "nav.label": "Разделы",
      "nav.travel": "Путешествую",
      "nav.organize": "Организую",
      "nav.participate": "Участвую",
      "action.openShort": "Открыть",
      "hero.kicker": "Для своих поездок и для групп",
      "hero.title": "Поездка собрана. Все знают, что дальше",
      "hero.lead": "Планируйте собственные путешествия или готовьте программы для других. Билеты, встречи, жильё, места и важные детали – в одном понятном плане.",
      "hero.toOrganizers": "Для организаторов",
      "hero.note": "Работает в браузере. Начать можно без регистрации",
      "hero.planLabel": "Ваш план",
      "hero.planAlt": "План визита в Тбилиси по дням: трансферы, отель и ужины со сметой организатора.",
      "roles.title": "Кто вы в этой поездке?",
      "roles.lead": "Один человек может организовывать одну поездку и участвовать в другой. Clavelo показывает каждому то, что нужно именно ему.",
      "roles.travel.name": "Путешествую",
      "roles.travel.body": "Мои планы, бронирования, интересные места, документы и бюджет – вместе",
      "roles.travel.link": "Своя поездка",
      "roles.organize.name": "Организую",
      "roles.organize.body": "Одна программа для тех, кого я принимаю или сопровождаю",
      "roles.organize.link": "Программа для группы",
      "roles.participate.name": "Участвую",
      "roles.participate.body": "Я знаю, где, когда и что происходит, потому что программа под рукой",
      "roles.participate.link": "Программа участника",
      "org.kicker": "Для организаторов",
      "org.title": "Вы готовите программу. Гости знают, что их ждёт",
      "org.lead": "Для тех, кто принимает гостей, ведёт группу или собирает программу визита",
      "org.audienceLabel": "Для кого",
      "org.who.guides": "Гиды и туроператоры",
      "org.who.hospitality": "Hospitality-менеджеры",
      "org.who.business": "Деловые поездки и визиты",
      "org.who.events": "Координаторы групп и мероприятий",
      "org.who.family": "Поездки для семьи и друзей",
      "org.step1.title": "Соберите программу",
      "org.step1.body": "Приезд, трансферы, размещение, встречи, мероприятия и отъезд – по дням и по времени. Цены, брони и заметки остаются у вас.",
      "org.step2.title": "Передайте участникам",
      "org.step2.body": "Одна ссылка на опубликованную программу. В ней время, места, стоимость, что включено и нужные материалы.",
      "org.step3.title": "Обновляйте по мере изменений",
      "org.step3.body": "Сдвинулось время или поменялось место? Поправьте программу. По той же ссылке участник откроет актуальную версию и увидит дату обновления.",
      "org.panelAlt": "Панель организатора: список присоединившихся участников и ссылка для участников.",
      "org.panelCaption": "Кто присоединился и ссылка для участников",
      "org.mirror.title": "Одна программа – две стороны",
      "org.mirror.organizer": "Заполняет организатор",
      "org.mirror.organizerAlt": "Форма организатора: стоимость на человека, валюта, что включено, что не включено, что важно знать.",
      "org.mirror.link": "одна ссылка",
      "org.mirror.participant": "Видит участник",
      "org.mirror.participantAlt": "Блок «О программе» у участника: стоимость, что включено и не включено, что важно знать, материалы.",
      "org.privacy": "Внутренний бюджет остаётся вашим. Участники видят программу и условия, но не ваши расходы",
      "org.cta": "Создать программу в Clavelo",
      "org.pilot": "Обсудить пилот",
      "org.howto": "Режим организатора включается внутри поездки: «Поделиться поездкой» → «Вести поездку для группы». Для него нужен вход по email.",
      "guest.kicker": "Для гостей и участников",
      "guest.title": "Вы прилетели. Программа уже в телефоне",
      "guest.lead": "Организатор прислал ссылку – в ней всё, что нужно на ближайшие дни",
      "guest.where.title": "Где и когда",
      "guest.where.body": "Встречи, трансферы и мероприятия по дням – со временем и местами",
      "guest.included.title": "Что включено",
      "guest.included.body": "Стоимость, что входит и не входит, что важно знать заранее",
      "guest.materials.title": "Материалы",
      "guest.materials.body": "Памятки, схемы и документы, которые организатор выложил для группы",
      "guest.note": "Посмотреть программу по ссылке можно без регистрации. Чтобы присоединиться к группе и сохранить программу у себя, нужны email и имя.",
      "guest.daysAlt": "Три дня визита в Тбилиси у участника: встреча в аэропорту, отель, рабочая встреча, прогулка по Старому городу, Мцхета и трансфер в аэропорт.",
      "guest.example": "Пример: три дня в Тбилиси, данные вымышленные",
      "travel.kicker": "Для своих поездок",
      "travel.title": "Своя поездка. Свой темп",
      "travel.lead": "Соберите всё, что нашли, разложите по дням и держите под рукой в дороге",
      "travel.collect.title": "Собрать",
      "travel.collect.body": "Расскажите о поездке текстом или голосом – Clavelo соберёт черновик только из ваших слов. Находки с сайтов сохраняйте расширением для Chrome.",
      "travel.extension": "Clavelo Travel Capture для Chrome",
      "travel.arrange.title": "Разложить",
      "travel.arrange.body": "Каждое событие – карточка со временем, ценой, бронью и файлами. Планы поменялись? Перетащите карточку в другой день.",
      "travel.use.title": "Пользоваться в поездке",
      "travel.use.body": "Билеты, адреса и брони открываются с телефона. Итог по дню и по всей поездке считается сам.",
      "closing.title": "С чего начнём?",
      "closing.travel.title": "Спланировать поездку",
      "closing.travel.body": "Откройте Clavelo в браузере и начните с черновика или пустой поездки",
      "closing.pilot.title": "Обсудить пилот для группы",
      "closing.pilot.body": "Принимаете гостей или ведёте группы? Напишите нам – разберём ваш сценарий вместе",
      "closing.pilot.cta": "Написать нам",
      "closing.note": "Приложение доступно на русском, английском, французском, грузинском, немецком, армянском и упрощённом китайском",
      "pilot.subject": "Clavelo: пилот для группы",
      "photo.street.alt": "Путешественница с рюкзаком сверяется с планом в телефоне на улице старого города",
      "photo.group.alt": "Группа с багажом садится в микроавтобус перед выездом",
      "photo.airport.alt": "Встречающий с табличкой приветствует семью в зале прилёта",
      "photo.cafe.alt": "Женщина в уличном кафе записывает идеи для поездки в блокнот",
      "action.open": "Открыть Clavelo",
      "footer.privacy": "Политика конфиденциальности",
      "travel.collect.linkAria": "Открыть Clavelo и собрать черновик поездки",
      "travel.collect.imageAlt": "Фрагмент экрана AI-черновика: поле для описания поездки своими словами и кнопка «Надиктовать».",
      "travel.arrange.linkAria": "Открыть Clavelo и разложить поездку по дням",
      "travel.arrange.imageAlt": "Два дня плана подряд: «День 1 · 25 500 ₽» с карточками «Билет» и «Жильё» и «День 2 · 7 500 ₽» с карточками «Экскурсия» и «Баня/спа»; ленты прокручиваются вбок.",
      "travel.use.linkAria": "Открыть Clavelo и посмотреть бюджет поездки",
      "travel.use.imageAlt": "Фрагмент экрана бюджета: «Бюджет поездки 45 000 ₽», «Оплачено 16 500 ₽», «Бронь 13 000 ₽», «Свободно 15 500 ₽».",
    },
    fr: {
      "meta.title": "Clavelo – vos voyages et des programmes de groupe",
      "meta.description": "Planifiez vos propres voyages ou préparez des programmes pour d’autres. Billets, rendez-vous, hébergements, lieux et détails importants – dans un plan clair.",
      "meta.ogTitle": "Clavelo – vos voyages et des programmes de groupe",
      "meta.ogDescription": "Planifiez vos propres voyages ou préparez des programmes pour d’autres. Billets, rendez-vous, hébergements, lieux et détails importants – dans un plan clair.",
      skip: "Aller au contenu",
      "language.label": "Langue",
      "nav.label": "Sections",
      "nav.travel": "Je voyage",
      "nav.organize": "J’organise",
      "nav.participate": "Je participe",
      "action.openShort": "Ouvrir",
      "hero.kicker": "Pour vos voyages et pour les groupes",
      "hero.title": "Le voyage est prêt. Chacun sait ce qui l’attend",
      "hero.lead": "Planifiez vos propres voyages ou préparez des programmes pour d’autres. Billets, rendez-vous, hébergements, lieux et détails importants – dans un plan clair.",
      "hero.toOrganizers": "Pour les organisateurs",
      "hero.note": "Fonctionne dans le navigateur. Vous pouvez commencer sans inscription",
      "hero.planLabel": "Votre plan",
      "hero.planAlt": "Visite à Tbilissi jour par jour : transferts, hôtel et dîners avec le budget de l’organisateur.",
      "roles.title": "Qui êtes-vous dans ce voyage ?",
      "roles.lead": "Une même personne peut organiser un voyage et participer à un autre. Clavelo montre à chacun exactement ce dont il a besoin.",
      "roles.travel.name": "Je voyage",
      "roles.travel.body": "Mes projets, réservations, adresses repérées, documents et budget – ensemble",
      "roles.travel.link": "Votre propre voyage",
      "roles.organize.name": "J’organise",
      "roles.organize.body": "Un seul programme pour les personnes que j’accueille ou que j’accompagne",
      "roles.organize.link": "Un programme de groupe",
      "roles.participate.name": "Je participe",
      "roles.participate.body": "Je sais où, quand et ce qui se passe, car le programme est à portée de main",
      "roles.participate.link": "Le programme du participant",
      "org.kicker": "Pour les organisateurs",
      "org.title": "Vous préparez le programme. Vos invités savent à quoi s’attendre",
      "org.lead": "Pour celles et ceux qui accueillent des invités, guident un groupe ou montent un programme de visite",
      "org.audienceLabel": "Pour qui",
      "org.who.guides": "Guides et voyagistes",
      "org.who.hospitality": "Responsables de l’accueil",
      "org.who.business": "Voyages d’affaires et visites",
      "org.who.events": "Coordinateurs de groupes et d’événements",
      "org.who.family": "Voyages en famille ou entre amis",
      "org.step1.title": "Construisez le programme",
      "org.step1.body": "Arrivée, transferts, hébergement, rendez-vous, événements et départ – par jour et par heure. Les prix, réservations et notes restent chez vous.",
      "org.step2.title": "Partagez-le avec les participants",
      "org.step2.body": "Un seul lien vers le programme publié. On y trouve les horaires, les lieux, le prix, ce qui est inclus et les documents utiles.",
      "org.step3.title": "Mettez-le à jour au fil des changements",
      "org.step3.body": "Un horaire bouge ou un lieu change ? Modifiez le programme. Avec le même lien, le participant ouvre la version actuelle et voit la date de mise à jour.",
      "org.panelAlt": "Panneau de l’organisateur : la liste des participants inscrits et le lien pour les participants.",
      "org.panelCaption": "Qui a rejoint le groupe et le lien pour les participants",
      "org.mirror.title": "Un programme, deux côtés",
      "org.mirror.organizer": "L’organisateur remplit",
      "org.mirror.organizerAlt": "Formulaire de l’organisateur : prix par personne, devise, inclus, non inclus, informations importantes.",
      "org.mirror.link": "un seul lien",
      "org.mirror.participant": "Le participant voit",
      "org.mirror.participantAlt": "Le bloc « À propos du programme » côté participant : prix, inclus et non inclus, informations importantes, documents.",
      "org.privacy": "Votre budget interne reste le vôtre. Les participants voient le programme et les conditions, pas vos dépenses",
      "org.cta": "Créer un programme dans Clavelo",
      "org.pilot": "Parler d’un pilote",
      "org.howto": "Le mode organisateur s’active dans un voyage : « Partager le voyage » → « Organiser un voyage pour un groupe ». Il faut se connecter avec un e-mail.",
      "guest.kicker": "Pour les invités et les participants",
      "guest.title": "Vous venez d’atterrir. Le programme est déjà dans votre téléphone",
      "guest.lead": "L’organisateur vous a envoyé un lien – il contient tout ce qu’il faut pour les prochains jours",
      "guest.where.title": "Où et quand",
      "guest.where.body": "Rendez-vous, transferts et événements jour par jour – avec horaires et lieux",
      "guest.included.title": "Ce qui est inclus",
      "guest.included.body": "Le prix, ce qui est inclus ou non, ce qu’il faut savoir à l’avance",
      "guest.materials.title": "Documents",
      "guest.materials.body": "Mémos, plans et documents que l’organisateur a partagés avec le groupe",
      "guest.note": "Vous pouvez consulter le programme depuis le lien sans inscription. Pour rejoindre le groupe et garder le programme dans votre liste, il faut un e-mail et un nom.",
      "guest.daysAlt": "Trois jours de visite à Tbilissi côté participant : accueil à l’aéroport, hôtel, réunion de travail, balade dans la vieille ville, Mtskheta et transfert vers l’aéroport.",
      "guest.example": "Exemple : trois jours à Tbilissi, données fictives",
      "travel.kicker": "Pour vos propres voyages",
      "travel.title": "Votre voyage. Votre rythme",
      "travel.lead": "Rassemblez vos trouvailles, répartissez-les par jour et gardez-les sous la main en route",
      "travel.collect.title": "Rassembler",
      "travel.collect.body": "Décrivez le voyage par écrit ou à la voix – Clavelo prépare un brouillon uniquement à partir de vos mots. Enregistrez vos trouvailles sur les sites avec l’extension Chrome.",
      "travel.extension": "Clavelo Travel Capture pour Chrome",
      "travel.arrange.title": "Organiser",
      "travel.arrange.body": "Chaque événement est une carte avec l’heure, le prix, la réservation et les fichiers. Les plans changent ? Glissez la carte vers un autre jour.",
      "travel.use.title": "Utiliser en voyage",
      "travel.use.body": "Billets, adresses et réservations s’ouvrent sur votre téléphone. Les totaux par jour et pour tout le voyage se calculent tout seuls.",
      "closing.title": "Par quoi commencer ?",
      "closing.travel.title": "Planifier un voyage",
      "closing.travel.body": "Ouvrez Clavelo dans le navigateur et partez d’un brouillon ou d’un voyage vide",
      "closing.pilot.title": "Parler d’un pilote pour un groupe",
      "closing.pilot.body": "Vous accueillez des invités ou guidez des groupes ? Écrivez-nous et examinons votre cas ensemble",
      "closing.pilot.cta": "Nous écrire",
      "closing.note": "L’application est disponible en russe, anglais, français, géorgien, allemand, arménien et chinois simplifié",
      "pilot.subject": "Clavelo : un pilote pour un groupe",
      "photo.street.alt": "Une voyageuse sac au dos consulte son programme sur son téléphone dans une rue de vieille ville",
      "photo.group.alt": "Un groupe avec ses bagages monte dans un minibus avant le départ",
      "photo.airport.alt": "Un accompagnateur avec une pancarte accueille une famille dans le hall des arrivées",
      "photo.cafe.alt": "Une femme à la terrasse d’un café note des idées de voyage dans son carnet",
      "action.open": "Ouvrir Clavelo",
      "footer.privacy": "Politique de confidentialité",
      "travel.collect.linkAria": "Ouvrir Clavelo et créer un brouillon de voyage",
      "travel.collect.imageAlt": "Écran de brouillon de voyage avec un champ de texte et une saisie vocale.",
      "travel.arrange.linkAria": "Ouvrir Clavelo et organiser le voyage par jour",
      "travel.arrange.imageAlt": "Deux journées d’un programme de voyage présentées sous forme de cartes.",
      "travel.use.linkAria": "Ouvrir Clavelo et consulter le budget du voyage",
      "travel.use.imageAlt": "Récapitulatif du budget avec les montants payés, réservés et disponibles.",
    },
    ka: {
      "meta.title": "Clavelo – საკუთარი მოგზაურობები და პროგრამები ჯგუფებისთვის",
      "meta.description": "დაგეგმეთ საკუთარი მოგზაურობები ან მოამზადეთ პროგრამები სხვებისთვის. ბილეთები, შეხვედრები, საცხოვრებელი, ადგილები და მნიშვნელოვანი დეტალები – ერთ გასაგებ გეგმაში.",
      "meta.ogTitle": "Clavelo – საკუთარი მოგზაურობები და პროგრამები ჯგუფებისთვის",
      "meta.ogDescription": "დაგეგმეთ საკუთარი მოგზაურობები ან მოამზადეთ პროგრამები სხვებისთვის. ბილეთები, შეხვედრები, საცხოვრებელი, ადგილები და მნიშვნელოვანი დეტალები – ერთ გასაგებ გეგმაში.",
      skip: "შინაარსზე გადასვლა",
      "language.label": "ენა",
      "nav.label": "განყოფილებები",
      "nav.travel": "ვმოგზაურობ",
      "nav.organize": "ვაწყობ",
      "nav.participate": "ვმონაწილეობ",
      "action.openShort": "გახსნა",
      "hero.kicker": "საკუთარი მოგზაურობებისთვის და ჯგუფებისთვის",
      "hero.title": "მოგზაურობა მზადაა. ყველამ იცის, რა იქნება შემდეგ",
      "hero.lead": "დაგეგმეთ საკუთარი მოგზაურობები ან მოამზადეთ პროგრამები სხვებისთვის. ბილეთები, შეხვედრები, საცხოვრებელი, ადგილები და მნიშვნელოვანი დეტალები – ერთ გასაგებ გეგმაში.",
      "hero.toOrganizers": "ორგანიზატორებისთვის",
      "hero.note": "მუშაობს ბრაუზერში. დაწყება რეგისტრაციის გარეშეც შეიძლება",
      "hero.planLabel": "თქვენი გეგმა",
      "hero.planAlt": "ვიზიტი თბილისში დღეების მიხედვით: ტრანსფერები, სასტუმრო და ვახშმები ორგანიზატორის ბიუჯეტით.",
      "roles.title": "ვინ ხართ ამ მოგზაურობაში?",
      "roles.lead": "ერთ ადამიანს შეუძლია ერთი მოგზაურობის ორგანიზება და მეორეში მონაწილეობა. Clavelo თითოეულს აჩვენებს ზუსტად იმას, რაც მას სჭირდება.",
      "roles.travel.name": "ვმოგზაურობ",
      "roles.travel.body": "ჩემი გეგმები, ჯავშნები, საინტერესო ადგილები, დოკუმენტები და ბიუჯეტი – ერთად",
      "roles.travel.link": "საკუთარი მოგზაურობა",
      "roles.organize.name": "ვაწყობ",
      "roles.organize.body": "ერთი პროგრამა მათთვის, ვისაც ვმასპინძლობ ან ვახლავარ",
      "roles.organize.link": "პროგრამა ჯგუფისთვის",
      "roles.participate.name": "ვმონაწილეობ",
      "roles.participate.body": "ვიცი, სად, როდის და რა ხდება, რადგან პროგრამა ხელთ მაქვს",
      "roles.participate.link": "მონაწილის პროგრამა",
      "org.kicker": "ორგანიზატორებისთვის",
      "org.title": "თქვენ ამზადებთ პროგრამას. სტუმრებმა იციან, რა ელით",
      "org.lead": "მათთვის, ვინც სტუმრებს მასპინძლობს, ჯგუფს უძღვება ან ვიზიტის პროგრამას ადგენს",
      "org.audienceLabel": "ვისთვის",
      "org.who.guides": "გიდები და ტუროპერატორები",
      "org.who.hospitality": "Hospitality-მენეჯერები",
      "org.who.business": "საქმიანი მოგზაურობები და ვიზიტები",
      "org.who.events": "ჯგუფებისა და ღონისძიებების კოორდინატორები",
      "org.who.family": "მოგზაურობა ოჯახთან ან მეგობრებთან ერთად",
      "org.step1.title": "შეადგინეთ პროგრამა",
      "org.step1.body": "ჩამოსვლა, ტრანსფერები, განთავსება, შეხვედრები, ღონისძიებები და გამგზავრება – დღეებისა და დროის მიხედვით. ფასები, ჯავშნები და შენიშვნები თქვენთან რჩება.",
      "org.step2.title": "გაუზიარეთ მონაწილეებს",
      "org.step2.body": "ერთი ბმული გამოქვეყნებულ პროგრამაზე. მასშია დრო, ადგილები, ფასი, რა შედის და საჭირო მასალები.",
      "org.step3.title": "განაახლეთ ცვლილებებისას",
      "org.step3.body": "დრო ან ადგილი შეიცვალა? შეასწორეთ პროგრამა. იმავე ბმულით მონაწილე გახსნის აქტუალურ ვერსიას და დაინახავს განახლების თარიღს.",
      "org.panelAlt": "ორგანიზატორის პანელი: შემოერთებული მონაწილეების სია და ბმული მონაწილეებისთვის.",
      "org.panelCaption": "ვინ შემოუერთდა და ბმული მონაწილეებისთვის",
      "org.mirror.title": "ერთი პროგრამა – ორი მხარე",
      "org.mirror.organizer": "ავსებს ორგანიზატორი",
      "org.mirror.organizerAlt": "ორგანიზატორის ფორმა: ფასი ერთ ადამიანზე, ვალუტა, რა შედის, რა არ შედის, რა უნდა იცოდეთ.",
      "org.mirror.link": "ერთი ბმული",
      "org.mirror.participant": "ხედავს მონაწილე",
      "org.mirror.participantAlt": "ბლოკი „პროგრამის შესახებ“ მონაწილესთან: ფასი, რა შედის და რა არა, მნიშვნელოვანი ინფორმაცია, მასალები.",
      "org.privacy": "შიდა ბიუჯეტი თქვენთან რჩება. მონაწილეები ხედავენ პროგრამასა და პირობებს, მაგრამ არა თქვენს ხარჯებს",
      "org.cta": "შექმენით პროგრამა Clavelo-ში",
      "org.pilot": "პილოტის განხილვა",
      "org.howto": "ორგანიზატორის რეჟიმი მოგზაურობის შიგნით ირთვება: „გააზიარეთ მოგზაურობა“ → „აწარმოეთ მოგზაურობა ჯგუფისთვის“. ამისთვის საჭიროა შესვლა email-ით.",
      "guest.kicker": "სტუმრებისა და მონაწილეებისთვის",
      "guest.title": "ჩამოფრინდით. პროგრამა უკვე ტელეფონშია",
      "guest.lead": "ორგანიზატორმა ბმული გამოგიგზავნათ – მასშია ყველაფერი, რაც უახლოეს დღეებში დაგჭირდებათ",
      "guest.where.title": "სად და როდის",
      "guest.where.body": "შეხვედრები, ტრანსფერები და ღონისძიებები დღეების მიხედვით – დროითა და ადგილებით",
      "guest.included.title": "რა შედის",
      "guest.included.body": "ფასი, რა შედის და რა არა, რა უნდა იცოდეთ წინასწარ",
      "guest.materials.title": "მასალები",
      "guest.materials.body": "მემოები, რუკები და დოკუმენტები, რომლებიც ორგანიზატორმა ჯგუფს გაუზიარა",
      "guest.note": "პროგრამის ნახვა ბმულით რეგისტრაციის გარეშეც შეიძლება. ჯგუფთან შესაერთებლად და პროგრამის შესანახად საჭიროა email და სახელი.",
      "guest.daysAlt": "თბილისის ვიზიტის სამი დღე მონაწილესთან: შეხვედრა აეროპორტში, სასტუმრო, სამუშაო შეხვედრა, გასეირნება ძველ თბილისში, მცხეთა და ტრანსფერი აეროპორტში.",
      "guest.example": "მაგალითი: სამი დღე თბილისში, მონაცემები გამოგონილია",
      "travel.kicker": "საკუთარი მოგზაურობებისთვის",
      "travel.title": "თქვენი მოგზაურობა. თქვენი რიტმი",
      "travel.lead": "შეაგროვეთ ნაპოვნი, დაალაგეთ დღეების მიხედვით და გზაში ხელთ გქონდეთ",
      "travel.collect.title": "შეგროვება",
      "travel.collect.body": "აღწერეთ მოგზაურობა ტექსტით ან ხმით – Clavelo მონახაზს მხოლოდ თქვენი სიტყვებიდან ააწყობს. საიტებზე ნაპოვნი შეინახეთ Chrome-ის გაფართოებით.",
      "travel.extension": "Clavelo Travel Capture Chrome-ისთვის",
      "travel.arrange.title": "დალაგება",
      "travel.arrange.body": "ყოველი მოვლენა ბარათია დროით, ფასით, ჯავშნითა და ფაილებით. გეგმები შეიცვალა? გადაიტანეთ ბარათი სხვა დღეზე.",
      "travel.use.title": "გამოყენება მოგზაურობისას",
      "travel.use.body": "ბილეთები, მისამართები და ჯავშნები ტელეფონიდან იხსნება. დღისა და მთელი მოგზაურობის ჯამი თავისით ითვლება.",
      "closing.title": "საიდან დავიწყოთ?",
      "closing.travel.title": "მოგზაურობის დაგეგმვა",
      "closing.travel.body": "გახსენით Clavelo ბრაუზერში და დაიწყეთ მონახაზით ან ცარიელი მოგზაურობით",
      "closing.pilot.title": "ჯგუფისთვის პილოტის განხილვა",
      "closing.pilot.body": "სტუმრებს მასპინძლობთ ან ჯგუფებს უძღვებით? მოგვწერეთ – ერთად განვიხილავთ თქვენს სცენარს",
      "closing.pilot.cta": "მოგვწერეთ",
      "closing.note": "აპლიკაცია ხელმისაწვდომია რუსულ, ინგლისურ, ფრანგულ, ქართულ, გერმანულ, სომხურ და გამარტივებულ ჩინურ ენებზე",
      "pilot.subject": "Clavelo: პილოტი ჯგუფისთვის",
      "photo.street.alt": "ზურგჩანთიანი მოგზაური ძველი ქალაქის ქუჩაზე ტელეფონში გეგმას ამოწმებს",
      "photo.group.alt": "ჯგუფი ბარგით გამგზავრებამდე მიკროავტობუსში სხდება",
      "photo.airport.alt": "დამხვედრი დაფით ოჯახს ჩამოსვლის დარბაზში ხვდება",
      "photo.cafe.alt": "ქალი ქუჩის კაფეში მოგზაურობის იდეებს რვეულში იწერს",
      "action.open": "Clavelo-ის გახსნა",
      "footer.privacy": "კონფიდენციალურობის პოლიტიკა",
      "travel.collect.linkAria": "Clavelo-ის გახსნა და მოგზაურობის მონახაზის შექმნა",
      "travel.collect.imageAlt": "მოგზაურობის მონახაზის ეკრანი ტექსტის ველითა და ხმოვანი შეყვანით.",
      "travel.arrange.linkAria": "Clavelo-ის გახსნა და მოგზაურობის დღეების მიხედვით დაგეგმვა",
      "travel.arrange.imageAlt": "მოგზაურობის გეგმის ორი დღე მოვლენების ბარათებით.",
      "travel.use.linkAria": "Clavelo-ის გახსნა და მოგზაურობის ბიუჯეტის ნახვა",
      "travel.use.imageAlt": "მოგზაურობის ბიუჯეტის შეჯამება გადახდილი, დაჯავშნილი და ხელმისაწვდომი თანხებით.",
    },
    de: {
      "meta.title": "Clavelo – eigene Reisen und Programme für Gruppen",
      "meta.description": "Plane deine eigenen Reisen oder bereite Programme für andere vor. Tickets, Termine, Unterkünfte, Orte und wichtige Details – in einem klaren Plan.",
      "meta.ogTitle": "Clavelo – eigene Reisen und Programme für Gruppen",
      "meta.ogDescription": "Plane deine eigenen Reisen oder bereite Programme für andere vor. Tickets, Termine, Unterkünfte, Orte und wichtige Details – in einem klaren Plan.",
      skip: "Zum Inhalt springen",
      "language.label": "Sprache",
      "nav.label": "Bereiche",
      "nav.travel": "Ich reise",
      "nav.organize": "Ich organisiere",
      "nav.participate": "Ich nehme teil",
      "action.openShort": "Öffnen",
      "hero.kicker": "Für eigene Reisen und für Gruppen",
      "hero.title": "Die Reise steht. Alle wissen, was als Nächstes kommt",
      "hero.lead": "Plane deine eigenen Reisen oder bereite Programme für andere vor. Tickets, Termine, Unterkünfte, Orte und wichtige Details – in einem klaren Plan.",
      "hero.toOrganizers": "Für Veranstalter",
      "hero.note": "Läuft im Browser. Du kannst ohne Registrierung starten",
      "hero.planLabel": "Dein Plan",
      "hero.planAlt": "Besuch in Tiflis nach Tagen: Transfers, Hotel und Abendessen mit dem Budget des Veranstalters.",
      "roles.title": "Wer bist du auf dieser Reise?",
      "roles.lead": "Eine Person kann eine Reise organisieren und an einer anderen teilnehmen. Clavelo zeigt allen genau das, was sie brauchen.",
      "roles.travel.name": "Ich reise",
      "roles.travel.body": "Meine Pläne, Buchungen, Lieblingsorte, Dokumente und das Budget – zusammen",
      "roles.travel.link": "Die eigene Reise",
      "roles.organize.name": "Ich organisiere",
      "roles.organize.body": "Ein Programm für die Menschen, die ich empfange oder begleite",
      "roles.organize.link": "Ein Programm für die Gruppe",
      "roles.participate.name": "Ich nehme teil",
      "roles.participate.body": "Ich weiß, wo, wann und was passiert, weil das Programm zur Hand ist",
      "roles.participate.link": "Das Programm für Teilnehmende",
      "org.kicker": "Für Veranstalter",
      "org.title": "Du bereitest das Programm vor. Deine Gäste wissen, was sie erwartet",
      "org.lead": "Für alle, die Gäste empfangen, eine Gruppe begleiten oder ein Besuchsprogramm zusammenstellen",
      "org.audienceLabel": "Für wen",
      "org.who.guides": "Guides und Reiseveranstalter",
      "org.who.hospitality": "Hospitality-Manager",
      "org.who.business": "Geschäftsreisen und Besuche",
      "org.who.events": "Gruppen- und Eventkoordination",
      "org.who.family": "Reisen mit Familie oder Freunden",
      "org.step1.title": "Programm zusammenstellen",
      "org.step1.body": "Ankunft, Transfers, Unterkunft, Termine, Veranstaltungen und Abreise – nach Tag und Uhrzeit. Preise, Buchungen und Notizen bleiben bei dir.",
      "org.step2.title": "An Teilnehmende weitergeben",
      "org.step2.body": "Ein Link zum veröffentlichten Programm. Darin stehen Zeiten, Orte, Preis, Leistungen und die nötigen Unterlagen.",
      "org.step3.title": "Bei Änderungen aktualisieren",
      "org.step3.body": "Eine Uhrzeit verschiebt sich oder ein Ort ändert sich? Passe das Programm an. Über denselben Link öffnen Teilnehmende die aktuelle Version und sehen, wann sie aktualisiert wurde.",
      "org.panelAlt": "Veranstalter-Bereich: Liste der beigetretenen Teilnehmenden und Link für Teilnehmende.",
      "org.panelCaption": "Wer beigetreten ist und der Link für Teilnehmende",
      "org.mirror.title": "Ein Programm, zwei Seiten",
      "org.mirror.organizer": "Der Veranstalter trägt ein",
      "org.mirror.organizerAlt": "Formular des Veranstalters: Preis pro Person, Währung, inklusive, nicht inklusive, wichtige Hinweise.",
      "org.mirror.link": "ein Link",
      "org.mirror.participant": "Teilnehmende sehen",
      "org.mirror.participantAlt": "Der Bereich „Über das Programm“ für Teilnehmende: Preis, Leistungen, nicht enthaltene Leistungen, wichtige Hinweise, Unterlagen.",
      "org.privacy": "Dein internes Budget bleibt bei dir. Teilnehmende sehen Programm und Bedingungen, aber nicht deine Kosten",
      "org.cta": "Programm in Clavelo erstellen",
      "org.pilot": "Pilotprojekt besprechen",
      "org.howto": "Der Veranstaltermodus wird in einer Reise eingeschaltet: „Reise teilen“ → „Führen Sie eine Reise für eine Gruppe durch“. Dafür ist eine Anmeldung per E-Mail nötig.",
      "guest.kicker": "Für Gäste und Teilnehmende",
      "guest.title": "Du bist gelandet. Das Programm ist schon auf deinem Handy",
      "guest.lead": "Der Veranstalter hat dir einen Link geschickt – darin steht alles für die nächsten Tage",
      "guest.where.title": "Wo und wann",
      "guest.where.body": "Termine, Transfers und Veranstaltungen nach Tagen – mit Uhrzeiten und Orten",
      "guest.included.title": "Was enthalten ist",
      "guest.included.body": "Preis, was inklusive ist und was nicht, was du vorher wissen solltest",
      "guest.materials.title": "Unterlagen",
      "guest.materials.body": "Merkblätter, Pläne und Dokumente, die der Veranstalter für die Gruppe hochgeladen hat",
      "guest.note": "Das Programm kannst du über den Link ohne Registrierung ansehen. Um der Gruppe beizutreten und das Programm in deiner Liste zu behalten, brauchst du eine E-Mail-Adresse und einen Namen.",
      "guest.daysAlt": "Drei Tage des Besuchs in Tiflis für Teilnehmende: Abholung am Flughafen, Hotel, Arbeitstreffen, Altstadtrundgang, Mzcheta und Transfer zum Flughafen.",
      "guest.example": "Beispiel: drei Tage in Tiflis, erfundene Daten",
      "travel.kicker": "Für eigene Reisen",
      "travel.title": "Deine Reise. Dein Tempo",
      "travel.lead": "Sammle, was du gefunden hast, verteile es auf die Tage und hab es unterwegs zur Hand",
      "travel.collect.title": "Sammeln",
      "travel.collect.body": "Beschreibe die Reise per Text oder Sprache – Clavelo erstellt einen Entwurf nur aus deinen Worten. Fundstücke von Websites speicherst du mit der Chrome-Erweiterung.",
      "travel.extension": "Clavelo Travel Capture für Chrome",
      "travel.arrange.title": "Ordnen",
      "travel.arrange.body": "Jedes Ereignis ist eine Karte mit Uhrzeit, Preis, Buchung und Dateien. Pläne geändert? Zieh die Karte auf einen anderen Tag.",
      "travel.use.title": "Unterwegs nutzen",
      "travel.use.body": "Tickets, Adressen und Buchungen öffnest du auf dem Handy. Summen pro Tag und für die ganze Reise rechnen sich von selbst.",
      "closing.title": "Womit fangen wir an?",
      "closing.travel.title": "Eine Reise planen",
      "closing.travel.body": "Öffne Clavelo im Browser und starte mit einem Entwurf oder einer leeren Reise",
      "closing.pilot.title": "Ein Pilotprojekt für eine Gruppe besprechen",
      "closing.pilot.body": "Du empfängst Gäste oder begleitest Gruppen? Schreib uns – wir schauen uns dein Szenario gemeinsam an",
      "closing.pilot.cta": "Schreib uns",
      "closing.note": "Die App gibt es auf Russisch, Englisch, Französisch, Georgisch, Deutsch, Armenisch und vereinfachtem Chinesisch",
      "pilot.subject": "Clavelo: Pilotprojekt für eine Gruppe",
      "photo.street.alt": "Eine Reisende mit Rucksack prüft ihren Plan auf dem Handy in einer Altstadtgasse",
      "photo.group.alt": "Eine Gruppe mit Gepäck steigt vor der Abfahrt in einen Kleinbus",
      "photo.airport.alt": "Ein Gastgeber mit Namensschild begrüßt eine Familie in der Ankunftshalle",
      "photo.cafe.alt": "Eine Frau in einem Straßencafé notiert Reiseideen in ihr Notizbuch",
      "action.open": "Clavelo öffnen",
      "footer.privacy": "Datenschutzerklärung",
      "travel.collect.linkAria": "Clavelo öffnen und einen Reiseentwurf erstellen",
      "travel.collect.imageAlt": "Reiseentwurf mit Textfeld und Spracheingabe.",
      "travel.arrange.linkAria": "Clavelo öffnen und die Reise nach Tagen planen",
      "travel.arrange.imageAlt": "Zwei Tage eines Reiseplans als Ereigniskarten.",
      "travel.use.linkAria": "Clavelo öffnen und das Reisebudget ansehen",
      "travel.use.imageAlt": "Budgetübersicht mit bezahlten, reservierten und verfügbaren Beträgen.",
    },
    hy: {
      "meta.title": "Clavelo – սեփական ճամփորդություններ և ծրագրեր խմբերի համար",
      "meta.description": "Պլանավորեք ձեր սեփական ճամփորդությունները կամ պատրաստեք ծրագրեր ուրիշների համար։ Տոմսեր, հանդիպումներ, կացարան, վայրեր և կարևոր մանրամասներ – մեկ հստակ պլանում։",
      "meta.ogTitle": "Clavelo – սեփական ճամփորդություններ և ծրագրեր խմբերի համար",
      "meta.ogDescription": "Պլանավորեք ձեր սեփական ճամփորդությունները կամ պատրաստեք ծրագրեր ուրիշների համար։ Տոմսեր, հանդիպումներ, կացարան, վայրեր և կարևոր մանրամասներ – մեկ հստակ պլանում։",
      skip: "Անցնել բովանդակությանը",
      "language.label": "Լեզու",
      "nav.label": "Բաժիններ",
      "nav.travel": "Ճամփորդում եմ",
      "nav.organize": "Կազմակերպում եմ",
      "nav.participate": "Մասնակցում եմ",
      "action.openShort": "Բացել",
      "hero.kicker": "Սեփական ճամփորդությունների և խմբերի համար",
      "hero.title": "Ճամփորդությունը պատրաստ է։ Բոլորը գիտեն՝ ինչ է լինելու հետո",
      "hero.lead": "Պլանավորեք ձեր սեփական ճամփորդությունները կամ պատրաստեք ծրագրեր ուրիշների համար։ Տոմսեր, հանդիպումներ, կացարան, վայրեր և կարևոր մանրամասներ – մեկ հստակ պլանում։",
      "hero.toOrganizers": "Կազմակերպիչների համար",
      "hero.note": "Աշխատում է բրաուզերում։ Կարող եք սկսել առանց գրանցման",
      "hero.planLabel": "Ձեր պլանը",
      "hero.planAlt": "Այց Թբիլիսի՝ ըստ օրերի. տրանսֆերներ, հյուրանոց և ընթրիքներ՝ կազմակերպչի բյուջեով։",
      "roles.title": "Ո՞վ եք դուք այս ճամփորդության մեջ",
      "roles.lead": "Նույն մարդը կարող է կազմակերպել մի ճամփորդություն և մասնակցել մեկ ուրիշին։ Clavelo-ն յուրաքանչյուրին ցույց է տալիս հենց այն, ինչ իրեն պետք է։",
      "roles.travel.name": "Ճամփորդում եմ",
      "roles.travel.body": "Իմ պլանները, ամրագրումները, հետաքրքիր վայրերը, փաստաթղթերը և բյուջեն – միասին",
      "roles.travel.link": "Սեփական ճամփորդություն",
      "roles.organize.name": "Կազմակերպում եմ",
      "roles.organize.body": "Մեկ ծրագիր նրանց համար, ում ընդունում կամ ուղեկցում եմ",
      "roles.organize.link": "Ծրագիր խմբի համար",
      "roles.participate.name": "Մասնակցում եմ",
      "roles.participate.body": "Գիտեմ՝ որտեղ, երբ և ինչ է կատարվում, որովհետև ծրագիրը ձեռքի տակ է",
      "roles.participate.link": "Մասնակցի ծրագիրը",
      "org.kicker": "Կազմակերպիչների համար",
      "org.title": "Դուք պատրաստում եք ծրագիրը։ Հյուրերը գիտեն՝ ինչ է իրենց սպասում",
      "org.lead": "Նրանց համար, ովքեր հյուրեր են ընդունում, խումբ են ուղեկցում կամ այցի ծրագիր են կազմում",
      "org.audienceLabel": "Ում համար",
      "org.who.guides": "Զբոսավարներ և տուրօպերատորներ",
      "org.who.hospitality": "Hospitality-մենեջերներ",
      "org.who.business": "Գործնական ուղևորություններ և այցեր",
      "org.who.events": "Խմբերի և միջոցառումների համակարգողներ",
      "org.who.family": "Ճամփորդություններ ընտանիքի կամ ընկերների հետ",
      "org.step1.title": "Կազմեք ծրագիրը",
      "org.step1.body": "Ժամանում, տրանսֆերներ, կացարան, հանդիպումներ, միջոցառումներ և մեկնում – ըստ օրերի և ժամերի։ Գները, ամրագրումները և նշումները մնում են ձեզ մոտ։",
      "org.step2.title": "Փոխանցեք մասնակիցներին",
      "org.step2.body": "Մեկ հղում հրապարակված ծրագրին։ Դրանում են ժամերը, վայրերը, արժեքը, ինչն է ներառված և անհրաժեշտ նյութերը։",
      "org.step3.title": "Թարմացրեք փոփոխություններին զուգընթաց",
      "org.step3.body": "Ժամը կամ վայրը փոխվե՞լ է։ Ուղղեք ծրագիրը։ Նույն հղումով մասնակիցը կբացի արդի տարբերակը և կտեսնի թարմացման ամսաթիվը։",
      "org.panelAlt": "Կազմակերպչի վահանակ. միացած մասնակիցների ցանկը և հղումը մասնակիցների համար։",
      "org.panelCaption": "Ով է միացել և հղումը մասնակիցների համար",
      "org.mirror.title": "Մեկ ծրագիր – երկու կողմ",
      "org.mirror.organizer": "Լրացնում է կազմակերպիչը",
      "org.mirror.organizerAlt": "Կազմակերպչի ձևը. արժեքը մեկ անձի համար, արժույթը, ինչն է ներառված, ինչը՝ ոչ, ինչ պետք է իմանալ։",
      "org.mirror.link": "մեկ հղում",
      "org.mirror.participant": "Տեսնում է մասնակիցը",
      "org.mirror.participantAlt": "«Ծրագրի մասին» բաժինը մասնակցի մոտ. արժեքը, ներառվածը և չներառվածը, կարևոր տեղեկությունը, նյութերը։",
      "org.privacy": "Ներքին բյուջեն մնում է ձեզ մոտ։ Մասնակիցները տեսնում են ծրագիրը և պայմանները, բայց ոչ ձեր ծախսերը",
      "org.cta": "Ստեղծել ծրագիր Clavelo-ում",
      "org.pilot": "Քննարկել պիլոտը",
      "org.howto": "Կազմակերպչի ռեժիմը միացվում է ճամփորդության ներսում. «Կիսվեք ուղևորությամբ» → «Ուղևորություն կատարեք խմբի համար»։ Դրա համար անհրաժեշտ է մուտք email-ով։",
      "guest.kicker": "Հյուրերի և մասնակիցների համար",
      "guest.title": "Դուք ժամանեցիք։ Ծրագիրն արդեն հեռախոսում է",
      "guest.lead": "Կազմակերպիչը հղում է ուղարկել – դրանում կա այն ամենը, ինչ պետք է առաջիկա օրերին",
      "guest.where.title": "Որտեղ և երբ",
      "guest.where.body": "Հանդիպումներ, տրանսֆերներ և միջոցառումներ ըստ օրերի – ժամերով և վայրերով",
      "guest.included.title": "Ինչ է ներառված",
      "guest.included.body": "Արժեքը, ինչն է ներառված և ինչը՝ ոչ, ինչ պետք է իմանալ նախապես",
      "guest.materials.title": "Նյութեր",
      "guest.materials.body": "Հուշագրեր, քարտեզներ և փաստաթղթեր, որոնք կազմակերպիչը կիսել է խմբի հետ",
      "guest.note": "Ծրագիրը հղումով կարելի է դիտել առանց գրանցման։ Խմբին միանալու և ծրագիրը ձեր ցանկում պահելու համար անհրաժեշտ են email և անուն։",
      "guest.daysAlt": "Թբիլիսի այցի երեք օրը մասնակցի մոտ. դիմավորում օդանավակայանում, հյուրանոց, աշխատանքային հանդիպում, զբոսանք Հին քաղաքում, Մցխեթա և տրանսֆեր դեպի օդանավակայան։",
      "guest.example": "Օրինակ. երեք օր Թբիլիսիում, տվյալները հորինված են",
      "travel.kicker": "Սեփական ճամփորդությունների համար",
      "travel.title": "Ձեր ճամփորդությունը։ Ձեր ռիթմը",
      "travel.lead": "Հավաքեք գտածը, բաշխեք ըստ օրերի և ճանապարհին պահեք ձեռքի տակ",
      "travel.collect.title": "Հավաքել",
      "travel.collect.body": "Նկարագրեք ճամփորդությունը տեքստով կամ ձայնով – Clavelo-ն սևագիր կկազմի միայն ձեր խոսքերից։ Կայքերից գտածը պահպանեք Chrome-ի ընդլայնմամբ։",
      "travel.extension": "Clavelo Travel Capture Chrome-ի համար",
      "travel.arrange.title": "Դասավորել",
      "travel.arrange.body": "Յուրաքանչյուր իրադարձություն քարտ է՝ ժամով, գնով, ամրագրմամբ և ֆայլերով։ Պլանները փոխվե՞լ են։ Քարշ տվեք քարտը մեկ այլ օր։",
      "travel.use.title": "Օգտագործել ճամփորդության ընթացքում",
      "travel.use.body": "Տոմսերը, հասցեները և ամրագրումները բացվում են հեռախոսից։ Օրվա և ամբողջ ճամփորդության ընդհանուր գումարը հաշվվում է ինքնաբերաբար։",
      "closing.title": "Որտեղի՞ց սկսենք",
      "closing.travel.title": "Պլանավորել ճամփորդություն",
      "closing.travel.body": "Բացեք Clavelo-ն բրաուզերում և սկսեք սևագրից կամ դատարկ ճամփորդությունից",
      "closing.pilot.title": "Քննարկել պիլոտը խմբի համար",
      "closing.pilot.body": "Հյուրեր եք ընդունո՞ւմ կամ խմբեր եք ուղեկցում։ Գրեք մեզ – միասին կքննարկենք ձեր սցենարը",
      "closing.pilot.cta": "Գրել մեզ",
      "closing.note": "Հավելվածը հասանելի է ռուսերեն, անգլերեն, ֆրանսերեն, վրացերեն, գերմաներեն, հայերեն և պարզեցված չինարեն",
      "pilot.subject": "Clavelo. պիլոտ խմբի համար",
      "photo.street.alt": "Ուսապարկով ճամփորդուհին հին քաղաքի փողոցում հեռախոսով ստուգում է իր պլանը",
      "photo.group.alt": "Ուղեբեռով խումբը մեկնելուց առաջ նստում է միկրոավտոբուս",
      "photo.airport.alt": "Ցուցանակով դիմավորողը ժամանման սրահում դիմավորում է ընտանիքին",
      "photo.cafe.alt": "Կինը փողոցային սրճարանում ճամփորդության գաղափարներ է գրում տետրում",
      "action.open": "Բացել Clavelo-ն",
      "footer.privacy": "Գաղտնիության քաղաքականություն",
      "travel.collect.linkAria": "Բացել Clavelo-ն և ստեղծել ճանապարհորդության սևագիր",
      "travel.collect.imageAlt": "Ճանապարհորդության սևագրի էկրանը՝ տեքստային դաշտով և ձայնային մուտքով։",
      "travel.arrange.linkAria": "Բացել Clavelo-ն և պլանավորել ճանապարհորդությունն ըստ օրերի",
      "travel.arrange.imageAlt": "Ճանապարհորդության պլանի երկու օր՝ իրադարձությունների քարտերով։",
      "travel.use.linkAria": "Բացել Clavelo-ն և դիտել ճանապարհորդության բյուջեն",
      "travel.use.imageAlt": "Ճանապարհորդության բյուջեի ամփոփում՝ վճարված, ամրագրված և հասանելի գումարներով։",
    },
    zh: {
      "meta.title": "Clavelo – 个人旅行与团队行程",
      "meta.description": "规划自己的旅行，或为他人准备行程。机票、会面、住宿、地点和重要细节，都在一份清晰的计划里。",
      "meta.ogTitle": "Clavelo – 个人旅行与团队行程",
      "meta.ogDescription": "规划自己的旅行，或为他人准备行程。机票、会面、住宿、地点和重要细节，都在一份清晰的计划里。",
      skip: "跳到主要内容",
      "language.label": "语言",
      "nav.label": "栏目",
      "nav.travel": "我在旅行",
      "nav.organize": "我在组织",
      "nav.participate": "我在参与",
      "action.openShort": "打开",
      "hero.kicker": "适用于个人旅行和团队",
      "hero.title": "行程已就绪。每个人都知道接下来做什么",
      "hero.lead": "规划自己的旅行，或为他人准备行程。机票、会面、住宿、地点和重要细节，都在一份清晰的计划里。",
      "hero.toOrganizers": "面向组织者",
      "hero.note": "在浏览器中使用。无需注册即可开始",
      "hero.planLabel": "你的计划",
      "hero.planAlt": "按天安排的第比利斯访问：接送、酒店和晚餐，附组织者预算。",
      "roles.title": "你在这次旅行中是什么角色？",
      "roles.lead": "同一个人可以组织一次旅行，也可以参与另一次。Clavelo 为每个人展示他们真正需要的内容。",
      "roles.travel.name": "我在旅行",
      "roles.travel.body": "我的计划、预订、心仪地点、文件和预算，都在一起",
      "roles.travel.link": "个人旅行",
      "roles.organize.name": "我在组织",
      "roles.organize.body": "为我接待或陪同的人准备一份行程",
      "roles.organize.link": "团队行程",
      "roles.participate.name": "我在参与",
      "roles.participate.body": "行程就在手边，我知道何时何地会发生什么",
      "roles.participate.link": "参与者的行程",
      "org.kicker": "面向组织者",
      "org.title": "你来准备行程。客人清楚接下来的安排",
      "org.lead": "适合接待客人、带团或制定访问行程的人",
      "org.audienceLabel": "适用人群",
      "org.who.guides": "导游和旅行社",
      "org.who.hospitality": "接待经理",
      "org.who.business": "商务出行和访问",
      "org.who.events": "团队与活动协调人",
      "org.who.family": "家庭或朋友出游",
      "org.step1.title": "制定行程",
      "org.step1.body": "抵达、接送、住宿、会面、活动和离开，按天按时间排好。价格、预订和备注只留在你这里。",
      "org.step2.title": "分享给参与者",
      "org.step2.body": "一个链接指向已发布的行程。里面有时间、地点、价格、包含项目和所需资料。",
      "org.step3.title": "随变化更新",
      "org.step3.body": "时间或地点变了？修改行程即可。参与者通过同一个链接打开当前版本，并能看到更新日期。",
      "org.panelAlt": "组织者面板：已加入的参与者名单和参与者链接。",
      "org.panelCaption": "谁已加入，以及参与者链接",
      "org.mirror.title": "一份行程，两种视角",
      "org.mirror.organizer": "组织者填写",
      "org.mirror.organizerAlt": "组织者表单：每人价格、币种、包含项目、不包含项目、重要须知。",
      "org.mirror.link": "一个链接",
      "org.mirror.participant": "参与者看到",
      "org.mirror.participantAlt": "参与者端的“关于行程”区块：价格、包含与不包含项目、重要须知和资料。",
      "org.privacy": "内部预算只属于你。参与者能看到行程和条件，但看不到你的开支",
      "org.cta": "在 Clavelo 中创建行程",
      "org.pilot": "洽谈试点",
      "org.howto": "组织者模式在行程内开启：“分享行程” → “为团队组织行程”。需要使用邮箱登录。",
      "guest.kicker": "面向客人和参与者",
      "guest.title": "你已落地。行程早已在手机里",
      "guest.lead": "组织者发来一个链接，未来几天需要的一切都在里面",
      "guest.where.title": "何时何地",
      "guest.where.body": "按天列出的会面、接送和活动，附时间和地点",
      "guest.included.title": "包含什么",
      "guest.included.body": "价格、包含与不包含的项目、需要提前了解的事项",
      "guest.materials.title": "资料",
      "guest.materials.body": "组织者为团队分享的须知、地图和文件",
      "guest.note": "无需注册即可通过链接查看行程。若要加入团队并将行程保存在你的列表中，需要邮箱和姓名。",
      "guest.daysAlt": "参与者看到的第比利斯三日访问：机场接机、酒店、工作会议、老城漫步、姆茨赫塔和送机。",
      "guest.example": "示例：第比利斯三日行程，数据为虚构",
      "travel.kicker": "个人旅行",
      "travel.title": "你的旅行，你的节奏",
      "travel.lead": "收集找到的内容，按天安排，旅途中随时查看",
      "travel.collect.title": "收集",
      "travel.collect.body": "用文字或语音描述旅行，Clavelo 只根据你的话生成草稿。用 Chrome 扩展保存网站上的发现。",
      "travel.extension": "Clavelo Travel Capture Chrome 扩展",
      "travel.arrange.title": "安排",
      "travel.arrange.body": "每个事件都是一张卡片，含时间、价格、预订和文件。计划变了？把卡片拖到另一天。",
      "travel.use.title": "旅途中使用",
      "travel.use.body": "机票、地址和预订在手机上即可打开。每天和整趟旅行的总额自动计算。",
      "closing.title": "从哪里开始？",
      "closing.travel.title": "规划一次旅行",
      "closing.travel.body": "在浏览器中打开 Clavelo，从草稿或空白行程开始",
      "closing.pilot.title": "洽谈团队试点",
      "closing.pilot.body": "你接待客人或带团吗？写信给我们，一起看看你的场景",
      "closing.pilot.cta": "写信给我们",
      "closing.note": "应用支持俄语、英语、法语、格鲁吉亚语、德语、亚美尼亚语和简体中文",
      "pilot.subject": "Clavelo：团队试点",
      "photo.street.alt": "背着背包的旅行者在老城街道上用手机查看行程",
      "photo.group.alt": "一群人带着行李在出发前登上小巴",
      "photo.airport.alt": "接机人员举着名牌在到达大厅迎接一家人",
      "photo.cafe.alt": "一位女士在街边咖啡馆把旅行想法记在笔记本上",
      "action.open": "打开 Clavelo",
      "footer.privacy": "隐私政策",
      "travel.collect.linkAria": "打开 Clavelo 并创建行程草稿",
      "travel.collect.imageAlt": "行程草稿界面，包含文字输入框和语音输入按钮。",
      "travel.arrange.linkAria": "打开 Clavelo 并按天规划行程",
      "travel.arrange.imageAlt": "两天的行程计划，以活动卡片形式呈现。",
      "travel.use.linkAria": "打开 Clavelo 并查看行程预算",
      "travel.use.imageAlt": "行程预算摘要，显示已付款、已预订和可用金额。",
    },
  };

  const OG_LOCALES = {
    ru: "ru_RU",
    en: "en_US",
    fr: "fr_FR",
    ka: "ka_GE",
    de: "de_DE",
    hy: "hy_AM",
    zh: "zh_CN",
  };

  const HTML_LANGUAGE_TAGS = { zh: "zh-Hans" };

  // ---------- Типографика ----------
  // Правила одни на все языки и применяются при выводе, а не зашиты в
  // переводы: короткое слово не остаётся в конце строки, тире и стрелка
  // не начинают строку, число не отрывается от следующего слова.
  const NBSP = " ";
  const SHORT_WORDS = {
    ru: ["в", "во", "к", "ко", "о", "об", "обо", "с", "со", "у", "из", "изо", "на", "за", "до", "по", "от", "ото",
      "при", "для", "над", "под", "про", "без", "и", "а", "но", "или", "да", "не", "ни", "что", "как", "то"],
    en: ["a", "an", "the", "of", "to", "in", "on", "at", "by", "for", "and", "or", "with", "from", "as", "is", "it", "no", "not"],
    fr: ["à", "au", "aux", "de", "du", "des", "le", "la", "les", "un", "une", "et", "ou", "en", "par", "sur", "pour",
      "dans", "que", "qui", "ne", "pas", "se", "sa", "son", "ses", "vos", "nos", "ce", "on", "y"],
    de: ["und", "in", "im", "am", "an", "zu", "zum", "zur", "mit", "für", "von", "vom", "der", "die", "das", "den",
      "dem", "des", "ein", "eine", "auf", "aus", "bei", "nach", "oder", "ist", "es", "du"],
    ka: ["და", "ან", "რა", "ვინ"],
    hy: ["և", "ու", "կամ", "է", "են", "եք"],
  };
  const SHORT_WORD_SETS = Object.fromEntries(Object.entries(SHORT_WORDS).map(([locale, words]) => [locale, new Set(words)]));
  const LETTERS_ONLY = /^[\p{L}’']+$/u;

  function isShortWord(word, locale) {
    if (!LETTERS_ONLY.test(word)) return false;
    return [...word].length <= 2 || Boolean(SHORT_WORD_SETS[locale]?.has(word.toLowerCase()));
  }

  function typograph(text, locale) {
    const value = String(text || "");
    if (locale === "zh") return value;
    let source = value;
    // Французская пунктуация: неразрывный пробел перед двойными знаками
    // и внутри кавычек-ёлочек.
    if (locale === "fr") {
      source = source.replace(/ ([:;!?»])/g, `${NBSP}$1`).replace(/« /g, `«${NBSP}`);
    }
    const tokens = source.split(" ");
    let result = tokens[0];
    for (let index = 1; index < tokens.length; index += 1) {
      const previous = tokens[index - 1].replace(/^[(«"„“‘']+/u, "");
      const current = tokens[index];
      const glue = /^[–—→]/u.test(current) || /^\d+$/u.test(previous) || isShortWord(previous, locale);
      result += (glue ? NBSP : " ") + current;
    }
    return result;
  }

  // Значимая фраза — с новой строки. Делим по концу предложения,
  // включая армянскую точку «։» и китайские знаки.
  function splitPhrases(text) {
    const parts = String(text || "").match(/[^.!?։。？！]+[.!?։。？！]*\s*/gu) || [];
    return parts.map((part) => part.trim()).filter(Boolean);
  }

  function normalizeLocale(value) {
    const parts = String(value || "").trim().toLowerCase().replaceAll("_", "-").split("-").filter(Boolean);
    const language = parts[0] || "";
    if (language !== "zh") return SUPPORTED_LOCALES.includes(language) ? language : null;

    const script = parts.find((part) => part === "hans" || part === "hant");
    if (script) return script === "hans" ? "zh" : null;

    const region = parts.find((part, index) => index > 0 && /^[a-z]{2}$/.test(part));
    if (!region || region === "cn" || region === "sg") return "zh";
    return null;
  }

  function resolveInitialLocale({ search = "", saved = null, languages = [] } = {}) {
    const savedLocale = normalizeLocale(saved);
    if (savedLocale) return { locale: savedLocale, source: "manual" };

    const queryLocale = normalizeLocale(new URLSearchParams(search).get("lang"));
    if (queryLocale) return { locale: queryLocale, source: "url" };

    for (const language of languages) {
      const browserLocale = normalizeLocale(language);
      if (browserLocale) return { locale: browserLocale, source: "browser" };
    }

    return { locale: "en", source: "fallback" };
  }

  function pilotMailto(locale) {
    const messages = TRANSLATIONS[normalizeLocale(locale) || "en"];
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(messages["pilot.subject"])}`;
  }

  const api = {
    SUPPORTED_LOCALES,
    STORAGE_KEY,
    APP_URL,
    CONTACT_EMAIL,
    TRANSLATIONS,
    normalizeLocale,
    resolveInitialLocale,
    typograph,
    splitPhrases,
    pilotMailto,
  };
  globalThis.BackpackerLandingI18n = api;

  if (typeof document === "undefined" || typeof window === "undefined") return;

  function readSavedLocale() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function saveLocale(locale) {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Storage is optional. The page and URL continue to work without it.
    }
  }

  function setMeta(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.setAttribute("content", value);
  }

  function updateShareableUrl(locale) {
    try {
      const url = new URL(window.location.href);
      url.search = "";
      url.searchParams.set("lang", locale);
      window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    } catch {
      // file:// previews and restricted history contexts still keep localization working.
    }
  }

  function renderText(element, value, locale) {
    if (!element.hasAttribute("data-phrases")) {
      element.textContent = typograph(value, locale);
      return;
    }
    const phrases = splitPhrases(value).map((phrase) => {
      const span = document.createElement("span");
      span.className = "phrase";
      span.textContent = typograph(phrase, locale);
      return span;
    });
    element.replaceChildren(...phrases);
  }

  function applyLocale(locale, { persist = false } = {}) {
    const normalized = normalizeLocale(locale) || "en";
    const messages = TRANSLATIONS[normalized];

    document.documentElement.lang = HTML_LANGUAGE_TAGS[normalized] || normalized;
    document.title = messages["meta.title"];
    setMeta('meta[name="description"]', messages["meta.description"]);
    setMeta('meta[property="og:title"]', messages["meta.ogTitle"]);
    setMeta('meta[property="og:description"]', messages["meta.ogDescription"]);
    setMeta('meta[property="og:locale"]', OG_LOCALES[normalized]);

    for (const element of document.querySelectorAll("[data-i18n]")) {
      const value = messages[element.dataset.i18n];
      if (value) renderText(element, value, normalized);
    }
    for (const element of document.querySelectorAll("[data-i18n-aria-label]")) {
      const value = messages[element.dataset.i18nAriaLabel];
      if (value) element.setAttribute("aria-label", value);
    }
    for (const element of document.querySelectorAll("[data-i18n-alt]")) {
      const value = messages[element.dataset.i18nAlt];
      if (value) element.setAttribute("alt", value);
    }
    for (const image of document.querySelectorAll("[data-localized-screenshot]")) {
      const name = image.dataset.localizedScreenshot;
      if (name) image.setAttribute("src", `./assets/screenshots/${normalized}/${name}`);
    }

    const languageSelect = document.querySelector("#languageSelect");
    if (languageSelect) {
      languageSelect.value = normalized;
      languageSelect.setAttribute("aria-label", messages["language.label"]);
    }

    const appUrl = new URL(APP_URL);
    appUrl.searchParams.set("lang", normalized);
    for (const link of document.querySelectorAll("[data-app-link]")) {
      link.setAttribute("href", appUrl.toString());
    }
    for (const link of document.querySelectorAll("[data-pilot-link]")) {
      link.setAttribute("href", pilotMailto(normalized));
    }

    if (persist) saveLocale(normalized);
    updateShareableUrl(normalized);
  }

  const initial = resolveInitialLocale({
    search: window.location.search,
    saved: readSavedLocale(),
    languages: navigator.languages?.length ? navigator.languages : [navigator.language],
  });

  applyLocale(initial.locale);

  document.querySelector("#languageSelect")?.addEventListener("change", (event) => {
    applyLocale(event.currentTarget.value, { persist: true });
  });
})();
