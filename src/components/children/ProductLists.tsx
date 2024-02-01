/*===================home swiper ====================*/
const home_swiper_list=[
    {
     IMG:"https://png.pngtree.com/png-clipart/20230417/original/pngtree-earphones-wireless-earphones-bluetooth-earphones-transparent-png-image_9062661.png",
     NAME:"Bluetooth Earphone",
     DESCRIPTION:"Sleek wireless earphones for immersive, hassle-free audio on the go."
   },
   {
     IMG:"https://allegro-bg.com/39031-medium_default/ergonomichno-buro-s-regylirane-na-visochinata-carmen-cr-119-byk-bql-12759.jpg",
     NAME:"Computer Standing Desk",
     DESCRIPTION:"Elevate your workspace with a sleek and ergonomic standing desk for enhanced comfort and productivity."
   },
   {
     IMG:"https://png.pngtree.com/png-clipart/20230311/ourmid/pngtree-3d-gaming-chair-ai-digital-artwork-png-image_6644954.png",
     NAME:"gaming chair",
     DESCRIPTION:"mmerse in comfort with our sleek gaming chair for an enhanced and hassle-free gaming experience."
   },
   {
     IMG:"https://freepngimg.com/download/digital_camera/21672-6-digital-slr-camera-transparent.png",
     NAME:"digital slr camera",
     DESCRIPTION:"Capture moments hassle-free."
   }
];

/*===============popular products===============*/
const cards_list=[
    {
        IMG:"https://cdn-magento.mykronoz.com/media/catalog/product/cache/9/image/e4d92e6aceaad517e7b5c12e0dc06587/s/m/smartwatch-circular-color-touchscreen-white-zeround2_2_1.png",
        NAME:"smart watch",
        PRICE:"$50",
        RATE:3,
    },
    {
        IMG:"https://www.pngall.com/wp-content/uploads/5/Wireless-Bluetooth-Headset-PNG-Picture.png",
        NAME:"earbuds bluetooth",
        PRICE:"$15.7",
        RATE:4,
    },
    {
        IMG:"https://www.pngplay.com/wp-content/uploads/13/Gaming-Keyboard-Transparent-Free-PNG.png",
        NAME:"gaming keyboard",
        PRICE:"$9.2",
        RATE:5,
    },
    {
        IMG:"https://static.vecteezy.com/system/resources/previews/026/860/669/original/vector-illustration-black-realistic-gaming-computer-mouse-on-a-transparent-isolated-background-generative-ai-png.png",
        NAME:"gaming mouse",
        PRICE:"$7.6",
        RATE:2,
    },
    {
        IMG:"https://www.ampetronic.com/wp-content/uploads/2018/03/em12.png",
        NAME:"microphone",
        PRICE:"$10.3",
        RATE:1,
    },
    {
        IMG:"https://www.freeiconspng.com/thumbs/drone-png/drones-black-4.png",
        NAME:"drone",
        PRICE:"$35.8",
        RATE:4,
    },
    
];
/*=================search list================*/
const search_list = [
    { NAME: ["drone", "plaine","flying device", "quadcopter"], LINK: "/drone" },
    { NAME: ["keyboard gaming", "clavier","typing device", "input device"], LINK: "/keyboard" },
    { NAME: ["mouse gaming", "sourie","pointing device"], LINK: "/mouse" },
    { NAME: ["watch", "smart", "clock","timepiece"], LINK: "/watch" },
    { NAME: ["micro", "microphone","microphone device"], LINK: "/micro" },
    { NAME: ["stand","support","table"], LINK: "/stand" },
    { NAME: ["iphone","Apple phone"], LINK: "/iphone" },
    { NAME: ["screen","display"], LINK: "/screen" },
    { NAME: ["photographe","photography","camera"], LINK: "/photographe" },
    { NAME: ["chair"], LINK: "/shair" },
    { NAME: ["earphone","headphones"], LINK: "/earphone" },
  ];
  /*==================top informatic products=========*/
  const top_informatic_list=[
      {URL:"https://png.pngtree.com/png-clipart/20230417/original/pngtree-bluetooth-earphone-electronic-device-fashion-transparent-png-image_9062645.png",
      NAME:"bluetooth earphone",PRICE:"$5.4",},
      {URL:"https://i.pinimg.com/originals/0a/1e/0d/0a1e0de0b7698c0a49c2f1d3ed61ac8c.png",
      NAME:"earbuds bluetooth",PRICE:"$3.2",},
      {URL:"https://freepngimg.com/download/keyboard/162868-gaming-electronic-keyboard-free-transparent-image-hd.png",
      NAME:"gaming keyboard",PRICE:"$3",},
      {URL:"https://www.pngkey.com/png/full/933-9333460_wireless-gaming-mouse-for-pc-gamer-red-led.png",
      NAME:"gaming mouse",PRICE:"$2.5",},
      {URL:"https://www.pngall.com/wp-content/uploads/4/Portable-Speaker-PNG-Image-HD.png",
      NAME:"Speaker",PRICE:"$4",},
      {URL:"https://freepngimg.com/download/monitor/22522-9-monitor-transparent-background.png",
      NAME:"monitors",PRICE:"$300",},
     /* {URL:,
      NAME:,PRICE:,},
      {URL:,
      NAME:,PRICE:,},
      {URL:,
      NAME:,PRICE:,},
      {URL:,
      NAME:,PRICE:,},*/
  ];
  /*==============================week's discount===============*/
  const list_discount=[
    {IMG:"https://www.pro-distributing.com/cdn/shop/files/677245_33bd4d85-23ff-4808-ab5e-c2e65105bae9-PhotoRoom.png?v=1688575351&width=2000",
    NAME:"wireless controller",OLD_PRICE:"$17.5",NEW_PRICE:"$10.2",DESCRIPTION:"The DualSense is Sony's wireless controller designed for the PlayStation 5 console."},
    {IMG:"https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
    NAME:"ps5",OLD_PRICE:"$390.5",NEW_PRICE:"$349.2",DESCRIPTION:"Powerful console, fast SSD, DualSense controller for immersive gaming."},
    {IMG:"https://static.vecteezy.com/system/resources/previews/009/308/990/non_2x/black-desk-lamp-isolated-on-transparent-background-file-png.png",
    NAME:"desk lamp",OLD_PRICE:"$6.5",NEW_PRICE:"$4.99",DESCRIPTION:"A desk lamp is a compact light for focused task illumination on workspaces."},
    {IMG:"https://pngimg.com/d/electric_scooter_PNG13.png",
    NAME:"electric scooter",OLD_PRICE:"$450.5",NEW_PRICE:"$360.2",DESCRIPTION:"Electric scooters: Compact, electric, and eco-friendly personal transportation for short distances."},
    {IMG:"https://pngimg.com/d/web_camera_PNG7988.png",
    NAME:"web camera",OLD_PRICE:"$12.5",NEW_PRICE:"$9.99",DESCRIPTION:"A web camera captures video for real-time communication and online collaboration."},
    {IMG:"https://i.pinimg.com/originals/72/8b/b3/728bb387e15a0d5c1df24ab0ef653fe2.png",
    NAME:"power bank",OLD_PRICE:"$14.5",NEW_PRICE:"$11.2",DESCRIPTION:"Your on-the-go essential: a compact and reliable Power Bank for instant device charging."}
  ];
  const list_featured=[
    {URL1:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690470310/Croma%20Assets/Computers%20Peripherals/Laptop/Images/269865_zdgdgr.png",
      URL2:"https://apiv2.exceldisc.com/media/17351/74052791-68b9-4cdc-a633-1ffe1658f061.png",
      URL3:"https://i5.walmartimages.com/seo/Lenovo-ideapad-Gaming-3-Laptop-15-6-FHD-1920x1080-AMD-Ryzen-5-5600H-8-GB-RAM-256GB-SSD-NVIDIA-GeForce-GTX-1650-Windows-10_32e99eda-07f8-46ff-b993-07a3494adac6.a787de20f34211f14037e2a24a16925f.png",
      Name:"lenovo ideaPad G3 R5",
      REVIWS:250,
      STAR:4,
      DESCRIPTION:"Experience powerful gaming at an affordable price with the Lenovo IdeaPad Gaming 3 AMD Ryzen 5, featuring a sleek design, immersive visuals, and blazing-fast performance.",
      OLD_price:"$820",
      NEW_rice:"$730",
    },
    {URL1:"https://www.janado.de/cdn/shop/files/Sehr_gut_529b1c2c-1eb3-4565-9a1d-0ec2dcf81ade_600x.png?v=1696420759",
      URL2:"https://applefix.pl/wp-content/uploads/2023/03/Naprawa-Systemowa-iPhone-13-PRO-MAX.png",
      URL3:"https://pngimg.com/d/iphone_13_PNG18.png",
      Name:"iphone 13 pro ",
      REVIWS:270,
      STAR:5,
      DESCRIPTION:"Unleash the future of photography and performance with the iPhone 13 Pro, combining cutting-edge technology and stunning design in one extraordinary device.",
      OLD_price:"$1000",
      NEW_rice:"$820",
    },
    {URL1:"https://img-prd-pim.poorvika.com/product/Apple-watch-series-8-gps-45mm-mp6n3hn-a-Front-Right-View.png",
      URL2:"https://www.pngkey.com/png/full/196-1965967_apple-watch-series-2-gold.png",
      URL3:"https://clipart-library.com/images_k/watch-transparent-free/watch-transparent-free-23.png",
      Name:"apple smart watch",
      REVIWS:170,
      STAR:3,
      DESCRIPTION:"Elevate your lifestyle with the Apple Watch Series 2, seamlessly blending style and functionality for a smarter, more connected you.",
      OLD_price:"$290",
      NEW_rice:"$250",
    }
  ]
  /*==================top informatic products=========*/
  const top_sport_list=[
    {URL:"https://pngimg.com/d/electric_scooter_PNG61.png",
    NAME:"electric scooter"},
    {URL:"https://static.vecteezy.com/system/resources/previews/028/051/292/original/electric-motorbike-electric-bike-electric-vehicle-transparent-background-ai-generated-png.png",
    NAME:"electric motorbike"},
    {URL:"https://i.pinimg.com/originals/b9/66/a5/b966a5c2532ef37a1c03b463b6286279.png",
    NAME:"aventador lamborghini"},
    {URL:"https://static.vecteezy.com/system/resources/previews/019/942/990/non_2x/colorful-football-soccer-ball-with-color-paint-isolated-on-transparent-background-png.png",
    NAME:"football"},
    {URL:"https://png.pngtree.com/png-vector/20231127/ourmid/pngtree-table-football-on-a-white-background-adolescence-png-image_10727842.png",
    NAME:"baby foot"},
    {URL:"https://i.pinimg.com/originals/4f/c3/d3/4fc3d3bc6360ef883398358b3cf0b1bd.png",
    NAME:"ping pong"},
    {URL:"https://portlandpartyworks.com/wp-content/uploads/2021/12/pingpong_235906332_big.png",
    NAME:"ping pong table"},
    {URL:"https://pngimg.com/d/skiing_PNG40.png",
    NAME:"skiing"},
];
export{
    cards_list,home_swiper_list,search_list,
    top_informatic_list,list_discount,list_featured,top_sport_list,
}