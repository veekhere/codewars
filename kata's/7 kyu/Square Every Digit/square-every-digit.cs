using System;

public class Kata
{
  public static int SquareDigits(int n)
  {
    string buf = string.Join("", n);
    string ext = "";
    
    for(int i = 0; i < buf.Length; i++)
    {
      ext = String.Concat(ext, Convert.ToString(Convert.ToInt32(buf[i] - '0') * Convert.ToInt32(buf[i] - '0')));
    }
    return Convert.ToInt32(ext);
  }
}
