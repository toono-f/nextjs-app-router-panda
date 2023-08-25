const inputValidator = (input) => {
  if (input !== "") {
    return true;
  }
};

module.exports = [
  {
    type: "input",
    name: "componentName",
    message:
      "コンポーネント名をパスカルケースで入力してください。(例: ButtonSample)",
    validate: inputValidator,
  },
];
