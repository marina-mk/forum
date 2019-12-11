/* eslint-disable quote-props */
module.exports = (sectionId) => [
    {
        $lookup: {
            from: "sections",
            localField: "_section",
            foreignField: "_id",
            as: "section",
        },
    },
    {
        $lookup: {
            from: "posts",
            localField: "_id",
            foreignField: "_topic",
            as: "posts",
        },
    },
    {
        $lookup: {
            from: "users",
            localField: "_author",
            foreignField: "_id",
            as: "author",
        },
    },
    {
        $unwind: { path: "$author" },
    },
    {
        $match: { "section.name": sectionId },
    },
    {
        $sort: { "index": 1 },
    },
    {
        $project: {
            "_id": 1,
            "title": 1,
            "description": 1,
            "author.name": 1,
            "created": 1,
            "index": 1,
            "postsCount": { $size: "$posts" },
        },
    },
];
