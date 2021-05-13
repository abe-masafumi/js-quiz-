'use strict';
{
  let memoryTime;

  let startTime;
  let timeoutId;
  function countUp() {
    const d = new Date(Date.now() - startTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
  
    timer.textContent = `${m}:${s}.${ms}`;
    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }
  let tumo = [];

  function getRandom( min, max ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
    return random;
}

  class Panel {
    constructor() {
      // 要素の取得
      // this.next = document.getElementById('next');
      this.timer = document.getElementById('timer');
      this.imgplace = document.getElementById('imgplace');
      this.h1 = document.querySelector('h1');
      this.batu = document.getElementById('batu');
      this.maru = document.getElementById('maru');
      this.start = document.getElementById('start');
      this.left = document.getElementById('left');
      this.right = document.getElementById('right');
      this.gamestart = document.getElementById('gamestart');
      this.op = document.getElementById('op');

      this.gamestart.addEventListener('click', () => {
        this.op.classList.add('none');
      });


      this.count = 0;
      this.start.addEventListener('click', () => {
      this. started();
      });

      this.collectname = [];
    }

    widthChange() {
      // this.left.classList.remove('left');
      // this.right.classList.remove('right');
      this.left.classList.add('left');
      this.right.classList.add('right');
    }

    started() {
      quiz.anser1.classList.remove('smoke');
      quiz.anser2.classList.remove('smoke');
      quiz.anser3.classList.remove('smoke');
      this.start.classList.add('smoke');
      this.imgplace.src = quiz.imgs[quiz.arry1[quiz.imgrandomcout]];
      startTime = Date.now();
      countUp();
      quiz.createRandom();
      quiz.createAnser();
      this.widthChange();
    }

    next() {
      $('[id^=anser]').removeClass("smoke");
        if (this.count == quiz.imgs.length -1) {
          this.ending();
          this.seikaiimg();
      } else {
          quiz.imgrandomcout++;
          panel.count++;
          this.imgplace.src = quiz.imgs[quiz.arry1[quiz.imgrandomcout]];
          this.batu.classList.add('none');
          this.maru.classList.add('none');
          countUp();
          quiz.createRandom();
          quiz.createAnser();
          this.widthChange();
      }
    }
    
    ending() {
      this.maru.classList.add('none')
      this.batu.classList.add('none')
      const mask = document.getElementById('mask');
      const seikai = document.getElementById('seikai');
      const seikaitext = document.getElementById('seikaitext');
      mask.classList.remove('none');
      seikai.classList.remove('none');
      seikaitext.classList.remove('none');
      seikaitext.textContent = quiz.colectcout;
      // const timetext = document.getElementById('Timetext');
      // memoryTime = `${m}:${s}.${ms}`;
      // timetext.textContent = memoryTime;
    }
    seikaiimg() {
      const ul = document.getElementById('ul');
      ul.classList.remove('none');
      for (let i = 0; i < tumo.length; i++) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = this.collectname[i];
        const img = document.createElement('img');
        img.src = tumo[i];
        li.appendChild(p);
        li.appendChild(img);
        ul.appendChild(li);
      }
    }
  }

  const panel = new Panel();

  class Quiz {
    constructor() {
      this.imgs = [
        // "img/アーモンドアイ.png",
        "img/グランアレグリア.png",
        // "img/ディープインパクト.png",
        "img/アフランシール.png",
        "img/イベリス.png",
        "img/クリスティ.png",///6
        "img/ランブリングアレー.png",
        "img/リアアメリア.png",
        "img/レシステンシア.png",
        "img/サウンドキアラ.png",
        "img/ディアンドル１.png",
        "img/デゼル.png",
        "img/シゲルピンクダイヤ.png",
        "img/プールヴィル.png",
        "img/スマイルカナ.png",
        "img/マジックキャッスル.png",
        "img/ダノンファンタジー.png",
        "img/レッドベルディエス.png",
        "img/マルターズディオサ.png",
        "img/テルツェット.png",
      ];
      
      this.anser = [
        // ["アーモンドアイ", "グランアレグリア", "テルツェット","アーモンドアイ"],
        ["グランアレグリア", "アーモンドアイ", "イベリス","グランアレグリア"],
        // ["ディープインパクト", "グランアレグリア", "ウインディー","ディープインパクト"],
        ["アフランシール", "デゼル", "トランセル","アフランシール"],
        ["イベリス", "ウインディー", "レッドベルディエス","イベリス"],
        ["クリスティ", "サウンドキアラ", "アフランシール","クリスティ"],
        ["ランブリングアレー", "クリスティ", "サウンドキアラ","ランブリングアレー"],
        ["リアアメリア", "グランアレグリア", "テルツェット","リアアメリア"],
        ["レシステンシア", "アーモンドアイ", "グランアレグリア","レシステンシア"],
        ["サウンドキアラ", "クリスティ", "リアアメリア","サウンドキアラ"],
        ["ディアンドル", "ランブリングアレー", "マジックキャッスル","ディアンドル"],
        ["デゼル", "マルターズディオサ", "ダノンファンタジー","デゼル"],
        ["シゲルピンクダイヤ", "グランアレグリア", "レシステンシア","シゲルピンクダイヤ"],
        ["プールヴィル", "ランブリングアレー", "レッドベルディエス","プールヴィル"],
        ["スマイルカナ", "クリスティ", "リアアメリア","スマイルカナ"],
        ["マジックキャッスル", "アーモンドアイ", "イベリス","マジックキャッスル"],
        ["ダノンファンタジー", "デゼル", "アフランシール","ダノンファンタジー"],
        ["レッドベルディエス", "グランアレグリア", "スマイルカナ","レッドベルディエス"],
        ["マルターズディオサ", "プールヴィル", "リアアメリア","マルターズディオサ"],
        ["テルツェット", "ランブリングアレー", "レシステンシア","テルツェット"],
      ];
      this.anser1 = document.getElementById('anser1');
      this.anser2 = document.getElementById('anser2');
      this.anser3 = document.getElementById('anser3');

      this.colectcout = 0;
      this.randomcount = 0;

      $('[id^=anser]').on('click', function (e) {
        $('[id^=anser]').addClass("smoke");
        panel.left.classList.remove('left');
        panel.right.classList.remove('right');

        setTimeout(() => {
          panel.next();
        }, 1000);

        if (e.target.textContent == quiz.anser[quiz.arry1[quiz.imgrandomcout]][3]) {
          panel.collectname.push(quiz.anser[quiz.arry1[quiz.imgrandomcout]][3]);
          console.log(panel.collectname);
          clearTimeout(timeoutId);
          panel.maru.classList.remove('none');
          tumo.push(quiz.imgs[quiz.arry1[quiz.imgrandomcout]]);
          console.log(tumo);
          console.log("collect");
          quiz.colectcout++;
        } else {
          clearTimeout(timeoutId);
          panel.batu.classList.remove('none');
          console.log("boo...");
        }
      });
      this.arry1 = [];

      this.createRandomimg();
      this.imgrandomcout = 0;
    }
    createRandom(){

      this.random = [];
      for (let i = 0; i <  this.anser[0].length -1; i++) {
        this.random.push(i);
      }
      let arrrrr = [];
      for (let i = 0; i < this.random.length;) {
      const num = this.random.splice(Math.floor(Math.random() * this.random.length), 1)[0];
      arrrrr.push(num);
      }
      console.log(arrrrr);
      this.arry = arrrrr;
      
      return arrrrr;

      }
    createRandomimg() {
      this.random1 = [];
      for (let i = 0; i <  this.imgs.length; i++) {
        this.random1.push(i);
      }

      for (let i = 0; i < this.random1.length;) {
      const num1 = this.random1.splice(Math.floor(Math.random() * this.random1.length), 1)[0];
      this.arry1.push(num1);
      }
      console.log(this.arry1);

      return this.arry1;
    }

    createAnser() {
      this.anser1.textContent = this.anser[this.arry1[this.imgrandomcout]][this.arry[0]];
      this.anser2.textContent = this.anser[this.arry1[this.imgrandomcout]][this.arry[1]];
      this.anser3.textContent = this.anser[this.arry1[this.imgrandomcout]][this.arry[2]];
      panel.h1.textContent = `${panel.count}門目`;
    }
    }

  const quiz = new Quiz();
}