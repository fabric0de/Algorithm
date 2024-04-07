import java.util.Arrays;
import java.util.Comparator;

class Solution {
    public String solution(int[] numbers) {
        String[] nums = Arrays.stream(numbers)
                              .mapToObj(String::valueOf)
                              .toArray(String[]::new);
                              
        Arrays.sort(nums, new Comparator<String>() {
            @Override
            public int compare(String a, String b) {
                return (b + a).compareTo(a + b);
            }
        });
        
        if (nums[0].equals("0")) {
            return "0";
        }
        
        StringBuilder sb = new StringBuilder();
        for (String num : nums) {
            sb.append(num);
        }
        
        return sb.toString();
    }
}


