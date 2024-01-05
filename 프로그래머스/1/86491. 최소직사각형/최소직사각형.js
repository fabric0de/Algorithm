function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        let [w, h] = sizes[i];

        let larger = Math.max(w, h);
        let smaller = Math.min(w, h);

        maxWidth = Math.max(maxWidth, larger);
        maxHeight = Math.max(maxHeight, smaller);
    }

    return maxWidth * maxHeight;
}
