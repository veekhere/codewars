using System.Linq;
  
public class Kata
{
  public static bool IsPalindrome(object line)
  {
    return line.ToString().SequenceEqual(line.ToString().Reverse());
  }
}
