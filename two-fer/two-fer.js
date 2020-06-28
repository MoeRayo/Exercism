const twoFer = (name = 'you') => {
    return `One for ${name}, one for me.`;
  };
  
  twoFer('alice');

  
// Without any value when the function is called will produce "one for you, one for me".

// Calling the function with Alice gave me "one for Alice, one for me".
