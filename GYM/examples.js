
const darko = 1
console.log(darko)


const darko1 = 'test'
console.log(darko1)


const darko2 = ['test','123']
console.log(darko2)

const darko3 = {test:123}
console.log(darko3)

const darko = {
    bojan: 123,
    goran: 'test',
    ogi: true,
    stefan : {
        ime: 'stef123'
    }

}

console.log(darko.bojan)  = 123
console.log(darko.goran)  = 'test'
console.log(darko.ogi)  = true
console.log(darko.stefan.ime)  = 'stef123'


data = {
    results : [
        {
            user: {
                name: 'user1'
            }
        },{
            user: {
                name: 'user2'
            }
        },{
            user: {
                name: 'user3' --------
            }
        },{
            user: {
                name: 'user4'
            }
        },{
            user: {
                name: 'user5'
            }
        }
        
    ]
}
console.log(data.results) = [
    {
        user: {
            name: 'user1'
        }
    },{
        user: {
            name: 'user2'
        }
    },{
        user: {
            name: 'user3' --------
        }
    },{
        user: {
            name: 'user4'
        }
    },{
        user: {
            name: 'user5'
        }
    }
    
]
console.log(data.results[2]) = { user : {name: 'user3' } } 
console.log(data.results[2].user) = {name: 'user3' }
console.log(data.results[2].user.name) = 'user3'


const test = {

    data: {}
}

const darko = {
    name: 'darko123'
}

test.data = darko

console.log(test.data.name) = 'darko123''


