let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")
let homePoint = 0
let awayPoint = 0

function onePointHome() {
    homePoint += 1
    homeScore.textContent = homePoint
}
function twoPointsHome() {
    homePoint += 2
    homeScore.textContent = homePoint
}
function threePointsHome() {
    homePoint += 3
    homeScore.textContent = homePoint
}
function onePointAway() {
    awayPoint += 1
    awayScore.textContent = awayPoint
}
function twoPointsAway() {
    awayPoint += 2
    awayScore.textContent = awayPoint
}
function threePointsAway() {
    awayPoint += 3
    awayScore.textContent = awayPoint
}