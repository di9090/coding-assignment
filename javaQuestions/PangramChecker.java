// Check if the input is pangram or not.


import java.util.HashSet;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        
        String sentence = "We promptly judged antique ivory buckles for the next prize";

        
        boolean isPangram = isPangram(sentence);

        if (isPangram) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }
    }

    private static boolean isPangram(String s) {
        // Convert the sentence to lowercase to ignore case
        s = s.toLowerCase();

        // Use a set to store unique alphabet characters
        Set<Character> alphabetSet = new HashSet<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            if (Character.isLetter(c)) {
                alphabetSet.add(c);
            }
        }

        // Check if the set contains all 26 alphabet letters
        return alphabetSet.size() == 26;
    }
}
