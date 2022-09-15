using System.Globalization;

public static class JadenCase
{
  public static string ToJadenCase(this string phrase)
  {
    TextInfo info = CultureInfo.CurrentCulture.TextInfo;
    
    phrase = info.ToTitleCase(phrase);
    
    return phrase;
  }
}
