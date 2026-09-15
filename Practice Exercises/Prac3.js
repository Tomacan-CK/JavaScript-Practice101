const grid = 8;

    for (let col = 1; col <= grid; col++ ) {

        let line = "";

            for (let row = 1; row <= grid; row++) {

                    if ((col + row) % 2 === 0 ) {
                    line += " ";
                    }
                    else {
                    line += "#" 
                    }

        }

console.log (line);
}