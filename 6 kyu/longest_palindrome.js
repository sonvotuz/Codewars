/* Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0 */

// PREP
// Parameter: string
// Return: number
// Example: 'aab' ==> 2

// Answer

function is_Palindrome(s) {
  const reverse = s.split("").reverse().join("")
  return s == reverse
}

function longestPalindrome(s) {
  if (s.length < 1) return 0
  let result = 1

  for (let i = 0; i < s.length; i++) {
    let subs = s.substr(i, s.length)

    for (let j = subs.length; j >= 0; j--) {
      let sub_subs_str = subs.substr(0, j)
      if (sub_subs_str.length <= 1) continue

      if (is_Palindrome(sub_subs_str)) {
        if (sub_subs_str.length > result) {
          result = sub_subs_str.length
        }
      }
    }
  }

  return result
}

longestPalindrome(
  "FourscoreandsevenyearsagoourfathersbroughtforthonthiscontinentanewnationconceivedinLibertyanddedicatedtothepropositionthatallmenarecreatedequalNowweareengagedinagreatcivilwartestingwhetherthatnationoranynationsoconceivedandsodedicatedcanlongendureWearemetonagreatbattlefieldofthatwarWehavecometodedicateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfittingandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravemenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorpowertoaddordetractTheworldwilllittlenotenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheunfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattaskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
)
