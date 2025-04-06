const express = require("express");
const bodyParser = require("body-parser");
const { isValidObjectId } = require("mongoose");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
// const booksRouter = require("./routes/books");
const usersModel = require("./models/users");
const booksModel = require("./models/books");
const rentsModel = require("./models/rents");
const registerUserValidator = require("./Validators/registerUser");
const registerBookValidator = require("./Validators/registerBook");
const checkLogin = require("./Validators/loginValidator");
const { object } = require("webidl-conversions");
const { ObjectId } = require("bson");

require("./configs/db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/books", async (req, res) => {
  try {
    const finderAllBooks = await booksModel.find({});

    if (!finderAllBooks || finderAllBooks.length === 0) {
      return res.status(404).json({ message: "Books Not Found" });
    }

    res.status(200).json(finderAllBooks);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/api/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (isValidObjectId(id)) {
      const finderBook = await booksModel.findById(id);
      if (!finderBook) {
        return res.status(404).json({ message: "Book Not Found" });
      }
      res.status(200).json(finderBook);
    } else {
      res.status(400).json({ message: "Invalid Book ID" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const finderAllUsers = await usersModel.find({});
    if (!finderAllUsers || finderAllUsers.length === 0) {
      return res.status(404).json({ message: "Users Not Found" });
    }
    res.status(200).json(finderAllUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (isValidObjectId(id)) {
      const finderUser = await usersModel.findById(id);
      if (!finderUser) {
        return res.status(404).json({ message: "User Not Found" });
      }
      res.status(200).json(finderUser);
    } else {
      res.status(400).json({ message: "Invalid User ID" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

app.delete("/api/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (isValidObjectId(id)) {
      const finderBook = await booksModel.findByIdAndDelete(id);
      if (!finderBook) {
        return res.status(404).json({ message: "Book Not Found" });
      }
      res.status(200).json({ message: "Book Deleted Successfully" });
    } else {
      res.status(400).json({ message: "Invalid Book ID" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

app.delete("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (isValidObjectId(id)) {
      const finderUser = await usersModel.findByIdAndDelete(id);
      if (!finderUser) {
        return res.status(404).json({ message: "User Not Found" });
      }
      res.status(200).json({ message: "User Deleted Successfully" });
    } else {
      res.status(400).json({ message: "Invalid User ID" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/api/books", async (req, res) => {
  try {
    const validationResult = registerBookValidator(req.body);

    if (validationResult !== true) {
      return res.status(422).json(validationResult);
    }

    let { title, author, publication_year, genre, price, free } = req.body;

    const result = await booksModel.create({
      title,
      author,
      publication_year,
      genre,
      price,
      free,
    });

    res.status(201).json({
      message: "New Book create successfully",
      result,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const validationResult = registerUserValidator(req.body);

    if (validationResult !== true) {
      return res.status(422).json(validationResult);
    }

    let { name, username, email, password, address, phone, role, crime } =
      req.body;

    const result = await usersModel.create({
      name,
      email,
      username,
      password,
      address,
      phone,
      role,
      crime,
    });

    res.status(201).json({
      message: "New user create successfully",
      result,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/api/users/login", async (req, res) => {
  try {
    const validation = checkLogin(req.body);

    if (validation !== true) {
      return res.status(422).json(validation);
    }

    const { username, email, phone, password } = req.body;

    if (!username && !email && !phone) {
      return res
        .status(400)
        .json({ message: "username، email or phone required" });
    }

    const finderUser = await usersModel.findOne({
      $or: [{ username }, { email }, { phone }],
    });

    if (!finderUser) {
      return res.status(404).json({ message: "user not found" });
    }

    if (finderUser.password !== password) {
      return res.status(401).json({ message: "wrong password" });
    }

    console.log(finderUser);

    res.status(200).json({
      message: "Login Successfully",
      user: {
        name: finderUser.name,
        username: finderUser.username,
        email: finderUser.email,
        address: finderUser.address,
        phone: finderUser.phone,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/api/books/rent", async (req, res) => {
  try {
    const { book_id, user_id } = req.body;

    if (!book_id || !user_id) {
      return res.status(400).json({ message: "All Fields Required" });
    }

    if (
      !mongoose.Types.ObjectId.isValid(book_id) ||
      !mongoose.Types.ObjectId.isValid(user_id)
    ) {
      return res.status(400).json({ message: "Invalid Book or User ID" });
    }

    const finderBook = await booksModel.findById(book_id);

    if (!finderBook) {
      return res.status(404).json({ message: "Book Not Found" });
    }

    const finderBookAndUpdate = await booksModel.findOneAndUpdate(
      { _id: finderBook._id },
      { $set: { free: false } },
      { new: true }
    );

    if (!finderBookAndUpdate) {
      return res.status(404).json({ message: "Book Not Found" });
    }

    const finderUser = await usersModel.findById(user_id);
    if (!finderUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const rentDateObject = new Date();

    const maxReturnDate = new Date(rentDateObject);
    maxReturnDate.setMonth(rentDateObject.getMonth() + 1);

    const result = await rentsModel.create({
      user_id: finderUser._id,
      book_id: finderBook._id,
      rentDate: rentDateObject,
      returnDate: maxReturnDate,
    });

    res.status(201).json({
      message: "Book Rent Successfully",
      result,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

app.put("/api/books/back/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (isValidObjectId(id)) {
      const finderBook = await booksModel.findById(id);
      if (!finderBook) {
        return res.status(404).json({ message: "Book Not Found" });
      }
      const finderBookAndUpdate = await booksModel.findOneAndUpdate(
        { _id: finderBook._id },
        { $set: { free: true } },
        { new: true }
      );

      const findAndDeleteRents = await rentsModel.findOneAndDelete({
        book_id: finderBook._id,
      });

      if (!findAndDeleteRents) {
        return res
          .status(404)
          .json({ message: "Book Not Found in collection rent" });
      }

      if (!finderBookAndUpdate) {
        return res.status(404).json({ message: "Book Not Found" });
      }

      res.status(200).json({ message: "Book Return Successfully" });
    } else {
      res.status(400).json({ message: "Invalid Book ID" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

app.put("/api/books/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid Book ID" });
    }

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "No fields to update" });
    }
    const allowedFields = [
      "title",
      "author",
      "publication_year",
      "genre",
      "price",
      "free",
    ];
    const updateData = {};

    allowedFields.forEach((field) => {
      if (req.body[field]) {
        updateData[field] = req.body[field];
      }
    });

    const InvalidFields = Object.keys(req.body).filter(
      (field) => !allowedFields.includes(field)
    );
    if (InvalidFields.length > 0) {
      return res
        .status(400)
        .json({ message: `Invalid fields: ${InvalidFields.join(", ")}` });
    }

    const finderBookAndUpdate = await booksModel.findOneAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    );

    if (!finderBookAndUpdate) {
      return res.status(404).json({ message: "Book Not Found" });
    }

    res.status(200).json({ message: "Book Updated Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.put("/api/users/upgrade/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid User ID" });
    }

    const finderUser = await usersModel.findById(id);

    if (!finderUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    if (finderUser.role === "ADMIN") {
      return res.status(400).json({ message: "User is already an admin" });
    }

    const finderUserAndUpdate = await usersModel.findOneAndUpdate(
      { _id: finderUser._id },
      { $set: { role: "ADMIN" } },
      { new: true }
    );

    if (!finderUserAndUpdate) {
      return res.status(404).json({ message: "User Not Found" });
    }

    res.status(200).json({ message: "User Updated Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.put("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid User ID" });
    }

    const { crime } = req.body;

    const finderUserAndUpdate = await usersModel.findOneAndUpdate(
      { _id: id },
      { $set: { crime: crime } },
      { new: true }
    );

    if (!finderUserAndUpdate) {
      return res.status(404).json({ message: "User Not Found" });
    }

    res
      .status(200)
      .json({
        message: "User Updated Successfully",
        user: finderUserAndUpdate,
      });
  } catch (err) {
    console.error(err); 
    res.status(500).json({ message: "Internal Server Error", error: err.message }); // ارسال پیام خطا
    }
});

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});
