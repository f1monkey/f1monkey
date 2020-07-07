// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AppEvent = { [key: string]: any }

type AppEventListener<T> = <T extends AppEvent>(event: T) => void;
