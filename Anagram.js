// String anagram
// "naman" -> "manan" = anagram
// "start" -> "trust" = not an anagram

// Conditions ( e.g - "hello" -> "llheo")
// 1. Check the length for both the given string ( same legth 5 and 5)
// 2. Count the character or element in first string ( {h:1, e:1, l:2, o:1} )
// 3. Now compare with second string. If found then reduce the count ( {h:0, e:0, l:0, o:0} )
// 4. If final count is zero then the strings are anagram otherwise not an anagram
// 5. Time complexcity = o( n )
const string1 = "hello";
const string2 = "llheo";

// Method 1
const checkAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let countChar = {};
  for (let char of str1) {
    // console.log(char);
    countChar[char] = (countChar[char] || 0) + 1;
    // console.log(countChar[char]);
  }

  //   console.log(countChar);
  for (let item of str2) {
    if (!countChar[item]) {
      return false;
    }
    countChar[item] -= 1;
  }

  return true;
};

const ans = checkAnagram(string1, string2);
console.log(ans);

// Method 2
const isAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return "No";
  }

  let obj = {};
  for (let i = 0; i < string1.length; i++) {
    if (obj[string1[i]] === undefined) {
      obj[string1[i]] = 1;
    } else {
      obj[string1[i]]++;
    }
  }
  //   console.log(obj );
  for (let j = 0; j < string2.length; j++) {
    if (!obj[string2[j]]) {
      return "No";
    }
    obj[string2[j]] -= 1;
  }

  return "Yes";
};

const res = isAnagram(string1, string2);
console.log(res);
