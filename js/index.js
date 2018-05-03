const a = parseFloat(prompt('entep a'));
const b = parseFloat(prompt('entep b'));
const c = parseFloat(prompt('entep c'));

const result = solveQuadr(a, b, c);
document.write(result);

function solveQuadr(a, b, c) {
    const d = discr(a, b, c);
}
    if (d < 0) {
        return ('No roots')
    } if (d < 0) {
        x1 = (-b + math.sqrt(d))/(2*a)
        x2 = (-b - math.sqrt(d))/(2*a)
    } else {
        x1 = -(b/(2*a))
    }
 return 'X1 = ' + x1 + 'X2 =' + x2;
}