//has_palindrome.js
/*
  Write a simple function that returns a boolean
   indicating whether or not a entire string has a palindrome.

   ex: "xmomabc" returns true because of palindrome "mom"
     "xhelloabc" returns false because of lack of any palindromes.
*/

function has_pal(input)
{
  for(m = 0; m < input.length+1; m++)
  {
    for(n = 0; n <= m; n++)
    {
      var check_this = input.substr(n,m);
      if(pal(check_this) == 1)
        return 1;
    }
  }
  return 0;
}

function pal(input)
{
  if(input.length < 2) return 0;
  for(i = 0; i < input.length/2; i++)
  {
    if(input[i] != input[input.length-i-1])
    {  
      return 0;
    }
  }
  return 1;
}
