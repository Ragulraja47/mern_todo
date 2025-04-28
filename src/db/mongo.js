const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "Ragul2004"
const DATABASE_NAME = 'sample_mflix';
const CONNECTION_URI = `mongodb+srv://cragulraja2004:Ragul2004@cluster0.8dcqhvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
async function main() {
    await mongoose.connect(CONNECTION_URI, {
        dbName: DATABASE_NAME,
        user: 'cragulraja2004',
        pass: PASSWORD
    });
}

main().then( ()=>{
    console.log("Database is Connected");
}).catch(console.log);