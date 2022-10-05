//Using break

for (let i = 0; i < 15; i++) {
  if (i === 12) {
    break;
  }
  console.log(i);
}

//Using continue

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log("Hi what's up");
    continue;
  }
  console.log(i);
}
