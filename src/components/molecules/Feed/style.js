import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

const FeedContainer = styled.div`
  width: 470px;
  margin: 0 auto;
  border: 1px solid ${COLOR.GRAY_4};
  margin-bottom: 18px;
`;

const FeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px 8px 12px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  & > p {
    font-weight: 700;
    padding-left: 12px;
  }
`;

const Profile = styled.div`
  width: 42px;
  height: 42px;
  background-color: ${COLOR.GRAY_1};
  border-radius: 50%;
`;

const ImgContainer = styled.div`
  width: inherit;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div svg {
    box-sizing: content-box;
    padding: 8px;
    :hover {
      cursor: pointer;
    }
  }
`;

const LikeCount = styled.p`
  padding-left: 12px;
  margin-bottom: 10px;
`;

const CommentContainer = styled.div`
  width: inherit;
  padding: 20px 12px;
`;

const WriterName = styled.p`
  font-weight: 700;
  padding-right: 8px;
`;

const Comment = styled.p`
  display: flex;
  margin-bottom: 8px;
`;

const CommentInputConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${COLOR.GRAY_1};
  padding: 8px 8px 8px 12px;

  button {
    background-color: white;
    color: ${COLOR.BLUE_1};
    font-weight: 700;
    :hover {
      cursor: pointer;
    }
  }
`;

const CommentInput = styled.div`
  display: flex;
  input {
    padding: 0 8px;
    ::placeholder {
      color: ${COLOR.GRAY_3};
    }
  }
`;

export {
  FeedContainer,
  Profile,
  FeedHeader,
  ProfileContainer,
  ImgContainer,
  IconContainer,
  LikeCount,
  CommentContainer,
  WriterName,
  Comment,
  CommentInputConatiner,
  CommentInput,
};
