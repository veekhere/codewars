using System;

public class Kata
{
  public static int CountBits(int n)
  {
    string binary = Convert.ToString(n, 2);
    int answer = 0;
    for(int i = 0; i < binary.Length; i++) {
      if(binary[i] == '1') answer++;
    }
    return answer;
  }
}
