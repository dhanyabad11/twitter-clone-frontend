module.exports = {
  schema: "http://localhost:8000/graphql",
  documents: ["src/**/*.graphql"],
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
      ],
    },
  },
};
