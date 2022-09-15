using System;

public class TwoToOne 
{
  
  public static string Longest (string s1, string s2) 
  {
    string output = "";
    
    for(char i = 'a'; i <= 'z'; i++)
    {
      if(s1.IndexOf(i) != -1 || s2.IndexOf(i) != -1) output = String.Concat(output, Convert.ToString(i)); //checking index of the first occurrence of i
    }
    
    return output;
  }
}
