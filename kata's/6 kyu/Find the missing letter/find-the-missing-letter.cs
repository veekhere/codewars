public class Kata
{
  public static char FindMissingLetter(char[] array)
  {
    char start = array[0];
    char end = array[array.Length - 1];
    int j = 0;
    
    for(char i = start; i <= end; i++)
    {
      if(i != array[j]) return i;
      j++;
    }
    
    return '0';
  }
}
