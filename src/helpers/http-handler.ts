
class Boom {
    public isBoom: boolean = true;
    constructor(isBoom) {
        this.isBoom = isBoom;
    }
    badImplementation(message) {
        // const err = internals.serverError(message, data, 500, exports.badImplementation);
        // err.isDeveloperError = true;
        // return err;
        return {
            data : {
                isBoom: this.isBoom,
                message : message
            }
        }
    }
}
export default new Boom(true)