export function CountCapital(str:string) 
{
  var upper = 0;
    
  for (var i = 0; i < str.length; i++)
  {
    if (str[i] >= "A" && str[i] <= "Z") upper++;
   
  }
 
  return upper;
 
}