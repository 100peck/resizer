import {createContext} from 'react';

import { Size } from '../types/types';

export interface ContextValue {
    size: Size | null;
}

export const Context = createContext<ContextValue>({ size: null });

export const { Provider, Consumer } = Context;
