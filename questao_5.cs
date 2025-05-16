using System;

class StringInverterWithInput{
    static void Main(){
        string originalString = "", reversedString = "";
        
        Console.Write("Digite a string que você deseja inverter: ");
        originalString = Console.ReadLine();
        
        if (string.IsNullOrEmpty(originalString)){
            Console.WriteLine("Nenhuma string foi digitada.");
            return;
        }

        for (int i = originalString.Length - 1; i >= 0; i--){
            reversedString += originalString[i];
        }

        Console.WriteLine("String Invertida: " + reversedString);
    }
}