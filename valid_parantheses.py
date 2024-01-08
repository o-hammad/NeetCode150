class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []

        for x in s:
            if x in '([{':
                stack.append(x)
            else:
                if not stack or \
                    (x == ')' and stack[-1] != '(') or \
                    (x == ']' and stack[-1] != '[') or \
                    (x == '}' and stack[-1] != '{'):
                    return False
                stack.pop()
        return not stack