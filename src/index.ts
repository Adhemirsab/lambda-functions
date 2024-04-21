exports.handler = async (event: unknown): Promise<string> => {
  console.log(event);
  return "Hello from Lambda!";
};
