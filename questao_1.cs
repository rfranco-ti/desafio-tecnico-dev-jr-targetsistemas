using System;

class SimpleSum {
    static void Main() {
        int INDICE = 13, SOMA = 0, K = 0;

        while (K < INDICE) {
            K = K + 1;
            SOMA += K;
        }

        Console.WriteLine(SOMA);
    }
}