$(function () {
    var oriAct = $('div.header ul li.active');
    $('div.header ul li').hover(function () {
        $(this).siblings().removeClass('active')
            .end().addClass('active');
    }).mouseleave(function () {
        $(this).removeClass('active');
        oriAct.addClass('active');
    })

    function repeat(level) {
        var str = '';

        level = level == 1 ? 5 :
            level == 2 ? 3 : 1;

        for (var i = 0; i < level; i++) {
            str += '<i class="fa fa-star" style="color:red;"></i>';
        }

        return str;
    }

    if ($('body.index')[0]) {
        var Carousel = new $.Carousel({
            root: '#section1',
            auto: true
        });

        var options = {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.'
        };
       
    }

    if ($('body.events')[0]) {
        $('#event-section1, #event-section2').height($(window).height());

      
        $.when($.ajax({url: '#'}), $.ajax({url: '/mobileTopVirus'}), $.ajax({url: '#'}))
            .then(function (data1, data2, data3) {
                var _data_10, min1, max1, min2, max2, min3, max3 = 0;
                var country = [
                    {
                        "codec": "-",
                        "name": "-"
                    },
                    {
                        "codec": "AU",
                        "name": "Australia"
                    },
                    {
                        "codec": "CN",
                        "name": "China"
                    },
                    {
                        "codec": "JP",
                        "name": "Japan"
                    },
                    {
                        "codec": "TH",
                        "name": "Thailand"
                    },
                    {
                        "codec": "IN",
                        "name": "India"
                    },
                    {
                        "codec": "MY",
                        "name": "Malaysia"
                    },
                    {
                        "codec": "KR",
                        "name": "Korea, Republic of"
                    },
                    {
                        "codec": "SG",
                        "name": "Singapore"
                    },
                    {
                        "codec": "TW",
                        "name": "Taiwan, Province of China"
                    },
                    {
                        "codec": "HK",
                        "name": "Hong Kong"
                    },
                    {
                        "codec": "PH",
                        "name": "Philippines"
                    },
                    {
                        "codec": "VN",
                        "name": "Viet Nam"
                    },
                    {
                        "codec": "NO",
                        "name": "Norway"
                    },
                    {
                        "codec": "FR",
                        "name": "France"
                    },
                    {
                        "codec": "GB",
                        "name": "United Kingdom"
                    },
                    {
                        "codec": "NL",
                        "name": "Netherlands"
                    },
                    {
                        "codec": "DE",
                        "name": "Germany"
                    },
                    {
                        "codec": "US",
                        "name": "United States"
                    },
                    {
                        "codec": "ES",
                        "name": "Spain"
                    },
                    {
                        "codec": "DK",
                        "name": "Denmark"
                    },
                    {
                        "codec": "SE",
                        "name": "Sweden"
                    },
                    {
                        "codec": "BE",
                        "name": "Belgium"
                    },
                    {
                        "codec": "FI",
                        "name": "Finland"
                    },
                    {
                        "codec": "RU",
                        "name": "Russian Federation"
                    },
                    {
                        "codec": "IT",
                        "name": "Italy"
                    },
                    {
                        "codec": "GR",
                        "name": "Greece"
                    },
                    {
                        "codec": "AE",
                        "name": "United Arab Emirates"
                    },
                    {
                        "codec": "AT",
                        "name": "Austria"
                    },
                    {
                        "codec": "ZA",
                        "name": "South Africa"
                    },
                    {
                        "codec": "IL",
                        "name": "Israel"
                    },
                    {
                        "codec": "QA",
                        "name": "Qatar"
                    },
                    {
                        "codec": "KZ",
                        "name": "Kazakhstan"
                    },
                    {
                        "codec": "PT",
                        "name": "Portugal"
                    },
                    {
                        "codec": "SA",
                        "name": "Saudi Arabia"
                    },
                    {
                        "codec": "LV",
                        "name": "Latvia"
                    },
                    {
                        "codec": "IR",
                        "name": "Iran, Islamic Republic of"
                    },
                    {
                        "codec": "CA",
                        "name": "Canada"
                    },
                    {
                        "codec": "MX",
                        "name": "Mexico"
                    },
                    {
                        "codec": "SY",
                        "name": "Syrian Arab Republic"
                    },
                    {
                        "codec": "UA",
                        "name": "Ukraine"
                    },
                    {
                        "codec": "KW",
                        "name": "Kuwait"
                    },
                    {
                        "codec": "BH",
                        "name": "Bahrain"
                    },
                    {
                        "codec": "LB",
                        "name": "Lebanon"
                    },
                    {
                        "codec": "OM",
                        "name": "Oman"
                    },
                    {
                        "codec": "JO",
                        "name": "Jordan"
                    },
                    {
                        "codec": "CZ",
                        "name": "Czech Republic"
                    },
                    {
                        "codec": "CH",
                        "name": "Switzerland"
                    },
                    {
                        "codec": "IQ",
                        "name": "Iraq"
                    },
                    {
                        "codec": "TR",
                        "name": "Turkey"
                    },
                    {
                        "codec": "RO",
                        "name": "Romania"
                    },
                    {
                        "codec": "GE",
                        "name": "Georgia"
                    },
                    {
                        "codec": "AZ",
                        "name": "Azerbaijan"
                    },
                    {
                        "codec": "ZM",
                        "name": "Zambia"
                    },
                    {
                        "codec": "ZW",
                        "name": "Zimbabwe"
                    },
                    {
                        "codec": "PS",
                        "name": "Palestine, State of"
                    },
                    {
                        "codec": "LT",
                        "name": "Lithuania"
                    },
                    {
                        "codec": "SK",
                        "name": "Slovakia"
                    },
                    {
                        "codec": "RS",
                        "name": "Serbia"
                    },
                    {
                        "codec": "HU",
                        "name": "Hungary"
                    },
                    {
                        "codec": "IS",
                        "name": "Iceland"
                    },
                    {
                        "codec": "BG",
                        "name": "Bulgaria"
                    },
                    {
                        "codec": "SI",
                        "name": "Slovenia"
                    },
                    {
                        "codec": "MD",
                        "name": "Moldova, Republic of"
                    },
                    {
                        "codec": "MK",
                        "name": "Macedonia, The Former Yugoslav Republic of"
                    },
                    {
                        "codec": "AO",
                        "name": "Angola"
                    },
                    {
                        "codec": "LI",
                        "name": "Liechtenstein"
                    },
                    {
                        "codec": "JE",
                        "name": "Jersey"
                    },
                    {
                        "codec": "HR",
                        "name": "Croatia"
                    },
                    {
                        "codec": "PL",
                        "name": "Poland"
                    },
                    {
                        "codec": "BA",
                        "name": "Bosnia and Herzegovina"
                    },
                    {
                        "codec": "EE",
                        "name": "Estonia"
                    },
                    {
                        "codec": "KG",
                        "name": "Kyrgyzstan"
                    },
                    {
                        "codec": "IE",
                        "name": "Ireland"
                    },
                    {
                        "codec": "IM",
                        "name": "Isle of Man"
                    },
                    {
                        "codec": "MT",
                        "name": "Malta"
                    },
                    {
                        "codec": "GI",
                        "name": "Gibraltar"
                    },
                    {
                        "codec": "LY",
                        "name": "Libya"
                    },
                    {
                        "codec": "LU",
                        "name": "Luxembourg"
                    },
                    {
                        "codec": "AM",
                        "name": "Armenia"
                    },
                    {
                        "codec": "VG",
                        "name": "Virgin Islands, British"
                    },
                    {
                        "codec": "YE",
                        "name": "Yemen"
                    },
                    {
                        "codec": "BY",
                        "name": "Belarus"
                    },
                    {
                        "codec": "RE",
                        "name": "Reunion"
                    },
                    {
                        "codec": "GP",
                        "name": "Guadeloupe"
                    },
                    {
                        "codec": "CY",
                        "name": "Cyprus"
                    },
                    {
                        "codec": "MQ",
                        "name": "Martinique"
                    },
                    {
                        "codec": "GY",
                        "name": "Guyana"
                    },
                    {
                        "codec": "PR",
                        "name": "Puerto Rico"
                    },
                    {
                        "codec": "AS",
                        "name": "American Samoa"
                    },
                    {
                        "codec": "GU",
                        "name": "Guam"
                    },
                    {
                        "codec": "MP",
                        "name": "Northern Mariana Islands"
                    },
                    {
                        "codec": "DO",
                        "name": "Dominican Republic"
                    },
                    {
                        "codec": "VI",
                        "name": "Virgin Islands, U.S."
                    },
                    {
                        "codec": "VE",
                        "name": "Venezuela, Bolivarian Republic of"
                    },
                    {
                        "codec": "BR",
                        "name": "Brazil"
                    },
                    {
                        "codec": "NZ",
                        "name": "New Zealand"
                    },
                    {
                        "codec": "BD",
                        "name": "Bangladesh"
                    },
                    {
                        "codec": "PK",
                        "name": "Pakistan"
                    },
                    {
                        "codec": "ID",
                        "name": "Indonesia"
                    },
                    {
                        "codec": "NP",
                        "name": "Nepal"
                    },
                    {
                        "codec": "PG",
                        "name": "Papua New Guinea"
                    },
                    {
                        "codec": "CL",
                        "name": "Chile"
                    },
                    {
                        "codec": "CO",
                        "name": "Colombia"
                    },
                    {
                        "codec": "AR",
                        "name": "Argentina"
                    },
                    {
                        "codec": "MO",
                        "name": "Macao"
                    },
                    {
                        "codec": "LK",
                        "name": "Sri Lanka"
                    },
                    {
                        "codec": "EC",
                        "name": "Ecuador"
                    },
                    {
                        "codec": "CR",
                        "name": "Costa Rica"
                    },
                    {
                        "codec": "KY",
                        "name": "Cayman Islands"
                    },
                    {
                        "codec": "UY",
                        "name": "Uruguay"
                    },
                    {
                        "codec": "EG",
                        "name": "Egypt"
                    },
                    {
                        "codec": "BB",
                        "name": "Barbados"
                    },
                    {
                        "codec": "BS",
                        "name": "Bahamas"
                    },
                    {
                        "codec": "LC",
                        "name": "Saint Lucia"
                    },
                    {
                        "codec": "DM",
                        "name": "Dominica"
                    },
                    {
                        "codec": "KH",
                        "name": "Cambodia"
                    },
                    {
                        "codec": "TK",
                        "name": "Tokelau"
                    },
                    {
                        "codec": "MV",
                        "name": "Maldives"
                    },
                    {
                        "codec": "AF",
                        "name": "Afghanistan"
                    },
                    {
                        "codec": "NC",
                        "name": "New Caledonia"
                    },
                    {
                        "codec": "FJ",
                        "name": "Fiji"
                    },
                    {
                        "codec": "MN",
                        "name": "Mongolia"
                    },
                    {
                        "codec": "WF",
                        "name": "Wallis and Futuna"
                    },
                    {
                        "codec": "AL",
                        "name": "Albania"
                    },
                    {
                        "codec": "UZ",
                        "name": "Uzbekistan"
                    },
                    {
                        "codec": "BL",
                        "name": "Saint Barthelemy"
                    },
                    {
                        "codec": "ME",
                        "name": "Montenegro"
                    },
                    {
                        "codec": "SM",
                        "name": "San Marino"
                    },
                    {
                        "codec": "CD",
                        "name": "Congo, The Democratic Republic of The"
                    },
                    {
                        "codec": "GG",
                        "name": "Guernsey"
                    },
                    {
                        "codec": "TJ",
                        "name": "Tajikistan"
                    },
                    {
                        "codec": "MM",
                        "name": "Myanmar"
                    },
                    {
                        "codec": "BM",
                        "name": "Bermuda"
                    },
                    {
                        "codec": "VC",
                        "name": "Saint Vincent and The Grenadines"
                    },
                    {
                        "codec": "NG",
                        "name": "Nigeria"
                    },
                    {
                        "codec": "BO",
                        "name": "Bolivia, Plurinational State of"
                    },
                    {
                        "codec": "LR",
                        "name": "Liberia"
                    },
                    {
                        "codec": "KE",
                        "name": "Kenya"
                    },
                    {
                        "codec": "GH",
                        "name": "Ghana"
                    },
                    {
                        "codec": "TZ",
                        "name": "Tanzania, United Republic of"
                    },
                    {
                        "codec": "BW",
                        "name": "Botswana"
                    },
                    {
                        "codec": "MZ",
                        "name": "Mozambique"
                    },
                    {
                        "codec": "MG",
                        "name": "Madagascar"
                    },
                    {
                        "codec": "NA",
                        "name": "Namibia"
                    },
                    {
                        "codec": "CI",
                        "name": "Cote D'ivoire"
                    },
                    {
                        "codec": "SD",
                        "name": "Sudan"
                    },
                    {
                        "codec": "CM",
                        "name": "Cameroon"
                    },
                    {
                        "codec": "MW",
                        "name": "Malawi"
                    },
                    {
                        "codec": "MU",
                        "name": "Mauritius"
                    },
                    {
                        "codec": "GA",
                        "name": "Gabon"
                    },
                    {
                        "codec": "ML",
                        "name": "Mali"
                    },
                    {
                        "codec": "BJ",
                        "name": "Benin"
                    },
                    {
                        "codec": "TD",
                        "name": "Chad"
                    },
                    {
                        "codec": "CV",
                        "name": "Cabo Verde"
                    },
                    {
                        "codec": "RW",
                        "name": "Rwanda"
                    },
                    {
                        "codec": "CG",
                        "name": "Congo"
                    },
                    {
                        "codec": "UG",
                        "name": "Uganda"
                    },
                    {
                        "codec": "GM",
                        "name": "Gambia"
                    },
                    {
                        "codec": "LS",
                        "name": "Lesotho"
                    },
                    {
                        "codec": "MA",
                        "name": "Morocco"
                    },
                    {
                        "codec": "DZ",
                        "name": "Algeria"
                    },
                    {
                        "codec": "GN",
                        "name": "Guinea"
                    },
                    {
                        "codec": "SZ",
                        "name": "Swaziland"
                    },
                    {
                        "codec": "BF",
                        "name": "Burkina Faso"
                    },
                    {
                        "codec": "SO",
                        "name": "Somalia"
                    },
                    {
                        "codec": "SL",
                        "name": "Sierra Leone"
                    },
                    {
                        "codec": "NE",
                        "name": "Niger"
                    },
                    {
                        "codec": "CF",
                        "name": "Central African Republic"
                    },
                    {
                        "codec": "TG",
                        "name": "Togo"
                    },
                    {
                        "codec": "SS",
                        "name": "South Sudan"
                    },
                    {
                        "codec": "BI",
                        "name": "Burundi"
                    },
                    {
                        "codec": "GQ",
                        "name": "Equatorial Guinea"
                    },
                    {
                        "codec": "SC",
                        "name": "Seychelles"
                    },
                    {
                        "codec": "SN",
                        "name": "Senegal"
                    },
                    {
                        "codec": "MR",
                        "name": "Mauritania"
                    },
                    {
                        "codec": "DJ",
                        "name": "Djibouti"
                    },
                    {
                        "codec": "ET",
                        "name": "Ethiopia"
                    },
                    {
                        "codec": "KM",
                        "name": "Comoros"
                    },
                    {
                        "codec": "IO",
                        "name": "British Indian Ocean Territory"
                    },
                    {
                        "codec": "TN",
                        "name": "Tunisia"
                    },
                    {
                        "codec": "YT",
                        "name": "Mayotte"
                    },
                    {
                        "codec": "LA",
                        "name": "Lao People's Democratic Republic"
                    },
                    {
                        "codec": "BN",
                        "name": "Brunei Darussalam"
                    },
                    {
                        "codec": "NR",
                        "name": "Nauru"
                    },
                    {
                        "codec": "VU",
                        "name": "Vanuatu"
                    },
                    {
                        "codec": "BT",
                        "name": "Bhutan"
                    },
                    {
                        "codec": "WS",
                        "name": "Samoa"
                    },
                    {
                        "codec": "FM",
                        "name": "Micronesia, Federated States of"
                    },
                    {
                        "codec": "PF",
                        "name": "French Polynesia"
                    },
                    {
                        "codec": "TL",
                        "name": "Timor-Leste"
                    },
                    {
                        "codec": "TO",
                        "name": "Tonga"
                    },
                    {
                        "codec": "MC",
                        "name": "Monaco"
                    },
                    {
                        "codec": "GL",
                        "name": "Greenland"
                    },
                    {
                        "codec": "FO",
                        "name": "Faroe Islands"
                    },
                    {
                        "codec": "BZ",
                        "name": "Belize"
                    },
                    {
                        "codec": "NU",
                        "name": "Niue"
                    },
                    {
                        "codec": "KI",
                        "name": "Kiribati"
                    },
                    {
                        "codec": "MH",
                        "name": "Marshall Islands"
                    },
                    {
                        "codec": "PW",
                        "name": "Palau"
                    },
                    {
                        "codec": "SB",
                        "name": "Solomon Islands"
                    },
                    {
                        "codec": "TV",
                        "name": "Tuvalu"
                    },
                    {
                        "codec": "KP",
                        "name": "Korea, Democratic People's Republic of"
                    },
                    {
                        "codec": "PE",
                        "name": "Peru"
                    },
                    {
                        "codec": "PY",
                        "name": "Paraguay"
                    },
                    {
                        "codec": "GF",
                        "name": "French Guiana"
                    },
                    {
                        "codec": "SR",
                        "name": "Suriname"
                    },
                    {
                        "codec": "GT",
                        "name": "Guatemala"
                    },
                    {
                        "codec": "HN",
                        "name": "Honduras"
                    },
                    {
                        "codec": "NI",
                        "name": "Nicaragua"
                    },
                    {
                        "codec": "SV",
                        "name": "El Salvador"
                    },
                    {
                        "codec": "PA",
                        "name": "Panama"
                    },
                    {
                        "codec": "VA",
                        "name": "Holy See"
                    },
                    {
                        "codec": "AD",
                        "name": "Andorra"
                    },
                    {
                        "codec": "ER",
                        "name": "Eritrea"
                    },
                    {
                        "codec": "GW",
                        "name": "Guinea-Bissau"
                    },
                    {
                        "codec": "ST",
                        "name": "Sao Tome and Principe"
                    },
                    {
                        "codec": "TM",
                        "name": "Turkmenistan"
                    },
                    {
                        "codec": "AG",
                        "name": "Antigua and Barbuda"
                    },
                    {
                        "codec": "CU",
                        "name": "Cuba"
                    },
                    {
                        "codec": "GD",
                        "name": "Grenada"
                    },
                    {
                        "codec": "HT",
                        "name": "Haiti"
                    },
                    {
                        "codec": "JM",
                        "name": "Jamaica"
                    },
                    {
                        "codec": "KN",
                        "name": "Saint Kitts and Nevis"
                    },
                    {
                        "codec": "TT",
                        "name": "Trinidad and Tobago"
                    },
                    {
                        "codec": "FK",
                        "name": "Falkland Islands (Malvinas)"
                    },
                    {
                        "codec": "TC",
                        "name": "Turks and Caicos Islands"
                    },
                    {
                        "codec": "CW",
                        "name": "Curacao"
                    },
                    {
                        "codec": "AI",
                        "name": "Anguilla"
                    },
                    {
                        "codec": "UM",
                        "name": "United States Minor Outlying Islands"
                    },
                    {
                        "codec": "AW",
                        "name": "Aruba"
                    },
                    {
                        "codec": "PM",
                        "name": "Saint Pierre and Miquelon"
                    },
                    {
                        "codec": "SX",
                        "name": "Sint Maarten (Dutch Part)"
                    },
                    {
                        "codec": "MF",
                        "name": "Saint Martin (French Part)"
                    },
                    {
                        "codec": "AX",
                        "name": "Aland Islands"
                    },
                    {
                        "codec": "NF",
                        "name": "Norfolk Island"
                    },
                    {
                        "codec": "AQ",
                        "name": "Antarctica"
                    },
                    {
                        "codec": "BQ",
                        "name": "Bonaire, Sint Eustatius and Saba"
                    },
                    {
                        "codec": "GS",
                        "name": "South Georgia and The South Sandwich Islands"
                    },
                    {
                        "codec": "MS",
                        "name": "Montserrat"
                    },
                    {
                        "codec": "CK",
                        "name": "Cook Islands"
                    }
                ];
                var capital = {
                    'Afghanistan': [69.11, 34.28],
                    'Angola': [13.15, -8.5],
                    'Albania': [19.49, 41.18],
                    'United Arab Emirates': [54.22, 24.28],
                    'Argentina': [-60, -36.3],
                    'Armenia': [44.31, 40.1],
                    'Australia': [149.08, -35.15],
                    'Austria': [16.22, 48.12],
                    'Azerbaijan': [49.56, 40.29],
                    'Burundi': [29.18, -3.16],
                    'Belgium': [4.21, 50.51],
                    'Benin': [2.42, 6.23],
                    'Burkina Faso': [-1.3, 12.15],
                    'Bangladesh': [90.26, 23.43],
                    'Bulgaria': [23.2, 42.45],
                    'Bahamas': [-77.2, 25.05],
                    'Bosnia and Herzegovina': [18.26, 43.52],
                    'Belarus': [27.3, 53.52],
                    'Belize': [-88.3, 17.18],
                    'Bolivia, Plurinational State of': [-68.1, -16.2],
                    'Brazil': [-47.55, -15.47],
                    'Brunei Darussalam': [115, 4.52],
                    'Bhutan': [89.45, 27.31],
                    'Botswana': [25.57, -24.45],
                    'Central African Republic': [18.35, 4.23],
                    'Canada': [-75.42, 45.27],
                    'Switzerland': [7.28, 46.57],
                    'Chile': [-70.4, -33.24],
                    'China': [116.2, 39.55],
                    'Japan': [139.46, 35.42],
                    'Singapore': [103.48, 1.29],
                    'Cameroon': [11.35, 3.5],
                    'Congo': [15.15, -4.2],
                    'Colombia': [-74, 4.34],
                    'Costa Rica': [-84.02, 9.55],
                    'Cuba': [-82.22, 23.08],
                    'Cyprus': [33.25, 35.1],
                    'Czech Republic': [14.22, 50.05],
                    'Germany': [13.25, 52.3],
                    'Djibouti': [42.2, 11.08],
                    'Denmark': [12.34, 55.41],
                    'Algeria': [3.08, 36.42],
                    'Ecuador': [-78.35, -0.15],
                    'Egypt': [31.14, 30.01],
                    'Eritrea': [38.55, 15.19],
                    'Spain': [-3.45, 40.25],
                    'Estonia': [24.48, 59.22],
                    'Ethiopia': [38.42, 9.02],
                    'Finland': [25.03, 60.15],
                    'Fiji': [178.3, -18.06],
                    'Falkland Islands (Malvinas)': [-59.51, -51.4],
                    'France': [2.2, 48.5],
                    'Gabon': [9.26, 0.25],
                    'United Kingdom': [-0.05, 51.36],
                    'Georgia': [44.5, 41.43],
                    'Ghana': [-0.06, 5.35],
                    'Guinea': [-13.49, 9.29],
                    'Gambia': [-16.4, 13.28],
                    'Guinea Bissau': [-15.45, 11.45],
                    'Equatorial Guinea': [8.5, 3.45],
                    'Greece': [23.46, 37.58],
                    'Greenland': [-51.35, 64.1],
                    'Guatemala': [-90.22, 14.4],
                    'French Guiana': [-52.18, 5.05],
                    'Guyana': [-58.12, 6.5],
                    'Honduras': [-87.14, 14.05],
                    'Croatia': [15.58, 45.5],
                    'Haiti': [-72.2, 18.4],
                    'Hungary': [19.05, 47.29],
                    'Indonesia': [106.49, -6.09],
                    'India': [77.13, 28.37],
                    'Ireland': [-6.15, 53.21],
                    'Iran, Islamic Republic of': [51.3, 35.44],
                    'Iraq': [44.3, 33.2],
                    'Iceland': [-21.57, 64.1],
                    'Israel': [35.12, 31.47],
                    'Italy': [12.29, 41.54],
                    'Jamaica': [-76.5, 18],
                    'Jordan': [35.52, 31.57],
                    'Kazakhstan': [71.3, 51.1],
                    'Kenya': [36.48, -1.17],
                    'Kyrgyzstan': [74.46, 42.54],
                    'Cambodia': [104.55, 11.33],
                    'Korea, Republic of': [126.58, 37.31],
                    'Kuwait': [48, 29.3],
                    'Lebanon': [35.31, 33.53],
                    'Liberia': [-10.47, 6.18],
                    'Libya': [13.07, 32.49],
                    'Lesotho': [27.3, -29.18],
                    'Lithuania': [25.19, 54.38],
                    'Luxembourg': [6.09, 49.37],
                    'Latvia': [24.08, 56.53],
                    'Moldova': [28.5, 47.02],
                    'Madagascar': [47.31, -18.55],
                    'Mexico': [-99.1, 19.2],
                    'Macedonia': [21.26, 42.01],
                    'Mali': [-7.55, 12.34],
                    'Myanmar': [96.2, 16.45],
                    'Mozambique': [32.32, -25.58],
                    'Mauritania': [57.3, -20.1],
                    'Malawi': [33.48, -14],
                    'Malaysia': [101.41, 3.09],
                    'Namibia': [17.04, -22.35],
                    'New Caledonia': [166.3, -22.17],
                    'Niger': [2.06, 13.27],
                    'Nigeria': [7.32, 9.05],
                    'Nicaragua': [-86.2, 12.06],
                    'Netherlands': [4.54, 52.23],
                    'Norway': [10.45, 59.55],
                    'Nepal': [85.2, 27.45],
                    'New Zealand': [174.46, -41.19],
                    'Oman': [58.36, 23.37],
                    'Pakistan': [73.1, 33.4],
                    'Panama': [-79.25, 9],
                    'Peru': [-77, -12],
                    'Philippines': [121.03, 14.4],
                    'Papua New Guinea': [147.08, -9.24],
                    'Poland': [21, 52.13],
                    'Puerto Rico': [-66.07, 18.28],
                    'Portugal': [-9.1, 38.42],
                    'Paraguay': [-57.3, -25.1],
                    'Qatar': [51.35, 25.15],
                    'Romania': [26.1, 44.27],
                    'Russian Federation': [37.35, 55.45],
                    'Saudi Arabia': [46.42, 24.41],
                    'Sudan': [32.35, 15.31],
                    'Senegal': [-17.29, 14.34],
                    'Solomon Islands': [159.57, -9.27],
                    'Sierra Leone': [-13.17, 8.3],
                    'El Salvador': [-89.1, 13.4],
                    'Somalia': [45.25, 2.02],
                    'Suriname': [-55.1, 5.5],
                    'Slovakia': [17.07, 48.1],
                    'Slovenia': [14.33, 46.04],
                    'Sweden': [18.03, 59.2],
                    'Swaziland': [31.06, -26.18],
                    'Syrian Arab Republic': [36.18, 33.3],
                    'Chad': [14.59, 12.1],
                    'Togo': [1.2, 6.09],
                    'Thailand': [100.35, 13.45],
                    'Tajikistan': [68.48, 38.33],
                    'Turkmenistan': [57.5, 38],
                    'East Timor': [125.34, -8.29],
                    'Tunisia': [10.11, 36.5],
                    'Turkey': [32.54, 39.57],
                    'United Republic of Tanzania': [35.45, -6.08],
                    'Uganda': [32.3, 0.2],
                    'Ukraine': [30.28, 50.3],
                    'Uruguay': [-56.11, -34.5],
                    'United States': [-77.02, 39.91],
                    'Uzbekistan': [69.1, 41.2],
                    'Venezuela, Bolivarian Republic of': [-66.55, 10.3],
                    'Vanuatu': [168.18, -17.45],
                    'South Africa': [28.12, -25.44],
                    'Zambia': [28.16, -15.28],
                    'Zimbabwe': [31.02, -17.43],
                    'Taiwan, Province of China': [121.50, 25.05],
                    'Hong Kong': [114.08, 22.17]
                };
                var convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = capital[data[i].name];

                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value / 10, data[i].value, data[i].name)
                            });
                        }
                    }

                    return res;
                };
                var option = {
                    baseOption: {
                        backgroundColor: '#323C5C',
                        animationDurationUpdate: 600,
                        animationEasingUpdate: 'quinticInOut',
                        title: {
                            text: 'Globe Security Events',
                            left: 'center',
                            top: 110,
                            textStyle: {
                                fontSize: 24,
                                fontWeight: 400,
                                color: '#ffffff'
                            }
                        },
                        tooltip: {
                            formatter: function (params) {
                                if ('value' in params.data) {
                                    return params.data.value[4] + ': ' + params.data.value[3];
                                }
                            }
                        },
                        timeline: {
                            show: false,
                            axisType: 'category',
                            autoPlay: true,
                            inverse: true,
                            playInterval: 3000,
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
                        },
                        geo: {
                            map: 'world',
                            roam: false,
                            zoom: 1,
                            scaleLimit: {min: 1, max: 1},
                            label: {
                                emphasis: {
                                    show: true,
                                    textstyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    areaColor: '#4b5984',
                                    borderColor: '#323C5C',
                                    color: '#323C5C',
                                    textstyle: {
                                        color: '#ffffff'
                                    }
                                },
                                emphasis: {
                                    areaColor: '#ffffff',
                                    color: '#323C5C',
                                    textstyle: {
                                        color: '#323c5c'
                                    }
                                }
                            },
                            left: 150,
                            top: 200,
                            right: 200,
                            bottom: 180
                        },
                        series: [
                            {
                                id: 'map',
                                type: 'effectScatter',
                                coordinateSystem: 'geo',
                                showEffectOn: 'render',
                                rippleEffect: {
                                    scale: 6,
                                    brushType: 'fill'
                                },
                                hoverAnimation: true,
                                zlevel: 1
                            }
                        ]
                    },
                    options: []
                };

                try {
                    data1 = JSON.parse(data1[0])['Data'];
                    data2 = JSON.parse(data2[0])['Data'];
                    data3 = JSON.parse(data3[0])['Data'];
                }
                catch (err) {
                    console.log('json parse wrong');
                }

                data1 = (function (data1, country, capital) {
                    var tmp = [];

                    $.each(country, function (_, item) {
                        if (capital[item.name] && data1[item.codec.toLowerCase()]) {
                            tmp.push({
                                name: item.name,
                                value: data1[item.codec.toLowerCase()]
                            });
                        }
                    });

                    return tmp;
                })(data1, country, capital);
                data1 = ($.extend(true, [], data1).sort(function (a, b) {
                    return b.value - a.value;
                }));

                _data_10 = data1.slice(0, 10).reverse();
                min1 = data1[data1.length - 1].value;
                max1 = data1[0].value;

                var _tmp = [];
                $.each(data2, function (i, item) {
                    _tmp.push({name: i, value: item});
                });

                data2 = _.sortBy(_tmp, 'value');
                var data2_keys = [], data2_values = [];
                $.each(data2, function (i, item) {
                    data2_keys.push(item.name);
                    data2_values.push(item.value);
                });

                min2 = data2_values[0];
                max2 = data2_values[9];

                var _d3_k = [], _d3_v = [];
                for (var i_d3 in data3) {
                    for (var _i_d3 in data3[i_d3]) {
                        _d3_k.push(_i_d3);
                        _d3_v.push(data3[i_d3][_i_d3]);

                        if (data3[i_d3][_i_d3] > max3) {
                            max3 = data3[i_d3][_i_d3];
                        }
                    }
                }

                for (var i = 0; i < 20; i++) {
                    var _randomNumber = _.random(Math.floor(data1.length / 1.8), Math.floor(data1.length / 1.5));
                    var _sampleData = _.uniq(_.union(_.sample(data1, _randomNumber), _data_10));

                    option.options.push({
                        visualMap: {
                            seriesIndex: 0,
                            show: false,
                            min: 0,
                            max: max1,
                            dimension: 3,
                            inRange: {
                                color: ['#f06c2b', '#f44336']
                            }
                        },
                        series: [
                            {
                                id: 'map',
                                name: 'virus respect',
                                data: convertData($.extend(true, [], _sampleData)),
                                symbolSize: function (val) {
                                    Math.log2 = Math.log2 || function (x) {
                                            return Math.log(x) * Math.LOG2E;
                                        };

                                    return Math.log2(val[2]);
                                }
                            }
                        ]
                    });
                }


                var _option = {
                    backgroundColor: '#323C5C',
                    title: [
                        {
                            text: 'Today\’s top 10 affected areas',
                            left: '1%',
                            top: '5%',
                            textStyle: {
                                fontFamily: "HelveticaNeue-Light, sans-serif",
                                fontSize: 18,
                                fontWeight: 200,
                                color: '#ffffff'
                            }
                        },
                        {
                            text: 'Today\'s top 10 viruses',
                            left: '55%',
                            top: '5%',
                            textStyle: {
                                fontFamily: "HelveticaNeue-Light, sans-serif",
                                fontSize: 18,
                                fontWeight: 200,
                                color: '#ffffff'
                            }
                        },
                        {
                            text: 'Trends in security threats',
                            left: '1%',
                            top: '42%',
                            textStyle: {
                                fontFamily: "HelveticaNeue-Light, sans-serif",
                                fontSize: 18,
                                fontWeight: 200,
                                color: '#ffffff'
                            }
                        }
                    ],
                    visualMap: [
                        {
                            seriesIndex: 0,
                            show: false,
                            min: 0,
                            max: max1,
                            dimension: 0,
                            inRange: {
                                color: ['#ff8e00', '#ff0000']
                            }
                        },
                        {
                            seriesIndex: 1,
                            show: false,
                            min: 0,
                            max: max2,
                            dimension: 0,
                            inRange: {
                                color: ['#ff8e00', '#ff0000']
                            }
                        }
                    ],
                    grid: [
                        {
                            left: '0%',
                            right: '55%',
                            top: '10%',
                            bottom: '60%',
                            containLabel: true
                        },
                        {
                            left: '55%',
                            right: '5%',
                            top: '10%',
                            bottom: '60%',
                            containLabel: true
                        },
                        {
                            left: '1%',
                            right: '3%',
                            top: '50%',
                            bottom: '11%',
                            containLabel: true
                        }
                    ],
                    xAxis: [
                        {
                            gridIndex: 0,
                            min: min1,
                            max: max1,
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            }
                        },
                        {
                            gridIndex: 1,
                            min: 0,
                            max: max2,
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            }
                        },
                        {
                            gridIndex: 2,
                            type: 'category',
                            boundaryGap: false,
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: '#ffffff'
                                }
                            },
                            axisLabel: {
                                show: true,
                                margin: 20,
                                textStyle: {
                                    color: '#ffffff'
                                }
                            },
                            splitArea: {
                                show: true,
                                areaStyle: {
                                    color: ['#3c4664', '#47506d']
                                }
                            },
                            data: _d3_k
                        }
                    ],
                    yAxis: [
                        {
                            gridIndex: 0,
                            type: 'category',
                            axisLabel: {
                                show: true,
                                margin: 12,
                                textStyle: {
                                    color: '#ffffff'
                                }
                            },
                            axisLine: {
                                show: false
                            },
                            data: _data_10.map(function (ele) {
                                return ele.name
                            })
                        },
                        {
                            gridIndex: 1,
                            type: 'category',
                            axisLabel: {
                                show: true,
                                margin: 12,
                                textStyle: {
                                    color: '#ffffff'
                                }
                            },
                            axisLine: {
                                show: false
                            },
                            data: data2_keys
                        },
                        {
                            gridIndex: 2,
                            max: ((_max3_tmp = Math.ceil(max3 * 1.2 / Math.pow(10, (max3.toString().length - 2)))) % 2 == 0 ? _max3_tmp : _max3_tmp + 1) * (Math.pow(10, (max3.toString().length - 2))),
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: '#ffffff'
                                }
                            },
                            axisLabel: {
                                show: true,
                                margin: 20,
                                textStyle: {
                                    color: '#ffffff'
                                },
                                formatter: function (value, index) {
                                    return (value / 1000).toFixed(0) + 'K';
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'bar',
                            xAxisIndex: 0,
                            yAxisIndex: 0,
                            tooltip: {
                                show: false
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    offset: [20, 0],
                                    textStyle: {
                                        color: '#ffffff'
                                    },
                                    formatter: function (params) {
                                        return (params.value).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
                                    }
                                }
                            },
                            barWidth: '50%',
                            data: _data_10
                        },
                        {
                            type: 'bar',
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            tooltip: {
                                show: false
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    offset: [20, 0],
                                    textStyle: {
                                        color: '#ffffff'
                                    },
                                    formatter: function (params) {
                                        return (params.value).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
                                    }
                                }
                            },
                            barWidth: '50%',
                            data: data2_values
                        },
                        {
                            type: 'line',
                            name: 'Number of security threats',
                            xAxisIndex: 2,
                            yAxisIndex: 2,
                            smooth: true,
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 1,
                                        color: '#ffffff'
                                    }, {
                                        offset: 0,
                                        color: '#ffffff'
                                    }], false),
                                    opacity: 0.2
                                }
                            },
                            lineStyle: {
                                normal: {
                                    color: '#ffffff',
                                    opacity: 0.5
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#ffffff',
                                    borderColor: '#ffffff',
                                    borderWidth: 3
                                },
                                emphasis: {
                                    color: '#ffffff',
                                    borderColor: '#ffffff',
                                    borderWidth: 5
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    offset: [0, 20],
                                    textStyle: {
                                        color: '#ffffff',
                                        fontSize: 12
                                    },
                                    formatter: function (params) {
                                        return (params.value / 1000).toFixed(1);
                                    }
                                }
                            },
                            data: _d3_v
                        }
                    ]
                };


                var dom = $('<div class="echarts"/>');
                $('#event-section1 .wrape').append(dom);
                var echartsDom = echarts.init(dom[0]);
                echartsDom.setOption(option);


                var _dom = $('<div class="echarts"/>');
                $('#event-section2 .wrape').append(_dom);
                var _echartsDom = echarts.init(_dom[0]);
                _echartsDom.setOption(_option);

                $(window).resize(function () {
                    dom.css({
                        width: dom.parent().width,
                        height: dom.parent().height
                    });
                    echartsDom.resize();

                    _dom.css({
                        width: dom.parent().width,
                        height: dom.parent().height
                    });
                    _echartsDom.resize();
                });
            });
    }

    if ($('body.reports')[0]) {
        var _option, table;

        _option = {
            dom: '<"top">t<".bottom"p>',
            serverSide: true,
            paging: true,
            pageLength: 10,
            pagingType: 'simple_numbers',
            ordering: false,
            searching: false,
            fixedHeader: true,
            autoWidth: false
        };
        _option['columns'] = [
            {
                data: 'MD5',
                title: 'File MD5',
                defaultContent: ''
            },
            {
                data: 'Date',
                title: 'Date',
                defaultContent: ''
            },
            {
                data: 'Risk',
                title: 'Risk',
                defaultContent: '',
                render: function (data, type, row, meta) {
                    if (type == "display" && typeof parseInt(data) === 'number') {
                        return repeat(data);
                    }
                }
            },
            {
                data: null,
                title: 'Reports',
                defaultContent: '',
                render: function (data, type, row, meta) {
                    if (type == "display") {
                        return '<a class="btn" href="/reportsDetail/1/' + row['MD5'] + '">Check</a>';
                    }
                }
            }
        ];
        _option['ajax'] = function (data, callback, settings) {
            // var spinner = new Spinner();
            // spinner.spin(SELF['tableMain']['wrap'][0]);

            $.ajax({
                type: "GET",
                url: '/reportsPage/1/' + (data.start / data.length),
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                dataType: "json",
                success: function (result) {
                    if (!result.Success) {
                        // swal("查询失败", "错误码：" + result.Message, "error");

                        // spinner.spin(false);

                        return;
                    }

                    var returnData = {};
                    returnData.draw = data.draw;
                    returnData.recordsTotal = result.Total;
                    returnData.recordsFiltered = result.Total;
                    returnData.data = result.Data;

                    // spinner.spin(false);

                    callback(returnData);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // swal("查询失败", "可能是网络问题", "error");
                    //
                    // spinner.spin(false);
                }
            });
        };

        table = $('.main table').DataTable(_option);
    }

    if ($('body.reportsDetail')[0]) {
        $.when($.ajax({
            url: '/mobileReportsDetail/' + $('body').data('md5')
        }))
            .then(function (data) {
                var content = '';

                data = JSON.parse(data);

                $('#time').text(data.Date);
                $('#level').html(repeat(data.Level));

                $.each(data.Data, function (r, rValue) {
                    for (var i in rValue) {
                        var item = rValue[i];

                        content += '<div class="content-section" id="' + i + '"><h3>' + i + '</h3>';

                        if ($.isPlainObject(item[0])) {
                            $.each(item, function (_i, _item) {
                                if (i === 'Permissions') {
                                    for (var name in _item) {
                                        content += '<p style="color:' + (_item[name]['Risk'] == 1 ? 'red' : (_item[name]['Risk'] == 2 ? '#f99755' : '')) + '">' + name + '</p>';
                                    }
                                } else {
                                    for (var name in _item) {
                                        if (name === 'IcoData' && _item[name]) {
                                            var img = (_item[name] !== '' && _item[name] !== 'N/A') ? '<img src="' + 'data:image/png;base64,' + _item[name] + '" alt="无图片" style="width:24px;height:24px;"/>' : '';
                                            content += '<p><span class="reports-key">' + name + "</span> : " + img + '</p>';
                                        } else {
                                            if (name === 'FileSize') {
                                                item[name] = item[name] + ' bytes';
                                            }

                                            content += '<p><span class="reports-key">' + name + "</span> : " + _item[name] + '</p>';
                                        }
                                    }
                                }
                            });
                        }
                        else if ($.isArray(item) && typeof item[0] === 'string') {
                            content += '<p>' + item.join('</p><p>') + '</p>';
                        }
                        else if ($.isPlainObject(item)) {
                            for (var name in item) {
                                content += '<p><span class="reports-key">' + name + "</span> : " + item[name] + '</p>';
                            }
                        }
                        else {
                            content += '<p>' + item + '</p>';
                        }

                        content += '</div>';
                    }
                });

                $('div.timeline-content').append(content);

                function setLineHeight() {
                    var _h = $('.timeline ul').height() - $('.timeline ul li.node').first().height() / 2 - $('.timeline ul li.node').last().height() / 2;

                    $('.timeline .line').height(_h);
                }

                function fixTimeline() {
                    var offset = $('.main .container').offset().top;
                    var scrollTop = $(window).scrollTop() + 60;

                    if (offset < scrollTop) {
                        $('.timeline').addClass('fixed');
                    } else {
                        $('.timeline').removeClass('fixed');
                    }
                }

                function setDimensionBar() {
                    var _i = 0, _h = 0;

                    $('.timeline-content .content-section').each(function (index, domEle) {
                        if ($(domEle).offset().top <= $(window).scrollTop()) {
                            _i = index;
                        }
                    });

                    $('.timeline ul li.node').each(function (index, domEle) {
                        if (index <= _i) {
                            _h += $(domEle).height();
                        }
                    });

                    $(".bar").css({
                        "top": _h - $('.timeline ul li.node').eq(_i).height() / 2
                    });

                    // $('.timeline ul li.node').eq(_i).css({"color": "#323C5C"}).siblings().css({"color": "#333333"});
                    $('.timeline ul li.node').eq(_i).addClass('active').siblings().removeClass('active');
                }

                function addBehaviours() {
                    var sections = $(".content-section");

                    $.each($(".node"), function (i, element) {
                        $(element).on("click", function (e) {
                            e.stopPropagation();
                            e.preventDefault();

                            var scroll = $(sections[i]).offset().top;

                            $('html, body').animate({
                                scrollTop: scroll
                            }, 300);
                        });
                    });
                }

                function arrangeNodes() {
                    $(".node").remove();

                    $.each($(".content-section"), function (i, element) {
                        var name = $(element).attr('id');
                        var node = $("<li class='node'><span>" + name + "</span></li>");

                        $(".timeline ul").append(node);
                    });

                    addBehaviours();
                }

                $(window).on("scroll resize", function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    fixTimeline();
                    setDimensionBar();
                });

                arrangeNodes();
                setLineHeight();
                setDimensionBar();
            });
    }

    if ($('body.vulnerabilities')[0]) {
        var pageIndex = 0;
        var pageSize = 10;

        function buildLi(data) {
            var html = '<li class="article clear">';
            var CVE = data.shift().CVE,
                DateReported = data.shift().DateReported,
                Severity = data.shift().Severity;

            html += '<div class="left"><span class="day">' + DateReported.slice(-2) + '</span>' + DateReported.slice(0, 7) + '</div>' +
                ' <div class="right"><i class="dot"></i><h3>' + CVE + '</h3>' +
                '<div class="data"><span><i class="fa fa-clock-o"></i> Time：' + DateReported + '</span><span><i class="fa fa-bars"></i> Risk Level: ' + Severity + '</span></div>' +
                '<ul class="article-desc">';

            $.each(data, function (r, rValue) {
                for (var i in rValue) {
                    var item = rValue[i];

                    if (i === 'UpdatedGoogleDevices') {
                        html += '<li>Updated Google Devices</li>';
                    } else if (i === 'ExploitsName') {
                        html += '<li>Exploits Name</li>';
                    } else if (i === 'ExploitsDescription') {
                        html += '<li>Exploits Description</li>';
                    } else {
                        html += '<li>' + i + '</li>';
                    }

                    if ($.isArray(item)) {
                        $.each(item, function (_i, _item) {
                            for (var name in _item) {
                                if ($.isEmptyObject(_item[name])) {
                                    html += '<p>' + name + '</p>';
                                }
                                else {
                                    var _tmp = _item[name].shift();

                                    html += '<p><a href="' + _tmp + '">' + name + '</a>';

                                    $.each(_item[name], function (a, aItem) {
                                        html += '<a href="' + aItem + '">[' + (a + 2) + ']</a>';
                                    });

                                    html += '</p>';
                                }
                            }
                        });
                    }
                    else if ($.isPlainObject(item)) {
                        for (var name in item) {
                            html += '<p>' + name + " : " + item[name] + '</p>';
                        }
                    }
                    else {
                        html += '<p>' + item + '</p>';
                    }
                }
            });

            html += '</ul></div></li>';

            return html;
        }

        function PageCallback(index, jq) {
            Init(index);
        }

        function Init(pageIndex) {
            $.ajax({
                dataType: "json",
                url: '/reportsPage/2/' + pageIndex,
                success: done
            });
        }

        function done(data) {
            if (data != "") {

                $("#content").empty();

                var html = '';
                $.each(data.Data, function (index, news) {
                    html += buildLi(news);
                });

                $("#content").html(html);
            }
        }

        $.when($.ajax({
            dataType: "json",
            url: '/reportsPage/2/0'
        }))
            .done(function (data) {
                done(data);

                $(".page").pagination(data.Total, {
                    callback: PageCallback,
                    items_per_page: pageSize,
                    num_display_entries: 5,
                    current_page: pageIndex,
                    num_edge_entries: 1
                });

            });
    }

    if ($('body.vulnerabilitiesDetail')[0]) {
        $.when($.ajax({
            url: '/mobileVulnerabilitiesDetail/' + $('body').data('cve')
        }))
            .then(function (data) {


                $('ul.main-content').append(content);
            });
    }

    if ($('body.successCase')[0]) {
        var id = $('body').data('id');
        var content = $('div.main').find('div.container');

        function funcContent(sec, args) {
            var _img = $('<img src="' + args.src + '" alt="" />');

            _img.load(function (evt) {
                sec.append('<div class="container">' +
                    '<div class="logo">' +
                    '<p><img src="' + args.src + '" alt="" /></p>' +
                    '<p class="logo-name">' + args.name + '</p>' +
                    '</div>' +
                    '<div class="introduction">' +
                    '<div class="intro">' + args.intro + '</div>' +
                    (args.google ?
                            ('<p><a href="' + args.google + '" class="btn btn-default">Get it on Google Play</a></p>' +
                            '<p><a href="' + args.domestic + '" class="btn btn-reverse" id="domestic-a">Download APK</a></p>') :
                            ('<p><a href="' + args.domestic + '" class="btn btn-default" id="domestic-a">Download APK</a></p>')
                    ) +
                    '</div>' +
                    '</div>');
            });

            $.ajax('/version')
                .done(function (data) {
                    var version = data[args.version] || '';
                    version = version &&  ' (Version: ' + version + ')';

                    $('#domestic-a').text('Download APK' + version);
                });
        }

        switch (id) {
            case 'Security':
                funcContent(content, {
                    src: '/assets/img/m/Security.png',
                    name: 'Hi Security',
                    google: 'https://play.google.com/store/apps/details?id=com.ehawk.antivirus.applock.wifi',
                    domestic: 'https://s3.amazonaws.com/tcl-hisecuritylab/applist/com.ehawk.antivirus.applock.wifi.apk',
                    version: 'com.ehawk.antivirus.applock.wifi.apk',
                    intro: '<p>Hi Security is a world class antivirus and security application for Android devices used and enjoyed by 20 million android users globally and currently featured in the Top 20 US \'tools apps\' charts! Notonly doesitprevent all Android threats, butit also protects your sensitive apps and ensuresyour online safety. Our brand-new Phone Booster function has been recently introduced, enhancing your phone experience! Hi Security: making your phone faster and safer.</p>'
                });

                break;

            case 'Lite':
                funcContent(content, {
                    src: '/assets/img/m/Hi Security Lite.png',
                    name: 'Hi Security Lite',
                    google: 'https://play.google.com/store/apps/details?id=com.hawk.security',
                    domestic: 'https://s3.amazonaws.com/tcl-hisecuritylab/applist/com.hawk.security.apk',
                    version: 'com.hawk.security.apk',
                    intro: '<p>Hi Security Lite is a tiny but super powerful antivirus application. It also features the highly popular App Lock and WiFi Security.</p>'
                });

                break;

            case 'cleaner':
                funcContent(content, {
                    src: '/assets/img/m/super cleaner.png',
                    name: 'Super Cleaner - Antivirus',
                    google: 'https://play.google.com/store/apps/details?id=com.apps.go.clean.boost.master',
                    domestic: 'https://s3.amazonaws.com/tcl-hisecuritylab/applist/com.apps.go.clean.boost.master.apk',
                    version: 'com.apps.go.clean.boost.master.apk',
                    intro: '<p>Super Cleaner is one of the most popular mobile cleaning apps on Google Play. It is currently the number 1 choice in the US market. Due to our expert technical support team, the app is able to offer antivirus service for users across the world. Thanks to Super Cleaner, millions of devices worldwide run faster and safer everyday.</p>'
                });

                break;

            case 'vpn':
                funcContent(content, {
                    src: '/assets/img/m/vpn.png',
                    name: 'Hi VPN',
                    google: 'https://play.google.com/store/apps/details?id=com.ehawk.proxy.freevpn',
                    domestic: 'https://s3.amazonaws.com/tcl-hisecuritylab/applist/com.ehawk.proxy.freevpn.apk',
                    version: 'com.ehawk.proxy.freevpn.apk',
                    intro: '<p>Hi VPN ensures your online safety by providing you with a secure and encrypted connection to browse the internet. A range of high speed servers are available worldwide, such as the United States, Germany, Netherlands, United Kingdom and Canada, all free of charge!</p>'
                });

                break;

            case 'NotifyBox':
                funcContent(content, {
                    src: '/assets/img/m/NotifyBox.png',
                    name: 'NotifyBox',
                    google: 'https://play.google.com/store/apps/details?id=com.hawk.notifybox',
                    domestic: 'https://s3.amazonaws.com/tcl-hisecuritylab/applist/com.hawk.notifybox.apk',
                    version: 'com.hawk.notifybox.apk',
                    intro: '<p>NotifyBox helps remove unwanted notifications and create a tidy notification display panel. All notification details can be reviewed in detail. The smart notification manager creates a simple, clean and organized display of incoming messages.</p><p>NotifyBox intelligently identifies certain undesired notifications intelligently and then moves them into a spam box. Notification management experience will be faster, smarter and easier.</p>'
                });

                break;

            case 'Scanner':
                funcContent(content, {
                    src: '/assets/img/m/QuadRooter Scanner & Detector.png',
                    name: 'QuadRooter Scanner & Detector',
                    google: 'https://play.google.com/store/apps/details?id=com.hawk.vulscanner',
                    domestic: 'https://s3.amazonaws.com/tcl-hisecuritylab/applist/com.hawk.vulscanner.apk',
                    version: 'com.hawk.vulscanner.apk',
                    intro: '<p>QuadRooter Scanner intelligently analyzes your Android devices and discovers hidden QuadRooter vulnerabilities. The scanner is designed to provide with clear indications of potential threats to your Android devices while offering detailed information about QuadRooter.</p>' +
                    '<p>QuadRooter vulnerabilities allow attackers to take complete control of your Android devices, potentially exposing your sensitive data to cyber-crime, which is currently in the news that 900 millions Android devices are vulnerable. Scanning your device regularly with QuadRooter Scanner protects your private data from cyber criminals.</p>'
                });

                break;
        }
    }
});