// import { TestBed, async } from '@angular/core/testing';
// import { NgxsModule, Store } from '@ngxs/store';
// import { BeatifyState, BeatifyStateModel } from './beatify.state';

// describe('Beatify store', () => {
//   let store: Store;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [NgxsModule.forRoot([BeatifyState])]
//     }).compileComponents();
//     store = TestBed.get(Store);
//   }));

//   it('should create an action and add an item', () => {
//     const expected: BeatifyStateModel = {
//       items: ['item-1']
//     };
//     store.dispatch(new BeatifyAction('item-1'));
//     const actual = store.selectSnapshot(BeatifyState.getState);
//     expect(actual).toEqual(expected);
//   });

// });
