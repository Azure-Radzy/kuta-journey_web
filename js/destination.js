function viewDes (){
    document.getElementById("main").style.display = "none";
    document.getElementById("page-des").style.display = "block";
}

var campuhan = {
    background: "img/destination_img/campuhan_ridge_walk.jpeg",
    bgTitle: "campuhan ridge walk",
    destination: "Campuhan Deskripsi",
    desTitle: "Campuhan Ridge Walk: Daya Tarik, Harga Tiket Masuk, dan Lokasinya",
    des1: `Campuhan Ridge Walk merupakan salah satu destinasi wisata yang sangat populer di Bali di Bali. Bagi wisatawan yang ingin mengunjunginya, ketahui terlebih dahulu daya tarik tempat ini, harga tiket masuk hingga lokasinya.
    `,
    des2: `Objek wisata ini juga dikenal dengan nama Bukit Campuhan, yang menawarkan pemandangan alam berupa padang rumput ilalang serta hijaunya pepohonan di sisi kanan dan kirinya. Udara di kawasan ini juga sangat sejuk dengan suasana yang asri.`,
    backgroundDes: "img/destination_img/campuhan_ridge_walk1.jpeg",
    des3: `Dikutip dari situs indonesia.travel, Campuhan Ridge Walk Ubud adalah wisata berupa jalan setapak yang kerap dimanfaatkan untuk jogging. Bukit ini berada di kawasan perbukitan Desa Sayan, Ubud.`,
    des4: `Keindahan panorama inilah yang membuat wisata Bukit Campuhan ini begitu terkenal di Ubud. Bagi wisatawan yang tertarik untuk datang destinasi wisata ini, berikut ini beberapa daya tarik dari tempat wisata ini yang wajib diketahui.`,
    info: "Jangan sampai ketinggalan",
    info1: "Panorama Alam yang Indah dan Menakjubkan",
    info2: "Trekking dan Bersepeda di Bukit Campuhan",
    info3: "Spot Foto Instagramable",
    price: "Harga Tiket Masuk",
    price1: "Parkir Motor: Rp2.000",
    price2: "Parkir Mobil: Rp5.000",
    price3: "",
    loc: "campuhan lokasi",
    mapLoc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.9567487277845!2d115.25475789999999!3d-8.5035806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d6bcaf473f5%3A0x7c13fd74aa1bc49f!2sCampuhan%20Ridge%20Walk!5e0!3m2!1sid!2sid!4v1729300680476!5m2!1sid!2sid"
}

var monkey = {

}


function description(option){
    background = window[option].background
    bgTitle = window[option].bgTitle
    destination = window[option].destination
    desTitle = window[option].desTitle
    des1 = window[option].des1
    des2 = window[option].des2
    backgroundDes = window[option].backgroundDes
    des3 = window[option].des3
    des4 = window[option].des4
    info = window[option].info
    info1 = window[option].info1
    info2 = window[option].info2
    info3 = window[option].info3
    price = window[option].price
    price1 = window[option].price1
    price2 = window[option].price2
    price3 = window[option].price3
    loc = window[option].loc
    mapLoc = window[option].mapLoc
    


    document.getElementById("bg").src = background;
    document.getElementById("bg-title").innerHTML = bgTitle;
    document.getElementById("cnt-des").innerHTML = destination;
    document.getElementById("cnt-title").innerHTML = desTitle;
    document.getElementById("cnt-des1").innerHTML = des1;
    document.getElementById("cnt-des2").innerHTML = des2;
    document.getElementById("cnt-img").src = backgroundDes;
    document.getElementById("cnt-des3").innerHTML = des3;
    document.getElementById("cnt-des4").innerHTML = des4;
    document.getElementById("cnt-info").innerHTML = info;
    document.getElementById("cnt-info1").innerHTML = info1;
    document.getElementById("cnt-info2").innerHTML = info2;
    document.getElementById("cnt-info3").innerHTML = info3;
    document.getElementById("cnt-price").innerHTML = price;
    document.getElementById("cnt-price1").innerHTML = price1;
    document.getElementById("cnt-price2").innerHTML = price2;
    document.getElementById("cnt-price3").innerHTML = price3;
    document.getElementById("cnt-loc").innerHTML = loc;
    document.getElementById("cnt-map").src = mapLoc;
}