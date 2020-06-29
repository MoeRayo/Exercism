//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (word) => {
    let arr = word.split('');
    // this converts the word(s) passed in to an array
    let reversed = arr.reverse();
    // This reverses the array
    let joined = reversed.join('');
    // This joins the reversed array back
    return joined;
  };
  reverseString('');
  