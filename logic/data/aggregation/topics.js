/* eslint-disable quote-props */
module.exports = (section) => [
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
            from: "users",
            localField: "_author",
            foreignField: "_id",
            as: "author",
        },
    },
    {
        $match: { "section.name": section },
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
        },
    },
];
