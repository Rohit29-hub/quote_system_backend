import mongoose from 'mongoose';

(async function () {
    try {
        const dbURI = process.env.DATABASE_URI;
        if (!dbURI) {
            console.log('Database url is undefined');
            process.exit(1);
        }
        await mongoose.connect(dbURI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
})();