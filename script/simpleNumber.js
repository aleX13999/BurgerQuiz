const simpleNumber2 = () => {
    let n = 2
    let N = 40
    cycle: for (i = n; i <= N; i++) {
        for (j = n; j < i; j++) {
            if (i % j == 0) continue cycle
        }
        console.log(i)
    }
}