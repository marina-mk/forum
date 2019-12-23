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
        $lookup: {
            from: "sections",
            localField: "topic._section",
            foreignField: "_id",
            as: "section",
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
        $match: { "section.name": sectionId },
    },
    {
        $match: { "topic.index": topicIndex },
    },
    {
        $sort: { "index": 1 },
    },
    {
        $project: {
            "_id": 1,
            "message": 1,
            "author.name": 1,
            "created": 1,
            "index": 1,
        },
    },
];
