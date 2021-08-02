const string = `
.skin * {box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before，.skin*::after {box-sizing: border-box;}

.skin{
    position: relative;
    background: #ffe600;
    min-height: 100vh;
}

.yuan{
    position: absolute;
    background-color:black;
    width: 20px;
    height: 6px;
    top:-16px;
    left:-10px;
    border-radius: 10px 10px 0 0;
}

@keyframes wave {
    0%{
        transform: rotate(0deg);
    }
    34%{
        transform: rotate(10deg);
    }
    80%{
        transform: rotate(-10deg);
    }
    100%{
        transform: rotate(0deg);
    }
}

.nose:hover {
    transform-origin: center bottom;
    animation: wave .3s infinite linear;
}

.nose{
    position: absolute;
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    height:0px;
    width: 0px;
    left:50%;
    top: 145px;
    margin-left: -10px;
}
.eye{
    position: absolute;
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    left:50%;
    top:100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}

.eye::before{
    position: relative;
    content:''; 
    display: block; 
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    left:4px;
    top: 2px;
}

.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}

@keyframes moveEyeLeft {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(-360deg);
    }
}
@keyframes moveEyeRight {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}

.eye.left:hover::before{
    transform-origin: 27px 28px;
    animation: moveEyeLeft .5s infinite linear;
}
.eye.right:hover::before{
    transform-origin: 27px 28px;
    animation: moveEyeRight .5s infinite linear;
}
.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 180px;
    margin-left: -100px;
}

.mouth .up{
    position: relative;
    z-index: 1;
    top: -10px;
}

.mouth .up .lip{
    border:3px solid black;
    width: 90px;
    height:30px;
    border-top-color: transparent;
    position: absolute;
    background: #ffe600;
}

.mouth .up .lip.left{
    border-radius: 0 0 0 25px;
    border-right-color: transparent;
    transform: rotate(-20deg) translateX(2px);
    left: 50%;
    margin-left: -90px;
}
.mouth .up .lip.right{
    border-radius: 0 0 25px 0;
    border-left-color: transparent;
    transform: rotate(20deg) translateX(-2px);
    right: 50%;
    margin-right: -90px;
}

.mouth .down{
    position: absolute;
    height: 180px;
    width:100%;
    overflow: hidden;
    top: 3px;
}

.mouth .down .yuan1{
    border: 3px solid black;
    width: 150px;
    height: 5000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 90px/450px;  
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -160px;
    left: 50%;
    margin-left: -100px;
    background: #ff485f;
    border-radius: 100px;
}

.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 220px;
    margin-left: -44px;
    z-index: 3;
}

.face > img{
    position: absolute;
    top: 50%;
    left: 50%;
}
.face.left {
    transform:translateX(-170px);
    background: #ff0000;
    border-radius: 50%;
}

.face.left > img{
    transform: rotateY(180deg);
    transform-origin: 0 0;
}

.face.right {
    transform: translateX(170px);
    background: #ff0000;
    border-radius: 50%;
}
`

const player = {
    id : undefined,
    time : 100,
    ui : {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    n : 1,
    events: {
        '#btnPause' : 'pause',
        '#btnPlay' : 'play',
        '#btnSlow' : 'slow',
        '#btnNormal' : 'normal',
        '#btnFast' : 'fast'
    },
    init: () =>{
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents: () => {
        for(let key in  player.events) {
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key] // pause /play /slow
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        // 在控制台demo.scrollHeight即可得到scroll高度，使之自动下滚
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
        window.clearInterval(player.id)
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },
}

player.init()