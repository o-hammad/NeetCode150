class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        hset = set()
        for idx in nums:
            if idx in hset:
                return True
            else:
                hset.add(idx)