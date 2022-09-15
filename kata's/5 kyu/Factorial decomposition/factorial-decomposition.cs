using System;
using System.Collections.Generic;
using System.Linq;

class FactDecomposition
{ 
  public static string Decompose(int n)
  {
    string answer = String.Empty;

    bool[] Sieve = new bool[n + 1];
    List<Tuple<int, int>> p = new List<Tuple<int, int>>();

    for (int i = 2; i <= n; ++i)
    {
        if (!Sieve[i])
        {
            int f = n / i;
            int c = 0;

            while (f > 0)
            {
                c += f;
                f /= i;
            }

            p.Add(new Tuple<int, int>(i, c));

            int j = 2;

            while (i * j <= n)
            {
                Sieve[i * j] = true;
                ++j;
            }
        }
    }

    for (int i = 0; i <= p.Count() - 1; i++)
    {
        if (p[i].Item2 > 1) answer += String.Format("{0}^{1} * ", p[i].Item1, p[i].Item2);
        else answer += Convert.ToString(p[i].Item1) + " * ";
    }

    return answer.Remove(answer.Length - 3, 3);
  }
}