/*Action types*/

import { GET_COUNTRIES , GET_COUNTRY, GET_ACTIVITIES, POST_ACTIVITY, FILTER_COUNTRIES_BYID} from "./actions/types";




const initialState = {

    countries : [],

    reloadCountries: true,

    

};


const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case GET_COUNTRIES:
            return {...state, countries: action.payload, reloadCountries: false,
            };

        case GET_COUNTRY:
            return {...state, countries: action.payload, reloadCountries: false,
            };

        case GET_ACTIVITIES:
            return {...state, countries: action.payload, reloadCountries: false,
            };

        case POST_ACTIVITY:
            return {...state, countries: action.payload, reloadCountries: false,
            };

        case FILTER_COUNTRIES_BYID:
            return {...state, countries: action.payload, reloadCountries: false,
            };

        default:
            return {...state};
    }



};

export default rootReducer;
/*

countries: [ 
           
    {"name":{"common":"Brazil","official":"Federative Republic of Brazil",
    "nativeName":{"por":
{"official":"República Federativa do Brasil",
"common":"Brasil"}}},
"tld":[".br"],
"cca2":"BR",
"ccn3":"076",
"cca3":"BRA",
"cioc":"BRA",
"independent":true,
"status":"officially-assigned",
"unMember":true,
"currencies":{"BRL":{"name":"Brazilian real","symbol":"R$"}},
"idd":{"root":"+5","suffixes":["5"]},
"capital":["Brasília"],
"altSpellings":["BR","Brasil","Federative Republic of Brazil","República Federativa do Brasil"],
"region":"Americas",
"subregion":"South America",
"languages":{"por":"Portuguese"},
"translations":{
    "ara":{"official":"جمهورية البرازيل الاتحادية",
    "common":"البرازيل"},
    "bre":{"official":"Republik Kevreel Brazil",
    "common":"Brazil"},
    "ces":{"official":"Brazilská federativní republika",
    "common":"Brazílie"},
    "cym":{"official":"Gweriniaeth Ffederal Brasil",
    "common":"Brasil"},
    "deu":{"official":"Föderative Republik Brasilien",
    "common":"Brasilien"},
    "est":{"official":"Brasiilia Liitvabariik",
    "common":"Brasiilia"},
    "fin":{"official":"Brasilian liittotasavalta",
    "common":"Brasilia"},
    "fra":{"official":"République fédérative du Brésil",
    "common":"Brésil"},
    "hrv":{"official":"Savezne Republike Brazil",
    "common":"Brazil"},
    "hun":{"official":"Brazil Szövetségi Köztársaság",
    "common":"Brazília"},
    "ita":{"official":"Repubblica federativa del Brasile",
    "common":"Brasile"},
    "jpn":{"official":"ブラジル連邦共和国",
    "common":"ブラジル"},
    "kor":{"official":"브라질 연방 공화국",
    "common":"브라질"},
    "nld":{"official":"Federale Republiek Brazilië",
    "common":"Brazilië"},
    "per":{"official":"جمهوری فدراتیو برزیل",
    "common":"برزیل"},
    "pol":{"official":"Federacyjna Republika Brazylii",
    "common":"Brazylia"},
    "por":{"official":"República Federativa do Brasil",
    "common":"Brasil"},
    "rus":{"official":"Федеративная Республика Бразилия",
    "common":"Бразилия"},
    "slk":{"official":"Brazílska federatívna republika",
    "common":"Brazília"},
    "spa":{"official":"República Federativa del Brasil",
    "common":"Brasil"},
    "swe":{"official":"Förbundsrepubliken Brasilien",
    "common":"Brasilien"},
    "urd":{"official":"وفاقی جمہوریہ برازیل",
    "common":"برازیل"},
    "zho":{"official":"巴西联邦共和国",
    "common":"巴西"}},
    "latlng":[-10.0,-55.0],
    "landlocked":false,
    "borders":["ARG","BOL","COL","GUF","GUY","PRY","PER","SUR","URY","VEN"],
    "area":8515767.0,
    "demonyms":{
        "eng":{"f":"Brazilian","m":"Brazilian"},
        "fra":{"f":"Brésilienne","m":"Brésilien"}},
        "flag":"\uD83C\uDDE7\uD83C\uDDF7",
        "maps":{
            "googleMaps":"https://goo.gl/maps/waCKk21HeeqFzkNC9",
        "openStreetMaps":"https://www.openstreetmap.org/relation/59470"},
        "population":212559409,
        "gini":{"2019":53.4},
        "fifa":"BRA",
        "car":{
            "signs":["BR"],
            "side":"right"},
            "timezones":["UTC-05:00","UTC-04:00","UTC-03:00","UTC-02:00"],
            "continents":["South America"],
            "flags":["https://flagcdn.com/br.svg","https://flagcdn.com/w320/br.png"]},
            {
                "name": {
                "common": "Åland Islands",
                "official": "Åland Islands",
                "nativeName": {
                "swe": {
                "official": "Landskapet Åland",
                "common": "Åland"
                }
                }
                },
                "tld": [
                ".ax"
                ],
                "cca2": "AX",
                "ccn3": "248",
                "cca3": "ALA",
                "independent": false,
                "status": "officially-assigned",
                "unMember": false,
                "currencies": {
                "EUR": {
                "name": "Euro",
                "symbol": "€"
                }
                },
                "idd": {
                "root": "+3",
                "suffixes": [
                "5818"
                ]
                },
                "capital": [
                "Mariehamn"
                ],
                "altSpellings": [
                "AX",
                "Aaland",
                "Aland",
                "Ahvenanmaa"
                ],
                "region": "Europe",
                "subregion": "Northern Europe",
                "languages": {
                "swe": "Swedish"
                },
                "translations": {
                "ara": {
                "official": "جزر أولاند",
                "common": "جزر أولاند"
                },
                "bre": {
                "official": "Inizi Åland",
                "common": "Åland"
                },
                "ces": {
                "official": "Ålandské ostrovy",
                "common": "Ålandy"
                },
                "cym": {
                "official": "Åland Islands",
                "common": "Åland Islands"
                },
                "deu": {
                "official": "Åland-Inseln",
                "common": "Åland"
                },
                "est": {
                "official": "Ahvenamaa maakond",
                "common": "Ahvenamaa"
                },
                "fin": {
                "official": "Ahvenanmaan maakunta",
                "common": "Ahvenanmaa"
                },
                "fra": {
                "official": "Ahvenanmaa",
                "common": "Ahvenanmaa"
                },
                "hrv": {
                "official": "Aland Islands",
                "common": "Ålandski otoci"
                },
                "hun": {
                "official": "Åland-szigetek",
                "common": "Åland-szigetek"
                },
                "ita": {
                "official": "Isole Åland",
                "common": "Isole Aland"
                },
                "jpn": {
                "official": "オーランド諸島",
                "common": "オーランド諸島"
                },
                "kor": {
                "official": "올란드 제도",
                "common": "올란드 제도"
                },
                "nld": {
                "official": "Åland eilanden",
                "common": "Ålandeilanden"
                },
                "per": {
                "official": "جزایر الند",
                "common": "جزایر الند"
                },
                "pol": {
                "official": "Wyspy Alandzkie",
                "common": "Wyspy Alandzkie"
                },
                "por": {
                "official": "Ilhas Åland",
                "common": "Alândia"
                },
                "rus": {
                "official": "Аландские острова",
                "common": "Аландские острова"
                },
                "slk": {
                "official": "Alandské ostrovy",
                "common": "Alandy"
                },
                "spa": {
                "official": "Islas Åland",
                "common": "Alandia"
                },
                "swe": {
                "official": "Åland",
                "common": "Åland"
                },
                "urd": {
                "official": "جزائر اولند",
                "common": "جزائر اولند"
                },
                "zho": {
                "official": "奥兰群岛",
                "common": "奥兰群岛"
                }
                },
                "latlng": [
                60.116667,
                19.9
                ],
                "landlocked": false,
                "area": 1580,
                "demonyms": {
                "eng": {
                "f": "Ålandish",
                "m": "Ålandish"
                },
                "fra": {
                "f": "Ålandaise",
                "m": "Ålandais"
                }
                },
                "flag": "🇦🇽",
                "maps": {
                "googleMaps": "https://goo.gl/maps/ewFb3vYsfUmVCoSb8",
                "openStreetMaps": "https://www.openstreetmap.org/relation/1650407"
                },
                "population": 29458,
                "car": {
                "signs": [
                ""
                ],
                "side": "right"
                },
                "timezones": [
                "UTC+02:00"
                ],
                "continents": [
                "Europe"
                ],
                "flags": [
                "https://flagcdn.com/ax.svg",
                "https://flagcdn.com/w320/ax.png"
                ]
                },{
                    "name": {
                    "common": "Vietnam",
                    "official": "Socialist Republic of Vietnam",
                    "nativeName": {
                    "vie": {
                    "official": "Cộng hòa xã hội chủ nghĩa Việt Nam",
                    "common": "Việt Nam"
                    }
                    }
                    },
                    "tld": [
                    ".vn"
                    ],
                    "cca2": "VN",
                    "ccn3": "704",
                    "cca3": "VNM",
                    "cioc": "VIE",
                    "independent": true,
                    "status": "officially-assigned",
                    "unMember": true,
                    "currencies": {
                    "VND": {
                    "name": "Vietnamese đồng",
                    "symbol": "₫"
                    }
                    },
                    "idd": {
                    "root": "+8",
                    "suffixes": [
                    "4"
                    ]
                    },
                    "capital": [
                    "Hanoi"
                    ],
                    "altSpellings": [
                    "VN",
                    "Socialist Republic of Vietnam",
                    "Cộng hòa Xã hội chủ nghĩa Việt Nam",
                    "Viet Nam"
                    ],
                    "region": "Asia",
                    "subregion": "South-Eastern Asia",
                    "languages": {
                    "vie": "Vietnamese"
                    },
                    "translations": {
                    "ara": {
                    "official": "جمهورية فيتنام الاشتراكية",
                    "common": "فيتنام"
                    },
                    "bre": {
                    "official": "Republik Sokialour Viêt Nam",
                    "common": "Viêt Nam"
                    },
                    "ces": {
                    "official": "Vietnamská socialistická republika",
                    "common": "Vietnam"
                    },
                    "cym": {
                    "official": "Socialist Republic of Vietnam",
                    "common": "Vietnam"
                    },
                    "deu": {
                    "official": "Sozialistische Republik Vietnam",
                    "common": "Vietnam"
                    },
                    "est": {
                    "official": "Vietnami Sotsialistlik Vabariik",
                    "common": "Vietnam"
                    },
                    "fin": {
                    "official": "Vietnamin sosialistinen tasavalta",
                    "common": "Vietnam"
                    },
                    "fra": {
                    "official": "République socialiste du Viêt Nam",
                    "common": "Viêt Nam"
                    },
                    "hrv": {
                    "official": "Socijalistička Republika Vijetnam",
                    "common": "Vijetnam"
                    },
                    "hun": {
                    "official": "Vietnámi Szocialista Köztársaság",
                    "common": "Vietnám"
                    },
                    "ita": {
                    "official": "Repubblica socialista del Vietnam",
                    "common": "Vietnam"
                    },
                    "jpn": {
                    "official": "ベトナム社会主義共和国",
                    "common": "ベトナム"
                    },
                    "kor": {
                    "official": "베트남 사회주의 공화국",
                    "common": "베트남"
                    },
                    "nld": {
                    "official": "Socialistische Republiek Vietnam",
                    "common": "Vietnam"
                    },
                    "per": {
                    "official": "جمهوری سوسیالیستی ویتنام",
                    "common": "ویتنام"
                    },
                    "pol": {
                    "official": "Socjalistyczna Republika Wietnamu",
                    "common": "Wietnam"
                    },
                    "por": {
                    "official": "República Socialista do Vietname",
                    "common": "Vietname"
                    },
                    "rus": {
                    "official": "Социалистическая Республика Вьетнам",
                    "common": "Вьетнам"
                    },
                    "slk": {
                    "official": "Vietnamská socialistická republika",
                    "common": "Vietnam"
                    },
                    "spa": {
                    "official": "República Socialista de Vietnam",
                    "common": "Vietnam"
                    },
                    "swe": {
                    "official": "Socialistiska republiken Vietnam",
                    "common": "Vietnam"
                    },
                    "urd": {
                    "official": "اشتراکی جمہوریہ ویتنام",
                    "common": "ویتنام"
                    },
                    "zho": {
                    "official": "越南社会主义共和国",
                    "common": "越南"
                    }
                    },
                    "latlng": [
                    16.16666666,
                    107.83333333
                    ],
                    "landlocked": false,
                    "borders": [
                    "KHM",
                    "CHN",
                    "LAO"
                    ],
                    "area": 331212,
                    "demonyms": {
                    "eng": {
                    "f": "Vietnamese",
                    "m": "Vietnamese"
                    },
                    "fra": {
                    "f": "Vietnamienne",
                    "m": "Vietnamien"
                    }
                    },
                    "flag": "🇻🇳",
                    "maps": {
                    "googleMaps": "https://goo.gl/maps/PCpVt9WzdJ9A9nEZ9",
                    "openStreetMaps": "https://www.openstreetmap.org/relation/49915"
                    },
                    "population": 97338583,
                    "gini": {
                    "2018": 35.7
                    },
                    "fifa": "VIE",
                    "car": {
                    "signs": [
                    "VN"
                    ],
                    "side": "right"
                    },
                    "timezones": [
                    "UTC+07:00"
                    ],
                    "continents": [
                    "Asia"
                    ],
                    "flags": [
                    "https://flagcdn.com/vn.svg",
                    "https://flagcdn.com/w320/vn.png"
                    ]
                    },{
                        "name": {
                        "common": "Antigua and Barbuda",
                        "official": "Antigua and Barbuda",
                        "nativeName": {
                        "eng": {
                        "official": "Antigua and Barbuda",
                        "common": "Antigua and Barbuda"
                        }
                        }
                        },
                        "tld": [
                        ".ag"
                        ],
                        "cca2": "AG",
                        "ccn3": "028",
                        "cca3": "ATG",
                        "cioc": "ANT",
                        "independent": true,
                        "status": "officially-assigned",
                        "unMember": true,
                        "currencies": {
                        "XCD": {
                        "name": "Eastern Caribbean dollar",
                        "symbol": "$"
                        }
                        },
                        "idd": {
                        "root": "+1",
                        "suffixes": [
                        "268"
                        ]
                        },
                        "capital": [
                        "Saint John's"
                        ],
                        "altSpellings": [
                        "AG"
                        ],
                        "region": "Americas",
                        "subregion": "Caribbean",
                        "languages": {
                        "eng": "English"
                        },
                        "translations": {
                        "ara": {
                        "official": "أنتيغوا وباربودا",
                        "common": "أنتيغوا وباربودا"
                        },
                        "bre": {
                        "official": "Antigua ha Barbuda",
                        "common": "Antigua ha Barbuda"
                        },
                        "ces": {
                        "official": "Antigua a Barbuda",
                        "common": "Antigua a Barbuda"
                        },
                        "cym": {
                        "official": "Antigwa a Barbiwda",
                        "common": "Antigwa a Barbiwda"
                        },
                        "deu": {
                        "official": "Antigua und Barbuda",
                        "common": "Antigua und Barbuda"
                        },
                        "est": {
                        "official": "Antigua ja Barbuda",
                        "common": "Antigua ja Barbuda"
                        },
                        "fin": {
                        "official": "Antigua ja Barbuda",
                        "common": "Antigua ja Barbuda"
                        },
                        "fra": {
                        "official": "Antigua-et-Barbuda",
                        "common": "Antigua-et-Barbuda"
                        },
                        "hrv": {
                        "official": "Antigva i Barbuda",
                        "common": "Antigva i Barbuda"
                        },
                        "hun": {
                        "official": "Antigua és Barbuda",
                        "common": "Antigua és Barbuda"
                        },
                        "ita": {
                        "official": "Antigua e Barbuda",
                        "common": "Antigua e Barbuda"
                        },
                        "jpn": {
                        "official": "アンチグアバーブーダ",
                        "common": "アンティグア・バーブーダ"
                        },
                        "kor": {
                        "official": "앤티가 바부다",
                        "common": "앤티가 바부다"
                        },
                        "nld": {
                        "official": "Antigua en Barbuda",
                        "common": "Antigua en Barbuda"
                        },
                        "per": {
                        "official": "آنتیگوا و باربودا",
                        "common": "آنتیگوا و باربودا"
                        },
                        "pol": {
                        "official": "Antigua i Barbuda",
                        "common": "Antigua i Barbuda"
                        },
                        "por": {
                        "official": "Antigua e Barbuda",
                        "common": "Antígua e Barbuda"
                        },
                        "rus": {
                        "official": "Антигуа и Барбуда",
                        "common": "Антигуа и Барбуда"
                        },
                        "slk": {
                        "official": "Antigua a Barbuda",
                        "common": "Antigua a Barbuda"
                        },
                        "spa": {
                        "official": "Antigua y Barbuda",
                        "common": "Antigua y Barbuda"
                        },
                        "swe": {
                        "official": "Antigua och Barbuda",
                        "common": "Antigua och Barbuda"
                        },
                        "urd": {
                        "official": "اینٹیگوا و باربوڈا",
                        "common": "اینٹیگوا و باربوڈا"
                        },
                        "zho": {
                        "official": "安提瓜和巴布达",
                        "common": "安提瓜和巴布达"
                        }
                        },
                        "latlng": [
                        17.05,
                        -61.8
                        ],
                        "landlocked": false,
                        "area": 442,
                        "demonyms": {
                        "eng": {
                        "f": "Antiguan, Barbudan",
                        "m": "Antiguan, Barbudan"
                        },
                        "fra": {
                        "f": "Antiguaise et barbudienne",
                        "m": "Antiguaise et barbudien"
                        }
                        },
                        "flag": "🇦🇬",
                        "maps": {
                        "googleMaps": "https://goo.gl/maps/fnye4wGJ1RzC9jpX9",
                        "openStreetMaps": "https://www.openstreetmap.org/relation/536900"
                        },
                        "population": 97928,
                        "fifa": "ATG",
                        "car": {
                        "signs": [
                        "AG"
                        ],
                        "side": "left"
                        },
                        "timezones": [
                        "UTC-04:00"
                        ],
                        "continents": [
                        "North America"
                        ],
                        "flags": [
                        "https://flagcdn.com/ag.svg",
                        "https://flagcdn.com/w320/ag.png"
                        ]
                        },
        ]

        */