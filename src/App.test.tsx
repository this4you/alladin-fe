import React from 'react';


const isEmptyObject = (obj: object): boolean => {
    return Object.entries(obj).every(([key, value]) => {
        if (value instanceof Object) return isEmptyObject(value)

        return !value
    })

}

test('renders learn react link', () => {
   const a = {
       i: undefined,
       g: '',
       a: {
           d: undefined,
           f: ''
       }
   };

   const actual = isEmptyObject(a);


    expect(actual).toBeTruthy();
});

//-dark-primary:#7066CB;-dark-background:#404147;-dark-blockColor:#222328;-dark-text:#F5F5F7;-dark-secondaryText:#7185AF