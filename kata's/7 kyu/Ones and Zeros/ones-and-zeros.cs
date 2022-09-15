using System;

namespace Solution
{
  class Kata
  {
    public static int binaryArrayToNumber(int[] BinaryArray)
    {
      string binary = string.Join("", BinaryArray);
      
      return Convert.ToInt32(binary, 2);
    }
  }
}
