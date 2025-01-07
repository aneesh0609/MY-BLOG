import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux"; // Assuming user data is in Redux

const BarPoll = () => {
  // State to store the votes
  const [votes, setVotes] = useState([]);

  // To track if the user has voted or not
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedVote, setSelectedVote] = useState(null); // Store the selected vote

  // Access the current user state to check if they are an admin
  const { currentUser } = useSelector((state) => state.user); // Assuming user state is stored like this

  useEffect(() => {
    // Check if there are votes saved in localStorage
    const savedVotes = localStorage.getItem("votes");

    if (savedVotes) {
      // If there are saved votes, parse them and set them to the state
      setVotes(JSON.parse(savedVotes));
    } else {
      // Default votes if no saved votes
      setVotes([
        { title: "JavaScript", votes: 1, color: "bg-yellow-300" },
        { title: "React", votes: 2, color: "bg-blue-500" },
        { title: "DataStructure", votes: 3, color: "bg-violet-500" },
      ]);
    }

    // Check if the user has already voted by looking in localStorage
    const userVote = localStorage.getItem("userVote");
    if (userVote) {
      setHasVoted(true); // Mark that the user has voted
      setSelectedVote(userVote); // Set the selected vote based on the stored value
    }
  }, []);

  useEffect(() => {
    // Store the votes in localStorage whenever they change
    if (votes.length > 0) {
      localStorage.setItem("votes", JSON.stringify(votes));
    }
  }, [votes]);

  const handleIncrementVote = (vote) => {
    if (hasVoted) {
      return; // If the user has already voted, do nothing
    }

    const newVote = { ...vote, votes: vote.votes + 1 };
    setVotes((pv) =>
      pv.map((v) => (v.title === newVote.title ? newVote : v))
    );

    // Mark the user as voted in localStorage
    localStorage.setItem("userVote", vote.title);
    setHasVoted(true); // Set the local state to reflect that the user has voted
    setSelectedVote(vote.title); // Store the selected vote
  };

  return (
    <section className="bg-slate-900 px-4 py-12">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-2 md:grid-cols-[1fr_400px] md:gap-12">
        <Options
          votes={votes}
          setVotes={setVotes}
          handleIncrementVote={handleIncrementVote}
          hasVoted={hasVoted} // Pass the voting status
          selectedVote={selectedVote} // Pass the selected vote
        />
        <Bars votes={votes} />
        {/* Show reset button only if the user is an admin */}
        {currentUser?.isAdmin && <ResetButton setVotes={setVotes} />}
      </div>
    </section>
  );
};

const Options = ({ votes, setVotes, handleIncrementVote, hasVoted, selectedVote }) => {
  const totalVotes = votes.reduce((acc, cv) => (acc += cv.votes), 0);

  return (
    <div className="col-span-1 py-12">
      <h3 className="mb-6 text-3xl font-semibold text-slate-50">
        What's your opinion?
      </h3>
      <div className="mb-6 space-y-2">
        {votes.map((vote) => {
          const isSelected = selectedVote === vote.title; // Check if this vote is selected
          return (
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => handleIncrementVote(vote)}
              key={vote.title}
              className={`w-full rounded-md py-2 font-medium text-white ${vote.color} ${hasVoted ? "opacity-50 cursor-not-allowed" : ""} ${isSelected ? "border-2 border-red-400" : ""}`}
              disabled={hasVoted} // Disable the button if the user has already voted
            >
              {vote.title}
            </motion.button>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <span className="mb-2 italic text-slate-400">{totalVotes} votes</span>
      </div>
    </div>
  );
};

const Bars = ({ votes }) => {
  const totalVotes = votes.reduce((acc, cv) => (acc += cv.votes), 0);

  return (
    <div
      className="col-span-1 grid min-h-[200px] gap-2"
      style={{
        gridTemplateColumns: `repeat(${votes.length}, minmax(0, 1fr))`,
      }}
    >
      {votes.map((vote) => {
        const height = vote.votes ? ((vote.votes / totalVotes) * 100).toFixed(2) : 0;
        return (
          <div key={vote.title} className="col-span-1">
            <div className="relative flex h-full w-full items-end overflow-hidden rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800">
              <motion.span
                animate={{ height: `${height}%` }}
                className={`relative z-0 w-full ${vote.color}`}
                transition={{ type: "spring" }}
              />
              <span className="absolute bottom-0 left-[50%] mt-2 inline-block w-full -translate-x-[50%] p-2 text-center text-sm text-slate-50">
                <b>{vote.title}</b>
                <br />
                <span className="text-xs text-slate-200">{vote.votes} votes</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ResetButton = ({ setVotes }) => {
  const handleResetVotes = () => {
    setVotes((pv) => pv.map((v) => ({ ...v, votes: 0 })));
    localStorage.removeItem("votes");
    localStorage.removeItem("userVote"); // Clear user vote info
  };

  return (
    <motion.button
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      onClick={handleResetVotes}
      className="mt-6 rounded-sm bg-slate-700 px-2 py-1.5 text-sm font-medium text-slate-200"
    >
      Reset count
    </motion.button>
  );
};

export default BarPoll;
