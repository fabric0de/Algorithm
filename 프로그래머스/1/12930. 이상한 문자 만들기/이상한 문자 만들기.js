function solution(s) {
    let words = s.split(" ");
    let transformedWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let transformedWord = '';

        for (let j = 0; j < word.length; j++) {
            transformedWord += j % 2 === 0 ? word[j].toUpperCase() : word[j].toLowerCase();
        }

        transformedWords.push(transformedWord);
    }

    return transformedWords.join(" ");
}
