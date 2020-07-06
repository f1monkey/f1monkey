// type AppEvent = {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// new (...args: any[]): any;
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AppEvent = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): any;
};

type AppEventListener = <T extends AppEvent>(event: T) => void;
