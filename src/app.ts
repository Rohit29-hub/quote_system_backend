import express from 'express';
import serviceRoutes from './routes/service.route'
import questionRoute from './routes/question.route'
import cors from 'cors'
const app = express();


// ***** middlewares and config *****
app.use(express.json());
app.use(cors())

// ***** Routes *****
app.use('/service/v1', serviceRoutes);
app.use('/question/v1',questionRoute);


app.get('/', function(req,res){
    res.status(200).json({
        message: "Quatation System -- server is working",
        date: new Date().toISOString()
    })
})

export default app;