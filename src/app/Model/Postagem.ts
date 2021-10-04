import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem {
public id : number
public  date : Date
public titulo : string
public corpo : string
public ativo: boolean
public usuario: User
public tema : Tema
}
    