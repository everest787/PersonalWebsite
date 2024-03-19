
        function updateView() {
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    var cell = document.getElementById(i + "_" + j);
                    if (grid[i][j] == 0) {
                        cell.setAttribute("className", "dead");
                    } else {
                        cell.setAttribute("className", "live");
                    }
                }
            }
        }

    function randomButtonHandler() {
        console.log("hello?")
        if (playing) return;
        clearButtonHandler();
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                var isLive = Math.round(Math.random());
                if (isLive == 1) {
                    var cell = document.getElementById(i + "_" + j);
                    cell.setAttribute("className", "live");
                    grid[i][j] = 1;
                }
            }
        }
    }

    // clear the grid
    function clearButtonHandler() {
        console.log("Clear the game: stop playing, clear the grid");
        
        playing = false;
        var startButton = document.getElementById('start');
        clearTimeout(timer);
        
        var cellsList = document.getElementsByClassName("live");
        // convert to array first, otherwise, you're working on a live node list
        // and the update doesn't work!
        var cells = [];
        for (var i = 0; i < cellsList.length; i++) {
            cells.push(cellsList[i]);
        }
        
        for (var i = 0; i < cells.length; i++) {
            cells[i].setAttribute("className", "dead");
        }
        resetGrids();
    }

    // start/pause/continue the game
    function startButtonHandler() {
        if (playing) {
            playing = false;
            clearTimeout(timer);
        } else {
            playing = true;
            play();
        }
    }

    // run the life game
    function play() {
        computeNextGen();
        
        if (playing) {
            timer = setTimeout(play, reproductionTime);
        }
    }

    function computeNextGen() {
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                applyRules(i, j);
            }
        }
        
        // copy NextGrid to grid, and reset nextGrid
        copyAndResetGrid();
        // copy all 1 values to "live" in the table
        updateView();
    }

    // RULES
    // Any live cell with fewer than two live neighbours dies, as if caused by under-population.
    // Any live cell with two or three live neighbours lives on to the next generation.
    // Any live cell with more than three live neighbours dies, as if by overcrowding.
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

    function applyRules(row, col) {
        var numNeighbors = countNeighbors(row, col);
        if (grid[row][col] == 1) {
            if (numNeighbors < 2) {
                nextGrid[row][col] = 0;
            } else if (numNeighbors == 2 || numNeighbors == 3) {
                nextGrid[row][col] = 1;
            } else if (numNeighbors > 3) {
                nextGrid[row][col] = 0;
            }
        } else if (grid[row][col] == 0) {
                if (numNeighbors == 3) {
                    nextGrid[row][col] = 1;
                }
            }
        }
        
    function countNeighbors(row, col) {
        var count = 0;
        if (row-1 >= 0) {
            if (grid[row-1][col] == 1) count++;
        }
        if (row-1 >= 0 && col-1 >= 0) {
            if (grid[row-1][col-1] == 1) count++;
        }
        if (row-1 >= 0 && col+1 < cols) {
            if (grid[row-1][col+1] == 1) count++;
        }
        if (col-1 >= 0) {
            if (grid[row][col-1] == 1) count++;
        }
        if (col+1 < cols) {
            if (grid[row][col+1] == 1) count++;
        }
        if (row+1 < rows) {
            if (grid[row+1][col] == 1) count++;
        }
        if (row+1 < rows && col-1 >= 0) {
            if (grid[row+1][col-1] == 1) count++;
        }
        if (row+1 < rows && col+1 < cols) {
            if (grid[row+1][col+1] == 1) count++;
        }
        return count;
    }