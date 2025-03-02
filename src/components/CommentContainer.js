import React from 'react'
import { USER_ICON } from '../utils/constants';

const commentsData = [
    {
        name: "Gayatri Singh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
            {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Akshay Saini",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        name: "Akshay Saini",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [
                                            {
                                                name: "Akshay Saini",
                                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                replies: [],
                                            },
                                        ],
                                    },
                                    {
                                        name: "Akshay Saini",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
];

const Comment = ({ data }) => {
    const { name, text} = data;
    return (
        <div className="flex shadow-sm p-2 rounded-lg my-2">
            <img
                className="w-12 h-12 invert"
                alt="user"
                src={USER_ICON}
            />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CommentsList = (({comments}) => {
    return (
        <>
        { comments.map((comment, index) => (
            <div key={index}>
            <Comment  data={comment} />
            <div className='ml-5 border-l border-l-white'>
                <CommentsList comments={comment.replies} />
            </div>
            </div>
            )) }

        </>
    )
}
)


const CommentContainer = () => {
    return (
        <div className='m-5 p-2 text-white'>
            <h1 className='font-bold text-2xl mt-2 mb-6'>Comments</h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentContainer