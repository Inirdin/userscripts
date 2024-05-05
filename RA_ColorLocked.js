// ==UserScript==
// @name         RA_ColorLocked
// @description  Colors Locked Achievements
// @version      0.2
// @author       Inirdin
// @match        https://retroachievements.org/game/*
// @match        https://retroachievements.org/achievement/*
// @match        https://retroachievements.org/user/*
// @icon         https://www.google.com/s2/favicons?domain=retroachievements.org
// @grant        none
// ==/UserScript==

function removeStringFromImageSrc(className, stringToRemove) {
    document.querySelectorAll('.' + className).forEach(element => {
        if (element.tagName === 'IMG') {
            let src = element.getAttribute('src');
            if (src && src.includes(stringToRemove)) {
                element.src = src.replace(stringToRemove, '');
            }
        }
    });
}

removeStringFromImageSrc('badgeimglarge', '_lock');
removeStringFromImageSrc('badgeimg', '_lock');


////////// OLD SCRIPT "RA_LockedColored" by Xymjak

//const LockedColored = (() => {
//  const LOCK_TEXT = '_lock.png';
//
//  const ProcessImage = badge => { if (badge.src.slice(-LOCK_TEXT.length) === LOCK_TEXT) badge.src = `${badge.src.slice(0, -LOCK_TEXT.length)}.png`; };
//  const GamePage = () => [...(document.getElementsByClassName('set-achievements-list')[0]?.getElementsByClassName('badgeimg') || [])].forEach(ProcessImage);
//  const AchPage = () => ProcessImage(document.getElementById('achievemententryicon').getElementsByTagName('img')[0]);
//
//  return { achievement: AchPage, game: GamePage };
//})();
//
//LockedColored[window.location.pathname.split('/')[1]]?.();