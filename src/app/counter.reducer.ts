import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, multiple2, divide2 } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiple2, (state) => state * 2),
  on(divide2, (state) => state / 2),
  on(reset, (state) => 0)
);



/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/