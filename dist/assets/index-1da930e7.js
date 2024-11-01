(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature").then(e=>e.json()).then(e=>{document.body.style.backgroundImage=`url(${e.urls.regular})`,document.getElementById("author").textContent=`By artist: ${e.user.name}`}).catch(e=>{document.body.style.backgroundImage=`url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`,document.getElementById("author").textContent="By: Dodi Achmad"});fetch("https://api.coingecko.com/api/v3/coins/ethereum").then(e=>{if(!e.ok)throw Error("Something went wrong");return e.json()}).then(e=>{document.getElementById("crypto-top").innerHTML=`
            <img src=${e.image.small} />
            <span>${e.name}</span>
        `,document.getElementById("crypto").innerHTML+=`
            <p>🎯: $${e.market_data.current_price.usd}</p>
            <p>👆: $${e.market_data.high_24h.usd}</p>
            <p>👇: $${e.market_data.low_24h.usd}</p>
        `}).catch(e=>console.error(e));function s(){const e=new Date;document.getElementById("time").textContent=e.toLocaleTimeString("en-us",{timeStyle:"short"})}setInterval(s,1e3);navigator.geolocation.getCurrentPosition(e=>{fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${e.coords.latitude}&lon=${e.coords.longitude}&units=metric`).then(r=>{if(!r.ok)throw Error("Weather data not available");return r.json()}).then(r=>{const n=`http://openweathermap.org/img/wn/${r.weather[0].icon}@2x.png`;document.getElementById("weather").innerHTML=`
                <img src=${n} />
                <p class="weather-temp">${Math.round(r.main.temp)}°C</p>
                <p class="weather-city">${r.name}</p>
            `}).catch(r=>console.error(r))});
