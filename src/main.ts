import users from '@/controllers/http/Users'

let total: number
total = 10.5

let isOpen: boolean

isOpen = true

console.log(total);

console.log(isOpen)

// void

function showInformation(name: string): void {
    console.log(name);
}

showInformation('Jairo Matos de Abreu')

// never 

function error(): never {
    throw new Error('Error');
}

//Array, tuple, enum


//existem duas formas, a segunda é a mais popular
let items: Array<number>

items = [1, 2, 3, 4, 5]

console.log(items);

let items2: string[]

items2 = ['1', '2', '3', 'Metralha Lanche']

console.log(items2);


//tuple
let items3: [number, string, boolean]

items3 = [1, 'Jairo', false]

console.log(items3);

//enum

enum Color {
    white = '#fff',
    black = '#000'
}

let white: Color = Color.white

console.log('color: ', white);

// type union

let age: number | string

age = 22

age = 'vinte e dois'

console.log(age);

function myPet(pet: 'dog' | 'cat') {
    console.log(pet);
}

myPet('cat')

// type alias

type Pet = 'dog' | 'cat' | 'zebra' | 'papagaio'

function displayPet(pet: Pet) {
    console.log(pet);
}

displayPet('papagaio')


// type Assertion

//const inputName = document.querySelector("#name") as HTMLInputElement
//
//inputName.value

// Interfaces

// mostrar a cidade do usuário

type UF = 'AM' | 'SP' | 'PA'

interface User {
    name: string,
    address?: {
        city: string,
        UF: UF
    },
}

function showCity(user: User) {
    return user.address?.city
}

const response = showCity({
    name: 'Jairo',
})

console.log(response);

interface Pessoa {
    name?: string,
    readonly age: number
}

let user: Pessoa = {
    name: 'Jairo Abreu',
    age: 22
}

//user.age = 22

function showInfoPessoa(pessoa: Pessoa) {
    return pessoa.name?.toLocaleLowerCase()
}

console.log(showInfoPessoa({name: 'Abreu', age: 22}));



// extends, implements


//extends

interface Veiculo {
    rodas: number,
    acelerar: () => void
    frear?: () => void
}

interface Moto extends Veiculo {
    capacete: boolean
    empinar: () => void
}

let bross: Moto

// implements

class CriarVeiculo implements Veiculo {
    rodas: number

    constructor(rodas: number) {
        this.rodas = rodas
    }

    acelerar() {
        console.log('acelerar');
    }

}


//pick & omit

interface Post {
    id: number
    title: string
    description: string
}

type PostPreview = Pick<Post, 'id' | 'description'>

let post: PostPreview

type PostPreview2 = Omit<Post, 'id' | 'description'>

let post2: PostPreview2


//------------------------------------------

users()

//Decorators
function logger(text: string) {
    return (target: any) => {
        console.log(target, text);
    }
}

function log(target: any) {
    console.log(target)
}

@logger('Cataline')
class API { }

////Decorators - retornar o valor da versão de uma api

function setApiVersion(apiVersion: string) {
    return (constructor: any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

@setApiVersion('1.0.0')
class APII { }

console.log(new APII());