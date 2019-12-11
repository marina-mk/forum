/* eslint-disable quote-props */
module.exports = [
    {
        $lookup: {
            from: "topics",
            localField: "_id",
            foreignField: "_section",
            as: "topics",
        },
    },
    {
        $addFields: {
            topicsCount: { $size: "$topics" },
        },
    },
    {
        $unwind: {
            path: "$topics",
            preserveNullAndEmptyArrays: true,
        },
    },
    {
        $lookup: {
            from: "posts",
            localField: "topics._id",
            foreignField: "_topic",
            as: "topic.posts",
        },
    },
    {
        $group: {
            _id: "$_id",
            index: { $first: "$index" },
            title: { $first: "$title" },
            description: { $first: "$description" },
            name: { $first: "$name" },
            topicsCount: { $first: "$topicsCount" },
            postsCount: { $sum: { $size: "$topic.posts" } },
        },
    },
    {
        $sort: { "index": 1 },
    },
];
