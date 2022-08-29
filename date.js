//jshint esversion:6
module.exports.Date = function() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: 'numeric',
        month: 'long',
    };
    return today.toLocaleDateString("en-US", options);
};

module.exports.Day = function() {
    const today = new Date();
    const options = {
        weekday: "long",
    };
    return today.toLocaleDateString("en-US", options);
};
module.exports.SpanishDay = function() {
    const today = new Date();
    const options = {
        weekday: "long",
    };
    return today.toLocaleDateString('es-ES', options);
};
module.exports.SpanishDate = function() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: 'numeric',
        month: 'long',
    };
    return today.toLocaleDateString('es-ES', options);
};