class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) == 0:
            return 0

        num_set = set(nums)
        sorted_nums = sorted(num_set)
        count = 1
        longest = 1

        for i in range(len(sorted_nums) - 1):
            if sorted_nums[i] + 1 == sorted_nums[i + 1]:
                count += 1
            else:
                count = 1
            longest = max(longest, count)
        
        return longest
            
