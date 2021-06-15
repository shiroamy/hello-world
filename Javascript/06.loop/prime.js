let n

n = prompt('IsPrime ? Enter a number :')
if (n > 1) {
    nextPrime: for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime
        }
        alert(i)
    }
} else alert('Please enter a number that greater than 1.')