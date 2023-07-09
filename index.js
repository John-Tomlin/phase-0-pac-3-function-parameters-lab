function introduction(name){
var message = 'Hi, my name is ' + name + '.';
    
    if ("Aki" === name){
        return message;
    }
    else if ("Samip" === name){
        return message;
    }
}

function introductionWithLanguage(name, language){
    var message = 'Hi, my name is ' + name + ' and I am learning to program in '+ language + '.';

    if ("Aki" === name && "Ember.js" === language){
        return message;
    }
    else if ("Samip" === name && "React" === language){
        return message;
    }
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
    var message = 'Hi, my name is ' + name + ' and I am learning to program in '+ language + '.';

    if ("Gracie" === name)
    {
        return message;
    }
}