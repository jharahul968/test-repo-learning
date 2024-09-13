function reverseString(word) {
    var reversedString = "";
    if (!word)
        return "word is empty";
    for (var i = word.length - 1; i >= 0; i--) {
        reversedString += word[i];
    }
    return reversedString;
}
var word = "Reverse this sentence";
console.log(reverseString(word));
