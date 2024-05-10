import React, { useState } from "react";
import { TbCircleDashed } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsEmojiSmile, BsFilter, BsMicFill, BsThreeDotsVertical} from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import ChatCard from "./chatcard/ChatCard";
import MessageCard from "./messagecard/MessageCard";

const HomePage = () => {
  const [queries, setQueries] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [content, setContent] = useState("");

  const handleSearch = () => {};

  const handleOnClickChatCard = () => {
    setCurrentChat(true);
  };

  const handleCreateNewMessage = () => {};

  return (
    <div className="relative">
      {/* Green background */}
      <div className="py-14 bg-[#00a884] w-full"></div>

      {/* Body */}
      <div className="flex bg-[#f0f2f5] h-[90vh] absolute top-6 left-[2vw] w-[96vw]">
        {/* Left-Part */}
        <div className="left w-[30%] bg-[#e8e9ec] h-full">
          <div className="w-full">
            <div className="flex justify-between items-center px-3 py-3">
              <div className="flex items-centers space-x-3">
                <img
                  className="rounded-s-full w-10 h-10 cursor-pointer"
                  src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
                  alt=""
                />
                <p>UserName</p>
              </div>

              <div className="space-x-3 text-2xl flex">
                <TbCircleDashed />
                <BiCommentDetail />
              </div>
            </div>

            <div className="relative flex justify-center items-center bg-white py-4 px-3">
              <input
                className="border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2"
                type="text"
                placeholder="search or start new chat"
                onChange={(e) => {
                  setQueries(e.target.value);
                  handleSearch(e.target.value);
                }}
                value={queries}
              />
              <AiOutlineSearch className="left-5 top-7 absolute" />

              <div>
                <BsFilter className="ml-4 text-3xl" />
              </div>
            </div>

            <div className="bg-white overflow-y-scroll h-[76.8vh] px-3">
              {queries &&
                [1, 1, 1, 1, 1].map((item) => (
                  <div onClick={handleOnClickChatCard}>
                    {" "}
                    <hr />
                    <ChatCard />{" "}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Right-Part */}
        {/* Header */}
        {!currentChat && (
          <div className="w-[70%] flex flex-col items-center justify-center h-full">
            <div className="text-center">
              <h1 className="text-4xl text-gray-600 ">WhatsApp Web</h1>
            </div>
          </div>
        )}

        {currentChat && (
          <div className="w-[70%] relative">
            <div className="header absolute top-0 w-full bg-[#f0f2f5]">
              <div className="flex justify-between">
                <div className="py-3 space-x-4 flex items-start px-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
                    alt=""
                  />
                  <p>UserName</p>
                </div>

                <div className="py-3 flex space-x-4 items-center px-3 ">
                  <AiOutlineSearch />
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="px-10 h-[85vh] overflow-y-scroll bg-blue-200">
              <div className="space-y-1 flex flex-col justify-center mt-20 py-2">
                {[1, 1, 1, 1, 1].map((item, i) => (
                  <MessageCard
                    isReqUserMessage={i % 2 == 0}
                    content={"message"}
                  />
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="footer bg-[#f0f2f5] absolute bottom-0 w-[98.4%] py-3 text-2xl ">
              <div className="flex justify-between items-center px-3 relative">
                <BsEmojiSmile className="cursor-pointer" />
                <ImAttachment />
                <input
                  className="py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]"
                  type="text"
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Type Message...."
                  value={content}
                  onKeyPress={(e) => {
                    if (e.key == "Enter") {
                      handleCreateNewMessage();
                      setContent("");
                    }
                  }}
                />
                <BsMicFill />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
