const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

  let btn=document.querySelector(".btn")

  let from = document.querySelector("#from_country");
  
  let to=document.querySelector("#to_country")
  
  let enter=document.querySelector(".enter input")
  
  let show=document.querySelector(".show input")

    // let countryCode
    for (let countryCode in countryList) {
        var add = document.createElement("option");
        add.innerHTML = countryList[countryCode];
        add.value = countryCode;
        from.appendChild(add);

        if (countryList[countryCode] === "US") {
            add.selected = true;

            let imageURL = `https://flagsapi.com/US/flat/64.png`;
            let image=document.querySelector("#img1")
            image.src=imageURL

        }

    }

    for (let countryCode in countryList) {
        var add1 = document.createElement("option");
        add1.innerHTML = countryList[countryCode];
        add1.value = countryCode;
        to.appendChild(add1);

        if (countryList[countryCode] === "PK") {
            add1.selected = true;

            
            let imageURL = `https://flagsapi.com/PK/flat/64.png`;
            let image=document.querySelector("#img2")
            image.src=imageURL
        }

    }

    const dropdowns=document.querySelectorAll(".main select")
    for(let select of dropdowns)
    {
        select.addEventListener("change", (event)=>{

            let countryCode=event.target.value
            let code=countryList[countryCode]
            let imageURL = `https://flagsapi.com/${code}/flat/64.png`;
            image=document.querySelector("#img1")
            image.src=imageURL
            console.log(code)

        })

    }

    const dropdowns1=document.querySelectorAll(".main2 select")
    for(let select1 of dropdowns1)
    {
        select1.addEventListener("change", (event)=>{

            let countryCode=event.target.value
            let code=countryList[countryCode]
            let imageURL = `https://flagsapi.com/${code}/flat/64.png`;
            image=document.querySelector("#img2")
            image.src=imageURL
            console.log(code)

        })


    }

//     async function updateflag()
//     {
//         if()
//     }

// updateflag()
 
// let URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"
let BaseURL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
async function convert()
{
    if(enter.value<1 || enter.value==='-0' || enter.value==="" || enter.value===NaN)
    {
        alert("Please give correct input")

        enter.value=0
        show.value=0
        return
    }

    else{
    let fromvalue=from.value.toLowerCase()
    let tovalue=to.value.toLowerCase()
    let URL = `${BaseURL}/${fromvalue}/${tovalue}.json`
    let response= await fetch(URL)
    let data=await response.json()
    // console.log(data[tovalue])

    let total_amount=enter.value * data[tovalue]
    total_amount=total_amount.toFixed(2)
    show.value=`${enter.value}  ${fromvalue} = ${total_amount} ${tovalue}`
    // show.value=enter.value
    }

}

btn.addEventListener("click",convert)