

const colorTranslations: {
    [key: string]: {
        [key: string]: string;
    };
} = {
    "mix": {
        "en_snake": "mix",
        "en": "MIX",
        "uk": "MIX",
        "ru": "MIX"
    },
    "apricot": {
        "en_snake": "apricot",
        "en": "apricot",
        "uk": "абрикос",
        "ru": "абрикос"
    },
    "apricot_brandy": {
        "en_snake": "apricot_brandy",
        "en": "apricot brandy",
        "uk": "абрикосовий бренді",
        "ru": "абрикосовий бренді"
    },
    "amber": {
        "en_snake": "amber",
        "en": "amber",
        "uk": "амбра",
        "ru": "амбра"
    },
    "anthracite": {
        "en_snake": "anthracite",
        "en": "anthracite",
        "uk": "антрацит",
        "ru": "антрацит"
    },
    "batik": {
        "en_snake": "batik",
        "en": "batik",
        "uk": "батік",
        "ru": "батік"
    },
    "beige": {
        "en_snake": "beige",
        "en": "beige",
        "uk": "бежевий",
        "ru": "бежевий"
    },
    "beige_with_black": {
        "en_snake": "beige_with_black",
        "en": "beige with black",
        "uk": "бежевий з чорним",
        "ru": "бежевий + чорний"
    },
    "beige_with_brown": {
        "en_snake": "beige_with_brown",
        "en": "beige with brown",
        "uk": "бежевий з коричневим",
        "ru": "бежевий, коричневий"
    },
    "berlin_blue": {
        "en_snake": "berlin_blue",
        "en": "berlin blue",
        "uk": "берлінська лазур",
        "ru": "берлінська лазур"
    },
    "white": {
        "en_snake": "white",
        "en": "white",
        "uk": "білий",
        "ru": "білий"
    },
    "light_blue": {
        "en_snake": "light_blue",
        "en": "light blue",
        "uk": "світло-синій",
        "ru": "світло-синій"
    },
    "light_blue_with_pink": {
        "en_snake": "light_blue_with_pink",
        "en": "light blue with pink",
        "uk": "блакитний з рожевим",
        "ru": "блакитний, рожевий"
    },
    "burgundy": {
        "en_snake": "burgundy",
        "en": "burgundy",
        "uk": "бордо",
        "ru": "бордо"
    },
    "dusty_green": {
        "en_snake": "dusty_green",
        "en": "dusty green",
        "uk": "брудно-зелений",
        "ru": "брудно-зелений"
    },
    "elderberry": {
        "en_snake": "elderberry",
        "en": "elderberry",
        "uk": "бузина",
        "ru": "бузина"
    },
    "lilac_mist": {
        "en_snake": "lilac_mist",
        "en": "lilac mist",
        "uk": "бузковий туман",
        "ru": "бузковий туман"
    },
    "lilac_twilight": {
        "en_snake": "lilac_twilight",
        "en": "lilac twilight",
        "uk": "бузкові сутінки",
        "ru": "бузкові сутінки"
    },
    "hydrangea": {
        "en_snake": "hydrangea",
        "en": "hydrangea",
        "uk": "гортензія",
        "ru": "гортензія"
    },
    "graphite": {
        "en_snake": "graphite",
        "en": "graphite",
        "uk": "графіт",
        "ru": "графіт"
    },
    "denim": {
        "en_snake": "denim",
        "en": "denim",
        "uk": "джинс",
        "ru": "джинс"
    },
    "smoky_quartz": {
        "en_snake": "smoky_quartz",
        "en": "smoky quartz",
        "uk": "димчастий кварц",
        "ru": "димчастий кварц"
    },
    "espresso": {
        "en_snake": "espresso",
        "en": "espresso",
        "uk": "еспресо",
        "ru": "еспресо"
    },
    "jasmine_with_peony": {
        "en_snake": "jasmine_with_peony",
        "en": "jasmine with peony",
        "uk": "жасмін з півонією",
        "ru": "жасмін + півонія"
    },
    "green": {
        "en_snake": "green",
        "en": "green",
        "uk": "зелений",
        "ru": "зелений"
    },
    "golden": {
        "en_snake": "golden",
        "en": "golden",
        "uk": "золото",
        "ru": "золото"
    },
    "coffee": {
        "en_snake": "coffee",
        "en": "coffee",
        "uk": "кавовий",
        "ru": "кавовий"
    },
    "coffee_pink": {
        "en_snake": "coffee_pink",
        "en": "coffee pink",
        "uk": "кавово-рожевий",
        "ru": "кавово-рожевий"
    },
    "cappuccino": {
        "en_snake": "cappuccino",
        "en": "cappuccino",
        "uk": "капучино",
        "ru": "капучино"
    },
    "sakura_blossom": {
        "en_snake": "sakura_blossom",
        "en": "sakura blossom",
        "uk": "квітка сакури",
        "ru": "квітка сакури"
    },
    "floral_pink": {
        "en_snake": "floral_pink",
        "en": "floral pink",
        "uk": "квітковий рожевий",
        "ru": "квітковий рожевий"
    },
    "floral_nude": {
        "en_snake": "floral_nude",
        "en": "floral nude",
        "uk": "квітковий тілесний",
        "ru": "квітковий тілесний"
    },
    "brown": {
        "en_snake": "brown",
        "en": "brown",
        "uk": "коричневий",
        "ru": "коричневий"
    },
    "cream_brulee": {
        "en_snake": "cream_brulee",
        "en": "cream brulee",
        "uk": "крем-брюле",
        "ru": "крем-брюле"
    },
    "crocus": {
        "en_snake": "crocus",
        "en": "crocus",
        "uk": "крокус",
        "ru": "крокус"
    },
    "lavender": {
        "en_snake": "lavender",
        "en": "lavender",
        "uk": "лавандовий",
        "ru": "лавандовий"
    },
    "lilac": {
        "en_snake": "lilac",
        "en": "lilac",
        "uk": "ліловий",
        "ru": "ліловий"
    },
    "lotus": {
        "en_snake": "lotus",
        "en": "lotus",
        "uk": "лотос",
        "ru": "лотос"
    },
    "raspberry_radiance": {
        "en_snake": "raspberry_radiance",
        "en": "raspberry radiance",
        "uk": "малинове сяйво",
        "ru": "малинове сяйво"
    },
    "raspberry": {
        "en_snake": "raspberry",
        "en": "raspberry",
        "uk": "малиновий",
        "ru": "малиновий"
    },
    "raspberry_with_purple": {
        "en_snake": "raspberry_with_purple",
        "en": "raspberry with purple",
        "uk": "малиновий з фіолетовим",
        "ru": "малиновий + фіолетовый"
    },
    "moroccan_blue": {
        "en_snake": "moroccan_blue",
        "en": "moroccan blue",
        "uk": "Марокко синій",
        "ru": "Марокко синій"
    },
    "marsala": {
        "en_snake": "marsala",
        "en": "marsala",
        "uk": "марсала",
        "ru": "марсала"
    },
    "mahogany": {
        "en_snake": "mahogany",
        "en": "mahogany",
        "uk": "махагон",
        "ru": "махагон"
    },
    "melange": {
        "en_snake": "melange",
        "en": "melange",
        "uk": "меланж",
        "ru": "меланж"
    },
    "milk": {
        "en_snake": "milk",
        "en": "milk",
        "uk": "молоко",
        "ru": "молоко"
    },
    "milk_with_beige": {
        "en_snake": "milk_with_beige",
        "en": "milk with beige",
        "uk": "молоко з бежевим",
        "ru": "молоко, бежевий"
    },
    "milky_nude": {
        "en_snake": "milky_nude",
        "en": "milky nude",
        "uk": "молочний нюд",
        "ru": "молочний нюд"
    },
    "night_shade": {
        "en_snake": "night_shade",
        "en": "night shade",
        "uk": "нічна тінь",
        "ru": "нічна тінь"
    },
    "nude": {
        "en_snake": "nude",
        "en": "nude",
        "uk": "тілесний",
        "ru": "тілесний"
    },
    "deer": {
        "en_snake": "deer",
        "en": "deer",
        "uk": "олені",
        "ru": "олені"
    },
    "olive": {
        "en_snake": "olive",
        "en": "olive",
        "uk": "оливковий",
        "ru": "оливковий"
    },
    "pepper": {
        "en_snake": "pepper",
        "en": "pepper",
        "uk": "перець",
        "ru": "перець"
    },
    "peach_blush": {
        "en_snake": "peach_blush",
        "en": "peach blush",
        "uk": "персиковий рум'янець",
        "ru": "персиковий рум'янець"
    },
    "peony": {
        "en_snake": "peony",
        "en": "peony",
        "uk": "півонія",
        "ru": "півонія"
    },
    "peony_with_black": {
        "en_snake": "peony_with_black",
        "en": "peony with black",
        "uk": "півонія з чорним",
        "ru": "півонія + чорний"
    },
    "orange": {
        "en_snake": "orange",
        "en": "orange",
        "uk": "помаранчевий",
        "ru": "помаранчевий"
    },
    "ash_rose": {
        "en_snake": "ash_rose",
        "en": "ash rose",
        "uk": "попіл троянди",
        "ru": "попіл троянди"
    },
    "off_white": {
        "en_snake": "off_white",
        "en": "off-white",
        "uk": "приглушено-білий",
        "ru": "приглушено-білий"
    },
    "pink_petal": {
        "en_snake": "pink_petal",
        "en": "pink petal",
        "uk": "рожева пелюстка",
        "ru": "рожева пелюстка"
    },
    "pink_pearl": {
        "en_snake": "pink_pearl",
        "en": "pink pearl",
        "uk": "рожева перлина",
        "ru": "рожева перлина"
    },
    "pink_powder": {
        "en_snake": "pink_powder",
        "en": "pink powder",
        "uk": "рожева пудра",
        "ru": "рожева пудра"
    },
    "pink": {
        "en_snake": "pink",
        "en": "pink",
        "uk": "рожевий",
        "ru": "рожевий"
    },
    "pink_pattern": {
        "en_snake": "pink_pattern",
        "en": "pink pattern",
        "uk": "рожевий візерунок",
        "ru": "рожевий візерунок"
    },
    "pink_with_beige": {
        "en_snake": "pink_with_beige",
        "en": "pink with beige",
        "uk": "рожевий з бежевим",
        "ru": "рожевий, бежевий"
    },
    "rumba": {
        "en_snake": "rumba",
        "en": "rumba",
        "uk": "румба",
        "ru": "румба"
    },
    "savannah": {
        "en_snake": "savannah",
        "en": "savannah",
        "uk": "савана",
        "ru": "савана"
    },
    "sakura": {
        "en_snake": "sakura",
        "en": "sakura",
        "uk": "сакура",
        "ru": "сакура"
    },
    "sapphire": {
        "en_snake": "sapphire",
        "en": "sapphire",
        "uk": "сапфір",
        "ru": "сапфір"
    },
    "light_beige": {
        "en_snake": "light_beige",
        "en": "light beige",
        "uk": "світло-бежевий",
        "ru": "світло-бежевий"
    },
    "light_pink": {
        "en_snake": "light_pink",
        "en": "light pink",
        "uk": "світло-рожевий",
        "ru": "світло-рожевий"
    },
    "light_grey": {
        "en_snake": "light_grey",
        "en": "light grey",
        "uk": "світло-сірий",
        "ru": "світло-сірий"
    },
    "blue": {
        "en_snake": "blue",
        "en": "blue",
        "uk": "синій",
        "ru": "синій"
    },
    "sapphire_blue": {
        "en_snake": "sapphire_blue",
        "en": "sapphire blue",
        "uk": "синій сапфір",
        "ru": "синій сапфір"
    },
    "topaz_blue": {
        "en_snake": "topaz_blue",
        "en": "topaz blue",
        "uk": "синій топаз",
        "ru": "синій топаз"
    },
    "blue_black": {
        "en_snake": "blue_black",
        "en": "blue-black",
        "uk": "cиньо-чорний",
        "ru": "синьо-чорний"
    },
    "grey_pearl": {
        "en_snake": "grey_pearl",
        "en": "grey pearl",
        "uk": "сіра перлина",
        "ru": "сіра перлина"
    },
    "grey": {
        "en_snake": "grey",
        "en": "grey",
        "uk": "сірий",
        "ru": "сірий"
    },
    "creamy_grey": {
        "en_snake": "creamy_grey",
        "en": "creamy grey",
        "uk": "сірий кремовий",
        "ru": "сірий кремовий"
    },
    "grey_lilac": {
        "en_snake": "grey_lilac",
        "en": "grey lilac",
        "uk": "сіро-ліловий",
        "ru": "сіро-ліловий"
    },
    "plum": {
        "en_snake": "plum",
        "en": "plum",
        "uk": "слива",
        "ru": "слива"
    },
    "plum_wine": {
        "en_snake": "plum_wine",
        "en": "plum wine",
        "uk": "сливове вино",
        "ru": "сливове вино"
    },
    "emerald": {
        "en_snake": "emerald",
        "en": "emerald",
        "uk": "смарагд",
        "ru": "смарагд"
    },
    "silver_peony": {
        "en_snake": "silver_peony",
        "en": "silver peony",
        "uk": "срібляста півонія",
        "ru": "срібляста півонія"
    },
    "silver_peony_with_black": {
        "en_snake": "silver_peony_with_black",
        "en": "silver peony with black",
        "uk": "срібляста півонія з чорним",
        "ru": "срібляста півонія + чорний"
    },
    "dark_denim": {
        "en_snake": "dark_denim",
        "en": "dark denim",
        "uk": "темний денім",
        "ru": "темний денім"
    },
    "dark_brown": {
        "en_snake": "dark_brown",
        "en": "dark brown",
        "uk": "темно-коричневий",
        "ru": "темно-коричневий"
    },
    "dark_blue": {
        "en_snake": "dark_blue",
        "en": "dark blue",
        "uk": "темно-синій",
        "ru": "темно-синій"
    },
    "dark_blue_with_peony": {
        "en_snake": "dark_blue_with_peony",
        "en": "dark blue with peony",
        "uk": "темно-синій з півонією",
        "ru": "темно-синій + півонія"
    },
    "dark_blue_with_black": {
        "en_snake": "dark_blue_with_black",
        "en": "dark blue with black",
        "uk": "темно-синій з чорним",
        "ru": "темно-синій + чорний"
    },
    "dark_blue_with_beige": {
        "en_snake": "dark_blue_with_beige",
        "en": "dark blue with beige",
        "uk": "темно-синій з бежевим",
        "ru": "темно-синій, бежевий"
    },
    "dark_grey": {
        "en_snake": "dark_grey",
        "en": "dark grey",
        "uk": "темно-сірий",
        "ru": "темно-сірий"
    },
    "dark_red_rose": {
        "en_snake": "dark_red_rose",
        "en": "dark red rose",
        "uk": "темно-червона троянда",
        "ru": "темно-червона троянда"
    },
    "mist": {
        "en_snake": "mist",
        "en": "mist",
        "uk": "туман",
        "ru": "туман"
    },
    "purple": {
        "en_snake": "purple",
        "en": "purple",
        "uk": "фіолетовий",
        "ru": "фіолетовий"
    },
    "flamingo": {
        "en_snake": "flamingo",
        "en": "flamingo",
        "uk": "фламінго",
        "ru": "фламінго"
    },
    "florida": {
        "en_snake": "florida",
        "en": "florida",
        "uk": "флоріда",
        "ru": "флоріда"
    },
    "frappe": {
        "en_snake": "frappe",
        "en": "frappe",
        "uk": "фрапе",
        "ru": "фрапе"
    },
    "khaki": {
        "en_snake": "khaki",
        "en": "khaki",
        "uk": "хакі",
        "ru": "хакі"
    },
    "seagull": {
        "en_snake": "seagull",
        "en": "seagull",
        "uk": "чайка",
        "ru": "чайка"
    },
    "red": {
        "en_snake": "red",
        "en": "red",
        "uk": "червоний",
        "ru": "червоний"
    },
    "red_grape": {
        "en_snake": "red_grape",
        "en": "red grape",
        "uk": "червоний виноград",
        "ru": "червоний виноград"
    },
    "red_with_white": {
        "en_snake": "red_with_white",
        "en": "red with white",
        "uk": "червоний з білим",
        "ru": "червоний, білий"
    },
    "black": {
        "en_snake": "black",
        "en": "black",
        "uk": "чорний",
        "ru": "чорний"
    },
    "black_pattern": {
        "en_snake": "black_pattern",
        "en": "black pattern",
        "uk": "чорний візерунок",
        "ru": "чорний візерунок"
    },
    "black_quartz": {
        "en_snake": "black_quartz",
        "en": "black quartz",
        "uk": "чорний кварц",
        "ru": "чорний кварц"
    },
    "black_with_beige": {
        "en_snake": "black_with_beige",
        "en": "black with beige",
        "uk": "чорний з бежевим",
        "ru": "чорний, бежевий"
    },
    "black_with_white": {
        "en_snake": "black_with_white",
        "en": "black with white",
        "uk": "чорний з білим",
        "ru": "чорний, білий"
    },
    "black_with_green": {
        "en_snake": "black_with_green",
        "en": "black with green",
        "uk": "чорний з зеленим",
        "ru": "чорний, зелений"
    },
    "black_with_coral": {
        "en_snake": "black_with_coral",
        "en": "black with coral",
        "uk": "чорний з коралом",
        "ru": "чорний, корал"
    },
    "black_with_roasted_almond": {
        "en_snake": "black_with_roasted_almond",
        "en": "black with roasted almond",
        "uk": "чорний з обсмаженим мигдалем",
        "ru": "чорний, обсм мигдаль"
    },
    "black_with_orange": {
        "en_snake": "black_with_orange",
        "en": "black with orange",
        "uk": "чорний з помаранчевим",
        "ru": "чорний, помаранчевий"
    },
    "black_with_grey": {
        "en_snake": "black_with_grey",
        "en": "black with grey",
        "uk": "чорний з сірим",
        "ru": "чорний, сірий"
    },
    "black_with_red": {
        "en_snake": "black_with_red",
        "en": "black with red",
        "uk": "чорний з червоним",
        "ru": "чорний, червоний"
    },
    "black_beige": {
        "en_snake": "black_beige",
        "en": "black-beige",
        "uk": "чорно-бежевий",
        "ru": "чорно-бежевий"
    }
}

export default colorTranslations
