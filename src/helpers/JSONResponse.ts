// class JSONResponse {
//     constructor(res, data, message) {
//     }

export default (res, data, message = 'Success') => {
    console.log('datadatadatadata',data);
    
    if (data && data.isBoom && data.isBoom == true) {
        const error = data.output.payload;
        const statusCode = data.output.statusCode;
        if (data.data != null) {
            error.data = data.data;
        }
        const errResponse = {
            statusCode: statusCode,
            Code: 0,
            message: error.message,
            data: {},
        };
        res.status(statusCode).json(errResponse)
    }
    else {
        const response = {
            statusCode: 200,
            Code: 1,
            message,
            data,
        };
        res.status(200).json(response);
    }
}

    // notAcceptable(res, message = 'not Acceptable') {

    //     // return new exports.Boom(message, { statusCode: 406, data, ctor: exports.notAcceptable });
    //     res.status(406).json({
    //         code: 406,
    //         message: message || 'success',
    //         data: {},
    //     });
    // };


    // static proxyAuthRequired(message, data) {

    //     return new exports.Boom(message, { statusCode: 407, data, ctor: exports.proxyAuthRequired });
    // };


    // static clientTimeout(message, data) {

    //     return new exports.Boom(message, { statusCode: 408, data, ctor: exports.clientTimeout });
    // };


    // static conflict(message, data) {

    //     return new exports.Boom(message, { statusCode: 409, data, ctor: exports.conflict });
    // };


    // static resourceGone(message, data) {

    //     return new exports.Boom(message, { statusCode: 410, data, ctor: exports.resourceGone });
    // };


    // static lengthRequired(message, data) {

    //     return new exports.Boom(message, { statusCode: 411, data, ctor: exports.lengthRequired });
    // };


    // static preconditionFailed(message, data) {

    //     return new exports.Boom(message, { statusCode: 412, data, ctor: exports.preconditionFailed });
    // };


    // static entityTooLarge(message, data) {

    //     return new exports.Boom(message, { statusCode: 413, data, ctor: exports.entityTooLarge });
    // };


    // static uriTooLong(message, data) {

    //     return new exports.Boom(message, { statusCode: 414, data, ctor: exports.uriTooLong });
    // };


    // static unsupportedMediaType(message, data) {

    //     return new exports.Boom(message, { statusCode: 415, data, ctor: exports.unsupportedMediaType });
    // };


    // static rangeNotSatisfiable(message, data) {

    //     return new exports.Boom(message, { statusCode: 416, data, ctor: exports.rangeNotSatisfiable });
    // };


    // static expectationFailed(message, data) {

    //     return new exports.Boom(message, { statusCode: 417, data, ctor: exports.expectationFailed });
    // };
    // static badData(message, data) {

    //     return new exports.Boom(message, { statusCode: 422, data, ctor: exports.badData });
    // };
    // static locked(message, data) {

    //     return new exports.Boom(message, { statusCode: 423, data, ctor: exports.locked });
    // };
    // static failedDependency(message, data) {
    //     return new exports.Boom(message, { statusCode: 424, data, ctor: exports.failedDependency });
    // };
    // static tooEarly(message, data) {
    //     return new exports.Boom(message, { statusCode: 425, data, ctor: exports.tooEarly });
    // };
    // static preconditionRequired(message, data) {
    //     return new exports.Boom(message, { statusCode: 428, data, ctor: exports.preconditionRequired });
    // };
    // static tooManyRequests(message, data) {
    //     return new exports.Boom(message, { statusCode: 429, data, ctor: exports.tooManyRequests });
    // };
    // static illegal(message, data) {
    //     return new exports.Boom(message, { statusCode: 451, data, ctor: exports.illegal });
    // };
    // // 5xx Server Errors
    // static badImplementation(message, data) {

    //     const err = internals.serverError(message, data, 500, exports.badImplementation);
    //     err.isDeveloperError = true;
    //     return err;
    // };

    // static notImplemented(message, data) {

    //     return internals.serverError(message, data, 501, exports.notImplemented);
    // };


    // static badGateway(message, data) {

    //     return internals.serverError(message, data, 502, exports.badGateway);
    // };


    // static serverUnavailable(message, data) {

    //     return internals.serverError(message, data, 503, exports.serverUnavailable);
    // };


    // static gatewayTimeout(message, data) {

    //     return internals.serverError(message, data, 504, exports.gatewayTimeout);
    // };
// }

// export default JSONResponse;