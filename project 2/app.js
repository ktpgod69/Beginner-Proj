let data = [
    {
        name: 'Levi',
        age: '30'
    },
    {
        name: 'Chris',
        age: '26'
    },
    {
        name: 'Xavier',
        age: '19'
    },
    {
        name: 'Zeke',
        age: '33'
    },
    {
        name: 'Ariana',
        age: '25'
    },
    {
        name: 'Liv',
        age: '41'
    },
    {
        name: 'Kim',
        age: '43'
    },
]

const info = document.querySelector('#info');

let details = data.map(function(item) {
return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');
