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
        $sort: { "index": 1 },
    },
    {
        $project: {
            "_id": 1,
            "title": 1,
            "description": 1,
            "name": 1,
            "topicsCount": { $size: "$topics" },
        },
    },
];
