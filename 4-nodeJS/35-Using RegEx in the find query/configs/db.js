const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

const dbConnection = new MongoClient(process.env.MONGODB_URI);

const dbName = process.env.DB_NAME;

const main = async () => {
  try {
    await dbConnection.connect();
    console.log("Connected to MongoDB at " + process.env.MONGODB_URI);

    const db = dbConnection.db(dbName);

    const usersCollection = db.collection("users");

    /* const result = await usersCollection.insertMany([
      {
        username: "john_doe",
        email: "john.doe@example.com",
        passwordHash: "$2b$10$7sKzpe7jP2oUX/b0zqW5.e2OGJZl2QG2p6NwHIN6",
        age: 28,
        role: "admin",
        tags: ["nodejs", "express", "mongodb"],
        isActive: true,
      },
      {
        username: "jane_smith",
        email: "jane.smith@example.com",
        passwordHash: "$2b$10$6sJzme3kP1oQY/b0yqZ6.f3PGJYm3RF1p4MvYLO4",
        age: 32,
        role: "user",
        tags: ["react", "redux", "frontend"],
        isActive: true,
      },
      {
        username: "ali_dev",
        email: "ali.dev@example.com",
        passwordHash: "$2b$10$5rHznQ7kN2pEX/x0yqJ7.g4OFKYm2UI3p5NvZMN5",
        age: 25,
        role: "user",
        tags: ["python", "django", "restapi"],
        isActive: false,
      },
      {
        _id: "65f1c4a5d7b1c2a3e4f5g6h1",
        username: "john_doe",
        email: "john.doe@example",
        passwordHash: "$2b$10$7sKzpe7jP2oUX/b0zqW5.e2OGJZl2QG2p6NwHIN6",
        age: 28,
        role: "admin",
        tags: ["nodejs", "express", "mongodb"],
        isActive: true,
        createdAt: "2024-02-16T10:30:00Z",
        updatedAt: "2024-02-16T12:45:00Z",
      },
      {
        _id: "65f1c4a5d7b1c2a3e4f5g6h2",
        username: "jane_smith",
        email: "jane.smith@example@com",
        passwordHash: "$2b$10$6sJzme3kP1oQY/b0yqZ6.f3PGJYm3RF1p4MvYLO4",
        age: 32,
        role: "user",
        tags: ["react", "redux", "frontend"],
        isActive: true,
        createdAt: "2024-02-10T09:15:00Z",
        updatedAt: "2024-02-15T08:20:00Z",
      },
      {
        _id: "65f1c4a5d7b1c2a3e4f5g6h3",
        username: "ali_dev",
        email: "ali.dev.example.com",
        passwordHash: "$2b$10$5rHznQ7kN2pEX/x0yqJ7.g4OFKYm2UI3p5NvZMN5",
        age: 25,
        role: "user",
        tags: ["python", "django", "restapi"],
        isActive: false,
        createdAt: "2023-12-01T14:10:00Z",
        updatedAt: "2024-01-20T16:30:00Z",
      },
      {
        _id: "65f1c4a5d7b1c2a3e4f5g6h4",
        username: "sara_front",
        email: "sara.front@domain.com",
        passwordHash: "$2b$10$7DFmNqpXe4uXq/y4Ez6wfhGRnK6yJU5LQ4zvJTI6",
        age: 27,
        role: "user",
        tags: ["vue", "nuxt", "frontend"],
        isActive: true,
        createdAt: "2023-11-05T11:45:00Z",
        updatedAt: "2024-02-01T09:10:00Z",
      },
      {
        _id: "65f1c4a5d7b1c2a3e4f5g6h5",
        username: "mehdi_node",
        email: "mehdi.node@domain..com",
        passwordHash: "$2b$10$Y4JnW4ld5r2uK/XfZYABJd6zJZnLp6VM5TsQDHL4",
        age: 30,
        role: "developer",
        tags: ["nodejs", "typescript", "backend"],
        isActive: true,
        createdAt: "2024-01-15T10:30:00Z",
        updatedAt: "2024-02-14T15:20:00Z",
      },
      {
        _id: "65f1c4a5d7b1c2a3e4f5g6h6",
        username: "nasim_java",
        email: "@nasim.java.com",
        passwordHash: "$2b$10$3KgBdW7LQlP7/MK5XmQShG6VG7qM6YTY6ZwDpRL7",
        age: 26,
        role: "developer",
        tags: ["java", "spring", "backend"],
        isActive: true,
        createdAt: "2023-08-10T12:00:00Z",
        updatedAt: "2024-01-30T13:40:00Z",
      },
      {
        _id: "65f1c4a5d7b1c2a3e4f5g6h7",
        username: "reza_php",
        email: "reza.php@domain.com",
        passwordHash: "$2b$10$6LmDF4Xp7T2LQLK4Xp2MNZG5vKnRXG5J6QoYNXP7",
        age: 31,
        role: "developer",
        tags: ["php", "laravel", "backend"],
        isActive: true,
        createdAt: "2022-05-04T09:50:00Z",
        updatedAt: "2024-02-12T10:25:00Z",
      },
      {
        _id: "65f1c4a5d7b1c2a3e4f5g6h8",
        username: "amir_ml",
        email: "amir.ml@domain.c",
        passwordHash: "$2b$10$J5KH7TpqQL6zP6XPYq6TG6LMN4K7J6MP4LgMNXG7",
        age: 29,
        role: "data_scientist",
        tags: ["python", "tensorflow", "ML"],
        isActive: false,
        createdAt: "2021-03-15T08:30:00Z",
        updatedAt: "2023-12-18T07:20:00Z",
      },
      {
        _id: "65f1c4a5d7b1c2a3e4f5g6h9",
        username: "sina_front",
        email: "sina.front@domaincom",
        passwordHash: "$2b$10$K7PLM4Q5LM7N6LZPQ4T6KM4LJ5Q4PLX6L7MP5QL4",
        age: 24,
        role: "developer",
        tags: ["react", "nextjs", "frontend"],
        isActive: true,
        createdAt: "2023-06-10T09:00:00Z",
        updatedAt: "2024-02-15T14:10:00Z",
      },
      {
        _id: "65f1c4a5d7b1c2a3e4f5g6h0",
        username: "samir_dev",
        email: "samir.dev@domain.com",
        passwordHash: "$2b$10$L7JNM5PQL4M6KP4LXM4LJ4K5TML4KPLXM7L5M4L",
        age: 35,
        role: "team_lead",
        tags: ["golang", "docker", "kubernetes"],
        isActive: true,
        createdAt: "2020-09-22T07:10:00Z",
        updatedAt: "2024-02-15T13:30:00Z",
      },
    ]); */

    //
    const result = await usersCollection
      .find({
        email: {
          $regex: /^\S+@\S+\.\S{2,}$/g,
        },
      })
      .toArray();

    console.log(result);

    console.log("Database selected: " + dbName);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

main();
