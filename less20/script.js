const person = {
    name: {
        first: 'Bob',
        second: 'Smith',
    },
    age: 32,
    gender: 'male',
    interests: {
        first: 'music',
        last: 'skiing',
    },
    bio: function () {
        alert(
            this.name.first +
            ' ' +
            this.name.last +
            ' is ' +
            this.age +
            ' years old. He likes ' +
            this.interests.first +
            ' and ' +
            this.interests.second +
            '.',
        );
    },
    greeting: function () {
        alert('Hi! i`m ' + this.name[0] + '.');
    },
};