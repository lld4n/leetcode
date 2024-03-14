#include <vector>
#include <string>
#include <sstream>

using namespace std;

class Solution {
public:
    int isPrefixOfWord(string sentence, const string &searchWord) {
        vector<string> s = split(sentence, " ");
        int ans = 0;
        for (int i = 0; i < s.size(); ++i) {
            if (prefix(searchWord, s[i])) {
                return i + 1;
            }
        }
        return -1;
    }

private:

    static bool prefix(string first, string second) {
        int i = 0;
        int j = 0;
        while (i < first.size() && j < second.size() && first[i] == second[j]) {
            i++;
            j++;
        }
        return i == first.size();
    }

    static vector<string> split(string sentence, const string &delimiter) {
        vector<string> tokens;
        string token;
        size_t pos = 0;

        while ((pos = sentence.find(delimiter)) != string::npos) {
            token = sentence.substr(0, pos);
            tokens.push_back(token);
            sentence.erase(0, pos + delimiter.length());
        }
        tokens.push_back(sentence);

        return tokens;
    }

};