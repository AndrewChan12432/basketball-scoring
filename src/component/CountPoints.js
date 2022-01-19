import React from 'react'

export default function CountPoints() {
function checkFoul(e){
e.target.classList.add("foulColor");
let getElement = e.target.innerHTML;
let toNumber = parseInt(getElement);
if(e.target.id === "foulP1"){
   let getId = document.querySelector(".teamA-fouls");
   let getHtml = getId.innerHTML
   let getNum = parseInt(getHtml);
   if(getNum < 5){
   getNum++;
   getId.innerHTML = getNum;
   }
   if(getNum === 5){
      getId.classList.add("glow-red")
   }
}else{
   let getId = document.querySelector(".teamB-fouls");
   let getHtml = getId.innerHTML
   let getNum = parseInt(getHtml);
   if(getNum < 5){
       getNum++;
       getId.innerHTML = getNum;
   }
   if(getNum === 5) {
    getId.classList.add("glow-blue")
   }
}
if(toNumber < 5) {
 toNumber++
 e.target.innerHTML = toNumber;
}else{
 console.log("over")
}
}
function showBtn(e){
    e.target.nextSibling.classList.add("transform");
    e.target.nextSibling.children[1].classList.add("display-it")
}
function addScore(e) {
    e.target.parentElement.parentElement.classList.remove("transform");
    // get point A as a number
    let countPointA = document.querySelector(".pointA");
    let pointAHtml = countPointA.innerHTML;
    let pointANum = parseInt(pointAHtml)
    // get point B as a number
    let countPointB = document.querySelector(".pointB");
    let pointBHtml = countPointB.innerHTML;
    let pointBNum = parseInt(pointBHtml)
    // get the parents element
    let findParent = e.target.parentElement.parentElement.parentElement.parentElement
    let buttonChange = e.target.parentElement.parentElement.parentNode.firstChild.nextSibling
    let buttonHtml = buttonChange.innerHTML
    let changeNum = parseInt(buttonHtml)
        if(e.target.innerHTML === "+3"){
            changeNum += 3;
            buttonChange.innerHTML = changeNum
            if(findParent.classList[0] === "players-score-A"){
             pointANum += 3;
             countPointA.innerHTML = pointANum 
            }else{
             pointBNum += 3;
             countPointB.innerHTML = pointBNum
            }
        }else if(e.target.innerHTML === "+2"){
            changeNum += 2;
            buttonChange.innerHTML = changeNum
            if(findParent.classList[0] === "players-score-A"){
            pointANum += 2;
            countPointA.innerHTML = pointANum 
            }else{
            pointBNum += 2;
            countPointB.innerHTML = pointBNum
            }
        }else if(e.target.innerHTML === "+1"){
            changeNum += 1;
            buttonChange.innerHTML = changeNum
            if(findParent.classList[0] === "players-score-A"){
            pointANum += 1;
            countPointA.innerHTML = pointANum 
            }else{
            pointBNum += 1;
            countPointB.innerHTML = pointBNum
            }
        }else{
            if( changeNum > 0){
            changeNum -= 1;
            buttonChange.innerHTML = changeNum
            if(findParent.classList[0] === "players-score-A"){
            pointANum -= 1;
            countPointA.innerHTML = pointANum 
            }else{
            pointBNum -= 1  ;
            countPointB.innerHTML = pointBNum
            }
            }
        }
}
    return (
        <div className="count-points">
            <div className="black">
                <div className="team-score d-flex justify-content-between text-center">
                    <div className="teamA">
                        <h5>teamA</h5>
                        <div className="pointA">0</div>
                    </div>
                    <div className="teamB">
                        <h5>teamB</h5>
                        <div className="pointB">0</div>
                    </div>
                </div>
                    <div className="team-fouls d-flex justify-content-around">
                        <div className="arrow-left"></div>
                        <div className="foul-counts d-flex align-items-center">
                           <div className="teamA-fouls">0</div>
                           <p>Team Foul</p>
                           <div className="teamB-fouls">0</div>
                        </div>
                        <div className="arrow-right"></div>
                    </div>
            </div>
            <div className="player-score d-flex justify-content-center">
                <div className="players-score-A d-flex">
                <div className="player-div">
                    <p>1</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>
                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP1" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>2</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP1" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>3</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP1" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>4</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP1" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>5</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP1" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>6</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP1" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>7</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP1" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>8</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP1" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>9</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP1" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>10</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP1" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>11</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP1" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>12</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP1" onClick={checkFoul}>0</button>
                </div>
                </div>
                <div className="players-score">
                    <p>players</p>
                    <p>scores</p>
                    <p>fouls</p>
                </div>
                <div className="players-score-B d-flex">
                <div className="player-div">
                    <p>1</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP2" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>2</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP2" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>3</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foul2" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>4</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP2" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>5</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP2" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>6</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP2" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>7</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP2" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>8</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP2" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>9</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP2" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>10</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add button-special">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP2" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>11</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add button-special">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP2" onClick={checkFoul}>0</button>
                </div>
                <div className="player-div">
                    <p>12</p>
                    <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                    <div className="no-display">
                        <div className="button-add button-special">
                        <button onClick={addScore}>+3</button>
                        <button onClick={addScore}>+2</button>
                        <button onClick={addScore}>+1</button>
                        <button onClick={addScore}>-1</button>

                        </div>
                        <div className="bground"></div>
                    </div>
                    <button className="foulBox" id="foulP2" onClick={checkFoul}>0</button>
                </div>
                </div>
            </div>
        </div>
    )
}
