function compareTriplets(a, b) {
    let aPoints = 0
    let bPoints = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) aPoints++
        if (a[i] < b[i]) bPoints++
    }
    return [aPoints, bPoints]
}
console.log(compareTriplets([17, 28, 30], [99, 16, 8]))