import { FunctionComponent } from 'react';

export type FCWithoutChildren<P = {}> = FunctionComponent<
  P & { children?: never }
>;
