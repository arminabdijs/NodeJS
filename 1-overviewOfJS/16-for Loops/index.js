for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
for (; i < 3; ) {
  console.log(i++);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

label: for (let i = 0; i < 10; i++) {
    if (i % 2) {
        for (i; i > 5;) {
            break label;
            console.log("hello");
        }
    }
}