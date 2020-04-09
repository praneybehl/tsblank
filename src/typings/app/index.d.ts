declare module '*.local.css' {
  const classNames: { [key: string]: string };

  export default classNames;
}

declare module '*.global.css' {}
