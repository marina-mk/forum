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
        $match: { "section.name": sectionId },
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
            "postsCount": 1,
            "views": 1,
        },
    },
];
