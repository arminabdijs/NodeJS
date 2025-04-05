// ✅ 4xx - Client Errors
// Indicates that there is an issue with the client’s request.
//
//     400 Bad Request: The request is invalid or malformed.
//     401 Unauthorized: Authentication is required.
//     402 Payment Required: Designed for payment processing but rarely used.
//     403 Forbidden: Access is denied even with authentication.
//     404 Not Found: The requested resource was not found (most common error).
//     405 Method Not Allowed: The HTTP method is not allowed for the resource.
//     406 Not Acceptable: The resource doesn’t meet the client's content requirements.
//     407 Proxy Authentication Required: Authentication through a proxy is needed.
//     408 Request Timeout: The request timed out.
//     409 Conflict: Conflict in request processing (e.g., database conflicts).
//     410 Gone: The resource has been permanently removed.
//     411 Length Required: The Content-Length header is required.
//     412 Precondition Failed: Precondition in the request headers failed.
//     413 Payload Too Large: The request payload is too large.
//     414 URL Too Long: The request URL is too long.
//     415 Unsupported Media Type: The media type is not supported.
//     416 Range Not Satisfiable: The requested range is not valid.
//     417 Expectation Failed: The server couldn’t meet the requirements in the Expect header.
//     418 I'm a teapot: A humorous status code from RFC 2324 for the “Hyper Text Coffee Pot Control Protocol.”
//     421 Misdirected Request: The request was directed to the wrong server.
//     422 Unprocessable Entity: The server can’t process the contained instructions.
//     423 Locked: The resource is locked (used in WebDAV).
//     424 Failed Dependency: The request failed due to a dependency on another request.
//     425 Too Early: The server is unwilling to process the request due to potential risks.
//     426 Upgrade Required: The client must switch to a different protocol.
//     428 Precondition Required: The request requires preconditions to be met.
//     429 Too Many Requests: The client has sent too many requests in a given timeframe.
//     431 Request Header Fields Too Large: Request headers are too large.
//     451 Unavailable For Legal Reasons: The content is unavailable due to legal restrictions.




// ✅ 4xx - خطاهای سمت کلاینت (Client Errors)
// نشان می‌دهد که مشکلی در درخواست کلاینت وجود دارد.
//
//     400 Bad Request: درخواست نامعتبر یا ناقص است.
//     401 Unauthorized: نیاز به احراز هویت دارید.
//     402 Payment Required: برای پردازش پرداخت طراحی شده، اما نادر است.
//     403 Forbidden: دسترسی غیرمجاز است حتی با احراز هویت.
//     404 Not Found: منبع درخواست‌شده پیدا نشد (رایج‌ترین خطا).
//     405 Method Not Allowed: متد HTTP استفاده‌شده مجاز نیست.
//     406 Not Acceptable: محتوا با استانداردهای کلاینت مطابقت ندارد.
//     407 Proxy Authentication Required: نیاز به احراز هویت از طریق پراکسی.
//     408 Request Timeout: زمان درخواست تمام شده است.
//     409 Conflict: تعارض در پردازش درخواست (مثلاً در دیتابیس).
//     410 Gone: منبع به طور دائمی حذف شده است.
//     411 Length Required: هدر Content-Length نیاز است.
//     412 Precondition Failed: پیش‌شرط‌های درخواست معتبر نیستند.
//     413 Payload Too Large: داده‌های ارسال‌شده بیش از حد مجاز هستند.
//     414 URL Too Long: طول URL بیش از حد مجاز است.
//     415 Unsupported Media Type: نوع داده پشتیبانی نمی‌شود.
//     416 Range Not Satisfiable: محدوده درخواستی خارج از بازه مجاز است.
//     417 Expectation Failed: سرور نتوانسته انتظارات درخواست را برآورده کند.
//     418 I'm a teapot: یک کد شوخی (در RFC 2324 برای پروتکل قهوه‌جوش HTTP).
//     421 Misdirected Request: درخواست به سرور اشتباهی هدایت شده است.
//     422 Unprocessable Entity: سرور نمی‌تواند داده‌های درخواست را پردازش کند.
//     423 Locked: منبع قفل شده است (در WebDAV).
//     424 Failed Dependency: وابستگی به درخواست دیگری که شکست خورده است.
//     425 Too Early: سرور نمی‌خواهد درخواست را به دلیل خطرات احتمالی پردازش کند.
//     426 Upgrade Required: کلاینت باید پروتکل خود را ارتقا دهد.
//     428 Precondition Required: نیاز به پیش‌شرط برای پردازش درخواست.
//     429 Too Many Requests: تعداد درخواست‌های بیش از حد مجاز.
//     431 Request Header Fields Too Large: هدرهای درخواست بیش از حد بزرگ هستند.
//     451 Unavailable For Legal Reasons: محتوا به دلایل قانونی در دسترس نیست
