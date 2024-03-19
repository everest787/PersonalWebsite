import { useState, useEffect } from 'react';

function GameOfLife() { 
    var rows = Math.floor((window.innerHeight - 40) / 20);
    var cols = Math.floor((window.innerWidth - 20) / 10);

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
        if (!gridContainer) {
            // Throw error
            console.error("Problem: No div for the drid table!");
        }
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
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                grid[i][j] = 0;
                nextGrid[i][j] = 0;
            }
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
        console.log(rowcol)
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


    useEffect(() => {
        initialize();
      }, []);

    return (  
        <div className="gameoflife">
            <div id="gridContainer">
            </div>
            
            <div className="controls">
                <button id="start" /*onClick={() => startButtonHandler()}*/><span>Start</span></button>
                <button id="clear" /*onClick={() => clearButtonHandler()}*/><span>Clear</span></button>
                <button id="random" /*onClick={() => randomButtonHandler()}*/><span>Random</span></button>
            </div>
        </div>
    );
}

export default GameOfLife;