import { useEffect } from 'react';

function GameOfLife() { 
    var rows = Math.floor((window.innerHeight - 60) / 20);
    var cols = Math.floor((window.innerWidth - 20) / 20);

    var playing = false;

    var grid = new Array(rows);
    var nextGrid = new Array(rows);

    var timer;
    var reproductionTime = 100;


    // Initialize
    function initialize() {
        createTable();
        initializeGrids();
        resetGrids();
    }

    // Lay out the board
    function createTable() {
        var gridContainer = document.getElementById('gridContainer');
        var table = document.createElement("table");
        
        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < cols; j++) {//
                var cell = document.createElement("td");
                cell.setAttribute("id", i + "_" + j);
                cell.setAttribute("class", "dead");
                cell.addEventListener("click", cellClickHandler);
                tr.appendChild(cell);
            }
            table.appendChild(tr);
        }
        gridContainer.appendChild(table);
        }

    function initializeGrids() {
        for (var i = 0; i < rows; i++) {
            grid[i] = new Array(cols);
            nextGrid[i] = new Array(cols);
        }
    }

    function resetGrids() {
        try {
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    grid[i][j] = 0;
                    nextGrid[i][j] = 0;
                }
            }
        }
        catch(e){
            console.log(e)
            console.log("Rows: " + rows + " Cols: " + cols)
            console.log("Grid: " + grid[0] + " length: "+ grid.length)

        }
    }

    function copyAndResetGrid() {
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                grid[i][j] = nextGrid[i][j];
                nextGrid[i][j] = 0;
            }
        }
    }

    function cellClickHandler(){
        var rowcol = this.getAttribute("id").split("_");
        var row = rowcol[0];
        var col = rowcol[1];
        
        var classes = this.getAttribute("class");
        if(classes.indexOf("live") > -1) {
            this.setAttribute("class", "dead");
            grid[row][col] = 0;
        } else {
            this.setAttribute("class", "live");
            grid[row][col] = 1;
        }
    }

    
    function updateView() {
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                var cell = document.getElementById(i + "_" + j);
                if (grid[i][j] === 0) {
                    cell.setAttribute("class", "dead");
                } else {
                    cell.setAttribute("class", "live");
                }
            }
        }
    }

    function randomButtonHandler() {
        if (playing) return;
        clearButtonHandler();
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                var isLive = Math.round(Math.random());
                if (isLive === 1) {
                    var cell = document.getElementById(i + "_" + j);
                    cell.setAttribute("class", "live");
                    grid[i][j] = 1;
                }
            }
        }
    }

    // clear the grid
    function clearButtonHandler() {
        console.log("Clear the game: stop playing, clear the grid");
        
        playing = false;
        clearTimeout(timer);
        
        var cellsList = document.getElementsByClassName("live");
        // convert to array first, otherwise, you're working on a live node list
        // and the update doesn't work!
        var cells = [];
        for (var i = 0; i < cellsList.length; i++) {
            cells.push(cellsList[i]);
        }
        
        for (var i = 0; i < cells.length; i++) {
            cells[i].setAttribute("class", "dead");
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
        if (grid[row][col] === 1) {
            if (numNeighbors < 2) {
                nextGrid[row][col] = 0;
            } else if (numNeighbors === 2 || numNeighbors === 3) {
                nextGrid[row][col] = 1;
            } else if (numNeighbors > 3) {
                nextGrid[row][col] = 0;
            }
        } else if (grid[row][col] === 0) {
                if (numNeighbors === 3) {
                    nextGrid[row][col] = 1;
                }
            }
        }
        
    function countNeighbors(row, col) {
        var count = 0;
        if (row-1 >= 0) {
            if (grid[row-1][col] === 1) count++;
        }
        if (row-1 >= 0 && col-1 >= 0) {
            if (grid[row-1][col-1] === 1) count++;
        }
        if (row-1 >= 0 && col+1 < cols) {
            if (grid[row-1][col+1] === 1) count++;
        }
        if (col-1 >= 0) {
            if (grid[row][col-1] === 1) count++;
        }
        if (col+1 < cols) {
            if (grid[row][col+1] === 1) count++;
        }
        if (row+1 < rows) {
            if (grid[row+1][col] === 1) count++;
        }
        if (row+1 < rows && col-1 >= 0) {
            if (grid[row+1][col-1] === 1) count++;
        }
        if (row+1 < rows && col+1 < cols) {
            if (grid[row+1][col+1] === 1) count++;
        }
        return count;
    }


    useEffect(() => {
        initialize();
      }, []);

    return (  
        <div className="gameoflife">
            <div id="gridContainer">
            </div>
            
            <div className="controls">
                <button className="controls__button" onClick={() => randomButtonHandler()}>
                <span>Random</span>
                </button>
                <button className="controls__button" onClick={() => startButtonHandler()}>
                <span>Play</span>
                </button>
                <button className="controls__button" onClick={() => clearButtonHandler()}>
                <span>Clear</span>
                </button>
            </div>
        </div>
    );
}

export default GameOfLife;