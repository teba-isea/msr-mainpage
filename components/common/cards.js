import styled from "styled-components";
import Image from "next/image";
import { Button } from "./buttons";
import { HiOutlineIdentification } from "react-icons/hi";

const pillsColor = {
  popular: "#FF033E",
  "gaceta oficial": "#ffc107",
  tecnologia: "#0dcaf0",
};

const appsTheme = {
  tramites: {
    icon: <HiOutlineIdentification />,
    color: "#ef732d",
  },
};

const PostCardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 20px;
  overflow: hidden;
  width: 280px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 12px #cecfd2;
  }

  .card-image-container {
    position: relative;
    width: 100%;
    height: 160px;
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
  }

  .card-text-container {
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    padding: 0rem 1.4rem;
    margin-bottom: 12px;

    span {
      width: min-content;
      border-radius: 18px;
      padding: 1px 8px;
      margin-bottom: 4px;
      font-size: 0.7rem;
      font-weight: 500;
      text-transform: uppercase;
      white-space: nowrap;
      color: #fff;
      background-color: ${(props) => pillsColor[props.category]};
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0;
      margin-bottom: 8px;
      padding: 0;
      text-shadow: none;
    }
    p {
      line-height: 1;
      font-size: 1rem;
      width: 92%;
      color: #45484b;
    }
  }
  .card-user-info {
    width: 100%;
    padding: 0.5rem 1.4rem;
    margin-top: auto;
    margin-bottom: 4px;
    display: flex;
    justify-content: flex-start;

    .user-info-avatar {
      width: 45px;
      height: 42px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
      position: relative;
    }

    .user-info-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h4 {
        font-size: 0.9rem;
        font-weight: 600;
        margin: 0;
        margin-bottom: 4px;
        padding: 0;
        text-shadow: none;
      }
      p {
        font-size: 0.8rem;
        font-weight: 500;
        margin: 0;
        margin-bottom: 4px;
        padding: 0;
        text-shadow: none;
        color: #5a637f;
      }
    }
  }
`;

export const PostCard = ({ post }) => (
  <PostCardContainer category={post.category}>
    <div className="card-image-container">
      <Image src={post.image} height={200} layout="fill" objectFit="cover" />
    </div>
    <div className="card-text-container">
      <span className="text-container-pill">{post.category}</span>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
    <div className="card-user-info">
      <div className="user-info-avatar">
        <Image
          src={post.user.avatar}
          height={42}
          width={45}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="user-info-text">
        <h4>{post.user.name}</h4>
        <p>{post.date}</p>
      </div>
    </div>
  </PostCardContainer>
);

const AppCardContainer = styled.div`
  width: 320px;
  height: 300px;
  box-shadow: 0px 0px 4px #cecfd2;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  margin: 1rem;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 12px #cecfd2;
  }
  .app-card-header {
    position: relative;
    width: 100%;
    height: 70px;
    border-bottom: 2px solid #f0f0f0;
    background-color: #fff;
    .card-header-image {
      position: absolute;
      left: 1.5rem;
      bottom: -40px;
      width: 92px;
      height: 90px;
      border: 1px solid #f0f0f0;
      border-radius: 50%;
      overflow: hidden;
      background-color: ${(props) => props.color || "#333"};
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: #fff;
      }
    }
  }
  .app-card-content {
    padding: 3rem 1.5rem 1.5rem 1.5rem;

    h4 {
      margin: 0;
      color: #afadb7 !important;
      text-shadow: none;
      font-size: 1.1rem;
      font-weight: 500;
    }
    h2 {
      width: 90%;
      margin-bottom: 0.8rem;

      color: #333 !important;
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 1;
      min-height: 50px;
    }
    p {
      font-size: 1rem;
      color: #737182 !important;
      line-height: 1.15;
      width: 95%;
    }
  }
`;

export const AppCard = ({ appData }) => {
  return (
    <a href={`${appData.url}`}>
      <AppCardContainer color={appData.color}>
        <div className="app-card-header">
          <div className="card-header-image">{appData.icon}</div>
        </div>

        <div className="app-card-content">
          <h4>{appData.category}</h4>
          <h2>{appData.name}</h2>
          <p>{appData.description}</p>
        </div>
      </AppCardContainer>
    </a>
  );
};
