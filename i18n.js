(() => {
  "use strict";

  const SUPPORTED_LOCALES = ["ru", "en", "fr", "ka", "de", "hy", "zh"];
  const STORAGE_KEY = "backpacker.landing.locale";
  const APP_URL = "https://app.backpackerapp.cc/";

  const TRANSLATIONS = {
    en: {
      "meta.title": "Clavelo — Every trip detail in place",
      "meta.description": "Keep bookings, places, plans, files and costs together. Manage your own trip or share one current mobile program with your group.",
      "meta.ogTitle": "Clavelo — Every trip detail in place",
      "meta.ogDescription": "Keep bookings, places, plans, files and costs together. Manage your own trip or share one current mobile program with your group.",
      skip: "Skip to content",
      "language.label": "Language",
      "action.open": "Open Clavelo",
      "hero.kicker": "Your trip, all together",
      "hero.title": "Every detail in place. More room for the experience.",
      "hero.lead": "Keep bookings, places, plans, files and costs together. Manage your own trip or share one current mobile program with your group.",
      "hero.bullet.tickets": "Tickets",
      "hero.bullet.stays": "Stays",
      "hero.bullet.places": "Places",
      "hero.bullet.ideas": "Ideas and wish list",
      "hero.bullet.people": "Your own trip, friends or an organized group",
      "hero.bullet.budget": "Trip budget and costs",
      "hero.foot": "Every event is a clear card",
      "hero.note": "Works in a browser. The app interface is available in Russian, English, French, Georgian, German, Armenian and Simplified Chinese.",
      "hero.imageAlt": "Clavelo home screen with a trip card, dates, total, new-trip action and Ideas.",
      "problem.title": "Is your trip scattered across a dozen places?",
      "problem.tickets": "Tickets in email",
      "problem.stays": "Stays in booking apps",
      "problem.places": "Places in notes",
      "problem.prices": "Prices in screenshots",
      "problem.people": "Participants in chats",
      "problem.links": "Links in open tabs",
      "problem.conclusion": "The full picture exists only in your head — and only while you remember it. 🤯",
      "ai.kicker": "Voice or text",
      "ai.title": "Describe the trip and get a draft",
      "ai.body1": "Describe the trip in your own words, by text or voice.",
      "ai.body2": "The draft uses only your words and documents. Anything approximate is marked.",
      "ai.body3": "Review and confirm the draft to create the trip in Clavelo.",
      "ai.linkAria": "Open Clavelo and create a trip draft",
      "ai.imageAlt": "Trip draft screen with a text field and voice input action.",
      "extension.kicker": "Ideas from the browser",
      "extension.title": "Save travel finds with the Chrome extension",
      "extension.body1": "The desktop Chrome extension is currently published as Backpacker Travel Capture. It saves information available on the current page and sends the find to Ideas.",
      "extension.body2": "Some sites may not make every detail available; the source link is kept with the idea.",
      "extension.body3": "Move the idea into a trip when you are ready, or keep it for later.",
      "extension.cta": "Install for Chrome",
      "extension.linkAria": "Open Clavelo Ideas",
      "extension.imageAlt": "Backpacker Travel Capture side panel with a travel idea and its source.",
      "day.kicker": "Day by day",
      "day.title": "A day is a stream of cards",
      "day.body1": "Every event has its own card.",
      "day.body2": "Browse the day as a clear sequence of events.",
      "day.body3": "Plans changed? Move a card to another day or keep it in Ideas for later.",
      "day.linkAria": "Open Clavelo and plan the trip by day",
      "day.imageAlt": "Two days of a trip plan shown as event cards.",
      "card.kicker": "Event card",
      "card.title": "Everything you need, together",
      "card.body1": "Time, price, booking link, status and notes stay in one card.",
      "card.body2": "Add useful files: a ticket or booking PDF, boarding pass, voucher scan or photo.",
      "card.body3": "See what is paid and what is still only an idea without searching through chats.",
      "card.linkAria": "Open Clavelo and fill in an event card",
      "card.imageAlt": "Event card with its details, price, status, booking link and location.",
      "budget.kicker": "Budget",
      "budget.title": "Totals update automatically",
      "budget.body1": "As you edit and move cards, Clavelo recalculates totals for each day and the whole trip.",
      "budget.body2": "If the cost is unknown, leave it empty or add an estimate.",
      "budget.linkAria": "Open Clavelo and view the trip budget",
      "budget.imageAlt": "Trip budget summary with totals for paid, reserved and available amounts.",
      "organizer.kicker": "Organizer Mode",
      "organizer.title": "One current program for the whole group",
      "organizer.body1": "Create and update the trip program as plans change.",
      "organizer.body2": "Share the current program, price, terms and selected materials with participants.",
      "organizer.body3": "Keep your internal budget private.",
      "closing.title": "Put every trip detail in place",
      "footer.privacy": "Privacy Policy",
    },
    ru: {
      "meta.title": "Clavelo — все детали поездки в одном месте",
      "meta.description": "Бронирования, места, планы, документы и расходы — в одной поездке. Для самостоятельных путешествий и актуальных программ организованных туров.",
      "meta.ogTitle": "Clavelo — все детали поездки в одном месте",
      "meta.ogDescription": "Бронирования, места, планы, документы и расходы — в одной поездке. Для самостоятельных путешествий и актуальных программ организованных туров.",
      skip: "Перейти к содержанию",
      "language.label": "Язык",
      "action.open": "Открыть Clavelo",
      "hero.kicker": "Вся поездка под рукой",
      "hero.title": "Все детали на месте. Больше свободы путешествовать.",
      "hero.lead": "Бронирования, места, планы, документы и расходы — в одной поездке. Для самостоятельных путешествий и актуальных программ организованных туров.",
      "hero.bullet.tickets": "Билеты",
      "hero.bullet.stays": "Жильё",
      "hero.bullet.places": "Места",
      "hero.bullet.ideas": "Идеи и хотелки",
      "hero.bullet.people": "Самостоятельная поездка, друзья или организованная группа",
      "hero.bullet.budget": "Бюджет и расходы поездки",
      "hero.foot": "Каждое событие — понятная карточка",
      "hero.note": "Работает в браузере. Интерфейс приложения доступен на русском, английском, французском, грузинском, немецком, армянском и упрощённом китайском языках.",
      "hero.imageAlt": "Главный экран Clavelo: карточка поездки с обложкой, датами и суммой, кнопки «Создать новую поездку» и «Идеи».",
      "problem.title": "Поездка сейчас лежит в десятке мест сразу?",
      "problem.tickets": "Билеты — в почте",
      "problem.stays": "Жильё — в сторонних приложениях",
      "problem.places": "Места — в заметках",
      "problem.prices": "Цены — в скриншотах",
      "problem.people": "Участники — в чатах",
      "problem.links": "Ссылки — в открытых вкладках",
      "problem.conclusion": "Собрать общую картину поездки получается только в голове — и только пока помнишь. 🤯",
      "ai.kicker": "Голосом или текстом",
      "ai.title": "Расскажите про поездку — черновик соберётся сам",
      "ai.body1": "Опишите поездку своими словами — текстом или голосом.",
      "ai.body2": "Черновик соберётся только из ваших слов и ваших документов: чего вы не сказали, в нём не появится, а всё примерное помечено.",
      "ai.body3": "Вы правите черновик и подтверждаете — после этого в приложении появится новая поездка.",
      "ai.linkAria": "Открыть Clavelo и собрать черновик поездки",
      "ai.imageAlt": "Фрагмент экрана AI-черновика: поле для описания поездки своими словами и кнопка «Надиктовать».",
      "extension.kicker": "Идеи из браузера",
      "extension.title": "Сохраняйте находки через расширение Chrome",
      "extension.body1": "Расширение Chrome для компьютера пока опубликовано как Backpacker Travel Capture. Оно сохраняет доступную информацию с открытой страницы и отправляет находку в «Идеи».",
      "extension.body2": "На некоторых сайтах часть данных может быть недоступна; ссылка на источник сохраняется вместе с идеей.",
      "extension.body3": "Когда будете готовы, перенесите идею в поездку или оставьте на потом.",
      "extension.cta": "Установить для Chrome",
      "extension.linkAria": "Открыть раздел «Идеи» в Clavelo",
      "extension.imageAlt": "Боковая панель Backpacker Travel Capture с идеей для поездки и ссылкой на источник.",
      "day.kicker": "По дням",
      "day.title": "День — это лента карточек",
      "day.body1": "Каждое событие — отдельная карточка.",
      "day.body2": "День показывает события лентой, которую можно листать.",
      "day.body3": "Поменялись планы? Перетащите карточку в другой день или припаркуйте в «идеи на потом».",
      "day.linkAria": "Открыть Clavelo и разложить поездку по дням",
      "day.imageAlt": "Два дня плана подряд: «День 1 · 25 500 ₽» с карточками «Билет» и «Жильё» и «День 2 · 7 500 ₽» с карточками «Экскурсия» и «Баня/спа»; ленты прокручиваются вбок.",
      "card.kicker": "Карточка",
      "card.title": "Всё нужное — внутри",
      "card.body1": "Время, цена в нужной валюте, ссылка на бронь, статус и пометки на полях лежат в одной карточке.",
      "card.body2": "Туда же кладутся файлы: PDF билета или брони, посадочный, скан ваучера, нужное фото.",
      "card.body3": "Не нужно листать переписку, чтобы вспомнить, за что уже заплачено, а что пока только идея.",
      "card.linkAria": "Открыть Clavelo и заполнить карточку события",
      "card.imageAlt": "Карточка события изнутри: поля «Название», «Тип», «Статус», «Расход берёт на себя», дата, время, длительность, цена, «Оплачено», приоритет, ссылка на бронь и локация.",
      "budget.kicker": "Бюджет",
      "budget.title": "Сумма считается сама",
      "budget.body1": "Пока вы редактируете и двигаете карточки, итог по дню и по всей поездке пересчитывается.",
      "budget.body2": "Не знаете стоимость? Не указывайте или укажите примерный ориентир.",
      "budget.linkAria": "Открыть Clavelo и посмотреть бюджет поездки",
      "budget.imageAlt": "Фрагмент экрана бюджета: «Бюджет поездки 45 000 ₽», «Оплачено 16 500 ₽», «Бронь 13 000 ₽», «Свободно 15 500 ₽».",
      "organizer.kicker": "Режим организатора",
      "organizer.title": "Одна актуальная программа для всей группы",
      "organizer.body1": "Составляйте и обновляйте программу тура по мере изменений.",
      "organizer.body2": "Публикуйте для участников программу, стоимость, условия и необходимые материалы.",
      "organizer.body3": "Внутренняя смета остаётся приватной.",
      "closing.title": "Соберите все детали поездки",
      "footer.privacy": "Политика конфиденциальности",
    },
    fr: {
      "meta.title": "Clavelo — tous les détails du voyage au même endroit",
      "meta.description": "Réservations, lieux, programme, fichiers et dépenses restent réunis pour vos voyages et les programmes de groupe à jour.",
      "meta.ogTitle": "Clavelo — tous les détails du voyage au même endroit",
      "meta.ogDescription": "Réservations, lieux, programme, fichiers et dépenses restent réunis pour vos voyages et les programmes de groupe à jour.",
      skip: "Aller au contenu",
      "language.label": "Langue",
      "action.open": "Ouvrir Clavelo",
      "hero.kicker": "Tout votre voyage, au même endroit",
      "hero.title": "Chaque détail à sa place. Plus de liberté pour vivre le voyage.",
      "hero.lead": "Gardez réservations, lieux, programme, fichiers et dépenses ensemble. Gérez votre voyage ou partagez un programme à jour avec votre groupe.",
      "hero.bullet.tickets": "Billets",
      "hero.bullet.stays": "Hébergements",
      "hero.bullet.places": "Lieux",
      "hero.bullet.ideas": "Idées et envies",
      "hero.bullet.people": "Voyage personnel, amis ou groupe organisé",
      "hero.bullet.budget": "Budget et dépenses du voyage",
      "hero.foot": "Chaque événement devient une carte claire",
      "hero.note": "Fonctionne dans le navigateur. L’interface de l’application est disponible en russe, anglais, français, géorgien, allemand, arménien et chinois simplifié.",
      "hero.imageAlt": "Écran d’accueil de Clavelo avec une carte de voyage, les dates, le total, la création d’un voyage et les Idées.",
      "problem.title": "Votre voyage est éparpillé dans une dizaine d’endroits ?",
      "problem.tickets": "Les billets dans les e-mails",
      "problem.stays": "Les hébergements dans des applications",
      "problem.places": "Les lieux dans les notes",
      "problem.prices": "Les prix dans des captures d’écran",
      "problem.people": "Les participants dans les discussions",
      "problem.links": "Les liens dans des onglets ouverts",
      "problem.conclusion": "La vue d’ensemble n’existe que dans votre tête — et seulement tant que vous vous en souvenez. 🤯",
      "ai.kicker": "À l’oral ou par écrit",
      "ai.title": "Décrivez le voyage et obtenez un brouillon",
      "ai.body1": "Décrivez le voyage avec vos mots, par écrit ou à l’oral.",
      "ai.body2": "Le brouillon utilise uniquement vos mots et vos documents. Les éléments approximatifs sont signalés.",
      "ai.body3": "Vérifiez et confirmez le brouillon pour créer le voyage dans Clavelo.",
      "ai.linkAria": "Ouvrir Clavelo et créer un brouillon de voyage",
      "ai.imageAlt": "Écran de brouillon de voyage avec un champ de texte et une saisie vocale.",
      "extension.kicker": "Des idées depuis le navigateur",
      "extension.title": "Enregistrez vos trouvailles avec l’extension Chrome",
      "extension.body1": "L’extension Chrome pour ordinateur est actuellement publiée sous le nom Backpacker Travel Capture. Elle enregistre les informations disponibles sur la page ouverte et envoie la trouvaille dans Idées.",
      "extension.body2": "Certains sites ne rendent pas tous les détails accessibles ; le lien source reste associé à l’idée.",
      "extension.body3": "Ajoutez l’idée à un voyage quand vous êtes prêt, ou gardez-la pour plus tard.",
      "extension.cta": "Installer pour Chrome",
      "extension.linkAria": "Ouvrir les Idées dans Clavelo",
      "extension.imageAlt": "Panneau latéral de Backpacker Travel Capture avec une idée de voyage et sa source.",
      "day.kicker": "Jour après jour",
      "day.title": "Une journée est une suite de cartes",
      "day.body1": "Chaque événement a sa propre carte.",
      "day.body2": "Parcourez la journée comme une suite claire d’événements.",
      "day.body3": "Le programme change ? Déplacez une carte vers un autre jour ou gardez-la dans Idées pour plus tard.",
      "day.linkAria": "Ouvrir Clavelo et organiser le voyage par jour",
      "day.imageAlt": "Deux journées d’un programme de voyage présentées sous forme de cartes.",
      "card.kicker": "Carte d’événement",
      "card.title": "Tout ce qu’il faut, au même endroit",
      "card.body1": "L’heure, le prix, le lien de réservation, le statut et les notes restent dans une seule carte.",
      "card.body2": "Ajoutez les fichiers utiles : billet ou réservation PDF, carte d’embarquement, bon ou photo.",
      "card.body3": "Voyez ce qui est payé et ce qui reste une idée sans rechercher dans les discussions.",
      "card.linkAria": "Ouvrir Clavelo et remplir une carte d’événement",
      "card.imageAlt": "Carte d’événement avec détails, prix, statut, lien de réservation et lieu.",
      "budget.kicker": "Budget",
      "budget.title": "Les totaux se mettent à jour automatiquement",
      "budget.body1": "Lorsque vous modifiez ou déplacez des cartes, Clavelo recalcule les totaux de chaque jour et du voyage entier.",
      "budget.body2": "Vous ne connaissez pas le prix ? Laissez le champ vide ou ajoutez une estimation.",
      "budget.linkAria": "Ouvrir Clavelo et consulter le budget du voyage",
      "budget.imageAlt": "Récapitulatif du budget avec les montants payés, réservés et disponibles.",
      "organizer.kicker": "Mode Organisateur",
      "organizer.title": "Un programme à jour pour tout le groupe",
      "organizer.body1": "Créez et mettez à jour le programme du voyage au fil des changements.",
      "organizer.body2": "Partagez avec les participants le programme à jour, le prix, les conditions et les documents sélectionnés.",
      "organizer.body3": "Gardez votre budget interne privé.",
      "closing.title": "Mettez chaque détail du voyage à sa place",
      "footer.privacy": "Politique de confidentialité",
    },
    de: {
      "meta.title": "Clavelo — alle Reisedetails an einem Ort",
      "meta.description": "Buchungen, Orte, Pläne, Dateien und Kosten bleiben für eigene Reisen und aktuelle Gruppenprogramme zusammen.",
      "meta.ogTitle": "Clavelo — alle Reisedetails an einem Ort",
      "meta.ogDescription": "Buchungen, Orte, Pläne, Dateien und Kosten bleiben für eigene Reisen und aktuelle Gruppenprogramme zusammen.",
      skip: "Zum Inhalt springen",
      "language.label": "Sprache",
      "action.open": "Clavelo öffnen",
      "hero.kicker": "Die ganze Reise an einem Ort",
      "hero.title": "Jedes Detail an seinem Platz. Mehr Raum für das Erlebnis.",
      "hero.lead": "Buchungen, Orte, Pläne, Dateien und Kosten bleiben zusammen. Verwalte deine eigene Reise oder teile ein aktuelles Programm mit deiner Gruppe.",
      "hero.bullet.tickets": "Tickets",
      "hero.bullet.stays": "Unterkünfte",
      "hero.bullet.places": "Orte",
      "hero.bullet.ideas": "Ideen und Wunschliste",
      "hero.bullet.people": "Eigene Reise, Freunde oder organisierte Gruppe",
      "hero.bullet.budget": "Reisebudget und Kosten",
      "hero.foot": "Jedes Ereignis ist eine übersichtliche Karte",
      "hero.note": "Funktioniert im Browser. Die App-Oberfläche ist auf Russisch, Englisch, Französisch, Georgisch, Deutsch, Armenisch und vereinfachtem Chinesisch verfügbar.",
      "hero.imageAlt": "Clavelo-Startseite mit Reisekarte, Daten, Summe, neuer Reise und Ideen.",
      "problem.title": "Ist deine Reise über ein Dutzend Orte verteilt?",
      "problem.tickets": "Tickets in E-Mails",
      "problem.stays": "Unterkünfte in Buchungs-Apps",
      "problem.places": "Orte in Notizen",
      "problem.prices": "Preise in Screenshots",
      "problem.people": "Teilnehmende in Chats",
      "problem.links": "Links in offenen Tabs",
      "problem.conclusion": "Das Gesamtbild existiert nur im Kopf — und nur, solange du dich daran erinnerst. 🤯",
      "ai.kicker": "Per Sprache oder Text",
      "ai.title": "Beschreibe die Reise und erhalte einen Entwurf",
      "ai.body1": "Beschreibe die Reise mit deinen eigenen Worten, per Text oder Sprache.",
      "ai.body2": "Der Entwurf verwendet nur deine Angaben und Dokumente. Ungefähre Werte werden markiert.",
      "ai.body3": "Prüfe und bestätige den Entwurf, um die Reise in Clavelo anzulegen.",
      "ai.linkAria": "Clavelo öffnen und einen Reiseentwurf erstellen",
      "ai.imageAlt": "Reiseentwurf mit Textfeld und Spracheingabe.",
      "extension.kicker": "Ideen aus dem Browser",
      "extension.title": "Reisefunde mit der Chrome-Erweiterung speichern",
      "extension.body1": "Die Chrome-Erweiterung für den Computer wird derzeit als Backpacker Travel Capture veröffentlicht. Sie speichert verfügbare Informationen der geöffneten Seite und sendet den Fund an Ideen.",
      "extension.body2": "Manche Websites stellen nicht alle Details bereit; der Quelllink bleibt bei der Idee gespeichert.",
      "extension.body3": "Übernimm die Idee später in eine Reise oder bewahre sie für später auf.",
      "extension.cta": "Für Chrome installieren",
      "extension.linkAria": "Clavelo-Ideen öffnen",
      "extension.imageAlt": "Seitenleiste von Backpacker Travel Capture mit einer Reiseidee und ihrer Quelle.",
      "day.kicker": "Tag für Tag",
      "day.title": "Ein Tag ist eine Folge von Karten",
      "day.body1": "Jedes Ereignis hat eine eigene Karte.",
      "day.body2": "Sieh den Tag als klare Abfolge von Ereignissen.",
      "day.body3": "Pläne geändert? Verschiebe eine Karte auf einen anderen Tag oder bewahre sie unter Ideen auf.",
      "day.linkAria": "Clavelo öffnen und die Reise nach Tagen planen",
      "day.imageAlt": "Zwei Tage eines Reiseplans als Ereigniskarten.",
      "card.kicker": "Ereigniskarte",
      "card.title": "Alles Wichtige an einem Ort",
      "card.body1": "Zeit, Preis, Buchungslink, Status und Notizen bleiben in einer Karte.",
      "card.body2": "Füge wichtige Dateien hinzu: Ticket- oder Buchungs-PDF, Bordkarte, Gutschein oder Foto.",
      "card.body3": "Sieh ohne Suche in Chats, was bezahlt ist und was noch eine Idee bleibt.",
      "card.linkAria": "Clavelo öffnen und eine Ereigniskarte ausfüllen",
      "card.imageAlt": "Ereigniskarte mit Details, Preis, Status, Buchungslink und Ort.",
      "budget.kicker": "Budget",
      "budget.title": "Summen werden automatisch aktualisiert",
      "budget.body1": "Beim Bearbeiten und Verschieben von Karten berechnet Clavelo die Summen pro Tag und für die ganze Reise neu.",
      "budget.body2": "Preis unbekannt? Lass das Feld leer oder trage eine Schätzung ein.",
      "budget.linkAria": "Clavelo öffnen und das Reisebudget ansehen",
      "budget.imageAlt": "Budgetübersicht mit bezahlten, reservierten und verfügbaren Beträgen.",
      "organizer.kicker": "Organisator-Modus",
      "organizer.title": "Ein aktuelles Programm für die ganze Gruppe",
      "organizer.body1": "Erstelle und aktualisiere das Reiseprogramm, wenn sich Pläne ändern.",
      "organizer.body2": "Teile das aktuelle Programm, den Preis, die Bedingungen und ausgewählte Unterlagen mit den Teilnehmenden.",
      "organizer.body3": "Halte deine interne Kalkulation privat.",
      "closing.title": "Bringe jedes Reisedetail an seinen Platz",
      "footer.privacy": "Datenschutzerklärung",
    },
    ka: {
      "meta.title": "Clavelo — მოგზაურობის ყველა დეტალი ერთ სივრცეში",
      "meta.description": "ჯავშნები, ადგილები, გეგმები, ფაილები და ხარჯები ერთ სივრცეშია როგორც პირადი მოგზაურობისთვის, ისე ჯგუფის განახლებული პროგრამებისთვის.",
      "meta.ogTitle": "Clavelo — მოგზაურობის ყველა დეტალი ერთ სივრცეში",
      "meta.ogDescription": "ჯავშნები, ადგილები, გეგმები, ფაილები და ხარჯები ერთ სივრცეშია როგორც პირადი მოგზაურობისთვის, ისე ჯგუფის განახლებული პროგრამებისთვის.",
      skip: "შინაარსზე გადასვლა",
      "language.label": "ენა",
      "action.open": "Clavelo-ის გახსნა",
      "hero.kicker": "მთელი მოგზაურობა ერთ სივრცეში",
      "hero.title": "ყველა დეტალი თავის ადგილზე. მეტი სივრცე შთაბეჭდილებებისთვის.",
      "hero.lead": "ჯავშნები, ადგილები, გეგმები, ფაილები და ხარჯები ერთად შეინახეთ. მართეთ საკუთარი მოგზაურობა ან გაუზიარეთ ჯგუფს ერთი განახლებული პროგრამა.",
      "hero.bullet.tickets": "ბილეთები",
      "hero.bullet.stays": "საცხოვრებელი",
      "hero.bullet.places": "ადგილები",
      "hero.bullet.ideas": "იდეები და სურვილები",
      "hero.bullet.people": "საკუთარი მოგზაურობა, მეგობრები ან ორგანიზებული ჯგუფი",
      "hero.bullet.budget": "მოგზაურობის ბიუჯეტი და ხარჯები",
      "hero.foot": "ყოველი მოვლენა გასაგები ბარათია",
      "hero.note": "მუშაობს ბრაუზერში. აპის ინტერფეისი ხელმისაწვდომია რუსულ, ინგლისურ, ფრანგულ, ქართულ, გერმანულ, სომხურ და გამარტივებულ ჩინურ ენებზე.",
      "hero.imageAlt": "Clavelo-ის მთავარი ეკრანი მოგზაურობის ბარათით, თარიღებით, ჯამით, ახალი მოგზაურობითა და იდეებით.",
      "problem.title": "თქვენი მოგზაურობა ათეულობით ადგილასაა გაფანტული?",
      "problem.tickets": "ბილეთები — ელფოსტაში",
      "problem.stays": "საცხოვრებელი — დაჯავშნის აპებში",
      "problem.places": "ადგილები — ჩანაწერებში",
      "problem.prices": "ფასები — ეკრანის სურათებში",
      "problem.people": "მონაწილეები — ჩატებში",
      "problem.links": "ბმულები — ღია ჩანართებში",
      "problem.conclusion": "სრული სურათი მხოლოდ თქვენს გონებაშია — და მხოლოდ მანამ, სანამ ყველაფერი გახსოვთ. 🤯",
      "ai.kicker": "ხმით ან ტექსტით",
      "ai.title": "აღწერეთ მოგზაურობა და მიიღეთ მონახაზი",
      "ai.body1": "აღწერეთ მოგზაურობა თქვენი სიტყვებით — ტექსტით ან ხმით.",
      "ai.body2": "მონახაზი იყენებს მხოლოდ თქვენს სიტყვებსა და დოკუმენტებს. მიახლოებითი მონაცემები მონიშნულია.",
      "ai.body3": "გადაამოწმეთ და დაადასტურეთ მონახაზი, რომ მოგზაურობა Clavelo-ში შეიქმნას.",
      "ai.linkAria": "Clavelo-ის გახსნა და მოგზაურობის მონახაზის შექმნა",
      "ai.imageAlt": "მოგზაურობის მონახაზის ეკრანი ტექსტის ველითა და ხმოვანი შეყვანით.",
      "extension.kicker": "იდეები ბრაუზერიდან",
      "extension.title": "შეინახეთ აღმოჩენები Chrome გაფართოებით",
      "extension.body1": "კომპიუტერის Chrome გაფართოება ამჟამად გამოქვეყნებულია სახელით Backpacker Travel Capture. ის ინახავს ღია გვერდზე ხელმისაწვდომ ინფორმაციას და აღმოჩენას „იდეებში“ აგზავნის.",
      "extension.body2": "ზოგი საიტი ყველა დეტალს არ აჩვენებს; წყაროს ბმული იდეასთან ერთად ინახება.",
      "extension.body3": "როცა მზად იქნებით, გადაიტანეთ იდეა მოგზაურობაში ან შეინახეთ მოგვიანებისთვის.",
      "extension.cta": "Chrome-ისთვის დაყენება",
      "extension.linkAria": "Clavelo-ის იდეების გახსნა",
      "extension.imageAlt": "Backpacker Travel Capture-ის გვერდითი პანელი მოგზაურობის იდეითა და მისი წყაროთი.",
      "day.kicker": "დღეების მიხედვით",
      "day.title": "დღე ბარათების თანმიმდევრობაა",
      "day.body1": "ყოველ მოვლენას საკუთარი ბარათი აქვს.",
      "day.body2": "იხილეთ დღე მოვლენების გასაგებ თანმიმდევრობად.",
      "day.body3": "გეგმები შეიცვალა? გადაიტანეთ ბარათი სხვა დღეზე ან დატოვეთ „იდეებში“ მოგვიანებისთვის.",
      "day.linkAria": "Clavelo-ის გახსნა და მოგზაურობის დღეების მიხედვით დაგეგმვა",
      "day.imageAlt": "მოგზაურობის გეგმის ორი დღე მოვლენების ბარათებით.",
      "card.kicker": "მოვლენის ბარათი",
      "card.title": "ყველაფერი საჭირო ერთ ადგილას",
      "card.body1": "დრო, ფასი, დაჯავშნის ბმული, სტატუსი და შენიშვნები ერთ ბარათში რჩება.",
      "card.body2": "დაამატეთ საჭირო ფაილები: ბილეთის ან ჯავშნის PDF, ჩასხდომის ბარათი, ვაუჩერი ან ფოტო.",
      "card.body3": "ჩატებში ძიების გარეშე ნახეთ, რა არის გადახდილი და რა რჩება იდეად.",
      "card.linkAria": "Clavelo-ის გახსნა და მოვლენის ბარათის შევსება",
      "card.imageAlt": "მოვლენის ბარათი დეტალებით, ფასით, სტატუსით, დაჯავშნის ბმულითა და მდებარეობით.",
      "budget.kicker": "ბიუჯეტი",
      "budget.title": "ჯამები ავტომატურად ახლდება",
      "budget.body1": "ბარათების რედაქტირებისა და გადატანისას Clavelo თითოეული დღისა და მთელი მოგზაურობის ჯამებს ხელახლა ითვლის.",
      "budget.body2": "ფასი უცნობია? დატოვეთ ველი ცარიელი ან მიუთითეთ მიახლოებითი თანხა.",
      "budget.linkAria": "Clavelo-ის გახსნა და მოგზაურობის ბიუჯეტის ნახვა",
      "budget.imageAlt": "მოგზაურობის ბიუჯეტის შეჯამება გადახდილი, დაჯავშნილი და ხელმისაწვდომი თანხებით.",
      "organizer.kicker": "ორგანიზატორის რეჟიმი",
      "organizer.title": "ერთი აქტუალური პროგრამა მთელი ჯგუფისთვის",
      "organizer.body1": "შეადგინეთ და განაახლეთ მოგზაურობის პროგრამა ცვლილებების შესაბამისად.",
      "organizer.body2": "გაუზიარეთ მონაწილეებს მიმდინარე პროგრამა, ფასი, პირობები და შერჩეული მასალები.",
      "organizer.body3": "შიდა ხარჯთაღრიცხვა კონფიდენციალურად შეინახეთ.",
      "closing.title": "მოათავსეთ მოგზაურობის ყველა დეტალი თავის ადგილზე",
      "footer.privacy": "კონფიდენციალურობის პოლიტიკა",
    },
    hy: {
      "meta.title": "Clavelo — ուղևորության բոլոր մանրամասները մեկ վայրում",
      "meta.description": "Ամրագրումները, վայրերը, պլանները, ֆայլերը և ծախսերը մեկ վայրում են՝ անձնական ուղևորությունների և խմբի արդիական ծրագրերի համար։",
      "meta.ogTitle": "Clavelo — ուղևորության բոլոր մանրամասները մեկ վայրում",
      "meta.ogDescription": "Ամրագրումները, վայրերը, պլանները, ֆայլերը և ծախսերը մեկ վայրում են՝ անձնական ուղևորությունների և խմբի արդիական ծրագրերի համար։",
      skip: "Անցնել բովանդակությանը",
      "language.label": "Լեզու",
      "action.open": "Բացել Clavelo-ն",
      "hero.kicker": "Ամբողջ ուղևորությունը մեկ վայրում",
      "hero.title": "Յուրաքանչյուր մանրուք իր տեղում։ Ավելի շատ ազատություն՝ վայելելու ուղևորությունը։",
      "hero.lead": "Ամրագրումները, վայրերը, պլանները, ֆայլերը և ծախսերը պահեք միասին։ Կառավարեք ձեր ուղևորությունը կամ խմբին տրամադրեք մեկ արդիական ծրագիր։",
      "hero.bullet.tickets": "Տոմսեր",
      "hero.bullet.stays": "Կացարան",
      "hero.bullet.places": "Վայրեր",
      "hero.bullet.ideas": "Գաղափարներ և ցանկություններ",
      "hero.bullet.people": "Անձնական ուղևորություն, ընկերներ կամ կազմակերպված խումբ",
      "hero.bullet.budget": "Ուղևորության բյուջե և ծախսեր",
      "hero.foot": "Յուրաքանչյուր իրադարձություն հստակ քարտ է",
      "hero.note": "Աշխատում է դիտարկիչում։ Հավելվածի միջերեսը հասանելի է ռուսերեն, անգլերեն, ֆրանսերեն, վրացերեն, գերմաներեն, հայերեն և պարզեցված չինարեն։",
      "hero.imageAlt": "Clavelo-ի գլխավոր էկրանը՝ ճանապարհորդության քարտով, ամսաթվերով, ընդհանուր գումարով, նոր ճանապարհորդությամբ և գաղափարներով։",
      "problem.title": "Ձեր ճանապարհորդությունը ցրվա՞ծ է տասնյակ տեղերում։",
      "problem.tickets": "Տոմսերը՝ էլփոստում",
      "problem.stays": "Կացարանը՝ ամրագրման հավելվածներում",
      "problem.places": "Վայրերը՝ նշումներում",
      "problem.prices": "Գները՝ էկրանակադրերում",
      "problem.people": "Մասնակիցները՝ զրույցներում",
      "problem.links": "Հղումները՝ բաց ներդիրներում",
      "problem.conclusion": "Ամբողջ պատկերը մնում է միայն ձեր մտքում, և միայն այնքան ժամանակ, քանի դեռ հիշում եք։ 🤯",
      "ai.kicker": "Ձայնով կամ տեքստով",
      "ai.title": "Նկարագրեք ճանապարհորդությունը և ստացեք սևագիր",
      "ai.body1": "Նկարագրեք ճանապարհորդությունը ձեր բառերով՝ տեքստով կամ ձայնով։",
      "ai.body2": "Սևագիրն օգտագործում է միայն ձեր բառերն ու փաստաթղթերը։ Մոտավոր տվյալները նշվում են։",
      "ai.body3": "Ստուգեք և հաստատեք սևագիրը՝ Clavelo-ում ճանապարհորդություն ստեղծելու համար։",
      "ai.linkAria": "Բացել Clavelo-ն և ստեղծել ճանապարհորդության սևագիր",
      "ai.imageAlt": "Ճանապարհորդության սևագրի էկրանը՝ տեքստային դաշտով և ձայնային մուտքով։",
      "extension.kicker": "Գաղափարներ դիտարկիչից",
      "extension.title": "Պահպանեք գտածոները Chrome ընդլայնմամբ",
      "extension.body1": "Համակարգչի Chrome ընդլայնումն այժմ հրապարակված է Backpacker Travel Capture անունով։ Այն պահպանում է բաց էջում հասանելի տեղեկությունը և գտածոն ուղարկում «Գաղափարներ» բաժին։",
      "extension.body2": "Որոշ կայքեր կարող են չտրամադրել բոլոր մանրամասները․ աղբյուրի հղումը պահպանվում է գաղափարի հետ։",
      "extension.body3": "Պատրաստ լինելուց հետո գաղափարը տեղափոխեք ճանապարհորդություն կամ պահեք հետագայի համար։",
      "extension.cta": "Տեղադրել Chrome-ի համար",
      "extension.linkAria": "Բացել Clavelo-ի գաղափարները",
      "extension.imageAlt": "Backpacker Travel Capture-ի կողային վահանակը՝ ճանապարհորդական գաղափարով և դրա աղբյուրով։",
      "day.kicker": "Ըստ օրերի",
      "day.title": "Օրը քարտերի հաջորդականություն է",
      "day.body1": "Յուրաքանչյուր իրադարձություն ունի իր քարտը։",
      "day.body2": "Դիտեք օրը որպես իրադարձությունների հստակ հաջորդականություն։",
      "day.body3": "Պլանները փոխվե՞լ են։ Քարտը տեղափոխեք այլ օր կամ պահեք «Գաղափարներ»-ում հետագայի համար։",
      "day.linkAria": "Բացել Clavelo-ն և պլանավորել ճանապարհորդությունն ըստ օրերի",
      "day.imageAlt": "Ճանապարհորդության պլանի երկու օր՝ իրադարձությունների քարտերով։",
      "card.kicker": "Իրադարձության քարտ",
      "card.title": "Ամեն անհրաժեշտ բան՝ մեկ տեղում",
      "card.body1": "Ժամը, գինը, ամրագրման հղումը, կարգավիճակը և նշումները մնում են մեկ քարտում։",
      "card.body2": "Ավելացրեք անհրաժեշտ ֆայլերը՝ տոմսի կամ ամրագրման PDF, նստեցման կտրոն, վաուչեր կամ լուսանկար։",
      "card.body3": "Առանց զրույցներում փնտրելու տեսեք՝ ինչն է վճարված, իսկ ինչը դեռ գաղափար է։",
      "card.linkAria": "Բացել Clavelo-ն և լրացնել իրադարձության քարտը",
      "card.imageAlt": "Իրադարձության քարտ՝ մանրամասներով, գնով, կարգավիճակով, ամրագրման հղումով և վայրով։",
      "budget.kicker": "Բյուջե",
      "budget.title": "Ընդհանուր գումարները թարմացվում են ինքնաբերաբար",
      "budget.body1": "Քարտերը խմբագրելիս և տեղափոխելիս Clavelo-ն վերահաշվում է յուրաքանչյուր օրվա և ամբողջ ճանապարհորդության գումարները։",
      "budget.body2": "Գինը հայտնի չէ՞։ Դաշտը թողեք դատարկ կամ նշեք մոտավոր գումար։",
      "budget.linkAria": "Բացել Clavelo-ն և դիտել ճանապարհորդության բյուջեն",
      "budget.imageAlt": "Ճանապարհորդության բյուջեի ամփոփում՝ վճարված, ամրագրված և հասանելի գումարներով։",
      "organizer.kicker": "Կազմակերպչի ռեժիմ",
      "organizer.title": "Մեկ արդիական ծրագիր ամբողջ խմբի համար",
      "organizer.body1": "Կազմեք և թարմացրեք ուղևորության ծրագիրը՝ ըստ փոփոխությունների։",
      "organizer.body2": "Մասնակիցներին տրամադրեք արդիական ծրագիրը, արժեքը, պայմանները և ընտրված նյութերը։",
      "organizer.body3": "Ներքին նախահաշիվը պահեք գաղտնի։",
      "closing.title": "Ուղևորության յուրաքանչյուր մանրուք դրեք իր տեղում",
      "footer.privacy": "Գաղտնիության քաղաքականություն",
    },
    zh: {
      "meta.title": "Clavelo — 行程所有细节尽在一处",
      "meta.description": "预订、地点、计划、文件和费用集中在一处，适用于个人旅行和最新团队行程。",
      "meta.ogTitle": "Clavelo — 行程所有细节尽在一处",
      "meta.ogDescription": "预订、地点、计划、文件和费用集中在一处，适用于个人旅行和最新团队行程。",
      skip: "跳到主要内容",
      "language.label": "语言",
      "action.open": "打开 Clavelo",
      "hero.kicker": "整个行程尽在一处",
      "hero.title": "每个细节各就各位，更多空间留给旅途体验。",
      "hero.lead": "把预订、地点、计划、文件和费用放在一起。管理自己的行程，或向团队分享一份最新安排。",
      "hero.bullet.tickets": "机票",
      "hero.bullet.stays": "住宿",
      "hero.bullet.places": "地点",
      "hero.bullet.ideas": "灵感和愿望清单",
      "hero.bullet.people": "个人旅行、朋友或有组织的团队",
      "hero.bullet.budget": "行程预算和费用",
      "hero.foot": "每项活动都是清晰的卡片",
      "hero.note": "可在浏览器中使用。应用界面支持俄语、英语、法语、格鲁吉亚语、德语、亚美尼亚语和简体中文。",
      "hero.imageAlt": "Clavelo 首页：行程卡片、日期、总额、“创建新行程”和“灵感”入口。",
      "problem.title": "你的行程是否散落在十几个地方？",
      "problem.tickets": "机票在邮件里",
      "problem.stays": "住宿在预订应用里",
      "problem.places": "地点在笔记里",
      "problem.prices": "价格在截图里",
      "problem.people": "参与者在聊天里",
      "problem.links": "链接在打开的标签页里",
      "problem.conclusion": "完整行程只存在脑海中——而且只在你还记得的时候。🤯",
      "ai.kicker": "语音或文字",
      "ai.title": "描述行程，自动生成草稿",
      "ai.body1": "用自己的话，通过文字或语音描述行程。",
      "ai.body2": "草稿只会使用你的描述和文档，所有大致信息都会标明。",
      "ai.body3": "检查并确认草稿，即可在 Clavelo 中创建行程。",
      "ai.linkAria": "打开 Clavelo 并创建行程草稿",
      "ai.imageAlt": "行程草稿界面，包含文字输入框和语音输入按钮。",
      "extension.kicker": "来自浏览器的灵感",
      "extension.title": "使用 Chrome 扩展程序保存旅行发现",
      "extension.body1": "桌面版 Chrome 扩展程序目前以 Backpacker Travel Capture 名称发布。它会保存当前页面可用的信息，并将发现发送到“灵感”。",
      "extension.body2": "某些网站可能不会提供全部详情；来源链接仍会与灵感一起保存。",
      "extension.body3": "准备好后把灵感加入行程，也可以留待以后使用。",
      "extension.cta": "安装 Chrome 扩展程序",
      "extension.linkAria": "打开 Clavelo 的“灵感”",
      "extension.imageAlt": "Backpacker Travel Capture 侧边栏，显示旅行灵感及其来源。",
      "day.kicker": "按天规划",
      "day.title": "一天就是一列卡片",
      "day.body1": "每项活动都有自己的卡片。",
      "day.body2": "以清晰的活动顺序浏览每一天。",
      "day.body3": "计划变了？把卡片移到其他日期，或留在“灵感”中以后再安排。",
      "day.linkAria": "打开 Clavelo 并按天规划行程",
      "day.imageAlt": "两天的行程计划，以活动卡片形式呈现。",
      "card.kicker": "活动卡片",
      "card.title": "所需信息尽在一处",
      "card.body1": "时间、价格、预订链接、状态和备注都保存在同一张卡片中。",
      "card.body2": "添加有用的文件：机票或预订 PDF、登机牌、凭证扫描件或照片。",
      "card.body3": "无需翻找聊天记录，也能看清哪些已付款、哪些仍只是灵感。",
      "card.linkAria": "打开 Clavelo 并填写活动卡片",
      "card.imageAlt": "活动卡片，显示详情、价格、状态、预订链接和地点。",
      "budget.kicker": "预算",
      "budget.title": "总额自动更新",
      "budget.body1": "编辑或移动卡片时，Clavelo 会重新计算每天及整个行程的总额。",
      "budget.body2": "费用未知？可以留空或填写估算金额。",
      "budget.linkAria": "打开 Clavelo 并查看行程预算",
      "budget.imageAlt": "行程预算摘要，显示已付款、已预订和可用金额。",
      "organizer.kicker": "组织者模式",
      "organizer.title": "为整个团队提供一份最新行程",
      "organizer.body1": "根据计划变化创建并更新行程安排。",
      "organizer.body2": "与参与者分享最新行程、价格、条款和选定资料。",
      "organizer.body3": "内部预算保持私密。",
      "closing.title": "让行程的每个细节各就各位",
      "footer.privacy": "隐私政策",
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

  const api = { SUPPORTED_LOCALES, STORAGE_KEY, APP_URL, TRANSLATIONS, normalizeLocale, resolveInitialLocale };
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
      if (value) element.textContent = value;
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
