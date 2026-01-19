import type { Hadith } from "./types";
import type { Person } from "./types";
import type { Step } from "./types";

export const PILLARS_OF_ISLAM = [
  { name: "Shahada", desc: "The declaration of faith: 'There is no god but Allah, and Muhammad is the Messenger of Allah'." },
  { name: "Salah", desc: "Establishing five daily prayers at their prescribed times." },
  { name: "Zakat", desc: "Giving a portion of one's wealth to the needy annually." },
  { name: "Sawm", desc: "Fasting during the holy month of Ramadan." },
  { name: "Hajj", desc: "The pilgrimage to Mecca once in a lifetime for those who are able." }
];

export const ARTICLES_OF_FAITH = [
  { name: "Belief in Allah", desc: "The Oneness of the Creator." },
  { name: "Belief in Angels", desc: "Belief in the noble servants of Allah." },
  { name: "Belief in Books", desc: "Belief in the Quran, Torah, Psalms, and Gospel." },
  { name: "Belief in Prophets", desc: "Belief in all messengers from Adam to Muhammad ﷺ." },
  { name: "Belief in Judgment", desc: "Belief in the accountability of all human actions." },
  { name: "Belief in Decree", desc: "Belief in Qadar (Divine Decree)." }
];

export const PRAYER_STEPS: Step[] = [
  { title: "Takbirat-ul-Ihram", arabic: "تكبيرة الإحرام", description: "Beginning the prayer with Allahu Akbar." },
  { title: "Qiyam", arabic: "القيام", description: "Standing and reciting Al-Fatiha." },
  { title: "Ruku", arabic: "الركوع", description: "Bowing down with glorification." },
  { title: "Sujud", arabic: "السجود", description: "Prostrating with forehead on the ground." },
  { title: "Tashahhud", arabic: "التشهد", description: "Sitting for the testimony of faith." },
  { title: "Taslim", arabic: "التسليم", description: "Ending the prayer with peace." }
];

export const HADITHS: Hadith[] = [
  {
    id: 1,
    arabicText: "حدثنا الحميدي عبد الله بن الزبير قال: حدثنا سفيان قال: حدثنا يحيى بن سعيد الأنصاري قال: أخبرني محمد بن إبراهيم التيمي أنه سمع علقمة بن وقاص الليثي يقول: سمعت عمر بن الخطاب رضي الله عنه على المنبر قال: سمعت رسول الله صلى الله عليه وسلم يقول: إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى، فمن كانت هجرته إلى الله ورسوله فهجرته إلى الله ورسوله، ومن كانت هجرته لدنيا يصيبها أو امرأة ينكحها فهجرته إلى ما هاجر إليه",
    englishMeaning: "Actions are but by intentions, and every man shall have only that which he intended. Thus, he whose migration was for Allah and His Messenger, his migration was for Allah and His Messenger; and he whose migration was to achieve some worldly benefit or to take some woman in marriage, his migration was for that for which he migrated.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 1, Muslim: 1907",
    topic: "Intentions and Sincerity"
  },
  {
    id: 2,
    arabicText: "عن عبد الله بن عمر رضي الله عنهما قال: سمعت رسول الله صلى الله عليه وسلم يقول: بُني الإسلام على خمس: شهادة أن لا إله إلا الله وأن محمداً رسول الله، وإقام الصلاة، وإيتاء الزكاة، وصوم رمضان، وحج البيت من استطاع إليه سبيلاً",
    englishMeaning: "Islam is built upon five: Testifying that there is no deity worthy of worship except Allah and that Muhammad is the Messenger of Allah, establishing the prayer, paying the Zakat, fasting the month of Ramadan, and performing Hajj to the House for those who are able.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 8, Muslim: 16",
    topic: "Pillars of Islam"
  },
  {
    id: 3,
    arabicText: "عن أنس بن مالك رضي الله عنه عن النبي صلى الله عليه وسلم قال: لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",
    englishMeaning: "None of you truly believes until he loves for his brother what he loves for himself.",
    source: 'Bukhari',
    book: "Sahih Bukhari",
    reference: "Bukhari: 13",
    topic: "Brotherhood in Islam"
  },
  {
    id: 4,
    arabicText: "عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت، ومن كان يؤمن بالله واليوم الآخر فليكرم جاره، ومن كان يؤمن بالله واليوم الآخر فليكرم ضيفه",
    englishMeaning: "Whoever believes in Allah and the Last Day, let him speak good or remain silent. Whoever believes in Allah and the Last Day, let him honor his neighbor. Whoever believes in Allah and the Last Day, let him honor his guest.",
    source: 'Bukhari',
    book: "Sahih Bukhari",
    reference: "Bukhari: 6475",
    topic: "Muslim Etiquette"
  },
  {
    id: 5,
    arabicText: "عن تميم الداري رضي الله عنه أن النبي صلى الله عليه وسلم قال: الدين النصيحة، قلنا: لمن؟ قال: لله ولرسوله ولكتابه ولأئمة المسلمين وعامتهم",
    englishMeaning: "The religion is sincerity. We said: To whom? He said: To Allah, His Book, His Messenger, and to the leaders of the Muslims and their common folk.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 55",
    topic: "Sincerity in Religion"
  },
  {
    id: 6,
    arabicText: "عن أبي مالك الأشعري رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: الطهور شطر الإيمان، والحمد لله تملأ الميزان، وسبحان الله والحمد لله تملآن - أو تملأ - ما بين السماوات والأرض",
    englishMeaning: "Purity is half of faith. 'Alhamdulillah' (praise be to Allah) fills the scales, and 'Subhanallah' and 'Alhamdulillah' fill that which is between heaven and earth.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 223",
    topic: "Purification and Remembrance"
  },
  {
    id: 7,
    arabicText: "عن عبد الله بن عمرو رضي الله عنهما أن النبي صلى الله عليه وسلم قال: المسلم من سلم المسلمون من لسانه ويده، والمهاجر من هجر ما نهى الله عنه",
    englishMeaning: "A Muslim is one from whose tongue and hand other Muslims are safe. An emigrant is one who emigrates from what Allah has forbidden.",
    source: 'Bukhari',
    book: "Sahih Bukhari",
    reference: "Bukhari: 10",
    topic: "Characteristics of a Muslim"
  },
  {
    id: 8,
    arabicText: "عن عبد الله بن مسعود رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: لا يحل دم امرئ مسلم يشهد أن لا إله إلا الله وأني رسول الله إلا بإحدى ثلاث: النفس بالنفس، والثيب الزاني، والتارك لدينه المفارق للجماعة",
    englishMeaning: "It is not permissible to spill the blood of a Muslim who testifies that there is no god but Allah and that I am the Messenger of Allah except in three cases: a life for a life, a married person who commits adultery, and one who leaves his religion and separates from the community.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 6878, Muslim: 1676",
    topic: "Islamic Legal Punishments"
  },
  {
    id: 9,
    arabicText: "عن واثلة بن الأسقع رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: من غشنا فليس منا",
    englishMeaning: "Whoever deceives us is not one of us.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 101",
    topic: "Prohibition of Deception"
  },
  {
    id: 10,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: الكلمة الطيبة صدقة",
    englishMeaning: "A good word is charity.",
    source: 'Bukhari',
    book: "Sahih Bukhari",
    reference: "Bukhari: 2989",
    topic: "Virtue of Good Speech"
  },
  {
    id: 11,
    arabicText: "عن أبي ذر الغفاري رضي الله عنه قال: قال لي رسول الله صلى الله عليه وسلم: اتق الله حيثما كنت، وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن",
    englishMeaning: "Fear Allah wherever you are, follow up a bad deed with a good deed to erase it, and treat people with good character.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 6021, Muslim: 2553",
    topic: "Piety and Good Character"
  },
  {
    id: 12,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: من نفس عن مؤمن كربة من كرب الدنيا نفس الله عنه كربة من كرب يوم القيامة، ومن يسر على معسر يسر الله عليه في الدنيا والآخرة، ومن ستر مسلماً ستره الله في الدنيا والآخرة، والله في عون العبد ما كان العبد في عون أخيه",
    englishMeaning: "Whoever relieves a believer of a hardship from the hardships of this world, Allah will relieve him of a hardship from the hardships of the Day of Resurrection. Whoever makes things easy for one in difficulty, Allah will make things easy for him in this world and the Hereafter. Whoever covers the faults of a Muslim, Allah will cover his faults in this world and the Hereafter. Allah helps the servant as long as the servant helps his brother.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 2699",
    topic: "Mutual Assistance"
  },
  {
    id: 13,
    arabicText: "عن أبي ذر رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: تبسمك في وجه أخيك لك صدقة، وأمرك بالمعروف ونهيك عن المنكر صدقة، وإرشادك الرجل في أرض الضلال لك صدقة، وبصرك للرجل الرديء البصر لك صدقة، وإماطتك الحجر والشوك والعظم عن الطريق لك صدقة، وإفراغك من دلوك في دلو أخيك لك صدقة",
    englishMeaning: "Your smiling in the face of your brother is charity. Enjoining good and forbidding evil is charity. Your guiding a man in the land of misguidance is charity. Your seeing for a man with bad eyesight is charity. Your removing a stone, thorn, or bone from the road is charity. Your pouring water from your bucket into the bucket of your brother is charity.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 2989, Muslim: 2626",
    topic: "Forms of Charity"
  },
  {
    id: 14,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: إن الله لا ينظر إلى صوركم وأموالكم، ولكن ينظر إلى قلوبكم وأعمالكم",
    englishMeaning: "Indeed, Allah does not look at your appearances or wealth, but He looks at your hearts and deeds.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 2564",
    topic: "Sincerity in Deeds"
  },
  {
    id: 15,
    arabicText: "عن معاوية بن جاهمة السلمي رضي الله عنه أن جاهمة جاء إلى النبي صلى الله عليه وسلم فقال: يا رسول الله، أردت أن أغزو وقد جئت أستشيرك، فقال: هل لك من أم؟ قال: نعم، قال: فالزمها فإن الجنة تحت رجليها",
    englishMeaning: "A man came to the Prophet and said: 'O Messenger of Allah, I intend to go on a military expedition and I have come to consult you.' He said: 'Do you have a mother?' He said: 'Yes.' He said: 'Then stay with her, for Paradise is beneath her feet.'",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 5995, Muslim: 2548",
    topic: "Kindness to Parents"
  },
  {
    id: 16,
    arabicText: "عن عثمان بن عفان رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: خيركم من تعلم القرآن وعلمه",
    englishMeaning: "The best of you are those who learn the Quran and teach it.",
    source: 'Bukhari',
    book: "Sahih Bukhari",
    reference: "Bukhari: 5027",
    topic: "Virtue of Quran Learning"
  },
  {
    id: 17,
    arabicText: "عن عائشة رضي الله عنها قالت: قال رسول الله صلى الله عليه وسلم: إن الله يحب إذا عمل أحدكم عملاً أن يتقنه",
    englishMeaning: "Indeed, Allah loves that when one of you does a deed, he does it perfectly.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 6018, Muslim: 1955",
    topic: "Excellence in Work"
  },
  {
    id: 18,
    arabicText: "عن أبي موسى الأشعري رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: المؤمن للمؤمن كالبنيان يشد بعضه بعضاً، وشبك بين أصابعه",
    englishMeaning: "A believer to another believer is like a building whose different parts support each other. Then he interlaced his fingers.",
    source: 'Bukhari',
    book: "Sahih Bukhari",
    reference: "Bukhari: 2446",
    topic: "Unity of Believers"
  },
  {
    id: 19,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: الإيمان بضع وسبعون شعبة، فأفضلها قول لا إله إلا الله، وأدناها إماطة الأذى عن الطريق، والحياء شعبة من الإيمان",
    englishMeaning: "Faith has seventy-some branches. The most excellent of them is saying 'La ilaha illallah' (there is no god but Allah), and the lowest of them is removing harm from the road, and modesty is a branch of faith.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 9, Muslim: 35",
    topic: "Branches of Faith"
  },
  {
    id: 20,
    arabicText: "عن أبي مسعود الأنصاري رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: من دل على خير فله مثل أجر فاعله",
    englishMeaning: "Whoever guides to good will have a reward similar to the one who does it.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 1893",
    topic: "Guiding to Good"
  },
  {
    id: 21,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: ما نقصت صدقة من مال، وما زاد الله عبداً بعفو إلا عزاً، وما تواضع أحد لله إلا رفعه الله",
    englishMeaning: "Charity does not decrease wealth. Allah does not increase a servant in forgiveness except in honor. No one humbles himself for Allah except that Allah raises him.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 2588",
    topic: "Charity and Humility"
  },
  {
    id: 22,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: لا تدخلوا الجنة حتى تؤمنوا، ولا تؤمنوا حتى تحابوا، ألا أدلكم على شيء إذا فعلتموه تحاببتم؟ أفشوا السلام بينكم",
    englishMeaning: "You will not enter Paradise until you believe, and you will not believe until you love one another. Shall I tell you something which, if you do, you will love one another? Spread peace among yourselves.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 54",
    topic: "Love Among Believers"
  },
  {
    id: 23,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: إنما بعثت لأتمم مكارم الأخلاق",
    englishMeaning: "I have been sent only to perfect good character.",
    source: 'Bukhari',
    book: "Sahih Bukhari",
    reference: "Bukhari: 3559",
    topic: "Prophet's Mission"
  },
  {
    id: 24,
    arabicText: "عن أبي موسى الأشعري رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: من صلى البردين دخل الجنة",
    englishMeaning: "Whoever prays the two cool prayers (Fajr and Asr) will enter Paradise.",
    source: 'Bukhari',
    book: "Sahih Bukhari",
    reference: "Bukhari: 574",
    topic: "Prayer Virtues"
  },
  {
    id: 25,
    arabicText: "عن جابر بن عبد الله رضي الله عنهما قال: قال رسول الله صلى الله عليه وسلم: المؤمن يألف ويؤلف، ولا خير فيمن لا يألف ولا يؤلف، وخير الناس أنفعهم للناس",
    englishMeaning: "The believer is friendly and befriended. There is no good in one who is neither friendly nor befriended. The best of people are those who are most beneficial to people.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 6021, Muslim: 2553",
    topic: "Social Relations"
  },
  {
    id: 26,
    arabicText: "عن عائشة رضي الله عنها قالت: كان رسول الله صلى الله عليه وسلم إذا عمل عملاً أثبته، وكان إذا فاتته صلاة من الليل من وجع أو غيره صلى من النهار ثنتي عشرة ركعة",
    englishMeaning: "When the Messenger of Allah did something, he would be consistent with it. When he missed a night prayer due to pain or other reason, he would pray twelve rak'ahs during the day.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 6464, Muslim: 782",
    topic: "Consistency in Worship"
  },
  {
    id: 27,
    arabicText: "عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: ليس الشديد بالصرعة، إنما الشديد الذي يملك نفسه عند الغضب",
    englishMeaning: "The strong person is not the one who can wrestle, but the one who controls himself when angry.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 6114, Muslim: 2609",
    topic: "Anger Management"
  },
  {
    id: 28,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: من سلك طريقاً يلتمس فيه علماً سهل الله له به طريقاً إلى الجنة، وما اجتمع قوم في بيت من بيوت الله يتلون كتاب الله ويتدارسونه بينهم إلا نزلت عليهم السكينة، وغشيتهم الرحمة، وحفتهم الملائكة، وذكرهم الله فيمن عنده",
    englishMeaning: "Whoever travels a path in search of knowledge, Allah will make easy for him a path to Paradise. No people gather in a house from the houses of Allah, reciting the Book of Allah and studying it among themselves, except that tranquility descends upon them, mercy covers them, angels surround them, and Allah mentions them to those near Him.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 2699",
    topic: "Seeking Knowledge"
  },
  {
    id: 29,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: استوصوا بالنساء خيراً، فإن المرأة خلقت من ضلع، وإن أعوج ما في الضلع أعلاه، فإن ذهبت تقيمه كسرته، وإن تركته لم يزل أعوج، فاستوصوا بالنساء خيراً",
    englishMeaning: "Treat women kindly. The woman was created from a rib, and the most curved part of the rib is its top. If you try to straighten it, you will break it. If you leave it, it will remain curved. So treat women kindly.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 5185, Muslim: 1468",
    topic: "Treatment of Women"
  },
  {
    id: 30,
    arabicText: "عن عبد الله بن عمر رضي الله عنهما قال: قال رسول الله صلى الله عليه وسلم: ما زال جبريل يوصيني بالجار حتى ظننت أنه سيورثه",
    englishMeaning: "Gabriel kept advising me about the neighbor until I thought he would make him an heir.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 6014, Muslim: 2624",
    topic: "Rights of Neighbors"
  },
  {
    id: 31,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: اجتنبوا السبع الموبقات، قالوا: وما هن يا رسول الله؟ قال: الشرك بالله، والسحر، وقتل النفس التي حرم الله إلا بالحق، وأكل الربا، وأكل مال اليتيم، والتولي يوم الزحف، وقذف المحصنات الغافلات المؤمنات",
    englishMeaning: "Avoid the seven great destructive sins. They said: 'What are they, O Messenger of Allah?' He said: 'Associating partners with Allah, sorcery, killing a soul whom Allah has forbidden except by right, consuming usury, consuming the wealth of the orphan, fleeing from the battlefield, and slandering chaste, innocent believing women.'",
    source: 'Bukhari',
    book: "Sahih Bukhari",
    reference: "Bukhari: 2766",
    topic: "Major Sins"
  },
  {
    id: 32,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: الصيام جنة، فلا يرفث ولا يجهل، وإن امرؤ قاتله أو شاتمه فليقل: إني صائم، مرتين",
    englishMeaning: "Fasting is a shield. So the fasting person should avoid obscene speech and ignorant behavior. If someone fights him or insults him, he should say: 'I am fasting,' twice.",
    source: 'Bukhari',
    book: "Sahih Bukhari",
    reference: "Bukhari: 1894",
    topic: "Fasting Etiquette"
  },
  {
    id: 33,
    arabicText: "عن عثمان بن عفان رضي الله عنه قال: سمعت رسول الله صلى الله عليه وسلم يقول: من بنى مسجداً يبتغي به وجه الله بنى الله له بيتاً في الجنة",
    englishMeaning: "Whoever builds a mosque for the sake of Allah, Allah will build for him a house in Paradise.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 450, Muslim: 533",
    topic: "Building Mosques"
  },
  {
    id: 34,
    arabicText: "عن عبد الله بن مسعود رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: لا يدخل الجنة من كان في قلبه مثقال ذرة من كبر، قال رجل: إن الرجل يحب أن يكون ثوبه حسناً ونعله حسناً، قال: إن الله جميل يحب الجمال، الكبر بطر الحق وغمط الناس",
    englishMeaning: "He will not enter Paradise who has in his heart the weight of a mustard seed of arrogance. A man said: 'Indeed, a man loves to have nice clothes and nice shoes.' He said: 'Indeed, Allah is Beautiful and He loves beauty. Arrogance is rejecting the truth and looking down on people.'",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "مسلم: 91",
    topic: "Prohibition of Arrogance"
  },
  {
    id: 35,
    arabicText: "عن مالك بن الحويرث رضي الله عنه قال: قال لنا رسول الله صلى الله عليه وسلم: صلوا كما رأيتموني أصلي، فإذا حضرت الصلاة فليؤذن لكم أحدكم، وليؤمكم أكبركم",
    englishMeaning: "Pray as you have seen me praying. When the prayer time comes, let one of you give the call to prayer, and let the oldest among you lead the prayer.",
    source: 'Bukhari',
    book: "Sahih Bukhari",
    reference: "Bukhari: 631",
    topic: "Prayer Method"
  },
  {
    id: 36,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: من دعا إلى هدى كان له من الأجر مثل أجور من تبعه لا ينقص ذلك من أجورهم شيئاً، ومن دعا إلى ضلالة كان عليه من الإثم مثل آثام من تبعه لا ينقص ذلك من آثامهم شيئاً",
    englishMeaning: "Whoever calls to guidance will have a reward similar to the rewards of those who follow him, without diminishing their rewards in the slightest. Whoever calls to misguidance will bear a sin similar to the sins of those who follow him, without diminishing their sins in the slightest.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 2674",
    topic: "Calling to Guidance"
  },
  {
    id: 37,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: السفر قطعة من العذاب، يمنع أحدكم نومه وطعامه وشرابه، فإذا قضى أحدكم نهمته من سفره فليعجل إلى أهله",
    englishMeaning: "Traveling is a piece of torment. It prevents one of you from his sleep, food, and drink. So when one of you has accomplished his purpose from his journey, let him hurry back to his family.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 3001, Muslim: 1927",
    topic: "Travel Etiquette"
  },
  {
    id: 38,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: من حسن إسلام المرء تركه ما لا يعنيه",
    englishMeaning: "Part of a person's good Islam is leaving that which does not concern him.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 6118, Muslim: 2950",
    topic: "Good Conduct"
  },
  {
    id: 39,
    arabicText: "عن أنس بن مالك رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: لا يؤمن أحدكم حتى أكون أحب إليه من والده وولده والناس أجمعين",
    englishMeaning: "None of you truly believes until I am more beloved to him than his father, his child, and all of mankind.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 15, Muslim: 44",
    topic: "Love for the Prophet"
  },
  {
    id: 40,
    arabicText: "عن سهل بن سعد الساعدي رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: إنما الأعمال بالخواتيم",
    englishMeaning: "Actions are but by their endings.",
    source: 'Bukhari',
    book: "Sahih Bukhari",
    reference: "Bukhari: 6607",
    topic: "Good Ending"
  },
  {
    id: 41,
    arabicText: "عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: المسلم أخو المسلم، لا يظلمه ولا يخذله ولا يحقره، التقوى هاهنا - ويشير إلى صدره ثلاث مرات - بحسب امرئ من الشر أن يحقر أخاه المسلم، كل المسلم على المسلم حرام: دمه وماله وعرضه",
    englishMeaning: "A Muslim is the brother of another Muslim. He does not wrong him, nor surrender him, nor despise him. Taqwa is here - and he pointed to his chest three times. It is enough evil for a man to despise his Muslim brother. Every Muslim is inviolable to another Muslim: his blood, his wealth, and his honor.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 2564",
    topic: "Brotherhood Rights"
  },
  {
    id: 42,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: يقول الله تعالى: أنا عند ظن عبدي بي، وأنا معه إذا ذكرني، فإن ذكرني في نفسه ذكرته في نفسي، وإن ذكرني في ملأ ذكرته في ملأ خير منهم، وإن تقرب إلي بشبر تقربت إليه ذراعاً، وإن تقرب إلي ذراعاً تقربت إليه باعاً، وإن أتاني يمشي أتيته هرولة",
    englishMeaning: "Allah the Exalted says: I am as My servant thinks of Me, and I am with him when he remembers Me. If he remembers Me in himself, I remember him in Myself. If he remembers Me in a gathering, I remember him in a better gathering. If he draws near to Me by a handspan, I draw near to him by a forearm's length. If he draws near to Me by a forearm's length, I draw near to him by an arm's length. If he comes to Me walking, I come to him running.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 7405, Muslim: 2675",
    topic: "Allah's Closeness"
  },
  {
    id: 43,
    arabicText: "عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: الصلوات الخمس، والجمعة إلى الجمعة، كفارة لما بينهن ما لم تغش الكبائر",
    englishMeaning: "The five daily prayers, and Friday prayer to the next Friday prayer, are expiation for what is between them, so long as major sins are avoided.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 233",
    topic: "Expiation of Sins"
  },
  {
    id: 44,
    arabicText: "عن أبي هريرة رضي الله عنه أن رجلاً قال للنبي صلى الله عليه وسلم: أوصني، قال: لا تغضب، فردد مراراً، قال: لا تغضب",
    englishMeaning: "A man said to the Prophet: 'Advise me.' He said: 'Do not get angry.' He repeated it several times. He said: 'Do not get angry.'",
    source: 'Bukhari',
    book: "Sahih Bukhari",
    reference: "Bukhari: 6116",
    topic: "Controlling Anger"
  },
  {
    id: 45,
    arabicText: "عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: كل المسلم على المسلم حرام: دمه وماله وعرضه",
    englishMeaning: "Every Muslim is inviolable to another Muslim: his blood, his wealth, and his honor.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 2564",
    topic: "Sanctity of Muslims"
  },
  {
    id: 46,
    arabicText: "عن عبد الله بن عمر رضي الله عنهما أن رسول الله صلى الله عليه وسلم قال: البيعان بالخيار ما لم يتفرقا، فإن صدقا وبينا بورك لهما في بيعهما، وإن كتما وكذبا محقت بركة بيعهما",
    englishMeaning: "The two parties to a transaction have the option (to cancel) until they part. If they are truthful and disclose (any defects), their transaction will be blessed. If they conceal and lie, the blessing of their transaction will be erased.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 2112, Muslim: 1531",
    topic: "Business Ethics"
  },
  {
    id: 47,
    arabicText: "عن أبي سعيد الخدري رضي الله عنه قال: سمعت رسول الله صلى الله عليه وسلم يقول: من رأى منكم منكراً فليغيره بيده، فإن لم يستطع فبلسانه، فإن لم يستطع فبقلبه، وذلك أضعف الإيمان",
    englishMeaning: "Whoever among you sees an evil, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart, and that is the weakest of faith.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 49",
    topic: "Enjoining Good"
  },
  {
    id: 48,
    arabicText: "عن شداد بن أوس رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: إن الله كتب الإحسان على كل شيء، فإذا قتلتم فأحسنوا القتلة، وإذا ذبحتم فأحسنوا الذبحة، وليحد أحدكم شفرته، وليرح ذبيحته",
    englishMeaning: "Indeed, Allah has prescribed excellence in all things. So if you kill, kill well. If you slaughter, slaughter well. Let one of you sharpen his blade and give relief to his animal.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 1955",
    topic: "Excellence in All Matters"
  },
  {
    id: 49,
    arabicText: "عن عبد الله بن عمرو بن العاص رضي الله عنهما أنه سمع رسول الله صلى الله عليه وسلم يقول: إذا سمعتم المؤذن فقولوا مثل ما يقول، ثم صلوا علي، فإنه من صلى علي صلاة صلى الله عليه بها عشراً، ثم سلوا الله لي الوسيلة، فإنها منزلة في الجنة لا تنبغي إلا لعبد من عباد الله، وأرجو أن أكون أنا هو، فمن سأل لي الوسيلة حلت له الشفاعة",
    englishMeaning: "When you hear the Mu'adhdhin calling, say what he says, then send blessings upon me. For whoever sends blessings upon me once, Allah will send blessings upon him tenfold. Then ask Allah to grant me Al-Wasilah, for it is a station in Paradise that is fitting only for one of Allah's servants, and I hope that I will be him. Whoever asks for Al-Wasilah for me, intercession will be permissible for him.",
    source: 'Muslim',
    book: "Sahih Muslim",
    reference: "Muslim: 384",
    topic: "Blessings on Prophet"
  },
  {
    id: 50,
    arabicText: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: تسموا باسمي، ولا تكتنوا بكنيتي، فإني أنا أبو القاسم، أقسم بينكم",
    englishMeaning: "You may name yourselves with my name, but do not use my kunya (Abu al-Qasim). For I am Abu al-Qasim; I apportion among you.",
    source: 'Both',
    book: "Sahih Bukhari & Sahih Muslim",
    reference: "Bukhari: 3534, Muslim: 2133",
    topic: "Naming Etiquette"
  }
];

export const PEOPLE: Person[] = [
  {
    id: "muhammad",
    name: "Prophet Muhammad ﷺ",
    title: "The Final Messenger",
    description: "The Seal of the Prophets and the perfect example for all mankind.",
    birth: "570 CE, Mecca",
    tribe: "Quraysh (Banu Hashim)",
    achievements: ["Revelation of the Quran", "Established Islam", "Unified Arabia"],
    fullBiography: `Prophet Muhammad ﷺ was born in the Year of the Elephant in Mecca. His father, Abdullah, died before his birth, and his mother, Aminah, passed away when he was six. He was raised by his grandfather Abdul-Muttalib and later his uncle Abu Talib. Known as 'Al-Amin' (the Trustworthy) for his integrity, he received the first revelation at the age of 40 in the Cave of Hira. 
    
    For the next 23 years, he preached the message of monotheism (Tawhid). Despite intense persecution in Mecca, he remained steadfast, eventually migrating to Medina (the Hijra) in 622 CE. In Medina, he established a model society based on justice and equality. He led several defensive battles to protect the nascent Muslim community. 
    
    In 630 CE, he returned to Mecca in a bloodless conquest, showing unprecedented mercy by forgiving his former enemies. He delivered his Final Sermon, emphasizing human rights and brotherhood. By his death in 632 CE, Islam had spread across the Arabian Peninsula. His life serves as a guide for ethics, leadership, and spirituality. He remains the most influential figure in human history, loved by billions. He was a mercy to the worlds, teaching compassion even towards animals and the environment. His legacy is the Quran and his Sunnah, which continue to illuminate the path for seekers of truth.`
  },
  {
    id: "abubakr",
    name: "Abu Bakr As-Siddiq",
    title: "The First Caliph",
    description: "The closest companion and the first adult male to embrace Islam.",
    birth: "573 CE, Mecca",
    tribe: "Quraysh (Banu Taym)",
    achievements: ["First Caliph", "Preserved the Ummah during Ridda Wars", "Compiled the Quran"],
    fullBiography: `Abu Bakr was a wealthy and respected merchant in Mecca, known for his wisdom and gentle character. He was the first person outside the Prophet's immediate family to believe in his mission. Throughout the Meccan period, he used his wealth to free oppressed slaves, most notably Bilal ibn Rabah. He accompanied the Prophet ﷺ during the dangerous Hijra to Medina, staying by his side in the Cave of Thawr.
    
    The Prophet ﷺ called him 'As-Siddiq' (the Truthful) after his unwavering belief in the Night Journey (Isra and Mi'raj). Upon the Prophet's death, Abu Bakr's steady hand guided the shocked community, reminding them that while Muhammad ﷺ had passed, Allah lives forever. As the first Caliph, he faced the 'Ridda' (apostasy) wars, successfully unifying the Peninsula once more.
    
    He ordered the first systematic compilation of the Quranic verses into a single volume. His caliphate, though brief (two years), was foundational for the Islamic state. He lived a life of extreme simplicity, refusing any luxury from the public treasury. His devotion was such that the Prophet ﷺ once said if the faith of the entire Ummah were weighed against Abu Bakr's, his would outweigh it. He passed away in 634 CE and was buried next to the Prophet ﷺ.`
  },
  {
    id: "umar",
    name: "Umar ibn Al-Khattab",
    title: "The Second Caliph",
    description: "Al-Faruq, the one who distinguished between truth and falsehood.",
    birth: "584 CE, Mecca",
    tribe: "Quraysh (Banu Adi)",
    achievements: ["Expanded the State", "Established the Hijri Calendar", "Judicial Systems"],
    fullBiography: `Umar ibn Al-Khattab was initially a fierce opponent of Islam, but his conversion became a monumental strength for the early Muslims. His transformation was sparked by hearing the verses of Surah Ta-Ha. He was known for his physical strength, immense courage, and piercing intellect. After his conversion, Muslims were able to pray openly at the Kaaba for the first time.
    
    As the second Caliph, Umar oversaw an unprecedented expansion of the Islamic state, including the liberation of Jerusalem and the defeat of the Sassanid and Byzantine empires. Despite this power, he remained incredibly humble, often found sleeping on a simple mat under a tree. He established the 'Diwan' (administrative departments), a professional judiciary, and the Hijri calendar.
    
    He was famously called 'Al-Faruq' by the Prophet ﷺ. His justice was legendary; he would walk the streets of Medina at night to personally ensure every citizen was fed and safe. He once famously said, 'If a mule were to stumble on the banks of the Euphrates, I would fear that Allah would ask me why I did not pave the road for it.' He was martyred in 644 CE while leading the dawn prayer. His ten-year reign defined the administrative and ethical standards of Islamic governance for centuries to come.`
  },
  {
    id: "uthman",
    name: "Uthman ibn Affan",
    title: "The Third Caliph",
    description: "Dhun-Nurayn (The Possessor of Two Lights).",
    birth: "576 CE, Taif",
    tribe: "Quraysh (Banu Umayya)",
    achievements: ["Standardized the Quran", "Expanded the Navy", "Philanthropy"],
    fullBiography: `Uthman ibn Affan was known for his extreme modesty and generosity. He was a wealthy merchant who used his vast resources to support the Muslim community. He was given the title 'Dhun-Nurayn' because he married two of the Prophet's daughters, Ruqayyah and later Umm Kulthum. He was among the first to emigrate to Abyssinia to escape persecution.
    
    During his twelve-year caliphate, the Islamic state expanded into North Africa, Cyprus, and parts of Central Asia. His most enduring contribution was the standardization of the Quranic script (the Mus'haf), ensuring that a single, unified reading of the Holy Book was preserved for all future generations. He also established the first Muslim naval fleet to protect coastal regions.
    
    Uthman was a man of deep prayer and devotion, often completing the recitation of the entire Quran in a single night. His charity was boundless; he bought the Well of Rummah for the people of Medina when they suffered from water shortages. Despite facing internal rebellion in his later years, he refused to allow his guards to use force against his fellow Muslims, choosing to sacrifice his life rather than shed Muslim blood. He was martyred in 656 CE while reciting the Quran. His patience and sacrifice remain a testament to the depth of his character and faith.`
  },
  {
    id: "ali",
    name: "Ali ibn Abi Talib",
    title: "The Fourth Caliph",
    description: "The Lion of Allah and the Gate of Knowledge.",
    birth: "601 CE, Mecca",
    tribe: "Quraysh (Banu Hashim)",
    achievements: ["Brave Warrior", "Vast Knowledge", "Spiritual Depth"],
    fullBiography: `Ali ibn Abi Talib was the cousin and son-in-law of the Prophet ﷺ, being the first child to embrace Islam. He grew up in the Prophet's household and was his constant companion. He famously slept in the Prophet's bed during the night of the Hijra to deceive the assassins, risking his own life. He was married to the Prophet's beloved daughter, Fatima Az-Zahra.
    
    In the battlefield, Ali was legendary for his courage and skill, particularly at Badr, Uhud, and Khaybar, where he carried the heavy gate of the fortress alone. However, his physical strength was matched by his profound wisdom. The Prophet ﷺ said, 'I am the city of knowledge, and Ali is its gate.' He was a master of Arabic linguistics, jurisprudence, and spiritual philosophy.
    
    As the fourth Caliph, Ali faced a period of intense internal turmoil and civil war. Throughout these challenges, he maintained his focus on justice, refusing to compromise on principles even when it was politically difficult. His sermons and letters, later collected in Nahj al-Balagha, are masterpieces of eloquence and moral guidance. He lived a life of poverty by choice, often working for daily wages to feed his family. He was martyred in 661 CE in Kufa while praying. His life remains the ultimate example of combining bravery with deep spirituality and intellectual rigor.`
  },
  {
    id: "talha",
    name: "Talha ibn Ubaydullah",
    title: "The Living Martyr",
    description: "One of the earliest converts and a hero of Uhud.",
    birth: "594 CE, Mecca",
    tribe: "Quraysh (Banu Taym)",
    achievements: ["Protector of the Prophet at Uhud", "Extreme Generosity"],
    fullBiography: `Talha ibn Ubaydullah was one of the first eight people to embrace Islam. He was a successful businessman known as 'Talha the Generous'. During the Battle of Uhud, when the Muslim lines were broken, Talha single-handedly defended the Prophet ﷺ, receiving over 70 wounds and losing the use of his hand while shielding him from arrows. 
    
    The Prophet ﷺ called him a 'Living Martyr' for his sacrifice. He was renowned for his charity; on one occasion, he received 700,000 dirhams and did not sleep until he had distributed every single coin to the poor. He was a key figure in the early community, always ready to serve the cause of Islam with his life and wealth. His loyalty to the Prophet ﷺ was legendary, and he was among the ten promised Paradise. He was martyred at the Battle of the Camel in 656 CE.`
  },
  {
    id: "zubayr",
    name: "Az-Zubayr ibn Al-Awwam",
    title: "The Disciple of the Messenger",
    description: "The Prophet's cousin and a fierce warrior.",
    birth: "594 CE, Mecca",
    tribe: "Quraysh (Banu Asad)",
    achievements: ["Fought in all major battles", "Known for his bravery"],
    fullBiography: `Az-Zubayr ibn Al-Awwam was the nephew of Khadija and a cousin of the Prophet ﷺ. He embraced Islam at the age of 15 and was the first to draw a sword for the cause of Islam. He was known for his intense bravery in the battlefield, often leading the charge against overwhelming odds. 
    
    The Prophet ﷺ said, 'Every Prophet has a disciple (Hawari), and my disciple is Zubayr.' He was among the small group of Sahaba who remained steadfast during the most difficult moments of the early battles. He was also a successful merchant, but like his companions, he lived a simple life, spending his wealth for the sake of Allah. He was one of the ten promised Paradise and was martyred alongside Talha in 656 CE.`
  },
  {
    id: "abdurrahman",
    name: "Abdur-Rahman ibn Awf",
    title: "The Merchant of Paradise",
    description: "A business genius who used his wealth for Islam.",
    birth: "580 CE, Mecca",
    tribe: "Quraysh (Banu Zuhra)",
    achievements: ["Successful business model", "Massive philanthropy"],
    fullBiography: `Abdur-Rahman ibn Awf was one of the first eight people to embrace Islam. When he migrated to Medina, he arrived with nothing. When offered half of his brother Sa'd's wealth, he politely declined and asked to be shown the way to the market. Within days, he had built a thriving business, eventually becoming one of the wealthiest men in Medina. 
    
    He believed that wealth was a trust from Allah. He once donated 700 camels loaded with goods to the poor of Medina. He also freed hundreds of slaves and supported the widows of the Prophet ﷺ. He was known for his humility; it was often said that a stranger could not distinguish him from his servants. He was one of the ten promised Paradise and a member of the Shura council that chose the third Caliph.`
  },
  {
    id: "saad",
    name: "Sa'd ibn Abi Waqqas",
    title: "The Conqueror of Persia",
    description: "The maternal uncle of the Prophet and a master archer.",
    birth: "595 CE, Mecca",
    tribe: "Quraysh (Banu Zuhra)",
    achievements: ["Battle of Qadisiyyah", "First to shoot an arrow for Islam"],
    fullBiography: `Sa'd ibn Abi Waqqas embraced Islam at the age of 17. He was the first person to draw blood and shoot an arrow in the cause of Islam. He was known for his exceptional skill in archery and was one of the Prophet's most trusted commanders. The Prophet ﷺ would say, 'Shoot, Sa'd! May my father and mother be sacrificed for you!'
    
    His most significant achievement was leading the Muslim army to victory at the Battle of Qadisiyyah against the Sassanid Persian Empire, which opened the way for Islam into the East. He also founded the city of Kufa in Iraq. Despite his military successes, he was a deeply spiritual man whose prayers were known to be always answered. He was the last of the ten promised Paradise to pass away, dying in 674 CE in his palace outside Medina.`
  },
  {
    id: "said",
    name: "Sa'id ibn Zayd",
    title: "The Devout Companion",
    description: "The brother-in-law of Umar ibn Al-Khattab.",
    birth: "593 CE, Mecca",
    tribe: "Quraysh (Banu Adi)",
    achievements: ["Early convert", "Fought at Yarmouk"],
    fullBiography: `Sa'id ibn Zayd came from a family that practiced monotheism even before the advent of Islam. His father, Zayd ibn Amr, was one of the 'Hanifs'. Sa'id and his wife Fatimah (Umar's sister) were among the earliest converts. It was at their home that Umar ibn Al-Khattab embraced Islam after hearing the Quran.
    
    Sa'id was a man of quiet devotion and immense bravery. He participated in every major battle except Badr, as he was on a reconnaissance mission. He played a crucial role in the Battle of Yarmouk against the Byzantines. He preferred a life of seclusion and worship over political power, often refusing leadership positions offered by the Caliphs. He was one of the ten promised Paradise and passed away in 671 CE.`
  },
  {
    id: "abuubaidah",
    name: "Abu Ubaidah ibn Al-Jarrah",
    title: "The Trustworthy of the Ummah",
    description: "The supreme commander of the Levant forces.",
    birth: "583 CE, Mecca",
    tribe: "Quraysh (Banu Al-Harith)",
    achievements: ["Conquered the Levant", "Supreme Commander"],
    fullBiography: `Abu Ubaidah was one of the first people to embrace Islam. The Prophet ﷺ said of him, 'Every nation has a trustworthy person, and the trustworthy one of this Ummah is Abu Ubaidah ibn Al-Jarrah.' He was known for his extreme asceticism and beautiful character. 
    
    He led the Muslim armies during the conquest of the Levant (Sham), including the liberation of Damascus and Antioch. Despite his high rank, he lived in a small tent with nothing but his sword and shield. When Umar visited him, he wept at Abu Ubaidah's simple life. He was martyred during the Plague of Amwas in 639 CE, having refused to leave his troops to save himself. He was one of the ten promised Paradise and was the one whom Abu Bakr first proposed as Caliph.`
  }
];

export const WUDU_STEPS: Step[] = [
  { title: "Intention & Bismillah", description: "Make a sincere intention (Niyyah) in your heart." },
  { title: "Wash Hands", description: "Wash both hands up to the wrists three times." },
  { title: "Rinse Mouth", description: "Rinse the mouth thoroughly three times." },
  { title: "Cleanse Nose", description: "Sniff water into the nostrils and blow it out." },
  { title: "Wash Face", description: "Wash the entire face three times." },
  { title: "Wash Arms", description: "Wash both arms including the elbow three times." },
  { title: "Wipe Head", description: "Wipe the head once with wet hands." },
  { title: "Wash Feet", description: "Wash both feet up to the ankle three times." }
];

export const SALAH_PREPARATION = [
  { 
    title: "Purity (Taharah)", 
    description: "Perform Wudu/Ghusl if required. Ensure body, clothes, and prayer area are clean.",
    icon: "🛁",
    arabic: "الطهارة",
    details: ["Body must be clean", "Clothes free from impurities", "Prayer area must be pure"]
  },
  { 
    title: "Qibla Direction", 
    description: "Face the direction of the Kaaba in Makkah. Use a compass or mobile app if unsure.",
    icon: "🕌",
    arabic: "القبلة",
    details: ["Face Kaaba direction", "Use Qibla finder", "Approximate if uncertain"]
  },
  { 
    title: "Prayer Time", 
    description: "Ensure the prayer time has entered. Each prayer has specific time windows.",
    icon: "⏰",
    arabic: "وقت الصلاة",
    details: ["Fajr: Dawn to sunrise", "Dhuhr: Noon to shadow length", "Asr: Afternoon", "Maghrib: Sunset", "Isha: Night"]
  },
  { 
    title: "Covering Awrah", 
    description: "Cover the body appropriately - men: navel to knees, women: entire body except face and hands.",
    icon: "👚",
    arabic: "ستر العورة",
    details: ["Men: Navel to knees", "Women: Full body except face/hands", "Clean, loose clothing"]
  },
  { 
    title: "Intention (Niyyah)", 
    description: "Make intention in your heart for which prayer you're performing.",
    icon: "💖",
    arabic: "النية",
    details: ["Make in heart, not aloud", "Specify prayer type", "Face Qibla in intention"]
  }
];

export const SALAH_POSITIONS = [
  {
    id: "standing",
    title: "Standing (Qiyam)",
    arabic: "القيام",
    description: "Face Qibla, feet shoulder-width apart, hands at sides then raised for Takbir.",
    icon: "🧍",
    steps: [
      "Stand facing Qibla direction",
      "Feet shoulder-width apart",
      "Raise hands to ears while saying 'Allāhu Akbar'",
      "Place right hand over left on chest",
      "Eyes looking at prostration spot"
    ],
    visual: "👤→🤲",
    arabicTerm: "التكبيرة"
  },
  {
    id: "ruku",
    title: "Bowing (Ruku')",
    arabic: "الركوع",
    description: "Bend at waist until back is parallel to ground, hands on knees with fingers spread.",
    icon: "🫴",
    steps: [
      "Say 'Allāhu Akbar' while bowing",
      "Back parallel to ground",
      "Hands on knees, fingers spread",
      "Knees straight, not bent",
      "Say 'Subḥāna Rabbiyal-'Aẓīm' (3 times)"
    ],
    visual: "🫴→📿",
    arabicTerm: "سبحان ربي العظيم"
  },
  {
    id: "sujud",
    title: "Prostration (Sujud)",
    arabic: "السجود",
    description: "Forehead, nose, palms, knees, and toes touch ground - 7 points of contact.",
    icon: "🤲",
    steps: [
      "Say 'Allāhu Akbar' while prostrating",
      "Forehead and nose touch ground",
      "Palms beside shoulders/ears",
      "Elbows raised off ground",
      "Toes curled facing Qibla",
      "Say 'Subḥāna Rabbiyal-A'lā' (3 times)"
    ],
    visual: "🤲🦗",
    arabicTerm: "سبحان ربي الأعلى"
  },
  {
    id: "sitting",
    title: "Sitting (Jalsah/Qa'dah)",
    arabic: "الجلوس",
    description: "Sit between prostrations and for Tashahhud - specific sitting positions.",
    icon: "🧘",
    steps: [
      "Sit on left foot (between prostrations)",
      "Right foot upright, toes pointing Qibla",
      "Hands on thighs near knees",
      "Say 'Rabbi ighfir lī' (My Lord, forgive me)",
      "For Tashahhud: sit in Tawarruk position"
    ],
    visual: "🧘→👉",
    arabicTerm: "التحيات"
  }
];

export const SALAH_RECITATION = [
  {
    step: 1,
    title: "Opening Supplication (Sunnah)",
    arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَىٰ جَدُّكَ، وَلَا إِلَٰهَ غَيْرُكَ (على سبيل المثال)",
    transliteration: "Subḥānak Allāhumma wa biḥamdika, wa tabārakas-muka, wa ta'ālā jadduka, wa lā ilāha ghayruk",
    translation: "Glory be to You, O Allah, and praise be to You. Blessed is Your name and exalted is Your majesty. There is no god besides You."
  },
  {
    step: 2,
    title: "Seeking Refuge (Ta'awwudh)",
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: "A'ūdhu billāhi minash-shayṭānir-rajīm",
    translation: "I seek refuge with Allah from Satan, the accursed."
  },
  {
    step: 3,
    title: "Basmalah",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Bismillāhir-Raḥmānir-Raḥīm",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful."
  },
  {
    step: 4,
    title: "Surah Al-Fatihah",
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ...",
    transliteration: "Al-ḥamdu lillāhi Rabbil-'ālamīn",
    translation: "[All] praise is [due] to Allah, Lord of the worlds."
  },
  {
    step: 5,
    title: "Additional Surah",
    arabic: "(على سبيل المثال) قُلْ هُوَ اللَّهُ أَحَدٌ",
    transliteration: "Qul huwallāhu Aḥad",
    translation: "Say, 'He is Allah, [who is] One.'",
    note: "Recite any surah after Al-Fatihah in first two rak'ahs"
  }
];

export const TASHAHHUD_TEXT = {
  arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
  transliteration: "At-taḥiyyātu lillāhi waṣ-ṣalawātu waṭ-ṭayyibāt, as-salāmu 'alayka ayyuhan-nabiyyu wa raḥmatullāhi wa barakātuh, as-salāmu 'alaynā wa 'alā 'ibādillāhiṣ-ṣāliḥīn, ash-hadu an lā ilāha illallāh wa ash-hadu anna Muḥammadan 'abduhū wa rasūluh",
  translation: "All compliments, prayers, and pure words are due to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god except Allah, and I bear witness that Muhammad is His servant and Messenger."
};

export const PRAYER_TYPES = [
  {
    name: "Fajr",
    rakats: 2,
    time: "Dawn to sunrise",
    type: "Fard",
    audible: true,
    color: "from-blue-400 to-indigo-500"
  },
  {
    name: "Dhuhr",
    rakats: 4,
    time: "Noon until shadow length",
    type: "Fard",
    audible: false,
    color: "from-amber-500 to-orange-500"
  },
  {
    name: "Asr",
    rakats: 4,
    time: "Afternoon until sunset",
    type: "Fard",
    audible: false,
    color: "from-emerald-500 to-teal-600"
  },
  {
    name: "Maghrib",
    rakats: 3,
    time: "Sunset to dusk",
    type: "Fard",
    audible: true,
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Isha",
    rakats: 4,
    time: "Dusk to midnight",
    type: "Fard",
    audible: true,
    color: "from-slate-700 to-slate-900"
  }
];

export const NULLIFIERS_OF_PRAYER = [
  "Speaking intentionally (except for correcting prayer)",
  "Eating or drinking deliberately",
  "Laughing (even unintentionally)",
  "Turning away from Qibla without valid reason",
  "Major impurity occurring during prayer",
  "Missing an essential pillar intentionally",
  "Excessive unnecessary movement",
  "Losing consciousness or sleep",
  "Breaking Wudu during prayer"
];

export const VISUAL_PRAYER_FLOW = {
  prayerSteps: [
    { english: 'Standing', arabic: 'القيام', transliteration: 'Qiyam' },
    { english: 'Bowing', arabic: 'الركوع', transliteration: 'Ruku' },
    { english: 'Prostration', arabic: 'السجود', transliteration: 'Sujud' },
    { english: 'Sitting', arabic: 'الجلوس', transliteration: 'Julus' },
    { english: 'Tasleem', arabic: 'التسليم', transliteration: 'Tasleem' }
  ] as const,

  preparation: [
    {
      title: 'Purity',
      arabic: 'الطهارة',
      descriptions: [
        'Perform Wudu or Ghusl if required',
        'Ensure body is clean',
        'Clothes must be free from impurities',
        'Prayer area must be pure'
      ]
    },
    {
      title: 'Qibla',
      arabic: 'القبلة',
      descriptions: [
        'Face the direction of the Kaaba',
        'Use compass or Qibla finder',
        'If uncertain, approximate direction',
        'Intention includes facing Qibla'
      ]
    },
    {
      title: 'Prayer Time',
      arabic: 'وقت الصلاة',
      descriptions: [
        'Ensure prayer time has entered',
        'Fajr: Dawn to sunrise',
        'Dhuhr: Noon until shadow length',
        'Asr, Maghrib, Isha: Specific windows'
      ]
    },
    {
      title: 'Covering Awrah',
      arabic: 'ستر العورة',
      descriptions: [
        'Men: Navel to knees covered',
        'Women: Full body except face/hands',
        'Clean, loose clothing',
        'Modest attire'
      ]
    },
    {
      title: 'Intention',
      arabic: 'النية',
      descriptions: [
        'Make intention in heart',
        'Specify prayer being performed',
        'Not spoken aloud',
        'Face Qibla during intention'
      ]
    }
  ] as const,

  dailyPrayers: [
    { name: 'Fajr', time: 'Dawn to Sunrise', rakahs: 2, color: 'from-blue-400 to-indigo-500' },
    { name: 'Dhuhr', time: 'Noon to Mid-Afternoon', rakahs: 4, color: 'from-amber-500 to-orange-500' },
    { name: 'Asr', time: 'Late Afternoon to Sunset', rakahs: 4, color: 'from-emerald-500 to-teal-600' },
    { name: 'Maghrib', time: 'Sunset to Dusk', rakahs: 3, color: 'from-purple-500 to-pink-600' },
    { name: 'Isha', time: 'Dusk to Midnight', rakahs: 4, color: 'from-slate-700 to-slate-900' }
  ] as const,

  prayerPositions: [
    { english: 'Standing', arabic: 'القيام', transliteration: 'Qiyam', description: 'Face Qibla, recite Al-Fatiha and additional surah' },
    { english: 'Bowing', arabic: 'الركوع', transliteration: 'Ruku', description: 'Back parallel to ground, glorify Allah' },
    { english: 'Prostration', arabic: 'السجود', transliteration: 'Sujud', description: 'Forehead, nose, hands, knees, toes touch ground' },
    { english: 'Sitting', arabic: 'الجلوس', transliteration: 'Julus', description: 'Between prostrations and for Tashahhud' }
  ] as const,

  movementSequence: [
    'Stand facing the Qibla with intention',
    'Raise hands for Takbir (Allahu Akbar)',
    'Place right hand over left on chest',
    'Recite opening supplication and Al-Fatiha',
    'Bow down for Ruku with glorification',
    'Stand up straight after Ruku',
    'Prostrate with forehead and nose on ground',
    'Sit between the two prostrations',
    'Perform second prostration',
    'Stand for the next Rak\'ah if required',
    'Recite Tashahhud in final sitting',
    'Turn head right and left for Tasleem'
  ] as const
};

export const POST_SALAH_DHIKR = [
  { arabic: "أستغفر الله", transliteration: "Astaghfirullāh", times: 3, meaning: "I seek forgiveness from Allah" },
  { arabic: "اللهم أنت السلام ومنك السلام تباركت يا ذا الجلال والإكرام", transliteration: "Allāhumma antas-salāmu wa minkas-salām, tabārakta yā dhal-jalāli wal-ikrām", times: 1, meaning: "O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of majesty and honor." },
  { arabic: "اللهم أعنا على شكرك وذكرك وحسن عبادتك", transliteration: "Allāhumma aʿinnā ʿalā shukrika wa dhikrika wa ḥusni ʿibādatik", times: 1, meaning: "O Allah, help us to be grateful to You, to remember You, and to worship You in the best manner." },
  { arabic: "سبحان الله", transliteration: "Subḥānallāh", times: 33, meaning: "Glory be to Allah" },
  { arabic: "الحمد لله", transliteration: "Alḥamdulillāh", times: 33, meaning: "All praise is for Allah" },
  { arabic: "الله أكبر", transliteration: "Allāhu Akbar", times: 33, meaning: "Allah is the Greatest" },
  { arabic: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير", transliteration: "Lā ilāha illallāhu waḥdahu lā sharīka lah, lahul-mulku wa lahul-ḥamdu wa huwa ʿalā kulli shay'in qadīr", times: 1, meaning: "There is no god but Allah alone, with no partner. To Him belongs the dominion and praise, and He is over all things competent." }
];

export const SALAT_AL_IBRAHIMIYYAH = {
  arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
  transliteration: "Allāhumma ṣalli ʿalā Muḥammadin wa ʿalā āli Muḥammadin, kamā ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīma, innaka Ḥamīdun Majīd. Allāhumma bārik ʿalā Muḥammadin wa ʿalā āli Muḥammadin, kamā bārakta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīma, innaka Ḥamīdun Majīd.",
  translation: "O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy and Glorious. O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim. Indeed, You are Praiseworthy and Glorious."
};