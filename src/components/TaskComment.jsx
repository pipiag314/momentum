import { useCommentsStore } from "../store/store";
import { createNewComment } from "../API/createNewComment";
import reply_icon from "/src/assets/reply-icon.svg";

const TaskComment = ({ task }) => {
  const comments = useCommentsStore((state) => state.comments);
  const setComments = useCommentsStore((state) => state.setComments);
  const commentText = useCommentsStore((state) => state.commentText);
  const setCommentText = useCommentsStore((state) => state.setCommentText);

  const handleChange = (value) => {
    setCommentText(value);
  };

  const handleSubmitComment = () => {
    const asyncFunc = async () => {
        const data = await createNewComment(task.id, commentText);
        setCommentText("");
        setComments([ data, ...comments])
    }

    asyncFunc();
    
  };

  return (
    <div className="flex flex-col gap-[10px] rounded-[10px] bg-[#F8F3FEA6] border-[0.3px] border-[#DDD2FF] p-[45px]">
      <div className="relative">
        <textarea
          className="bg-white rounded-[10px] outline-none p-[20px] text-[14px] w-[100%] h-[100%] border-[0.3px] border-[#ADB5BD] resize-none"
          placeholder="დაწერე კომენტარი"
          value={commentText}
          onChange={(e) => handleChange(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="5"></textarea>
        <button
          disabled={commentText.trim().length === 0}
          onClick={handleSubmitComment}
          className="absolute disabled:cursor-not-allowed bottom-[20px] right-[15px] text-white rounded-[20px] px-[18px] py-[8px] bg-[#8338EC] hover:bg-[#B588F4] cursor-pointer">
          დააკომენტარე
        </button>
      </div>
      <div className="flex items-center gap-[5px]">
        <p>კომენტარები</p>
        <span className="text-white bg-[#8338EC] px-[11px] py-[1px] rounded-[30px]">
          {comments.length}
        </span>
      </div>
      {comments?.map((comment) => (
        <div key={comment.id} className="flex gap-[12px]">
          <div>
            <img
              src={comment.author_avatar}
              className="w-[38px] h-[38px] rounded-full"
              alt="comment author avatar"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[#212529]">{comment.author_nickname}</h3>
              <p className="text-[#343A40]">{comment.text}</p>
              <button className="flex items-center gap-[6px] text-[12px]/[100%] text-[#8338EC] cursor-pointer">
                <img
                  className="w-[16px] h-[16px]"
                  src={reply_icon}
                  alt="reply icon"
                />{" "}
                უპასუხე
              </button>
            </div>
            {comment?.sub_comments?.map((sub_comment) => (
              <div className="flex gap-[12px]">
                <div>
                  <img
                    src={sub_comment.author_avatar}
                    className="w-[38px] h-[38px] rounded-full"
                    alt="comment author avatar"
                  />
                </div>
                <div key={sub_comment.id} className="flex flex-col gap-[8px]">
                  <h3 className="text-[#212529]">
                    {sub_comment.author_nickname}
                  </h3>
                  <p className="text-[#343A40]">{sub_comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default TaskComment;
