/*Modules are used to segment and sort files.
We send a file containing a program to other files with the same name using the export ,
and in another file we call it using the import method.
We call that concept from the address of that file,
and for this, in the browser of this module,
we enter this expression type="module" in the script tag.*/

import {number, userName as name} from "./utils/funcs.js"

console.log(number)
console.log(name)

//----------------------------------------------------------------
import * as comm from "./utils/comments.js"

console.log(comm.number)
console.log(comm.userName)


// ----------------------------------------------------------------
import {sum1} from "./utils/courses.js";

console.log(sum1(12, 12))


// ----------------------------------------------------------------
import {sum} from "./utils/users.js";

console.log(sum(12, 12))