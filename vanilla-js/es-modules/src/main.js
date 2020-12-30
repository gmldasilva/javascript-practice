import U, { printName as pn, printAge as pa} from './user.js'

const user = new U('Bob',11)
console.log(user)
pn(user)
pa(user)