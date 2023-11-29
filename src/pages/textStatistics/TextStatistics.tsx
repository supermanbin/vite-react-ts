import { useState } from 'react';
import twitter from 'twitter-text';
import style from './TextStatistics.module.css';

export default function TextStatistics() {
  const [word, setWord] = useState('');
  const handleChange = (e) => {
    const a = twitter.parseTweet(e.target.value);
    console.log(a);
    setWord(e.target.value);
  };
  return (
    <div>
      <textarea
        className="text-sm border-2 rounded border-indigo-300 focus:border-indigo-500 p-2"
        name="word"
        id="word"
        cols="60"
        rows="5"
        placeholder="Please enter some word..."
        onChange={handleChange}
      ></textarea>
      <div className="flex items-center justify-between max-w-screen-sm">
        <div className="flex flex-col text-sm">
          <span className="text-gray-400">Character count</span>
          <strong className="text-2xl">{word.length}</strong>
        </div>
        <div className="flex flex-col text-sm">
          <span className="text-gray-400">Word count</span>
          <strong className="text-2xl">{word.length}</strong>
        </div>
      </div>
      <div className={style.corner}></div>
    </div>
  );
}
