import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import { typeDefs, resolvers } from "./schema.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();

app.use('/graphql', expressMiddleware(server));

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('✅ Connected to MongoDB');
        app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}/graphql`));
    })
    .catch((err) => console.error("❌ MongoDB connection error:", err));