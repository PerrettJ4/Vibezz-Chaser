let days = 7;
function genDate() {
  let date = new Date();
  date.setDate(date.getDate() + days);
  days += 2;
  return date.toISOString().split("T")[0].replace("/", "-");
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
let hotelPrice = () => getRandomInt(79, 169);
let gigPrice = () => getRandomInt(40, 119);

console.log(hotelPrice(), hotelPrice());
console.log(gigPrice(), gigPrice());

const times = [
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
  "00:00",
  "00:30",
];
const timeArray = [3, 4, 5, 6];
function genTime() {
  const randomGigNum = Math.floor(Math.random() * (times.length - 6));
  const gigLength = timeArray[Math.floor(Math.random() * 3)];
  let startTime = times[randomGigNum];
  let endTime = times[randomGigNum + gigLength];
  return [startTime, endTime, randomGigNum, gigLength];
}
console.log(genDate(), genTime(), "new:", genDate(), genTime());
const artists = [
  "The Artic Squirrels",
  "Beer from Asia",
  "The Painkillers",
  "The Funk Shui",
  "Waseem",
  "Nickleback",
];
const artistsImgs = [
  "https://i.imgflip.com/1zc92o.jpg?a451200",
  "https://static.billboard.com/files/media/ex-hex-press-2014-billboard-650x430-compressed.jpg",
  "https://i.ibb.co/7jG5BPY/Screenshot-2021-09-13-at-16-20-06.png",
  "https://dnwp63qf32y8i.cloudfront.net/a422f4ffb51678b1c375c3f5ef026f35a3b1121e",
  "https://ca.slack-edge.com/T6L933W4X-U027GDD1JLT-11435f6e2a8d-512",
  "https://miro.medium.com/max/530/1*mDDtoX0tTcoNQ3z_Rbb5bg.jpeg",
];

let placeData = [
  {
    venue: {
      city: "Paris",
      country: "France",
      name: "Stade de France",
      imgurl:
        "https://sillyseason.com/wp-content/uploads/2016/04/stade-de-france.jpg",
      landmarks: "Eiffel tower, Disney Land",
      landmarkimgurl:
        "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzNTM2MTQ4MTkx/hith-eiffel-tower-istock_000016468972large-2.jpg",
      airport: { name: "Aéroport de Paris-Charles-de-Gaulle", code: "CDG" },
    },
    hotel: {
      name: "Hôtel Passy Eiffel",
      address: "10 Rue de Passy, 75016 Paris, France",
      imgurl:
        "https://pix10.agoda.net/hotelImages/5252153/0/9daf36694bc76a7b5a88dfafcd23c5dc.jpg?s=1024x768",
      price: 116,
    },
  },
  {
    venue: {
      city: "Amsterdam",
      country: "Netherlands",
      name: "Ziggo Dome",
      imgurl:
        "https://images.adsttc.com/media/images/5152/7f16/b3fc/4b18/7200/0060/large_jpg/JHML1207-8546.jpg?1364360980",
      landmarks: "Beautiful Canals, Red Light District",
      landmarkimgurl:
        "https://media.cntraveler.com/photos/5fc6818f3cfe1de2cab79372/master/w_960%2Cc_limit/Amsterdam-GettyImages-840603854.jpg",
      airport: { name: "Amsterdam Airport Schiphol", code: "AMS" },
    },
    hotel: {
      name: "Van der Valk Amsterdam Amstel",
      address: "Joan Muyskenweg 20, 1096 CJ Amsterdam, Netherlands",
      imgurl:
        "https://lh3.googleusercontent.com/p/AF1QipOSZ6BrfXf1drBnlay9_7FQyXsGAOr4lix0M0Vu=w296-h202-n-k-rw-no-v1",
      price: 86,
    },
  },
  {
    venue: {
      city: "Dubrovnik",
      country: "Croatia",
      name: "Arena Pula",
      imgurl: "https://i.ytimg.com/vi/Sk5zxA9UP2Q/maxresdefault.jpg",
      landmarks: "King's Landing (Game of Thrones)",
      landmarkimgurl:
        "https://media.cntraveler.com/photos/5fc681913cfe1de2cab79374/master/w_960%2Cc_limit/Dubrovnik-GettyImages-566980797.jpg",
      airport: { name: "Dubrovnik Airport", code: "DBV" },
    },
    hotel: {
      name: "Hotel Dubrovnik Palace",
      address: "Masarykov put 20, 20000, Dubrovnik, Croatia",
      imgurl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/5f/34/79/hotel-dubrovnik-palace.jpg?w=900&h=-1&s=1",
      price: 182,
    },
  },
  {
    venue: {
      city: "Edinburgh",
      country: "Scotland",
      name: "Usher Hall",
      imgurl:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/The_Usher_Hall%2C_Edinburgh.JPG",
      landmarks: "Gothic buildings, cobblestoned Royal Mile, Edinburgh Castle",
      landmarkimgurl:
        "https://media.cntraveler.com/photos/588a0a534d2e1f891dc0a885/master/w_960%2Cc_limit/edinburgh-GettyImages-563133939.jpg",
      airport: { name: "Edinburgh Airport", code: "EDI" },
    },
    hotel: {
      name: "Fingal",
      address:
        "Alexandra Dock Historic Port of Leith, Edinburgh EH6 7DX Scotland",
      imgurl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ba/e9/b4/fingal.jpg?w=900&h=-1&s=1",
      price: 234,
    },
  },
  {
    venue: {
      city: "Rio de Janeiro",
      country: "Brazil",
      name: "Maracana",
      imgurl:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/The_Usher_Hall%2C_Edinburgh.JPG",
      landmarks:
        "Copacabana and Ipanema beaches, The Christ the Redeemer statue",
      landmarkimgurl:
        "https://media.cntraveler.com/photos/56549cbf659c4b48748654d0/master/w_960%2Cc_limit/christ-the-redeemer-brazil-cr-gallery-stock.jpg",
      airport: {
        name: "RIOgaleão - Tom Jobim International Airport",
        code: "GIG",
      },
    },
    hotel: {
      name: "Fairmont Rio de Janeiro Copacabana",
      address:
        "Av. Atlantica, 4240 Copacabana, Rio de Janeiro, State of Rio de Janeiro 22070-002 Brazil",
      imgurl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/90/cb/8d/fairmont-rio-de-janeiro.jpg?w=900&h=-1&s=1",
      price: 142,
    },
  },
  {
    venue: {
      city: "Beijing",
      country: "China",
      name: "Wukesong Arena",
      imgurl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/%E5%8C%97%E4%BA%AC%E4%BA%94%E6%A3%B5%E6%9D%BE%E8%93%9D%E7%90%83%E5%9C%BA_-_panoramio.jpg/220px-%E5%8C%97%E4%BA%AC%E4%BA%94%E6%A3%B5%E6%9D%BE%E8%93%9D%E7%90%83%E5%9C%BA_-_panoramio.jpg",
      landmarks: "Forbidden City, Temple of Heaven",
      landmarkimgurl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Qianmen_Street_1.jpg/800px-Qianmen_Street_1.jpg",
      airport: {
        name: "Beijing Capital International Airport",
        code: "PEK",
      },
    },
    hotel: {
      name: "Fairmont Rio de Janeiro Copacabana",
      address:
        "No.7 E. 3rd Ring Rd Middle, Chaoyang District, Beijing, China, Chaoyang",
      imgurl:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/315670441.jpg?k=3cba65d79787c519a0f519fed270526d8f2265e037c86d56931a2ce3943b39b6&o=&hp=1",
      price: 88,
    },
  },
];

// import PainkillersImg from "./images/Screenshot 2021-09-13 at 16.20.06.png";

let ConcertAPIexample = [
  {
    venue: {
      city: "",
      country: "",
      name: "",
      imgurl: "",
      landmarks: "",
      landmarkimgurl: "",
    },
    hotel: {
      imgurl: "",
      name: "",
      rating: 45,
      price: 99,
    },
    concert: {
      artist: {
        name: "",
        imgurl: "",
      },
      date: "2021-09-20 ",
      startTime: "17:30",
      endTime: "19:30",
      price: 45,
    },
  },
];
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
let x = 0;
let i = 0;
let dummyTourData = [];
while (x < 60) {
  dummyTourData.push({
    ...placeData[i],
    concert: {
      artist: {
        name: artists[i],
        imgurl: artistsImgs[i],
      },
      date: genDate(),
      time: genTime().slice(0, 2),
      price: gigPrice(),
    },
  });
  i++;
  x++;
  if (i === 6) {
    i = 0;
    placeData = shuffle(placeData);
  }
}
// for (i in dummyTourData) {
//   console.log(
//     dummyTourData[i].concert.artist.name,
//     dummyTourData[i].venue.city,
//     dummyTourData[i].concert.date,
//     dummyTourData[i].hotel.name
//   );
// }
for (let x = 0; x < 6; x++) {
  console.log(dummyTourData[x]);
}
// console.log(dummyTourData[0]);
module.exports = dummyTourData;
