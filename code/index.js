
// 1. FizzBuzz
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
*/




// 2. Two Sum
/*
const nums = [2, 7, 11, 15];
const target = 13;

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

const result = twoSum(nums, target);
console.log(result);
*/




// 3. Reverse Integer
/*
function reverseInteger(x) {
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);

    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }

    return reversed;
}

console.log(reverseInteger(-123));
*/




// 4. Palindrome Number
/*
function isPalindrome(x) {
	if (typeof x !== 'number' || isNaN(x) || x < 0) {
		return false;
	}
	
	return x.toString() === x.toString().split('').reverse().join('');
}

console.log(isPalindrome(121));
*/




// 5. Roman to Integer
/*
For input "MCMXCIV":
    M (1000) → add 1000 (result = 1000)
    C (100) < M (1000) → add (1000-100) → result = 1900, skip M
    X (10) < C (100) → add (100-10) → result = 1990, skip C
    I (1) < V (5) → add (5-1) → result = 1994, skip V
    Final result: 1994
*/
/*
function romanToInt(s) {
	const romanMap = {
		'I' : 1,
		'V' : 5,
		'X' : 10,
		'L' : 50,
		'C' : 100,
		'D' : 500,
		'M' : 1000
	};
	
	let result = 0;
	
	for (let i = 0; i < s.length; i++) {
		const current = romanMap[s[i]];
		const next = romanMap[s[i + 1]];
	
		if (next && current < next) {
			result += next - current;
			i++;
		} else {
			result += current;
		}
	}
	
	return result;
}

console.log(romanToInt('MCMXCIV'));
*/




// 6. Integer to Roman
/*
Start with 58
	58 ≥ 1000? No → move to next value (900)
    58 ≥ 900? No → move to next value (500)
    58 ≥ 500? No → move to next value (400)
	58 ≥ 400? No → move to next value (100)
	58 ≥ 100? No → move to next value (90)
	58 ≥ 90? No → move to next value (50)
	58 ≥ 50? Yes → Add "L", subtract 50 → roman = "L", num = 8
		8 ≥ 50? No → exit inner loop
	Move to next value (40)
	8 ≥ 40? No → move to next value (10)
	8 ≥ 10? No → move to next value (9)
	8 ≥ 9? No → move to next value (5)
	8 ≥ 5? Yes → Add "V", subtract 5 → roman = "LV", num = 3
		3 ≥ 5? No → exit inner loop
	Move to next value (4)
	3 ≥ 4? No → move to next value (1)
	3 ≥ 1? Yes → Add "I", subtract 1 → roman = "LVI", num = 2
		2 ≥ 1? Yes → Add "I", subtract 1 → roman = "LVII", num = 1
			1 ≥ 1? Yes → Add "I", subtract 1 → roman = "LVIII", num = 0
				0 ≥ 1? No → exit inner loop
	num is now 0 → exit outer loop
Final result: "LVIII"
*/
/*
function intToRoman(num) {
	const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	const sym =	["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	
	let roman = '';
	let i = 0;
	
	while (num > 0) {
		while (num >= val[i]) {
			roman += sym[i];
			num -= val[i];
		}
		i++;
	}
	
	return roman;
}

console.log(intToRoman(58));
*/




// 7. Count and Say
/*
Start with "1"

Next iteration (i=2):
	Read "1" → "one 1" → "11"

Next iteration (i=3):
	Read "11" → "two 1s" → "21"

Next iteration (i=4):
	Read "21" → "one 2, one 1" → "1211"
*/
/*
function countAndSay(n) {
    if (n === 1) return "1";
    
    let current = "1";
    
    for (let i = 2; i <= n; i++) {
        let next = "";
        let count = 1;
        
        for (let j = 1; j < current.length; j++) {
            if (current[j] === current[j - 1]) {
                count++;
            } else {
                next += count + current[j - 1];
                count = 1;
            }
        }
        
        next += count + current[current.length - 1];
        current = next;
    }
    
    return current;
}

console.log(countAndSay(4));
*/





// 8. Power of Two
/*
    16 in binary is 10000
	16 - 1 = 15, which is 01111
	Bitwise AND: 10000 & 01111 = 00000
*/
/*
function isPowerOfTwo(n) {
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(16));
*/





// 9. Factorial Trailing Zeroes
/*
	25 / 5 = 5
	25 / 25 = 1
	Total = 5 + 1 = 6 trailing zeroes
*/
/*
function trailingZeroes(n) {
	let count = 0;
	
	while (n>0) {
		n = Math.floor(n/5);
		count += n;
	}
	
	return count;
}

console.log(trailingZeroes(125));
*/





// 10. Add Digits (Digital Root)
/*
3 + 8 = 11
1 + 1 = 2
*/
/*
function addDigits(num) {
	if (num === 0) return 0;
	return 1 + (num -1) % 9;
}

console.log(addDigits(38));
*/





// 11. Valid Parentheses
/*
function isValid(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (!stack.length || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("()[]{}"));
*/





// 12. Merge Two Sorted Arrays
/*
const num1 = [1, 3, 5]
const num2 = [2, 4, 6]

const merged = [...num1, ...num2].sort((a, b) => a - b);

console.log(merged);
*/





// 13. Remove Duplicates from Sorted Array
/*
function removeDuplicates(nums) {
    nums.sort((a, b) => a - b);
    if (nums.length === 0) return 0;

    let k = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
        }
    }
    return k + 1;
}

let nums = [1, 2, 1];
let length = removeDuplicates(nums);

console.log(length);
console.log(nums.slice(0, length));
*/





// 14. Remove Element
/*
function removeElement(nums, val) {
	let k = 0;
	
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
		nums[k] = nums[i];
		k++;
		}
	}
	
	return k;
}

let nums = [2, 3, 3, 1];
let val = 3;

let result = removeElement(nums, val);

console.log(result);
console.log(nums.slice(0, result));
*/





// 15. Find the Index of First Occurrence
/*
function firstOccurrence(s, target) {
    return s.indexOf(target);
}

console.log(firstOccurrence("hello", "e"));
*/





// 16. Length of Last Word
/*
function lengthOfLastWord(s) {
	return s.trim().split(" ").pop().length;
}

console.log(lengthOfLastWord("Hello World"));
*/





// 17. Climbing Stairs
/*
Ways to reach steps:
1 → 1
2 → 2
3 → 3 (1+2)
4 → 5 (2+3)
5 → 8 (3+5)
*/
/*
function climbStairs(n) {
	if(n <= 2) return n;
	
	let prev1 = 1;
	let prev2 = 2;
	
	for(let i = 3; i <= n; i++) {
		let current = prev1 + prev2;
		prev1 = prev2;
		prev2 = current;
	}
	
	return prev2;
}

console.log(climbStairs(5));
*/





// 18. Maximum Subarray
function maxSubArray(nums) {
	let currentSum = nums[0];
	let maxSum = nums[0];
	
	for (let i = 1; i < nums.length; i++) {
		currentSum = Math.max(nums[i], currentSum + nums[i]);
		maxSum = Math.max(maxSum, currentSum);
	}
	
	return maxSum;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr));