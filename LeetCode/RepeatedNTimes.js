let repeatedNTimes = function (A) {
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] === A[i + 1])
            return A[i]
    }
    if (A[0] === A[A.length - 2] || A[0] === A[A.length - 1]) {
        return A[0]
    }

    return A[1]
};

console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]))