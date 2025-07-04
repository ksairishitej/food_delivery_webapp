const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://gofood:mern123@cluster0.veobs.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("✅ Connected to MongoDB");
        const fetched = mongoose.connection.db.collection("food_items");
        const foodCategory = mongoose.connection.db.collection("food_Category");
        const data = await fetched.find({}).toArray();
        const catData = await foodCategory.find({}).toArray();
        global.food_items = data;
        global.foodCategory = catData;
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
    }
};
module.exports = mongoDB;

