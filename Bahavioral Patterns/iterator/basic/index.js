const users = [
  { name: "Adam", surname: "Leszczyk" },
  { name: "Filip", surname: "Konopny" },
  { name: "Joanna", surname: "Slawicka" },
];

function iterate(arr, callback, scope) {
  scope = scope || arr;

  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];
    callback.call(scope, index, arr[index]);
  }
}

iterate(users, function (index, u) {
  console.log("index: ", index, "user: ", u.name);
});
