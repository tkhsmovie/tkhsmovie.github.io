// マップデータ
var map = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 2, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
];

// プレイヤーの位置
var playerX = 1;
var playerY = 1;

// ゲームの表示要素を取得
var gameContainer = document.getElementById("game-container");

// ゲームの初期化処理
function initGame() {
    // マップを表示
    renderMap();

    // キーイベントを監視
    document.addEventListener("keydown", function (event) {
        handleKeyPress(event);
    });
}

// マップを表示する関数
function renderMap() {
    gameContainer.innerHTML = ""; // 以前のフレームをクリア

    for (var i = 0; i < map.length; i++) {
        var row = document.createElement("div");
        row.classList.add("row");

        for (var j = 0; j < map[i].length; j++) {
            var tile = document.createElement("div");
            tile.classList.add("tile");

            if (i === playerY && j === playerX) {
                tile.classList.add("player");
            } else if (map[i][j] === 1) {
                tile.classList.add("obstacle");
            } else if (map[i][j] === 2) {
                tile.classList.add("puzzle");
                tile.addEventListener("click", function () {
                    solvePuzzle();
                });
            }

            row.appendChild(tile);
        }

        gameContainer.appendChild(row);
    }
}

// キー入力処理
function handleKeyPress(event) {
    var keyPressed = event.keyCode;

    if (keyPressed === 37) { // 左矢印キー
        movePlayer(playerX - 1, playerY);
    } else if (keyPressed === 38) { // 上矢印キー
        movePlayer(playerX, playerY - 1);
    } else if (keyPressed === 39) { // 右矢印キー
        movePlayer(playerX + 1, playerY);
    } else if (keyPressed === 40) { // 下矢印キー
        movePlayer(playerX, playerY + 1);
    }
}

// プレイヤーの移動処理
function movePlayer(newX, newY) {
    if (map[newY][newX] !== 1) {
        playerX = newX;
        playerY = newY;
        renderMap();

        // マルチエンディング判定
        if (newX === map[0].length - 2 && newY === map.length - 2) {
            showEnding(true); // クリアエンディング
        }
    }
}

// パズルの解決処理
function solvePuzzle() {
    // パズルのロジックを実装する
    // パズルの解決に成功した場合は戦闘に進むなどの処理を実行する

    showBattle(); // バトル開始
}

// バトルの表示
function showBattle() {
    gameContainer.innerHTML = "バトル開始！";
    // バトルのロジックを実装する
    // 面白い戦闘を提供するための機能やアニメーションを追加する
}

// エンディングの表示
function showEnding(isClear) {
    gameContainer.innerHTML = isClear ? "クリアエンディング！" : "バッドエンディング！";
    // エンディングに関連する追加のロジックやアニメーションを実装する
}

// ゲームの初期化処理を呼び出す
initGame();
