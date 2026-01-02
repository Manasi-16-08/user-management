const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('URI', {
                    });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

