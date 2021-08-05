//拿到时分秒
let hours = document.querySelector('.hour');
let minutes = document.querySelector('.minute');
let seconds = document.querySelector('.second');

//拿到要显示的时间
let time = document.querySelector('.time');

setInterval(() => {
    //获取当前时间
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let hour = date.getHours() % 12;
    let minute = date.getMinutes();
    let second = date.getSeconds();

    time.innerHTML = `${year}年${month}月${day}日${date.getHours()}:${minute}:${second}`

    hours.style.transform = `translate(-50%, -100%) rotate(${hour*30}deg)`;
    minutes.style.transform = `translate(-50%, -100%) rotate(${minute*6}deg)`;
    seconds.style.transform = `translate(-50%, -100%) rotate(${second*6}deg)`;
}, 1000)