/* eslint-disable quote-props */
module.exports = (sectionId, topicIndex) => [
    {
        $lookup: {
            from: "topics",
            localField: "_topic",
            foreignField: "_id",
            as: "topic",
        },
    },
    {
        $match: { "topic.index": topicIndex },
    },
    {
        $lookup: {
            from: "sections",
            localField: "topic._section",
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
            "message": 1,
            "author.name": 1,
            "author.topicsCount": 1,
            "author.postsCount": 1,
            "created": 1,
            "index": 1,
        },
    },
];
