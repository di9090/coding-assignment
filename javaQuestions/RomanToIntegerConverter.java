// Enter a Roman Number as input and convert it to an integer. (ex IX = 9)

import java.util.HashMap;
import java.util.Map;

public class RomanToIntegerConverter {

    public static void main(String[] args) {
        String romanNumeral = "IX"; 

        int result = romanToInteger(romanNumeral);
        if (result != -1) {
            System.out.println("Integer representation of " + romanNumeral + " is: " + result);
        } else {
            System.out.println("Invalid Roman numeral input");
        }
    }

    public static int romanToInteger(String s) {
        Map<Character, Integer> romanMap = new HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);

        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            if (!romanMap.containsKey(s.charAt(i))) {
                // Invalid character in the Roman numeral
                return -1;
            }

            if (i > 0 && romanMap.get(s.charAt(i)) > romanMap.get(s.charAt(i - 1))) {
                // If the current numeral is greater than the previous one, subtract the previous
                result += romanMap.get(s.charAt(i)) - 2 * romanMap.get(s.charAt(i - 1));
            } else {
                result += romanMap.get(s.charAt(i));
            }
        }

        return result;
    }
}
