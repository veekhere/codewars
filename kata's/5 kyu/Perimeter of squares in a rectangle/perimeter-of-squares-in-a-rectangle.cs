using System;
using System.Numerics;

public class SumFct
{
  public static BigInteger perimeter(BigInteger n) 
  {
    BigInteger a = 0, buf = 0;
    BigInteger b = 1, sum = 1;
    
    for(int i = 1; i < (int)n + 1; i++)
    {
      buf = a;
      a = b;
      b = buf + b;
      sum += b;
    }
    
    return 4 * sum;
  }
}
