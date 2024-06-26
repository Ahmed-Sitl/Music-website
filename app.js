const music = new Audio("song1.mp3");
// music.play();

const songs = [
  {
    id: "1",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker</div>`,
    poster: "./0.jpg",
  },
  {
    id: "2",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./1.jpg",
  },
  {
    id: "3",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./2.jpg",
  },
  {
    id: "4",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./3.jpg",
  },
  {
    id: "5",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./1.jpg",
  },
  {
    id: "6",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./1.jpg",
  },
  {
    id: "7",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./1.jpg",
  },
  {
    id: "8",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./1.jpg",
  },
  {
    id: "9",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./3.jpg",
  },
  {
    id: "10",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./2.jpg",
  },
  {
    id: "11",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./0.jpg",
  },
  {
    id: "12",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./1.jpg",
  },
  {
    id: "13",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./1.jpg",
  },
  {
    id: "14",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./1.jpg",
  },
  {
    id: "15",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./1.jpg",
  },
  {
    id: "16",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./1.jpg",
  },
  {
    id: "17",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./1.jpg",
  },
  {
    id: "18",
    songName: `On May Way <br>
    <div class="subtitle">Alan Walker-Fade</div>`,
    poster: "./1.jpg",
  },
];

Array.from(document.getElementsByClassName("songItme")).forEach(
  (element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
  }
);

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];

masterPlay.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
  } else {
    music.pause();
    masterPlay.classList.remove("bi-pause-fill");
    masterPlay.classList.add("bi-play-fill");
    wave.classList.remove("active2");
  }
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playlistpaly")).forEach(
    (element) => {
      element.classList.add("bi-play-circle-fill");
      element.classList.remove("bi-pause-circle-fill");
    }
  );
};

const makeAllBackrounds = () => {
  Array.from(document.getElementsByClassName("songItme")).forEach((element) => {
    element.style.backround = "rgb(105, 105, 170, 0)";
  });
};

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playlistpaly")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      index = e.target.id;
      makeAllPlays();
      e.target.classList.remove("bi-play-circle-fill");
      e.target.classList.add("bi-pause-circle-fill");
      // music.src = `audio/${index}.mp3`;
      music.src = "song1.mp3";
      poster_master_play.src = "./3.jpg";
      music.play();
      let song_title = songs.filter((ele) => {
        return ele.id == index;
      });
      song_title.forEach((ele) => {
        let { songName } = ele;
        title.innerHTML = songName;
      });
      masterPlay.classList.remove("bi-play-fill");
      masterPlay.classList.add("bi-pause-fill");
      wave.classList.add("active2");
      music.addEventListener("ended", () => {
        masterPlay.classList.remove("bi-pause-fill");
        masterPlay.classList.add("bi-play-fill");
        makeAllPlays();
        wave.classList.remove("active2");
      });
      makeAllBackrounds();

      Array.from(document.getElementsByClassName("songItme"))[
        `${index - 1}`
      ].style.backround = "rgb(105, 105, 170, .1)";
    });
  }
);

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min = Math.floor(music_dur / 60);
  let sec = Math.floor(music_dur % 60);

  if (sec < 10) {
    sec = `0${sec}`;
  }

  currentEnd.innerText = `${min}:${sec}`;
  let min1 = Math.floor(music_curr / 60);
  let sec1 = Math.floor(music_curr % 60);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }

  currentStart.innerText = `${min1}:${sec1}`;
  let progressbar = parseInt((music.currentTime / music.duration) * 100);
  seek.value = progressbar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

//
let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_dot = document.getElementById("vol_dot");
let vol_bar = document.getElementsByClassName("vol_bar")[0];

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-up-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-up-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.add("bi-volume-up-fill");
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});
//

let left_scroll = document.getElementById("left_scroll");
let right_scroll = document.getElementById("right_scroll");
let pop_song = document.getElementsByClassName("pop_song")[0];

left_scroll.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

right_scroll.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});

let left_scrolls = document.getElementById("left_scrolls");
let right_scrolls = document.getElementById("right_scrolls");
let item = document.getElementsByClassName("item")[0];

left_scrolls.addEventListener("click", () => {
  item.scrollLeft -= 330;
});

right_scrolls.addEventListener("click", () => {
  item.scrollLeft += 330;
});
