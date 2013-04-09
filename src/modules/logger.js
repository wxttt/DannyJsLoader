define('logger',function(){
    var logger = {};
    var _slice = [].slice;
    var enabled = true,
        _level = 3,
        _Debug = 3,
        _Info = 2,
        _Warn = 1;
    var output = function(){
        if(!enabled) return;
        var action = arguments[0];
        var args = arguments.length>=2?_slice.call(arguments,1):[];
        args.unshift(action+':');
        console[action.toLowerCase()].apply(console, args);
    };
    logger.debug = function(){
        output('DEBUG', arguments);
    };
    logger.info = function(){
        output('INFO', arguments);
    };
    logger.warn = function(){
        output('WARN', arguments);
    };
    logger.error = function(){
        output('ERROR', arguments);
    };
    return logger;
});