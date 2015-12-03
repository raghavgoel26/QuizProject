var pseudo_cats = [];
var pseudo_category0 = {};
var topics = [];
var topic = {};

pseudo_cats[0] = pseudo_category0;

pseudo_category0["id"] = 64733;
pseudo_category0["name"] ="Trending QuizUp Topics";
pseudo_category0["filter"] ="Top used places";
pseudo_category0["logo"] = "trend.jpeg";
pseudo_category0["topics"] = topics;

topic["name"] = "Football";
topic["logo"] = "Foot.jpg";
topic["id"] = 37827;
topic["category"] = "Sports";
topics[0] = topic;

var topic1 = {};
topic1["name"] = "Baseball";
topic1["logo"] = "Foot.jpg";
topic1["id"] = 37827;
topic1["category"] = "Sports";
topics.push(topic1)

var topic2={};
topic2["name"] = "Cricket Records & History";
topic2["logo"] = "Foot.jpg";
topic2["id"] = 37827;
topic2["category"] = "Sports";
topics.push(topic2);

var topic3={};
topic3["name"] = "Football";
topic3["logo"] = "Foot.jpg";
topic3["id"] = 37827;
topic3["category"] = "Sports";
topics.push(topic3);


var topic4={};
topic4["name"] = "Cricket Records and History";
topic4["logo"] = "Foot.jpg";
topic4["id"] = 37827;
topic4["category"] = "Sports";
topics.push(topic4);

console.log(pseudo_cats);
//console.log(JSON.stringify(topic_page, null, 2))
