import { ObjectItem } from '../types';

export const OBJECTS_DATABASE: ObjectItem[] = [
  // FOOD
  {
    id: 'apple',
    name: 'Apple',
    nameUz: 'Olma',
    acceptedAnswers: ['apple', 'olma', 'red apple', 'qizil olma'],
    category: 'food',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['You can eat it fresh or in pies.', 'It can be red, yellow, or green.', 'It starts with the letter A.'],
      uz: ['Uni yangi uzilgan holda yoki piroglarda yeyiladi.', 'Qizil, sariq yoki yashil rangda bo‘ladi.', 'O harfidan boshlanadi.']
    }
  },
  {
    id: 'banana',
    name: 'Banana',
    nameUz: 'Banan',
    acceptedAnswers: ['banana', 'banan', 'sariq banan'],
    category: 'food',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Monkeys love this curved fruit.', 'It has a yellow peel that you discard.', 'It starts with the letter B.'],
      uz: ['Maymunlar bu egri mevani juda yaxshi ko‘radi.', 'Uni archib yeyiladigan sariq po‘sti bor.', 'B harfidan boshlanadi.']
    }
  },
  {
    id: 'orange',
    name: 'Orange',
    nameUz: 'Apelsin',
    acceptedAnswers: ['orange', 'apelsin', 'mandarin'],
    category: 'food',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['This fruit shares its name with its color.', 'Rich in Vitamin C and citrus juice.', 'It starts with the letter O.'],
      uz: ['Bu mevaning nomi uning rangi bilan bir xil.', 'S vitamini va sharbatga juda boy sitrus meva.', 'A harfidan boshlanadi.']
    }
  },
  {
    id: 'watermelon',
    name: 'Watermelon',
    nameUz: 'Tarvuz',
    acceptedAnswers: ['watermelon', 'tarvuz', 'tarvus'],
    category: 'food',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Green on the outside, red and juicy inside.', 'A favorite refreshing summer treat with black seeds.', 'It starts with the letter W.'],
      uz: ['Tashqi tomoni yashil, ichi esa qizil va shirali.', 'Yozning eng sevimli qovun-tarvuz poliz ekini.', 'T harfidan boshlanadi.']
    }
  },
  {
    id: 'pizza',
    name: 'Pizza',
    nameUz: 'Pitsa',
    acceptedAnswers: ['pizza', 'pitsa', 'pitssa'],
    category: 'food',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['An Italian classic with crust, tomato sauce, and melted cheese.', 'Usually sliced in triangles from a round pie.', 'It starts with the letter P.'],
      uz: ['Xamir, pomidor sousi va erigan pishloqli italyan taomi.', 'Odatda uchburchak shaklida kesiladi.', 'P harfidan boshlanadi.']
    }
  },
  {
    id: 'bread',
    name: 'Bread',
    nameUz: 'Non',
    acceptedAnswers: ['bread', 'non', 'tandir non', 'patir'],
    category: 'food',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Baked staple food made from flour, water, and yeast.', 'Central Asian families respect this sacred food on every table.', 'It starts with the letter B.'],
      uz: ['Un, suv va xamirturushdan tandir yoki pechda pishiriladi.', 'Dasturxonimiz ko‘rki, aziz va muqaddas ne’mat.', 'N harfidan boshlanadi.']
    }
  },

  // TECHNOLOGY
  {
    id: 'computer_mouse',
    name: 'Computer Mouse',
    nameUz: 'Kompyuter sichqonchasi',
    acceptedAnswers: ['mouse', 'computer mouse', 'sichqoncha', 'kompyuter sichqonchasi', 'mishka'],
    category: 'technology',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Handheld input device used on a mousepad.', 'It has left and right buttons and a scroll wheel.', 'Shares its name with a tiny rodent.'],
      uz: ['Kompyuterda kursorni boshqarish uchun qo‘lda tutiladigan qurilma.', 'Chap, o‘ng tugmalari va aylantirgich (skroll) bor.', 'Bir kichik kemiruvchi jonivor nomi bilan ataladi.']
    }
  },
  {
    id: 'smartphone',
    name: 'Smartphone',
    nameUz: 'Smartfon',
    acceptedAnswers: ['smartphone', 'phone', 'smartfon', 'telefon', 'mobil telefon', 'iphone', 'samsung'],
    category: 'technology',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Pocket computer with a glass touchscreen and cameras.', 'You use it for calls, messages, social media, and apps.', 'It starts with the letter S.'],
      uz: ['Sensori ekranli va kamerali cho‘ntak qurilmasi.', 'Qo‘ng‘iroqlar, xabarlar va internet uchun har kuni ishlatasiz.', 'S yoki T harfidan boshlanadi.']
    }
  },
  {
    id: 'headphones',
    name: 'Headphones',
    nameUz: 'Quloqchin',
    acceptedAnswers: ['headphones', 'headphone', 'quloqchin', 'naushnik', 'earphones'],
    category: 'technology',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Worn over or inside ears to listen to private audio.', 'Great for listening to music without disturbing others.', 'It starts with the letter H.'],
      uz: ['Musiqa yoki suhbatlarni boshqalarga xalaqit bermasdan eshitish uchun taqiladi.', 'Quloqqa kiyiladigan audio moslama.', 'Q yoki N harfidan boshlanadi.']
    }
  },
  {
    id: 'laptop',
    name: 'Laptop',
    nameUz: 'Noutbuk',
    acceptedAnswers: ['laptop', 'notebook', 'noutbuk', 'kompyuter', 'portativ kompyuter'],
    category: 'technology',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Portable clamshell personal computer with screen and keyboard.', 'Runs on battery and folds closed when not in use.', 'It starts with the letter L.'],
      uz: ['Yig‘iladigan qulay ixcham kompyuter.', 'Klaviaturasi va ekrani bitta korpusda ochilib-yopiladi.', 'N harfidan boshlanadi.']
    }
  },
  {
    id: 'camera',
    name: 'Camera',
    nameUz: 'Kamera',
    acceptedAnswers: ['camera', 'kamera', 'fotoapparat', 'photo camera'],
    category: 'technology',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Optical instrument used to capture photographs and videos.', 'Features a lens and a shutter button.', 'It starts with the letter C.'],
      uz: ['Surat va videolarni tasvirga oluvchi optik asbob.', 'Obektiv va suratga olish tugmasiga ega.', 'K yoki F harfidan boshlanadi.']
    }
  },
  {
    id: 'smartwatch',
    name: 'Smartwatch',
    nameUz: 'Smart soat',
    acceptedAnswers: ['smartwatch', 'smart watch', 'smart soat', 'aqlli soat', 'soat', 'watch'],
    category: 'technology',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Worn on the wrist, tracks heart rate and shows notifications.', 'A digital wearable timepiece with apps.', 'It starts with the letter S.'],
      uz: ['Bilekka taqiladi, yurak urishini va bildirishnomalarni ko‘rsatadi.', 'Sensorli ekranga ega zamonaviy soat.', 'S harfidan boshlanadi.']
    }
  },
  {
    id: 'keyboard',
    name: 'Keyboard',
    nameUz: 'Klaviatura',
    acceptedAnswers: ['keyboard', 'klaviatura', 'computer keyboard'],
    category: 'technology',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Board filled with alphabetical keys, numbers, and spacebar.', 'Used to input text into computers.', 'It starts with the letter K.'],
      uz: ['Harflar, raqamlar va probel tugmalariga ega kiritish qurilmasi.', 'Kompyuterga matn yozish uchun xizmat qiladi.', 'K harfidan boshlanadi.']
    }
  },
  {
    id: 'television',
    name: 'Television',
    nameUz: 'Televizor',
    acceptedAnswers: ['tv', 'television', 'televizor', 'smart tv'],
    category: 'technology',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Large flat screen in the living room for movies and broadcasts.', 'Controlled from the sofa using a remote.', 'It starts with the letter T.'],
      uz: ['Mehmonxonada kino va yangiliklarni ko‘rish uchun devorga ilinadigan katta ekran.', 'Pult orqali boshqariladi.', 'T harfidan boshlanadi.']
    }
  },
  {
    id: 'game_controller',
    name: 'Game Controller',
    nameUz: 'Geympad',
    acceptedAnswers: ['controller', 'gamepad', 'game controller', 'geympad', 'joystick', 'joystik'],
    category: 'technology',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Held in two hands with thumbsticks, D-pad, and triggers.', 'Used to play games on PlayStation, Xbox, or PC.', 'It starts with the letter G.'],
      uz: ['PlayStation yoki Xbox kabi o‘yin pristavkasini boshqarish uchun qo‘lda tutiladi.', 'Tugmachalari va djoystiklari bor.', 'G yoki J harfidan boshlanadi.']
    }
  },

  // HOUSEHOLD
  {
    id: 'lamp',
    name: 'Desk Lamp',
    nameUz: 'Stol lampasi',
    acceptedAnswers: ['lamp', 'desk lamp', 'lampa', 'chiroq', 'stol lampasi'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Provides illumination for reading or working at a desk.', 'Contains an electric bulb and a shade.', 'It starts with the letter L.'],
      uz: ['Yozuv stoli ustida kitob o‘qish yoki ishlashda yorug‘lik beradi.', 'Elektr lampochkasi va ushlagichi bor.', 'L yoki Ch harfidan boshlanadi.']
    }
  },
  {
    id: 'clock',
    name: 'Wall Clock',
    nameUz: 'Devor soati',
    acceptedAnswers: ['clock', 'wall clock', 'soat', 'devor soati'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Hangs on the wall and ticks with hour and minute hands.', 'Tells you the exact time of day.', 'It starts with the letter C.'],
      uz: ['Devorga osiladi, soat va daqiqa millari aylanib turadi.', 'Vaqtni aniq ko‘rsatib turuvchi buyum.', 'S yoki D harfidan boshlanadi.']
    }
  },
  {
    id: 'chair',
    name: 'Chair',
    nameUz: 'Stul',
    acceptedAnswers: ['chair', 'stul', 'kreslo', 'o‘rindiq', 'orindiq'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1580481077187-578d6b8862cf?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Piece of furniture with four legs and a back for one person to sit.', 'You sit on it at a desk or dinner table.', 'It starts with the letter C.'],
      uz: ['Odam o‘tirishi uchun to‘rtta oyoqli va suyanchiqqa ega mebel.', 'Stol atrofida ovqatlanish yoki o‘tirish uchun xizmat qiladi.', 'S harfidan boshlanadi.']
    }
  },
  {
    id: 'table',
    name: 'Table',
    nameUz: 'Stol',
    acceptedAnswers: ['table', 'desk', 'stol', 'yozuv stoli'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Flat horizontal surface supported by legs where you eat or work.', 'Pairs naturally with chairs in dining rooms.', 'It starts with the letter T.'],
      uz: ['Oyoqlari ustida tekis yuzaga ega mebel, ustida ovqatlaniladi yoki yoziladi.', 'Stul bilan birga xonaning markazida turadi.', 'S harfidan boshlanadi.']
    }
  },
  {
    id: 'cup',
    name: 'Cup / Mug',
    nameUz: 'Chini piyola / Finjon',
    acceptedAnswers: ['cup', 'mug', 'piyola', 'finjon', 'chashka', 'krujka'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Small vessel with a handle used for drinking hot coffee or tea.', 'Usually ceramic, porcelain, or glass.', 'It starts with the letter C.'],
      uz: ['Issiq choy yoki qahva ichish uchun ishlatiladigan idish.', 'Chinni yoki sopoldan yasalgan.', 'P, F yoki K harfidan boshlanadi.']
    }
  },
  {
    id: 'teapot',
    name: 'Teapot',
    nameUz: 'Choynak',
    acceptedAnswers: ['teapot', 'choynak', 'choydish'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Vessel with a spout and lid used for brewing and pouring tea.', 'An essential in every Uzbek household for kok-choy.', 'It starts with the letter T.'],
      uz: ['Choy damlash va quyish uchun mo‘ljallangan jo‘mrakli idish.', 'Har bir o‘zbek xonadonida ko‘k choy damlanadi.', 'Ch harfidan boshlanadi.']
    }
  },
  {
    id: 'spoon',
    name: 'Spoon',
    nameUz: 'Qoshiq',
    acceptedAnswers: ['spoon', 'qoshiq'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Cutlery consisting of a shallow oval bowl on a handle.', 'Used for eating soup or osh (plov).', 'It starts with the letter S.'],
      uz: ['Sho‘rva yoki osh yeyishda ishlatiladigan dastali oshxona anjomi.', 'Chuqur oval shaklga ega.', 'Q harfidan boshlanadi.']
    }
  },
  {
    id: 'fork',
    name: 'Fork',
    nameUz: 'Sanchqi',
    acceptedAnswers: ['fork', 'sanchqi', 'vilka'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1620894599999-e6857cb3153d?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Utensil with two to four sharp metal prongs (tines).', 'Used to pierce and lift solid foods into your mouth.', 'It starts with the letter F.'],
      uz: ['Uch-to‘rt dona tishlari bor metall oshxona anjomi.', 'Ovqatni sanchib og‘izga solish uchun xizmat qiladi.', 'S yoki V harfidan boshlanadi.']
    }
  },

  // EVERYDAY OBJECTS
  {
    id: 'key',
    name: 'Key',
    nameUz: 'Kalit',
    acceptedAnswers: ['key', 'kalit'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Small notched metal piece used to lock and unlock doors.', 'You carry it on a keychain in your pocket.', 'It starts with the letter K.'],
      uz: ['Eshik va qulflarni ochish-yopish uchun kichik metall buyum.', 'Cho‘ntakda yoki bog‘ichda olib yuriladi.', 'K harfidan boshlanadi.']
    }
  },
  {
    id: 'glasses',
    name: 'Glasses',
    nameUz: 'Ko‘zoynak',
    acceptedAnswers: ['glasses', 'eyeglasses', 'kozoynak', 'ko‘zoynak', 'ochki'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Two glass lenses framed to rest on your nose and ears.', 'Helps people see clearly or shields from bright sun.', 'It starts with the letter G.'],
      uz: ['Burun va quloqqa ilinadigan, ko‘rishni yaxshilovchi yoki quyoshdan himoyalovchi buyum.', 'Ikkita shisha linzasi bor.', 'K yoki O harfidan boshlanadi.']
    }
  },
  {
    id: 'umbrella',
    name: 'Umbrella',
    nameUz: 'Soyabon',
    acceptedAnswers: ['umbrella', 'soyabon', 'zontik'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Canopy of fabric on a folding metal frame held by a curved handle.', 'Shields you from falling rain or harsh sun.', 'It starts with the letter U.'],
      uz: ['Yomg‘ir yoki quyoshdan himoyalanish uchun bosh uzra tutiladigan yig‘iluvchi buyum.', 'Dastasi va soyaboni bor.', 'S yoki Z harfidan boshlanadi.']
    }
  },
  {
    id: 'wallet',
    name: 'Wallet',
    nameUz: 'Hamyon',
    acceptedAnswers: ['wallet', 'hamyon', 'kashlyok'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Pocket-sized folding leather case for paper money and bank cards.', 'Kept in your trousers or handbag.', 'It starts with the letter W.'],
      uz: ['Qog‘oz pullar, tangalar va plastik kartalarni solib yuriladigan charm qopcha.', 'Cho‘ntakda saqlanadi.', 'H yoki K harfidan boshlanadi.']
    }
  },
  {
    id: 'water_bottle',
    name: 'Water Bottle',
    nameUz: 'Suv shishasi',
    acceptedAnswers: ['bottle', 'water bottle', 'bakalashka', 'suv shishasi', 'termos', 'shisha'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Reusable cylinder container with a twist cap for hydration.', 'You take it to the gym, school, or hiking.', 'It starts with the letter B.'],
      uz: ['Suv yoki sharbat solib olib yuriladigan qopqoqli idish.', 'Sport zalga yoki darsga olib boriladi.', 'S yoki B harfidan boshlanadi.']
    }
  },
  {
    id: 'backpack',
    name: 'Backpack',
    nameUz: 'Ryukzak / Sumka',
    acceptedAnswers: ['backpack', 'bag', 'ryukzak', 'sumka', 'maktab sumkasi'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Fabric sack carried on the back secured with two shoulder straps.', 'Students carry their books and laptops in this.', 'It starts with the letter B.'],
      uz: ['Yelkaga osib yuriladigan mustahkam mato sumka.', 'O‘quvchilar va talabalar kitob-daftarlarini soladi.', 'R yoki S harfidan boshlanadi.']
    }
  },

  // VEHICLES
  {
    id: 'car',
    name: 'Car',
    nameUz: 'Mashina',
    acceptedAnswers: ['car', 'automobile', 'mashina', 'avtomobil', 'avto'],
    category: 'vehicles',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Four-wheeled motor vehicle used for street transportation.', 'Has a steering wheel, headlights, engine, and trunk.', 'It starts with the letter C.'],
      uz: ['To‘rt g‘ildirakli yo‘lovchi transport vositasi.', 'Rul, motor va g‘ildiraklarga ega.', 'M yoki A harfidan boshlanadi.']
    }
  },
  {
    id: 'bicycle',
    name: 'Bicycle',
    nameUz: 'Velosiped',
    acceptedAnswers: ['bicycle', 'bike', 'velosiped', 'velik'],
    category: 'vehicles',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Two-wheeled vehicle propelled by pedaling with your feet.', 'Has handlebars and a chain drive.', 'It starts with the letter B.'],
      uz: ['Pedal bosib haydaladigan ikki g‘ildirakli transport vositasi.', 'Zanjiri va rul boshqaruvi bor.', 'V harfidan boshlanadi.']
    }
  },
  {
    id: 'bus',
    name: 'Bus',
    nameUz: 'Avtobus',
    acceptedAnswers: ['bus', 'avtobus', 'jamoat transporti'],
    category: 'vehicles',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Large road vehicle carrying dozens of paying passengers along a fixed route.', 'Stops at marked city stations.', 'It starts with the letter B.'],
      uz: ['Shahar bo‘ylab yo‘lovchilarni tashiydigan katta jamoat transporti.', 'Maxsus bekatlarda to‘xtaydi.', 'A harfidan boshlanadi.']
    }
  },
  {
    id: 'motorcycle',
    name: 'Motorcycle',
    nameUz: 'Mototsikl',
    acceptedAnswers: ['motorcycle', 'motorbike', 'mototsikl', 'moped', 'skuter'],
    category: 'vehicles',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Two-wheeled powered vehicle requiring a safety helmet.', 'Much faster and heavier than a bicycle.', 'It starts with the letter M.'],
      uz: ['Ikki g‘ildirakli tezyurar motorli transport.', 'Uni haydashda shlem (kaska) kiyish shart.', 'M harfidan boshlanadi.']
    }
  },
  {
    id: 'airplane',
    name: 'Airplane',
    nameUz: 'Samolyot',
    acceptedAnswers: ['airplane', 'plane', 'aircraft', 'samolyot', 'tayyora'],
    category: 'vehicles',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f4?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Fixed-wing aircraft powered by jet engines that flies high in clouds.', 'Takes off and lands at airports.', 'It starts with the letter A.'],
      uz: ['Osmonda bulutlar uzra uchuvchi qanotli uchar transport.', 'Aeroportlardan havoga ko‘tariladi.', 'S yoki T harfidan boshlanadi.']
    }
  },

  // SPORTS
  {
    id: 'football',
    name: 'Football / Soccer Ball',
    nameUz: 'Futbol to‘pi',
    acceptedAnswers: ['football', 'soccer ball', 'ball', 'futbol topi', 'top', 'futbol to‘pi', 'koptok'],
    category: 'sports',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Inflated sphere covered in classic black and white pentagons.', 'Kicked into goals during the world\'s most popular sport.', 'It starts with the letter F.'],
      uz: ['Oq-qora beshburchak panelli charmdan qilingan dumaloq o‘yinchoq.', 'Darvozaga tepib gol uriladigan to‘p.', 'F yoki T harfidan boshlanadi.']
    }
  },
  {
    id: 'basketball',
    name: 'Basketball',
    nameUz: 'Basketbol to‘pi',
    acceptedAnswers: ['basketball', 'basketbol topi', 'basketbol to‘pi', 'top'],
    category: 'sports',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Orange bouncy textured ball with black rib seams.', 'Dribbled and thrown through a high hoop net.', 'It starts with the letter B.'],
      uz: ['Qora chiziqli to‘q sariq rangdagi elastik sakrovchi to‘p.', 'Baland savatga tashlanadi.', 'B harfidan boshlanadi.']
    }
  },
  {
    id: 'tennis_racket',
    name: 'Tennis Racket',
    nameUz: 'Tennis raketkasi',
    acceptedAnswers: ['tennis racket', 'racket', 'tennis raketkasi', 'raketka'],
    category: 'sports',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Handheld strung oval bat used to strike fuzzy green tennis balls.', 'Has a long grip handle and cross-woven strings.', 'It starts with the letter T.'],
      uz: ['Yashil koptokchani urish uchun torli to‘rga ega sport quroli.', 'Kortda tennis o‘ynashda ishlatiladi.', 'R yoki T harfidan boshlanadi.']
    }
  },
  {
    id: 'dumbbell',
    name: 'Dumbbell',
    nameUz: 'Gantel',
    acceptedAnswers: ['dumbbell', 'weights', 'gantel', 'tosh'],
    category: 'sports',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1586401100295-7a83362150c2?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Short bar with heavy weight discs on each end for strength lifting.', 'Found in fitness gyms to train biceps.', 'It starts with the letter D.'],
      uz: ['Qo‘l va mushaklarni chiniqtirish uchun ikkala tomonida og‘ir tosh bo‘lgan metall jism.', 'Trenajyor zalida ishlatiladi.', 'G harfidan boshlanadi.']
    }
  },

  // MUSIC
  {
    id: 'guitar',
    name: 'Guitar',
    nameUz: 'Gitara',
    acceptedAnswers: ['guitar', 'gitara', 'akustik gitara'],
    category: 'music',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Wooden stringed instrument with a hollow acoustic body and six strings.', 'Strummed with fingers or a plectrum.', 'It starts with the letter G.'],
      uz: ['Oltita torga va yog‘och rezonatorga ega torli musiqa asbobi.', 'Barmoqlar yoki mediator bilan chalinadi.', 'G harfidan boshlanadi.']
    }
  },
  {
    id: 'piano',
    name: 'Piano',
    nameUz: 'Pianino',
    acceptedAnswers: ['piano', 'pianino', 'fortepiano', 'royall'],
    category: 'music',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1520523839898-507127041a91?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Large acoustic instrument with 88 black and white keys and foot pedals.', 'Strikes hammers on tuned internal strings.', 'It starts with the letter P.'],
      uz: ['Oq va qora klavishlarga ega ulug‘vor musiqa asbobi.', 'Klassik kompozitorlar asarlarini ijro etishda asosiy cholg‘u.', 'P yoki F harfidan boshlanadi.']
    }
  },
  {
    id: 'drum',
    name: 'Drums',
    nameUz: 'Baraban',
    acceptedAnswers: ['drum', 'drums', 'baraban', 'dovul'],
    category: 'music',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Percussion instrument hit with wooden sticks to keep the rock tempo.', 'Cylindrical shell stretched with membrane.', 'It starts with the letter D.'],
      uz: ['Yog‘och cho‘plar bilan urib ritm ushlanadigan zarbli musiqa asbobi.', 'Membranasi tortilgan g‘ilof.', 'B yoki D harfidan boshlanadi.']
    }
  },
  {
    id: 'violin',
    name: 'Violin',
    nameUz: 'Skripka',
    acceptedAnswers: ['violin', 'skripka'],
    category: 'music',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Small wooden string instrument played under the chin using a horsehair bow.', 'Known for poignant high-pitched symphonic melodies.', 'It starts with the letter V.'],
      uz: ['Iyak ostiga qo‘yib kamoncha bilan chalinadigan nafis torli cholg‘u.', 'Simfonik orkestrlarning eng yetakchi asbobi.', 'S harfidan boshlanadi.']
    }
  },

  // SCHOOL
  {
    id: 'book',
    name: 'Book',
    nameUz: 'Kitob',
    acceptedAnswers: ['book', 'kitob', 'darslik'],
    category: 'school',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Bound collection of printed paper pages inside a cover.', 'Source of knowledge, wisdom, and stories.', 'It starts with the letter B.'],
      uz: ['Muqovalangan qog‘oz varaqlar to‘plami.', 'Ilm-ma’rifat va donolik manbai.', 'K harfidan boshlanadi.']
    }
  },
  {
    id: 'pencil',
    name: 'Pencil',
    nameUz: 'Qalam',
    acceptedAnswers: ['pencil', 'qalam', 'oddiy qalam'],
    category: 'school',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1585336261026-40742f1f0088?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Narrow wooden shaft housing a graphite lead core that can be erased.', 'Sharpened with a pencil sharpener.', 'It starts with the letter P.'],
      uz: ['Ichida grafit o‘zagi bo‘lgan yog‘och yozuv quroli, o‘chirg‘ich bilan o‘chirsa bo‘ladi.', 'Qalamtaroshda uchlanadi.', 'Q harfidan boshlanadi.']
    }
  },
  {
    id: 'pen',
    name: 'Pen',
    nameUz: 'Ruchka',
    acceptedAnswers: ['pen', 'ruchka', 'avtoruchka', 'sharikli ruchka'],
    category: 'school',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Writing instrument that dispenses liquid ink onto paper.', 'Permanent writing that cannot be erased easily.', 'It starts with the letter P.'],
      uz: ['Qog‘ozga siyoh bilan yozadigan asosiy o‘quv quroli.', 'O‘chmaydigan matn yozish uchun.', 'R harfidan boshlanadi.']
    }
  },
  {
    id: 'scissors',
    name: 'Scissors',
    nameUz: 'Qaychi',
    acceptedAnswers: ['scissors', 'qaychi'],
    category: 'school',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Tool with two pivoted blades used for cutting paper and cloth.', 'You put your thumb and fingers through circular loops.', 'It starts with the letter S.'],
      uz: ['Qog‘oz, mato yoki sochni kesish uchun ikkita tig‘li metall asbob.', 'Barmoqlarni halqalarga kiritib ishlatiladi.', 'Q harfidan boshlanadi.']
    }
  },
  {
    id: 'eraser',
    name: 'Eraser',
    nameUz: 'O‘chirg‘ich',
    acceptedAnswers: ['eraser', 'ochirgich', 'o‘chirg‘ich', 'lastik'],
    category: 'school',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1629814249584-b40c2b291a27?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Piece of soft rubber used to rub out graphite marks on paper.', 'Leaves behind tiny rubber shavings.', 'It starts with the letter E.'],
      uz: ['Qalam bilan yozilgan chiziqlarni o‘chirish uchun rezinka buyum.', 'Qog‘ozdagi xatolarni tozalaydi.', 'O‘ yoki L harfidan boshlanadi.']
    }
  },

  // TOOLS
  {
    id: 'hammer',
    name: 'Hammer',
    nameUz: 'Bolg‘a',
    acceptedAnswers: ['hammer', 'bolga', 'bolg‘a'],
    category: 'tools',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Hand tool with a heavy steel head used to drive nails into wood.', 'Has a claw side to pull out bent nails.', 'It starts with the letter H.'],
      uz: ['Mix qoqish uchun ishlatiladigan og‘ir metall kallakli ish quroli.', 'Yog‘och va qurilish ishlarida zarur.', 'B harfidan boshlanadi.']
    }
  },
  {
    id: 'screwdriver',
    name: 'Screwdriver',
    nameUz: 'Otvertka',
    acceptedAnswers: ['screwdriver', 'otvertka', 'buragich'],
    category: 'tools',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Tool with a flat or cross-shaped tip used to turn screws.', 'Rotated by hand to assemble furniture or electronics.', 'It starts with the letter S.'],
      uz: ['Shuruplarni burash va mahkamlash uchun uchi yassi yoki xoch shaklidagi asbob.', 'Mebel va texnika ta’mirlashda kerak.', 'O yoki B harfidan boshlanadi.']
    }
  },
  {
    id: 'wrench',
    name: 'Wrench / Spanner',
    nameUz: 'Gayka kaliti',
    acceptedAnswers: ['wrench', 'spanner', 'gayka kaliti', 'kalit', 'gaykakalit'],
    category: 'tools',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1580983218765-f663bec07b37?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Lever tool with fixed or adjustable jaws to grip and turn nuts and bolts.', 'Indispensable for mechanics and plumbers.', 'It starts with the letter W.'],
      uz: ['Bolt va gaykalarni burab qotirish yoki bo‘shatish uchun metall asbob.', 'Santexnik va avtomexaniklar doim ishlatadi.', 'G yoki K harfidan boshlanadi.']
    }
  },
  {
    id: 'saw',
    name: 'Saw',
    nameUz: 'Arra',
    acceptedAnswers: ['saw', 'handsaw', 'arra'],
    category: 'tools',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Tool with a toothed metal blade used to cut through wood or timber.', 'Moved back and forth with a cutting rhythm.', 'It starts with the letter S.'],
      uz: ['Yog‘och va taxtalarni kesish uchun o‘tkir tishli po‘lat asbob.', 'Oldinga-orqaga harakatlantirib kesiladi.', 'A harfidan boshlanadi.']
    }
  },

  // NATURE
  {
    id: 'flower',
    name: 'Flower',
    nameUz: 'Gul',
    acceptedAnswers: ['flower', 'rose', 'gul', 'atirgul'],
    category: 'nature',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Blossoming bloom of a plant, colorful with fragrant petals.', 'Attracts bees and butterflies.', 'It starts with the letter F.'],
      uz: ['Chiroyli rang-barang bargchalarga va xushbo‘y hidga ega o‘simlik ko‘rki.', 'Asalarilarni o‘ziga jalb qiladi.', 'G yoki A harfidan boshlanadi.']
    }
  },
  {
    id: 'tree',
    name: 'Tree',
    nameUz: 'Daraxt',
    acceptedAnswers: ['tree', 'daraxt', 'chinor', 'archa'],
    category: 'nature',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Perennial plant with an elongated wooden trunk, branches, and green leaves.', 'Provides shade, oxygen, and fruit.', 'It starts with the letter T.'],
      uz: ['Yog‘och tanasi, shox-shabbalari va yashil barglari bo‘lgan ko‘p yillik o‘simlik.', 'Bizga kislorod va soya beradi.', 'D harfidan boshlanadi.']
    }
  },
  {
    id: 'leaf',
    name: 'Leaf',
    nameUz: 'Barg',
    acceptedAnswers: ['leaf', 'barg', 'yashil barg'],
    category: 'nature',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Flat green organ of a plant that absorbs sunlight for photosynthesis.', 'Falls from deciduous branches in autumn.', 'It starts with the letter L.'],
      uz: ['Quyosh nuridan oziqlanadigan o‘simlikning yassi yashil qismi.', 'Kuz kelganda sarg‘ayib yerga to‘kiladi.', 'B harfidan boshlanadi.']
    }
  },
  {
    id: 'mushroom',
    name: 'Mushroom',
    nameUz: 'Qo‘ziqorin',
    acceptedAnswers: ['mushroom', 'qozonqorin', 'qoziqorin', 'qo‘ziqorin'],
    category: 'nature',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Fungus with an umbrella-shaped cap and a stalk growing in damp woods.', 'Some varieties are delicious, while others are poisonous.', 'It starts with the letter M.'],
      uz: ['Nam o‘rmonlarda soyabon shaklida o‘sadigan zamburug‘.', 'Ba’zisi shirin ovqat, ba’zisi esa zaharli bo‘ladi.', 'Q harfidan boshlanadi.']
    }
  },
  {
    id: 'balloon',
    name: 'Balloon',
    nameUz: 'Shar',
    acceptedAnswers: ['balloon', 'shar', 'havo shari'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Flexible rubber bag inflated with helium or air for birthday parties.', 'Floats in the sky if let loose.', 'It starts with the letter B.'],
      uz: ['Tug‘ilgan kun va bayramlarda havo yoki geliy bilan shishiriladigan rangli rezinka buyum.', 'Uchib ketishi mumkin.', 'Sh harfidan boshlanadi.']
    }
  },
  {
    id: 'teddy_bear',
    name: 'Teddy Bear',
    nameUz: 'Ayiqcha',
    acceptedAnswers: ['teddy bear', 'teddy', 'bear', 'ayiqcha', 'yumshoq oyinchoq', 'o‘yinchoq'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Soft stuffed plush toy shaped like a friendly furry bear.', 'Beloved companion for toddlers to cuddle in bed.', 'It starts with the letter T.'],
      uz: ['Bolalar quchoqlab uxlaydigan yumshoq ayiq shaklidagi o‘yinchoq.', 'Junli va juda yoqimtoy.', 'A yoki O‘ harfidan boshlanadi.']
    }
  },
  {
    id: 'candle',
    name: 'Candle',
    nameUz: 'Sham',
    acceptedAnswers: ['candle', 'sham'],
    category: 'household',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Cylinder of wax embedded with a burning wick for illumination.', 'Melted wax creates romantic dinner light or decorates birthday cakes.', 'It starts with the letter C.'],
      uz: ['Ichiga pilik o‘rnatilgan parafin yoki mum silindri.', 'Yondirilganda chiroyli iliq olov nuri taratadi.', 'Sh harfidan boshlanadi.']
    }
  },
  {
    id: 'mirror',
    name: 'Mirror',
    nameUz: 'Ko‘zgu / Oyna',
    acceptedAnswers: ['mirror', 'kozgu', 'ko‘zgu', 'oyna'],
    category: 'household',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Reflective glass surface reflecting your own appearance.', 'Used while combing hair or brushing teeth in bathrooms.', 'It starts with the letter M.'],
      uz: ['O‘z aksingizni tiniq ko‘rsatadigan shisha sirt.', 'Soch tarash yoki kiyinish paytida qaraladi.', 'K yoki O harfidan boshlanadi.']
    }
  },
  {
    id: 'sneakers',
    name: 'Sneakers / Shoes',
    nameUz: 'Krossovka / Poyabzal',
    acceptedAnswers: ['sneakers', 'shoes', 'krossovka', 'poyabzal', 'krossi', 'oyoq kiyim'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Footwear with rubber soles and laces worn for sports or walking.', 'You wear socks before putting these on.', 'It starts with the letter S.'],
      uz: ['Sport bilan shug‘ullanish yoki yurish uchun rezin taglikli oyoq kiyim.', 'Paypoq ustidan kiyiladi.', 'K yoki P harfidan boshlanadi.']
    }
  },
  {
    id: 'iron',
    name: 'Clothes Iron',
    nameUz: 'Dazmol',
    acceptedAnswers: ['iron', 'clothes iron', 'dazmol'],
    category: 'household',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Heated electric appliance used to remove wrinkles from freshly washed shirts.', 'Glides with hot steam over an ironing board.', 'It starts with the letter I.'],
      uz: ['Kiyimlardagi g‘ijimlarni tekislash uchun qizdiriladigan asbob.', 'Maxsus taxta ustida bug‘ bilan kiyim tekislanadi.', 'D harfidan boshlanadi.']
    }
  },
  {
    id: 'toothbrush',
    name: 'Toothbrush',
    nameUz: 'Tish cho‘tkasi',
    acceptedAnswers: ['toothbrush', 'tish chotkasi', 'tish cho‘tkasi', 'chotka'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1559591937-e62fb3d8544c?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Small oral hygiene brush used with paste to clean teeth morning and night.', 'Dentists recommend using it twice a day.', 'It starts with the letter T.'],
      uz: ['Har kuni ertalab va kechqurun tish pastasi bilan tish tozalaydigan asbob.', 'Stomatologlar kuniga 2 mahal ishlatishni tavsiya qiladi.', 'T yoki Ch harfidan boshlanadi.']
    }
  },
  {
    id: 'pillow',
    name: 'Pillow',
    nameUz: 'Yostiq',
    acceptedAnswers: ['pillow', 'cushion', 'yostiq', 'bolish'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Soft cushioned fabric bag filled with feathers or foam supporting your head in bed.', 'You lay your head upon it to sleep.', 'It starts with the letter P.'],
      uz: ['Krovat yoki to‘shakda uxlash uchun bosh ostiga qo‘yiladigan yumshoq buyum.', 'Pat yoki paxta bilan to‘ldirilgan.', 'Y yoki B harfidan boshlanadi.']
    }
  },
  {
    id: 'soap',
    name: 'Soap',
    nameUz: 'Sovun',
    acceptedAnswers: ['soap', 'sovun'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1607006314188-6ef47e62a197?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Solid bar or liquid creating fragrant suds and lather with water.', 'Kills bacteria when washing hands before meals.', 'It starts with the letter S.'],
      uz: ['Suv bilan qo‘shilganda ko‘pik hosil qilib kirlarni ketkazuvchi tozalash vositasi.', 'Ovqatdan oldin qo‘llarni yuvishda ishlatiladi.', 'S harfidan boshlanadi.']
    }
  },
  {
    id: 'ring',
    name: 'Ring',
    nameUz: 'Uzuk',
    acceptedAnswers: ['ring', 'uzuk', 'oltin uzuk'],
    category: 'everyday',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Circular metal band often adorned with a precious gemstone worn on a finger.', 'Symbol of marriage and engagement.', 'It starts with the letter R.'],
      uz: ['Barmoqqa taqiladigan oltin yoki kumush qimmatbaho taqinchoq.', 'Nikoh va unashtirish ramzi.', 'U harfidan boshlanadi.']
    }
  },
  {
    id: 'comb',
    name: 'Comb / Hairbrush',
    nameUz: 'Taroq',
    acceptedAnswers: ['comb', 'hairbrush', 'taroq', 'chotka'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1590159763121-7c9ff3149e0a?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Toothed device used to detangle and style hair neatly.', 'Essential morning grooming accessory.', 'It starts with the letter C.'],
      uz: ['Sochni tartibga keltirish va tarash uchun tishli buyum.', 'Har kuni ertalab ko‘zgu oldida ishlatiladi.', 'T harfidan boshlanadi.']
    }
  },
  {
    id: 'refrigerator',
    name: 'Refrigerator',
    nameUz: 'Muzlatgich',
    acceptedAnswers: ['refrigerator', 'fridge', 'muzlatgich', 'xolodilnik'],
    category: 'household',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Large kitchen appliance that keeps groceries chilled and fresh.', 'Contains a freezer compartment for ice cream and meat.', 'It starts with the letter R.'],
      uz: ['Oshxonadagi mahsulotlarni buzilmasdan sovuq saqlovchi katta elektr uskuna.', 'Muzxona bo‘limi bor.', 'M yoki X harfidan boshlanadi.']
    }
  },
  // ADDITIONAL 67 OBJECTS TO EXCEED 100+ OBJECTS
  {
    id: 'strawberry',
    name: 'Strawberry',
    nameUz: 'Qulupnay',
    acceptedAnswers: ['strawberry', 'qulupnay', 'klubnika'],
    category: 'food',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['A sweet red heart-shaped berry with tiny seeds on its surface.', 'Popular on cakes, smoothies, and ice cream.', 'It starts with the letter S.'],
      uz: ['Ustida mayda urug‘chalari bo‘lgan qizil shirin bahoriy meva.', 'Tortlar va muzqaymoqlarga qo‘shiladi.', 'Q yoki K harfidan boshlanadi.']
    }
  },
  {
    id: 'pineapple',
    name: 'Pineapple',
    nameUz: 'Ananas',
    acceptedAnswers: ['pineapple', 'ananas'],
    category: 'food',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Tropical fruit with spiky rough skin and a crown of leaves.', 'Yellow sweet and tart juicy slices.', 'It starts with the letter P.'],
      uz: ['Ustki qismi tikanli qobiq va bargli tojdan iborat tropik meva.', 'Sariq shirali bo‘laklarga ega.', 'A harfidan boshlanadi.']
    }
  },
  {
    id: 'carrot',
    name: 'Carrot',
    nameUz: 'Sabzi',
    acceptedAnswers: ['carrot', 'sabzi'],
    category: 'food',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Long crunchy orange root vegetable that rabbits love.', 'Rich in Vitamin A for good eyesight and used in plov.', 'It starts with the letter C.'],
      uz: ['Quyonlar yaxshi ko‘radigan to‘q sariq rangli ildizmeva.', 'Osh (palov) tayyorlashda eng asosiy masalliq.', 'S harfidan boshlanadi.']
    }
  },
  {
    id: 'tomato',
    name: 'Tomato',
    nameUz: 'Pomidor',
    acceptedAnswers: ['tomato', 'pomidor'],
    category: 'food',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Juicy red fruit often treated as a salad vegetable and ketchup base.', 'Common in achichuk and pasta sauces.', 'It starts with the letter T.'],
      uz: ['Salatlar va achichiq-chuchukda ishlatiladigan qizil shirali sabzavot.', 'Ketchupning asosiy xomashyosi.', 'P harfidan boshlanadi.']
    }
  },
  {
    id: 'cucumber',
    name: 'Cucumber',
    nameUz: 'Bodring',
    acceptedAnswers: ['cucumber', 'bodring'],
    category: 'food',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Long green vegetable with crisp watery flesh.', 'Often pickled or sliced into fresh summer salads.', 'It starts with the letter C.'],
      uz: ['Uzunchoq, yashil, sersuv va qarsildoq sabzavot.', 'Tuzlamalar va yozgi yangi salatlarda ko‘p ishlatiladi.', 'B harfidan boshlanadi.']
    }
  },
  {
    id: 'bread',
    name: 'Bread / Loaf',
    nameUz: 'Non',
    acceptedAnswers: ['bread', 'non', 'patir', 'lepik'],
    category: 'food',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Baked staple food made of flour, water, and yeast.', 'Central Asian flatbread baked in a tandoor oven.', 'It starts with the letter B.'],
      uz: ['Un, suv va xamirturushdan tandirda yoki pechda yopiladigan aziz ne’mat.', 'Dasturxon ko‘rki va barcha taomlar sherigi.', 'N harfidan boshlanadi.']
    }
  },
  {
    id: 'ice_cream',
    name: 'Ice Cream',
    nameUz: 'Muzqaymoq',
    acceptedAnswers: ['ice cream', 'icecream', 'muzqaymoq', 'marojniy', 'marojna'],
    category: 'food',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Sweet frozen dairy treat served on a cone or stick.', 'Best dessert on a hot summer afternoon.', 'It starts with the letter I.'],
      uz: ['Issiq yoz kunlarida rohat bag‘ishlovchi shirin muzdek sutli shirinlik.', 'Vafli konusi yoki tayoqchada tortiladi.', 'M harfidan boshlanadi.']
    }
  },
  {
    id: 'egg',
    name: 'Egg',
    nameUz: 'Tuxum',
    acceptedAnswers: ['egg', 'tuxum'],
    category: 'food',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Oval food with a hard shell, white albumen, and yellow yolk.', 'Laid by chickens and fried for breakfast.', 'It starts with the letter E.'],
      uz: ['Oq yoki jigarrang qobiqli, sariq va oq qismdan iborat parhez mahsulot.', 'Tovuqlar qo‘yadi, nonushtada qovuriladi.', 'T harfidan boshlanadi.']
    }
  },
  {
    id: 'cheese',
    name: 'Cheese',
    nameUz: 'Pishloq',
    acceptedAnswers: ['cheese', 'pishloq', 'sir'],
    category: 'food',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Dairy product made from curdled milk, often with holes like Swiss.', 'Melted over pizza and cheeseburgers.', 'It starts with the letter C.'],
      uz: ['Sutdan tayyorlanadigan, pitsa va buterbrodlarga qo‘shiladigan mazali mahsulot.', 'Ba’zan teshikchalari bo‘ladi.', 'P yoki S harfidan boshlanadi.']
    }
  },
  {
    id: 'teapot',
    name: 'Teapot',
    nameUz: 'Choynak',
    acceptedAnswers: ['teapot', 'choynak'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Ceramic vessel with a handle, spout, and lid for brewing tea.', 'Essential on every Uzbek dasturkhan.', 'It starts with the letter T.'],
      uz: ['Qora yoki ko‘k choy damlanadigan sopol yoki chinni idish.', 'Uning jo‘mragi, dastasi va qopqog‘i bor.', 'Ch harfidan boshlanadi.']
    }
  },
  {
    id: 'spoon',
    name: 'Spoon',
    nameUz: 'Qoshiq',
    acceptedAnswers: ['spoon', 'qoshiq'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1594834749740-74b3f6764be4?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Utensil consisting of a small shallow bowl with a handle, used for soup.', 'Used to stir tea and eat cereal or porridge.', 'It starts with the letter S.'],
      uz: ['Sho‘rva, palov va suyuq ovqatlarni yeyishda ishlatiladigan dastali oshxona anjomi.', 'Q harfidan boshlanadi.', 'Choy aralashtirish uchun ham kichigi bor.']
    }
  },
  {
    id: 'fork',
    name: 'Fork',
    nameUz: 'Sanchqi',
    acceptedAnswers: ['fork', 'sanchqi', 'vilka'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Cutlery tool with two, three, or four sharp prongs to pierce food.', 'Paired with a table knife for pasta and steak.', 'It starts with the letter F.'],
      uz: ['Uch yoki to‘rtta o‘tkir tishlari bo‘lgan oshxona anjomi.', 'Go‘sht yoki makaron mahsulotlarini sanchib yeyiladi.', 'S yoki V harfidan boshlanadi.']
    }
  },
  {
    id: 'knife',
    name: 'Knife',
    nameUz: 'Pichoq',
    acceptedAnswers: ['knife', 'pichoq'],
    category: 'tools',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Sharp-edged tool used for slicing vegetables, bread, and meat.', 'Handcrafted Chust versions are famous in Uzbekistan.', 'It starts with the letter K.'],
      uz: ['Narsa kesish, qirqish va to‘g‘rash uchun o‘tkir tig‘li asbob.', 'Chust pichoqlari butun dunyoga mashhur.', 'P harfidan boshlanadi.']
    }
  },
  {
    id: 'frying_pan',
    name: 'Frying Pan',
    nameUz: 'Tova',
    acceptedAnswers: ['frying pan', 'pan', 'skillet', 'tova', 'skovorodka'],
    category: 'household',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Flat-bottomed metal pan with a long handle used for frying and searing.', 'Used to cook fried eggs and pancakes.', 'It starts with the letter P.'],
      uz: ['Tuxum, kartoshka va go‘sht qovurish uchun yassi taglikli idish.', 'T yoki S harfidan boshlanadi.', 'Uzoq dastasiga ega.']
    }
  },
  {
    id: 'cup',
    name: 'Tea Cup / Bowl',
    nameUz: 'Piyola',
    acceptedAnswers: ['cup', 'bowl', 'piyola', 'chashka'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Traditional handleless porcelain bowl used for drinking hot green tea.', 'Often adorned with the classic blue cotton boll (paxta) pattern.', 'It starts with the letter C.'],
      uz: ['Choy ichish uchun dastasiz, paxtagul naqshli chinni idish.', 'O‘zbek xonadonlarining ajralmas buyumi.', 'P harfidan boshlanadi.']
    }
  },
  {
    id: 'tablet',
    name: 'Tablet Computer',
    nameUz: 'Planshet',
    acceptedAnswers: ['tablet', 'ipad', 'planshet'],
    category: 'technology',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Touchscreen portable device larger than a smartphone but smaller than a laptop.', 'iPad is the most famous example.', 'It starts with the letter T.'],
      uz: ['Smartfondan kattaroq, noutbukdan ixchamroq sensorli ekranli gadjet.', 'Rasm chizish va video ko‘rishda qulay.', 'P harfidan boshlanadi.']
    }
  },
  {
    id: 'microphone',
    name: 'Microphone',
    nameUz: 'Mikrofon',
    acceptedAnswers: ['microphone', 'mic', 'mikrofon'],
    category: 'technology',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Audio device that converts sound waves into an electrical signal for recording or speaking.', 'Singers and podcast hosts hold this to amplify their voice.', 'It starts with the letter M.'],
      uz: ['Ovozni kuchaytirib karnaylarga uzatuvchi yoki yozib oluvchi asbob.', 'Xonandalar va diktorlar qo‘lida ushlaydi.', 'M harfidan boshlanadi.']
    }
  },
  {
    id: 'drone',
    name: 'Drone / Quadcopter',
    nameUz: 'Dron',
    acceptedAnswers: ['drone', 'quadcopter', 'dron', 'kvadrokopter'],
    category: 'technology',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Unmanned aerial vehicle with four spinning propellers used for aerial photography.', 'Controlled remotely using a tablet or joystick.', 'It starts with the letter D.'],
      uz: ['Tepadan chiroyli foto va video olish uchun havoga ko‘tariladigan to‘rt parrakli uchar apparat.', 'Masofadan pult orqali boshqariladi.', 'D harfidan boshlanadi.']
    }
  },
  {
    id: 'game_controller',
    name: 'Game Controller / Gamepad',
    nameUz: 'Joystik',
    acceptedAnswers: ['gamepad', 'controller', 'joystick', 'joystik', 'geympad'],
    category: 'technology',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Handheld device with thumbsticks and trigger buttons used for PlayStation or Xbox.', 'Essential gear for video gamers.', 'It starts with the letter G.'],
      uz: ['PlayStation yoki kompyuterda o‘yin o‘ynash uchun qo‘lda tutiladigan boshqaruv pulti.', 'Tugmachalar va stiklari bor.', 'J yoki G harfidan boshlanadi.']
    }
  },
  {
    id: 'smartwatch',
    name: 'Smartwatch',
    nameUz: 'Aqlli soat',
    acceptedAnswers: ['smartwatch', 'smart watch', 'apple watch', 'aqlli soat', 'smart soat'],
    category: 'technology',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Wearable wrist gadget that tracks steps, heart rate, and notifications.', 'Apple Watch is a popular model.', 'It starts with the letter S.'],
      uz: ['Bilekka taqiladigan, qadamlarni va yurak urishini sanaydigan sensorli ekranli gadjet.', 'Telefondan kelgan xabarlarni ko‘rsatadi.', 'S yoki A harfidan boshlanadi.']
    }
  },
  {
    id: 'flash_drive',
    name: 'USB Flash Drive',
    nameUz: 'Fleshka',
    acceptedAnswers: ['flash drive', 'usb drive', 'thumb drive', 'fleshka', 'usb'],
    category: 'technology',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Compact portable storage stick plugged into computer USB ports to transfer files.', 'Replaced floppy disks and CDs.', 'It starts with the letter F.'],
      uz: ['Fayllar, musiqa va videolarni saqlash hamda ko‘chirish uchun kichik cho‘ntak xotira kartasi.', 'Kompyuterning USB portiga ulanadi.', 'F harfidan boshlanadi.']
    }
  },
  {
    id: 'projector',
    name: 'Projector',
    nameUz: 'Proyektor',
    acceptedAnswers: ['projector', 'proyektor', 'prayektor'],
    category: 'technology',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Optical device that projects moving pictures onto a massive screen or white wall.', 'Used in movie theaters and school classrooms.', 'It starts with the letter P.'],
      uz: ['Katta oq devor yoki ekranga kino va slayd tasvirlarini yoritib ko‘rsatuvchi optik uskuna.', 'Maktab va kinoteatrlarda ishlatiladi.', 'P harfidan boshlanadi.']
    }
  },
  {
    id: 'powerbank',
    name: 'Power Bank',
    nameUz: 'Powerbank',
    acceptedAnswers: ['power bank', 'powerbank', 'pauerbank', 'quvvatlagich'],
    category: 'technology',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1609592424307-e89a42f654b9?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Portable rechargeable battery used to charge smartphones on the go.', 'Lifesaver when traveling without electrical wall outlets.', 'It starts with the letter P.'],
      uz: ['Safarda yoki ko‘chada telefon quvvati tugaganda zaryadlash uchun ko‘chma akkumulyator.', 'P yoki Q harfidan boshlanadi.', 'USB kabel orqali ulanadi.']
    }
  },
  {
    id: 'mirror',
    name: 'Mirror',
    nameUz: 'Ko‘zgu',
    acceptedAnswers: ['mirror', 'ko‘zgu', 'kozgu', 'oyna'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Reflective glass surface showing your own face when you look into it.', 'Used when brushing hair, applying makeup, or shaving.', 'It starts with the letter M.'],
      uz: ['Qaraganda o‘zingizning aksingizni ko‘rsatuvchi yaltiroq shisha buyum.', 'Kiyinishda va pardoz qilishda qaraladi.', 'K yoki O harfidan boshlanadi.']
    }
  },
  {
    id: 'umbrella',
    name: 'Umbrella',
    nameUz: 'Soyabon',
    acceptedAnswers: ['umbrella', 'soyabon', 'zontik'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Folding canopy supported by wooden or metal ribs to shield you from rain or sunlight.', 'You open it when storm clouds pour rain.', 'It starts with the letter U.'],
      uz: ['Yomg‘ir yog‘ganda yoki oftobdan saqlanish uchun ochiladigan gumbazsimon matoli buyum.', 'Dastasi va ochiluvchi mexanizmi bor.', 'S yoki Z harfidan boshlanadi.']
    }
  },
  {
    id: 'pillow',
    name: 'Pillow',
    nameUz: 'Yostiq',
    acceptedAnswers: ['pillow', 'yostiq', 'yostik'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Soft cushion stuffed with down or cotton used to rest your head while sleeping.', 'Resting on your bed right under your blankets.', 'It starts with the letter P.'],
      uz: ['Uxlaganda bosh tagiga qo‘yiladigan yumshoq paxtali yoki patli to‘shama buyumi.', 'Kravat va ko‘rpa-yostiq to‘plamining bir qismi.', 'Y harfidan boshlanadi.']
    }
  },
  {
    id: 'blanket',
    name: 'Blanket / Quilt',
    nameUz: 'Ko‘rpa',
    acceptedAnswers: ['blanket', 'quilt', 'ko‘rpa', 'korpa', 'adyol'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Large piece of warm woolen or cotton fabric used to cover oneself in bed.', 'Keeps you cozy during cold winter nights.', 'It starts with the letter B.'],
      uz: ['Sovuqdan himoyalanish va iliq uxlash uchun ustga yopiladigan paxtali mato buyum.', 'K yoki A harfidan boshlanadi.', 'To‘shak ustiga yoziladi.']
    }
  },
  {
    id: 'towel',
    name: 'Towel',
    nameUz: 'Sochiq',
    acceptedAnswers: ['towel', 'sochiq', 'sochik'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Absorbent piece of fabric used for drying wet body or hands after showering.', 'Hangs on bathroom racks.', 'It starts with the letter T.'],
      uz: ['Cho‘milgandan yoki yuvinishdan so‘ng qo‘l va yuzni quritish uchun ishlatiladigan mato.', 'Vanna va dushxonalarda ilib qo‘yiladi.', 'S harfidan boshlanadi.']
    }
  },
  {
    id: 'candle',
    name: 'Candle',
    nameUz: 'Sham',
    acceptedAnswers: ['candle', 'sham'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Block of wax with an embedded wick that produces flame and light when lit.', 'Blown out on birthday cakes after making a wish.', 'It starts with the letter C.'],
      uz: ['Ichiga pilik o‘rnatilgan parafin yoki mumdan yasalgan yoritqich.', 'Tug‘ilgan kun torti ustida puflanadi yoki elektr o‘chganda yoqiladi.', 'Sh harfidan boshlanadi.']
    }
  },
  {
    id: 'scissors',
    name: 'Scissors',
    nameUz: 'Qaychi',
    acceptedAnswers: ['scissors', 'qaychi', 'kaychi'],
    category: 'tools',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Cutting instrument having two crossed pivoted blades with ring handles.', 'Used to cut paper, cloth, or hair.', 'It starts with the letter S.'],
      uz: ['Qog‘oz, mato yoki sochni qirqish uchun ikki tig‘li asbob.', 'Barmoqlar kiritiladigan ikkita halqali dasta mavjud.', 'Q harfidan boshlanadi.']
    }
  },
  {
    id: 'iron',
    name: 'Clothes Iron',
    nameUz: 'Dazmol',
    acceptedAnswers: ['iron', 'clothes iron', 'dazmol', 'utuk'],
    category: 'household',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Heated appliance used to press out wrinkles and creases from clothes.', 'Emits steam onto shirts and pants.', 'It starts with the letter I.'],
      uz: ['Kiyimlardagi g‘ijimlarni tekislash va silliqlash uchun qizdiriladigan elektr uskuna.', 'Bug‘ purkaydi.', 'D yoki U harfidan boshlanadi.']
    }
  },
  {
    id: 'vacuum_cleaner',
    name: 'Vacuum Cleaner',
    nameUz: 'Changyutgich',
    acceptedAnswers: ['vacuum cleaner', 'vacuum', 'changyutgich', 'pilesos'],
    category: 'household',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Appliance that uses suction to clean dust and debris from rugs and carpets.', 'Has a hose and dust container bag.', 'It starts with the letter V.'],
      uz: ['Gilam va pol ustidagi changlarni havo tortish kuchi bilan tozalovchi texnika.', 'Shlangi va chang xaltasi bor.', 'Ch yoki P harfidan boshlanadi.']
    }
  },
  {
    id: 'washing_machine',
    name: 'Washing Machine',
    nameUz: 'Kir yuvish mashinasi',
    acceptedAnswers: ['washing machine', 'washer', 'kir yuvish mashinasi', 'stiralniy mashina'],
    category: 'household',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Home appliance with a rotating drum designed to wash laundry automatically.', 'You pour detergent powder into its tray.', 'It starts with the letter W.'],
      uz: ['Kirlarni avtomatik ravishda yuvuvchi va siquvchi aylanuvchi barabanli uy texnikasi.', 'Kukun solinadigan idishchasi bor.', 'K yoki S harfidan boshlanadi.']
    }
  },
  {
    id: 'shoes',
    name: 'Shoes / Sneakers',
    nameUz: 'Oyoq kiyim',
    acceptedAnswers: ['shoes', 'sneakers', 'boots', 'oyoq kiyim', 'krossovka', 'tufli'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Footwear with a sturdy rubber sole worn when walking or running outdoors.', 'Often tied with laces.', 'It starts with the letter S.'],
      uz: ['Ko‘chada yurish yoki yugurish uchun oyoqqa kiyiladigan buyum.', 'Bog‘ichi va rezina tagcharmi bor.', 'O, K yoki T harfidan boshlanadi.']
    }
  },
  {
    id: 'cap',
    name: 'Cap / Hat',
    nameUz: 'Kepka',
    acceptedAnswers: ['cap', 'hat', 'baseball cap', 'kepka', 'shlyapa', 'do‘ppi'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Head covering with a visor to shield eyes from bright sunshine.', 'Popular sportswear accessory worn backwards or forwards.', 'It starts with the letter C.'],
      uz: ['Quyosh nuridan ko‘zni to‘suvchi soyabonli bosh kiyimi.', 'Sportchilar va yoshlar ko‘p kiyadi.', 'K yoki D harfidan boshlanadi.']
    }
  },
  {
    id: 'jacket',
    name: 'Jacket',
    nameUz: 'Kurtka',
    acceptedAnswers: ['jacket', 'coat', 'kurtka', 'palto', 'kamzul'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Outer garment extending to the waist or hips with sleeves and a front zipper.', 'Worn outdoors to protect from chilly wind.', 'It starts with the letter J.'],
      uz: ['Sovuq havoda ustki kiyim sifatida kiyiladigan zamokli yoki tugmali kiyim.', 'K yoki P harfidan boshlanadi.', 'Cho‘ntaklari va yenglari bor.']
    }
  },
  {
    id: 'socks',
    name: 'Socks',
    nameUz: 'Paypoq',
    acceptedAnswers: ['socks', 'sock', 'paypoq', 'paypok', 'noski'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Garment for the foot and lower part of the leg worn inside shoes.', 'Sold in matching pairs and made of cotton or wool.', 'It starts with the letter S.'],
      uz: ['Oyoqqa poyabzal ichidan kiyiladigan trikotaj yoki jun matoli kiyim.', 'Juft holatda kiyiladi.', 'P yoki N harfidan boshlanadi.']
    }
  },
  {
    id: 'backpack',
    name: 'Backpack',
    nameUz: 'Ryukzak',
    acceptedAnswers: ['backpack', 'bag', 'ryukzak', 'sumka'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Bag carried on the back secured with two shoulder straps.', 'Students carry books, laptops, and supplies in it.', 'It starts with the letter B.'],
      uz: ['Yelkaga osib yuriladigan ikki tasmali qulay sumka.', 'Maktab o‘quvchilari va sayohatchilar ishlatadi.', 'R yoki S harfidan boshlanadi.']
    }
  },
  {
    id: 'wallet',
    name: 'Wallet',
    nameUz: 'Hamyon',
    acceptedAnswers: ['wallet', 'purse', 'hamyon', 'karmon'],
    category: 'everyday',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Pocket-sized folding case for holding paper money, coins, and credit cards.', 'Kept safely in pockets or handbags.', 'It starts with the letter W.'],
      uz: ['Qog‘oz pullar, tangalar va plastik kartalarni solib yurish uchun charm qopchiq.', 'Cho‘ntakda saqlanadi.', 'H yoki K harfidan boshlanadi.']
    }
  },
  {
    id: 'helicopter',
    name: 'Helicopter',
    nameUz: 'Vertolyot',
    acceptedAnswers: ['helicopter', 'chopper', 'vertolyot', 'vertalyot'],
    category: 'vehicles',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Aircraft that lifts off vertically using overhead spinning rotor blades.', 'Can hover stationary in mid-air.', 'It starts with the letter H.'],
      uz: ['Usti qismida aylanuvchi katta parrak yordamida vertikal havoga ko‘tariluvchi uchar transport.', 'Samovotdan farqli ravishda bir joyda muallaq tura oladi.', 'V harfidan boshlanadi.']
    }
  },
  {
    id: 'motorcycle',
    name: 'Motorcycle',
    nameUz: 'Motosikl',
    acceptedAnswers: ['motorcycle', 'motorbike', 'bike', 'motosikl', 'bayk'],
    category: 'vehicles',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Two-wheeled motorized vehicle steered by handlebars.', 'Riders must wear a helmet for safety.', 'It starts with the letter M.'],
      uz: ['Dvigatel bilan harakatlanuvchi ikki g‘ildirakli tezyurar transport vositasi.', 'Haydovchisi shlem (kaska) kiyishi shart.', 'M yoki B harfidan boshlanadi.']
    }
  },
  {
    id: 'boat',
    name: 'Boat / Ship',
    nameUz: 'Qayiq',
    acceptedAnswers: ['boat', 'ship', 'yacht', 'qayiq', 'kema'],
    category: 'vehicles',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Watercraft designed to float and navigate across rivers, lakes, and oceans.', 'Propelled by oars, sails, or engines.', 'It starts with the letter B.'],
      uz: ['Daryo, ko‘l va dengiz suvlari yuzasida suzishga mo‘ljallangan transport vositasi.', 'Eshkaklar yoki motor yordamida harakatlanadi.', 'Q yoki K harfidan boshlanadi.']
    }
  },
  {
    id: 'train',
    name: 'Train / Locomotive',
    nameUz: 'Poyezd',
    acceptedAnswers: ['train', 'locomotive', 'poyezd', 'poezd'],
    category: 'vehicles',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Series of connected railway cars pulled along steel tracks by a locomotive.', 'Afrosiyob is Uzbekistan’s famous high-speed version.', 'It starts with the letter T.'],
      uz: ['Temir yo‘l (rels) bo‘ylab harakatlanuvchi bir necha vagonli uzoq masofali transport.', 'O‘zbekistondagi mashhur tezyurar turi — Afrosiyob.', 'P harfidan boshlanadi.']
    }
  },
  {
    id: 'tractor',
    name: 'Tractor',
    nameUz: 'Traktor',
    acceptedAnswers: ['tractor', 'traktor'],
    category: 'vehicles',
    difficulty: 'medium',
    image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Powerful farm vehicle with huge rear tires used for pulling plows in agricultural fields.', 'Crucial machine in cotton and wheat farming.', 'It starts with the letter T.'],
      uz: ['Dalalarda yerni haydash, ekish va qishloq xo‘jaligi ishlarini bajarishda ishlatiladigan katta g‘ildirakli maxsus mashina.', 'T harfidan boshlanadi.', 'Paxta va g‘alla terimida yordam beradi.']
    }
  },
  {
    id: 'scooter',
    name: 'Electric Scooter',
    nameUz: 'Samokat',
    acceptedAnswers: ['scooter', 'electric scooter', 'samokat'],
    category: 'vehicles',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Narrow platform on two small wheels with an upright handlebar steered standing up.', 'Ubiquitous rental mobility device in modern cities.', 'It starts with the letter S.'],
      uz: ['Tik turib haydaladigan ikki kichik g‘ildirakli zamonaviy shahar transporti.', 'Elektr batareya bilan harakatlanadi.', 'S harfidan boshlanadi.']
    }
  },
  {
    id: 'basketball',
    name: 'Basketball',
    nameUz: 'Basketbol to‘pi',
    acceptedAnswers: ['basketball', 'basketbol topi', 'basketbol to‘pi'],
    category: 'sports',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Bouncy orange textured ball with black rib lines thrown through an elevated hoop.', 'NBA athletes dribble this.', 'It starts with the letter B.'],
      uz: ['To‘rli savatga (halqaga) tashlab ochko olinadigan to‘q sariq qora chiziqli to‘p.', 'B harfidan boshlanadi.', 'NBA ligasi ushbu sport bilan mashhur.']
    }
  },
  {
    id: 'tennis_racket',
    name: 'Tennis Racket',
    nameUz: 'Tennis raketkasi',
    acceptedAnswers: ['tennis racket', 'racket', 'raketka', 'tennis raketkasi'],
    category: 'sports',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1617083934555-56324b178491?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Strung oval frame with a handle used to strike a yellow felt tennis ball over a net.', 'Used in Wimbledon tournaments.', 'It starts with the letter T or R.'],
      uz: ['Yashil koptokchani to‘r ustidan oshirib urish uchun tarang simli to‘rli dasta.', 'R yoki T harfidan boshlanadi.', 'Katta tennisda ishlatiladi.']
    }
  },
  {
    id: 'skateboard',
    name: 'Skateboard',
    nameUz: 'Skeytbord',
    acceptedAnswers: ['skateboard', 'skate', 'skeytbord', 'skeyt'],
    category: 'sports',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Short narrow wooden board mounted on four polyurethane wheels for street tricks.', 'Used in skateparks to perform ollies and kickflips.', 'It starts with the letter S.'],
      uz: ['To‘rtta kichik g‘ildirak o‘rnatilgan, ustida sakrash va tryuklar bajariladigan taxta.', 'S harfidan boshlanadi.', 'Ko‘cha sportida juda ommabop.']
    }
  },
  {
    id: 'boxing_gloves',
    name: 'Boxing Gloves',
    nameUz: 'Boks qo‘lqopi',
    acceptedAnswers: ['boxing gloves', 'gloves', 'boks qolqopi', 'boks qo‘lqopi'],
    category: 'sports',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Cushioned padded leather mittens worn on hands to protect fighters inside the ring.', 'Uzbek Olympic champions are renowned in this fighting sport.', 'It starts with the letter B.'],
      uz: ['Ringda zarba berish va qo‘llarni jarohatdan himoya qilish uchun kiyiladigan qalin charm qo‘lqop.', 'O‘zbekistonlik olimpiada chempionlari bu sportda jahon yetakchisi.', 'B harfidan boshlanadi.']
    }
  },
  {
    id: 'dumbbell',
    name: 'Dumbbell / Weight',
    nameUz: 'Gantel',
    acceptedAnswers: ['dumbbell', 'weights', 'gantel', 'tosh'],
    category: 'sports',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Short bar with heavy weight discs on each end lifted in gyms for muscle training.', 'Used for bicep curls and arm workouts.', 'It starts with the letter D.'],
      uz: ['Qo‘l va yelka mushaklarini baquvvat qilish uchun ko‘tariladigan og‘ir temir sport anjomi.', 'Fitnes zallarida mashq qilishda ishlatiladi.', 'G harfidan boshlanadi.']
    }
  },
  {
    id: 'notebook',
    name: 'Notebook / Notepad',
    nameUz: 'Daftar',
    acceptedAnswers: ['notebook', 'notepad', 'daftar', 'bloknot'],
    category: 'school',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Book of bound blank or lined paper sheets used for writing notes and homework.', 'Every student carries several in their schoolbag.', 'It starts with the letter N.'],
      uz: ['Maktab va universitetda darslarni yozib borish uchun katakli yoki chiziqli qog‘oz varaqlar to‘plami.', 'D yoki B harfidan boshlanadi.', 'Ruchka bilan yoziladi.']
    }
  },
  {
    id: 'globe',
    name: 'World Globe',
    nameUz: 'Globus',
    acceptedAnswers: ['globe', 'world globe', 'globus'],
    category: 'school',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Spherical model of Earth displaying oceans, continents, and national borders that spins on an axis.', 'Found in geography classrooms.', 'It starts with the letter G.'],
      uz: ['Yer sharining kichraytirilgan aylanuvchi modeli.', 'Geografiya darslarida qit’alar va okeanlarni o‘rganishda qo‘llaniladi.', 'G harfidan boshlanadi.']
    }
  },
  {
    id: 'pencil',
    name: 'Pencil',
    nameUz: 'Qalam',
    acceptedAnswers: ['pencil', 'qalam', 'oddiy qalam'],
    category: 'school',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1585336261026-7f8976b9f2d1?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Wooden writing instrument with a graphite core that can be erased with rubber.', 'Sharpened with a sharpener.', 'It starts with the letter P.'],
      uz: ['Grafiti bor, o‘chirg‘ich bilan o‘chirsa bo‘ladigan yog‘och yozuv quroli.', 'Chizmachilik va rasm chizishda ishlatiladi.', 'Q harfidan boshlanadi.']
    }
  },
  {
    id: 'ruler',
    name: 'Ruler',
    nameUz: 'Chizg‘ich',
    acceptedAnswers: ['ruler', 'chizg‘ich', 'chizgich', 'lineyka'],
    category: 'school',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Straight strip with centimeter and millimeter markings used to draw straight lines.', 'Found in pencil cases for geometry.', 'It starts with the letter R.'],
      uz: ['To‘g‘ri chiziq chizish va uzunlikni santimetrlarda o‘lchash uchun asbob.', 'Ch yoki L harfidan boshlanadi.', 'Geometriya darslarida kerak bo‘ladi.']
    }
  },
  {
    id: 'hammer',
    name: 'Hammer',
    nameUz: 'Bolg‘a',
    acceptedAnswers: ['hammer', 'bolg‘a', 'bolga', 'molotok'],
    category: 'tools',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Hand tool with a heavy metal head mounted on a handle used for pounding nails.', 'Essential carpenter and construction tool.', 'It starts with the letter H.'],
      uz: ['Mix qoqish va temir-taxtalarni urib to‘g‘rilash uchun og‘ir kallakli asbob.', 'Duradgor va ustalarning asosiy quroli.', 'B yoki M harfidan boshlanadi.']
    }
  },
  {
    id: 'screwdriver',
    name: 'Screwdriver',
    nameUz: 'Otvyortka',
    acceptedAnswers: ['screwdriver', 'otvyortka', 'buragich'],
    category: 'tools',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Tool with a flat or cross-shaped tip used for turning and tightening screws.', 'Phillips and slotted are common varieties.', 'It starts with the letter S.'],
      uz: ['Vintlar va shuruplarni burab mahkamlash yoki yechish uchun mo‘ljallangan asbob.', 'Uchi xochsimon yoki yassi bo‘ladi.', 'O yoki B harfidan boshlanadi.']
    }
  },
  {
    id: 'paintbrush',
    name: 'Paintbrush',
    nameUz: 'Mo‘yqalam',
    acceptedAnswers: ['paintbrush', 'brush', 'mo‘yqalam', 'moyqalam', 'kist'],
    category: 'tools',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Handle with attached bristles dipped in paint to create artwork or coat walls.', 'Artists use this on canvas palettes.', 'It starts with the letter P.'],
      uz: ['Rassomlar bo‘yoqqa botirib rasm chizadigan tukli ingichka dasta.', 'M yoki K harfidan boshlanadi.', 'Akvarel va moybo‘yoq bilan ishlatiladi.']
    }
  },
  {
    id: 'ladder',
    name: 'Ladder',
    nameUz: 'Narvon',
    acceptedAnswers: ['ladder', 'narvon', 'zina'],
    category: 'tools',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Structure with two upright side rails connected by horizontal climbing rungs.', 'Used to reach high ceilings, roofs, or fruit trees.', 'It starts with the letter L.'],
      uz: ['Tomga, daraxt shoxlariga yoki baland joylarga chiqish uchun pog‘onali moslama.', 'N yoki Z harfidan boshlanadi.', 'Yog‘och yoki alyuminiydan yasaladi.']
    }
  },
  {
    id: 'flower_rose',
    name: 'Rose / Flower',
    nameUz: 'Atirgul',
    acceptedAnswers: ['rose', 'flower', 'atirgul', 'gul'],
    category: 'nature',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Fragrant flower with delicate red petals and sharp thorns along its green stem.', 'Classic symbol of love given on celebrations.', 'It starts with the letter R.'],
      uz: ['Xushbo‘y hidli, qizil yaproqli va poyasida tikanlari bor go‘zal gul.', 'Muhabbat va bayramlar ramzi.', 'A yoki G harfidan boshlanadi.']
    }
  },
  {
    id: 'tree',
    name: 'Tree',
    nameUz: 'Daraxt',
    acceptedAnswers: ['tree', 'daraxt', 'chinor'],
    category: 'nature',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Perennial woody plant with a tall brown trunk, leafy branches, and roots.', 'Provides shade and produces oxygen for our planet.', 'It starts with the letter T.'],
      uz: ['Baland yog‘och tanali, shox-shabbali va yashil bargli ko‘p yillik o‘simlik.', 'Yozda soya beradi va kislorod ishlab chiqaradi.', 'D harfidan boshlanadi.']
    }
  },
  {
    id: 'cactus',
    name: 'Cactus',
    nameUz: 'Kaktus',
    acceptedAnswers: ['cactus', 'kaktus'],
    category: 'nature',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Prickly desert plant adapted to store water with protective sharp spines.', 'Thrives in arid dry sand climates.', 'It starts with the letter C.'],
      uz: ['Cho‘l sharoitida o‘sadigan, suvsizlikka chidamli, usti ignali o‘simlik.', 'Ko‘p xonadonlarda kompyuter yoniga qo‘yiladi.', 'K harfidan boshlanadi.']
    }
  },
  {
    id: 'butterfly',
    name: 'Butterfly',
    nameUz: 'Kapalak',
    acceptedAnswers: ['butterfly', 'kapalak'],
    category: 'nature',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Flying insect with four colorful delicate wings that hatches from a caterpillar chrysalis.', 'Flutters from flower to flower drinking sweet nectar.', 'It starts with the letter B.'],
      uz: ['Gullar ustida uchib yuruvchi rang-barang nozik qanotli hasharot.', 'Qurt (g‘umbak)dan ajoyib o‘zgarish bilan paydo bo‘ladi.', 'K harfidan boshlanadi.']
    }
  },
  {
    id: 'cat',
    name: 'Cat / Kitten',
    nameUz: 'Mushuk',
    acceptedAnswers: ['cat', 'kitten', 'mushuk', 'mushukcha'],
    category: 'nature',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Small domesticated feline with whiskers and soft fur that purrs and catches mice.', 'Says meow.', 'It starts with the letter C.'],
      uz: ['Sichqon tutuvchi, xurillab erkalovchi mo‘ylovli uy hayvoni.', 'Miyovlaydi.', 'M harfidan boshlanadi.']
    }
  },
  {
    id: 'dog',
    name: 'Dog / Puppy',
    nameUz: 'Kuchuk',
    acceptedAnswers: ['dog', 'puppy', 'kuchuk', 'it', 'kuchukcha'],
    category: 'nature',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Loyal canine domestic companion known as human’s best friend.', 'Barks and wags its tail when excited.', 'It starts with the letter D.'],
      uz: ['Insonning eng vafodor do‘sti hisoblangan xonaki jonivor.', 'Uyni qo‘riqlaydi va vovillaydi.', 'K yoki I harfidan boshlanadi.']
    }
  },
  {
    id: 'horse',
    name: 'Horse',
    nameUz: 'Ot',
    acceptedAnswers: ['horse', 'ot', 'tulpor', 'yobu'],
    category: 'nature',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Majestic four-legged mammal with hooves, a mane, and tail ridden in equestrian sports.', 'Ko‘pkari (Buzkashi) in Central Asia is played on this steed.', 'It starts with the letter H.'],
      uz: ['Yoli va tuyoqlari bo‘lgan chopqir, viqorli uy hayvoni.', 'Ko‘pkari (uloq) o‘yinlarida chavandozlar minadi.', 'O yoki T harfidan boshlanadi.']
    }
  },
  {
    id: 'bird',
    name: 'Bird / Parrot',
    nameUz: 'Qush',
    acceptedAnswers: ['bird', 'parrot', 'qush', 'to‘ti', 'toti'],
    category: 'nature',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Warm-blooded feathered creature with wings and a beak that sings in trees.', 'Lays eggs in nests.', 'It starts with the letter B.'],
      uz: ['Qanotlari, tumshug‘i va patlari bo‘lgan, havoda uchuvchi sayroqi mavjudot.', 'Daraxtlarda in quradi.', 'Q yoki T harfidan boshlanadi.']
    }
  },
  {
    id: 'fish',
    name: 'Fish / Aquarium Fish',
    nameUz: 'Baliq',
    acceptedAnswers: ['fish', 'aquarium fish', 'baliq', 'balik'],
    category: 'nature',
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=800&auto=format&fit=crop&q=80',
    hints: {
      en: ['Aquatic creature with scales, fins, and gills swimming in water.', 'Kept in glass bowls or caught with fishing rods.', 'It starts with the letter F.'],
      uz: ['Suvda yashaydigan, tangachali va suzgichli jonivor.', 'Qarmoq bilan tutiladi yoki akvariumda boqiladi.', 'B harfidan boshlanadi.']
    }
  }
];

