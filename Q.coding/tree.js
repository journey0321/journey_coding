
// 정삼각형
function tree(line) {
    let result = '';

    for (let i = 1; i < line*2; i+=2) {
        for (let j = 1; j < ((line * 2) - i) / 2; j++) {
            result += ' ';
        }
        for (let l = 1; l <= i; l++) {
            result += '*';
        }
        result += '\n';
    }
    return result;
    
}