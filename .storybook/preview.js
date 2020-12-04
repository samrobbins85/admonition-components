export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <div className="max-w-ch64 mx-auto px-2">
      <Story />
    </div>
  ),
];
