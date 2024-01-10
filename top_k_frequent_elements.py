class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        count = {}
        result = []

        for x in nums:
            if x in count:
                count[x] += 1
            else:
                count[x] = 1

        for i in range(k):
            max_freq = 0
            max_freq_num = 0
            for key, value in count.items():
                if value > max_freq:
                    max_freq = value
                    max_freq_num = key
            del count[max_freq_num]
            result.append(max_freq_num)

        return result