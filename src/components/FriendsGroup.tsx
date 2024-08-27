import React, { useState } from "react";

const FriendsSection: React.FC<{ friends: string[] }> = ({ friends }) => {
  const displayedFriends = friends.slice(0, 4);
  const extraFriends = friends.length - displayedFriends.length;
  const [moveFromIndex, setMoveFromIndex] = useState(-1);

  return (
    <div className="flex relative items-center w-[220px]">
      {displayedFriends.map((friend, index) => (
        <div
          key={index}
          className={`absolute cursor-pointer size-14 transition-all z-${index} hover:z-20 duration-150 hover:size-16 rounded-full bg-gray-300 border-4 border-white `}
          onMouseEnter={() => setMoveFromIndex(index)}
          onMouseLeave={() => setMoveFromIndex(-1)}
          style={{
             left: `calc(${index * 35}px + ${(index >= moveFromIndex ? 12 : 0)}px)`
          }}
        >
          <img
            src={friend}
            alt={`Friend ${index + 1}`}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      ))}

      {extraFriends > 0 && (
        <div
          className={`absolute size-14 cursor-pointer flex items-center transition-all duration-150 ease-in-out z-10 hover:size-16 justify-center rounded-full bg-gray-400 text-white text-sm font-bold border-4 border-white 
            `}
            onMouseEnter={() => setMoveFromIndex(4)}
          onMouseLeave={() => setMoveFromIndex(-1)}
          style={{
            left: `calc(${4 * 35}px + ${(4 > moveFromIndex ? 12 : 12)}px)`
          }}
        >
          +{extraFriends}
        </div>
      )}
    </div>
  );
};

export default FriendsSection;
