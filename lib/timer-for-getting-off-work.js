const Timer = {
      timer: null,
      start: function (time  = "18:00") {
        const normalize = (num)=>Math.floor(Math.abs(num)).toString().padStart(2,'0');
        const hour = 60 * 60 * 1000;
        const minute = 60 * 1000;
        console.log("开启下班倒计时~(停止指令:stop)")
        this.timer = setInterval(() => {
          const times = time.split(":").map(Number);
          const target = new Date();
          target.setHours(times[0], times[1], 0, 0);
          const diff = target.valueOf() - Date.now();
          const h = normalize(diff / hour);
          const m = normalize(diff % hour / minute);
          const s = normalize(diff % minute / 1000);
          console.log(`${diff > 0 ? '距离下班还有' : '已经下班'}: ${h}:${m}:${s}!`)
        }, 1000);
      },
      stop: function () {
        console.log("停止下班倒计时~")
        clearInterval(this.timer)
      }
    };
