using System;

class MorseCodeDecoder
{
  public static string Decode(string morseCode)
  {
    string buf = "";
    string phrase = "";
    int SpaceCounter = 0;
    
    morseCode += " ";
    
    while(morseCode[0] == ' ') morseCode = morseCode.Remove(0, 1);
    
    for(int i = 0; i < morseCode.Length; i++)
    { 
      if(SpaceCounter == 3)
      {
        SpaceCounter = 0;
        phrase += " ";
      }
      
      if(morseCode[i] != ' ')
      {
        buf += Convert.ToString(morseCode[i]);
        SpaceCounter = 0;
      }
      else
      {
        SpaceCounter++;
        phrase += Convert.ToString(MorseCode.Get(buf));
        buf = "";
      }
    }
    
    return phrase;
  }
}
