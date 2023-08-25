---
to: src/components/<%= componentName %>/<%= componentName %>.stories.tsx
---
import { <%= componentName %> } from "./<%= componentName %>";

const description = ``;

export default {
  component: <%= componentName %>,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const Default = {
  args: {},
};
