import React from "react";

const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  // onClick은 일반 함수이기 때문에
  // component 랜더링시 다시 생성되기 때문에
  // 강화된 component에도 랜더링을 발생시킨다.
  // 따라서 DiaryEditor의 onClick을 useCallback을 사용하여
  // 재사용 될 수 있게 만들어준다.
  onClick,
  isSelected,
}) => {
  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(" ")}
    >
      <img src={emotion_img} />
      <span>{emotion_descript}</span>
    </div>
  );
};

export default React.memo(EmotionItem);
