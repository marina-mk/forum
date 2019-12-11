/* eslint-disable quote-props */
module.exports = [
    {
        $lookup: {
            from: "topics",
            localField: "_id",
            foreignField: "_section",
            as: "topic",
        },
    },
    {
        $unwind: {
            path: "$topic",
            preserveNullAndEmptyArrays: true,
        },
    },
    {
        $lookup: {
            from: "posts",
            localField: "topic._id",
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
            topicsCount: { $sum: 1 },
            postsCount: { $sum: { $size: "$topic.posts" } },
        },
    },
    {
        $sort: { "index": 1 },
    },
];
