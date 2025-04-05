// ✅ 3xx - Redirection Responses
// Indicates that the client must take additional actions to complete the request.
//
//     300 Multiple Choices: Multiple options are available for the resource.
//     301 Moved Permanently: The resource has been permanently moved to a new URL.
//     302 Found: The resource is temporarily located at a different URL.
//     303 See Other: The response can be found at another URL (used with POST → GET redirection).
//     304 Not Modified: The resource hasn’t changed; use the cached version.
//     305 Use Proxy: A proxy is required to access the resource (rarely used).
//     306 (Unused): No longer used; previously reserved for proxy-related behavior.
//     307 Temporary Redirect: Temporary redirect without changing the HTTP method.
//     308 Permanent Redirect: Permanent redirect like 301, but preserves the HTTP method.




// ✅ 3xx - تغییر مسیر (Redirection Responses)
// نشان می‌دهد که کلاینت باید اقدام بیشتری برای تکمیل درخواست انجام دهد.
//
//     300 Multiple Choices: چندین گزینه برای پاسخ وجود دارد.
//     301 Moved Permanently: منبع به طور دائم به آدرس جدید منتقل شده است.
//     302 Found: منبع موقتاً به آدرس جدیدی منتقل شده است.
//     303 See Other: پاسخ باید از یک URL دیگر دریافت شود (POST → GET).
//     304 Not Modified: محتوای منبع تغییر نکرده؛ از کش (Cache) استفاده کنید.
//     305 Use Proxy: باید از یک پراکسی برای دسترسی استفاده کنید (غیررایج).
//     306 (Unused): دیگر استفاده نمی‌شود، اما قبلاً برای تغییر پروکسی بود.
//     307 Temporary Redirect: تغییر مسیر موقت بدون تغییر متد HTTP.
//     308 Permanent Redirect: تغییر مسیر دائمی مانند 301، اما متد HTTP حفظ می‌شود