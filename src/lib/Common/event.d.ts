// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AppEvent = Record<string, any>

type AppEventListener = (event: AppEvent) => void;

interface AppEventListenerMap {
  get<T>(x: T): Array<AppEventListener> | undefined;
  set<T>(x: T, val: Array<AppEventListener>): void;
}
