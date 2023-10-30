// A. Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

import java.util.Arrays;
import java.util.Random;

public class ShuffleArray {
    public static void main(String[] args) {
      
        int[] array = {1, 2, 3, 4, 5, 6, 7};

        shuffleArray(array);
        System.out.println(Arrays.toString(array));
    }

    
    private static void shuffleArray(int[] array) {
        int n = array.length;
        Random rand = new Random();

        for (int i = n - 1; i > 0; i--) {
            // Generate a random index between 0 and i (inclusive)
            int randIndex = rand.nextInt(i + 1);

            // Swap array[i] with the element at random index
            int temp = array[i];
            array[i] = array[randIndex];
            array[randIndex] = temp;
        }
    }
}
