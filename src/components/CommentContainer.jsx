// import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import CommentList from './CommentList';

const commentData = [
  {
    name: "hansraj singh tomar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "arvind",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: []
      },
      {
        name: "arvind",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: []
      },
    ]
  },
  {
    name: "hansraj singh tomar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "arvind",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "arvind",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "arvind",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "arvind",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: []
                  },
                  {
                    name: "arvind",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "hansraj singh tomar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "arvind",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: []
      }
    ]
  },
  {
    name: "hansraj singh tomar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "arvind",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: []
      }
    ]
  },
  {
    name: "hansraj singh tomar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "arvind",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: []
      }
    ]
  },
]

const CommentContainer = () => {
  return (
    <div>
      {/* new comment */}
      <div className='flex items-center gap-2'>
        <img className='w-12 h-12 rounded-full bg-white' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
        <input className='w-full p-1 bg-transparent border-b-2 border-[#373737]' placeholder="Add a comment ..." />
      </div>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;



