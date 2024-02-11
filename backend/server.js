import express from "express";
import cookieParser from 'cookie-parser'
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';
const app = express();
dotenv.config();

const corsOptions ={
  origin:true
};
const port = process.env.PORT || 7000;
app.use(cors());
app.use(express.json())
app.use (cors(corsOptions));
app.use(cookieParser())


app.get("/api/doctors", (req, res) => {
  const data = [
    {
      id: "01",
      name: "Dr. Sudeshnu Sarker",
      specialization: "Surgeon",
      avgRating: 4.5,
      totalRating: 272,
      photo: "data:image/jpeg;base64,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",
      totalPatients: 1500,
      hospital: "Mount Adora Hospital, Sylhet.",
    },
    {
      id: "02",
      name: "Dr. Pranab Adhikery",
      specialization: "Neurologist",
      avgRating: 4.8,
      totalRating: 980,
      photo: "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?size=626&ext=jpg&ga=GA1.1.2097408625.1694360763&semt=sph",
      totalPatients: 1500,
      hospital: "Mount Adora Hospital, Sylhet.",
    },
    {
      id: "03",
      name: "Dr. Aprabita Maitra",
      specialization: "Dermatologist",
      avgRating: 4.0,
      totalRating: 678,
      photo: "https://img.freepik.com/free-photo/smiling-young-female-doctor-wearing-medical-robe-with-stethoscope-spreading-hands-isolated-purple-wall_141793-83025.jpg?size=626&ext=jpg&ga=GA1.1.2097408625.1694360763&semt=sph",
      totalPatients: 1500,
      hospital: "Mount Adora Hospital, Sylhet.",
    },
    {
      id: "04",
      name: "Dr. Roshan Bajaj",
      specialization: "Orthoprdics",
      avgRating: 4.9,
      totalRating: 272,
      photo: "https://www.shutterstock.com/image-photo/indian-male-doctor-consulting-senior-600nw-2036186195.jpg",
      totalPatients: 1600,
      hospital: "Mount Adora Hospital, Sylhet.",
    },
    {
      id: "05",
      name: "Dr. Atish Ranjan",
      specialization: "Homeopathy",
      avgRating: 3.2,
      totalRating: 123,
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww",
      totalPatients: 500,
      hospital: "Mount Adora Hospital, Sylhet.",
    },
    {
      id: "06",
      name: "Dr. Sukriti Adhikary",
      specialization: "Neurosurgery",
      avgRating: 4.5,
      totalRating: 500,
      photo: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
      totalPatients: 1500,
      hospital: "Mount Adora Hospital, Sylhet.",

    }
    
  ];
  res.send(data);
});

app.use('/api/v1/auth',authRoute);
app.use('/api/v1/users',userRoute);

const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
app.listen(port, () => {
  mongoConnect();
  console.log(`Server is listening at http://localhost:${port}`);
});
