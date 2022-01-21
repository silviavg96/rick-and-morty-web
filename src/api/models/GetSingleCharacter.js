import Model from "../Model";

class GetSingleCharacter extends Model {
    buildUrl ({ params, characterId }) {
        console.log('dngnjncscjn')
        return ['character', characterId, ...params];
    }
};

export default new GetSingleCharacter;