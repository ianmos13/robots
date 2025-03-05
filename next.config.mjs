/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  async redirects() {
    return [
      {
        source: "/tpost/553y3r6bm1-crobotp-klyuch-k-povisheniyu-proizvodite",
        destination:
          "/blog/crobotp-klyuch-k-povysheniyu-proizvoditelnosti-i-umensheniyu-oshibok",
        permanent: true,
      },
      {
        source: "/tpost/3xtd0m0pi1-povishenie-effektivnosti-i-tochnosti-v-p",
        destination:
          "/blog/povyshenie-effektivnosti-i-tochnosti-v-proizvodstve",
        permanent: true,
      },
      {
        source: "/tpost/iupmx1yle1-na-chto-obratit-vnimanie-pri-vibore-svar",
        destination:
          "/blog/na-chto-obratit-vnimanie-pri-vybore-svarochnogo-robota",
        permanent: true,
      },
      {
        source: "/tpost/ja451pel61-robotizatsiya-v-neftegazovoi-otrasli",
        destination: "/blog/robotizatsiya-v-neftegazovoy-otrasli",
        permanent: true,
      },
      {
        source: "/tpost/m0dv2bjev1-robotizatsiya-promishlennih-predpriyatii",
        destination: "/blog/robotizatsiya-promyshlennykh-predpriyatiy",
        permanent: true,
      },
      {
        source: "/tpost/10z7t1myt1-rinok-promishlennih-robotov-v-rossii",
        destination: "/blog/rynok-promyshlennykh-robotov-v-rossii",
        permanent: true,
      },
      {
        source: "/tpost/nu6uczz6i1-kak-promishlennie-roboti-pomogayut-avtom",
        destination:
          "/blog/kak-promyshlennye-roboty-pomogayut-avtomatizirovat-proizvodstvo",
        permanent: true,
      },
      {
        source: "/tpost/t7ajdjezk1-kak-vibrat-promishlennogo-robota",
        destination: "/blog/kak-vybrat-promyshlennogo-robota",
        permanent: true,
      },
      {
        source: "/tpost/olho8des31-rabota-i-primenenie-promishlennogo-robot",
        destination: "/blog/rabota-i-primenenie-promyshlennogo-robota",
        permanent: true,
      },
      {
        source: "/tpost/6si9sh4p21-sverlenie-i-frezerovka-promishlennim-rob",
        destination: "/blog/sverlenie-i-frezerovka-promyshlennym-robotom",
        permanent: true,
      },
      {
        source: "/tpost/ia8kheiro1-tehnicheskoe-obsluzhivanie-i-remont-prom",
        destination:
          "/blog/tekhnicheskoe-obsluzhivanie-i-remont-promyshlennykh-robotov",
        permanent: true,
      },
      {
        source: "/tpost/0gf2jyf9h1-vidi-i-ustroistvo-promishlennih-robotov",
        destination: "/blog/vidy-i-ustroystvo-promyshlennykh-robotov",
        permanent: true,
      },
      {
        source: "/tpost/i40759hfc1-chto-takoe-promishlennii-robot",
        destination: "/blog/chto-takoe-promyshlennyy-robot",
        permanent: true,
      },
      {
        source: "/tpost/c7f6h5k9s1-avtomatizatsiya-protsessa-svarki",
        destination: "/blog/avtomatizatsiya-protsessa-svarki",
        permanent: true,
      },
      {
        source: "/coating",
        destination: "/blog/pokrasochnye-roboty",
        permanent: true,
      },
      {
        source: "/handling",
        destination: "/blog/roboty-dlya-obsluzhivaniya-stankov",
        permanent: true,
      },
      {
        source: "/installation",
        destination: "/blog/ukladka",
        permanent: true,
      },
      {
        source: "/mig-mag-welding",
        destination: "/blog/svarka-mig-mag",
        permanent: true,
      },
      {
        source: "/milling",
        destination: "/blog/frezerovanie",
        permanent: true,
      },
      {
        source: "/package",
        destination: "/blog/upakovka",
        permanent: true,
      },
      {
        source: "/palletizing",
        destination: "/blog/roboty-palletayzery",
        permanent: true,
      },
      {
        source: "/press-service",
        destination: "/blog/obsluzhivanie-pressov",
        permanent: true,
      },
      {
        source: "/tig-welding",
        destination: "/blog/svarka-tig",
        permanent: true,
      },
      {
        source: "/waterjet-cutting",
        destination: "/blog/gidroabrazivnaya-rezka",
        permanent: true,
      },
      {
        source: "/appliance",
        destination: "/blog/primenenie-promyshlennykh-robotov",
        permanent: true,
      },
      {
        source: "/laser_welding",
        destination: "/blog/robotizirovannaya-lazernaya-svarka",
        permanent: true,
      },
      {
        source: "/plasma_laser",
        destination: "/blog/istochniki-plazmennoy-rezki",
        permanent: true,
      },
      {
        source: "/plasma-cutting",
        destination: "/blog/plazmennaya-rezka",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/aviastroenie",
        destination: "/blog/aviastroenie",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/avtomobilnaya-promyshlennost",
        destination: "/blog/avtomobilnaya-promyshlennost",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/cvetnaya_metallurgia",
        destination: "/blog/tsvetnaya-metallurgiyaotov",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/electrotehnika",
        destination: "/blog/elektrotekhnika-elektronika-priborostroenie",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/energomashinostroenie",
        destination: "/blog/energomashinostroenie",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/farmacevtika",
        destination: "/blog/farmatsevtika",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/himicheskaya_promishlennost",
        destination: "/blog/khimicheskaya-promyshlennost",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/lyogkaya-promyshlennost",
        destination: "/blog/legkaya-promyshlennost",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/mashinostroenie-i-metalloobrabotka",
        destination: "/blog/mashinostroenie-i-metalloobrabotka",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/mebelnoe-proizvodstvo",
        destination: "/blog/mebelnoe-proizvodstvo",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/neftehimicheskaya-promishlenost",
        destination: "/blog/neftekhimicheskaya-promyshlennost",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/pishevaya_promishlennost",
        destination: "/blog/pishchevaya-promyshlennost",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/podemno-transportnoe-mashinostroenie",
        destination: "/blog/podyemno-transportnoe-mashinostroenie",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/proizvdstvo_plastmass",
        destination: "/blog/proizvodstvo-plastmass",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/proizvodstvo_voennoi_techniki",
        destination: "/blog/proizvodstvo-voennoy-tekhniki",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/proizvodstvo_bitovoi_techniki_i_priborov",
        destination: "/blog/proizvodstvo-bytovoy-tekhniki-i-priborov",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/promishlennost_stroitelnih_materialov",
        destination: "/blog/promyshlennost-stroitelnykh-materialov",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/raketno-kosmicheskaya-promishlenost",
        destination: "/blog/raketno-kosmicheskaya-promyshlennost",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/selskohozyaistvennoe-mashinostroenie",
        destination: "/blog/selskokhozyaystvennoe-mashinostroenie",
        permanent: true,
      },
      {
        source:
          "/sfery-primeneniya/stekolnaya_i_farforovo_fayansovaya_promishlenost",
        destination: "/blog/stekolnaya-i-farforo-fayansovaya-promyshlennost",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/stroitelnoe_i_kommunalnoe_mashinostroenie",
        destination: "/blog/stroitelnoe-i-kommunalnoe-mashinostroenie",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/sudostroenie",
        destination: "/blog/sudostroenie",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya/zheleznodorozhnoe-",
        destination: "/blog/zheleznodorozhnoe-mashinostroenie",
        permanent: true,
      },
      {
        source: "/sfery-primeneniya",
        destination: "/blog/sfery-primeneniya",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/vlb6dajr81-mashinostroenie-metalloobrabotka-innovat",
        destination:
          "/articles/mashinostroenie-metalloobrabotka-innovatsionnyy-potentsial-ufy",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/if0ozyhos1-priglashenie-na-vistavku-mebel-2024-gmos",
        destination: "/articles/priglashenie-na-vystavku-mebel-2024-g-moskva",
        permanent: true,
      },
      {
        source: "/articles/tpost/mc3msdv1i1-rusweld-2024-obzor-stenda-crp",
        destination: "/articles/rusweld-2024-obzor-stenda-crp",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/vtekjdio31-priglashenie-na-vistavku-weldex-2024-g-m",
        destination: "/articles/priglashaem-na-vystavku-weldex-2024-g-moskva",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/l4og8shmy1-vstrecha-predstavitelei-filialov-crp-aut",
        destination:
          "/articles/vstrecha-predstaviteley-filialov-crp-automation-russia",
        permanent: true,
      },
      {
        source: "/articles/tpost/amrzb6ini1-rusweld-2024",
        destination: "/articles/rusweld-2024",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/tehgiet8o1-priglashaem-na-vistavku-rusweld-2024-g-m",
        destination: "/articles/priglashaem-na-vystavku-rusweld-2024-g-moskva",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/gcrncvr0r1-metalloobrabotka-2024-obzor-stenda-crp-r",
        destination: "/articles/metalloobrabotka-2024-obzor-stenda-crp-robot",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/xpvll4psy1-crp-automation-russia-zapuskayut-proizvo",
        destination:
          "/articles/crp-automation-russia-zapuskayut-proizvodstvo-robotov-v-podmoskove",
        permanent: true,
      },
      {
        source: "/articles/tpost/u629c2ks31-crp-robot-v-innopolise",
        destination: "/articles/crp-robot-v-innopolise",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/nf59kyyba1-konferentsiya-effektivnoe-proizvodstvo-4",
        destination:
          "/articles/konferentsiya-effektivnoe-proizvodstvo-4-0-ekspotsentr-na-krasnoy-presne",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/4n5rjov9y1-itogi-vistavki-metalloobrabotka-2024",
        destination: "/articles/itogi-vystavki-metalloobrabotka-2024",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/oci5t8trk1-priglashaem-na-vistavku-metalloobrabotka",
        destination:
          "/articles/priglashaem-na-vystavku-metalloobrabotka-2024-v-g-moskva",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/25er7dp701-vstrecha-liderov-promishlennosti-tversko",
        destination:
          "/articles/vstrecha-liderov-promyshlennosti-tverskoy-oblasti",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/3drtgxa881-vistavka-metalloobrabotka-svarka-ural-g",
        destination:
          "/articles/vystavka-metalloobrabotka-svarka-ural-g-ekaterinburg-12-15-marta-2024",
        permanent: true,
      },
      {
        source: "/articles/tpost/8o3amtj611-anons-vistavok-2024",
        destination: "/articles/anons-vystavok-2024",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/61757lym01-spetsialisti-kompanii-crp-prinimayut-ekz",
        destination:
          "/articles/spetsialisty-kompanii-crp-prinimayut-ekzamen-po-robototekhnike-u-studentov-mai",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/5o5s1sz0x1-promishlennie-roboti-crp-v-kitae-na-zavo",
        destination: "/articles/promyshlennye-roboty-crp-v-kitae-na-zavode-byd",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/cd3zfo66r1-itogi-vistavki-rusweld-23-26-oktyabrya-2",
        destination: "/articles/itogi-vystavki-rusweld-23-26-oktyabrya-2023",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/1pdy9195r1-vistavka-mebel-20-24-noyabrya-2023-g-mos",
        destination:
          "/articles/vystavka-mebel-20-24-noyabrya-2023-g-moskva-tsvk-ekspotsentr",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/9jbxcmk1s1-priglashaem-na-vistavku-v-ufu-15-17-noya",
        destination:
          "/articles/priglashaem-na-vystavku-v-ufu-15-17-noyabrya-2023",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/bcdotistl1-priglashaem-na-vistavku-rusweld-2023-g-m",
        destination:
          "/articles/priglashaem-na-vystavku-rusweld-2023-g-moskva-tsvk-ekspotsentr",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/7czh6u7c41-priglashaem-na-svarochnuyu-vistavku-weld",
        destination:
          "/articles/priglashaem-na-svarochnuyu-vystavku-weldex-2023",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/3ard5c8341-priglashaem-na-vistavku-aquaterm-tashken",
        destination: "/articles/priglashaem-na-vystavku-aquaterm-tashkent-2023",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/954o2oseu1-crp-promishlennie-roboti-na-vistavke-sch",
        destination:
          "/articles/crp-promyshlennye-roboty-na-vystavke-schweissen-schneiden-2023",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/vxlrkmoc51-priglashaem-na-vistavku-profsvarka-2023",
        destination:
          "/articles/priglashaem-na-vystavku-profsvarka-2023-g-minsk-belarus",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/nx0dlixaj1-vistavka-innoprom-2023-g-ekaterinburg",
        destination: "/articles/vystavka-innoprom-2023-g-ekaterinburg",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/8u5ga9t561-itogi-vistavki-metalloobrabotka-2023-g-m",
        destination:
          "/articles/itogi-vystavki-metalloobrabotka-2023-g-moskva-ekspotsentr",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/szx77g6051-vistavka-v-turtsii-win-eurasia-7-10-iyun",
        destination:
          "/articles/vystavka-v-turtsii-win-eurasia-7-10-iyunya-2023",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/2bbaks84a1-priglashaem-na-vistavku-metalloobrabotka",
        destination:
          "/articles/priglashaem-na-vystavku-metalloobrabotka-2023-v-g-moskva",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/svb2hh2dm1-intervyu-s-klientom-proekt-po-avtomatiza",
        destination:
          "/articles/intervyu-s-klientom-proekt-po-avtomatizatsii-proizvodstva-teplovoy-tekhniki",
        permanent: true,
      },
      {
        source: "/articles/tpost/rggza3nmz1-nomer-1-po-prodazham",
        destination: "/articles/nomer-1-po-prodazham",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/8o8kryso11-itogi-vistavki-mashekspo-sibir-2023",
        destination: "/articles/itogi-vystavki-mashekspo-sibir-2023",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/gshozj4gh1-itogi-kongressa-neft40-13-14-marta-2023",
        destination: "/articles/itogi-kongressa-neft4-0-13-14-marta-2023",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/g3rxdco4x1-itogi-vistavki-metalloobrabotka-svarka-u",
        destination:
          "/articles/itogi-vystavki-metalloobrabotka-svarka-ural-2023",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/1d7ps281y1-priglashaem-na-vistavku-mashekspo-sibir",
        destination:
          "/articles/priglashaem-na-vystavku-mashekspo-sibir-28-30-marta-2023",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/995uh284p1-priglashaem-na-vistavku-metalloobrabotka",
        destination:
          "/articles/priglashaem-na-vystavku-metalloobrabotka-svarka-ural-14-17-marta-2023-g",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/cr3iixz0m1-anons-vistavok-2023-po-metalloobrabotke",
        destination:
          "/articles/anons-vystavok-2023-po-metalloobrabotke-i-svarke",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/0nkgiallm1-kruglosutochnaya-rabota-svarochnih-robot",
        destination:
          "/articles/kruglosutochnaya-rabota-svarochnykh-robotov-crp-na-proizvodstve",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/6zzy0ifve1-postuplenie-na-sklad-promishlennih-robot",
        destination:
          "/articles/postuplenie-na-sklad-promyshlennykh-robotov-crp-robot",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/dcehobf1z1-pozdravlenie-kompanii-crp-robot-s-novim",
        destination: "/articles/pozdravlenie-kompanii-crp-robot-s-novym-godom",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/2eplc31ri1-itogi-sibirskogo-energeticheskogo-foruma",
        destination:
          "/articles/itogi-sibirskogo-energeticheskogo-foruma-2022-g-krasnoyarsk",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/3ndkk62oi1-proekt-po-robotizatsii-proizvodstva-tepl",
        destination:
          "/articles/proekt-po-robotizatsii-proizvodstva-teplovoy-tekhniki-v-g-kirzhach",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/lblc8tjdy1-itogi-vistavki-rusweld-2022-g-moskva",
        destination: "/articles/itogi-vystavki-rusweld-2022-g-moskva",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/t8bmsxflm1-interlizing-udobnii-sposob-priobresti-ob",
        destination:
          "/articles/interlizing-udobnyy-sposob-priobresti-oborudovanie",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/ivlifax4m1-itogi-vistavki-weldex-2022-g-moskva",
        destination: "/articles/itogi-vystavki-weldex-2022-g-moskva",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/rfpn9vjls1-sibirskii-energeticheskii-forum-g-krasno",
        destination: "/articles/sibirskiy-energeticheskiy-forum-g-krasnoyarsk",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/m983abrrz1-itogi-vistavki-profsvarka-belorusskii-pr",
        destination:
          "/articles/itogi-vystavki-profsvarka-belorusskiy-promyshlenno-innovatsionnyy-forum-2022",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/c6kd4bazj1-bolshaya-postavka-promishlennih-robotov",
        destination:
          "/articles/bolshaya-postavka-promyshlennykh-robotov-crp-na-sklad-v-g-moskva",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/hlxlxv19o1-priglashaem-na-vistavku-rusweld-2022-g-m",
        destination:
          "/articles/priglashaem-na-vystavku-rusweld-2022-g-moskva-ekspotsentr",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/z6dlx2a561-priglashaem-na-svarochnuyu-vistavku-weld",
        destination:
          "/articles/priglashaem-na-svarochnuyu-vystavku-weldex-2022-g-moskva-krokus-ekpo",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/kil921c221-vistavka-panarmenian-2022-g-erevan-armen",
        destination: "/articles/vystavka-panarmenian-2022-g-erevan-armeniya",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/rt666rpb21-vistavka-profsvarka-2022-g-minsk-belarus",
        destination: "/articles/vystavka-profsvarka-2022-g-minsk-belarus",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/ve9vbassp1-metalloobrabotka-2022-g-moskva-ekspotsen",
        destination: "/articles/metalloobrabotka-2022-g-moskva-ekspotsentr",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/6sj43d8xv1-kamskii-promishlennii-forum-2022-g-naber",
        destination:
          "/articles/kamskiy-promyshlennyy-forum-2022-g-naberezhnye-chelny",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/u0bzysf421-vistavka-mashexpo-2022-g-novosibirsk",
        destination: "/articles/vystavka-mashexpo-2022-g-novosibirsk",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/ykfp8g4re1-vistavka-metalloobrabotka-svarka-ural-20",
        destination:
          "/articles/vystavka-metalloobrabotka-svarka-ural-2022-g-ekaterinburg",
        permanent: true,
      },
      {
        source:
          "/articles/tpost/nkcu7i6ge1-obzor-konstruktsii-promishlennogo-robota",
        destination: "/articles/obzor-konstruktsii-promyshlennogo-robota",
        permanent: true,
      },
      {
        source: "/tpost/fzmvuo4l61-pskovskaya-oblast-yanvar-2025",
        destination: "/our-projects/pskovskaya-oblast-yanvar-2025",
        permanent: true,
      },
      {
        source: "/tpost/jt9nt7r8b1-samarskaya-oblast-yanvar-2025",
        destination: "/our-projects/samarskaya-oblast-yanvar-2025",
        permanent: true,
      },
      {
        source: "/tpost/vkl6x777b1-moskovskaya-oblast-yanvar-2025",
        destination: "/our-projects/moskovskaya-oblast-yanvar-2025",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/x5dzndf7j1-leningradskaya-oblast-yanvar-2025",
        destination: "/our-projects/leningradskaya-oblast-yanvar-2025",
        permanent: true,
      },
      {
        source: "/tpost/za1n38hkx1-lipetskaya-oblast-yanvar-2025",
        destination: "/our-projects/lipetskaya-oblast-yanvar-2025",
        permanent: true,
      },
      {
        source: "/tpost/yu9cph56f1-moskovskaya-oblast-yanvar-2025",
        destination: "/our-projects/moskovskaya-oblast-yanvar-25",
        permanent: true,
      },
      {
        source: "/tpost/uoca7467v1-minsk-dekabr-2024",
        destination: "/our-projects/minsk-dekabr-2024",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/4v898e2le1-pskovskaya-oblast-dekabr-2024",
        destination: "/our-projects/pskovskaya-oblast-dekabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/csm05b6mj1-permskii-krai-dekabr-2024",
        destination: "/our-projects/permskiy-kray-dekabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/kek5rphfv1-moskovskaya-oblast-dekabr-2024",
        destination: "/our-projects/moskovskaya-oblast-dekabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/sgkzpgxi71-tulskaya-oblast-noyabr-2024",
        destination: "/our-projects/tulskaya-oblast-noyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/22l3rbcmj1-ulyanovskaya-oblast-noyabr-2024",
        destination: "/our-projects/ulyanovskaya-oblast-noyabr-2024",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/e9tbyu8dn1-ulyanovskaya-oblast-noyabr-2024",
        destination: "/our-projects/ulyanovskaya-oblast-noyabr-24",
        permanent: true,
      },
      {
        source: "/tpost/0ztztdj1j1-leningradskaya-oblast-noyabr-2024",
        destination: "/our-projects/leningradskaya-oblast-noyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/affdmpro81-bryanskaya-oblast-noyabr-2024",
        destination: "/our-projects/bryanskaya-oblast-noyabr-2024",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/nkikt7vid1-vologodskaya-oblast-noyabr-2024",
        destination: "/our-projects/vologodskaya-oblast-noyabr-2024",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/pt7ae62s31-sverdlovskaya-oblast-noyabr-2024",
        destination: "/our-projects/sverdlovskaya-oblast-noyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/dfmf7up7i1-moskovskaya-oblast-noyabr-2024",
        destination: "/our-projects/moskovskaya-oblast-noyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/ei3snd61j1-tverskaya-oblast-noyabr-2024",
        destination: "/our-projects/tverskaya-oblast-noyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/dos007if71-moskovskaya-oblast-oktyabr-2024",
        destination: "/our-projects/moskovskaya-oblast-oktyabr-2024",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/0mfd1zcfd1-moskovskaya-oblast-oktyabr-2024",
        destination: "/our-projects/moskovskaya-oblast-oktyabr-24",
        permanent: true,
      },
      {
        source: "/tpost/cdlmge1jg1-chelyabinskaya-oblast-oktyabr-2024",
        destination: "/our-projects/chelyabinskaya-oblast-oktyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/j9kicjy051-respublika-bashkortostan-oktyabr-2024",
        destination: "/our-projects/respublika-bashkortostan-oktyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/gbd2dtvct1-udmurtskaya-respublika-oktyabr-2024",
        destination: "/our-projects/udmurtskaya-respublika-oktyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/tixzrb30c1-belgorodskaya-oblast-oktyabr-2024",
        destination: "/our-projects/belgorodskaya-oblast-oktyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/14lzpyfpf1-ivanovskaya-oblast-sentyabr-2024",
        destination: "/our-projects/ivanovskaya-oblast-sentyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/mcf6tt58h1-voronezhskaya-oblast-sentyabr-2024",
        destination: "/our-projects/voronezhskaya-oblast-sentyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/erdm8bcz21-ufa-oktyabr-2024",
        destination: "/our-projects/ufa-oktyabr-2024",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/gc34rl77h1-moskva-sentyabr-2024",
        destination: "/our-projects/moskva-sentyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/56ojj5cs61-kaluzhskaya-oblast-sentyabr-2024",
        destination: "/our-projects/kaluzhskaya-oblast-sentyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/7maoefp541-respublika-tatarstan-sentyabr-2024",
        destination: "/our-projects/respublika-tatarstan-sentyabr-24",
        permanent: true,
      },
      {
        source: "/tpost/oiv0jk1161-moskva-sentyabr-2025",
        destination: "/our-projects/moskva-sentyabr-24",
        permanent: true,
      },
      {
        source: "/tpost/r0rxxd5fy1-volgogradskaya-oblast-sentyabr-2024",
        destination: "/our-projects/volgogradskaya-oblast-sentyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/1ydt2kv2j1-respublika-tatarstan-sentyabr-2024",
        destination: "/our-projects/respublika-tatarstan-sentyabr-2024",
        permanent: true,
      },
      {
        source: "/tpost/rocxxenk11-leningradskaya-oblast-avgust-2024",
        destination: "/our-projects/leningradskaya-oblast-avgust-2024",
        permanent: true,
      },
      {
        source: "/tpost/vohdpsso71-tambovskaya-oblast-avgust-2024",
        destination: "/our-projects/tambovskaya-oblast-avgust-2024",
        permanent: true,
      },
      {
        source: "/tpost/pr1ss9l6u1-vladimirskaya-oblast-iyul-2024",
        destination: "/our-projects/vladimirskaya-oblast-iyul-2024",
        permanent: true,
      },
      {
        source: "/tpost/p79n9n88u1-vladimirskaya-oblast-iyul-2024",
        destination: "/our-projects/vladimirskaya-oblast-iyul-24",
        permanent: true,
      },
      {
        source: "/tpost/y15jta6201-permskaya-oblast-iyul-2024",
        destination: "/our-projects/permskaya-oblast-iyul-2024",
        permanent: true,
      },
      {
        source: "/tpost/kasmi4j101-nizhegorodskaya-oblast-iyul-2024",
        destination: "/our-projects/nizhegorodskaya-oblast-iyul-2024",
        permanent: true,
      },
      {
        source: "/tpost/ot8lkbmo01-respublika-komi-iyul-2024",
        destination: "/our-projects/respublika-komi-iyul-2024",
        permanent: true,
      },
      {
        source: "/tpost/bmoyyh7bh1-tulskaya-oblast-iyul-2024",
        destination: "/our-projects/tulskaya-oblast-iyul-2024",
        permanent: true,
      },
      {
        source: "/tpost/jv19lopl11-altaiskii-krai-iyun-2024",
        destination: "/our-projects/altayskiy-kray-iyun-2024",
        permanent: true,
      },
      {
        source: "/tpost/fur7nigxd1-vladimirskaya-oblast-iyun-2024",
        destination: "/our-projects/vladimirskaya-oblast-iyun-2024",
        permanent: true,
      },
      {
        source: "/tpost/3abvd0gs81-rostovskaya-oblast-iyun-2024",
        destination: "/our-projects/rostovskaya-oblast-iyun-2024",
        permanent: true,
      },
      {
        source: "/tpost/7dxmncsg01-moskovskaya-oblast-iyun-2024",
        destination: "/our-projects/moskovskaya-oblast-iyun-2024",
        permanent: true,
      },
      {
        source: "/tpost/425x906vp1-kurskaya-oblast-mai-2024",
        destination: "/our-projects/kurskaya-oblast-may-2024",
        permanent: true,
      },
      {
        source: "/tpost/f07s6clvm1-respublika-ingushetiya-mai-2024",
        destination: "/our-projects/respublika-ingushetiya-may-2024",
        permanent: true,
      },
      {
        source: "/tpost/4og1n4oib1-respublika-bashkiriya-mai-2024",
        destination: "/our-projects/respublika-bashkiriya-may-2024",
        permanent: true,
      },
      {
        source: "/tpost/807run8py1-krasnodarskiy-kray-aprel-2024",
        destination: "/our-projects/krasnodarskiy-kray-aprel-2024",
        permanent: true,
      },
      {
        source: "/tpost/17mjyfzfh1-krasnoyarskii-krai-aprel-2024",
        destination: "/our-projects/krasnoyarskiy-kray-aprel-24",
        permanent: true,
      },
      {
        source: "/tpost/mc4f6glhr1-smolenskaya-oblast-aprel-2024",
        destination: "/our-projects/smolenskaya-oblast-aprel-2024",
        permanent: true,
      },
      {
        source: "/tpost/731l9fpdy1-tverskaya-oblast-aprel-2024",
        destination: "/our-projects/tverskaya-oblast-aprel-2024",
        permanent: true,
      },
      {
        source: "/tpost/uv0za653z1-orenburgskaya-oblast-mart-2024",
        destination: "/our-projects/orenburgskaya-oblast-mart-2024",
        permanent: true,
      },
      {
        source: "/tpost/oa29zhrz31-lugansk-mart-2024",
        destination: "/our-projects/lugansk-mart-2024",
        permanent: true,
      },
      {
        source: "/tpost/e5vjp8g881-minsk-mart-2024",
        destination: "/our-projects/minsk-mart-2024",
        permanent: true,
      },
      {
        source: "/tpost/gysc747i31-respublika-tatarstan-mart-2024",
        destination: "/our-projects/respublika-tatarstan-mart-2024",
        permanent: true,
      },
      {
        source: "/tpost/2igztbzay1-respublika-bashkortostan-mart-2024",
        destination: "/our-projects/respublika-bashkortostan-mart-2024",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/hkdv1aio61-chelyabinskaya-oblast-fevral-2024",
        destination: "/our-projects/chelyabinskaya-oblast-fevral-2024",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/kj808nxze1-ivanovskaya-oblast-fevral-2024",
        destination: "/our-projects/ivanovskaya-oblast-fevral-2024",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/dajrd40vt1-kaluzhskaya-oblast-fevral-2024",
        destination: "/our-projects/kaluzhskaya-oblast-fevral-2024",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/6enm07kj91-moskovskaya-oblast-yanvar-2024",
        destination: "/our-projects/moskovskaya-oblast-yanvar-2024",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/2zzfp6yft1-rostovskaya-oblast-yanvar-2024",
        destination: "/our-projects/rostovskaya-oblast-yanvar-2024",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/cvf5h2nny1-leningradskaya-oblast-yanvar-2024",
        destination: "/our-projects/leningradskaya-oblast-yanvar-2024",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/fnll0up6v1-nizhegorodskaya-oblast-yanvar-2024",
        destination: "/our/projects/nizhegorodskaya-oblast-yanvar-2024",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/eeza002y21-respublika-bashkortostan-dekabr-2023",
        destination: "/our-projects/respublika-bashkortostan-dekabr-2023-g",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/vtdr74gd11-nizhegorodskaya-oblast-dekabr-2023",
        destination: "/our-projects/nizhegorodskaya-oblast-dekabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/ad3hds92a1-respublika-bashkortostan-dekabr-2023",
        destination: "/our-projects/respublika-bashkortostan-dekabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/o7o2is1zp1-respublika-bashkortostan-dekabr-2023",
        destination: "/our-projects/respublika-bashkortostan-dekabr-23",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/97tt510xs1-penzenskaya-oblast-dekabr-2023",
        destination: "/our-projects/penzenskaya-oblast-dekabr-2023",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/k2lxusp4p1-amurskaya-oblast-dekabr-2023",
        destination: "/our-projects/amurskaya-oblast-dekabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/7xvilbkv61-moskovskaya-oblast-noyabr-2023",
        destination: "/our-projects/moskovskaya-oblast-noyabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/ahkug05yu1-respublika-kirgiziya-noyabr-2023",
        destination: "/our-projects/respublika-kirgiziya-noyabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/vi2iag9xe1-nizhegorodskaya-oblast-noyabr-2023",
        destination: "/our-projects/nizhegorodskaya-oblast-noyabr-2023g",
        permanent: true,
      },
      {
        source: "/tpost/2ayipnymo1-leningradskaya-oblast-noyabr-2023",
        destination: "/our-projects/leningradskaya-oblast-noyabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/78xo3mk9e1-nizhegorodskaya-oblast-noyabr-2023",
        destination: "/our-projects/nizhegorodskaya-oblast-noyabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/e2kt3ga9p1-nizhegorodskaya-oblast-noyabr-2023",
        destination: "/our-projects/nizhegorodskaya-oblast-noyabr-23",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/dpmtexnpr1-nizhegorodskaya-oblast-oktyabr-2023",
        destination: "/our-projects/nizhegorodskaya-oblast-oktyabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/gughjpg7n1-ivanovskaya-oblast-oktyabr-2023",
        destination: "/our-projects/ivanovskaya-oblast-oktyabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/8bznyj2rs1-irkutskaya-oblast-oktyabr-2023",
        destination: "/our-projects/irkutskaya-oblast-oktyabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/8xijmzfkz1-rostovskaya-oblast-oktyabr-2023",
        destination: "/our-projects/rostovskaya-oblast-oktyabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/pb6e881m01-ulyanovskaya-oblast-oktyabr-2023",
        destination: "/our-projects/ulyanovskaya-oblast-oktyabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/m0ms6byxz1-kostromskaya-oblast-sentyabr-2023",
        destination: "/our-projects/kostromskaya-oblast-sentyabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/86hb1ea9t1-smolenskaya-oblast-sentyabr-2023",
        destination: "/our-projects/smolenskaya-oblast-sentyabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/scjinmgot1-moskovskaya-oblast-sentyabr-2023",
        destination: "/our-projects/moskovskaya-oblast-sentyabr-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/5nsj0xduj1-voronezhskaya-oblast-iyun-2023",
        destination: "/our-projects/voronezhskaya-oblast-iyun-2023",
        permanent: true,
      },
      {
        source: "/tpost/h7gyiuje31-kabardino-balkarskaya-respublika-avgust",
        destination:
          "/our-projects/kabardino-balkarskaya-respublika-avgust-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/lmuungtv91-saratovskaya-oblast-avgust-2023",
        destination: "/our-projects/saratovskaya-oblast-avgust-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/ivn72rdsh1-moskovskaya-oblast-avgust-2023",
        destination: "/our-projects/moskovskaya-oblast-avgust-2023",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/c577uaenv1-moskovskaya-oblast-iyul-2023",
        destination: "/our-projects/moskovskaya-oblast-iyul-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/z56is9v4v1-novosibirskaya-oblast-iyul-2023",
        destination: "/our-projects/novosibirskaya-oblast-iyul-2023",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/257h00msx1-ryazanskaya-oblast-iyul-2023",
        destination: "/our-projects/ryazanskaya-oblast-iyul-2023",
        permanent: true,
      },
      {
        source: "/tpost/osmofj48x1-altaiskii-krai-iyul-2023",
        destination: "/our-projects/altayskiy-kray-iyul-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/dayif4uf11-vladimirskaya-oblast-iyun-2023",
        destination: "/our-projects/vladimirskaya-oblast-iyun-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/km7c6k06e1-nizhegorodskaya-oblast-iyun-2023",
        destination: "/our-projects/nizhegorodskaya-oblast-iyun-2023",
        permanent: true,
      },
      {
        source: "/tpost/z62on0z0h1-sverdlovskaya-oblast-iyun-2023",
        destination: "/our-projects/sverdlovskaya-oblast-iyun-2023",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/tbosggf7h1-kurskaya-oblast-mai-2023",
        destination: "/our-projects/kurskaya-oblast-may-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/axra97cpb1-nizhegorodskaya-oblast-mai-2023",
        destination: "/our-projects/nizhegorodskaya-oblast-may-2023",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/jd4to7toh1-samarskaya-oblast-mai-2023",
        destination: "/our-projects/samarskaya-oblast-may-2023",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/d0m0z6avt1-kostromskaya-oblast-mai-2023",
        destination: "/our-projects/kostromskaya-oblast-may-2023",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/asr4jkbie1-respublika-tatarstan-mai-2023",
        destination: "/our-projects/respublika-tatarstan-may-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/3mdo1sl4l1-vologodskaya-oblast-aprel-2023",
        destination: "/our-projects/vologodskaya-oblast-aprel-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/84z1zoxjt1-chelyabinskaya-oblast-aprel-2023",
        destination: "/our-projects/chelyabinskaya-oblast-aprel-2023",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/mb5xjv6rl1-ryazanskaya-oblast-aprel-2023",
        destination: "/our-projects/ryazanskaya-oblast-aprel-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/6m8a37sts1-sverdlovskaya-oblast-aprel-2023",
        destination: "/our-projects/sverdlovskaya-oblast-aprel-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/0z5xfj74p1-ulyanovskaya-oblast-aprel-2023",
        destination: "/our-projects/ulyanovskaya-oblast-aprel-2023",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/bl78801is1-respublika-belarus-aprel-2023",
        destination: "/our-projects/respublika-belarus-aprel-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/s55o8u3s31-sverdlovskaya-oblast-aprel-2023",
        destination: "/our-projects/sverdlovskaya-oblast-aprel-2023g",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/8chivnr971-samarskaya-oblast-aprel-2023",
        destination: "/our-projects/samarskaya-oblast-aprel-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/3cnjeedu21-chelyabinskaya-oblast-noyabr-2023",
        destination: "/our-projects/chelyabinskaya-oblast-noyabr-2023",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/i40h7ag751-moskovskaya-oblast-aprel-2023",
        destination: "/our-projects/moskovskaya-oblast-aprel-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/jikjye5bx1-brestskaya-oblast-belarus-aprel-2023",
        destination: "/our-projects/brestskaya-oblast-belarus-aprel-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/xg05kanj41-respublika-bashkortostan-mart-2023",
        destination: "/our-projects/respublika-bashkortostan-mart-2023",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/ukpxbjcc31-tulskaya-oblast-mart-2023",
        destination: "/our-projects/tulskaya-oblast-mart-2023",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/d2am79pft1-tomskaya-oblast-noyabr-2022",
        destination: "/our-projects/tomskaya-oblast-noyabr-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/r5h4z0y431-lipetskaya-oblast-mart-2023",
        destination: "/our-projects/lipetskaya-oblast-mart-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/uapsfk0bo1-respublika-kirgiziya-mart-2023",
        destination: "/our-projects/respublika-kirgiziya-mart-2023",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/kr6s12oe01-kostromskaya-oblast-mart-2023",
        destination: "/our-projects/kostromskaya-oblast-mart-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/mpsoxmc941-moskovskaya-oblast-fevral-2023",
        destination: "/our-projects/moskovskaya-oblast-fevral-2023",
        permanent: true,
      },
      {
        source: "/tpost/dbn28bsmt1-irkutskaya-oblast-avgust-2022",
        destination: "/our-projects/irkutskaya-oblast-avgust-2022",
        permanent: true,
      },
      {
        source: "/tpost/zeyj7pocm1-sverdlovskaya-oblast-fevral-2023",
        destination: "/our-projects/sverdlovskaya-oblast-fevral-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/v4vreeny91-chelyabinskaya-oblast-fevral-2023",
        destination: "/our-projects/chelyabinskaya-oblast-fevral-2023",
        permanent: true,
      },
      {
        source: "/tpost/f32onnfih1-permskii-krai-fevral-2023",
        destination: "/our-projects/permskiy-kray-fevral-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/7pbihnn661-kemerovskaya-oblast-yanvar-2023",
        destination: "/our-projects/kemerovskaya-oblast-yanvar-2023",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/8by4ds3yt1-respublika-tatarstan-dekabr-2022",
        destination: "/our-projects/respublika-tatarstan-dekabr-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/jd1x4cz0i1-kostromskaya-oblast-dekabr-2022",
        destination: "/our-projects/kostromskaya-oblast-dekabr-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/giasd0u4x1-moskovskaya-oblast-dekabr-2022",
        destination: "/our-projects/moskovskaya-oblast-dekabr-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/14l4m7aub1-ulyanovskaya-oblast-dekabr-2022",
        destination: "/our-projects/ulyanovskaya-oblast-dekabr-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/vphx34i6m1-tulskaya-oblast-dekabr-2022",
        destination: "/our-projects/tulskaya-oblast-dekabr-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/1ik4jvnk51-krasnodarskii-krai-dekabr-2022",
        destination: "/our-projects/krasnodarskiy-kray-dekabr-2022",
        permanent: true,
      },
      {
        source: "/tpost/ylkgo94lt1-sverdlovskaya-oblast-noyabr-2022",
        destination: "/our-projects/sverdlovskaya-oblast-noyabr-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/464rl5yvi1-moskovskaya-oblast-noyabr-2022",
        destination: "/our-projects/moskovskaya-oblast-noyabr-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/s0pz8v2361-moskovskaya-oblast-noyabr-2022",
        destination: "/our-projects/moskovskaya-oblast-noyabr-22",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/vbaup07501-ryazanskaya-oblast-noyabr-2022",
        destination: "/our-projects/ryazanskaya-oblast-noyabr-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/sft2976cf1-irkutskaya-oblast-oktyabr-2022",
        destination: "/our-projects/irkutskaya-oblast-oktyabr-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/7b2ah1pjg1-altaiskii-krai-oktyabr-2022",
        destination: "/our-projects/altayskiy-kray-oktyabr-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/uc82f83091-zabaikalskii-krai-oktyabr-2022",
        destination: "/our-projects/zabaykalskiy-kray-oktyabr-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/dmpk443ou1-moskovskaya-oblast-oktyabr-2022",
        destination: "/our-projects/moskovskaya-oblast-oktyabr-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/2pd2073vf1-moskovskaya-oblast-oktyabr-2022",
        destination: "/our-projects/moskovskaya-oblast-oktyabr-22",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/platv0x0i1-udmurtskaya-respublika-oktyabr-2022",
        destination: "/our-projects/udmurtskaya-respublika-oktyabr-2022",
        permanent: true,
      },
      {
        source: "/tpost/lh0udmb4c1-permskii-krai-oktyabr-2022",
        destination: "/our-projects/permskiy-kray-oktyabr-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/579r36ej81-sverdlovskaya-oblast-oktyabr-2022",
        destination: "/our-projects/sverdlovskaya-oblast-oktyabr-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/dvnt6j3691-moskovskaya-oblast-sentyabr-2022",
        destination: "/our-projects/moskovskaya-oblast-sentyabr-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/a933dhzc91-respublika-marii-el-sentyabr-2022",
        destination: "/our-projects/respublika-mariy-el-sentyabr-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/ibbgsjspa1-voronezhskaya-oblast-avgust-2022",
        destination: "/our-projects/voronezhskaya-oblast-avgust-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/l3xdi00ac1-voronezhskaya-oblast-avgust-2022",
        destination: "/our-projects/voronezhskaya-oblast-avgust-22",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/xg3axtg0t1-tulskaya-oblast-avgust-2022",
        destination: "/our-projects/tulskaya-oblast-avgust-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/u6d78ff2r1-moskovskaya-oblast-avgust-2022",
        destination: "/our-projects/moskovskaya-oblast-avgust-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/0mzoh4jll1-moskovskaya-oblast-avgust-2022",
        destination: "/our-projects/moskovskaya-oblast-avgust-22",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/71mdg04311-ivanovskaya-oblast-avgust-2022",
        destination: "/our-projects/ivanovskaya-oblast-avgust-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/yu716lnj71-moskovskaya-oblast-iyul-2022",
        destination: "/our-projects/moskovskaya-oblast-iyul-2022",
        permanent: true,
      },
      {
        source: "/tpost/hhe4bezcr1-yanao-iyul-2022",
        destination: "/our-projects/yanao-iyul-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/sjhflvu2a1-rostovskaya-oblast-iyul-2022",
        destination: "/our-projects/rostovskaya-oblast-iyul-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/687r569mm1-crp-rh14-10-moskovskaya-oblast-iyul-2022",
        destination: "/our-projects/crp-rh14-10-moskovskaya-oblast-iyul-2022g",
        permanent: true,
      },
      {
        source: "/tpost/672x4o4521-sverdlovskaya-oblast-iyul-2022",
        destination: "/our-projects/sverdlovskaya-oblast-iyul-2022g",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/26hx61oys1-respublika-tatarstan-iyul-2022",
        destination: "/our-projects/respublika-tatarstan-iyul-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/vm2pcz2p41-sverdlovskaya-oblast-iyul-2022",
        destination: "/our/projects/sverdlovskaya-oblast-iyul-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/ntetuv1dz1-respublika-adigeya-iyun-2022",
        destination: "/our-projects/respublika-adygeya-iyun-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/bmyot0db41-moskovskaya-oblast-iyun-2022",
        destination: "/our-projects/moskovskaya-oblast-iyun-2022g",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/5dju6gdk31-ulyanovskaya-oblast-iyun-2022",
        destination: "/our-projects/ulyanovskaya-oblast-iyun-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/x4k3jgfdn1-kurganskaya-oblast-iyun-2022",
        destination: "/our-projects/kurganskaya-oblast-iyun-2022",
        permanent: true,
      },
      {
        source: "/tpost/x9kfzc9uo1-vladimirskaya-oblast-iyun-2022",
        destination: "/our-projects/vladimirskaya-oblast-iyun-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/ikh0mces41-moskovskaya-oblast-iyun-2022",
        destination: "/our-projects/moskovskaya-oblast-iyun-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/fof01bybc1-samarskaya-oblast-iyun-2022",
        destination: "/our-projects/samarskaya-oblast-iyun-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/xa2js98l41-kaluzhskaya-oblast-iyun-2022",
        destination: "/our-projects/kaluzhskaya-oblast-iyun-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/2viac91oi1-ulyanovskaya-oblast-iyun-2022",
        destination: "/our-projects/ulyanovskaya-oblast-iyun-22",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/8p2foy8oc1-primorskii-krai-iyun-2022",
        destination: "/our-projects/primorskiy-kray-iyun-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/5ep4tl1ah1-volgogradskaya-oblast-iyun-2022",
        destination: "/our-projects/volgogradskaya-oblast-iyun-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/ebu05hj291-leningradskaya-oblast-iyun-2022",
        destination: "/our-projects/leningradskaya-oblast-iyun-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/n08a0lrdo1-crp-rh20-06-kaluzhskaya-oblast-iyun-2022",
        destination: "/our-projects/crp-rh20-06-kaluzhskaya-oblast-iyun-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/epj4d0e1c1-respublika-udmurtiya-mai-2022",
        destination: "/our-projects/respublika-udmurtiya-may-2022",
        permanent: true,
      },
      {
        source: "/tpost/rg7ynp1801-kaluzhskaya-oblast-mai-2022",
        destination: "/our-projects/kaluzhskaya-oblast-may-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/k2jxfxnoj1-penzenskaya-oblast-mai-2022",
        destination: "/our-projects/penzenskaya-oblast-may-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/784n3ikzz1-brestskaya-oblast-belarus-mai-2022",
        destination: "/our-projects/brestskaya-oblast-belarus-may-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/d44o3ulrd1-moskovskaya-oblast-mai-2022",
        destination: "/our-projects/moskovskaya-oblast-may-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/ypvnunpz51-rostovskaya-oblast-aprel-2022",
        destination: "/our-projects/rostovskaya-oblast-aprel-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/rsv2a2h531-orlovskaya-oblast-aprel-2022",
        destination: "/our-projects/orlovskaya-oblast-aprel-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/dbrlkpujd1-hmao-aprel-2022",
        destination: "/our-projects/khmao-aprel-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/7z1ve9rb91-minskaya-oblast-belarus-aprel-2022",
        destination: "/our-projects/minskaya-oblast-belarus-aprel-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/b4ocbxess1-yaroslavskaya-oblast-aprel-2022",
        destination: "/our-projects/yaroslavskaya-oblast-aprel-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/0skn9dcc21-krasnodarskii-krai-aprel-2022",
        destination: "/our-projects/krasnodarskiy-kray-aprel-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/hy6e6std51-crp-rh20-06-w-krasnodarskii-krai-aprel-2",
        destination:
          "/our-projects/crp-rh20-06-w-krasnodarskiy-kray-aprel-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/5x5exxij01-belgorodskaya-oblast-aprel-2022",
        destination: "/our-projects/belgorodskaya-oblast-aprel-2022",
        permanent: true,
      },
      {
        source: "/welding_robot/tpost/eocn6tzh91-tverskaya-oblast-aprel-2022",
        destination: "/our-projects/tverskaya-oblast-aprel-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/bsvhhe0fl1-chelyabinskaya-oblast-aprel-2022",
        destination: "/our-projects/chelyabinskaya-oblast-aprel-2022",
        permanent: true,
      },
      {
        source:
          "/welding_robot/tpost/3n0don64b1-volgogradskaya-oblast-aprel-2022",
        destination: "/our-projects/volgogradskaya-oblast-aprel-2022",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
