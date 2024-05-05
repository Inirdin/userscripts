// ==UserScript==
// @name         RA_DownloadAllBadges
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Downloads all badges on game page into subfolder and names them accordingly.
// @author       Inirdin
// @match        https://retroachievements.org/game/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=retroachievements.org
// @grant        GM_download
// ==/UserScript==

var game = document.querySelectorAll('.text-h3 span:not(.text-sm)');
var badges = document.querySelectorAll('.flex .gap-x-3 .badgeimg, .flex .gap-x-3 .goldimagebig'); // .goldimagebig,  .achievementlist .goldimagebig, .achievementlist
var names = document.querySelectorAll('.flex .gap-x-3 .mr-1');

function downloadAllBadges() {
    var arrayLength = names.length;
    for (var i = 0; i < arrayLength; i++) {
        var pattern = /^.*(?=( \())/gm;
        var cleanName = names[i].innerText; //.match(pattern)
        var number = i+1;
        var badgeurl = badges[i].src.replace(/_lock.png/g, ".png");
        var newName = game[0].innerText + "/" + number + " - " + cleanName + ".png";
        var arg = {
            url: badgeurl,
            name: newName,
            conflictAction: "overwrite"
        };
        GM_download(arg);
    }
}

function addDownloadBtn() {
    var btn = document.createElement("button");
    btn.innerText = "Download all badges";
    btn.addEventListener("click", downloadAllBadges);
    btn.style.display = "block";
    btn.style.position = "absolute";
    btn.style.marginBottom = "25px";
    btn.style.color = "rgb(204, 153, 0)";
    var place = document.getElementsByClassName("py-3")[0];
    place.appendChild(btn);
}

addDownloadBtn();
console.log(badges);
console.log(names);
