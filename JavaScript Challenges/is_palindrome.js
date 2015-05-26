/*
 Write a simple function (less than 80 characters) that returns a boolean
 indicating whether or not an entire string is a palindrome. 
*/

function pal(input)
{
  if(input.length < 2) return 0;
  for(i = 0; i < input.length/2; i++)
  {
    if(input[i] != input[input.length-i-1])
    {  
      //test lines - indicates letter where word is different
      console.log(input[i]);
      console.log(input[input.length - i-1]);
      
      //return mismatch
      return 0;
    }
  }
  return 1;
}