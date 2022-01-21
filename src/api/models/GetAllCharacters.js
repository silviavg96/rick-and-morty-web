import Model from "../Model";

class GetAllCharacters extends Model {

    buildUrl ({ params }) {
        console.log('hola')
        return ['character', ...params];
    }
}


export default new GetAllCharacters;