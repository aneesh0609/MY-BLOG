import React, { useState } from 'react';

export default function DsaCards() {
  // State to manage content for each card
  const [card1Content, setCard1Content] = useState("Card 1 Content");
  const [card2Content, setCard2Content] = useState("Card 2 Content");
  const [card3Content, setCard3Content] = useState("Card 3 Content");

  // Function to handle content change
  const handleChange = (setCardContent) => {
    const newContent = prompt("Enter new content:");
    if (newContent) {
      setCardContent(newContent);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {/* Card 1 */}
      <div className="w-full sm:w-[300px] lg:w-[350px] bg-[#15122e] border border-[#ffd037] text-sm font-mono">
        <div className="bg-[#2e0043] w-full text-right text-xl font-semibold p-2">
          <span className="cursor-pointer" onClick={() => handleChange(setCard1Content)}>
            {card1Content}
          </span>
        </div>
        <div className="overflow-y-auto h-[300px] p-[10px]">
          <pre id="pre" className="text-[#bafff8]">
            <code>
              <span className="text-[#22ff00]">#include</span> <span className="text-[#4281ff]">&lt;iostream&gt;</span>
              <br />
              using <span className="text-[#ff4284]">namespace</span> std<span className="text-[#e600ff]">;</span>
              <br />
              <span className="text-[#ff4284]">int</span> <span className="text-[#4281ff]">main()</span> <span className="text-[#ff0000]">{`{`}</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#ff4284]">int</span> <span className="text-[#ffae00]">a</span> <span className="text-[#ffff00]">=</span> 12<span className="text-[#e600ff]">;</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#ff4284]">int</span> <span className="text-[#ffae00]">b</span> <span className="text-[#ffff00]">=</span> 5<span className="text-[#e600ff]">;</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#ffae00]">cout</span> <span className="text-[#ffffff]">&lt;&lt;</span> <span className="text-[#22ff00]">"Sum of the numbers is: "</span> <span className="text-[#ffffff]">&lt;&lt;</span> <span className="text-[#ffffff]">({`(`}<span className="text-[#ffae00]">a</span> <span className="text-[#ffff00]">+</span> <span className="text-[#ffae00]">b</span>{`)`})</span><span className="text-[#e600ff]">;</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#ffff00]">return</span> 0<span className="text-[#e600ff]">;</span>
              <br />
              <span className="text-[#ff0000]">{`}`}</span>
            </code>
          </pre>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full sm:w-[300px] lg:w-[350px] bg-[#15122e] border border-[#ffd037] text-sm font-mono">
        <div className="bg-[#2e0043] w-full text-right text-xl font-semibold p-2">
          <span className="cursor-pointer " onClick={() => handleChange(setCard2Content)}>
            {card2Content}
          </span>
        </div>
        <div className="overflow-y-auto h-[300px] p-[10px]">
          <pre id="pre" className="text-[#bafff8]">
            <code>
              <span className="text-[#22ff00]">#include</span> <span className="text-[#4281ff]">&lt;iostream&gt;</span>
              <br />
              using <span className="text-[#ff4284]">namespace</span> std<span className="text-[#e600ff]">;</span>
              <br />
              <span className="text-[#ff4284]">int</span> <span className="text-[#4281ff]">main()</span> <span className="text-[#ff0000]">{`{`}</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#ff4284]">int</span> <span className="text-[#ffae00]">x</span> <span className="text-[#ffff00]">=</span> 20<span className="text-[#e600ff]">;</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#ff4284]">int</span> <span className="text-[#ffae00]">y</span> <span className="text-[#ffff00]">=</span> 10<span className="text-[#e600ff]">;</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#ffae00]">cout</span> <span className="text-[#ffffff]">&lt;&lt;</span> <span className="text-[#22ff00]">"Product of the numbers is: "</span> <span className="text-[#ffffff]">&lt;&lt;</span> <span className="text-[#ffffff]">({`(`}<span className="text-[#ffae00]">x</span> <span className="text-[#ffff00]">*</span> <span className="text-[#ffae00]">y</span>{`)`})</span><span className="text-[#e600ff]">;</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#ffff00]">return</span> 0<span className="text-[#e600ff]">;</span>
              <br />
              <span className="text-[#ff0000]">{`}`}</span>
            </code>
          </pre>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-[300px] lg:w-[350px] bg-[#15122e] border border-[#ffd037] text-sm font-mono">
        <div className="bg-[#2e0043] w-full text-right text-xl font-semibold p-2">
          <span className="cursor-pointer" onClick={() => handleChange(setCard3Content)}>
            {card3Content}
          </span>
        </div>
        <div className="overflow-y-auto h-[300px] p-[10px]">
          <pre id="pre" className="text-[#bafff8]">
            <code>
              <span className="text-[#22ff00]">#include</span> <span className="text-[#4281ff]">&lt;iostream&gt;</span>
              <br />
              using <span className="text-[#ff4284]">namespace</span> std<span className="text-[#e600ff]">;</span>
              <br />
              <span className="text-[#ff4284]">int</span> <span className="text-[#4281ff]">main()</span> <span className="text-[#ff0000]">{`{`}</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#ff4284]">int</span> <span className="text-[#ffae00]">a</span> <span className="text-[#ffff00]">=</span> 7<span className="text-[#e600ff]">;</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#ff4284]">int</span> <span className="text-[#ffae00]">b</span> <span className="text-[#ffff00]">=</span> 3<span className="text-[#e600ff]">;</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#ffae00]">cout</span> <span className="text-[#ffffff]">&lt;&lt;</span> <span className="text-[#22ff00]">"Difference of the numbers is: "</span> <span className="text-[#ffffff]">&lt;&lt;</span> <span className="text-[#ffffff]">({`(`}<span className="text-[#ffae00]">a</span> <span className="text-[#ffff00]">-</span> <span className="text-[#ffae00]">b</span>{`)`})</span><span className="text-[#e600ff]">;</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#ffff00]">return</span> 0<span className="text-[#e600ff]">;</span>
              <br />
              <span className="text-[#ff0000]">{`}`}</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
