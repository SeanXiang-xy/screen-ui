import * as components from "./src/components/index";

export * from "./src/components/index";

export default {
  install: (app: any) => {
    for (const comkey in components) {
      app.component(
        (components as any)[comkey].name,
        (components as any)[comkey]
      );
    }
  },
};
