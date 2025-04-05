// module ---><---controller---><---View
//MVC

// MVC Architecture in backend development works like this:
//
// Model:
//     Manages data and interacts with the database (e.g., defining schemas in MongoDB or tables in SQL).
//
// View:
//     Displays data to the user. In the backend, this is usually JSON responses or templates like EJS for rendering HTML.
//
// Controller:
//     Handles incoming HTTP requests, processes them, interacts with the Model, and sends the response to the View.

//---------------------------

// Workflow in the Backend (e.g., with Express):

//     The user sends a request (like GET/POST).
//     The Controller processes the request.
//     The Model fetches or updates data in the database.
//     The Controller sends the result to the View (usually as JSON).
//------------------------------------------------------------------------------------------------------------------------------------

//
// معماری MVC در بک‌اند به شکل زیر عمل می‌کند:
//
//     Model (مدل):
// مدیریت داده‌ها و تعامل با دیتابیس (مثلاً تعریف اسکیمای MongoDB یا جداول SQL).
//
// View (نما):
// نمایش داده به کاربر (در بک‌اند معمولاً JSON یا قالب‌هایی مثل EJS برای رندر صفحات).
//
// Controller (کنترلر):
// دریافت درخواست‌ها (HTTP Requests)، پردازش آن‌ها، فراخوانی مدل و ارسال پاسخ به ویو.


//---------------------------
// جریان کار در بک‌اند (مثلاً با Express):
//
//
//     کاربر درخواست (مثل GET/POST) ارسال می‌کند.
//     Controller درخواست را پردازش می‌کند.
//     Model داده را از دیتابیس می‌گیرد یا ذخیره می‌کند.
//     Controller نتیجه را به View می‌فرستد (معمولاً JSON).