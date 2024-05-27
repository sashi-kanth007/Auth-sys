const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/authsystem', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

const viewUsers = async () => {
    try {
        const users = await User.find();
        console.log(users);
        mongoose.connection.close();
    } catch (error) {
        console.error(error);
        mongoose.connection.close();
    }
};

viewUsers();
