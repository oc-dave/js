function isAnagram(s, t) {
    s = s.replace(/\s/g, '').toLowerCase();
    t = t.replace(/\s/g, '').toLowerCase();

    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    return s === t;
}

let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s, t));