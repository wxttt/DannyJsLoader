(function(win){
    var head = document.getElementsByTagName('head')[0];
    var dLoader = {};
    dLoader.loadSource = function(type, url, callback){
        if(type === 'js'){
            loadJs(url, callback);
        }else if(type === 'css'){
            loadCss(url, callback);
        }else{
            throw   TypeError('source type must be js or css');
        }
    };
    var loadJs = function(url, callback){
        var script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        script.charset = 'UTF-8';

        if(script.readyState){
            script.onreadystatechange = function(){
                if(script.readyState === "loaded" || script.readyState === "complete"){
                    script.onreadystatechange = null;
                    if(callback){
                        callback();
                    }
                }
            };
        }else{
            script.onload = function(){
                if(callback){
                    callback();
                }
            };
        }
        script.onerror = function(){
            console.log('failed to load source at'+url);
            script.onerror = null;
        };

        try{
            head.appendChild(script);
        }catch(exp){
        }
    };
    var loadCss = function(url, callback){
        var css = document.createElement('link');
        css.href = url;
        css.rel = 'stylesheet';
        css.type = 'text/css';
        head.appendChild(css);
    };
    win.define = function(name, factory){
        if(typeof factory === 'string'||typeof factory === '')  win[name] = factory;
        else if(typeof factory === 'function')  win[name] = factory();
        else throw TypeError('wrong type');
    };
    win.dLoader = dLoader;
}(window));