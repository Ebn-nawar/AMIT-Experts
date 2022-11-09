let heights = [4,4,4,1,3],
    maxH = []

    function countTheTallest(towersHeight) {
    for (let i = 0; i < towersHeight.length; i++) {
        if (towersHeight[i] === Math.max(...towersHeight)) {
            towersHeight[i]
            maxH.push(towersHeight[i])
        }
    }
    console.log(maxH.length);
}

countTheTallest(heights)



heights.filter(function name(params) {
    
})