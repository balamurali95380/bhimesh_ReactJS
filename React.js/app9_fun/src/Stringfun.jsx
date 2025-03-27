import React, { useState } from "react";

const StringManipulator = ({ title, operation, placeholder = "Enter text here" }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="p-4 border rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder={placeholder}
      />
      <button
        onClick={() => setResult(operation(input))}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Process
      </button>
      {result && <p className="mt-2 text-gray-700">Result: {result}</p>}
    </div>
  );
};

const App = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">String Manipulation Tools</h1>
      <StringManipulator title="Reverse a String" operation={(str) => str.split('').reverse().join('')} />
      <StringManipulator title="Check Palindrome" operation={(str) => str === str.split('').reverse().join('') ? "Yes" : "No"} />
      <StringManipulator title="Remove Duplicates" operation={(str) => [...new Set(str)].join('')} />
      <StringManipulator title="First Non-Repeating Character" operation={(str) => [...str].find(char => str.indexOf(char) === str.lastIndexOf(char)) || "None"} />
      <StringManipulator title="Character Frequency" operation={(str) => JSON.stringify([...str].reduce((acc, char) => (acc[char] = (acc[char] || 0) + 1, acc), {}))} />
      <StringManipulator title="Reverse Words" operation={(str) => str.split(' ').reverse().join(' ')} />
      <StringManipulator title="Check Anagrams" operation={(str) => {
        const [s1, s2] = str.split(',');
        return s1 && s2 && s1.split('').sort().join('') === s2.split('').sort().join('') ? "Yes" : "No";
      }} placeholder="Enter two strings separated by a comma" />
      <StringManipulator title="URL Encoding" operation={(str) => str.replace(/\s/g, "%20")} />
      <StringManipulator title="Convert to Acronym" operation={(str) => str.split(' ').map(word => word[0]?.toUpperCase()).join('')} />
      <StringManipulator title="Find Longest Substring Without Repeating Characters" operation={(str) => {
        let max = 0, map = {}, start = 0;
        for (let i = 0; i < str.length; i++) {
          if (map[str[i]] !== undefined) start = Math.max(map[str[i]] + 1, start);
          map[str[i]] = i;
          max = Math.max(max, i - start + 1);
        }
        return max;
      }} />
      <StringManipulator title="Convert to Title Case" operation={(str) => str.replace(/\b\w/g, char => char.toUpperCase())} />
      <StringManipulator title="Replace Spaces with %20 (URL Encoding)" operation={(str) => str.replace(/\s/g, "%20")} />
      <StringManipulator title="Find Number of Words" operation={(str) => str.trim().split(/\s+/).length} />
      <StringManipulator title="Remove a Character" operation={(str) => {
        const [text, char] = str.split(',');
        return text.replace(new RegExp(char, 'g'), '');
      }} placeholder="Enter text and character separated by a comma" />
      <StringManipulator title="Find Longest Palindromic Substring" operation={(str) => {
        let res = "";
        for (let i = 0; i < str.length; i++) {
          for (let j = i; j < str.length; j++) {
            let sub = str.slice(i, j + 1);
            if (sub === sub.split('').reverse().join('') && sub.length > res.length) res = sub;
          }
        }
        return res;
      }} />
    </div>
  );
};

export default App;
