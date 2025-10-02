function printColumnWise(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let col = 0; col < cols; col++) {
        let rowValues = "";
        for (let row = 0; row < rows; row++) {
            rowValues = rowValues + matrix[row][col] + " ";
        }
        console.log(rowValues.trim());
    }
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

printColumnWise(matrix);