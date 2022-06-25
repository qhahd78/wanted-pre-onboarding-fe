import {
  BookmarkSimple,
  ChatCircleDots,
  DotsThree,
  HeartStraight,
  PaperPlaneTilt,
  Smiley,
} from 'phosphor-react';
import React from 'react';
import {
  Comment,
  CommentContainer,
  CommentInput,
  CommentInputConatiner,
  FeedContainer,
  FeedHeader,
  IconContainer,
  ImgContainer,
  LikeCount,
  Profile,
  ProfileContainer,
  WriterName,
} from './style';

const Feed = () => {
  return (
    <FeedContainer>
      <FeedHeader>
        <ProfileContainer>
          <Profile />
          <p>Umin</p>
        </ProfileContainer>
        <DotsThree size={32} />
      </FeedHeader>
      <ImgContainer>사진이용</ImgContainer>
      <IconContainer>
        <div>
          <HeartStraight size={24} />
          <ChatCircleDots size={24} />
          <PaperPlaneTilt size={24} />
        </div>
        <div>
          <BookmarkSimple size={24} />
        </div>
      </IconContainer>
      <LikeCount>좋아요 0개</LikeCount>
      <CommentContainer>
        <Comment>
          <WriterName>mimmi</WriterName>
          <p>안녕요~</p>
        </Comment>
        <Comment>
          <WriterName>mimmi</WriterName>
          <p>안녕요~</p>
        </Comment>
      </CommentContainer>
      <CommentInputConatiner>
        <CommentInput>
          <Smiley size={32} />
          <input type="text" placeholder="댓글달기..." />
        </CommentInput>
        <button>게시</button>
      </CommentInputConatiner>
    </FeedContainer>
  );
};

export default Feed;
