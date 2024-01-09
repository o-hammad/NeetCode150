class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        anagrams_seen = {}

        for x in strs:
            sorted_word = ''.join(sorted(x))
            if sorted_word in anagrams_seen:
                anagrams_seen[sorted_word].append(x)
            else:
                anagrams_seen[sorted_word] = [x]

        return anagrams_seen.values() 