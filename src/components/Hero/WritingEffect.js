import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export const WritingEffect = () => {
  return (
    <>
      <ReactTypingEffect
        text={["Aspiring Back-End Developer"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={{color: 'magenta'}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
    </>
  );
};