import { people } from '../src/people';

describe('Test group', () => {
    it('can be altered', () => {
        expect(people.length).toEqual(5);
        const testPerson = { first: "Joe", last: "Bennett" }
        people.push(testPerson);
        expect(people.length).toEqual(6);
        expect(people[5].first).toEqual("Joe");

        const p2 = { first: "Mickey", last: "Mouse" };
        people.unshift(p2);
        expect(people.length).toEqual(7);
        expect(people[0].last).toEqual("Mouse")

        people.pop();
        expect(people.length).toEqual(6);
        expect(people[5].first).not.toEqual("Joe");

        people.shift();
        expect(people.length).toEqual(5);
        expect(people[0].last).toEqual("Bennett");
    });

    it('can loop two ways', () => {
        // people.forEach(console.log)
    });
});
