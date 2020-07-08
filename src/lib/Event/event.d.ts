// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AppEvent = object // { [key: string]: any } ? object

type AppEventListener<T> = (event: T) => void;

interface AppEventListenerMap {
  get<T>(x: T): Array<AppEventListener<T>> | undefined;
  set<T>(x: T, val: Array<AppEventListener<T>>): void;
}
